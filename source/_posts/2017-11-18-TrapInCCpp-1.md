---
layout: post
title: "C/C++的一些常见的坑(1)"
date: 2017-11-18 0:12:34
categories: "代码编程"
tag: ["编程", "C语言", "C++", "语法", "参考", "踩坑"]
---

根据个人经验和见闻总结而来。主要涉及C和C++语法和语义方面的一些陷阱。

<!--more-->

### 求值顺序

在著名的《谭C》教材的误导下，中国学生对表达式的求值顺序的误解可能是最深的。首先要明确地是，**运算符对运算数的求值顺序与运算符的结合性没有任何关系**，而且，无论是C语言还是C++，**几乎所有**运算符对运算数进行求值的顺序都是 *未指定的*，甚至在某些情况下会构成 *未定义行为*。

另一方面，C和C++在这方面的规定较为复杂，而且随着标准版本的变化，相关概念也有较大的变化。因此，除非你自认为自己对这方面的规定十分清楚，我建议尽量让程序里的每一个表达式保持结构简单，尤其避免在一个表达式对同一个对象里产生超过一次 *副作用*。这不光可以避免未定义行为或者未指定行为，也有助于增强程序的可读性。例如：

```cpp
//bad

i = ++i + i++;     // C 和 C++ 中都为未定义的行为

i = ++i + 1;       // C 中始终为未定义行为；C++11 前为未定义的行为

f(i = -2, i = -2); // C 中始终为未定义行为；C++17 前为未定义的行为

a[i] = i++;        // C 中始终为未定义行为；C++17 前为未定义的行为
```

```cpp
//good

//i = ++i + i++;   // what does the coder want to do?

i = i + 2;

i = -2;
f(i, i);

++i;
a[i] = i;
```

参见 [C：求值顺序](http://zh.cppreference.com/w/c/language/eval_order)、[C++：求值顺序](http://zh.cppreference.com/w/cpp/language/eval_order)

### 字符常量/字面量的类型

简而言之，C语言中无前缀修饰的 *字符常量* 的类型是 `int` ；而C++中无前缀修饰的 *字符字面量* 的类型默认是 `char` （除非字符在执行字符集中无法用单字节表示，这时其类型为 `int` ）。

是的，在 C 和 C++ 里他们的叫法都不同。C 把嵌入代码的常量值称为 *常量* 或 *字面量* ，其中 *常量* 是 *右值*表达式， *字面量* 是 *左值*表达式 ；而 C++ 中统称为 *字面量* 。

其它编码的字符常量/字面量的具体内容参见下面的链接。

参见：
[C：字符常量](http://zh.cppreference.com/w/c/language/character_constant)、[C++：字符字面量](http://zh.cppreference.com/w/cpp/language/character_literal)

### 数组指代器不是指针常量

同样是受《谭C》等一批国内教科书的毒害，有不少人认为数组就是指针常量。但实际上数组的类型就是数组类型，只是使用时大多数情况下会隐式转换成其首元素指针的 *非左值* 。正因为这种转换的存在，所以我们才能像指针一般使用数组，又因为其结果是非左值，所以不可以被赋值。

但另一方面，在C语言中，函数参数列表中的数组声明，在对应的函数调用时其实际参数的值是一个指针。（可以说是C的一个黑点了）

详细的转换规则见下面的链接。

参见：
[C：数组到指针转换](http://zh.cppreference.com/w/c/language/conversion#.E6.95.B0.E7.BB.84.E5.88.B0.E6.8C.87.E9.92.88.E8.BD.AC.E6.8D.A2)、[C++：数组到指针转换](http://zh.cppreference.com/w/cpp/language/implicit_conversion#.E6.95.B0.E7.BB.84.E5.88.B0.E6.8C.87.E9.92.88.E8.BD.AC.E6.8D.A2)

### `static` 储存类指定符

之所以写这一条，是因为听说有驱动程序把以 `static` 修饰的对象定义在头文件里导致内存爆炸的传闻。这么看 `static` 确实有一些坑，无论是C语言还是C++，作为储存类指定符的 `static` 都具有多重语义，而且在不同情况下含义不尽相同。

简洁起见，这里不考虑与 `thread_local`（或者 `_Thread_local` ）组合的情况；标识符（C）和名称（C++）统称为名称。

首先要明确的是，储存类指定符都包含两层内涵，一是指定 **对象** 的 *储存期* ，一是指定 **名称** 的 *链接* 。这是两个层次的内涵，也是很多初学者比较模糊的。

一方面，被 `static` 修饰的对象拥有 *静态储存期* ，该对象生存期基本和整个程序一样长；另一方面，被 `static` 修饰的名称通常为 *内部链接* ，即该名称的只在当前的翻译单元可被引用；除非被 `static` 修饰的是一个局部变量，那么它（的名称）的链接为 *无链接* ，即该名称只能在它所在的作用域中被引用。

可以看出，`static` 确实可以让我们在头文件里定义函数或者对象而不引发重定义错误，因为包含一个头文件就是把整个头文件复制到源文件里，那么在每一个包含该头文件的源文件里都有一个被 `static` 修饰的对象/函数，它们虽然具有同样的名称，但由于所用是内部链接，所以它们指代的是（各自翻译单元的）不同实体，因而在内存受限的设备上大量包含这样的头文件就有可能导致内存爆炸。

还要注意的一点是，对于C，无论是全局还是块作用域中的静态对象，其初始化器必须为常量表达式，且初始化发生于主函数前。而对于C++，静态局部变量的可以不用常量表达式初始化，而且可能等到控制流首次经过其声明时才初始化。

（注1：对于C++，类中的 `static` 声明代表不绑定到类实例的 [静态成员](http://zh.cppreference.com/w/cpp/language/static) ）

（注2：C99后 `static` 还可能用于函数声明中的 [静态数组下标](http://zh.cppreference.com/w/c/language/array) ）

参考：
[C：存储类指定符](http://zh.cppreference.com/w/c/language/storage_duration)、[C++：存储类指定符](http://zh.cppreference.com/w/cpp/language/storage_duration)、[C：静态初始化器](http://zh.cppreference.com/w/c/language/constant_expression#.E9.9D.99.E6.80.81.E5.88.9D.E5.A7.8B.E5.8C.96.E5.99.A8)、[C++：静态初始化](http://zh.cppreference.com/w/cpp/language/initialization#.E9.9D.99.E6.80.81.E5.88.9D.E5.A7.8B.E5.8C.96)、[C++：静态局部变量](http://zh.cppreference.com/w/cpp/language/storage_duration#.E9.9D.99.E6.80.81.E5.B1.80.E9.83.A8.E5.8F.98.E9.87.8F)


### 某些整数运算的坑

懒得写了，见 @孙明琦 的 [整理一发C++整数运算的所有细节](https://zhuanlan.zhihu.com/p/26675068)

### `main` 函数的原型

著名语言律师 @幻の上帝 对此 [早有论述](https://github.com/FrankHB/pl-docs/blob/master/zh-CN/main-function.md)。这里只摘录一下主要结论：

> `void main()` 在 C 仍然可以是符合标准(conforming)的扩展；
> 在 C++ 中不返回 `int` 的 `main` 直接不符合标准。

参见 [C：主函数](http://zh.cppreference.com/w/c/language/main_function)、[C++：主函数](http://zh.cppreference.com/w/cpp/language/main_function)

### `volatile` 类型限定符

`volatile` 大概是被误解最多的 C/C++ 语言特性之一。

简而言之，`volatile` 只是代表 ***读副作用*** ，与什么 *多线程*、 *原子性* 以及 *memory barrier* 都没什么关系（尽管 [MSVC](https://docs.microsoft.com/zh-cn/cpp/cpp/volatile-cpp) 提供了额外的语义使之可以用于多线程编程，但这种特性不可移植，不推荐使用）。而 `volatile` 本来的意图主要是用于模拟映射于内存的硬件I/O，以及信号处理函数。

（注：[Java](https://docs.oracle.com/javase/tutorial/essential/concurrency/atomic.html) 里的 `volatile` 具有原子访问的语义。）

参见 [C：volatile 类型限定符](http://zh.cppreference.com/w/c/language/volatile)、[C++：cv 类型限定符](http://zh.cppreference.com/w/cpp/language/cv)、[MSDN：volatile](https://docs.microsoft.com/zh-cn/cpp/cpp/volatile-cpp)、[C：信号处理函数](http://zh.cppreference.com/w/c/program/signal#.E4.BF.A1.E5.8F.B7.E5.A4.84.E7.90.86.E5.87.BD.E6.95.B0)、[C++：如同规则](http://zh.cppreference.com/w/cpp/language/as_if)

-----

应该会有下一篇的，大概。
