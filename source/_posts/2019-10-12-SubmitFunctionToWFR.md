---
layout: post
title: "如何提交函数到 Wolfram Function Repository"
date: 2019-10-12 15:23:32
categories: "代码编程"
tag: ["Wolfram"]
---

首先，你需要一个 [Wolfram 账户](https://account.wolfram.com/)。

<!--more-->

然后，你需要[申请一个 Publisher ID](https://datarepository.wolframcloud.com/request-publisher-id)，这点在许多讲述提交函数到WFR的文章中都没提到。大致的申请流程可以在[参考文档](https://reference.wolfram.com/language/workflow/AcquireAResourceSystemPublisherID.html)里找到。

然后在 Mathematica 中新建一个函数知识库项。按[风格指南](https://resources.wolframcloud.com/FunctionRepository/style-guidelines)编写函数代码和文档。

提交前要检查 Mathematica 有没有登录到你的 Wolfram 账户，可以根据 `$WolframID` 的值确认。而且应该将 `$PublisherID` 的值设置为你申请到的 Publisher ID。

当然，提交之前还应该用菜单中的“Check”按钮检查格式无误后再提交。最后点击“Submit to Repository”，接下来就等邮件吧。无论 review 有没有通过一般都会发邮件进行通知。没有通过的话往往还会附上 review comments 指导你改进，并且可以完善后再提交更新。
