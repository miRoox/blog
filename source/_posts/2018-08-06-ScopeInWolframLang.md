---
layout: post
title: "Wolfram语言中的作用域结构"
date: 2018-08-06 11:06:12
tag: ["编程", "Wolfram"]
---

Wolfram语言中的作用域结构主要有如下5种:

* `Module`
* `Block`
* `With`
* `DynamicModule`
* 命名空间

<!--more-->

### [Module](http://reference.wolfram.com/language/ref/Module.html)

按照[文档](http://reference.wolfram.com/language/tutorial/BlocksComparedWithModules.html)中的说法，`Module`提供变量的词法(lexical)定界。它使范围内的变量具有类似C语言中局部变量的行为。

然而，和C语言等不同，Wolfram语言没有对变量的名称和对象的区分，同样的名称总是用于指代同一变量。因此，`Module`在创建局部变量时，实际是创建新的符号并进行替换，比如运行下面的代码：

```mathematica
Module[{x}, x]
```

从输出结果中可以看到形如`x$nnn`的局部变量。

正如前面提到的，`Module`提供的是变量的*词法*定界。因此，只有显式出现在作用域中的变量会被局部化。偶尔，这可能带来一些意想不到的结果。典型地，下面的代码

```mathematica
m = i^2;
Module[{i = a}, i + m]
```

会输出<code>a+i<sup>2</sup></code>。

为了有效地实现定界，`Module`创建的变量都有[`Temporary`](http://reference.wolfram.com/language/ref/Temporary.html)属性来控制变量的生存期。它采用类似引用计数的方式来考察一个变量是否还在使用，并决定是否要将变量移除。因此，我们基本不需要考虑可能的变量冲突。

```mathematica
Module[{x}, Print[x]; Attributes[x]]
Names["x*"]
```

多数时候，我们可能喜欢使用`Module`，因为它确实会如我们期望地那样创建新的变量。但它毕竟不是万能的，只有始终明确它的含义和适用的场合，才能保证正确地使用它。

**思考题1**：
下面的程序会输出什么？

```mathematica
x = 1;
Module[{x = 2},
 Print[x];
 Print[Symbol["x"]];
]
Print[x]
```

**延伸阅读**：
[模块和局部变量](http://reference.wolfram.com/language/tutorial/ModulesAndLocalVariables.html)、[模块工作方式](http://reference.wolfram.com/language/tutorial/HowModulesWork.html)

### [Block](http://reference.wolfram.com/language/ref/Block.html)

与`Module`不同，`Block`提供变量的动态定界。它不产生新的变量，只是在作用域内临时地修改变量的值。因此，前面的例子如果用`Block`改写

```mathematica
m = i^2;
Block[{i = a}, i + m]
```

则会输出<code>a+a<sup>2</sup></code>。

基于这种特性，`Block`经常被用在将副作用局域化的场合。

比如，局部地进行深度递归

```mathematica
cl[1] = 1;
cl[n_Integer?EvenQ] := cl[n/2] + 1
cl[n_Integer?OddQ] := cl[3 n + 1] + 1
Block[{$RecursionLimit = Infinity}, cl[9780657630]]
```

又比如，局部地清除值

```mathematica
x = 0;
Block[{x}, Print[Expand[(1 + x)^3]]]
```

值得注意的是，上面使用了`Print`直接输出来避免从`Block`返回的值再被计算。如果普通地从`Block`返回值，则其中的表达式会由于`x=0`而重新计算，从而输出`1`。利用`Trace`我们可以看到这其中的过程

```mathematica
x = 0;
Block[{x}, Expand[(1 + x)^3]] // Trace // Column
```

{% codeblock lang:mathematica %}{% raw %}
Block[{x},Expand[(1+x)^3]]
{Expand[(1+x)^3],1+3 x+3 x^2+x^3}
1+3 x+3 x^2+x^3
{{x,0},3 0,0}
{{{x,0},0^2,0},3 0,0}
{{x,0},0^3,0}
1+0+0+0
1
{% endraw %}{% endcodeblock %}

`Block`虽然很便利，但“成也动态定界败也动态定界”，它所带来副作用往往不是显然的，更容易引入一些潜在的错误。另一点值得注意的是，像`Table`、`Plot`之类的函数在运算时使用与Block相同的方式局部化变量的值。这意味着使用这些函数时必须同使用`Block`一样小心

```mathematica
f[x_] := i*x
Table[f[i], {i, 5}]
Table[f[j], {j, 5}]
```

```mathematica
{1, 4, 9, 16, 25}

{i, 2 i, 3 i, 4 i, 5 i}
```

另一方面，这个特性在使用`EvaluationMonitor`之类的监视器时会带来很大的方便。比如下面的代码可以直接追踪出求根过程中的步骤

```mathematica
FindRoot[x^2 - 2, {x, 1}, EvaluationMonitor :> Print["x=", x, " Bias:", Abs[x^2 - 2]]]
```

**思考题2**：
下面的程序会输出什么？与`Module`时的情况进行比较。

```mathematica
x = 1;
Block[{x = 2},
 Print[x];
 Print[Symbol["x"]];
]
Print[x]
```

**延伸阅读**：
[块与模块的比较](http://reference.wolfram.com/language/tutorial/BlocksComparedWithModules.html)、[块和局部值](http://reference.wolfram.com/language/tutorial/BlocksAndLocalValues.html)

### [With](http://reference.wolfram.com/language/ref/With.html)

`With`的目的是实现局部常量，但它实质上不过是一个替换罢了。在大多数情况下

```mathematica
With[{x = x0, y = y0}, expr]
```

等价于

```mathematica
Unevaluated[expr] /. {HoldPattern[x] -> x0, HoldPattern[y] -> y0}
```

可以看到，`With`并不会创建变量，相反，在替换的过程中往往还会减少变量。这个性质往往非常有用。比如，它可以把值插入到保持(held)表达式中：

```mathematica
Table[With[{i = i}, Hold[i]], {i, 5}]
```

输出为

```mathematica
{Hold[1], Hold[2], Hold[3], Hold[4], Hold[5]}
```

但如果不借助`With`传递一下的话

```mathematica
Table[Hold[i], {i, 5}]
```

输出结果则会是

```mathematica
{Hold[i], Hold[i], Hold[i], Hold[i], Hold[i]}
```

在下面的延伸阅读中的“How To”主题里，可以看到有关这种性质更实际的用法。

**思考题3**：
下面的程序会输出什么？

```mathematica
With[{x = y},
 x = 1;
 Evaluate[Symbol["x"]] = 2;
]
<|"x" -> x, "y" -> y|>
```

**思考题4**：
前面提到`With`可以将值插入保持表达式，考虑如果将`With`替换为`Module`或者`Block`是否能实现同样的效果？为什么？

**思考题5**：
前面提到，*大多数情况*下，`With`可以等价于一个替换。那么，在什么情况下不能简单地进行替换？比较下面两段程序，思考造成差异的原因，
并考虑`With`的适用范围。

```mathematica
With[{y = x + a}, Function[{x}, x + y]]
```

```mathematica
Unevaluated[Function[{x}, x + y]] /. {HoldPattern[y] -> x + a}
```

**延伸阅读**：
[局部常量](http://reference.wolfram.com/language/tutorial/LocalConstants.html)、[How To | 在 Dynamic 或 Manipulate 内部计算表达式](http://reference.wolfram.com/language/howto/EvaluateExpressionsInsideDynamicOrManipulate.html)、[纯函数和规则中的变量](http://reference.wolfram.com/language/tutorial/VariablesInPureFunctionsAndRules.html)

### [DynamicModule](http://reference.wolfram.com/language/ref/DynamicModule.html)

与`Module`类似，`DynamicModule`也建立变量的词法作用域，但两者又有不同：如果说`Module`将变量局域在一个*时间段*的话，那么`DynamicModule`将变量局域在其输出的一个*空间区域*上。而为了实现这一点，`Module`对变量的局域化发生在内核中，而`DynamicModule`对变量的局域化发生在前端。这也可以通过运行下面两段代码验证

```mathematica
Module[{x}, Slider[Dynamic[x]]] // FullForm
```

```mathematica
DynamicModule[{x}, Slider[Dynamic[x]]] // FullForm
```

从输出结果中可以看到DynamicModule在内核中是以不计算的方式保持着原本的形式，实际上`DynamicModule`在前端产生一个`DynamicModuleBox`的框符结构，它虽然不会像`ButtonBox`或者`RowBox`之类的显示成一个控件或者布局，但前端会根据它来对内部的变量局域化。

```mathematica
DynamicModule[{x}, Slider[Dynamic[x]]]
```

复制上面代码的输出，在后面加上 `//ToBoxes` 并计算，得到其框符表示。滑动滑动条，再次计算，可以看到滑动条的值其实是由`DynamicModuleBox`结构所记录的。这也正是`DynamicModule`内的状态能保存在文件中，并在跨越不同的内核会话时保持一致的原因。

相对地，`Module`就没有这个能力，比如下面这段代码

```mathematica
Module[{x}, Slider[Dynamic[x]]]
```

由其得到的滑动条，随意滑动一下，如果关闭文件并退出内核的话，再次打开文件它会回到初始的位置上；而如果不关闭文件直接退出内核的话，甚至会出现拖动滑动条却无法将其移动的情况。对后一种情况，个人猜测是由于前端和内核重新连接后，前端原有控件没能和内核中的变量关联上的缘故。

**思考题6**：
分别将由`DynamicModule`和`Module`得到的滑动条复制到其它地方，拖动滑动条，观察其现象，思考造成这种现象的原因。

**延伸阅读**：
[动态简介](http://reference.wolfram.com/language/tutorial/IntroductionToDynamic.html)、[高级动态功能](http://reference.wolfram.com/language/tutorial/AdvancedDynamicFunctionality.html)

### [命名空间](http://reference.wolfram.com/language/guide/NamespaceManagement.html)

命名空间也被称作上下文。顾名思义，它可以看作一段程序执行的语境，它影响符号的含义。

附带的笔记本中，在不同单元中多次出现符号`x`，但它们之间没有任何关联，也不会互相干扰。这是由于该笔记本默认在每个单元编组都使用独立的上下文。通过计算`$Context`获取当前上下文，可以得到一个形如``Cell$$nnnn` ``的上下文名称。

事实上，Wolfram语言中任何符号的全名都包括两个部分：上下文和短名。全名的典型形式是``context`short``。其中，符号`` ` ``在Wolfram语言中被称为上下文标记，它是符号全名的一部分，在使用时又有些类似文件系统中的路径分隔符`/`或`\`。

正如我们在命令行环境下键入程序不需要完整的路径，系统会自动在`PATH`环境变量指定的路径中搜索，在Wolfram语言中的如果只键入符号短名的话，系统首先会在`$ContextPath`指定的上下文中搜索，如果在既有上下文中找不到该符号，才会在当前上下文中创建一个以此为短名的新符号。

上下文的应用通常和程序包联系在一起，以减少不同程序包间可能的符号冲突。因而在Wolfram语言中有两组典型的方式来开启一个上下文环境：
一组是``Begin["context`"]``和`End[]`；另一组是``BeginPackage["context`"]``和`EndPackage[]`。下面的代码简单演示了两者对上下文环境的作用

```mathematica
Print["0:", $Context, "|", $ContextPath]
BeginPackage["test`"];
    Print["1:", $Context, "|", $ContextPath]
    Begin["test1`"];
        Print["2:", $Context, "|", $ContextPath]
    End[];
    Print["3:", $Context, "|", $ContextPath]
    Begin["`test2`"];
        Print["4:", $Context, "|", $ContextPath]
    End[];
    Print["5:", $Context, "|", $ContextPath]
EndPackage[];
Print["6:", $Context, "|", $ContextPath]
```

```
0:Cell$$nnnn`|{Cell$$nnnn`,System`}

1:test`|{test`,System`}

2:test1`|{test`,System`}

3:test`|{test`,System`}

4:test`test2`|{test`,System`}

5:test`|{test`,System`}

6:Cell$$nnnn`|{test`,Cell$$nnnn`,System`}
```

可以看到，`Begin`-`End`所产生的作用比较纯粹，就是在其作用的范围内改变当前上下文`$Context`，而对`$ContextPath`毫无影响。相对地，`BeginPackage`-`EndPackage`则有几项副作用，它除了在作用范围内改变`$Context`和`$ContextPath`外，在使用`EndPackage[]`离开其作用范围时不仅将`$Context`和`$ContextPath`复原，而且会将还原前的上下文添加到`$ContextPath`中，从而方便我们直接使用导入包中的符号。

在实际的程序包开发中，这两种结构一般都会用到。比如在Mathematica自带示例程序包`ExampleData/Collatz.m`中有如下代码

```mathematica
BeginPackage["Collatz`"]

Collatz::usage =
        "Collatz[n] gives a list of the iterates in the 3n+1 problem,
        starting from n. The conjecture is that this sequence always
        terminates."

Begin["`Private`"]

Collatz[1] := {1}

Collatz[n_Integer]  := Prepend[Collatz[3 n + 1], n] /; OddQ[n] && n > 0

Collatz[n_Integer] := Prepend[Collatz[n/2], n] /; EvenQ[n] && n > 0

End[ ]

EndPackage[ ]
```

这个例子中我们可以看到一个程序包典型的上下文结构安排。`BeginPackage`-`EndPackage`主要用于引入接口性质的符号，而具体实现部分则往往置于`Begin`-`End`结构中以尽可能避免符号污染。

**思考题7**：
`x`和`` `x``之间有什么区别？运行下面两段代码，观察结果。思考并理解`` ` ``的含义。

```mathematica
x = 1;
Begin["`test`"];
x = 2;
{Context[], Context[x]}
End[];
```

```mathematica
`x = 1;
Begin["`test`"];
`x = 2;
End[];
{`x, `test`x}
```

**延伸阅读**：
[上下文](http://reference.wolfram.com/language/tutorial/Contexts.html)、[上下文和程序包](http://reference.wolfram.com/language/tutorial/ContextsAndPackages.html)、[建立 Wolfram 语言程序包](http://reference.wolfram.com/language/tutorial/SettingUpWolframLanguagePackages.html)、[对不同的笔记本自动使用独立的上下文环境](http://reference.wolfram.com/language/workflow/AutomaticallyUseSeparateContextsForDifferentNotebooks.html)、[处理符号名称遮盖的问题](http://reference.wolfram.com/language/workflow/HandleShadowingOfSymbolNames.html)

----

相关代码交互见 [笔记本](/assets/posts/ScopeInWolframLang/Scope.nb)。

