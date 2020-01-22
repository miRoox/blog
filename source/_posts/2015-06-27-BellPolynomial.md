---
layout: post
title: "旧作：关于函数列 x,x²+x,x³+3x²+x,x⁴+6x³+7x²+x,……"
date: 2015-06-27 17:33:00
categories: "数理科学"
tag: ["数学", "数列"]
---

$$x,x^2+x,x^3+3x^2+x,x^4+6x^3+7x^2+x,\dots$$

这是对[前一篇文章](/2015-06-10-BellNumber)的一个补充和推广。

<!-- more-->

显然，令其中的 $x=1$ ,函数列就成为数列 $1,2,5,15,\dots$。

事实上，这一函数列来自原数列问题的推广

$$f_n(x)=\sum_{k=0}^{+\infty}\frac{k^n}{k!}x^k$$

而前几项

$$\begin{aligned}
f_1(x)&=x\mathrm{e}^x\\
f_2(x)&=(x+x^2)\mathrm{e}^x\\
f_3(x)&=(x^3+3x^2+x)\mathrm{e}^x\\
f_4(x)&=(x^4+6x^3+7x^2+x)\mathrm{e}^x\\
\end{aligned}$$

显然，原数列只是其特例

$$a_n=\sum_{k=0}^{+\infty}\frac{k^n}{k!}=f_n(1)$$

受此影响，我开始采用的是与之前一样的做法：

$$\begin{aligned}
f_1(x)&=\sum_{k=0}^{+\infty}\frac{k}{k!}x^k=x\sum_{k=1}^{+\infty}\frac{1}{(k-1)!}x^{k-1}=x\mathrm{e}^x\\
f_n(x)&=\sum_{k=0}^{+\infty}\frac{k^n}{k!}x^k\\
&=\sum_{k=1}^{+\infty}\frac{k^{n-1}}{(k-1)!}x^k\\
&=\sum_{k=1}^{+\infty}\frac{(k-1)^{n-1}}{(k-1)!}x^k+\sum_{j=1}^{n-1}\left[(-1)^{j+1}C_{n-1}^j\sum_{k=1}^{+\infty}\frac{k^{n-j-1}}{(k-1)!}x^k \right]\\
&=x\sum_{k=1}^{+\infty}\frac{k^{n-1}}{k!}x^k+\sum_{j=1}^{n-1}\left[(-1)^{j+1}C_{n-1}^j\sum_{k=1}^{+\infty}\frac{k^{n-j}}{k!}x^k \right]\\
&=xf_{n-1}(x)+\sum_{j=1}^{n-1}\left[(-1)^{j+1}C_{n-1}^jf_{n-j}(x) \right]
\end{aligned}$$

这样，我们原则上可以获得这一函数列的任意项（虽然很难算）。

然而，很快我就发现了另一种简便许多的办法：

$$f_{n+1}(x)=\sum_{k=0}^{+\infty}\frac{k^{n+1}}{k!}x^k=x\sum_{k=0}^{+\infty}\frac{k^{n+1}}{k!}x^{k-1}=x\frac{\mathrm{d}}{\mathrm{d}x}\left(\sum_{k=0}^{+\infty}\frac{k^n}{k!}x^k\right)=xf'_n(x)$$

这一递推式同样能得到这一函数列的任意项，而且计算上要简便许多。

而在此基础上，，我们求原数列 $a_n=f_n(1)$ 也比原来简便。这无疑是所谓“创造者悖论”（越宏大的计划,越有机会获得成功,多个问题也许要比一个问题容易回答,较全面的定理可能更容易证明,较普遍的题目可能更容易解答。）的一个例证。也正印证了华罗庚教授的一句话：“解题时先足够地退，退到我们最容易看清楚问题的地方，认透了，钻深了，然后再上去。”

---

附：

$\{\frac{f_n(x)}{\mathrm{e}^x}\}$ 的前几项：

$$\begin{gathered}
x \\
x^2+x \\
x^3+3x^2+x \\
x^4+6x^3+7x^2+x \\
x^5+10 x^4+25 x^3+15 x^2+x \\
x^6+15 x^5+65 x^4+90 x^3+31 x^2+x \\
x^7+21 x^6+140 x^5+350 x^4+301 x^3+63 x^2+x \\
x^8+28 x^7+266 x^6+1050 x^5+1701 x^4+966 x^3+127 x^2+x\\
\vdots
\end{gathered}$$

---

2020年1月18日补记：

在[前一篇](/2015-06-10-BellNumber)的补记中提到，用Mathematica发现了名为[`BellB`](http://reference.wolfram.com/language/ref/BellB.html)的函数。实际上，这个函数的完全体是 Bell 多项式，即这篇文章前面阐述的这个多项式序列。

它是函数 $h(t)=\exp[(\exp(t)-1)x ]$ 的生成函数。

甚至这个多项式的系数序列也有专门的名称，叫第二类Stirling数。这组数跟组合理论有深刻的联系。

另参见：

* [Bell Polynomial - Wolfram MathWorld](http://mathworld.wolfram.com/BellPolynomial.html)
* [Bell polynomial - Encyclopedia of Mathematics](https://www.encyclopediaofmath.org/index.php/Bell_polynomial)
* [OEIS A106800](http://oeis.org/A106800)
