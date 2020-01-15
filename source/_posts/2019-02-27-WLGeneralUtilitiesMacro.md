---
layout: post
title: "Mathematica通用工具包参考（一）：宏"
date: 2019-02-27 23:00:13
description: "GeneralUtilities`"
tag: ["编程", "Wolfram", "参考"]
---

``GeneralUtilities` `` 是Mathematica从版本10开始新加入的一个上下文。
其中提供了大量的实用函数，包括代码生成、调试、静态分析、迭代器对象等各个领域，一定程度上弥补了Mathematica基础设施不足的状况。

这个工具包内包含的函数十分繁杂，在当前版本11.3下，可以通过``Names["GeneralUtilities`*"]//Length``看到其共包含了514个符号。
这篇文章简单介绍与宏有关的部分。

“宏”在编程领域往往作为一种代码生成技术使用，
例如在一些编译型语言中，宏展开往往发生在编译或预编译阶段。
而在``GeneralUtilities` ``的语境下，宏默认在定义时自动展开，同样也是一种代码生成技术。

```mathematica
Needs["GeneralUtilities`"]
```

----------

下面介绍``GeneralUtilities` ``中的一些实用宏

### `Scope`/`ModuleScope`

我们知道，Mathematica中的局部符号往往需要显式地引入，而不像很多语言在函数体内自动带有作用域。
这在使用大量局部变量的时候会带来一些麻烦。
而`Scope`给出了一个解决办法，它自动解析`Scope[body]`内部的赋值语句，提取与之相关联的符号自动局域化。
通过``?GeneralUtilities`Scope``可以看到它的用法如下：

> `Scope[body]` is a macro that expands to a `Block` with automatically populated local variable list.
> * Variables are detected syntactically by the presence of `=` and `:=` within `body`.
> * `^=` and `^:=` can be used to avoid this localization.
> * `{sym1,sym2,...} = rhs` will localize `sym1,sym2,...`.
> * `sym := rhs` will localize `sym`.
> * Local functions definitions `head[...] := rhs` do not cause localizalization of `head`.

而且它作为一个宏，使用在定义中，则展开发生在定义阶段，从而可以避免调用时因解析和变换带来的额外开销。
例如

```mathematica
f[x_]:=Scope[a=x;b^=a;c:=a++;{d,e}={b,c};a]
Definition[f]
(*Out[*]= f[x_]:=Block[{a,c,d,e},a=x;b=a;c:=a++;{d,e}={b,c};a]*)
```

可以看到`f`的定义中，`Scope`已经转换成了`Block`作用域，并自动将需要局域化的符号按`Block`的规则列出了。

类似的，`ModuleScope`自动展开成`Module`作用域结构。

### `Memoized`

> `Memoized[body]` specifies that `body` should be evaluted but cached so that subsequent calls with the same value for any bound symbol use the cached value.<br/>
> `Memoized[body,Method->method]` can be used, where `method` is one of `{"Association", "Symbol", "Inline", "SystemCache"}`, to choose a specific caching method.

即所谓的[记忆化](https://en.wikipedia.org/wiki/Memoization)手法，可以实现空间换时间的优化目的。
例如对于Mathematica中一个比较经典的记忆化案例

```mathematica
fib[0]=0;
fib[1]=1;
fib[n_]:=fib[n]=fib[n-1]+fib[n-2]
```

利用`Memoized`可以等价地写成

```mathematica
fib[0]=0;
fib[1]=1;
fib[n_]:=Memoized[fib[n-1]+fib[n-2],Method->"Inline"]
```

除了`"Inline"`，`Memoized`还提供了其它几种记忆化的实现手段，包括默认的`"SystemCache"`、基于关联`"Association"`和面向符号的`"Symbol"`，这里不多赘述了。
不过似乎目前的`"Symbol"`方法的实现有问题，无法应用于函数定义中。

### `SetupTeardown`

> `SetupTeardown[setup,body,teardown]` evaluates `setup`, then `body`, and then `teardown`, even if an `Abort` or `Throw` occurs during evaluation.

`SetupTeardown`是一个确保“初始化-主体-清理”执行顺序的封装，哪怕其中某部分中断或者抛出也会确保其余部分顺序进行。

举一个简单的例子

```mathematica
f[]:=SetupTeardown[Print["setup"],Print["before"];Abort[];Print["after"],Print["teardown"]]
```

调用`f[]`，可以看到即使`Abort[]`中断计算后，依然继续进行了`Print["teardown"]`的计算。

这个宏可以用于在计算流程中确保资源的获取和释放，不过实际在Mathematica中应用比较少。

### `Match`/`StringMatch`

> <code>Match[value,patt<sub>1</sub>:>val<sub>1</sub>,patt<sub>2</sub>:>val<sub>2</sub>,...,default]</code> matches the value to the <code>patt<sub>i</sub></code> in turn and gives the corresponding <code>val<sub>i</sub></code>, or evaluates `default` if none matched.<br/>
> `Match[value,patts...,...]` panics if none of the `patts` matched.<br/>
> `Match[patts]` is the operator form of `Match`.

长得像Rust的[`match`](https://doc.rust-lang.org/book/match.html)，用法大抵类似`Switch`，实际只是`Replace`的一个封装。

`StringMatch`无非是`StringReplace`的一个封装。

### `CatchFailure`/`CatchFailureAsMessage`

> `CatchFailure[body]` is a macro evaluates `body`, but returns a `Failure[...]` object if a `ThrowFailure[...]` occurred during evaluation. The current function is automatically used as the message head.<br/>
> `CatchFailure[head,body]` explicitly uses `head` as the message head for the failure message.

> `CatchFailureAsMessage[body]` is a macro evaluates `body`, but issues a message if a `ThrowFailure[...]` occurred during evaluation. The current function is automatically used as the message head.<br/>
> `CatchFailureAsMessage[head,body]` explicitly uses `head` as the message head for the failure message.

需要配合`ThrowFailure`一起使用，语义比较清晰的错误捕获。

### `UnpackAssociation`/`UnpackOptions`

> <code>UnpackAssociation[assoc,"Name<sub>1</sub>","Name<sub>2</sub>",...]</code> extracts the given keys from the association and sets variables named <code>Name<sub>i</sub></code>.<br/>
> <code>UnpackAssociation[assoc,symbol<sub>1</sub>,symbol<sub>2</sub>,...]</code> uppercases the first letter of the symbol name to get the key. <br/>
> <code>UnpackAssociation[assoc,symbol<sub>1</sub>:"Name<sub>1</sub>",...]</code> gives an explicit name for each symbol.

> <code>UnpackOptions[sym<sub>1</sub>,sym<sub>2</sub>,...]</code> extracts options with names <code>"Sym<sub>1</sub>", "Sym<sub>1</sub>", ...</code> and assigns them to the <code>sym<sub>i</sub></code>, where the keys are the title cased version of the symbol names.

用法说明已经介绍得比较详细了，下面给一个简单的用例

{% raw %}
```mathematica
Options[f] = {"A" -> 1, "Op" -> 2};
f[OptionsPattern[]]:=Scope[UnpackOptions[a,op];{a,op}]
{f[], f["A" -> 17], f["Op" -> 18], f["A" -> 16, "Op" -> 19]}
(*Out[*]= {{1,2},{17,2},{1,18},{16,19}}*)
```
{% endraw %}

### `CollectTo`

`CollectTo`需要配合`BagInsert`使用，实际是``Internal`Bag``相关函数的封装，目前来看意义不大，不过这个宏没有用法说明，也可能尚未完善。

根据定义，可以大致推测`CollectTo[{x,y,...},body]`可以通过在`body`部分使用`BagInsert[x,val]`或者`BagInsert[x,val,index]`的方式高效地将`val`添加或插入到动态列表`x`中。

下面给一个简单的用例说明一下用法

```mathematica
f1[n_]:=Scope[CollectTo[{x},Do[BagInsert[x,i],{i,n}]];x]
f2[n_]:=Scope[x={};Do[AppendTo[x,i],{i,n}];x]
BenchmarkPlot[{f1,f2},Identity]
```

我的电脑上给出的结果为：

![CollectTo](/images/posts/WLGeneralUtilitiesMacro/CollectTo.png)

可以看到`Bag`的添加效率基本是普通列表的好几倍。

### `DoWhile`

`DoWhile[body,test]`就像C语言之类的一样，先计算`body`，再计算`test`并决定是否循环，
实际上就等价于`While[body;test]`。

### `Excise`

> `Excise[args...]` evaluates to an empty sequence, effectively removing its arguments without evaluation.

个人认为没什么用，注释可以做到同样的事，甚至用途更广（`Excise`只能在使用宏的情况下工作）。

### `UseMacros`

> `UseMacros[body]` does nothing more than trigger macro expansion, use it if you want to use macros in a function but don't need `Scope`.

在不了解``GeneralUtilities` ``中宏的作用机理的情况下，这个宏的作用可能会令人困惑。
事实上，在默认条件下，上述各种宏的自动展开只会发生在赋值等号右边的最外层使用了宏的时候发生。
这一事实可以在上述各种的定义中一窥究竟，以`Scope`为例

```
Scope /: HoldPattern[s:Set[_, _Scope]] := MacroEvaluate @ s;
Scope /: HoldPattern[sd:SetDelayed[_, _Scope]] := MacroEvaluate @ sd;
Scope /: HoldPattern[tsd:TagSetDelayed[_, _, _Scope]] := MacroEvaluate @ tsd;
```

同样，`UseMacros`位于赋值等号右边的最外层时会触发宏自动展开，从而可以解决在内层使用宏无法展开的问题。

------

``GeneralUtilities` ``除了提供上述宏之外，还提供了一些计算和生成宏的辅助工具。

### `Quoted`

> `Quoted[code]` is the inert body of `code` for the purposes of macro expansion.

一个代码封装，作用基本和`HoldComplete`一样，不过使用了一个漂亮的方式输出显示代码。

在宏的实现中大量使用。

### `MacroExpand`/`MacroExpandList`

> `MacroExpand[expr]` evaluates all macros present in `expr` and returns the result in a `Quoted` expression.
>  Anywhere in a macro, `'` can be used to inject `EchoRaw` calls, `''` to inject `EchoHold` calls, and `'''` to wrap a function in `Tap`.

> `MacroExpandList[expr]` expands all macros that occur in `expr`, returning a list of `Quoted` expressions that give the intermediate results after each expansion step.

`MacroExpand`展开宏，但是不计算，可以用来预览宏使用的效果。
而`MacroExpandList`列出展开宏的每一步。

### `MacroEvaluate`

> `MacroEvaluate[expr]` evaluates all macros present in `expr` and then evaluates the result.

展开宏并计算。

可以尝试令`$Pre=MacroEvaluate`，这样每次计算都会尝试展开宏，从而也就不需要`UseMacros`来触发展开了。

### `MacroRules`

> `MacroRules[symbol]` gives all the macro application rules associated with the head `symbol`.

可以通过`PrintDefinitions[MacroRules]`hack得到已定义的函数宏和变换规则。

### `DefineLiteralMacro`/`DefineMacro`/`DefineAlias`

> `DefineLiteralMacro[symbol,lhs:=rhs,...]` defines a literal macro such that when `lhs` it is substituted for `rhs` without evaluation.
>  The same replacement is attached to symbol for use outside a macro context.

> `DefineAlias[newsymbol,oldsymbol]` does what it says on the tin.

这三者都用来实现自定义宏，但使用和效果上略有不同：

* `DefineLiteralMacro[symbol,lhs:=rhs,...]` 定义的是一个字面宏，在替换展开的过程中并不会计算`rhs`。
* `DefineMacro[symbol,lhs:=rhs,...]` 定义的宏则会在展开时计算`rhs`。
* `DefineAlias[newsymbol,oldsymbol]` 定义符号的别名，只对符号有效，而且其展开发生在其它宏展开之前。

尝试下面的例子以便更直观地认识到这三者间的联系和区别：

```mathematica
DefineMacro[fac1, fac1[x_]:=x!];
DefineLiteralMacro[fac2, fac2[x_]:=x!];
DefineAlias[fac3, Factorial];

MacroExpand[fac1[3]]
MacroExpand[fac2[3]]
MacroExpand[fac3[3]]
MacroExpand[fac2[]]
MacroExpand[fac3[]]
```
