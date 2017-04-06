---
layout: post
title: "旧作：【翻译】CSF文件格式"
date: 2017-03-25 09:07:42
description: "红色警戒等游戏中的CSF文件格式"
tag: 红警
---

[原文链接](http://modenc.renegadeprojects.com/CSF_File_Format)

---

#  CSF文件格式

CSF文件存储了红色警戒2/尤里的复仇（也有将军/绝命时刻和其它可能）的字符串表。

## 标头(The Header)

CSF文件的标头有0x18个字节长。

它以如下方式构成

**偏移量** | **类型** | **描述** 
:------:|:-----:|:-----
0x00|`char[4]`| **“FSC”** <br> CSF文件的头部标识符。 <br> 如果这里不是“FSC”，游戏将不会加载这个文件。
0x04|`DWORD`| **CSF版本** <br> CSF格式的版本号。 <br> 红警2、尤里的复仇、将军、绝命时刻以及BFME系列使用版本3。 <br> 救世传说(NOx)使用版本2。 <br> 这些版本间实际有什么差别是未知的。 <br> 感谢Siberian GRemlin提供了这些信息。 [见此](http://www.ppmsite.com/forum/viewtopic.php?p=130667#130667)
0x08|`DWORD`| **标签数** <br> 这个字符串表中全部标签的数目。
0x0C|`DWORD`| **字符串数** <br> 这个字符串表中全部字符串对的数目。 <br> *（一个字符串对由一个Unicode编码的`Value`和一个ASCII编码的`ExtraValue`组成，一个标签可以包含不止一个这样的字符串对，但实际上只有第一个字符串对的`Value`会被游戏所使用。）*
0x10|`DWORD`| **（未使用）** <br> 这个部分不会被游戏所使用，这意味着它是没有用的。 <br> 如果需要，你可以在其中存储一个额外的信息标记，来让你的程序使用它（假如你想写一个程序来读取CSF文件）。
0x14|`DWORD`| **语言**  <br> 这个字符串表使用的语言。 <br> 参见下面的列表

*语言*
语言（`DWORD`类型）可以具有以下值（其他值将被识别为“未知”）：

 0 = 美国（英语） *
 
 1 = 英国（英语）
 
 2 = 德语 *
 
 3 = 法语 *
 
 4 = 西班牙语
 
 5 = 意大利语
 
 6 = 日语
 
 7 = 无意义(Jabberwockie)
 
 8 = 韩语 *
 
 9 = 汉语 *
 
\>9 = 未知

 \* 红警2/尤里的复仇已经用这些语言发布。

## 标签(Labels)

在标头之后，跟着标签数据。

标签可以视为字符串表中的条目（例如：“`GUI:OK`”是一个标签）。

每个标签有一个 **name** （ASCII编码的字符串，例如“`NAME:MTNK`”）以及零或若干个字符串对。正如前面提到的，一个字符串对由一个Unicode编码的`Value`（例如：“灰熊坦克”）和一个ASCII编码的`ExtraValue`（在原版的ra2.csf/ra2md.csf中没有例子，也不会被游戏所使用）。

现在让我们来看看数据是如何在CSF文件中储存的：

### 标签标头(Label header)

标签的数据始于一个标签标头，它以如下方式构成：

**偏移量** | **类型** | **描述**
:------:|:-----:|:-----
0x00|`char[4]`| **“LBL”** <br> 标签标识符 <br> 如果这里不是“LBL”，游戏将无法将后面的数据识别为标签数据，并且会读取后面的4字节。
0x04|`DWORD`| **字符串对的数目** <br> 这是与这个标签关联的字符串对的数目。通常为1。
0x08|`DWORD`| **标签长度(LabelNameLength)** <br> 此值保存后面的标签名称的大小。
0x0C|`char[LabelNameLength]`| **标签名** <br> 一个长度为偏移量为0x08的`DWORD`的 **非** '\0'终止的字符串。如果长度超过的话，剩下部分的会被截去。

ra2md.csf中的第一个标签可以在0x18处找到。

注：空格、制表符、换行符会从标签名中格式化出去，因此他们不能被使用。

### 值(Values)

其数据（字符串对）直接接在标签标头的后面。

这是它构成的方式：

**偏移量** | **类型** | **描述**
:------:|:-----:|:-----
0x00|`char[4]`| **“RTS”** 或 **“WRTS”** <br> 标识符 <br> “RTS”意味着这个标签 **没有** ExtraValue。 <br> “WRTS”意味着在Value数据后还跟着ExtraValue的数据（见下）。 <br> 其它任何数据都是无效的。
0x04|`DWORD`| **值长度(ValueLength)** <br> 它保存后面的Unicode字符串（Value）的长度。
0x08|`byte[ValueLength*2]`| **值(Value)** <br> 它保存 **编码后的** 标签的值(Value)。 <br> 注意它有ValueLength*2字节长，因为值是一个Unicode字符串，即每个字符是一个字(word)而不是一个字节(byte)。 <br> 将这里的数据解码成Unicode字符串时，注意 **不是** 每个字节都是值的数据（或者用0xFF减它，参见下面的示例）。
0x8+ValueLength*2|`DWORD`| **额外值长度(ExtraValueLength)** <br> 这里保存了后面跟着的额外数据(ExtraValue)字符串的长度。 <br> 只有标识符为“WRTS”而不是“RTS”时，它以及后面的数据才会存在。
0x8+ValueLength*2+0x4|`char[ExtraValueLength]`| **额外值(ExtraValue)** <br> 与标签名相似，这是一个长度为ExtraValueLength的非'\0'终止的字符串。如果长度超过的话，剩下部分的会被截去。

*将value解码*

将value解码成Unicode字符串时，注意不是每个字节都是值的数据（或者用0xFF减它）。

一个C++的示例：

```cpp
int ValueDataLength = ValueLength << 1;
for(int i = 0; i < ValueDataLength; ++i) {
  ValueData[i] = ~ValueData[i];
}
```