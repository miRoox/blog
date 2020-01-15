---
layout: post
title: "使用Mathematica实现基于类的面向对象"
date: 2017-09-01 23:54:41
description: "使用Mathematica实现基于类的面向对象"
tag: ["编程", "Wolfram", "OOP"]
---

Mathematica 通常被宣传为 *符号式* 、 *函数式* 的编程语言，不过 
[维基百科](https://en.wikipedia.org/wiki/Comparison_of_multi-paradigm_programming_languages#Language_overview) 
宣称它支持 13种编程范式，其中还包括 *面向对象* 编程。尽管大家似乎都不把 Mathematica 当编程语言，
不过出于兴趣，也为了提升对 Mathematica 语言特性和面向对象的理解，于是有了这篇文章。

比较理想的情况是能够以类似 C++ 或者 Java 那样的形式来创建和使用类与对象，以此为目标进行设计。

首先考虑的当然是上网搜索，可惜网上的实现大多不完善，封装、继承、多态都不全。一番查找之下，
[这篇文章](http://12000.org/my_notes/object_based_in_mathematica/v1.html) 
给我的启发最大，让我确立了封装类的基本思路。而继承与多态受到 Lua 中利用元表来模拟继承的启发。

（注：本文中提到的多态主要指 [子类多态](https://en.wikipedia.org/wiki/Subtyping) ）

好，废话不多说，先上代码。

```mma
(*nil*)
SetAttributes[nil,ReadProtected];
nil[___]=nil;(*default*)
(*new*)
SetAttributes[new,{ReadProtected,HoldFirst}];
new[nil]=nil;
(*type of*)
SetAttributes[typeOf,ReadProtected];
typeOf[obj_]:=If[Evaluate[obj@type]===nil,nil,obj@type,Head[obj]];(*to make sure every expression has a type*)
(*classQ*)
SetAttributes[classQ,ReadProtected];
classQ[obj_]:=typeOf[obj]==class||typeOf[obj]==nil;(*nil is a special class*)
(*class*)
SetAttributes[class,{ReadProtected,HoldAll}];
class[identifier_Symbol,{privDecls___Symbol},body_]:=class[identifier,nil,{privDecls},body];
class[identifier_Symbol,baseClass_?classQ,{privDecls___Symbol},body_]:=With[
  {className=SymbolName[identifier],
   upperClassName=StringReplace[SymbolName[identifier],StartOfString~~h_:>ToUpperCase[h]]},
  SetAttributes[identifier,{ReadProtected,HoldAll}];
  identifier@type=class;
  (*'type'Q*)
  SetAttributes[Evaluate[Symbol[className<>"Q"]],ReadProtected];
  Evaluate[Symbol[className<>"Q"]][obj_]:=If[
    obj[Evaluate[Symbol["is"<>upperClassName]]],
    True,False,False
  ];
  (*constructor*)
  new[identifier]:=Module[
    {$self,$base,privDecls},
    SetAttributes[$self,{HoldAll,ReadProtected}];
    SetAttributes[$base,ReadProtected];
    SetAttributes[#,ReadProtected]&/@{privDecls};(*encapsulation*)
    $base=new[baseClass];(*inheritance*)
    $self[mem_]:=$base@mem;(*polymorphism*)
    $self@type=identifier;(*type*)
    $self[Evaluate[Symbol["is"<>upperClassName]]]=True;(*subtyping*)
    (*body*)
    ReleaseHold[Hold[body]/.{self->$self,base->$base,public->$self}];
    $self(*reference semantics*)
  ];
]
```

在分析这些代码前，先来看一个简单的例子，看看如何做到封装继承多态。

定义一个基类

```mma
class[testBase,
  {text},
  (*initialize*)
  text="Base";
  (*public method*)
  public@setText[str_String]:=(text=str);
  public@getText[]:=text;
  public@print[]:=Print["This is base. The text is "<>text]
]
```

再定义一个派生类

```mma
class[testDerived,testBase,
  {},
  public@print[]:=Print["This is derived. The text is "<>self@getText[]]
]
```

最后定义一个（带类型约束的）测试函数（注：`testBaseQ` 由 `class` 自动生成）

```mma
testFun[obj_?testBaseQ]:=obj@print[];
```

对于一个基类对象执行

```mma
obj1=new[testBase];
testFun[obj1]
```

会输出

```
This is base. The text is Base
```

而对于一个派生类对象执行

```mma
obj2=new[testDerived];
obj2@setText["Derived"];
testFun[obj2]
```

则会输出

```
This is derived. The text is Derived
```

可以看到，之前提到的目标基本已经满足了。封装继承多态都有，形式和 C++ 、Java 也很相似。
下面大致分析它的实现方式。

首先，随处可见的 `SetAttributes[_,ReadProtected]` 只是为了在包装成函数包后让实现对外不可见，不是重点。

然后看代码的开始，定义了一个 `nil` 。它的定位大概类似于 C++ 中的 `nullptr` ，表示一个“空”对象。
略有不同的是， `nil` 既是对象又是类型，这是 Mathematica 符号式编程的优势。

```mma
nil[___]=nil;(*default*)
```

这段代码表示的是 `nil` 的任何方法得到的结果都是 `nil` 。结合后面利用责任链模式（见后文）实现的多态，
这里事实上给所有对象的方法提供了一个缺省的实现。也就是说，如果一个对象调用了一个不存在的方法，
那么它得到的结果就是 `nil` 。这比 Mathematica 本身默认以保持符号形式不变的方法具有更清晰的类型语义。

接下来是 `new` 。设计上，它的意义同 C++ 基本是一致的。

```mma
new[nil]=nil;
```

这段代码的目的和前面差不多，也是责任链传递的底端。

而后是 `typeOf` ，一个获取类型的辅助函数。由于 Mathematica 的动态性，它可以对应于 C++ 中的 `decltype()` 或者 `typeof()` 。

```mma
typeOf[obj_]:=If[Evaluate[obj@type]===nil,nil,obj@type,Head[obj]];(*to make sure every expression has a type*)
```

正如后面的注释所述，最后的 `Head[obj]` 只是为了保证任何表达式都能有一个类型。
注意使用时尽量不要用它来约束类型。至于这里为什么要用 `Evaluate` ，读者不妨自己想想。

接着是 `classQ` ，同样也是个类型判断的辅助类，用于约束 `class` 的参数。

```mma
classQ[obj_]:=typeOf[obj]==class||typeOf[obj]==nil;(*nil is a special class*)
```

读者不妨想想我为什么要把 `nil` 也视作类。

然后终于进入正题 `class` 了。

```mma
class[identifier_Symbol,{privDecls___Symbol},body_]:=class[identifier,nil,{privDecls},body];
```

这句没什么好说的，给不做任何继承的类提供一个默认参数。

中间略过一些细枝末节，直接看到 `(*'type'Q*)` 那里。

```mma
  Evaluate[Symbol[className<>"Q"]][obj_]:=If[
    obj[Evaluate[Symbol["is"<>upperClassName]]],
    True,False,False
  ];
```

同样是利用 Mathematica 的动态性，自动生成一个多态的类型测试函数。
注意 `If` 最后一项 `False` 使得它的行为更为确定。

然后是最为核心的 `new` 函数的特化（这个词从 C++ 里来，我觉得这么说更有表现力）。

`Module` 开始声明了这几个局部变量

```mma
    {$self,$base,privDecls},
```

`$` 开头约定为内部符号，避免名称冲突。

`$self` 即要创建的对象实例自身，`new` 最后返回的就是它。由于从模块返回的就是它，因而它的生存期会被延长
（参见 [属性 Temporary](http://reference.wolfram.com/language/ref/Temporary.html) ）。
受它影响，那些间接被 `$self` 引用的对象生存期也会延长，这就是利用 `Module` 封装对象属性的机理。

`$base` 是基类对象。用于实现继承机制。

`privDecls` 即用户定义的私有成员，注意它是 `class` 传参进来的，这似乎可以限制 `Module` 的自动改名能力。

```mma
    $base=new[baseClass];(*inheritance*)
    $self[mem_]:=$base@mem;(*polymorphism*)
```

这两段就是实现继承多态的核心部分。学过设计模式的话很容易可以看出这其实就是一种 
[责任链模式](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern) 。
责任链模式简单的说就是向一条候选的对象链发出请求，根据请求以及运行时的情况决定一个对象是响应请求还是将其传递给下一级。
在这里，就是将 `$self` 处理不了的成员调用传递给 `$base` 从而实现继承。而对于基类定义过的方法，在派生类中重写即可实现多态
（准确地说，还需要类型约束）。

```mma
    $self@type=identifier;(*type*)
```

没什么好说的。

```mma
    $self[Evaluate[Symbol["is"<>upperClassName]]]=True;(*subtyping*)
```

这条就是 `'type'Q` 的实现部分。注意它也是 `$self` 的成员，也就是继承的部分。
也就是说一个派生类对象一定也会满足基类的类型测试函数。藉此，一套完整的子类多态就实现了。

最后是类定义的主体。

```mma
    ReleaseHold[Hold[body]/.{self->$self,base->$base,public->$self}];
```

由于 `ReplaceAll` 没有任何 `Hold` 系列属性，因此替换前需要 `Hold` 。

`public->$self` 就是一个语法糖。

```mma
    $self(*reference semantics*)
```

`new` 最后返回 `$self` ，因此赋值操作，如 `obj=new[object]` 只是让 `obj` 成了一个指向 `$self` 的引用。
也就如大家知道的那样，面向对象编程使用的大多是引用语义而不是值语义，这点需要注意。

还有一点值得注意的是，继承只继承公有部分，即使你是以 `public@privMethod` 的形式
（其中 `privMethod` 在 `privDecls` 中声明了）定义的，因为你无法在外部获取被模块改名了的 `privMethod` ）

结语略。
