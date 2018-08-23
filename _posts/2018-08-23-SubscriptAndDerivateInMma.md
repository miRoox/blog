---
layout: post
title: "Mathematica下标与导数赋值问题的解决方法"
date: 2018-08-23 15:22:43
description: "Subscript Derivative"
tag: ["编程", "Mathematica"]
---

众所周知，Mathematica中虽然使用下标形式非常方便，
但如果对下标结构进行直接赋值，它将关联到内部符号`Subscript`上。
这样，在我们大量清理符号定义的时候可能会漏掉一些定义。
类似地，导数`Derivative`有同样的问题，比如对于

```mathematica
f'=df
```

使用

```mathematica
Clear[f]
Clear["`*"]
```

并不能清除`f'[x_]`的定义。 

虽说将直接赋值改为用`UpSet`或者`TagSet`替代可以将赋值关联到符号`f`上而不是别的，比如下面的代码。

```mathematica
f/:f'=df
```

但每次多打一些东西总归是不方便，我们总会想找一个一劳永逸的办法。

官方文档中提到的对
[数量值](http://reference.wolfram.com/language/tutorial/DefiningNumericalValues.html)
的处理给了我启发。

> 在Wolfram语言中，数量值的处理与上值类似，当定义了`f`的数量值以后，
> Wolfram语言就象求值运算`N`中`f`的上值一样来输入这一定义.

下标的情况相对比较容易处理，
类似<code><span>a</span><sub>n</sub></code>的结构在Wolfram语言中实质就是`Subscript[a,n]`，
我们只要把普通的赋值转化为`TagSet`即可，就如下面的代码所示

```mathematica
Subscript /: Set[Subscript[a_Symbol, rest__], val_] := 
 TagSet[a, Subscript[a, rest], val]
Subscript /: SetDelayed[Subscript[a_Symbol, rest__], val_] := 
 TagSetDelayed[a, Subscript[a, rest], val]
```

`Derivative`的情况相对要复杂一些，
因为即使看上去非常简单的`f'[x]`在Wolfram语言内部也会表示为`Derivative[1][f][x]`，
我们认为的主要符号`f`在这个表达式中层次太深，无法直接将`TagSet`应用在上面，
因此只能采取一些迂回的办法。

值得庆幸的是，Mathematica也支持纯函数式的导数，例如`Sin'`会得到`Cos[#1]&`。
而在`Derivative[1][f]`结构中，`f`是可以通过`TagSet`赋予上值的。
对于这种情况，采用和前面类似的方法就能解决。

```mathematica
Derivative /: Set[Derivative[ns__Integer][f_Symbol], val_] := 
 TagSet[f, Derivative[ns][f], val]
Derivative /: SetDelayed[Derivative[ns__Integer][f_Symbol], val_] := 
 TagSetDelayed[f, Derivative[ns][f], val]
```

而对于类似`Derivative[1][f][x]`的情况，
虽然我们无法直接对其使用`TagSet`，但我们可以考虑将其转换为纯函数的情况。

动手前先分析，例如`f'[x_]:=x`我们希望将其转换为`f':=Function[{x},x]`，
为了达到这个目的，需要去掉原本赋值中的模式结构`:_`。
我们知道，像`x_`的完整形式是`Pattern[x,Blanck[]]`。
因此，提取`x_`的`x`只要将其第一部分提取出来即可。
综合一下可以写成如下的代码

```mathematica
Derivative /: 
 Set[Derivative[ns__Integer][f_Symbol][args__Pattern], val_] := 
 Set[Derivative[ns][f], Evaluate[First /@ {args}] \[Function] val]
Derivative /: 
 SetDelayed[Derivative[ns__Integer][f_Symbol][args__Pattern], val_] := 
 Set[Derivative[ns][f], Evaluate[First /@ {args}] \[Function] val]
```

其中，`Evaluate`是为了解决`Function`的`HoldAll`属性的。

除此之外，还有一点值得注意。
像`Derivative[1]`和`Derivative[1,0]`是不同的，
`Derivative`的参数个数应该与被求导函数的参数个数匹配。
考虑了这个问题后，可以将上面的代码改成下面这样，
以避免出现类似`f'[x_,y_]:=df[x,y]`错误形式。

```mathematica
Derivative /: 
 Set[Derivative[ns__Integer][f_Symbol][x__Pattern], val_] := 
 If[Length@{ns} == Length@{x}, 
  Set[Derivative[ns][f], 
   Evaluate[First /@ {x}] \[Function] val], $Failed]
Derivative /: 
 SetDelayed[Derivative[ns__Integer][f_Symbol][x__Pattern], val_] := 
 If[Length@{ns} == Length@{x}, 
  Set[Derivative[ns][f], 
   Evaluate[First /@ {x}] \[Function] val], $Failed]
```

当然，这种方法不能应对类似`f'[1]=0`这样的单点导数赋值。
但这种基于模式的单点导数定义本身也不是很合适的做法，比如

```mathematica
f'[1]=0;
f'[x_]:=x
D[f[x],x]
```

其结果是无法体现出`f'[1]=0`的。

因此对于一个函数的某阶导数，应该避免重载。
如果有需要，也应该使用`Piecewise`之类的手段整合成一个函数。
