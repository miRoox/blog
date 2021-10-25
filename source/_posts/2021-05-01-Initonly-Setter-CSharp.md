---
layout: post
title: "关于C#9中仅初始化的属性设置器"
date: 2021-05-01 20:46:12
categories: "代码编程"
tag: ["C#", ".NET", "编程", "元编程"]
---

C# 9 引入了[仅初始化的属性设置器](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/proposals/csharp-9.0/init)，这使我们可以定义一个只能在构造函数或者初始化设定项中进行设置的属性：

<!-- more -->

```csharp
public class Sample
{
    public string InitOnlyProperty { get; init; }
}

static void Main(string[] args)
{
    var sample = new Sample
    {
        InitOnlyProperty = "init",
    };
    //// 编译错误：只能在对象初始值设定项中或在实例构造函数或 "init" 访问器中的 "this" 或 "base" 上分配 init-only 属性或索引器 "Program.Sample.InitOnlyProperty"。
    // sample.InitOnlyProperty = "modified";
}
```

这既能保证属性的不可变性，又能避免出现需要定义具有大量参数的构造函数的情况。C# 9 还进一步地引入了[记录类型和 `with` 表达式](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/proposals/csharp-9.0/records)来简化不可变引用类型的构造。而这一语法糖的实现方式同样基于仅初始化的设置器。

然而，在低于 .NET 5 的目标框架下，我们没法直接使用这一语言特性。哪怕指定了 C# 9 作为编译语言版本，依然会产生如下编译错误：

> 预定义类型“System.Runtime.CompilerServices.IsExternalInit”未定义或导入

当然，基于缺啥补啥的原则，我们直接看 .NET 的源码中[`System.Runtime.CompilerServices.IsExternalInit`](https://github.com/dotnet/runtime/blob/d273780b850cfd35a2c084d60d5e3a193268b7e7/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/IsExternalInit.cs)的部分，加上编译条件，照抄一份到我们的项目中：

```csharp
#if NET5_0_OR_GREATER

#else
using System.ComponentModel;

namespace System.Runtime.CompilerServices
{
    /// <summary>
    /// Reserved to be used by the compiler for tracking metadata. This class should not be used by developers in source code.
    /// </summary>
    [EditorBrowsable(EditorBrowsableState.Never)]
    public sealed class IsExternalInit { }
}
#endif
```

就可以解决了。

不过，我们本着知其然也要知其所以然的学习态度，不妨试试（用ildasm）对前面的代码反编译一下：

```csharp
.class auto ansi nested public beforefieldinit Sample
        extends [System.Runtime]System.Object
{
  .field private initonly string '<InitOnlyProperty>k__BackingField'
  .custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = ( 01 00 00 00 ) 
  .custom instance void [System.Runtime]System.Diagnostics.DebuggerBrowsableAttribute::.ctor(valuetype [System.Runtime]System.Diagnostics.DebuggerBrowsableState) = ( 01 00 00 00 00 00 00 00 ) 
  .method public hidebysig specialname 
          instance string  get_InitOnlyProperty() cil managed
  {
    .custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = ( 01 00 00 00 ) 
    // 代码大小       7 (0x7)
    .maxstack  8
    IL_0000:  ldarg.0
    IL_0001:  ldfld      string InitOnlyProperty.Program/Sample::'<InitOnlyProperty>k__BackingField'
    IL_0006:  ret
  } // end of method Sample::get_InitOnlyProperty

  .method public hidebysig specialname 
          instance void modreq([System.Runtime]System.Runtime.CompilerServices.IsExternalInit) 
          set_InitOnlyProperty(string 'value') cil managed
  {
    .custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = ( 01 00 00 00 ) 
    // 代码大小       8 (0x8)
    .maxstack  8
    IL_0000:  ldarg.0
    IL_0001:  ldarg.1
    IL_0002:  stfld      string InitOnlyProperty.Program/Sample::'<InitOnlyProperty>k__BackingField'
    IL_0007:  ret
  } // end of method Sample::set_InitOnlyProperty

  .method public hidebysig specialname rtspecialname 
          instance void  .ctor() cil managed
  {
    // 代码大小       8 (0x8)
    .maxstack  8
    IL_0000:  ldarg.0
    IL_0001:  call       instance void [System.Runtime]System.Object::.ctor()
    IL_0006:  nop
    IL_0007:  ret
  } // end of method Sample::.ctor

  .property instance string InitOnlyProperty()
  {
    .get instance string InitOnlyProperty.Program/Sample::get_InitOnlyProperty()
    .set instance void modreq([System.Runtime]System.Runtime.CompilerServices.IsExternalInit) InitOnlyProperty.Program/Sample::set_InitOnlyProperty(string)
  } // end of property Sample::InitOnlyProperty
} // end of class Sample
```

可以看到 `InitOnlyProperty` 的设置访问器 `set_InitOnlyProperty(string)` 被 `modreq([System.Runtime]System.Runtime.CompilerServices.IsExternalInit)` 所修饰，那么缺少所需的自定义修饰符类型 `System.Runtime.CompilerServices.IsExternalInit` 自然会导致编译无法通过。

事实上，在规范建议的设计文档里，包含 [Modreqs 与属性](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/proposals/csharp-9.0/init#modreqs-vs-attributes)一节，阐述了 `init` 属性访问器的生成策略中为何选取了必需修饰符（modreq）而不是属性作为元数据进行标记。简而言之，由于 modreq 的必需性，无法理解 `init` 的编译器（如较早版本的编译器）应当会直接忽略对应的对应的属性设置访问器，从而可以避免将属性当成是可写的。

尽管如此，这种保护也不是完全安全的。文档中指出了三种不会保护的情况：

1. 对（公共）成员的反射
2. 使用 `dynamic`
3. 不识别 modreq 的编译器

文档后面还讨论了其它几种设计和它们的利弊，这里就不多加赘述了。

不过，借助这一生成策略，我们也可以自己编写函数，通过反射来确认一个属性是否是仅初始化的：

```csharp
using System.Linq;
using System.Reflection;

public static class PropertyExtensions
{
    /// <summary>
    /// 检查属性是否是仅初始化的。
    /// </summary>
    /// <param name="property">要检查的属性元信息。</param>
    /// <returns>若该属性的设置访问器是仅初始化的，则为<see langword="true"/>；否则，为<see langword="false"/>。</returns>
    public static bool IsInitOnly(this PropertyInfo property)
    {
        MethodInfo? setMethod = property.SetMethod;
        if (setMethod == null)
            return false;
        return setMethod.ReturnParameter
            .GetRequiredCustomModifiers()
            .Contains(typeof(System.Runtime.CompilerServices.IsExternalInit));
    }
}
```
