---
layout: post
title: "突然发现部分Wolfram演示项目支持在线运行了"
date: 2018-12-01 20:09:39
description: "Wolfram Demonstrations Project"
tag: ["Wolfram"]
---

如题，已经有**部分**Wolfram演示项目支持在线运行，尽管这个功能貌似还在测试中。

甚至还支持以内联框架的形式嵌入网页。比如下面这个例子就来自
<https://demonstrations.wolfram.com/FraunhoferDiffractionThroughARectangularAperture>。

<iframe scrolling='no' frameborder='0' src='https://www.wolframcloud.com/objects/demonstrations/FraunhoferDiffractionThroughARectangularAperture?_view=EMBED' style='border:0;' height="480" width="420"></iframe>

不过这个在线运行机制似乎是基于 [Wolfram Cloud](https://www.wolfram.com/cloud/) 实现的，
而不是 [Web Assembly](https://webassembly.org/) 之类的本地计算，因此响应速度会有点慢。
