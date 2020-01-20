---
layout: post
title: "旧作：陈天权 数学分析讲义 部分习题答案（第一弹）"
date: 2015-12-13 21:08:00
tag: "数学"
---

**说明**：这里的答案全部是我自己写的，不保证完全正确。题目不抄了，只标题号，书没有就没办法了。题目都是选我感兴趣且会做的。

<!--more-->

### 4.1.1

#### (i)

由 $f(0)=f(0)+f(0)$ 知 $f(0)=0$

$n=1$ 时显然成立，而

$$\forall x\in\R,\forall n\in\N_{+},f((n+1)x)=f(x)+f(nx)$$

由归纳原理知 

$$\forall x\in\R,\forall n\in\N_{+},f(nx)=f(x)n \tag{1}$$

带入 $x=1$，即

$$\forall n\in\N_{+},f(n)=f(1)n \tag{2}$$

又

$$\forall n\in\N, f(n)+f(-n)=f(0)=0$$

即$f(-n)=-f(n)=f(1)\cdot(-1)$

故

$$\forall m\in\Z,f(m)=f(1)m \tag{3}$$

带入 $x=\frac{m}{n}$ 于(1)式，

$$\forall m\in\Z,\forall n\in\N_{+},f(m)=f\left(\frac{m}{n}\right)n$$

又由(3)式知

$$\forall m\in\Z,\forall n\in\N_{+},f\left(\frac{m}{n}\right)=\frac{1}{n}f(m)=\frac{m}{n}f(1)$$

即

$$\forall p\in\mathbb{Q},f(p)=f(1)p \tag{4}$$

又因

$$\forall x\in\R,\exist p_n\in\mathbb{Q},\lim_{n\to\infty}p_n=x$$

结合 $f(x)$ 的连续性可得

$$ \forall x\in\R,f(x)=f(1)x$$

#### (ii)

令 $g(x)=\log_{f(1)}{f(x)}$，则

$$g(x+y)=\log_{f(1)}{f(x+y)}=\log_{f(1)}{f(x)}+\log_{f(1)}{f(y)}=g(x)+g(y)$$

由(i)中结论知 $g(x)=g(1)x=x$，则 $f(x)=f(1)^{g(x)}=f(1)^x$

#### (iii)

令 $g(x)=f\left(\mathrm{e}^x\right)$，则

$$g(x+y)=f\left(\mathrm{e}^x\cdot\mathrm{e}^y\right)=f(\mathrm{e}^x)\cdot f(\mathrm{e}^y)=g(x)\cdot g(y)$$

由(ii)可知 $g(x)=g(1)^x=f(e)^x$，故 $f(x)=g(\ln x)=f(e)^{\ln x}=x^{\ln f(e)}$

#### (iv)

令 $g(x)=f\left(\mathrm{e}^x\right)$，则

$$g(x+y)=f\left(\mathrm{e}^x\cdot\mathrm{e}^y\right)=f(\mathrm{e}^x)+f(\mathrm{e}^y)=g(x)+g(y)$$

由(i)知 $g(x)=g(1)x=f(e)x$，故 $f(x)=g(\ln x)=f(e)\ln x$

### 4.1.3

考虑 $\left(0,1\right]\setminus\mathbb{Q}$：

由 Archimedes 原理，

$$\forall\varepsilon>0,\exist N\in\N_{+},\forall n\ge N,\frac{1}{n}< \varepsilon$$

另一方面，在区间 $\left(0,1\right]$ 上，分母小于 $N$ 的有理数不会超过 $\frac{N^2-N}{2}$ 个，

因此，必定

$$\exist\delta>0,\exist p\in(x-\delta,x+\delta)\cap\mathbb{Q},|R(p)-R(x)|\le\frac{1}{N}<\varepsilon$$

即 $R$ 在 $x$ 处连续。

再考虑 $\left(0,1\right]\cap\mathbb{Q}$：

$$\forall\delta>0,\exist q\in(x-\delta,x+\delta),q\in\R\cap\mathbb{Q}$$

显然，只要取 $\epsilon=\frac{R(x)}{2}$，就不可能找到一个 $\delta>0$ 使得 $\forall y\in(x-\delta,x+\delta),|R(y)-R(x)|< \varepsilon$，故 $R$ 在 $x$处不连续。
