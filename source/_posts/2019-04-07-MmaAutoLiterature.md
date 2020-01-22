---
layout: post
title: "Mathematica写作自动化技巧"
date: 2019-04-07 22:45:31
tag: ["编程", "Wolfram"]
---

在使用Mathematica的笔记本的过程中，我们常常希望将它的代码和文档功能结合起来，例如自动将符号计算的公式、图形以文档的书写习惯展示出来，同时隐藏生成代码，使文档显示自然协调。

<!--more-->

为了达到这一目的，首先需要的是将输入自动隐藏。我们知道，即使在自然状态下，双击输出单元的单元括号`]`即可隐藏输入单元。这一操作实际相当于选中输出单元后执行了前端令牌["SelectionCloseUnselectedCells"](https://reference.wolfram.com/language/ref/frontendobject/SelectionCloseUnselectedCells.html)，因此，可以将其写作程序代码

```mathematica
SelectionMove[EvaluationNotebook[],All,GeneratedCell];
FrontEndTokenExecute["SelectionCloseUnselectedCells"];
```

在输入单元最后加入上述代码即可在执行后自动折叠隐藏输入单元。

不过，当我们需要展示公式时，我们往往希望使用`DisplayFormula`或者`DisplayFormulaNumbered`等公式样式。但直接使用`CellPrint`以此样式输出的话，则因为输入单元与输出的公式单元不会自动编组而无法通过上述方式折叠。所幸单元也支持应用多个样式，将公式样式与`Output`样式同时应用即可解决。例如：

```mathematica
CellPrint[ExpressionCell[D[x^2,x],"Output","DisplayFormulaNumbered"]];
SelectionMove[EvaluationNotebook[],All,GeneratedCell];
FrontEndTokenExecute["SelectionCloseUnselectedCells"];
```

我们也可以将这些功能都整合进样式表中，在`CellEpilog`中添加折叠单元代码，在`GeneratedCellStyles`中改变输出单元的样式。例如，我们可以通过在样式表中添加如下内容来自定义一个`FormulaGenerator`样式

{% codeblock lang:mathematica %}{% raw %}
Cell[StyleData["FormulaGenerator", StyleDefinitions -> StyleData["Input"]],
 CellEpilog:>(SelectionMove[
    EvaluationNotebook[], All, GeneratedCell]; 
  FrontEndTokenExecute["SelectionCloseUnselectedCells"]),
 GeneratedCellStyles->{"Output"->{"Output", "DisplayFormulaNumbered"}},
 MenuSortingValue->10000]
{% endraw %}{% endcodeblock %}

这样，使用`FormulaGenerator`样式的输入单元在计算后就会生成一个带标号的公式单元并自动隐藏起来。

------
参见：

* [隐藏笔记本的输入](http://reference.wolfram.com/language/workflow/HideInputInANotebook.html)
* [How to Keep Input Cells Hidden After Evaluating Notebook](https://mathematica.stackexchange.com/questions/680/how-to-keep-input-cells-hidden-after-evaluating-notebook)
* [How to set the output be generated in a cell different from “Output”](https://mathematica.stackexchange.com/questions/70185/how-to-set-the-output-be-generated-in-a-cell-different-from-output)
