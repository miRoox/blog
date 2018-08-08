---
layout: post
title: "Mathematica程序包的中文与Unicode处理"
date: 2018-08-08 12:28:23
description: ""
tag: ["编程", "Mathematica"]
---

Mathematica在处理字符时默认总会将所有字符转换为ASCII字符表示，
例如`π`会转化为`\[Pi]`，而像汉字`仪`这样的一般字符会转化为`\:4eea`。

这种设计固然可以避免某些环境对非ASCII字符不支持的困难，
而且在Mathematica环境下会自动转换成原本的字符，
但对于一般的文本阅读环境而言，尤其是在代码中使用一些中文文本或者注释时，
这样的内容阅读起来根本无法理解。

为了方便在没有Mathematica的环境下也能方便的阅读程序包中的非ASCII的一般字符，
下面脚本提供了将`\:nnnn`形式的转义序列转换为UTF-8编码下对应的Unicode字符的简单方法

```mathematica
#!/usr/bin/env wolframscript

fileName=Last[$ScriptCommandLine];
in=Import[fileName,"Text"];
out=StringReplace[in,("\\:"~~(n:Repeated[HexadecimalCharacter,{4}])):>FromCharacterCode[FromDigits[n,16],"UTF-8"]];
Export[fileName,out,"Text",CharacterEncoding->"UTF-8"];
```

经过处理的文件用Mathematica也可以正常打开显示，
只是每次保存时又会重新使用转义序列表示非ASCII字符，
因而每次修改都应该重新运行脚本。

对于程序包，如果在代码正文中也使用了中文等非ASCII字符的话，
在使用`Get`等方式导入包时，
可能需要添加选项`CharacterEncoding->"UTF-8"`才能正确地显示其中的内容。

