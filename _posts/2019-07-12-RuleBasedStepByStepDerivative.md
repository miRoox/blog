---
layout: post
title: "基于规则的带步骤符号求导器"
date: 2019-07-12 22:27:17
description: "StepD"
tag: ["编程", "Wolfram"]
---

我们知道，[Wolfram|Alpha](https://www.wolframalpha.com)
有一个名为 [Step-by-Step Solutions](https://www.wolframalpha.com/examples/pro-features/step-by-step-solutions/) 的功能，
可以显示一些数学问题求解的过程。
又比如，著名的 [Rubi](https://rulebasedintegration.org/) 可以在求解积分的同时显示积分的求解步骤。
实际上，这些系统背后大抵都是基于模式匹配和规则变换而实现的，因而原则上来说自己也可以实现一个。
当然，就实践而言这些系统都过于复杂了，例如 Rubi 包含了超过六千条规则，其背后的原理远非三言两语可以阐明的。
不过，相比于积分，微分的运算规则要简明得多，而且对规则的应用总是简单机械的，并不像积分那样可能会运用到各种技巧。
因此，本文将利用 Mathematica 的模式匹配和规则实现一个带步骤符号求导器。

![Differentiation vs Integration](/images/posts/RuleBasedStepByStepDerivative/DvsInt.JPG)

### 求导规则

实现的核心首先在于对求导法则的代码表示。
由于 Rule-Based 也是 Wolfram 语言的基本范式，因此这些规则写起来也很直观。

首先是几个基本运算规则

```mathematica
baseRules={
  d[c_,x_]/;FreeQ[c,x]:>0,
  d[lf_Plus,x_]:>Thread[d[lf,x],Plus],
  d[c_*f_,x_]/;FreeQ[c,x]:>c*d[f,x],
  d[f_*g_,x_]:>d[f,x]g+d[g,x]f
};
```

这里，使用 `d[f,x]` 表示 $\tfrac{\mathrm{d}f}{\mathrm{d}x}$。
上述的代码表示了常数求导法则、线性求导法则和乘法求导法则的作用规则。

对于复合函数和反函数，需要一个间接的包装来表示类似 $f'(g(x))$ 的情况，这里将其表示为`dfunc[f,gx]`类似的形式，其中`gx`对应于$g(x)$。

```mathematica
higherRules={
  HoldPattern@d[InverseFunction[f_][x_],x_]:>1/dfunc[f,InverseFunction[f][x]],
  d[f_[g_],x_]/;g=!=x:>dfunc[f,g]d[g,x],
  d[f_[g_,c_],x_]/;FreeQ[c,x]&&g=!=x:>dfunc[f[#,c]&,g]d[g,x],
  d[f_[c_,g_],x_]/;FreeQ[c,x]&&g=!=x:>dfunc[f[c,#]&,g]d[g,x]
};
```

需要注意的是，为了避免问题过于复杂化，这里求导的对象都只限于初等函数。
因此在考虑复合函数的链导法则时实际不包含多元函数。
对于可能遇到地二元初等函数，要么其中一个参数与自变量无关，本质还是一元函数，要么可以通过变形转化成一元形式。

此外还有一点需要注意，在链式法则的规则中，模式条件`g=!=x`是必要的，否则可能陷入无限自递归的窘境。

在上面的高阶（反函数、复合函数）规则中，`dfunc`只是徒具形式的一个表示。
为了确实有效地计算这种情况，还需要引入一个替换规则。即在计算得到$f'(u)$后，再进行$u\to g(x)$的变量替换。
直接表达出来就比如

```mathematica
substRules=dfunc[f_,g_]:>d[f[u],u]/.{u->g};
```

不过这种写法当遇到函数`f`本身蕴含名为`u`的参量时就可能会出现错误的结果。
因而需要使用`Module`来引入哑元形式，即

```mathematica
substRules=dfunc[f_,g_]:>Module[{u},d[f[u],u]/.{u->g}];
```

但这是错误的。因为我们希望在计算出$f'(x)$后再做变量替换。
但上面的实现中，`d[f[u],u]`本身并不会求值，而是通过应用这些规则进行替换而得到的计算结果，从而导致替换发生在计算导数之前，那样就没有意义了。
因此需要一个`d`的立即求值版，命名为`dEval`。

```mathematica
substRules=dfunc[f_,g_]:>Module[{u},dEval[f[u],u]/.{u->g}];
```

关于`dEval`的实现，一个粗浅的想法是在完成全部规则的定义后，对输入按这些规则进行`ReplaceRepeated`。
当然，这其中还需要一些细节，我们这里暂且按下不表，留待后面再讨论。

接下来就是对具体函数的求导规则进行列举，比如

```mathematica
functionRules={
  HoldPattern[d[IgnoringInactive[Exp[x_]],x_]]:>Exp[x],
  HoldPattern[d[IgnoringInactive[Log[x_]],x_]]:>1/x,
  HoldPattern[d[IgnoringInactive[Sin[x_]],x_]]:>Cos[x],
  HoldPattern[d[IgnoringInactive[Cos[x_]],x_]]:>-Sin[x]
};
```

这样一个个手动枚举也比较繁琐，因此我们不妨利用 Mathematica 既有的求导功能来生成结果

```mathematica
functionRules=Table[
  With[{f=f},HoldPattern@d[IgnoringInactive@f[x_],x_]]->D[f[x],x],
  {f,{
    Sqrt,CubeRoot,RealAbs,
    Exp,Log,Log2,Log10,
    Sin,Cos,Tan,Cot,Sec,Csc,
    ArcSin,ArcCos,ArcTan,ArcCot,ArcSec,ArcCsc,
    Sinh,Cosh,Tanh,Coth,Sech,Csch,
    ArcSinh,ArcCosh,ArcTanh,ArcCoth,ArcSech,ArcCsch
    }
  }
]/.{Rule->RuleDelayed};
```

除了这些可以直接表示的一元函数，还有一些形式上是二元函数的一元函数情况，这里简单列举一下

```mathematica
functionExtRules={
  HoldPattern@d[x_^a_.,x_]/;FreeQ[a,x]:>a x^(a-1),
  HoldPattern@d[a_^x_,x_]/;FreeQ[a,x]:>a^x Log[a],
  HoldPattern@d[IgnoringInactive@Surd[x_,n_],x_]/;FreeQ[n,x]:>1/(n Surd[x,n]^(n-1))
};
```

稍微值得一提的是，由于`Power`的`OneIdentity`属性，模式`x_^a_.`也会直接匹配`x`这种情况。

除此之外，还有一些二元函数可以通过变形得到上述一元函数的组合

```mathematica
transferRules={
  HoldPattern@d[IgnoringInactive[f_^g_],x_]/;!(FreeQ[f,x]||FreeQ[g,x]):>d[Inactive[Exp][Log[f]g],x],
  HoldPattern@d[IgnoringInactive@Log[f_,g_],x_]:>d[Log[g]/Log[f],x]
};
```

这里的`Inactive[Exp]`是为了抑制指数函数的内置化简规则。
也正是为了方面使用`Inactive`控制变形的方向，前面的函数求导规则的模式中都包含了`IgnoringInactive`。

这样，一个囊括了初等函数的符号求导规则就全部完成了。
最后将所有规则整合到一起

```mathematica
allRules=Flatten@{
  transferRules,
  baseRules,
  functionRules,
  functionExtRules,
  substRules,
  higherRules
};
```

如果只需要进行求导计算，那么直接对输入按这些规则进行替换即可

```mathematica
dEval[f_,x_]:=d[f,x]//.allRules
```

举一个简单的例子测试一下

```mathematica
(dEval==D)[(x^Sin[x]+3x+ArcTan[x])^2/(x^4-3Surd[x^5,3]RealAbs@Log[x]+2),x]//Through//Simplify
(*Out: True*)
```

也就是说利用这些规则已经可以实现对初等函数的求导运算了。
然而，假如输入的待求导函数不只包含初等函数，那么`dEval`就无法完全计算，得到的结果中会包含错误的形式。
诚然，我们的目标只在解决初等函数的求导，对于初等函数以外的情况无法解决也是正常的，
不过从健壮性的角度考虑，这里最好再增加一个条件以避免某些可能出现的潜在问题。

```mathematica
substRules=dfunc[f_,g_]:>Module[{u},
  With[{df=dEval[f[u],u]},
    (df/.{u->g})/;FreeQ[df,_d|_dfunc]
  ]
];
```

这里利用作用域里的条件模式来保证遇到`dEval`无法解决的情况时会保持既有的`dfunc`形式不变。
可以试试下面的代码测试一下效果

```mathematica
dEval[Erf[Sin[x]]^2,x]
```

### 步骤回显

然后是对计算步骤的输出显示。
我们希望将替换的每一步都显示出来，因此不能直接使用`//.`，而应该使用`NestWhile`之类的方式对每次替换获得更精确的控制。
在输出显示上，用`CellPrint`比较方便，也比单纯的`Print`好控制格式。

首先，对于输出步骤的每个单元，我们希望前面有一个`=`标记，就像`Echo`产生的单元前的`>>`标志符一样。这一点可以利用`CellDingbat`实现：

```mathematica
echoStep[expr_]:=(
  CellPrint@Cell[BoxData[FormBox[ToBoxes[removeLabels@expr,TraditionalForm],TraditionalForm]],"Print",
    CellDingbat->Cell["=","EchoLabel"]];
  expr
)
```

然后，与之类似地，还需要一个函数输出显示最初地状态作为等式的起点。
需要注意的是，为了比较好地对齐，需要对两者使用不同的边距：

{% raw %}
```mathematica
echoStep0[expr_]:=(
  CellPrint@Cell[BoxData[FormBox[ToBoxes[expr,TraditionalForm],TraditionalForm]],"Print",
    CellMargins->{{Inherited, Inherited},{Inherited,Inherited}}];
  expr
)
echoStep[expr_]:=(
  CellPrint@Cell[BoxData[FormBox[ToBoxes[expr,TraditionalForm],TraditionalForm]],"Print",
    CellDingbat->Cell["=","EchoLabel"],
    CellMargins->{{Inherited+20, Inherited},{Inherited,Inherited}}];
  expr
)
```
{% endraw %}

进一步地，考虑到复合函数求导时需要转入对其它函数求导的过程，这将打断正在进行的求导步骤间的顺叙关系，从逻辑上进入更深的层级。
为了表现这种层级关系，这里同样通过调整边距实现。
引入一个层级标志量`$dDepth`：
每当计算`dEval`时都增加这一标志量，结束时就将其还原；
同时利用`$dDepth`控制边距以实现对边距的适应调整。

{% raw %}
```mathematica
$dDepth=0;
echoStep0[expr_]:=(
  CellPrint@Cell[BoxData[FormBox[ToBoxes[expr,TraditionalForm],TraditionalForm]],"Print",
    CellMargins->{{Inherited+20($dDepth-1), Inherited},{Inherited,Inherited}}];
  expr
)
echoStep[expr_]:=(
  CellPrint@Cell[BoxData[FormBox[ToBoxes[expr,TraditionalForm],TraditionalForm]],"Print",
    CellDingbat->Cell["=","EchoLabel"],
    CellMargins->{{Inherited+20$dDepth, Inherited},{Inherited,Inherited}}];
  expr
)
```
{% endraw %}

```mathematica
dEval[f_,x_]:=Block[{$dDepth=$dDepth+1},dEvalR[f,x]]
dEvalR[f_,x_]:=NestWhile[echoStep@*ReplaceAll[allRules],echoStep0[d[f,x]],!FreeQ[#2,_d|_dfunc]&&UnsameQ[##]&,2]
stepD[f_,x_]:=With[{eval=dEval[f,x]},eval/;FreeQ[eval,_d|_dfunc]]
```

这里将具体的求导运算过程委托到`dEvalR`函数上，利用以是否存在未完成的求导形式为基本判据，同时辅以不变性作为无法完成时的终止条件。
再把`stepD`作为封装的外部接口，通过条件模式限制，在失败时保持输入形式，避免内部`dfunc`等内部符号暴露到输出中。

测试一下

![Echo Step](/images/posts/RuleBasedStepByStepDerivative/echo-step.svg)

### 润色外观

可以看到步骤显示中的输出形式很难看。为了增加步骤的可读性，我们可以通过自定义显示格式来润色外观。
考虑我们本身使用的代码结构，将公式输出为Leibniz符号的形式比较方便。

```mathematica
d/:MakeBoxes[d[f_,x_],TraditionalForm]:=Module[{boxes},
  boxes=MakeBoxes[f, TraditionalForm];
  If[Precedence[Plus]>=Precedence[boxes,TraditionalForm],boxes=RowBox[{"(", boxes, ")"}]];
  RowBox[{FractionBox["\[DifferentialD]", RowBox[{"\[DifferentialD]", MakeBoxes[x, TraditionalForm]}]], boxes}]
]
dfunc/:MakeBoxes[dfunc[f_, g_], TraditionalForm]:=Module[{fboxes, gboxes},
  fboxes=ToBoxes[f[g], TraditionalForm]; gboxes=ToBoxes[g, TraditionalForm];
  If[Precedence[Plus]>=Precedence[fboxes, TraditionalForm],fboxes=RowBox[{"(", fboxes, ")"}]];
  If[Precedence[Plus]>=Precedence[gboxes, TraditionalForm],gboxes=RowBox[{"(", gboxes, ")"}]];
  FractionBox[RowBox[{"\[DifferentialD]", fboxes}], RowBox[{"\[DifferentialD]", gboxes}]]
]
```

然后对于被`Module`局域化符号的显示，像`u$nnn`这样的形式显然不太好看，
在这里也可以给出一个美化模板，它将这类符号的输出形式显示为首字母

```mathematica
makeXForm[sym_Symbol]:=sym/:MakeBoxes[sym,TraditionalForm]=ToBoxes[Symbol[StringPart[SymbolName[sym],1]],TraditionalForm]
```

再用在替换规则中

```mathematica
substRules=dfunc[f_,g_]:>Module[{u},
  makeXForm[u];
  With[{df=dEval[f[u],u]},
    (df/.{u->g})/;FreeQ[df,_d|_dfunc]
  ]
];
```

得到的结果就更接近于数学中的写法了

![Format](/images/posts/RuleBasedStepByStepDerivative/format.svg)

### 标注步骤

最后，我们还希望给每一步中所使用的特殊规则标注名称，方便理解各个步骤到底做了什么。
比如 “乘法法则” “链式法则” 这样的注解。
我们首先将这些注解都标记在求导的规则中

```mathematica
baseRules={
  d[c_,x_]/;FreeQ[c,x]:>dLabeled[0,"Constant Rule"],
  d[lf_Plus,x_]:>dLabeled[Thread[d[lf,x],Plus],"Linearity Rule"],
  d[c_*f_,x_]/;FreeQ[c,x]:>dLabeled[c*d[f,x],"Linearity Rule"],
  d[f_*g_,x_]:>dLabeled[d[f,x]g+d[g,x]f,"Product Rule"]
};

higherRules={
  HoldPattern@d[InverseFunction[f_][x_],x_]:>dLabeled[1/dfunc[f,InverseFunction[f][x]],"Inverse Function Rule"],
  d[f_[g_],x_]/;g=!=x:>dLabeled[dfunc[f,g]d[g,x],"Chain Rule"],
  d[f_[g_,c_],x_]/;FreeQ[c,x]&&g=!=x:>dLabeled[dfunc[f[#,c]&,g]d[g,x],"Chain Rule"],
  d[f_[c_,g_],x_]/;FreeQ[c,x]&&g=!=x:>dLabeled[dfunc[f[c,#]&,g]d[g,x],"Chain Rule"]
};
```

还有链式法则使用时，替换后的变元原本指代的是什么也应该标记出来，以方便阅读和理解。

```mathematica
substRules=dfunc[f_,g_]:>Module[{u},
  makeXForm[u];
  With[
    {df=dEval[dLabeled[f[u],Row@{"where ",TraditionalForm[u==g]}],u]},
    (df/.{u->g})/;FreeQ[df,_d|_dfunc]
  ]
];
```

有了规则中的标记，我们就需要能够从表达式里将标记都提取出来的方法。

```mathematica
getLabels[expr_]:=With[
  {lbs=DeleteDuplicates@Cases[expr,dLabeled[_,lb_]:>lb,{0,Infinity}]},
  Row@Flatten@{"(",Riffle[lbs,"; "],")"}/;lbs=!={}
]
getLabels[_]="";
```

注意一步计算可以会运用多个规则，输出应该为分割得到的一组。同时，对于重复项最好也应该删除。

而这些`dLabeled`标记形式本身不应出现在求导的过程中，所以应该在每步计算完成后移除

```mathematica
removeLabels[expr_]:=expr/.{dLabeled[e_,_]:>e}
```

然后在输出时，注解通过`CellFrameLabels`显示在每个单元的右侧。

{% raw %}
```mathematica
echoStep0[expr_]:=(
  CellPrint@Cell[BoxData[FormBox[ToBoxes[removeLabels@expr,TraditionalForm],TraditionalForm]],"Print",
    CellMargins->{{Inherited+20($dDepth-1), Inherited},{Inherited,Inherited}},
    CellFrameLabels->{{None,Cell[BoxData@ToBoxes@getLabels[expr],"MessageText"]},{None,None}}];
  expr
)
echoStep[expr_]:=(
  CellPrint@Cell[BoxData[FormBox[ToBoxes[removeLabels@expr,TraditionalForm],TraditionalForm]],"Print",
    CellDingbat->Cell["=","EchoLabel"],
    CellMargins->{{Inherited+20$dDepth, Inherited},{Inherited,Inherited}},
    CellFrameLabels->{{None,Cell[BoxData@ToBoxes@getLabels[expr],"MessageText"]},{None,None}}];
  expr
)
```
{% endraw %}

最后将这些过程添加到计算的每一步中

```mathematica
dEvalR[f_,x_]:=NestWhile[
  removeLabels@*echoStep@*ReplaceAll[allRules],
  removeLabels@echoStep0[d[f,x]],
  !FreeQ[#2,_d|_dfunc]&&UnsameQ[##]&,2
]
```

就大功告成了。

简单测试一下

![Label](/images/posts/RuleBasedStepByStepDerivative/label.svg)

### 小结

最终整理得到的完整代码放在 [Github](https://github.com/miRoox/DStep/blob/master/DStep.wl) 上。
