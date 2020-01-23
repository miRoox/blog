---
layout: post
title: "旧作：陈天权 数学分析讲义 部分习题答案（第二弹）"
date: 2016-02-02 14:28:00
categories: "数理科学"
tag: ["数学", "题解", "微积分"]
---

**说明**：这里的答案全部是我自己写的，不保证完全正确。题目不抄了，只标题号，书没有就没办法了。题目都是选我感兴趣且会做的。

<!--more-->

### 2.3.1

#### (i)

注意每个 $b_m$ 都是序列 $a_n$ 的上界，由确界公理知 $\sup_{n\in\N}a_n$存在且比每个 $b_m$ 都小。

#### (ii)

与(i)同理，显然

#### (iii)

由(i)知 $\forall m\in\N,\sup_{n\in\N}a_n< b_m$，结合(ii)，显然 $\sup_{n\in\N}a_n< \inf_{n\in\N}b_n$

#### (iv)

由(iii)显然

$$\bigcap_{n\in\N}\left[a_n,b_n\right]\supseteq\left[\sup_{n\in\N}a_n,\inf_{n\in\N}b_n \right]$$

又

$$\forall x< \sup_{n\in\N}a_n,\exist m\in\N,a_m>x,\,\text{即} x\notin\bigcap_{n\in\N}\left[a_n,b_n\right]$$

以及

$$\forall y> \inf_{n\in\N}b_n,\exist m\in\N,b_m< x$$

可知

$$\bigcap_{n\in\N}\left[a_n,b_n\right]=\left[\sup_{n\in\N}a_n,\inf_{n\in\N}b_n \right]$$

### 2.3.2

#### (i)

若 $r\notin[k,l]$，则令 $g=\frac{2k+l}{3},h=\frac{k+2l}{3}$，显然 $[g,h]\subset[k,l]$

若 $r\in[k,l]$，则令 $g=\frac{2r+l}{3},h=\frac{r+2l}{3}$，有 $r\notin[g,h]\subset[k,l]$

#### (ii)

与(i)相同的构造方式，易得。

#### (iii)

与(i)相同，只要令

$$\begin{cases}
c_{n+1}=\frac{2c_n+d_n}{3},d_{n+1}=\frac{c_n+2d_n}{3} & a_{n+1}\notin[c_n,d_n]\\
c_{n+1}=\frac{2a_{n+1}+d_n}{3},d_{n+1}=\frac{a_{n+1}+2d_n}{3} & a_{n+1}\in[c_n,d_n]
\end{cases}$$

#### (iv)

由2.3.1结论（闭区间套定理）， $\bigcap_{n=1}[c_n,d_n]\ne\empty$

由数学归纳法

$$\forall x\in D,x\notin\bigcap_{n=1}[c_n,d_n]$$

#### (v)

$$\forall n\in\N,[c_n,d_n]\subset[c,d]$$

归纳地，

$$\bigcap_{n=1}[c_n,d_n]\subset[c,d]$$

故

$$\exist x\in\bigcap_{n=1}[c_n,d_n]\subset[c,d],x\notin D$$

#### (vi)

对于任何一个 $\varphi:\N\mapsto\R$，记 $a_n=\varphi(n)$

由(v)中结论知，总 $\exist x\in[c,d],x\notin\varphi(\N)$，即 $[c,d]$ 不可数。

### 2.3.3

#### (i)

显然 $a\in K$

#### (ii)

显然 $b$ 是 $K$ 的一个上界，有确界公理知 $M=\sup K$ 存在。

#### (iii)

显然

#### (iv)

由确界公理以及确界的性质知

$$\forall\varepsilon>0,(M-\varepsilon,M]\cap K\ne\empty$$

即存在 $c\in K,c>M-\varepsilon$，使 $[a,c]$ 能被 $\{I_\alpha:\alpha\in J\}$ 的某个有限子族覆盖

故 $[a,M-\varepsilon]\subset[a,c]$ 能被开区间族 $\{I_\alpha:\alpha\in J\}$ 的某个有限子族覆盖

#### (v)

因为开区间族 $\{I_\alpha:\alpha\in J\}$ 覆盖了 $[a,b]$，故 $\exist\alpha\in J,M\in I_\alpha$

又因 $I_\alpha$ 是开区间，故 $\exist\varepsilon>0,[M-\varepsilon,M]\subset I_\alpha$

注意到(iv)中 $\varepsilon$ 的任意性

显然 $[a,M]$ 也能被 $\{I_\alpha:\alpha\in J\}$ 的某个有限子族覆盖。

#### (vi)

假若 $M< b$，由于(v)中的 $I_\alpha$ 是开区间，故

$$\exist 0< \delta< b-M,M+\delta\in I_\alpha$$

则 $[a,M+\delta]$ 也可被 $\{I_\alpha:\alpha\in J\}$ 的某个有限子族覆盖，这与 $M$ 是 $K$ 的上确界矛盾。

#### (vii)

由(v)和(vi)，显然。

#### (viii)

假若 $\N$ 有上界 $M$，则

$$[1,M]\subset\bigcup_{\mathclap{x\in[1,M]} }\left(x-\frac{1}{3},x+\frac{1}{3} \right)$$

由(vii)中结论（有限覆盖定理）

$[1,M]$ 可以被 $\bigcup_{x\in[1,M] }\left(x-\frac{1}{3},x+\frac{1}{3} \right)$ 的某个有限子族覆盖

注意到其每个区间 $\left(x-\frac{1}{3},x+\frac{1}{3} \right)$ 长度为 $\frac{2}{3}< 1$

故每个区间 $\left(x-\frac{1}{3},x+\frac{1}{3} \right)$ 至多只包含一个自然数

又 $[1,M]$ 可以被 $\bigcup_{x\in[1,M] }\left(x-\frac{1}{3},x+\frac{1}{3} \right)$ 的某个有限子族覆盖

故 $[1,M]$ 中只包含有限个整数，这与 $\N$ 是无限集矛盾，故 $\N$ 无上界。

#### (ix)

考虑如 2.3.1 的闭区间套

$$[a_1,b_1]\supset[a_2,b_2]\supset\cdots\supset[a_n,b_n]\supset\cdots$$

以 $U=(a_1,b_1+1)$ 为空间，显然

$$\forall k\in\N,[a_k,b_k]\subset U$$

任何一个闭区间的余集 $[a_n,b_n]^C=(a_1-1,a_n)\cup(b_n,b_1+1)$ 是两个开区间之并

假若

$$\bigcap_{n=1}^\infty [a_n,b_n]=\empty$$

则

$$\bigcup_{n=1}^\infty [a_n,b_n]^C=U\supset(a_1,b_1)$$

由(vii)中结论（有限覆盖定理）

存在 $\bigcup_{n=1}^\infty [a_n,b_n]^C$ 的某个有限子族可以将 $[a_1,b_1]$ 覆盖

而 $\bigcup_{n=1}^\infty [a_n,b_n]^C$ 的开子区间可以表示为 $(a_1-1,a_m)$ 或 $(b_k,b_1+1)$

考虑在某个有限子族中这些开区间里标号（$m$ 或 $k$）最大的一个，其标号为 $l$，注意到闭区间套的性质，则 $[a_{l+1},b_{l+1}]\subset[a_1,b_1]$ 无法被覆盖，导出矛盾，故

$$\bigcap_{n=1}^\infty [a_n,b_n]\ne\empty$$

### 2.3.4

#### (i)

由 $[a,b]\subset\bigcup_{j=1}^n (c_j,d_j)$

必存在开区间 $(k,l)$ 使 $[a,b]\subset(k,l)=\bigcup_{j\in G}(c_j,d_j)$（其中 $G\subset\{1,2,\dots,n\}$）
（否则 $\exist x\in[a,b],x\notin\bigcup_{j=1}^n (c_j,d_j)$ 与题设矛盾）

由数学归纳法和开区间的简单性质易证 $l-k< \sum_{j\in G}(d_j-c_j)$

因而

$$b-a< l-k< \sum_{j\in G}(d_j-c_j)< \sum_{j=1}^n(d_j-c_j)$$

#### (ii)

由 2.3.3(vii) 的有限覆盖定理，必存在某个有限集 $F\subset J$ 使得 $[a,b]\subset\bigcup_{\alpha\in F}I_\alpha$

又由(i)，即有

$$b-a< \sum_{\alpha\in F}|I_\alpha|\le\sup_{\text{有限集}F\subset J }\sum_{\alpha\in F}|I_\alpha|$$

#### (iii)

任意给定 $\varepsilon>0$，记 $D=\{a_1,a_2,\dots,a_n,\dots \}$，并取 $I_n=\left(a_n-2^{-n-2}\varepsilon,a_n+2^{-n-2}\varepsilon \right)$

显然 $D=\bigcup_{n=1}^\infty I_n$，且 $\sum_{n=1}^\infty |I_n|=\frac{\varepsilon}{2}< \varepsilon$。

#### (iv)

假若 $[a,b]$ 是可数集，由(ii)知 $[a,b]$ 必定能被某个开区间族 $\{I_\alpha :\alpha\in J \}$ 覆盖，且

$$b-a< \sup_{\text{有限集}F\subset J }\sum_{\alpha\in F}|I_\alpha|$$

取开区间族 $\{I_\alpha :\alpha\in J \}$ 中蕴含了  $\{I_i :i\in F \}$ 的某个可数子族  $\{I_n :n\in E \}$，显然

$$\sum_{n\in E}|I_n|>\sup_{\text{有限集}F\subset J }\sum_{\alpha\in F}|I_\alpha|$$

又由(iii)，取 $\varepsilon=\frac{b-a}{2}$，则有

$$b-a< \sup_{\text{有限集}F\subset J }\sum_{\alpha\in F}|I_\alpha|< \sum_{n\in E}|I_n|< \frac{b-a}{2}$$

导出矛盾，故 $[a,b]$ 是不可数集。

### 2.3.5

#### (i)

将 $S$ 中的点按大小排序 $a_0< a_1< \cdots< a_n$

显然只要某个 $I_\alpha\subset[x,y]$，就有 $S\cap[x,y]=\empty$

假设有某个 $a_i\in[x,y]$，由 $\lambda$ 的选取，必有 $a_{i-1}< x,a_{i+1}>y$

故 $[x,y]$ 中最多含有 $S$ 的一个点。

#### (ii)

$$x\in I_\alpha=(k_\alpha,l_\alpha)$$

显然 $y$ 只可能满足 $k_\alpha< x< y< l_\alpha$ 或者 $y\ge l_\alpha$ 其中之一，

而后者显然使 $l_\alpha\in[x,y]$，与题设矛盾，故 $y\in(k_\alpha,l_\alpha)$

#### (iii)

$$[x,y]\cap S=\{h\}$$

以 $h$ 为端点的开区间不会盖住 $h$

对于任何一个盖住 $h$ 的开区间 $I_\beta=(k_\beta,l_\beta)$，必有 $[x,y]\subset I_\beta$，

否则 $[x,y]\cap S=\{h,k_\beta\}\veebar [x,y]\cap S=\{h,l_\beta\}$ 为真，与(i)中结论矛盾，故 $[x,y]\subset I_\beta$

#### (iv)

由(i)的结论和(ii),(iii)的讨论，综述易得。

### 2.3.6

由 2.3.3(vii) 的有限覆盖定理

$$\exist\text{有限集}F\subset J,[a,b]\subset\bigcup_{\alpha\in F}I_\alpha$$

又由 2.3.5(iv) 的结论，综述易得。

### 2.3.7

#### (i)

必要性显然；

充分性：

假若 $\exist\varepsilon_0>0,E\cap(l-\varepsilon_0,l+\varepsilon_0)$是有限集，记为 $\{a_1,a_2,\dots,a_n\}$

取 

$$\varepsilon=\min_{\substack{1\le i\le n\\ a_i\ne l} }\left|a_i-l\right|$$

则 $(E\setminus\{l\})\cap(l-\varepsilon,l+\varepsilon)=\empty$，矛盾，故充分性得证。

#### (ii)

根据否定命题的原则，显然。

#### (iii)

取 $[a,b]\supset E$，若 $E$ 无聚点，则 $\forall x\in E,\exist \varepsilon_x>0, E\cap(x-\varepsilon_x,x+\varepsilon_x)$是有限集

由 2.3.3(vii) 的有限覆盖定理

$$\exist\{x_1,x_2,\dots,x_n \}\subset[a,b], [a,b]\subset\bigcup_{j=1}^n\left(x_j-\varepsilon_{x_j},x_j+\varepsilon_{x_j} \right)$$

而

$$E=E\cap[a,b]\subset\bigcup_{j=1}^nE\cap\left(x_j-\varepsilon_{x_j},x_j+\varepsilon_{x_j} \right)$$

（有限个有限集之并）

故 $E$ 是有限集。

#### (iv)

若 $\Z$ 有上界，则 $\Z_{+}$ 亦有上界，而 $\Z_{+}$ 以 $1$ 为下界，故 $\Z_{+}$ 有界

由 (iii) 的聚点存在定理， $\Z_{+}$ 有聚点，记为 $l$

则 $\left(l-\frac{1}{3},l+\frac{1}{3} \right)\cap\Z_{+}$ 应为无限集，但 $\left(l-\frac{1}{3},l+\frac{1}{3} \right)$ 中至多包含一个整数，与 $l$ 是聚点矛盾，故 $\Z_{+}$ 无上界，$\Z$ 亦无上界。

同理易证 $\Z$ 无下界。

#### (v)

由 (iv) $\Z$ 无界易得。

#### (vi)

假若 $\exist\varepsilon_0>0,\forall N\in\N,\frac{n-m}{N}\ge\varepsilon_0$， 则 $\forall N\in\N,N\le\frac{n-m}{\varepsilon_0}$ 与 $\N$ 无上界矛盾，得证。

#### (vii)

任意给定 $\varepsilon>0$，对 $\forall x\in[a,b]$，

由 (v) 知 $\forall N\in\N,\exist m,n\in\Z, m< Na< Nb< n$，即有 $\frac{m}{N}< a\le x\le b< \frac{n}{N}$

又由 (vi) 知 $\forall\varepsilon>0,\exist N\in\N,\frac{n-m}{N}< \varepsilon$

故

$$\forall\varepsilon>0,(\mathbb{Q}\cap[a,b]\setminus\{x\})\cap(x-\varepsilon,x+\varepsilon)\ne\empty$$

即 $x$ 是 $\mathbb{Q}\cap[a,b]$ 的聚点。

### 2.3.8

#### (i)

显然。

#### (ii)

取 $[a,b]$ 使 $\forall n\in\N,x_n\in[a,b]$，记 $[a_1,b_1]=[a,b]$

将 $[a_1,b_1]$ 二等分，则至少有一边包含 $\{x_n\}$ 的无穷多项，记为 $[a_2,b_2]$，

类似地，将 $[a_2,b_2]$ 二等分，取包含 $\{x_n\}$ 无穷多项的一边 $[a_3,b_3]$，

……

以此类推得到闭区间套 $[a_n,b_n]$，且 $\forall n\in\N$，$[a_n,b_n]$ 包含 $\{x_n\}$ 的无穷多项

由 2.3.1 的闭区间套定理，并注意到 $b_n-a_n=\frac{b-a}{2^{n-1} }\to0$

$$\exist l,\bigcap_{n=1}^{\infty}[a_n,b_n]=\{l\}\text{而}\forall\varepsilon>0,\exist n\in\N,(l-\varepsilon,l+\varepsilon)\supset[a_n,b_n]$$

故 $l$ 是 $\{x_n\}$ 的聚点。

### 2.3.9

不妨设 $b\in B$，取 $x=\sup A$

显然 $\forall\varepsilon>0,A\cap(x-\varepsilon,x+\varepsilon)\ne\empty$，而 $x\le b$

若 $x=b$，显然 $B\cap(x-\varepsilon,x+\varepsilon)\ni b$

若 $x< b$，$\forall\varepsilon>0,\forall y\in A,x+\varepsilon>y$，而 $[a,b]=A\cup B$

故 $0< \varepsilon< b-x, x+\varepsilon\in B$，得证。

### 2.3.10

#### (i)

考察 $n+1$ 个实数 $l\alpha-\lfloor l\alpha\rfloor$（其中 $l\in\{1,2,\dots,n+1\}$）

注意 $\forall l\in\{1,2,\dots,n+1\}, l\alpha-\lfloor l\alpha\rfloor< 1$

故在这组数中至少有两个数满足

$$\left|(l_2\alpha-\lfloor l_2\alpha\rfloor)-(l_1\alpha-\lfloor l_1\alpha\rfloor) \right|< \frac{1}{n},\quad 1< l_1< l_2< n+1$$

现取 $k=l_2-l_1\le n, m=\lfloor l_2\alpha\rfloor-\lfloor l_1\alpha\rfloor$，则 $k\alpha-m< \frac{1}{n}$

即有

$$\left|\alpha-\frac{m}{k} \right|< \frac{1}{kn}$$

#### (ii)

假若只有有限个这样的有理数 $\frac{m_i}{n_i}$，满足 $\left|\alpha-\frac{m_i}{n_i} \right|< \frac{1}{n_i^2}$（$i\in\{1,2,\dots,p\}$）

令

$$\delta=\min_{1\le i\le p}\left|\alpha-\frac{m_i}{n_i} \right|$$

取 $N>\frac{1}{\delta}$，并取 $m,n\in N,(0< n< N)$ 使得

$$\left|\alpha-\frac{m}{n} \right|< \frac{1}{nN}< \frac{1}{n^2}$$

即 $m,n$ 满足题意

同时注意到

$$\left|\alpha-\frac{m}{n} \right|< \frac{1}{nN}< \frac{\delta}{n}< \delta$$

即 $\frac{m}{n}\notin\left\{\frac{m_i}{n_i}:1\le i\le p \right\}$，导出矛盾

故满足 $\left|\alpha-\frac{m}{n}\right|< \frac{1}{n^2}$ 的有理数 $\frac{m}{n}$ 有无限个。
