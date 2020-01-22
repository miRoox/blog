---
layout: post
title: "如何方便快捷地查看Mathematica中的符号定义？"
date: 2018-10-07 13:50:12
categories: "代码编程"
tag: ["编程", "Wolfram"]
---

使用

```mathematica
GeneralUtilities`PrintDefinitions[symbol]
```

即可，如下图

{% asset_img usage.png usage %}

<!--more-->

-----

不过就这么结束了好像也不太好，再补充几点：

* 生成的笔记本文档中的符号可以通过点击打开其定义，就好像许多其它语言的IDE中的“Jump to Definition”功能一样。
* 有许多内置函数的定义是看不到的，因为它们的实现可能不是通过Wolfram语言完成的。这时你可能只能看到`<<kernel function>>`的字样。
* 有些包里的符号可能没有预先加载，也许在第一次调用的时候只会得到一个空的笔记本，这时，你可能需要再运行一次才能得到正确的结果。
