---
layout: post
title: "MatrixForm赋值问题"
date: 2019-09-19 20:27:34
description: "MatrixForm"
tag: ["编程", "Wolfram"]
---


我们知道，赋值等过程中使用 `MatrixForm` 往往会导致后续的计算失效。
比如：

![a = {{1, 2}, {3, 4}} // MatrixForm](/image/posts/MatrixFormProblem/problem.svg)

对于这个问题，最正统的解决办法当然是在赋值等计算过程中不使用 `MatrixForm`，而只在显示时以 `MatrixForm` 呈现[^1]。
典型的方案是在输出部分才加上 `MatrixForm` 包装。
不过对于既有代码的问题，一个个手动修改可能略显麻烦，这时可以借助 `EchoFunction` 在实现类似效果的同时保持代码结构基本不变：

![a = {{1, 2}, {3, 4}} // EchoFunction[MatrixForm];](/image/posts/MatrixFormProblem/solution-echo.svg)

要将既有代码调整为这种方式，只需简单的文本替换就可以实现目标。

不过，本文要主要要谈的并不是这类传统解决方案，而是通过给 Mathematica 系统打上补丁来实现几乎零修改的解决方案。

我们知道，`MatrixForm` 这类格式封装，当它位于结果的*最外层*时，`Out` 输出历史中不会对其进行储存[^2]。
事实上，所有在 `$OutputForms` 中的格式封装都具有这样的性质。

受此启发，我们不妨把这个性质推广到赋值的情况上来，即这类格式封装出现在赋值运算的右侧时不会将其记录到赋值中。
事实上，通过重载 `Set` 的定义很容易实现这一功能：

```mathematica
GeneralUtilities`BlockProtected[{Set},
  Set[lhs_,(form:Alternatives@@$OutputForms)[rhs_]] := form@Set[lhs,rhs]
]
```

效果如图：

![a = {{1, 2}, {3, 4}} // MatrixForm](/image/posts/MatrixFormProblem/solution.svg)

----

参考：

[^1]: [Q&A: Compute with MatrixForm](http://people.math.umass.edu/~murray/Math_421_Eisenberg/Notes/Mathematica_Q___A/MatrixForm/matrixform.html)
[^2]: [为什么我的代码加了MatrixForm后就出问题了？](https://note.youdao.com/ynoteshare1/index.html?id=d0a57819857f2771ca669eb54819e3d1&type=note)
