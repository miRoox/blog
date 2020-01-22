---
layout: post
title: "在Wolfram语言中模拟指针语义"
date: 2019-01-18 23:15:37
categories: "代码编程"
tag: ["编程", "Wolfram", "功能模拟"]
---

### 背景和问题的引入

众所周知，Wolfram语言作为一个极为“高级”的编程语言，并没有提供指针这类较为底层的内存管理手段。而符号本身几乎总是充当了类似引用的作用，比如

```mathematica
set[sym_Symbol]:=sym=1
b=a;
set[b];
a
```

可以看到符号`a`的值通过`set[b]`赋为了`1`。在这里`b`形式上充当了类似其它语言中的引用的作用。但这种方式并不通用，只要`a`已经具有值了，这种平凡的方式就不能起作用了。有的读者可能会想到`:=`或者`Hold`封装，不过单靠这些也不能简单地对已具有本值的符号进行修改。因此，本文试图提出一种具有类似其它语言中指针语义的封装，实现对符号的间接操作。

<!--more-->

### 预期的目标

这里想实现一种具有类似C语言用法的指针（引用）封装。当然，由于Mathematica没有直接访问内存的手法，所有引用都是针对*符号*展开的。具体而言，应该可以实现下面的效果：

解引用：

```mathematica
a=1;
b=ref[a];
deref@b
```

得到`1`；

左值语义：

```mathematica
a=1;
b=ref[a];
deref@b=2;
a
```

得到`2`；

更复杂的左值：

```mathematica
a={1,2,3};
b=ref[a];
deref[b][[2]]=4;
a
```

得到`{1,4,3}`；

多重引用：

```mathematica
a=1;
b=ref[a];
c=ref[b];
deref@deref@c=2;
a
```

得到`2`。

这里只是举几个例子，文章毕竟不是测试集，也就不再赘述。

当然，我们希望能更接近C语言指针的语义。在这里，`ref`相当于C语言中的`&`单目运算符，而`deref`则相当于C语言的`*`单目运算符。

### 思路与实现

考虑我们需要保有符号，才可能对符号进行引用，因此首先`ref`必须具有`HoldFirst`属性。然后`deref`能在计算时解引用，也就是

```mathematica
deref[ref[sym_]] := sym
```

然后我们需要重载`Set`以获得左值语义。由于`deref`可能出现在很深的层次中，单靠[`TagSetDelayed`](http://reference.wolfram.com/language/ref/TagSetDelayed.html)不能覆盖重载的各种情况。但需要重载的情况必定含有`deref`，因此可以利用条件模式决定重载策略

```mathematica
Unprotect[Set];
Set[lhs_, rhs_] /; MemberQ[Unevaluated[lhs], _deref, {0, Infinity}] := <<具体实现>>
Protect[Set];
```

由于引用在这里总是保有着符号，因此左值语义在这里更类似一个宏展开，将`=`左侧的所有直接或隐含的`deref[ref[sym]]`结构展开成对应的`sym`。为了达到这个目的，首先需要保护`=`的左侧不进行计算，这里只需要一个简单的`Hold`封装即可。然后上面的所说的“宏展开”细节上应该分两步进行：

一是将“隐含”转换为“显含”：直观上来说，可能大家会写成这样的替换规则：`deref[r_]:>deref[Evaluate[r]]`，但这是不对的。由于`Hold`封装的存在，需要用到一个名为[Trott-Strzebonski](https://mathematica.stackexchange.com/questions/29317/replacement-inside-held-expression)的技巧，而且由于前面已经定义了`deref[ref[sym_]]:=sym`，因此这里必须借助`Block`局部地清除这个定义才行，另一方面，为了处理多重引用，还需要排除`deref[deref[xxx]]`这种模式被直接展开。

二是对显式结构进行替换：这部分比较简单，直接使用`deref@ref[sym_Symbol]:>sym`即可。同样也是因为`Hold`封装的存在，符号`sym`即使有本值也不会计算。

最后将展开的结果还原为赋值表达式即可。

综合一下，我们可以得到一个比较完整的代码

```mathematica
SetAttributes[ref, HoldFirst]
deref[ref[sym_]] := sym
Unprotect[Set];
Set[lhs_, rhs_] /; MemberQ[Unevaluated[lhs], _deref, {0, Infinity}] :=
 With[{
   lhs1 = Block[{deref},
     Hold[lhs] //. {
       deref@ref[sym_Symbol] :> sym,
       deref[r : Except[_deref]] :>  With[{eval = deref[r]}, eval /; True] (*Trott-Strzebonski*)
       }]},
  Replace[Hold[Set[lhs1, rhs]], Hold[Set[Hold[lhs2_], rhs2_]] :> Set[lhs2, rhs2]]
 ]
Protect[Set];
```

当然，对于一个真正实用的模块而言，还需要一些诸如错误处理之类的细节，但如果只考虑正确使用的话，实现指针语义的核心部分都已经列在这里了。一个相对实用的版本可以在 <https://github.com/miRoox/LValueRef> 找到。
