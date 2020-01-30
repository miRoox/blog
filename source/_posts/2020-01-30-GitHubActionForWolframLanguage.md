---
layout: post
title: "一个适用于 Wolfram 语言的 GitHub Action"
date: 2020-01-30 22:23:21
categories: "代码编程"
tag: ["持续集成", "GitHub", "Wolfram"]
---

去年 GitHub 推出了 [Actions](https://github.com/features/actions)，以提供内置的持续集成能力。同样是在去年，Wolfram Research 也推出了[免费的开发者 Wolfram 引擎](https://www.wolfram.com/engine/)，让我们有机会免费运行 Wolfram 语言代码。那么，两件快乐事情重合在一起。而这两份快乐，又给我带来多的快乐。得到的……没错，就是我们期待已久的对 Wolfram 语言程序的持续集成。

<!--more-->

当然，天下代码一大抄，照猫画虎首先也需要一个参考对象。这里参照的是 [xu-cheng/latex-action](https://github.com/xu-cheng/latex-action)，因为这是一个基于 Docker 容器的 Actions。而现成的 [Wolfram 引擎的 Docker 配置](https://hub.docker.com/r/arnoudbuzing/wolframengine)早已经出现的 DockerHub 上了，直接拿来用就可以了。

由于缺乏经验，还是先按照 [Creating a Docker container action](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action) 的文档过了一遍基本的流程，了解了一下 Docker 的基本用法。

基本思路是继承 [arnoudbuzing/wolframengine](https://hub.docker.com/r/arnoudbuzing/wolframengine) 的 Docker 容器，然后通过入口点脚本 `entrypoint.sh` 认证激活 Wolfram 引擎，再运行输入的 Wolfram 脚本。

在这里遇到的最大的困难大概还是认证激活。

首先，认证需要对应的 [Wolfram ID](https://account.wolfram.com/wolframid) 账号密码登录。显然，账号密码不能要用户直接写在 Action 的配置里。GitHub 提供了 [Secrets 机制](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)来避免加密内容直接出现在配置文件中，但如果直接通过参数将账号密码传递给 Docker，仍不能避免让密码内容在日志中以明文出现。参考了 [sliteteam/github-action-git-crypt-unlock](https://github.com/sliteteam/github-action-git-crypt-unlock) 后，尝试得知环境变量在传递过程中不会在日志中直接输出其内容。因此，账号密码在使用时都应以环境变量的方式传递。

另一方面，Wolfram 引擎通常的激活流程是初次启动时手动在 prompt 下依序键入账号密码，文档里并没有提供利用 wolframscript 自动化这一激活流程的办法，还是在我几经失败踩坑后才探索出一种合适的办法：

```sh
/usr/bin/wolframscript -authenticate $WOLFRAM_ID $WOLFRAM_PASS
/usr/bin/wolframscript -activate
```

解决了认证激活的问题，剩下的基本就也没什么难度了。对参数缺失以及不合法的报错处理直接按  [xu-cheng/latex-action](https://github.com/xu-cheng/latex-action) 照搬。其它配置也基本大同小异。

最后，将 Action 发布到了市场上，见 [GitHub action for Wolfram language](https://github.com/marketplace/actions/github-action-for-wolfram-language)。基本用例：

```yaml
on: [push]
jobs:
  run_wolfram:
    name: Run Wolfram language code
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v1
    - name: Run Wolfram script
      uses: miRoox/wolfram-action@master
      with:
        file: script.wl
      env:
        WOLFRAM_ID: ${{ secrets.WolframID }}
        WOLFRAM_PASS: ${{ secrets.WolframPW }}
```

---

关于 Wolfram 引擎的许可证：

根据 FAQ 里的 [“我可以在开源项目中使用免费引擎吗？”](https://www.wolfram.com/engine/faq/#can-i-use-the-free-engine-in-an-open-source-project)：

> 您可以使用免费引擎开发项目，以及**演示和测试**。但是，免费引擎许可证不允许终端用户使用，除非此用途**用于进一步开发**。对于终端用户使用，用户必须拥有 Wolfram 引擎的单独许可证。如果您拥有 Wolfram 产品（如 Wolfram|One 或 Mathematica），或者您所在的组织拥有 Wolfram 站点许可证，则您可能已拥有相应的许可证。开源项目可以[申请](https://www.wolframcloud.com/objects/forms/wolfram-engine-open-source)特殊的 Wolfram 引擎许可证，允许终端用户自由使用免费引擎作为他们项目用途的一部分。

由于持续集成服务本身是“用于进一步开发”的用途，而且终端用户使用时也确实不能免除 Wolfram 引擎的单独许可证，我认为在许可上应该时没有什么风险的。
