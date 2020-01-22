---
layout: post
title: "Mathematica黑魔法：符号沙盒"
date: 2019-01-17 23:02:13
tag: ["编程", "Wolfram"]
---

### 问题的引入

`ValueQ`是Matheamtica中的一个非常有趣的函数，它判断一个表达式是否会进行求值，而且这种判断有时可以做到无副作用，哪怕求值本身是具有副作用的。比如

```mathematica
x=0;
y:=++x
v=ValueQ[y];
{v,x}
```

会得到`{True,0}`的结果。这里的`ValueQ[y]`显然并没有真正对`y`求值就作出了判断。不过很遗憾的是这其中哪怕只有略微的改动也会使其作用发生变化，例如

```mathematica
x=0;
y:=++x
v=ValueQ[y+0];
{v,x}
```

则会得到`{True,1}`。

<!--more-->

具有[值集](http://reference.wolfram.com/language/tutorial/ManipulatingValueLists.html)知识的读者可能很容易猜想`ValueQ`可能具有类似下面的实现

```matheamtica
Attributes[ValueQ] = {HoldAll, Protected, ReadProtected}
ValueQ[sym_Symbol]:=Hold[sym]=!=Hold[sym]/.OwnValues[sym]
ValueQ[expr_]:=Unevaluated[expr]=!=expr
```

因而具有上面那样的行为也是可以理解的。

不过这种不一致性总归让人觉得别扭，尽管这种不一致性本质上来源于Wolfram语言求值策略的复杂性，尤其是[`Condition`](http://reference.wolfram.com/language/ref/Condition.html)的灵活性，使得上面这种策略注定无法真正消除副作用。哪怕是现在这种状况，我们依然可以让`ValueQ`对符号作用时产生副作用，
例如

```mathematica
x=0;
y:=With[{e=++x}, e/;True]
v=ValueQ[y];
{v,x}
```

也会得到`{True,1}`。这里用到的技巧叫[Trott-Strzebonski](https://mathematica.stackexchange.com/questions/29317/replacement-inside-held-expression)，是一种常用的元编程技巧，不过这里不做赘述，对于理解`Condition`的工作方式的读者想必并不复杂。

因此，这里想介绍另一种消去副作用的思路，也就是所谓的“符号沙盒”。

### 思路与实现

如果说`ValueQ`的思路是尽可能避免求值来消去副作用的话，那么接下来的处理方式则是尽可能将副作用局域化，就好像在沙盒环境中一样。而这也正是标题由来。

事实上，`Block`动态作用域就具有类似的效果。不过直接使用`Block`的话则略显繁琐，我们希望有一个能自动分析需要局域化的符号并且能继承既有定义的动态作用域。幸运的是，Mathematica中既有的函数足以覆盖我们的需求：``Internal`EmbeddedSymbols``和``Internal`InheritedBlock``。尽管这两者都是没有文档的“内部函数”，不过通过测试和分析可以推测他们的功能：

* ``Internal`EmbeddedSymbols``：可以获取一个表达式**所有**直接或*间接*使用的符号
* ``Internal`InheritedBlock``：继承符号既有定义的动态作用域

组合这两者不难得到

```mathematica
SetAttributes[{embeddedUserSymbols,symbolSandbox},HoldFirst]
embeddedUserSymbols[expr_]:=
 Select[Internal`EmbeddedSymbols[expr],
  Function[sym,ContainsNone[Attributes[sym],{Locked,Protected}],HoldAll]
 ]/. {Hold[syms___]:>Hold[{syms}]}
symbolSandbox[expr_]:=With[{syms=Unevaluated@@embeddedUserSymbols[expr]},
  Internal`InheritedBlock[syms,expr]
 ]
```

这里需要注意的是``Internal`EmbeddedSymbols``获得的符号不能全部局域化，因此加入了`Select`滤过具有`Locked`和`Protected`属性的符号。

然后我们可以给出一个更“安全”的`ValueQ`

```mathematica
SetAttributes[valueQ,HoldFirst]
valueQ[expr_]:=Unevaluated[expr]=!=symbolSandbox[expr]
```

此时

```mathematica
x=0;
y:=++x
v=valueQ[y+0];
{v,x}
```

会给出`{True, 0}`的结果，`x`因对`y`的求值而产生的改变被限制在`valueQ`的计算过程中。

不过这种局域化仅限于符号，并不能限制诸如文件IO等其它方式的副作用，因此只能叫“符号沙盒”。

-----

**补充：**
经过更多测试，发现``Internal`EmbeddedSymbols``似乎有不太稳定，有时会导致内核崩溃，而且似乎**不能**完全获取有关的符号。这部分可能有待改进。
