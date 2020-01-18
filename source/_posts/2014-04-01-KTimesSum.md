---
layout: post
title: "旧作：求和公式Σk·a_k"
date: 2014-04-01 00:00:00
tag: "数学"
---

高二做题时发现的，非常trivial，但可以避开错位相减法繁琐方法。

$$\sum_{k=1}^nk\cdot a_k=\sum_{k=1}^n\sum_{j=k}^na_j$$

<!-- more-->

证明：

$$\begin{aligned}
\sum_{k=1}^nk\cdot a_k\\
\ \Downarrow\quad\\
1\cdot a_1 &\Rightarrow\phantom{\sum} a_1\\
\ +\quad&\phantom{\Rightarrow}\phantom{\sum} + \\
2\cdot a_2 &\Rightarrow\phantom{\sum} a_2 +\phantom{\sum} a_2\\
\ +\quad&\phantom{\Rightarrow\phantom{\sum}} +\phantom{+}\phantom{\sum} + \\
\ \vdots\ \quad&\phantom{\Rightarrow}\ \phantom{\sum}\vdots\phantom{+}\ \ \phantom{\sum}\vdots\qquad\qquad \ddots \\
n\cdot a_n &\Rightarrow \phantom{\sum}a_n + \phantom{\sum}a_n +\cdots+\phantom{\sum}a_n\\
\ &\phantom{\Rightarrow}\ \phantom{\sum}\Downarrow\phantom{+} \phantom{\sum}\Downarrow \phantom{+\cdots+}\ \ \phantom{\sum}\Downarrow\\
\sum_{k=1}^n\sum_{j=k}^na_j&\Leftarrow\sum_{j=1}^na_j+\sum_{j=2}^na_j+\cdots+\sum_{j=n}^na_j
\end{aligned}$$

证毕。

例一：

$$\sum_{k=1}^n\frac{k}{2^k}=\sum_{k=1}^n\sum_{j=k}^n\frac{1}{2^j}=\sum_{k=1}^n\left(\frac{1}{2}\cdot\frac{1-\frac{1}{2^{n-k+1}}}{1-\frac{1}{2}}\right)=\sum_{k=1}^n\left(\frac{1}{2^{k-1}}-\frac{1}{2^n}\right)=2-\frac{n+2}{2^n}$$

例二：

$$\begin{aligned}
&{}\sum_{k=1}^nk^2=\sum_{k=1}^n\sum_{j=k}^nj=\sum_{k=1}^n\frac{(k+n)(n-k+1)}{2}=\frac{1}{2}\sum_{k=1}^nk^2+\frac{1}{2}\sum_{k=1}^n\left(k+n+n^2\right)\\
\implies&{}\frac{3}{2}\sum_{k=1}^nk^2=\frac{1}{2}\left[\frac{(n+1)n}{2}+n^2(n+1) \right]\\
\implies&{}\sum_{k=1}^nk^2=\frac{n(n+1)(2n+1)}{6}
\end{aligned}$$
