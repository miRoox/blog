---
layout: post
title: "Mathematica下标赋值问题补遗"
date: 2019-01-16 14:55:47
tag: ["编程", "Wolfram"]
---

我曾经写过一篇关于Mathematica中下标与赋值问题的[文章](https://miroox.github.io/2018/08/SubscriptAndDerivateInMma/)，不过那篇文章重点解决的是符号关联的问题。但有时，我们可能会遇到另一种问题，比如

<pre><code>
a=1
a<sub>1</sub>=2 (* wrong! *)
</code></pre>

<!--more-->

也就是定义了符号的本值之后又想定义带有同样符号的下标值。当然，我们是不推荐这么写的，这会使符号的含义很含混。
不过单从实用的角度考虑，让上面的代码正常工作并不困难，只需要对`Subscript`添加`HoldFirst`属性即可。

```mathematica
SetAttributes[Subscript,HoldFirst]
```
