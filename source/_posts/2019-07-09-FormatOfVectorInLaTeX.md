---
layout: post
title: "关于LaTeX插入矢量图的格式问题"
date: 2019-07-09 14:51:22
description: "只要输出介质为pdf，就不要使用 eps 和 PSTricks 插图"
tag: "LaTeX"
---

简单来说，外部插入矢量图图尽量使用 PDF 格式，以避免生成时的转换。

> **只要输出介质为pdf，那么使用PSTricks和eps插图都是陋习。**
> 
> **如果输出介质为pdf，那么所有eps都需要转换为pdf后插入。**
> 
> 之所以需要转换，是因为pdfTeX/LuaTeX不带任何PostScript解释器，所以一定要转换成pdf才能插图。而pTeX/XeTeX，则通常需要使用dvipdfmx输出pdf，在用到PostScript代码的时候，即PSTricks和eps图，都会通过管道使用GhostScript转换，这也是拖慢dvipdfmx的一个主要原因。
> 
> 当然，很多编辑部的期刊模板都要求是eps图，甚至是png都要求转成eps（里面其实还是点阵图）。这时候，eps文件留给他们解决，自己该用什么用什么。
> 
> 这都2018年了，别想不开老是用eps图。

来自
[为什么 用TeXstudio在 XeLaTeX下eps图片不显示, pdflatex下反而可以 ? - 李阿玲的回答 - 知乎](https://www.zhihu.com/question/284593369/answer/438941492)
