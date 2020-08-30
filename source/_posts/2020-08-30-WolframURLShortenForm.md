---
layout: post
title: "部署一个简单的缩略 URL 的表单"
date: 2020-08-30 21:33:21
categories: "代码编程"
tag: ["Wolfram", "Cloud"]
---

最近微博好像把 `github.io` 下的域名屏蔽了，导致博客完全无法分享，就考虑通过短链接跳转绕开这一限制。考虑到 Mathematica 有现成的函数 [`URLShorten`](http://reference.wolfram.com/language/ref/URLShorten.html)，直接使用即可。不过闲着无聊，就顺便部署了一个简单的缩略 URL 的表单: <https://www.wolframcloud.com/obj/miroox/url-shorten>。

<!--more-->

{% iframe https://www.wolframcloud.com/obj/miroox/url-shorten?_embed=iframe 600 400 %}

本来想支持复制按钮的，然而 [`CopyToClipboard`](http://reference.wolfram.com/language/ref/CopyToClipboard.html) 在网页上不起作用，自己写 js 支持又出乎意料的麻烦，遂放弃。

部署用的代码：

```mathematica
CloudDeploy[
 FormPage[
  {"url", "URL:"} -> <|
    "Interpreter" -> "URL",
    "Hint" -> "Enter the URL to be shortened"
    |>,
  Row@{"Short URL: ", Hyperlink@ URLShorten[#url]} &,
  AppearanceRules -> <|
    "Title" -> "Shorten your URL"
    |>
  ],
 "url-shorten",
 Permissions -> "Public"
 ]
```
