---
layout: post
title: "解除GitHub仓库的Fork连接"
date: 2018-05-19 23:45:10
categories: "代码编程"
tag: ["Git", "GitHub"]
---

*这是一篇灌水文。*

GitHub的Fork功能实际上主要是服务于Pull Request，然而我以前并没有正确地认识到这一点，简单地把Fork当clone使，导致有些时候不太方便。比如生成这个博客的[仓库](https://github.com/miRoox/miRoox.github.io)，以前是直接Fork[leopardpan的博客](https://github.com/leopardpan/leopardpan.github.io)得到的。现在我想解除这种Fork关系，但同时保留提交的历史。然而在网上却没有找到有关的教程，没办法，只能自己试试。

<!--more-->

实际做起来却意外的简单。

首先，把删去所有与本地仓库连接的远程仓库

```
$ git remote remove origin
$ git remote remove upstream
```

然后，把GitHub上自己的远程仓库给删了。

最后，在GitHub上重新建立同名仓库，然后把本地仓库关联上去。

```
$ git remote add origin <your repo>
```

于是就大功告成了。
