---
layout: post
title: "旧作：借助卷积定理证明中心极限定理"
date: 2017-04-14 18:44:34
description: "中心极限定理, 傅里叶变换, 卷积定理"
tag: 数学
use_math: true
---

**摘要** ：中心极限定理的研究在概率论具有重要地位，它揭示了大量独立同分布的的随机变量之和的极限趋势为正态分布，在统计学以及其它许多学科中都有重要的应用。但教材[^1]中并没有给出其具体证明。本文将从傅里叶变换中的卷积定理的角度证明该定理。

**关键词** ：中心极限定理, 傅里叶变换, 卷积定理 

## 引言

> Everyone believes in it: experimentalists believing that it is a mathematical theorem, mathematicians believing that it is an empirical fact.
> {: style="text-align:left"}
> 
> ——Henri Poincaré [^2] 
  {: style="text-align:right"}

对中心极限定理的研究实质上始于1733年棣莫弗（A. de Moirvre）对二项分布的极限分布的研究，并得到了拉普拉斯（P.-S. Laplace）、泊松（S.-D. Possion）、贝塞尔（A.L. Bessel）、柯西（A.-L. Cauchy）等人的进一步研究和推广。但总体上，由于当时概率论不太受数学家重视，中心极限定理在很长一段时间没有得到一个完整的严格证明，直到1901年李雅普诺夫（A.M. Lyapunov）借助特征函数的工具才有了一个条件较为宽松的严格证明。[^3]

一个常用的中心极限定理如下：[^1]

**定理 1 （独立同分布的中心极限定理）** 
*如果随机变量序列 $X_{1},X_{2},\cdots ,X_{n},\cdots$ 独立同分布，并且具有有限的数学期望和方差 $E(X_{i})=\mu ,D(X_{i})=\sigma ^{2}>0 (i=1,2,3,\cdots )$ ，则对一切 $x\in {\rm\bf{R}}$ 有*

$$
\begin{equation}\label{eq:CLToInID}
  \lim_{n\to\infty} P(\frac{1}{\sqrt{n}\sigma}(\sum_{i=1}^{n}X_{i}-n\mu )\le x) = \int_{-\infty }^{x}\frac{1}{\sqrt{2\pi}}e^{-\frac{t^{2}}{2}}dt
\end{equation}
$$

本文将以上述定理为例，从卷积定理的角度对其进行证明。

## 卷积定理及中心极限定理的证明

### 卷积、卷积与独立随机变量之和的关系

在傅里叶变换的语境下，卷积的概念如下：[^4]

**定义 1 （卷积）** 
*给定定义在 $(-\infty,+\infty)$ 上的函数 $f_{1}(t)$ 与 $f_{2}(t)$ ，称由含参变量 $t$ 的广义积分所确定的函数*

$$
\begin{equation}\label{eq:colvu}
  g(t) = \int_{-\infty}^{+\infty}f_{1}(\tau)f_{2}(t-\tau)d\tau
\end{equation}
$$

*为函数 $f_{1}(t)$ 与 $f_{2}(t)$ 的卷积，记为*

$$
\begin{equation*}
  g(t) = f_{1}(t) \ast f_{2}(t)
\end{equation*}
$$

出于方便，我们只考虑连续型随机变量（离散型随机变量通常可以通过在连续型随机变量的概率密度函数中使用Dirac δ 函数来表示）。我们注意到，对于独立随机变量 $X_{1},X_{2}$ ，其概率密度为 $f_{1}(x_{1}),f_{2}(x_{2})$ ，那么对于任意的 $Y\in \textbf{R}$ ，都有

$$
\begin{align}\label{eq:randsum}
  P(X_{1}+X_{2}\le Y) &= \iint_{x_{1}+x_{2}\le Y}f_{1}(x_{1})f_{2}(x_{2})dx_{1}dx_{2} \\
   &= \int_{-\infty}^{Y}\int_{-\infty}^{+\infty}f_{1}(x_{1})f_{2}(y-x_{1})dx_{1}dy \\
   &= \int_{-\infty}^{Y}(f_{1}\ast f_{2})(y)dy
\end{align}
$$

亦即，若记随机变量$Y=X_{1}+X_{2}$，则其概率密度函数

$$
\begin{equation}\label{eq:randsumcolvu}
  f_{Y}(y) = (f_{1}\ast f_{2})(y)
\end{equation}
$$

归纳地，对于随机变量$Y=X_{1}+X_{2}+\cdots+X_{n}$，其概率密度函数

$$
\begin{equation}\label{eq:randsumscolvu}
  f_{Y}(y) = (f_{1}\ast f_{2} \ast \cdots \ast f_{n})(y)
\end{equation}
$$

### 中心极限定理的证明

众所周知，傅里叶变换可以将函数的卷积变换为像函数的乘积，即所谓的卷积定理[^5]

**定理 2 （卷积定理）** 
*给定两个函数$f_{1}(t),f_{2}(t)$，记$F_{1}(\omega)=\mathcal{F} [f_{1}(t)],F_{2}(\omega)=\mathcal{F} [f_{2}(t)]$，则*

$$
\begin{equation}\label{eq:colvuthm}
  \mathcal{F} [f_{1}(t) \ast f_{2}(t)] = F_{1}(\omega)\cdot F_{2}(\omega)
\end{equation}
$$

这样，独立的随机变量之和的概率密度函数的求解可以得到简化。

下面进行对 定理 1 进行证明：

对于独立同分布的随机变量序列 $X_{1},X_{2},\cdots ,X_{n},\cdots$ ，具有相同的概率密度$f(x)$，不妨取其期望$E(X_{i})=0$， 方差$D(X_{i})=1$（一般的，对于期望为$\mu$，方差为$\sigma^{2}$的随机变量$X'$，总能通过变换$X=\frac{X'-\mu}{\sigma}$化为这种“标准”的形式）。另记随机变量

$$
\begin{equation*}
  Y_{n} = \frac{1}{\sqrt{n}}(\sum_{i=1}^{n}X_{i} )
\end{equation*}
$$

其概率密度为

$$
\begin{equation*}
  f_{n}(y) = \sqrt{n}(\underbrace{ f\ast\cdots\ast f}_{n})(\sqrt{n}y)
\end{equation*}
$$

记$\mathcal{F} [f(x)]=F(\omega)$，对$f_{n}(y)$做傅里叶变换

$$
\begin{align}\label{eq:Yfourier}
  \mathcal{F} [f_{n}(y)] &= \mathcal{F} [\sqrt{n}(\underbrace{ f\ast\cdots\ast f}_{n})(\sqrt{n}y)] \\
  &= \sqrt{n}\mathcal{F} [(\underbrace{ f\ast\cdots\ast f}_{n})(\sqrt{n}y)] \\
  &= (\mathcal{F} (\underbrace{ f\ast\cdots\ast f}_{n}))(\frac{\omega}{\sqrt{n}}) \\
  &= (F(\frac{\omega}{\sqrt{n}}))^{n}
\end{align}
$$

另一方面

$$
\begin{equation}\label{eq:fourierdef}
  F(\frac{\omega}{\sqrt{n}}) = \int_{-\infty}^{+\infty}f(x)e^{-\imath\dfrac{\omega}{\sqrt{n}}x}dx
\end{equation}
$$

注意到$\vert e^{-\imath\frac{\omega}{\sqrt{n}}x}\vert =1$，故上述积分绝对收敛。

对$e^{-\imath\frac{\omega}{\sqrt{n}}x}$做泰勒展开

$$
\begin{align}\label{eq:taylor}
  F(\frac{\omega}{\sqrt{n}}) &= \int_{-\infty}^{+\infty} [1 - \imath\dfrac{\omega}{\sqrt{n}}x + \dfrac{1}{2}(\imath\dfrac{\omega}{\sqrt{n}}x)^{2} + R_{n}(x)] f(x)dx \\
  &= \int_{-\infty}^{+\infty}f(x)dx - \imath\dfrac{\omega}{\sqrt{n}}\int_{-\infty}^{+\infty}xf(x)dx -  \dfrac{\omega^{2}}{2n}\int_{-\infty}^{+\infty}x^{2}f(x)dx + \int_{-\infty}^{+\infty}R_{n}(x)f(x)dx \\
  &= 1-\dfrac{\omega^{2}}{2n} + \int_{-\infty}^{+\infty}R_{n}(x)f(x)dx
\end{align}
$$

由于式(\ref{eq:fourierdef})中的积分总是有限的，故上式中

$$
\begin{equation*}
  \int_{-\infty}^{+\infty}R_{n}(x)f(x)dx=o(\frac{1}{n}) \qquad ,n\to\infty
\end{equation*}
$$

因而

$$
\begin{equation}\label{eq:limit}
  \lim_{n\to\infty}(F(\frac{\omega}{\sqrt{n}}))^{n}
  = \lim_{n\to\infty}(1-\frac{\omega^{2}}{2n}+o(\frac{1}{n}))^{n}
  = e^{-\frac{\omega^{2}}{2}}
\end{equation}
$$

对上式求傅里叶逆变换即可得

$$
\begin{equation}\label{eq:inverse}
  \lim_{n\to\infty}f_{n}(y) = \mathcal{F}^{-1} [e^{-\frac{\omega^{2}}{2}}] = \frac{1}{\sqrt{2\pi}}e^{-\frac{\omega^{2}}{2}}
\end{equation}
$$

定理 1 得证。

类似地，只要将$Y_{n}$改写为$\frac{X_{1}+X_{2}+\cdots +X_{n}}{n}$，按同样的方法不难得到大数定律。

## 结论

中心极限定理的研究曾在概率论中占据中心地位，而傅里叶变换对微分、积分、卷积等运算都具有简化的作用。将傅里叶变换运用到概率论中可以获得极大的便利，由于概率分布具有归一化的性质，因而对概率密度函数使用傅里叶变换总是可行的，实际上，概率论中的“特征函数”就是对概率密度函数的傅里叶变换，可以说，它的出现把概率理论的研究推上了一个新的台阶。

---

参考资料:

[^1]: 王勇主编   2014   大学数学. 概率论与数理统计 （北京：高等教育出版社） 第141页

[^2]: JinZhihui   2013   正态分布的前世今生（下）  <http://cos.name/2013/01/story-of-normal-distribution-2/>

[^3]: 杨静, 邓明立   2013   中心极限定理的创立与发展   科学   Vol.65 No.5

[^4]: 哈尔滨工业大学数学系组编；包革军，邢宇明，盖云英编   2013   复变函数与积分变换 （第三版） （北京：科学出版社） 第241页

[^5]: 哈尔滨工业大学数学系组编；包革军，邢宇明，盖云英编   2013   复变函数与积分变换 （第三版） （北京：科学出版社） 第247页
