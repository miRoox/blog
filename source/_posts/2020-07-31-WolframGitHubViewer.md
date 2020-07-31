---
layout: post
title: "预览在 GitHub 上的 Wolfram 笔记本"
date: 2020-7-31 21:29:21
categories: "代码编程"
tag: ["GitHub", "Wolfram"]
---

[![Make A Wolfram GitHub Viewer Badge](https://www.wolframcloud.com/obj/github-cloud/notebookviewersource/Images/github_header.png)](https://www.wolframcloud.com/obj/github-cloud/form/BadgeCreation)

<!--more-->

不知道啥时候，Wolfram 官方偷偷上线了一个在线预览 GitHub 仓库中的笔记本的网页应用。有了这个，大家就不用花自己的 Cloud Credits 来部署笔记本，而只要把笔记本同步到 GitHub 上就可以从浏览器访问云上的笔记本了。

以 [@wjxway](https://github.com/wjxway) 大佬的[黑洞吸积盘模拟](https://github.com/wjxway/Realistic_Blackhole_Accretion_Disk)为例，按表单的提示输入即可：

1. 输入 GitHub 用户名 <br/> {% asset_img github_id.png github id %}
2. 输入要预览的 GitHub 仓库名和分支，分支默认为 master <br/> {% asset_img github_repo-branch.png github repo-branch %}
3. 得到一个Markdown格式的徽章链接代码 [![View notebooks](https://wolfr.am/HAAhzkRq)](https://wolfr.am/OphS2N6z)  <br/> {% asset_img markdown_badge.png markdown badge %}
4. 复制徽章代码到 Markdown 文件（通常是 `README.md`），在预览中点击徽章即可打开笔记本 <br/> {% asset_img notebook.png notebook %}

---

补记：关于笔记本的编写保存

写笔记本的时候建议使用 [`ResourceFunction["SaveReadableNotebook"]`](https://resources.wolframcloud.com/FunctionRepository/resources/SaveReadableNotebook) 或者 [`mathematica-notebook-filter`](https://github.com/JP-Ellis/mathematica-notebook-filter) 得到干净的笔记本文件，避免提交一些乱七八糟的cache到git中：

* 小文件推荐使用 `ResourceFunction["SaveReadableNotebook"]`，也推荐使用我的 [`MirooxUtils`](https://github.com/miRoox/MirooxUtils) 包附带的一个面板来一键快速保存为可读笔记本。
* 大文件，尤其是包含大量图片或者动态的文件，还是推荐使用 `mathematica-notebook-filter`（但要注意它还会滤掉输出单元），否则文件大小可能回膨胀地非常大，并且 `ResourceFunction["SaveReadableNotebook"]` 对动态的处理存在一定Bug，可能导致文件损坏。
