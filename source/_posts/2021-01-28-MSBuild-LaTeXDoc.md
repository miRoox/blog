---
layout: post
title: "在MSBuild中构建LaTeX文档"
date: 2021-01-28 20:12:12
categories: "代码编程"
tag: ["MSBuild", "LaTeX", "Visual Studio", "编程"]
---

众所周知，LaTeX 便于实现专业级的排版效果，而且内容与样式分离的设计也使文档格式易于调整修改；同时，其源文件作为一种纯文本格式的文件，对于 git 这类版本控制系统也更为友好，利于开发过程中的协作工作。因此，LaTeX 相比 Word 更适合用于制作软件的用户手册。

<!-- more -->

Visual Studio 本身当然没有提供 LaTeX 的构建工具，但作为其构建系统的 MSBuild 提供了自定义目标和任务的方式。而我们在编写 LaTeX 文档时，也常常会使用 LaTeX 自己的构建工具（如：latexmk、Arara）。方便起见，我们直接用 [Exec 任务](https://docs.microsoft.com/zh-cn/visualstudio/msbuild/exec-task)调用 latexmk 构建 LaTeX 文档，已避免处理交叉引用等问题面临的多次编译排版的麻烦。

这里就略过 LaTeX 文档本身如何编写了，只讲 MSBuild 的配置。

首先，在文本编辑器下打开项目文件，通过属性设置好文档的目录和文档的文件名：

```xml
<PropertyGroup>
  <ManualFile>manual.pdf</ManualFile>
  <ManualDir>$(SolutionDir)doc/manual/</ManualDir>
</PropertyGroup>
```

这里，我们要生成的手册文档所在的路径是相对于解决方案路径的 `doc/manual`，而排版输出的 PDF 文档其文件名是 `manual.pdf`。

然后添加构建文档的目标：

```xml
<Target Name="BuildManual" AfterTargets="PostBuildEvent">
  <Exec Command="latexmk" WorkingDirectory="$(ManualDir)" />
  <Copy SourceFiles="$(ManualDir)$(ManualFile)" DestinationFolder="$(OutDir)" />
</Target>
<Target Name="PublishManual" AfterTargets="Publish">
  <Copy SourceFiles="$(ManualDir)$(ManualFile)" DestinationFolder="$(PublishDir)" />
</Target>
```

需要注意的是，latexmk 想要正常工作的话，要将工作目录和 LaTeX 源文件设置为同一个，尤其是在设置了 `latexmkrc` 来调整 latexmk 的行为的情况下。

另外，除了在构建时需要将输出的 PDF 文档复制到软件的输出目录下之外，不要忘记发布时同样需要将其复制到发布目录下。

然而，如果设置了多种 `TargetFrameworks` 时，上面这种组织目标的方式可能就不太合适，因为构建时几种目标框架会同时进行构建，很可能导致 latexmk 在同一时间段调用多次，而其所需的文件资源互相抢占，最终构建失败。当然，这样的问题总有前人踩过类似的坑，比如 SO 上的 [How to make an MSBuild Target that only runs once instead of once, before Targets that run once per framework in the TargetFrameworks tag?](https://stackoverflow.com/questions/46675782/how-to-make-an-msbuild-target-that-only-runs-once-instead-of-once-before-target)，告诉我们可以使用 `BeforeTargets="DispatchToInnerBuilds"` 在进入目标框架构建之前执行目标，于是我们的文档构建-输出-发布可以改写成：

```xml
<Target Name="BuildManual" BeforeTargets="DispatchToInnerBuilds">
  <Exec Command="latexmk" WorkingDirectory="$(ManualSource)" />
</Target>
<Target Name="CopyManual" DependsOnTargets="BuildManual" AfterTargets="PostBuildEvent">
  <Copy SourceFiles="$(ManualSource)$(ManualFile)" DestinationFolder="$(OutDir)" />
</Target>
<Target Name="PublishManual" DependsOnTargets="BuildManual" AfterTargets="Publish">
  <Copy SourceFiles="$(ManualSource)$(ManualFile)" DestinationFolder="$(PublishDir)" />
</Target>
```

最后，为了方便重新构建，也不要忘记在清理目标时同时清理 LaTeX 文档：

```xml
<Target Name="CleanManual" AfterTargets="Clean">
  <Exec Command="latexmk -c" WorkingDirectory="$(ManualDir)" />
  <Delete Files="$(OutDir)$(ManualFile)" />
</Target>
```
