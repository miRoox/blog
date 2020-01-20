---
layout: post
title: "突然发现部分Wolfram演示项目支持在线运行了"
date: 2018-12-01 20:09:39
tag: ["Wolfram"]
---

如题，已经有**部分**Wolfram演示项目支持在线运行，尽管这个功能貌似还在测试中。

<!--more-->

甚至还支持以内联框架的形式嵌入网页。比如下面这个例子就来自
<https://demonstrations.wolfram.com/FraunhoferDiffractionThroughARectangularAperture>。

{% iframe https://www.wolframcloud.com/objects/demonstrations/FraunhoferDiffractionThroughARectangularAperture?_view=EMBED 420 480 %}

不过这个在线运行机制似乎是基于 [Wolfram Cloud](https://www.wolfram.com/cloud/) 实现的，
而不是 [Web Assembly](https://webassembly.org/) 之类的本地计算，因此响应速度会有点慢。
