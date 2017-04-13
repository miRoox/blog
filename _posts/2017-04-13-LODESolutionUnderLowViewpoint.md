---
layout: post
title: "旧作：低观点下的线性微分方程的解法"
date: 2017-04-13 20:30:14
description: "一种不涉及线性微分方程解的结构的方法。"
tag: 数学
use_math: true
---

<p style="text-align:right">——低观点的话，就只能上技巧了吧？</p>


**摘要** ：一种不涉及线性微分方程解的结构的方法。

### 一阶常系数线性非齐次微分方程的另解

对于非齐次方程

$$
\begin{equation}
	y'=p(x)y+q(x)\phantom{xxxx} \text{其中，} q(x)\neq 0 \label{eq:1ln-org}
\end{equation}
$$

即

$$
\begin{equation}
	y'-p(x)y=q(x) \label{eq:1ln-mov}
\end{equation}
$$

为了在上式左边得到导数乘法公式的形式 

$$
\begin{equation}
	(f\cdot g)'=f'\cdot g+f\cdot g' \label{eq:mult}
\end{equation}
$$

等式两边同乘 $f(x)$ ，即

$$
\begin{equation}
	y'\cdot f(x)-p(x)y\cdot f(x)=q(x)f(x) \label{eq:1ln-mult}
\end{equation}
$$

比对公式( $\ref{eq:mult}$ )，$f(x)$ 应满足 $f'(x)=-p(x)f(x)$

容易解得

$$
\begin{equation}
	f(x)=\mathit{e}^{-\int p(x)dx} \label{eq:1ln-fx}
\end{equation}
$$

（任意常数显然没有必要）

则( $\ref{eq:1ln-mult}$ )式可以化成 $(y\cdot f(x))'=q(x)f(x)$，解得

$$
\begin{equation}
	y=\frac{1}{f(x)}(C+\int q(x)f(x)dx) \label{eq:1ln-yNoExpand}
\end{equation}
$$

再带入( $\ref{eq:1ln-fx}$ )，即有

$$
\begin{equation}
	y=\mathit{e}^{\int p(x)dx}(C+\int q(x)\mathit{e}^{-\int p(x)dx}dx) \label{eq:1ln-result}
\end{equation}
$$

本方法的核心在于凑出导数乘法公式形式，相当于再解一个齐次微分方程，思路比常数变易法要显然，因此也不必记忆公式，知道凑乘法的思路即可，而且容易推广到其它问题上（比如中值定理凑函数的问题，以及下面的高阶线性微分方程等）。

### 二阶常系数线性齐次方程

$$
\begin{equation}
	y''+py'+qy=0
\end{equation}
$$

令 $p=-(r_{1}+r_{2})$, $q=r_{1}r_{2}$，即 $r_{1}, r_{2}$ 是 $x^{2}+px+q=0$ 的根，显然存在。则

$$
\begin{align}
	  y''-(r_{1}+r_{2})y'+r_{1}r_{2}y&=0 \label{eq:2lh-repr} \\
	\Rightarrow (y''-r_{1}y')-r_{2}(y'-r_{1}y)&=0 \\
	\Rightarrow (y'-r_{1}y)'-r_{2}(y'-r_{1}y)&=0
\end{align}
$$

可得

$$
\begin{equation}
	y'-r_{1}y=C_{0}\mathit{e}^{r_{2}x} \label{eq:2lh-1stInt}
\end{equation}
$$

**若 $r_{1}\neq r_{2}$ **

对( $\ref{eq:2lh-1stInt}$ )式两边同时乘 $\mathit{e}^{-r_{1}x}$ ，则有

$$
\begin{align}
	\mathit{e}^{-r_{1}x}y'-r_{1}\mathit{e}^{-r_{1}x}y&=C_{0}\mathit{e}^{(r_{2}-r_{1})x} \\
	\Rightarrow (\mathit{e}^{-r_{1}x}y)'&=C_{0}\mathit{e}^{(r_{2}-r_{1})x} \\
	\Rightarrow y&=\frac{C_{0}}{r_{2}-r_{1}}\mathit{e}^{r_{2}x}+C_{1}\mathit{e}^{r_{1}x} \label{eq:2lh-2ndInt1}
\end{align}
$$

不妨记 $C_{2}=\frac{C_{0}}{r_{2}-r_{1}}$ ，即

$$
\begin{equation}
	y=C_{2}\mathit{e}^{r_{2}x}+C_{1}\mathit{e}^{r_{1}x} \label{eq:2lh-result1}
\end{equation}
$$

**若 $r_{1}=r_{2}$ ，记作$r$ **

对( $\ref{eq:2lh-1stInt}$ )式两边同时乘 $\mathit{e}^{-rx}$ ，则

$$
\begin{align}
	\mathit{e}^{-rx}y'-r\mathit{e}^{-rx}y&=C_{0} \\
	\Rightarrow (\mathit{e}^{-rx}y)'&=C_{0} \\
	\Rightarrow y&=C_{0}x\mathit{e}^{rx}+C_{1}\mathit{e}^{rx} \label{eq:2lh-2ndInt2}
\end{align}
$$

事实上，对( $\ref{eq:2lh-2ndInt1}$ )式取极限 $r_{2}\rightarrow r_{1}=r$ 亦可得到( $\ref{eq:2lh-2ndInt2}$ )式。

### 二阶常系数线性非齐次方程一般形式

$$
\begin{equation}
	y''+py'+qy=f(x)
\end{equation}
$$

与齐次方程类似处理，$(y'-r_{1}y)'-r_{2}(y'-r_{1}y)=f(x)$ 

实质上，这等价于两个一阶线性非齐次方程：

$$
\begin{align*}
	u'-r_{2}u&=f(x) \\
	y'-r_{1}y&=u(x)
\end{align*}
$$

利用之前一阶线性非齐次方程中方法即可解出$y$ 

一般地，对$n$阶常系数线性微分方程$y^{(n)}+a_{1}y^{(n-1)}+\cdots +a_{n}y=f(x)$ 

等价于求解$n$个一阶非齐次微分方程：

$$
\begin{align*}
	u_{n}'-r_{n}u_{n}&=f(x) \\
	u_{n-1}'-r_{n-1}u_{n-1}&=u_{n}(x) \\
	&\vdots \\
	u_{2}'-r_{2}u_{2}&=u_{3}(x) \\
	y'-r_{1}y&=u_{2}
\end{align*}
$$

（其中，$r_{1},r_{2},\cdots ,r_{n}$是代数方程$x^{n}+a_{1}x^{n-1}+\cdots +a_{n}=0$的根）

### 二阶常系数线性非齐次方程特殊形式

$$
\begin{equation}
y''+py'+qy=\mathit{e}^{\alpha x} [ P(x)\cos \beta x+Q(x)\sin \beta x ] \label{eq:2lns-org}
\end{equation}
$$

（其中$P(x),Q(x)$是$n$次多项式）

这是前面一般形式的一种特殊的情况，只需要注意如下两个事实：

①由欧拉恒等式$\mathit{e}^{\imath x}=\cos x+\imath \sin x$，知上式右边可化为$S(x)\mathit{e}^{\lambda x}$ 

其中，$\lambda =\alpha +\imath \beta $，$S(x)$是适当的$n$次多项式； 

②对于$n$次多项式$S(x)$，若$\lambda \neq 0$，则$\int S(x)\mathit{e}^{\lambda x}=T(x)\mathit{e}^{\lambda x}+C$ 

其中，$T(x)$也是$n$次多项式。

由此不难得到，对式( $\ref{eq:2lns-org}$ )

**若$\alpha +\imath \beta $是方程$x^{2}+px+q=0$的二重根**

则$y=x^{2}\mathit{e}^{\alpha x} [ R(x)\cos \beta x+S(x)\sin \beta x ] +C_{1}x\mathit{e}^{rx}+C_{2}\mathit{e}^{rx} $

**若$\alpha +\imath \beta $是方程$x^{2}+px+q=0$的某个单根**

则$y=x\mathit{e}^{\alpha x} [ R(x)\cos \beta x+S(x)\sin \beta x ] +C_{1}\mathit{e}^{r_{1}x}+C_{2}\mathit{e}^{r_{2}x} $

**若$\alpha +\imath \beta $不是是方程$x^{2}+px+q=0$的根**

则$y=\mathit{e}^{\alpha x} [ R(x)\cos \beta x+S(x)\sin \beta x ] +C_{1}\mathit{e}^{r_{1}x}+C_{2}\mathit{e}^{r_{2}x} $ 

（其中$R(x),S(x)$是待定的n次多项式，$r_{1},r_{2}$（或$r$）是方程$x^{2}+px+q=0$的根（或重根）。

### 欧拉方程

$$
\begin{equation}
	x^{n}y^{(n)}+a_{1}y^{(n-1)}+\cdots +a_{n}y=f(x)
\end{equation}
$$

令$x=\mathit{e}^{t}$，有

$$
\begin{equation}
	x^{k}y^{(k)}=\frac{d}{dt} \lgroup (\frac{d}{dt}-1) \lgroup (\frac{d}{dt}-2) \lgroup \cdots (\frac{d}{dt}-(k-1))y \cdots \rgroup \rgroup \rgroup
\end{equation}
$$

则方程化为关于$t$的常系数线性微分方程，可按前面$n$阶常系数线性微分方程的方法求解。

