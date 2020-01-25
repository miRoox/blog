---
layout: post
title: "旧作：低观点下的线性微分方程的解法"
date: 2016-12-05 23:16:23
categories: "数理科学"
tag: ["数学", "微积分"]
---

> 低观点的话，就只能上技巧了吧？

**摘要** ：一种不涉及线性微分方程解的结构的方法。

<!--more-->

### 一阶常系数线性非齐次微分方程的另解

对于非齐次方程

$$y'=p(x)y+q(x)\phantom{xxxx} \text{其中，} q(x)\neq 0 \tag{1}$$

即

$$y'-p(x)y=q(x)$$

为了在上式左边得到导数乘法公式的形式 

$$(f\cdot g)'=f'\cdot g+f\cdot g' \tag{2}$$

等式两边同乘 $f(x)$ ，即

$$y'\cdot f(x)-p(x)y\cdot f(x)=q(x)f(x) \tag{3}$$

比对公式(2)，$f(x)$ 应满足 $f'(x)=-p(x)f(x)$

容易解得

$$f(x)=\mathrm{e}^{-\int p(x)dx} \tag{4}$$

（任意常数显然没有必要）

则(3)式可以化成 $(y\cdot f(x))'=q(x)f(x)$，解得

$$y=\frac{1}{f(x)}(C+\int q(x)f(x)dx)$$

再带入(4)，即有

$$y=\mathrm{e}^{\int p(x)dx}(C+\int q(x)\mathrm{e}^{-\int p(x)dx}dx) \tag{5}$$

本方法的核心在于凑出导数乘法公式形式，相当于再解一个齐次微分方程，思路比常数变易法要显然，因此也不必记忆公式，知道凑乘法的思路即可，而且容易推广到其它问题上（比如中值定理凑函数的问题，以及下面的高阶线性微分方程等）。

### 二阶常系数线性齐次方程

$$y''+py'+qy=0$$

令 $p=-(r_{1}+r_{2})$, $q=r_{1}r_{2}$，即 $r_{1}, r_{2}$ 是 $x^{2}+px+q=0$ 的根，显然存在。则

$$\begin{aligned}
	y''-(r_{1}+r_{2})y'+r_{1}r_{2}y&=0 \\
	\implies (y''-r_{1}y')-r_{2}(y'-r_{1}y)&=0 \\
	\implies (y'-r_{1}y)'-r_{2}(y'-r_{1}y)&=0
\end{aligned}$$

可得

$$y'-r_{1}y=C_{0}\mathrm{e}^{r_{2}x} \tag{6}$$

**若 $r_{1}\neq r_{2}$ ：**

对(6)式两边同时乘 $\mathrm{e}^{-r_{1}x}$ ，则有

$$\begin{aligned}
	\mathrm{e}^{-r_{1}x}y'-r_{1}\mathrm{e}^{-r_{1}x}y&=C_{0}\mathrm{e}^{(r_{2}-r_{1})x} \\
	\implies (\mathrm{e}^{-r_{1}x}y)'&=C_{0}\mathrm{e}^{(r_{2}-r_{1})x} \\
	\implies y&=\frac{C_{0}}{r_{2}-r_{1}}\mathrm{e}^{r_{2}x}+C_{1}\mathrm{e}^{r_{1}x} \tag{7}
\end{aligned}$$

不妨记 $C_{2}=\frac{C_{0}}{r_{2}-r_{1}}$ ，即

$$y=C_{2}\mathrm{e}^{r_{2}x}+C_{1}\mathrm{e}^{r_{1}x}$$

**若 $r_{1}=r_{2}$ ，记作$r$ ：**

对(6)式两边同时乘 $\mathrm{e}^{-rx}$ ，则

$$\begin{aligned}
	\mathrm{e}^{-rx}y'-r\mathrm{e}^{-rx}y&=C_{0} \\
	\Rightarrow (\mathrm{e}^{-rx}y)'&=C_{0} \\
	\Rightarrow y&=C_{0}x\mathrm{e}^{rx}+C_{1}\mathrm{e}^{rx} \tag{8}
\end{aligned}$$

事实上，对(7)式取极限 $r_{2}\rightarrow r_{1}=r$ 亦可得到(8)式。

### 二阶常系数线性非齐次方程一般形式

$$y''+py'+qy=f(x)$$

与齐次方程类似处理，$(y'-r_{1}y)'-r_{2}(y'-r_{1}y)=f(x)$ 

实质上，这等价于两个一阶线性非齐次方程：

$$\begin{aligned}
	u'-r_{2}u&=f(x) \\
	y'-r_{1}y&=u(x)
\end{aligned}$$

利用之前一阶线性非齐次方程中方法即可解出$y$ 

一般地，对 $n$ 阶常系数线性微分方程 $y^{(n)}+a_{1}y^{(n-1)}+\cdots +a_{n}y=f(x)$ 

等价于求解 $n$ 个一阶非齐次微分方程：

$$\begin{aligned}
	u_{n}'-r_{n}u_{n}&=f(x) \\
	u_{n-1}'-r_{n-1}u_{n-1}&=u_{n}(x) \\
	&\vdots \\
	u_{2}'-r_{2}u_{2}&=u_{3}(x) \\
	y'-r_{1}y&=u_{2}
\end{aligned}$$

（其中，$r_{1},r_{2},\cdots ,r_{n}$ 是代数方程 $x^{n}+a_{1}x^{n-1}+\cdots +a_{n}=0$ 的根）

### 二阶常系数线性非齐次方程特殊形式

$$y''+py'+qy=\mathrm{e}^{\alpha x} [ P(x)\cos \beta x+Q(x)\sin \beta x ] \tag{9}$$

（其中 $P(x),Q(x)$ 是 $n$ 次多项式）

这是前面一般形式的一种特殊的情况，只需要注意如下两个事实：

①由欧拉恒等式 $\mathrm{e}^{\imath x}=\cos x+\imath \sin x$，知上式右边可化为

$$S(x)\mathrm{e}^{\lambda x}$$

其中，$\lambda =\alpha +\imath \beta$，$S(x)$是适当的 $n$ 次多项式； 

②对于 $n$ 次多项式 $S(x)$，若 $\lambda \neq 0$，则

$$\int S(x)\mathrm{e}^{\lambda x}=T(x)\mathrm{e}^{\lambda x}+C$$

其中，$T(x)$ 也是 $n$ 次多项式。

由此不难得到，对式(9)

**若 $\alpha +\imath \beta$是方程$x^{2}+px+q=0$ 的二重根**

则 $y=x^{2}\mathrm{e}^{\alpha x} [ R(x)\cos \beta x+S(x)\sin \beta x ] +C_{1}x\mathrm{e}^{rx}+C_{2}\mathrm{e}^{rx}$

**若 $\alpha +\imath \beta$是方程$x^{2}+px+q=0$ 的某个单根**

则 $y=x\mathrm{e}^{\alpha x} [ R(x)\cos \beta x+S(x)\sin \beta x ] +C_{1}\mathrm{e}^{r_{1}x}+C_{2}\mathrm{e}^{r_{2}x}$

**若 $\alpha +\imath \beta$不是是方程$x^{2}+px+q=0$ 的根**

则 $y=\mathrm{e}^{\alpha x} [ R(x)\cos \beta x+S(x)\sin \beta x ] +C_{1}\mathrm{e}^{r_{1}x}+C_{2}\mathrm{e}^{r_{2}x}$ 

其中 $R(x),S(x)$ 是待定的 $n$ 次多项式，$r_{1},r_{2}$（或 $r$）是方程 $x^{2}+px+q=0$ 的根（或重根）。

### 欧拉方程

$$x^{n}y^{(n)}+a_{1}x^{n-1}y^{(n-1)}+\cdots +a_{n}y=f(x)$$

令 $x=\mathrm{e}^{t}$，有

$$x^{k}y^{(k)}=\frac{d}{dt} \left( \left(\frac{d}{dt}-1\right) \left( \left(\frac{d}{dt}-2\right) \left( \cdots \left(\frac{d}{dt}-(k-1)\right)y \cdots \right) \right) \right)$$

则方程化为关于 $t$ 的常系数线性微分方程，可按前面$n$阶常系数线性微分方程的方法求解。

