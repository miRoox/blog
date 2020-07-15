---
layout: post
title: "基于Qt实现类似Notepad++的标签页拖放功能"
date: 2017-08-16 11:31:23
categories: "代码编程"
tag: ["编程", "Qt", "功能模拟", "拖放"]
---

在我的常用软件中，Google Chrome 和 Notepad++ 都可以做到拖拽标签页在标签栏移动，在两个窗口间移动，以及创建新的窗口。作为 [这个项目](https://github.com/miRoox/Multiple-Document-Editor) 的一部分，打算实现一个功能类似的 Tab Widget 。

<!--more-->

### 设计目标

Google Chrome 和 Notepad++ 的拖放标签页功能基本上是类似的，但细节上也略有差别

|Google Chrome| Notepad++|
|:------------|----------:|
|标签栏内移动标签时是平滑过渡的|标签栏内移动标签时没有过渡动画|
|两个窗口间移动根据释放的位置插入到标签栏|两窗口间移动只是简单附加到标签栏最后|
|标签移动到标签栏外立即产生一个新窗口|在 Notepad++ 窗口外释放鼠标产生一个新窗口|
|移动产生的新窗口不是独立的进程|移动产生的新窗口是独立的进程|

可以看出 Google Chrome 和 Notepad++ 功能上各有千秋，综合一下两者各自的优点并考虑可实现性，基本的设计目标为：

1. 在标签栏内移动标签可以改变标签的顺序，且是平滑过渡。（事实上 Qt 自带的 `QTabWidget` 在 `setMovable(true)` 后就是这种效果。）
2. 在两窗口间移动时，如果释放点在标签栏上，就根据释放的位置插入标签栏，否则附加到标签栏的最后。
3. 拖拽标签到主窗口外释放鼠标产生一个新窗口，且新窗口是独立的进程。如果新窗口不是独立的进程，那问题就简化了一大半，而且这样的例子网上也有很多，如：[QTabWidget 实现类似QQ聊天窗口](http://blog.csdn.net/hai200501019/article/details/8987379) ）

当然，我们还需要一个具体的情境。出于简单考虑，以多文档浏览器为例，使用只读的 `QTextBrowser` 作为标签页，其 `source` 属性还可以用来保存文件路径，十分便利。

### 设计思路及实践过程

显然，设计目标1是很容易满足的，只要 `tabWidget->setMovable(true)` ，因此把重点放在目标2、3上。

首先想到的当然是参考现有的源码，考虑到 Chromium 太过复杂，于是选择参考了 Notepad++ 的 [源码](https://github.com/notepad-plus-plus/notepad-plus-plus/blob/master/PowerEditor/src/WinControls/TabBar/TabBar.cpp) 然而发现里面依赖于一些诸如 `::WindowFromPoint()` 、`::GetClassName()` 之类的Win32函数，旋即放弃了这条道路。

考虑将目标的问题分解。基本的，移动这个操作实际上是创建和删除的复合。对于 `QTabWidget` ，虽然提供了`QTabWidget::addTab()` 、`QTabWidget::insertTab()` 之类的创建函数，但 `QTabWidget::removeTab()` 并不实际上销毁对应的页面，因此还需要一个**确实**能删除标签页的函数。

定义 `QTabWidget` 的子类 `MyTabWidget`

*（以下所有代码中的省略号 `...` 都表示我们目前不关心这些部分，其细节将在后面逐渐补全）*

```cpp
//mytabwidget.h
#ifndef MYTABWIDGET_H
#define MYTABWIDGET_H

#include <QTabWidget>

class MyTabWidget : public QTabWidget
{
    Q_OBJECT

public:
    MyTabWidget(QWidget * parent = Q_NULLPTR);
    ~MyTabWidget() {}
    void removeTabActually(int index);
    ...
};

#endif // MYTABWIDGET_H
```

实现删除标签页的方法

```cpp
//mytabwidget.cpp
#include "mytabwidget.h"
...

void MyTabWidget::removeTabActually(int index)
{
    widget(index)->deleteLater();
    removeTab(index);
}

...
```

虽然现在看上去没有必要派生一个新类 `MyTabWidget` ，但这个类在后面还会有其它用途。

接下来考虑拖放如何传递数据。最容易想到的当然是 `QDrag` ，而且我们知道文本编辑器通常通过传递 URLs 来实现拖放打开文件。类似地，我们也可以借助 URL 来传递拖放标签页的信息。

由于目标2中对释放点在标签栏上和其它地方有不同要求，因此对标签栏和主窗口分别重新实现 `dragEnterEvent()` 和 `dropEvent()` 。

主窗口很容易处理

```cpp
//mainwindow.h
#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

class QString;

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow() {}
    void openFile(QString fileName);
    void openFileAt(QString fileName, int tabIndex);
    ...
protected:
    void dragEnterEvent(QDragEnterEvent *event) override;
    void dropEvent(QDropEvent *event) override;
    ...
};

#endif // MAINWINDOW_H
```

```cpp
//mainwindow.cpp
#include "mainwindow.h"
#include "mytabwidget.h"
#include <QUrl>
#include <QMimeData>
#include <QDragEnterEvent>
#include <QDropEvent>
...

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent)
{
    ...
    setAcceptDrops(true);
    ...
}

...

void MainWindow::dragEnterEvent(QDragEnterEvent *event)
{
    if(event->mimeData()->hasUrls())
        event->acceptProposedAction();
    else event->ignore();
}

void MainWindow::dropEvent(QDropEvent *event)
{
    const QMimeData * mimeData = event->mimeData();
    if(mimeData->hasUrls()) {
        for (const QUrl& url : mimeData->urls()) {
            openFile(url.toLocalFile());
        }
        event->acceptProposedAction();
    }
    else {
        event->ignore();
    }
}
```

而对于标签栏，借助 Qt 的信号-槽机制同样也不难实现

```cpp
//mytabbar.h
#ifndef MYTABBAR_H
#define MYTABBAR_H

#include <QTabBar>

class QString;

class MyTabBar : public QTabBar
{
    Q_OBJECT

public:
    MyTabBar(QWidget * parent = Q_NULLPTR);
    ~MyTabBar() {}

signals:
    void openFileRequest(QString/*fileName*/,int/*tabIndex*/);
    ...
protected:
    void dragEnterEvent(QDragEnterEvent *event) override;
    void dropEvent(QDropEvent *event) override;
    ...
};

#endif // MYTABBAR_H
```

```cpp
//mytabbar.cpp
#include "mytabbar.h"
#include <QUrl>
#include <QMimeData>
#include <QDragEnterEvent>
#include <QDropEvent>

MyTabBar::MyTabBar(QWidget *parent)
    : QTabBar(parent)
{
    setMovable(true);
    setAcceptDrops(true);
}

...

void MyTabBar::dragEnterEvent(QDragEnterEvent *event)
{
    if(event->mimeData()->hasUrls())
        event->acceptProposedAction();
    else event->ignore();
}

void MyTabBar::dropEvent(QDropEvent *event)
{
    const QMimeData * mimeData = event->mimeData();
    if(mimeData->hasUrls()) {
        for (const QUrl& url : mimeData->urls()) {
            emit openFileRequest(url.toLocalFile(),tabAt(event->pos()));
        }
        event->acceptProposedAction();
    }
    else {
        event->ignore();
    }
}

...
```

注意到 `MyTabBar` 的信号 `void MyTabBar::openFileRequest(QString/*fileName*/,int/*tabIndex*/)` 与`MainWindow` 的函数 `void MainWindow::openFileAt(QString fileName, int tabIndex)` 间参数的对应关系，显然要将他们连接起来。不过在此之前，我们还需要 `MyTabWidget` 做一个中继，于是

```cpp
//mytabwidget.h
#ifndef MYTABWIDGET_H
#define MYTABWIDGET_H

#include <QTabWidget>

class MyTabWidget : public QTabWidget
{
    Q_OBJECT

public:
    MyTabWidget(QWidget * parent = Q_NULLPTR);
    ~MyTabWidget() {}
    void removeTabActually(int index);

signals:
    void openFileRequest(QString/*fileName*/,int/*tabIndex*/);
    ...
};

#endif // MYTABWIDGET_H
```

```cpp
//mytabwidget.cpp
#include "mytabwidget.h"
#include "mytabbar.h"

MyTabWidget::MyTabWidget(QWidget * parent)
    : QTabWidget(parent)
{
    auto mTabBar = new MyTabBar(this);
    setTabBar(mTabBar);

    connect(mTabBar,&MyTabBar::openFileRequest,this,&MyTabWidget::openFileRequest);
    ...
}

void MyTabWidget::removeTabActually(int index)
{
    widget(index)->deleteLater();
    removeTab(index);
}
```

然后在主窗口中连接信号

```cpp
//mainwindow.cpp
#include "mainwindow.h"
#include "mytabwidget.h"
#include <QTextBrowser>
#include <QMessageBox>
#include <QFileInfo>
#include <QFile>
#include <QTextStream>
#include <QUrl>
#include <QMimeData>
#include <QDragEnterEvent>
#include <QDropEvent>
...

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent)
{
    ...
    auto tabWidget = new MyTabWidget(this);
    setCentralWidget(tabWidget);
    setAcceptDrops(true);
    connect(tabWidget,&MyTabWidget::openFileRequest,this,&MainWindow::openFileAt);
    ...
}

void MainWindow::openFile(QString fileName)
{
    return openFileAt(fileName,-1);
    //If index is out of range, the tab is simply appended.
    //see http://doc.qt.io/qt-5/qtabwidget.html#insertTab
}

void MainWindow::openFileAt(QString fileName, int tabIndex)
{
    QFile file(fileName);
    if(! file.open(QFile::ReadOnly | QFile::Text))
    {
        QMessageBox::warning(this,tr("Error"),
                             tr("Cannot open file %1:\n%2").arg(fileName).arg(file.errorString()));
        return ;
    }
    QTextStream in(&file);

    auto browser = new QTextBrowser(this);
    auto tabWidget = qobject_cast<MyTabWidget*>(centralWidget());
    Q_ASSERT(tabWidget);
    auto index = tabWidget->insertTab(tabIndex,browser,QFileInfo(fileName).baseName());
    tabWidget->setCurrentIndex(index);

    browser->setAcceptDrops(false);
    QGuiApplication::setOverrideCursor(Qt::WaitCursor);
    browser->setSource(QUrl::fromLocalFile(fileName));
    browser->setPlainText(in.readAll());
    QGuiApplication::restoreOverrideCursor();

    file.close();
}

...

void MainWindow::dragEnterEvent(QDragEnterEvent *event)
{
    if(event->mimeData()->hasUrls())
        event->acceptProposedAction();
    else event->ignore();
}

void MainWindow::dropEvent(QDropEvent *event)
{
    const QMimeData * mimeData = event->mimeData();
    if(mimeData->hasUrls()) {
        for (const QUrl& url : mimeData->urls()) {
            openFile(url.toLocalFile());
        }
        event->acceptProposedAction();
    }
    else {
        event->ignore();
    }
}
```

从上面我们可以看到，`openFileAt()` 打开文件后将其插入标签栏上特定的位置，而 `openFile()` 只是普通的打开并附到标签栏最后，和目标2是对应的。由于拖放接收的是 URL ，所以普通的文件拖放打开也顺便实现了。至此，两窗口间拖放的接收部分就完成了。

在考虑发送部分之前，先考虑目标3情况下创建的新窗口如何接收数据。虽然乍一看似乎也可以通过 `QDrag` 来传递信息，但由于创建新窗口和释放拖放基本是同时发生的，而 `QDrag` 本身不能创建新窗口，因此在一次拖放中不能指望只携带 URL 信息的 `QDrag` 给新窗口传递信息。

注意到我们是在启动新进程的同时传递信息，最传统的方法就是命令行参数。显然，命令行参数里肯定要有要打开的文件路径。而且我们还希望在鼠标释放的地方创建新窗口，所以还需要有窗口的位置参数。即

```cpp
//main.cpp
#include "mainwindow.h"
#include <QApplication>
#include <QCommandLineParser>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    QCommandLineParser parser;
    parser.addOptions({
        {"x","move window to indicated left side position on screen","posX","100"},
        {"y","move window to indicated top position on screen","posY","100"}
        /*name, description, value name, default value*/
    });
    parser.addPositionalArgument("filePath","file to open");
    parser.process(a);

    bool converted;
    auto x = parser.value("x").toInt(&converted);
    if(!converted)
        x = 100;
    auto y = parser.value("y").toInt(&converted);
    if(!converted)
        y = 100;

    QStringList filePaths = parser.positionalArguments();

    MainWindow w;
    w.move(x,y);
    w.show();
    for(const QString& filePath : filePaths) {
        w.openFile(filePath);
    }

    return a.exec();
}
```

这样，新窗口接收数据的部分也完成了。

然后是发送数据的部分。

移动标签显然是要覆写标签栏的鼠标移动事件。由于标签栏内的移动 Qt 本身已经有实现了，因此只考虑标签栏外的情况。

```cpp
//mytabbar.h
#ifndef MYTABBAR_H
#define MYTABBAR_H

#include <QTabBar>

class QString;

class MyTabBar : public QTabBar
{
    Q_OBJECT

public:
    MyTabBar(QWidget * parent = Q_NULLPTR);
    ~MyTabBar() {}

signals:
    void openFileRequest(QString/*fileName*/,int/*tabIndex*/);
    void dragTabRequest(int/*tabIndex*/);

protected:
    void dragEnterEvent(QDragEnterEvent *event) override;
    void dropEvent(QDropEvent *event) override;
    void mouseMoveEvent (QMouseEvent *event) override;
};

#endif // MYTABBAR_H
```

```cpp
//mytabbar.cpp
#include "mytabbar.h"
#include <QUrl>
#include <QMimeData>
#include <QDragEnterEvent>
#include <QDropEvent>
#include <QMouseEvent>

MyTabBar::MyTabBar(QWidget *parent)
    : QTabBar(parent)
{
    setMovable(true);
    setAcceptDrops(true);
}

void MyTabBar::dragEnterEvent(QDragEnterEvent *event)
{
    if(event->mimeData()->hasUrls())
        event->acceptProposedAction();
    else event->ignore();
}

void MyTabBar::dropEvent(QDropEvent *event)
{
    const QMimeData * mimeData = event->mimeData();
    if(mimeData->hasUrls()) {
        for (const QUrl& url : mimeData->urls()) {
            emit openFileRequest(url.toLocalFile(),tabAt(event->pos()));
        }
        event->acceptProposedAction();
    }
    else {
        event->ignore();
    }
}

void MyTabBar::mouseMoveEvent(QMouseEvent *event)
{
    if(event->buttons()==Qt::LeftButton) {
        if(!geometry().contains(event->pos())) {
            emit dragTabRequest(currentIndex());
        }
    }
    QTabBar::mouseMoveEvent(event);
}
```

同样是利用信号-槽机制

```cpp
//mytabwidget.h
#ifndef MYTABWIDGET_H
#define MYTABWIDGET_H

#include <QTabWidget>

class MyTabWidget : public QTabWidget
{
    Q_OBJECT

public:
    MyTabWidget(QWidget * parent = Q_NULLPTR);
    ~MyTabWidget() {}
    void removeTabActually(int index);

signals:
    void openFileRequest(QString/*fileName*/,int/*tabIndex*/);
    void dragTabRequest(int/*tabIndex*/);

};

#endif // MYTABWIDGET_H
```

```cpp
#include "mytabwidget.h"
#include "mytabbar.h"
#include <QDebug>

MyTabWidget::MyTabWidget(QWidget * parent)
    : QTabWidget(parent)
{
    auto mTabBar = new MyTabBar(this);
    setTabBar(mTabBar);

    connect(mTabBar,&MyTabBar::openFileRequest,this,&MyTabWidget::openFileRequest);
    connect(mTabBar,&MyTabBar::dragTabRequest,this,&MyTabWidget::dragTabRequest);
}

void MyTabWidget::removeTabActually(int index)
{
    widget(index)->deleteLater();
    removeTab(index);
}
```

最后是关键的拖放实现。注意到既然接收拖放就是在窗口间移动标签页，那么不接收拖放就可以作为创建新窗口。当然这么做会有一定的副作用，只能说是一种委曲求全的方法。具体的问题在后面再谈。

```cpp
//mainwindow.h
#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

class QString;

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow() {}
    void openFile(QString fileName);
    void openFileAt(QString fileName, int tabIndex);
    void dragTab(int tabIndex);

protected:
    void dragEnterEvent(QDragEnterEvent *event) override;
    void dropEvent(QDropEvent *event) override;
};

#endif // MAINWINDOW_H
```

```cpp
//mainwindow.cpp
#include "mainwindow.h"
#include "mytabwidget.h"
#include <QTextBrowser>
#include <QMessageBox>
#include <QFileInfo>
#include <QFile>
#include <QTextStream>
#include <QUrl>
#include <QMimeData>
#include <QDrag>
#include <QWindow>
#include <QScreen>
#include <QProcess>
#include <QCursor>
#include <QDragEnterEvent>
#include <QDropEvent>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent)
{
    ...//setup ui 
    auto tabWidget = new MyTabWidget(this);
    setCentralWidget(tabWidget);
    setAcceptDrops(true);
    connect(tabWidget,&MyTabWidget::openFileRequest,this,&MainWindow::openFileAt);
    connect(tabWidget,&MyTabWidget::dragTabRequest,this,&MainWindow::dragTab);
}

void MainWindow::openFile(QString fileName)
{
    return openFileAt(fileName,-1);
    //If index is out of range, the tab is simply appended.
    //see http://doc.qt.io/qt-5/qtabwidget.html#insertTab
}

void MainWindow::openFileAt(QString fileName, int tabIndex)
{
    QFile file(fileName);
    if(! file.open(QFile::ReadOnly | QFile::Text))
    {
        QMessageBox::warning(this,tr("Error"),
                             tr("Cannot open file %1:\n%2").arg(fileName).arg(file.errorString()));
        return ;
    }
    QTextStream in(&file);
    in.setAutoDetectUnicode(true);

    auto browser = new QTextBrowser(this);
    auto tabWidget = qobject_cast<MyTabWidget*>(centralWidget());
    Q_ASSERT(tabWidget);
    auto index = tabWidget->insertTab(tabIndex,browser,QFileInfo(fileName).baseName());
    tabWidget->setCurrentIndex(index);

    browser->setAcceptDrops(false);
    QGuiApplication::setOverrideCursor(Qt::WaitCursor);
    browser->setSource(QUrl::fromLocalFile(fileName));
    browser->setPlainText(in.readAll());
    QGuiApplication::restoreOverrideCursor();

    file.close();
}

void MainWindow::dragTab(int tabIndex)
{
//    if(!isTabMovable(tabIndex)) 
//        ...//impossible in this situation
    auto tabWidget = qobject_cast<MyTabWidget*>(centralWidget());
    Q_ASSERT(tabWidget);
    auto browser = qobject_cast<QTextBrowser*>(tabWidget->widget(tabIndex));
    Q_ASSERT(browser);

    auto drag = new QDrag(this);
    auto mimeData = new QMimeData;
    QPixmap thumbnail = windowHandle()->screen()->grabWindow(browser->winId());
    mimeData->setUrls({browser->source()});
    drag->setMimeData(mimeData);
    drag->setPixmap(thumbnail.scaled(200,200));

    auto dragAction = drag->exec(/*Qt::MoveAction*/Qt::LinkAction);
    int currentIndex = tabWidget->indexOf(browser);
    if (dragAction==Qt::LinkAction/*Qt::MoveAction*/) {
        tabWidget->removeTabActually(currentIndex);
    }
    else if (dragAction==Qt::IgnoreAction) {
        if(QProcess::startDetached(qApp->applicationFilePath(),
                                   {"-x",QString::number(QCursor::pos().x()),
                                    "-y",QString::number(QCursor::pos().y()),
                                   browser->source().toLocalFile()})) {
            tabWidget->removeTabActually(currentIndex);
        }
    }
    else {
        return;
    }
    if(tabWidget->count()==0) {
        qApp->closeAllWindows();
    }
}

void MainWindow::dragEnterEvent(QDragEnterEvent *event)
{
    if(event->mimeData()->hasUrls())
        event->acceptProposedAction();
    else event->ignore();
}

void MainWindow::dropEvent(QDropEvent *event)
{
    const QMimeData * mimeData = event->mimeData();
    if(mimeData->hasUrls()) {
        for (const QUrl& url : mimeData->urls()) {
            openFile(url.toLocalFile());
        }
        event->acceptProposedAction();
    }
    else {
        event->ignore();
    }
}
```

这里值得注意的有两点。一个是在 `drag->exec()` 之后重新获取了部件当前的索引 `currentIndex` ，这是由于拖放后可能会导致索引改变；另一个是拖放提供的行为是 `Qt::LinkAction` 而不是 `Qt::MoveAction` ，这是由于桌面（即资源管理器）以及相当一部分常见程序对 `Qt::MoveAction` 和 `Qt:: CopyAction` 的拖放是可以直接接收的，导致创建新窗口几乎不会发生，而且还会带来一些意料外的副作用，因此最后选择了大多数常见程序不会接收的 `Qt::LinkAction` 。

这样，一个具有标签页拖放功能的多文本浏览器就基本完成了。

*完整源码参见 <https://github.com/miRoox/DnDTabWidget/tree/v1.0>*
