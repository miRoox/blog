---
layout: post
title: "利用 GitHub Actions 自动化构建和发布 Qt 程序的一点经验"
date: 2019-12-10 22:24:54
description: "Qt"
tag: ["Qt","持续集成","编程"]
---

前一阵子 GitHub 正式发布了 [Actions](https://github.com/features/actions) 功能来提供内置的持续集成和持续发布。而我正好最近在利用 Qt 写[数字图像处理的作业](https://github.com/miRoox/HIT-DigitalImageProcessing-Postgraduate)，就想利用这个机会尝试一下基于 GitHub Actions 的持续集成。

当然，有问题首先是找轮子。
很快我就找到了 [jaredtao/HelloActions-Qt](https://github.com/jaredtao/HelloActions-Qt)，以及相关的几篇博客文章[^1] [^2]。
照猫画虎很快就把各个平台下的自动构建弄成了。
但那篇关于自动发行的文章[^2]对多配置下 [create-release](https://github.com/actions/create-release) 重复执行导致失败这一问题的解决方案不太令我满意，总觉得太繁琐了，而且我对其中所用的 PowerShell 也不熟。
不过这个问题显然不是特殊情况，想必也曾有人就此提出了问题，而也许已经有别人回答了更好的解决方案也不一定。
果不其然，早就有人在 create-release 的仓库下的 issues 中提出过这个问题，并且这个 issue 尚未关闭，也就是并没有一个非常令人满意的解答。
不过，其中有一个回答[^3]给我一点启发，它将使用多种配置的发布任务与创建 release 的任务分开，而通过 [upload-artifact](https://github.com/actions/upload-artifact) 和 [download-artifact](https://github.com/actions/upload-artifact) 来传递 release URL。
另一个关联的仓库也有人给出了类似的思路[^4]：

```
build(mac)       build(linux)        build(win)
    │                  │                 │
    └──────────────────┼─────────────────┘
                       │
                create_release()
                       │
    ┌──────────────────┼─────────────────┐
    │                  │                 │
upload(mac)       upload(linux)      upload(win)
```

不过这种任务结构让构建和上传两个阶段的文件对应变得麻烦起来。
受此启发，我想到了另一种可能——`create_release()`真的一定要在`build(...)`完成之后才能进行吗？
因为我们需要创建 release 的时候一定是在发布 tag 的时候，这时我们通常已经在 commit 时检验过一遍是否通过构建/测试了，因此不妨将`create_release()`提前，于是有

```
                create_release()*
                       │
    ┌──────────────────┼─────────────────┐
    │                  │                 │
 build(mac)        build(linux)       build(win)
    &                  &                 &
upload(mac)*      upload(linux)*     upload(win)*
```

`*`表示只在发布 tag 的时候才会进行这个步骤。这里将`build(...)`和`upload(...)`两个阶段合在同一个job中，便于传递文件。
最终配置如 [.github/workflows/build.yml](https://github.com/miRoox/HIT-DigitalImageProcessing-Postgraduate/blob/master/.github/workflows/build.yml) 所示。

----

[^1]: [Qt使用github-Actions自动化编译](https://jaredtao.github.io/2019/11/19/Qt%E4%BD%BF%E7%94%A8github-Actions%E8%87%AA%E5%8A%A8%E5%8C%96%E7%BC%96%E8%AF%91/)
[^2]: [Qt使用github-Actions自动化发行](https://jaredtao.github.io/2019/12/03/Qt%E4%BD%BF%E7%94%A8github-Actions%E8%87%AA%E5%8A%A8%E5%8C%96%E5%8F%91%E8%A1%8C/)
[^3]: [How to prevent creating multiple releases when using a build matrix?](https://github.com/actions/create-release/issues/14#issuecomment-555379810)
[^4]: [Support matrix build](https://github.com/actions/upload-release-asset/issues/16#issuecomment-561257944)
