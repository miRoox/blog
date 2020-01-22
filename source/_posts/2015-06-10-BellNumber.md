---
layout: post
title: "旧作：关于数列 1,2,5,15,……"
date: 2015-06-10 10:52:00
categories: "数理科学"
tag: ["数学", "数列"]
---

考虑序列

$$a_n=\sum_{k=0}^{+\infty}\frac{k^n}{k!}$$

<!-- more-->

我用计算器随便试了下发现

$$\begin{aligned}
a_1/\mathrm{e}&=1\\
a_2/\mathrm{e}&=2\\
a_3/\mathrm{e}&=5\\
a_4/\mathrm{e}&=15\\
 &\ \ \vdots
\end{aligned}$$

它们竟都是 $\mathrm{e}$ 的整数倍，这种规律性显然不平凡。于是我便开始思索其中的计算方法。这当中， $a_1$ 的计算给予了我关键的启发：

$$a_1=\sum_{k=0}^{+\infty}\frac{k}{k!}=\sum_{k=1}^{+\infty}\frac{1}{(k-1)!}=\mathrm{e}$$

依循这个思路，就会有

$$\begin{aligned}
a_n&=\sum_{k=0}^{+\infty}\frac{k^n}{k!}\\
&=\sum_{k=1}^{+\infty}\frac{k^{n-1}}{(k-1)!}\\
&=\sum_{k=1}^{+\infty}\frac{(k-1)^{n-1}}{(k-1)!}+\sum_{k=1}^{+\infty}C_{n-1}^1\frac{k^{n-2}}{(k-1)!}-\sum_{k=1}^{+\infty}C_{n-1}^2\frac{k^{n-3}}{(k-1)!}+\cdots+(-1)^n\sum_{k=1}^{+\infty}C_{n-1}^{n-1}\frac{1}{(k-1)!}\\
&=\sum_{k=1}^{+\infty}\frac{(k-1)^{n-1}}{(k-1)!}+\sum_{j=1}^{n-1}\left[(-1)^{j+1}C_{n-1}^j\sum_{k=1}^{+\infty}\frac{k^{n-j-1}}{(k-1)!} \right]\\
&=a_{n-1}+\sum_{j=1}^{n-1}\left[(-1)^{j+1}C_{n-1}^ja_{n-j} \right]
\end{aligned}$$

根据这个地推公式，我们可以算出任意 $n$ 对应 $a_n$ 的值。

显然，所有 $a_n$ 都会是 $a_1$ 也就是 $\mathrm{e}$ 的整数倍。

----

2020年1月18日补记：

拿Mathematica的找规律函数`FindSequenceFunction`随便尝试了一下，居然发现了一个这样的内置函数[`BellB`](http://reference.wolfram.com/language/ref/BellB.html)

```mathematica
FindSequenceFunction[{1, 2, 5, 15}]
(*Out[ ]=BellB*)
```

在`BellB`的文档里也能看到完全一样的结果：

{% asset_img BellB.svg Sum can give results involving BellB %}

看来当初的奇妙发现也不过是发掘一些别人玩剩下的。尽管按照Mathematica文档里的背景描述，其出发点不完全相同，可见[下一篇](/2015-06-27-BellPolynomial)的补记。
