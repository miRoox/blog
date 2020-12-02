---
layout: post
title: "Julia包开发基本指南"
date: 2020-11-30 23:58:23
categories: "代码编程"
tag: ["Julia", "编程"]
---

近期试着做了一些 Julia 的程序包，并注册到了官方的 General Registry 上。不得不说，Julia 程序包功能完善，而开发的流程也不复杂。这里简单记录一下，以飨后人。

<!--more-->

### 包的基本结构

在Juia中，一个完整的程序包除了有项目本身的程序之外，往往还包含测试、文档等部分。因此，在开始讲程序包开发之前，先看一下一个典型程序包的基本结构：

```
MyPackage
|-- docs
| |-- src
| | |-- index.md
| | `-- ...
| |-- Manifest.toml
| |-- Project.toml
| `-- make.jl
|-- src
| |-- MyPackage.jl
| `-- ...
|-- test
| |-- Manifest.toml
| |-- Project.toml
| |-- runtests.jl
| `-- ...
|-- LICENSE
|-- Project.toml
|-- README.md
`-- ... 
```

可以看到，这里有三个文件夹 `docs`、`src`、`test` 分别对应文档、项目源码、测试代码。根据用途的不同，有时也会包含存放示例的 `example`、存放模板的 `templates` 等文件夹。

这里，最不可或缺的就是项目源码 `src/MyPackage.jl`，当我们使用 `using MyPackage` 或者 `import MyPackage` 时，加载的就是这个文件。当然，同样不可或缺的还有项目文件 `Project.toml`，它包含了项目的名称、UUID、作者、依赖等元数据。通常，一个项目还会包含一个 `Manifest.toml` 的清单文件，用来描述完整的依赖关系图、每个包的确切版本以及项目使用的库。但对于一个需要发布的包而言，我们通常会在版本控制系统中将其忽略（如添加在 `.gitignore` 中），因为我们一般不会希望完全固定一个包的依赖版本，而是指示一个兼容的范围（这可以在 `Project.toml` 中通过 `[compat]` 指定）来允许更自由的安装依赖。

此外，代码测试也非常重要，是否有良好的代码测试显著影响着代码的质量，因而 Julia 在[标准库](https://docs.juliacn.com/latest/stdlib/Test/)中内置了对代码测试的支持，在包管理器下执行 `test` 则会运行 `test/runtests.jl`。值得注意的是，在 `test` 目录下，我们还有一个 `Project.toml` 和一个 `Manifest.toml`，这意味着，`test` 其实是另一个项目，清单文件的存在，保证了测试所处环境的一致性，从而更能保证测试的可复现性。不过这个机制在 Julia 1.2 之前是通过 `[extras]` 和 `[targets]` 实现的，因此如果要兼容早期版本，需要使用之前的机制，见 [Test-specific dependencies in Julia 1.0 and 1.1](https://julialang.github.io/Pkg.jl/v1/creating-packages/#Test-specific-dependencies-in-Julia-1.0-and-1.1)。

另一个重要的内容则是文档，完善的文档让程序包更易理解和使用。除了将内置的 [docstring](https://docs.juliacn.com/latest/manual/documentation/) 作为文档之外，我们也可能希望发布的程序包附带一份内容更完善的在线部署文档。`docs` 中的内容就是为了实现这一目的而准备的，它依托 [Documenter.jl](https://juliadocs.github.io/Documenter.jl/stable/) 进行文档生成与发布部署。同样，文档目录也是独立的项目，使整个文档生成工作在独立的环境中，不干扰源项目本身。

### 包开发

在包开发的过程中，首先要进行的是包的命名。需要注意的是，待注册的包应当遵循 [Julia 包命名方针](https://julialang.github.io/Pkg.jl/v1/creating-packages/#Package-naming-guidelines)：

1. 尽量避免缩写，除非是广为人知的缩写；
2. 避免使用 `Ju` 开头；
3. 主要功能是关于特定类型的话，应该使用复数；
4. 使用清晰的命名，哪怕这会让名字看起来长了点；
5. 用于某个领域的不同实现方式之一的包，可能适合不太系统的名字；
6. 包装了外部库或程序的包应该命名为对应的库或程序。

在前一节，我们看到，Julia 包的结构还是有些复杂的，但格式基本相对固定。为了避免在开发初期被繁琐的配置困扰，社区已经有大佬开发了 [PkgTemplates.jl](https://invenia.github.io/PkgTemplates.jl/stable/)，提供了自动化和可定制的包生成机制。下面是一个模板配置的例子：

```julia
Template(
    julia=v"1.2.0",
    plugins=[
        Tests(; project=true),
        Git(; ssh=true),
        CompatHelper(),
        TagBot(),
        GitHubActions(),
        Codecov(),
        Documenter{GitHubActions}(),
    ]
)
```

可以看到除了前一节提到的部分，还有基于 [GitHub Actions](https://github.com/features/actions) 的持续集成，[Codecov](https://codecov.io/) 覆盖率监测、[CompatHelper](https://github.com/JuliaRegistries/CompatHelper.jl)、[TagBot](https://github.com/JuliaRegistries/TagBot) 等一系列附加工具。详情还是去看 PkgTemplates.jl 的文档吧。

另外，Documenter 在部署文档时，需要在托管环境中配置 SSH 部署密钥，而为了生成密钥，还需要 [DocumenterTools.jl](https://github.com/JuliaDocs/DocumenterTools.jl)，然后分别将公钥和私钥放在 GitHub 具有仓库写权限的 deploy key 和名为 `DOCUMENTER_KEY` 的环境变量中。这部分详见 [Authentication: SSH Deploy Keys](https://juliadocs.github.io/Documenter.jl/stable/man/hosting/#travis-ssh)。

### 包注册

包注册其实非常简单。不过注册前还需要检查一下注册需要满足的条件，包括是否有开源许可协议，是否所有依赖都有有限区间的 `[compat]` 入口，以及前面提过的命名要求等。这些条件详见 [Registering a package in General](https://github.com/JuliaRegistries/General#registering-a-package-in-general)。

至于注册，只需要在更新了项目文件中的 `version` 后，在对应的提交下评论

```
@JuliaRegistrator register
```

即可发出注册请求，它会自动在 [JuliaRegistries/General](https://github.com/JuliaRegistries/General) 中创建一个对应的 pull request。对于新注册的包，会公示三天，如果没有问题，则会自动合并；对于已存在的包的新版本，等待5分钟就会自动合并。
