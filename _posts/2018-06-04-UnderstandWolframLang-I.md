---
layout: post
title: "理解Wolfram语言（上）"
date: 2018-06-04 14:02:10
description: "Everything is an expression."
tag: ["编程", "Mathematica"]
use_math : true
---

### “一切皆表达式”

> Everything is an expression.

是的，理解了上面这句话，就基本理解了Wolfram语言。至于其它的，那都是细枝末节。

当然，想要理解这句话，首先要明白Wolfram语言里的表达式是什么。
<span id="demo_0">典型地</span>，`f[x,y]` 就是一个
[*表达式*](http://reference.wolfram.com/language/tutorial/UnderstandWolframLang/EverythingIsAnExpression_html)
，它由一个*头部* `f`，以及两个*项* `x` 和 `y` 构成。
通常，我们会用 `f[x,y]` 来表示一个函数 $f(x,y)$，
但同时，这种形式也代表了Wolfram语言里表达式的一般结构。
一般的，表达式由头部和项组成，而头部和项同样也是表达式。
这种结构不仅可以用来表示函数，它也可以用来表示
[列表](http://reference.wolfram.com/language/ref/List.html)
、
[图形](http://reference.wolfram.com/language/ref/Graphics.html)
、
[动态控件](http://reference.wolfram.com/language/tutorial/IntroductionToControlObjects.html)
，甚至是
[笔记本](http://reference.wolfram.com/language/tutorial/NotebooksAsWolframLanguageExpressions.html)
。
表达式的这种灵活性为Wolfram语言语法的高度一致性，
在理解了这种一致性的基础上，再去看Wolfram语言的各种行为，就会变得好理解很多。

再举几个例子(通过
[`FullForm`](http://reference.wolfram.com/language/ref/FullForm.html)
可以获得一个表达式的完整形式)：

<ul>
<li>
<p id="demo_op">
 算术表达式
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_1.png" alt="2 a + Sqrt[b] + c^d[e] // FullForm" width="177" height="35" style="vertical-align:middle" />
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_2.png" alt='Plus[Times[2,a],Power[b,Rational[1,2]],Power[c,d[e]]]' width="407" height="15" style="vertical-align:middle" />
</p>
</li>
<li>
<p id="demo_list">
 列表
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_3.png" alt='{1 + 2 I, a*b + c, {2, a}, "Str"} // FullForm' width="290" height="32" style="vertical-align:middle" />
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_4.png" alt='List[Complex[1,2],Plus[Times[a,b],c],List[2,a],"Str"]' width="409" height="15" style="vertical-align:middle" />
</p>
</li>
<li>
<p id="demo_graphic">
 图形
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_5.gif" alt='\!\(\* GraphicsBox[{CircleBox[{0, 0}], InsetBox[RowBox[{RowBox[{SuperscriptBox["x", "2"], "+", SuperscriptBox["y", "2"]}], "==", "1"}], {0, 0}]}]\) //FullForm' width="170" height="108" style="vertical-align:middle" />
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_6.png" alt="Graphics[List[Circle[List[0,0]],Inset[Equal[Plus[Power[x,2],Power[y,2]],1],List[0,0]]]]" width="661" height="15" style="vertical-align:middle" />
</p>
</li>
<li>
<p id="demo_func">
 非符号头部的表达式
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_7.png" alt="(1 + #) &amp;[a] // Hold // FullForm" width="214" height="32" style="vertical-align:middle" />
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_8.png" alt="Hold[Function[Plus[1,Slot[1]]][a]]" width="252" height="15" style="vertical-align:middle" />
</p>
</li>
<li>
<p id="demo_button">
 按钮控件
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_9.png" alt='\!\(\*ButtonBox["\<\"Push\"\>", Appearance->Automatic,ButtonFunction:>Print["Push!"], Evaluator->Automatic, Method->"Preemptive"]\) // FullForm' width="118" height="40" style="vertical-align:middle" />
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_10.png" alt='Button["Push",Print["Push!"],Rule[Appearance,Automatic],Rule[Evaluator,Automatic],Rule[Method,"Preemptive"]]' width="410" height="35" style="vertical-align:middle" />
</p>
</li>
<li>
<p id="demo_notebook">
 笔记本对象（输出仅供参考）
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_11.png" alt="CreateDocument[{x + y, 1/x + 1/y}] // FullForm" width="315" height="32" style="vertical-align:middle" />
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/EverythingIsAnExpression_12.png" alt='NotebookObject[FrontEndObject[LinkObject["kyhfi_shm",3,1]],56]' width="453" height="15" style="vertical-align:middle" />
</p>
</li>
</ul>

### 对象是结构化的表达式

前面提到了Wolfram语言表达式的一般结构，即：一个表达式由头部和若干项构成，而头部和项同样也是表达式，直到某个不可再分的
[*原子对象*](http://reference.wolfram.com/language/tutorial/BasicObjects.html#15871)，比如*数字*、*字符串*和*符号*。
在
<a href="#demo_0">最初的例子</a>
里，`f[x,y]`中，头部`f`，项`x`，`y`都是符号。
而对于更复杂的表达式，往往有较深的层次和较多的子项，
但如果掌握了一些方法（比如
[善用 `TreeForm`](http://reference.wolfram.com/language/tutorial/ExpressionsAsTrees.html)），
分析一个表达式的结构并不困难。

理解了表达式的结构，以及Wolfram语言的这种一致性，
那么Wolfram语言的很多设计与行为就好理解了。

比如，列表的下标为何从1开始？
因为本质上，运算符
[`[[...]]`](http://reference.wolfram.com/language/ref/Part.html)
提供的是按索引获取表达式各个项的一般方法，而作为语言一致性的表现，
`[[0]]`获取的是表达式的头部。
因此，对任何列表，获取“下标”为0的部分得到的结果都会是`List`。
同样，像`1[[0]]`这种在别的语言的使用者眼里看起来莫名奇妙的表达式，
在Wolfram语言中是完全正确的（当然，我们推荐使用语义更清晰的`Head[1]`进行表达）。
事实上，不仅仅是`[[...]]`，有相当一部分的
[列表操作](http://reference.wolfram.com/language/guide/ListManipulation.html)
可以以完全一致的行为用在任何表达式上，例如
[`Length`](http://reference.wolfram.com/language/ref/Length.html)、
[`Cases`](http://reference.wolfram.com/language/ref/Cases.html)、
[`Sort`](http://reference.wolfram.com/language/ref/Sort.html)、
[`Map`](http://reference.wolfram.com/language/ref/Map.html)……
掌握好这些函数，在面对很多问题的时候都会有所帮助。

而表达式的这种结构特性使得它可以承载并组织各种各样的信息。
自然而然地，我们可以使用表达式来表示对象。

<p id="demo_plot_trick">
作为展示“对象是结构化的表达式”的例子，再来看一个有趣的小trick：
</p>
<ul>
<li>
<p>
 <img src="/images/posts/UnderstandWolframLang/plot_1.png" alt="Plot[Sin[x], {x, 0, 2 \[Pi]}]" width="170" height="32" style="vertical-align:middle" />
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/plot_2.gif" alt="plot_2.gif" width="360" height="213" style="vertical-align:middle" />
</p>
</li>
<li>
<p>
 <img src="/images/posts/UnderstandWolframLang/plot_3.png" alt="% /. Line -> Point" width="111" height="32" style="vertical-align:middle" />
</p>
<p>
 <img src="/images/posts/UnderstandWolframLang/plot_4.gif" alt="plot_4.gif" width="360" height="213" style="vertical-align:middle" />
</p>
</li>
</ul>

上面这个例子实际展示了
[`Plot` 函数](http://reference.wolfram.com/language/ref/Plot.html)
在绘图时是如何进行抽样的。而方法也很简单，只是把图中的
[线段](http://reference.wolfram.com/language/ref/Line.html)
替换为
[点](http://reference.wolfram.com/language/ref/Point.html)。
而这种操作之所以可行，也是表达式一致性的体现。
在这里，函数`Plot`输出的图形实际是一个
[`Graphics` 对象](http://reference.wolfram.com/language/ref/Graphics.html)，
从构成上看，无非就是包含一些图形基元和图形指令的`Graphics`表达式，
只要将连接点的`Line`替换为不连接的`Point`就可以显示出那些抽样点了。

### 小结

“一切皆表达式”是Wolfram语言语法的核心。
Wolfram语言用表达式来表示算式、数据、图形、控件等等。
而掌握了表达式的结构，对Wolfram语言里的各种对象、操作都会有更清晰准确地认识。
在下篇里，将会讲到Wolfram语言中表达式的另一个重点——表达式的计算，以及我们如何控制计算。

