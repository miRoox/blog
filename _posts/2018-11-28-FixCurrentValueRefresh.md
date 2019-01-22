---
layout: post
title: "解决CurrentValue等动态刷新无法控制的问题"
date: 2018-11-28 23:09:13
description: "All problems in computer science can be solved by another level of indirection."
tag: ["编程", "Wolfram"]
---

> All problems in computer science can be solved by another level of indirection. [^1]

最近在拿Mathematica做一些小东西的时候发现`CurrentValue`等函数在动态中刷新不受`Refresh`等方式影响。
比如

```mathematica
Dynamic[Refresh[CurrentValue["MousePosition"], None]]
```

输出会不断刷新，并不受`Refresh[□, None]`结构控制。

另一方面，同样被设计为“过分敏感”的`Clock`则受`Refresh`控制，

```mathematica
Dynamic[Refresh[Clock[]], None]]
```

其输出则不会更新。

鉴于文档中并没有提到过这个问题，我个人认为这是一个*bug*。
不过几个`Current`开头的函数都有这个问题，包括`CurrentImage`、`CurrentNotebookImage`、`CurrentScreenImage`，或许这其实是这类函数的一个*feature*也说不定。
然而，出于某些应用场合的需求，我希望这些函数能像其它动态一样受控，这篇文章也因此而来。

当然，前面的例子太过“平凡”了，直接使用静态输出就没有那么多事了。
如果我们考虑一个定时刷新的光标位置，那么按照一般的写法，可能写成

```mathematica
Dynamic[CurrentValue["MousePosition"], UpdateInterval -> 1]
```

但正如前面指出的，上面这段代码并不能正常地工作。
要解决这个问题，实际要引入一个受控的中间层，来间接表示`CurrentValue["MousePosition"]`。
正如
[文档](http://reference.wolfram.com/language/workflow/PutAutoupdatingDynamicContentInANotebook.html)
中所提到的，
通过组合`TrackedSymbols`和`UpdateInterval`，我们可以精确控制只受符号变化影响的动态更新。
再借助`DynamicWrapper`同步受控符号与`CurrentValue`表达式即可。
最终我们得到

```mathematica
DynamicModule[{p},
 DynamicWrapper[
  Dynamic[p, UpdateInterval -> 1, TrackedSymbols :> {}],
  p = CurrentValue["MousePosition"]
 ]
]
```

至此，`CurrentValue`等动态刷新无法控制的问题圆满解决。

-----

***2019年1月22日补充***：
这大概确实是一个bug，在
[SE上的这个问题](https://mathematica.stackexchange.com/questions/127454/currentvalue-and-mouseposition-do-not-respect-dynamics-options)
中作者表示已经将这一情况向Wolfram公司提出了。

[^1]: <https://www2.dmst.aueb.gr/dds/pubs/inbook/beautiful_code/html/Spi07g.html>
