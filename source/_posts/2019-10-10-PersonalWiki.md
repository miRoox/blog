---
layout: post
title: "尝试用TiddlyWiki搭建个人维基知识库"
date: 2019-10-10 20:44:23
tag: ["Wiki", "Web"]
---

搭建一个个人维基用来整理知识的想法早已有之，但具体该使用什么方案却迟迟没能定下来。在最初的想法里，我希望满足下面的几项需求：

* 内容与表现分离
* 自动化构建
* 可以使用自己定制的模板
* 词条的分类灵活，以适应知识体系的逐渐完善
* 方便建立知识点（词条）间的联系
* 需要用笔记时能快速提取
* $\LaTeX$ 公式输入
* 代码块语法高亮

<!--more-->

作为参考，见过别人用 [Dokuwiki](https://www.dokuwiki.org/dokuwiki) 的，也有直接拿 Hexo 的 [Wikitte](https://github.com/zthxxx/hexo-theme-Wikitten) 主题搭建的，等等。当然，我自己也做过一些尝试，比如 [Zim Wiki](https://www.zim-wiki.org/) ，不过这个太简陋了，完全无法满足我的需求；甚至受 [小时物理百科](http://wuli.wiki/) 的影响，尝试过用 $\LaTeX$ 构建维基，但 $\LaTeX$ 对于我的需求而言又稍显复杂了，而且大量交叉引用在PDF中也并不方便阅读。最后在一番比较和取舍之下选择了[TiddlyWiki](https://tiddlywiki.com/)[^1]。

TiddlyWiki，按官方说法是[「一款非线性个人 Web 笔记本」](https://github.com/Jermolene/TiddlyWiki5#readme)。相比其他笔记和 Wiki 系统，其最大的特点之一是程序本体和数据全部都在一个 html 文件内，这意味着组织和阅读多个词条可以在同一个页面内直接完成，内容的关联更加直接，方便互相比照。同时，还有着非常强大的条目管理功能和插件系统，可扩展性和可定制性都很强。

TiddlyWiki 的优点还有很多[^2]，这里就不多赘述了。就我而言，更想简单说一下 TiddlyWiki 是如何满足前面提到的几项需求的：

* 内容与表现分离：
    * 这一项近乎是一种哲学理念，实践起来是否须要完全符合还是看具体情况。
    * 典型地，[WikiText](http://www.tiddlywiki.cn/#WikiText) 就提供了很多特定语义的语法元素，还有宏、模板嵌入等各种自定义工具。
    * 当然，经典地 HTML-CSS-JS 结构也是可以使用的。
* 自动化构建：
    * 通过使用 Node.js 上的 [TiddlyWiki](http://www.tiddlywiki.cn/#Installing%20TiddlyWiki%20on%20Node.js) 服务可以在本地同步保存修改；
    * 用 Git 和 [Travis CI](https://travis-ci.org/) 实现向 Github Pages 自动部署。
* 可以使用自己定制的模板：
    * 这一项其实是“内容与表现分离”的具体实践方法之一。
    * WikiText 支持模板条目和宏。
* 词条的分类灵活，以适应知识体系的逐渐完善：
    * TiddlyWiki 是基于标签分类的，一个词条可以分到多个标签下，这一点比许多按树状层级分类的方案要灵活得多。
* 方便建立知识点（词条）间的联系：
    * 词条链接和词条嵌入。
* 需要用笔记时能快速提取：
    * 能自动部署到网页上，有网就能看；
    * 还有灵活的搜索语法。
* LaTeX公式输入：
    * KaTeX插件：支持的命令较少，不过是官方提供的，安装很容易。
    * [MathJax插件](http://mathjax-tw5.kantorsite.net/)：第三方提供的，比较老了，好像和新版不太兼容，需要折腾（反正我没能折腾成功）。
* 代码块语法高亮
    * Highlight.js插件：这也是官方提供的。

除此之外，TiddlyWiki 还有一大优点是简单，几乎所有操作都可以在网页上完成，基本不用到处配置。这对于我这种对web技术基本一无所知的人来说是一个极大的优势。

不过也因为我对web技术的不了解，导致很大的功夫都花在自动部署的配置上了，最终也只是是照猫画虎。其间主要参考了 alexashley 的个人Wiki源码[^3]、JavaScript 标准参考教程（alpha）[^4]、《Blog自动部署实践: Hugo + Travis CI -> GitHub Pages》[^5]等资料。

最终弄出来的成品在：<https://miroox.github.io/wiki/>

---

参考资料：

[^1]: [TiddlyWiki中文网站](http://www.tiddlywiki.cn/)
[^2]: [使用 TiddlyWiki 打造轻便个人 Wiki 知识库](http://blog.dimpurr.com/tiddly-wiki/)
[^3]: [alexashley 的个人Wiki源码](https://github.com/alexashley/wiki)
[^4]: [package.json文件 - JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/nodejs/packagejson.html)
[^5]: [Blog自动部署实践: Hugo + Travis CI -> GitHub Pages](https://blog.yuantops.com/tech/hugo-travis-ci-auto-deploy-to-gh-pages/)
