---
layout: post
title: "旧作：陈天权 数学分析讲义 部分习题答案（第二弹）"
date: 2016-02-02 14:28:00
tag: "数学"
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

(待补完)
