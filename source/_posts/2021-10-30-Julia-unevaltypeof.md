---
layout: post
title: "在Julia中实现一个简单的不求值表达式类型获取"
date: 2021-10-31 23:58:08
categories: "代码编程"
tag: ["Julia", "元编程"]
---

在Julia中，[`typeof`](https://docs.juliacn.com/latest/base/base/#Core.typeof) 可以获取对象类型，但和C++中的 [`decltype`](https://zh.cppreference.com/w/cpp/language/decltype) 不同，它获取的是对象的运行时类型，需要对表达式完成求值才能得到。然而有时我们可能希望不求值就得到表达式的类型，这在Julia中并没有**直接**提供内置方法来实现。

<!-- more -->

但是，我们注意到 [`Tests.@inferred`](https://docs.juliacn.com/latest/stdlib/Test/#Test.@inferred) 可以对推导出的类型和实际的运行时类型进行比较。显然，Julia其实提供了相应的方法获取推导的类型的。阅读[其代码](https://github.com/JuliaLang/julia/blob/master/stdlib/Test/src/Test.jl#L1601)不难发现 `Base.return_types` 方法是推导类型的关键所在。这一方法在文档中并没有具体介绍，仅在手册中介绍方法分派的[输出类型计算](https://docs.juliacn.com/latest/manual/methods/#%E8%BE%93%E5%87%BA%E7%B1%BB%E5%9E%8B%E8%AE%A1%E7%AE%97)时作为一个反面例子出现。根据文档中的简单用例以及 `@inferred` 中的实现推断，可以知道它的签名类似

```julia
Base.return_types(f, types::Tuple{Vararg{DataType}})
```

即根据函数 `f` 以及给定参数类型的元组 `types` 来得到可能的返回值类型。注意这个函数会返回一个类型数组，分别对应于**可能**匹配到方法的不同实例的返回类型。例如

```julia
> f(x::Int) = x^2
> f(x::Integer) = x
> Base.return_types(f, (Int,))
1-element Vector{Any}:
 Int64
> Base.return_types(f, (Integer,))
2-element Vector{Any}:
 Int64
 Integer
```

不过 `Base.return_types` 的调用方式显然不太直观，毕竟Julia不能直接改变方法调用的求值顺序。但我们可以通过宏来对其“转译”一下，将普通的函数调用表达式转换成满足参数格式要求的结构。

一个粗浅的想法是直接照搬 `@inferred` 的实现，但由于 `@inferred` 的应用目标相对较窄，只处理了恰好是单个函数调用的情况，而对于内部的参数依然还是会进行求值。如果要进行推广，最简单的方式是递归地插入获取类型的代码。然而 `Base.return_types` 返回值是一个数组，需要将结果进行合并，则还要 [`typejoin`](https://docs.juliacn.com/latest/base/base/#Base.typejoin) 和 [`reduce`](https://docs.juliacn.com/latest/base/collections/#Base.reduce-Tuple{Any,%20Any}) 完成类型的合并，使调用即类似于

```julia
reduce(typejoin, Base.return_types(f, types))
```

而对于非函数调用的叶子（参数）节点，通常的 `typeof` 固然可以，但是考虑到存在类似 [`parse`](https://docs.juliacn.com/latest/base/numbers/#Base.parse) 的类型选择器，`typeof` 为每个类型都返回 [`DataType`](https://docs.juliacn.com/latest/manual/types/#man-declared-types) 就显得有些模糊。因此，不妨自己定义一个更精确的 `typeof`：

```julia
exacttypeof(::T) where {T} = T
exacttypeof(::Type{T}) where {T} = Type{T}
```

在此基础上，加上简单的封装和宏展开基本就大功告成了

```julia
function uneval_typeof_impl(expr)
    if expr isa Expr
        if expr.head == :call
            eargs = map(uneval_typeof_impl, expr.args[2:end])
            :(reduce(typejoin, Base.return_types($(esc(expr.args[1])), tuple($(eargs...)))))
        else
            error("invalid syntax: @uneval_typeof must be used with a expression.")
        end
    else # leaf
        :(exacttypeof($(esc(expr))))
    end
end
macro uneval_typeof(expr)
    uneval_typeof_impl(macroexpand(@__MODULE__, expr))
end
```

简单试一下：

```julia
> @uneval_typeof 1+2*3
Int64
> @uneval_typeof 1//2+3.0*0x45
Float64
> @uneval_typeof parse(Int, "123")
Int64
> function f(x)
  println(x)
  2x
  end
> x=5;
> @uneval_typeof f(x)
Int64
> @uneval_typeof f(x+f(1//2))
Rational{Int64}
```

不过这个方法只适用于简单的函数调用表达式，对于包含表达式块或者生成器等不能简单表示为单个函数调用组合的情况则会出错。
而且，`Base.return_types` 也不适用于内置的函数（例如，`===`、`Core.sizeof`等），因此也无法处理包含这些函数的表达式。
