---
layout: post
title: "如何在Wolfram语言里造一个Wolfram语言风格的对象"
date: 2019-05-06 22:27:17
description: "Language`SetMutationHandler"
tag: ["编程", "Wolfram"]
---

最近在做 [ComputationalOptics包](https://github.com/miRoox/ComputationalOptics) 的时候为了把
[`LightField`](https://github.com/miRoox/ComputationalOptics/blob/1197dbf20758271c93acdbc4f780913443847b95/ComputationalOptics/Kernel/LightField.m)
实现为一个比较典型的Wolfram语言风格的对象，使用了很多undocumented方法，这里主要是做一下记录。

需要注意的是，这里的“对象”不是指“面向对象”里所说的对象（虽然也有点关系），而是类似于
[`Entity`](http://reference.wolfram.com/language/ref/Entity.html)或者[`TemporalData`](http://reference.wolfram.com/language/ref/TemporalData.html)
这类的对象。

这里就以前面提到的`LightField`为例说明一下如何造一个WL风格的对象。
首先，分析需求，来看看预期要实现的效果：

![result](/images/posts/WLStyleObject/result.png)

首先能看到的是`LightField`对象在输出时显示为一个类似于[`SparseArray`](http://reference.wolfram.com/language/ref/SparseArray.html)那样的一个摘要框；
然后，对象的属性可以通过函数参数的形式读写访问，而且对写入数据参数还会进行检查，这一点应该是WL风格的对象最核心的特征；
最后，对象是能被认为是一个原子对象，这点实质是一种封装，可以避免直接用表达式的部分操作来访问对象内容，同样类似`SparseArray`。

进行具体实现前，最基本的，`LightField`对象数据的组织结构需要确定下来。
这里采用的是`LightField[type_String, props_Association]`的模式，主要是考虑到这种表达式结构在表达光场信息的时候能具有较好的泛化能力。
上面的`type`用来标记光场描述的类型（比如单色平面复振幅），而`props`则是描述光场所需的具体属性，以关联容器的方式组织数据内容。
当然，这些含义对本文而言并不是重点，但也是对象设计和实现中最基本最重要的一步。

然后是对属性的读写的实现。
单纯的读操作实现起来并不困难，不过需要注意的一点是我们接下来还要将对象转化为原子的，因此不能直接将问题变为利用`[[]]`提取部分。

我们知道，复数`Complex`也是原子的，它虽然不能直接对部分进行提取，但可以利用模式匹配来获得实部和虚部。
基于同样的原理，读属性的核心实现长这样

```mathematica
getProperty[HoldPattern@LightField[_,props_],prop_]:=Lookup[
  props,prop,
  Message[LightField::ptprop,prop];Missing["NotAvailable",prop]
]
(obj_LightField?LightFieldQ)[prop_]:=getProperty[obj,prop]
```

这其中，`LightFieldQ`是一个基于模式匹配判断输入是否为格式正确的`LightField`对象的函数。
毕竟，如果基本格式都不正确的话，后面的模式匹配获取部分也无从谈起。

而写方法在wolfram语言寻常的语法上就非常困难了，因为WL概念上并不存在引用或者指针这一类东西，符号本身几乎总是充当引用的作用，
但在形如`a["Wavelength"] = xxx`的表达式里，左侧表达式并不是一个符号，而这种形式常常会将定义关联到符号`a`的下值中，也就是我们常见的函数定义方式。
那么怎么让计算上述形式表达式的时候把它当做一个类似于部分赋值的方式进行处理呢？

一个非常自然地想法可能是对`LightField`赋予上值，不过很遗憾的是这种方案必然是不可行的，
因为可变性意味着参数必须以保持的形式传递符号，那么在模式匹配的阶段必然没有机会接触到需要匹配的`LightField`，这样上值的关联就无法成立。

另一种想法则是`Unprotect[Set]`后添加赋值规则，比如

```mathematica
Set[(sym_Symbol?LightFieldQ)[prop_],val_]:=...
```

这的确不失为一种解决办法，但这一方法实在有些太笨重了。
这会导致所有满足模式`sym_Symbol[prop_]=val_`的代码都还要用`LightFieldQ`检查一遍，无论`sym`中是否隐含着`LightField`。

尝试下面的代码，感受一下鬼畜的效果

```mathematica
gQ[_g]:=(Print["Ok"];True)
gQ[_]:=(Print["Oops"];False)
Unprotect[Set];
Set[(sym_Symbol?gQ)[prop_],val_]:=(Print[Unevaluated[sym[prop]],"=",val])
Protect[Set];
Do[a[1]=1,{a,{1,<||>,g[]}}]
```

（记得清除`Set`的附加定义）

因而我们需要一个更好的解决办法，这就是``Language`SetMutationHandler``，它的基本用法可以参见下面的相关资料，基本上照葫芦画瓢就行。
作为对照，这里给一个与前述`Unprotect`方法完全类似测试代码

```mathematica
fQ[_f]:=(Print["Ok"];True)
fQ[_]:=(Print["Oops"];False)
SetAttributes[mutationHandler,HoldAllComplete]
mutationHandler[Set[(sym_Symbol?fQ)[prop_],val_]]:=(Print[Unevaluated[sym[prop]],"=",val])
Language`SetMutationHandler[f,mutationHandler]
Do[a[1]=1,{a,{1,<||>,f[]}}]
```

从输出中可以看到，只有当`a`的值变为`f[]`时，上面的匹配测试才会触发。完美符合要求。

在具体实现上，还有一些细节，比如对非属性参数检查和报错，对属性值的检查其实是由`LightFieldQ`对改变后的临时结果整体进行的检查，
还有对失败结果需要``Language`MutationFallthrough``传递到正常的处理流程中，
以及`Protect[LightField]`来避免fallthrough后干扰到`LightField`自身的定义等等，下面摘取了其中主要的部分

```mathematica
SetAttributes[setProperty,HoldFirst]
setProperty[sym_Symbol,prop_,val_]:=Block[
  {tmp=sym,tmpprops},
  tmpprops=getProperty[tmp,All];
  If[KeyExistsQ[tmpprops,prop],
    tmpprops[prop]=val;
    tmp=Replace[tmp,HoldPattern@LightField[type_,props_]:>LightField[type,tmpprops]];
    If[LightFieldQ[tmp],
      sym=tmp;val,
      Message[LightField::setptvp,val,prop];
      $Failed
    ],
    Message[LightField::setptp,prop];
    $Failed
  ]
]
SetAttributes[mutationHandler,HoldAllComplete]
mutationHandler[Set[(sym_Symbol?LightFieldQ)[prop_],val_]]:=With[
  {result=setProperty[sym,prop,val]},
  result/;!FailureQ[result]
]
mutationHandler[_]:=Language`MutationFallthrough
Language`SetMutationHandler[LightField,mutationHandler]
```

对象的原子化则是利用``System`Private`SetNoEntry``系列的函数，同样，下面的相关资料里有很详细的介绍。
这个系列的函数在不少内部对象的实现里也可以见到，比如`Dataset`，我们不妨照着做一个。
利用神器``GeneralUtilities`PrintDefinitions``获得其定义，抛开那些无关的，很容易找到下面的内容

![Dataset](/images/posts/WLStyleObject/Dataset.png)

中间有一些`Dataset`内部使用的注册机制，抛开那些不看，无非就是``System`Private`SetNoEntry``原子化后，
利用``System`Private`NoEntryQ``检查防止无限自递归，注意两处的`Unevaluated`也是防止无限自递归的一环。
在相关资料里我们看到10.4以后又引入了几个更便利的函数，于是依葫芦画瓢就可以写成

```mathematica
(obj_LightField?holdLightFieldQ)/;System`Private`HoldEntryQ[obj]:=With[
  {valid=System`Private`HoldSetNoEntry[obj]},
  valid
]
```

其中`holdLightFieldQ`就是个保持版的`LightFieldQ`，作用当然也就不言而喻了。

最后是摘要框，这部分其实完全没有必要，不过说到Mathematica，优雅和颜值也是非常重要的一环，而且同样也用到了一套undocumented函数。
这部分可以参考下面的相关资料，也可以用神器``GeneralUtilities`PrintDefinitions``来hack既有摘要框的对象，比如`SparseArray`

![SparseArray](/images/posts/WLStyleObject/SparseArray.png)

其核心无非就是``BoxForm`ArrangeSummaryBox``，中间量的命名也非常直白，即使不看参考资料也不难猜出使用方法。

这三部分都完成了以后，也算是有了一点Wolfram语言风格对象的神韵了。
尽管为了这样优雅的使用对象，付出不少丑陋肮脏的实现代码，
不过上面看到的一些官方的实现同样也丑陋无比，这倒也算是Wolfram语言的传统艺能了（

------

相关资料：

* [``Language`*`` documentation project - ``Language`*Mutation*``](https://mathematica.stackexchange.com/a/165910/63369)
* [What are some useful, undocumented Mathematica functions? - ``System`Private`*Entry*`` functions](https://mathematica.stackexchange.com/a/139974/63369)
* [How to create expanding summary boxes like the ones displayed for `InterpolatingFunction`, `NearestFunction`, etc.?](https://mathematica.stackexchange.com/q/77658/63369)
* [Object Oriented Programming](https://mresources.github.io/tutorial/mathematica-programming/assorted-tricks/object-oriented-programming.html)
