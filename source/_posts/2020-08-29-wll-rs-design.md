---
layout: post
title: "【新坑】wll-rs: 用于 Rust 的 Wolfram LibraryLink 接口"
date: 2020-08-29 23:40:21
categories: "代码编程"
tag: ["Rust", "Wolfram", "LibraryLink", "编程", "元编程"]
---

苦于  Wolfram [LibraryLink](http://reference.wolfram.com/language/LibraryLink/tutorial/Overview.html) 原本的接口使用起来过于繁琐，又受 [wll-interface](https://github.com/njpipeorgan/wll-interface) 的启发，近期开了一个新坑，尝试为 Wolfram LibraryLink 封装一套 Rust 的接口 [wll-rs](https://crates.io/crates/wll)。

> 阅读本文需要一定 Rust 以及 Wolfram LibraryLink 的基础。

<!--more-->

### 目标和基本结构

既然用上 Rust 这种高级抽象的语言，自然不可能只是做一些简单的绑定。至少要能做到两件事：

1. 提供安全便利的类型和接口封装
2. 自动生成满足 LibraryLink 规范的导出函数格式

为了让不熟悉 Wolfram LibraryLink 的读者也能了解到它使用起来有多麻烦，下面截一段官方示例中的源码：

```c
// demo.c

/* Include required header */
#include "WolframLibrary.h"

/* Return the version of Library Link */
DLLEXPORT mint WolframLibrary_getVersion( ) {
    return WolframLibraryVersion;
}

/* Initialize Library */
DLLEXPORT int WolframLibrary_initialize( WolframLibraryData libData) {
    return LIBRARY_NO_ERROR;
}

/* Uninitialize Library */
DLLEXPORT void WolframLibrary_uninitialize( WolframLibraryData libData) {
    return;
}

/* Adds one to the input, returning the result  */
DLLEXPORT int demo_I_I( WolframLibraryData libData, mint Argc, MArgument *Args, MArgument Res) {
    mint I0;
    mint I1;
    I0 = MArgument_getInteger(Args[0]);
    I1 = I0 + 1;
    MArgument_setInteger(Res, I1);
    return LIBRARY_NO_ERROR;
}
```

除了加载库和卸载库时所需要的初始化和反初始化函数外，函数本身的传参形式也非常奇妙，[`LibraryFunction`](http://reference.wolfram.com/language/ref/LibraryFunction.html) 的实参通过 `MArgument` 的指针（数组）传入，实际的返回结果也在参数列表中，而函数所返回的 `int` 值则表示一个错误码。

作为目标，我们期望在 wll-rs 中实现的等效形式：

```rust
// demo.rs
use wll::Result;

#[wll::setup]
fn init() {}

#[wll::teardown]
fn uninit() {}

#[wll::export(demo_I_I)]
fn add_one(n: isize) -> Result<isize> {
    Ok(n + 1)
}
```

即通过 `wll::Result` 表示返回值和结果状态，通过类属性宏标记函数来自动生成满足 LibraryLink 规范的导出函数。

有了基本的目标，那么大致的框架也可以确定了：

{% asset_img structure.png 大致框架 %}

* [wll-sys](https://crates.io/crates/wll-sys) 底层接口绑定
* [wll-macros](https://crates.io/crates/wll-macros) 提供类属性过程宏（受Rust本身的限制，过程宏必须由单独的包提供）
* [wll](https://crates.io/crates/wll) 整合封装给用户使用的包

### 底层接口绑定

底层接口绑定是一件很无聊的事，不过好在我们有 [`bindgen`](https://rust-lang.github.io/rust-bindgen/introduction.html) 可以从头文件中生成对应的 Rust 文件，大大减轻了我们的工作量。具体操作流程就不再赘述了，直接看官方的文档教程即可。

稍微值得一提的是，`bindgen` 生成的文件可能不能满足我们对类型的预期，比如头文件中的宏定义和匿名枚举项，本身不具有类型描述。例如来自宏定义的 `True` 的类型并不会是 `mbool`。为了能手动转换复写它们，这里将 `bindgen` 生成的代码包含在一个 `mod` 中，再 `pub use` 导出全部符号，这时，在外部复写也不会导致符号重名的错误了。

```rust
// sys/src/lib.rs 节选

mod bindings {
    include!(concat!(env!("OUT_DIR"), "/bindings.rs"));
}

pub use bindings::*;

pub const True: mbool = bindings::True as mbool;
pub const False: mbool = bindings::False as mbool;
// ……
```

另外 Wolfram LibraryLink 的接口设计某种意义上是不需要链接的，几乎所有类型都是指针，用来回调的函数也是 `WolframLibraryData` 的成员函数指针。事实上，在目前的测试中，哪怕没有链接到 `WolframRTL`，编译得到的 C ABI 动态库（`cdylib`）只要满足 LibraryLink 的接口规范，一样能正常使用。

### 参数类型适配

底层接口绑定完成后，就可以开始进行用户层参数的适配了。

首先考虑错误处理。这里将错误码封装成更具 Rust 风格的 `Result` 和 `Error` 对象，以及和错误码之间的相互转换。而为了更友好地向用户表征错误类型，也提供了 `ErrorKind` 枚举类型，以及其到 `Error` 类型的转换（见 [`errors.rs`](https://github.com/miRoox/wll-rs/blob/master/src/errors.rs)）。

在 LibraryLink 的接口中，所有类型的参数都通过 `MArgument` 来传递，这是一个（untagged）联合体，包含了 LibraryLink 中的各种类型。而我们的用户既不应该直接处理 `MArgument`，也通常不用直接面对 LibraryLink 的底层类型，而是使用封装后的 Rust 类型。

{% asset_img types.png 类型关系 %}

如图所示，为了支持函数的输入输出，需要有“Rust 类型 - LibraryLink 类型 - `MArgument`”的双向转换。这里，LibraryLink 类型是可枚举的，因此，它和 `MArgument` 之间的转换也是可枚举的，同时，从设计上看，这部分转换也是无需暴露给用户的。而对于可能的 Rust 类型，为了给予用户可扩展性，允许用户自定义 Rust 类型和 LibraryLink 类型之间的转换。并且，一旦用户自定义了 Rust 类型和 LibraryLink 类型之间的转换，那么对应的 Rust 类型和 `MArgument` 之间的转换也应该**自动**被实现。而为了保证最终转换的唯一性，一个 Rust 类型至多只能对应于一个 LibraryLink 类型（反之则不然）。

小结一下需求：

1. LibraryLink 类型和 `MArgument` 之间的转换预先固定且不暴露给用户；
2. Rust 类型和 LibraryLink 类型之间的转换可以由用户自行扩展，但一个 Rust 类型至多只能对应于一个 LibraryLink 类型；
3. Rust 类型和 LibraryLink 类型之间的转换 → Rust 类型和 `MArgument` 之间的转换。

一个非常平凡的想法是将所有 LibraryLink 类型包到一个 `enum` 中，毕竟 Rust 的 `enum` 也就是一种 tagged union，这样也很容易满足一个 Rust 类型至多只对应于一个 LibraryLink 类型。但问题在于这使 `MArgument` 到 LibraryLink 类型，以及更进一步的，从 `MArgument` 到 Rust 类型的转换变得困难了起来。虽然 `enum` 带有标签，但从编译时蕴含的信息上看，它和 `union` 一样，都抹平了不同类型之间的差异。当从它向 `MArgument` 转换时，由于它具有的运行时信息更丰富，因此可以实现。然而，反之则不然，如果不向这一过程注入更多类型信息的话，那么实现起来完全无从下手。可是，如果不使用 `enum` 的话，这些信息本身就存在，再额外注入不仅画蛇添足，似乎也不太符合分离耦合的思想。

在 Rust 中，我们有两种逻辑委派方法，其中一种是 `enum`，而另一种是 `trait` 对象[^1]。`enum` 是封闭类型，看上去更符合我们这里的情况，但由于上述原因，并不适合使用；而 `trait` 对象是开放类型，似乎也没法用在这里。当然，我们这里不需要动态性，所以只需要 `trait` 而非 `trait` 对象，但这也为我们提供了另一种可能的思路。

事实上，*sealed trait* 模式[^2]让我们能将 `trait` 的实现限制在我们的模块内而无法被外部实现。简而言之，就是让我们的公开 `trait` 将一个不公开的占位 `trait` 作为父 `trait`，从而使外部实现无法满足约束，从而封闭了可能的类型。

```rust
// adaptor.rs 节选

mod private {
    pub trait Sealed {}
}

pub trait MType: private::Sealed + Sized {}

macro_rules! impl_mtypes {
    ($($t:ty),+) => {
        $(
            impl private::Sealed for $t {}
            impl MType for $t {}
        )+
    };
}

impl_mtypes!(
    mbool,
    mint,
    mreal,
    mcomplex,
    // ……
);
```

在这里，我们将所有的 LibraryLink 类型都实现为 `MType trait`。这只是一个开端，我们还需要提供它们的适配关系接口。

```rust
pub trait InputAdaptor: Sized {
    type Input: MType;

    fn mtype_try_from(input: Self::Input) -> Result<Self>;
}

pub trait OutputAdaptor: Sized {
    type Output: MType;

    fn try_into_mtype(self) -> Result<Self::Output>;
}
```

考虑到一个 Rust 类型至多只对应于一个 LibraryLink 类型。将对应的 LibraryLink 类型作为适配 `trait` 的关联类型显然是比较合适的。而为了自动实现 Rust 类型和 `MArgument` 之间的转换，可以采用所谓的 *blanket implementations*[^3] 来传递这种转换关系。然而，不同 LibraryLink 类型对应 `MArgument` 的字段不同，需要 *ad-hoc* 实现，而同一个 `trait` 的 *blanket implementations* 不能区分具有不同关联类型的同种 `trait`。因此 `MArgument` 的转换 `trait` 必须是具有泛型类型参数的 `trait`，通过完全特化的实现来满足这种对应关系。

```rust
#[doc(hidden)]
pub trait MArgumentGetter<T: MType>: Sized {
    fn try_get_arg(arg: MArgument) -> Result<Self>;
}

#[doc(hidden)]
pub trait MArgumentSetter<T: MTypeOrVoid>: Sized {
    fn try_set_arg(self, arg: &MArgument) -> Result<()>;
}

impl<T: InputAdaptor<Input = mbool>> MArgumentGetter<mbool> for T {
    #[inline]
    fn try_get_arg(arg: MArgument) -> Result<Self> {
        unsafe {
            let ptr = arg.boolean;
            if ptr.is_null() {
                return Err(Error::from(ErrorKind::TypeError));
            }
            T::mtype_try_from(std::ptr::read(ptr))
        }
    }
}
impl<T: OutputAdaptor<Output = mbool>> MArgumentSetter<mbool> for T {
    #[inline]
    fn try_set_arg(self, arg: &MArgument) -> Result<()> {
        unsafe {
            let ptr = arg.boolean;
            if ptr.is_null() {
                return Err(Error::from(ErrorKind::TypeError));
            }
            std::ptr::write(ptr, self.try_into_mtype()?);
        }
        Ok(())
    }
}
// ……
```

`#[doc(hidden)]` 表明这部分不应被用户直接使用。实际的实现代码为了避免繁琐易错的复制粘贴，是通过宏完成的（见 [`adaptor.rs`](https://github.com/miRoox/wll-rs/blob/master/src/adaptor.rs)）。

最终的类型适配关系如图所示：

{% asset_img adaptor.png 类型适配 %}

### 访问 `WolframLibraryData`

由于 LibraryLink 的所有函数都是回调式的，各种函数的调用都免不了要访问当前的 `WolframLibraryData`。然而我们显然是不会希望各个函数都要带着一个 `WolframLibraryData` 的参数到处跑的，因此，一种直观的方式是使用一个全局静态对象，并在适时处设置它以实现别的函数对它的访问。不过这部分的设计尚未完全确定，在此也不多费口舌了。

### 类属性过程宏

为了便利地从 Rust 函数中创建满足 LibraryLink 的接口规范的导出函数，可以通过类属性过程宏来解决这一麻烦。

这部分实现在 [wll-macros](https://crates.io/crates/wll-macros)，并在 wll 设置了 `macros` feature 时会重新导出其中的宏（似乎由于 Rust 本身的限制，过程宏的重导出必须这么做）。

其中

* `setup` 会将它标记的函数放到 `WolframLibrary_initialize` 中调用，并补上 `WolframLibrary_getVersion`；
* `teardown` 会将它标记的函数放到 `WolframLibrary_uninitialize` 中调用；
* `export` 有两种形式：
  * 当它不包含参数时，会给原本的函数名前面加上 `wll_` 并按 LibraryLink 的接口规范导出函数；
  * 当它包含参数时，则按参数名作为导出函数的名称，同样按 LibraryLink 的接口规范导出。

过程宏在官方资料中描述不多，但本身又非常繁琐，因此在这里就不多赘述了，推荐观看[视频](https://www.youtube.com/watch?v=geovSK3wMB8)进行学习。

这里给出前述 `demo.rs` 进行宏展开后的结果：

```rust
// cargo expand demo.rs
use wll::Result;
#[inline(always)]
fn init() {}
#[no_mangle]
pub extern "C" fn WolframLibrary_initialize(
    data: ::wll::sys::WolframLibraryData,
) -> ::wll::sys::errcode_t {
    if let ::std::result::Result::Err(e) = ::wll::global::initialize_lib_data(data) {
        e.to_raw_error()
    } else {
        init();
        ::wll::sys::LIBRARY_NO_ERROR
    }
}
#[no_mangle]
pub extern "C" fn WolframLibrary_getVersion() -> ::wll::sys::mint {
    ::wll::sys::WolframLibraryVersion
}
#[inline(always)]
fn uninit() {}
#[no_mangle]
pub extern "C" fn WolframLibrary_uninitialize(_: ::wll::sys::WolframLibraryData) {
    uninit();
}
#[inline]
fn add_one(n: isize) -> Result<isize> {
    Ok(n + 1)
}
#[no_mangle]
pub unsafe extern "C" fn demo_I_I(
    lib_data: ::wll::sys::WolframLibraryData,
    argc: ::wll::sys::mint,
    args: *const ::wll::sys::MArgument,
    res: ::wll::sys::MArgument,
) -> ::wll::sys::errcode_t {
    use ::wll::adaptor::{MArgumentGetter, MArgumentSetter};
    let _lib_data = ::wll::global::LibDataLocalizer::new(lib_data);
    if argc != 1 {
        return ::wll::sys::LIBRARY_TYPE_ERROR;
    }
    let arg0 = match <isize>::try_get_arg(args.add(0usize).read()) {
        ::std::result::Result::Ok(val) => val,
        ::std::result::Result::Err(err) => return err.to_raw_error(),
    };
    let ret = match add_one(arg0) {
        ::std::result::Result::Ok(val) => val,
        ::std::result::Result::Err(err) => return err.to_raw_error(),
    };
    match ret.try_set_arg(&res) {
        ::std::result::Result::Ok(()) => ::wll::sys::LIBRARY_NO_ERROR,
        ::std::result::Result::Err(err) => err.to_raw_error(),
    }
}
```

### 总结

文章简单介绍了一下 wll 的基本设计和目前的进展。通过这个项目我也熟悉了Rust 的 bindgen、过程宏以及 `trait` 的各种高级用法。顺便 LibraryLink 的接口规范虽然繁琐，但也不失为一种具有灵活性和强兼容性的接口设计方案。不过 wll 还处于相当早期的开放阶段，虽然提供了简单的 `Complex<T>` 复数类型，但功能并不完整。而像 `MTensor`, `MNumericArray` 等类型对应的 Rust 高级类型和适配都尚未开始，开发完善的路途依旧漫长。

---

[^1]: [Enum or Trait Object](https://www.possiblerust.com/guide/enum-or-trait-object)
[^2]: [Rust API Guidelines: C-SEALED](https://rust-lang.github.io/api-guidelines/future-proofing.html#sealed-traits-protect-against-downstream-implementations-c-sealed)
[^3]: [Traits: Defining Shared Behavior](https://doc.rust-lang.org/book/ch10-02-traits.html)
