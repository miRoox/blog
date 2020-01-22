---
layout: post
title: "为什么我们需要术语——兼谈科普的危害性"
date: 2019-11-05 21:03:42
tag: ["杂谈", "科普"]
---

写下这篇文章的起源是在知乎上看到的一个回答[^1]：

> 很简单，就是硬抬杠。
> 
> 举个例子，我说偶数跟正整数一样多，你就说怎么可能，正整数包含奇数和偶数，所以肯定正整数多。
> 
> 我解释说偶数跟正整数存在一个一一映射，并且都含有无穷多元素，所以一样多。你就说我听不懂什么一一映射，我只知道我是你的两倍，所以肯定比你多。
> 
> 那我解释，1对应2，2对应4，3对应6，一直这样下去，每个正整数都对应一个偶数。他就是不同意，说你说话就在放屁，我给你一百块，你给我两百块，一直这样我们看看最后谁的钱多？
> 
> 我说这在有限的情况下是对的，但是无穷的情况下就不一定了。你就说无穷不就是特别大的数嘛，那我大一你倍不是大你更多？
> 
> 我说wdnmd吧，你就说你怎么骂人呢？

在这个回答里，作者似乎把对于无法将无穷集合的等势理解成“一样多”的普通人思维当作抬杠。但这件事就真的只是抬杠这么肤浅吗？

<!--more-->

需要明确的是，“一样多”是自然语言的提法，不是一个严格的数学术语。基于基数的比较方式可以在有限的时候和我们平时说的一样多是一致的，因此我们将其推广到无穷意义下的一样多。但这个对应不是唯一的，我们可以构造另一个比较方式依然满足有限意义的“一样多”，却在无限集的比较晚得到不同的结果。比如：

不妨定义区间 $[-a,a]$ 与集合 $A$ 的交集的元素个数为 $N_A(a)$ ，然后定义集合 $A$ 和集合 $B$ 的“元素比值”为

$$p(A,B)=\lim_{a\to\infty}\frac{N_A(a)}{N_B(a)}$$

当“元素比值” $p(A,B)=1$ 时，则称集合 $A$ 和 $B$ 的元素“一样多”。显然，这个定义在集合有限时和我们的认知依然是一致的，因此也可以作为“一样多”的一个推广。但如果拿来比较整数和偶数，结果则不会是“一样多”，而前者对后者的“元素比值”为2，似乎更符合我们的直观认识。

当然，上面这个定义显然不会是我们的数学所想要的。因为这个定义过于平凡了，以至于即使在面对像有理数集这样的可数集时也会无法定义，这与数学所追求最广泛意义上的一致性是相违背的。因而，“势”依然是对任意集合的大小进行度量的最佳方式，也是我们在数学中普遍采用的。但这一概念如果反过来作为日常用语中的“一样多”的替代，则无疑是术语的滥觞，只会令人更加迷惑，无益于辨清问题的边界。

也许一个来自数学自身的例子更能展现这种概念拓展的不唯一性：维数——我们有线性空间的维数（自由度）、拓扑维数乃至各式各样的分形维数，它们最初都来自我们日常对空间方位的直观认知。但它们都是在各自领域中抽象出来的概念，并不能简单地断言谁是一般意义上最佳的定义。

不过，概念的推广与取代在学术界内部确实广为存在，每一次取代本身可以认为是对概念更深刻的理解。虽说如此，明辨问题的边界和语境对业内人士同样重要，至少应该采取明确的上下文或者精准唯一的术语来进行描述。

如果说概念的泛化推广是抽象和发散思维的体现，那么划定专有术语和明晰边界则是具体和确定性的追求。这两点对于研究者而言都具有程度相当的重要性。如何在两者间取得平衡，对科研人员也并非易事，更遑论科普读物和它们的读者了。能把握住这当中的微妙的，大概《物理学咬文嚼字》尚且能算一个比较好的例子吧。

针对科普作品，19世纪伟大的物理学家麦克斯韦曾写下这样的忠告[^2]：

> In the popular treatise, whatever shreds of the science are allowed to appear, are exhibited in an exceedingly diffuse and attenuated form, apparently with the hope that the mental faculties of the reader, though they would reject any stronger food, may insensibly become saturated with scientific phraseology, provided it is diluted with a sufncient quantity of more familiar language. In this way, by simple reading, the student may become possessed of the phrases of the science without having been put to the trouble of thinking a single thought about it. The loss implied in such an acquisition can be estimated only by those who have been compelled to unlearn a science that they might at length begin to learn it.
> 
> The technical treatises do less harm, for no one ever reads them except under compulsion. From the establishment of the general equations to the end of the book, every page is full of symbols with indices and suffixes, so that there is not a paragraph of plain English on which the eye may rest.

确实，科普读物对专业术语的稀释一定程度上也是对读者深入思维能力的一种伤害。进一步地，这种对术语的浅薄化，对业已进入专业行列的“原读者”乃至科普作者自身的辨析能力也会造成不经意的伤害；而这种伤害又反过来进一步拉大了科学概念与一般人之间的距离，令人以为这些被“通俗化”所粉饰的概念就一定能为大众所理解，构成现代科学版的“何不食肉糜”，不得不令人扼腕。

当然，科普工作也不尽然都是坏的。哪怕是稀释过的概念知识，倘若能抓住精要，不会因为注水过多而浅尝辄止，那么从科普中浸润的少量知识反而更能让人甘之如饴，激发探索深入的兴趣。只是，倘若能在科普中就更好的明辨当中的概念和术语，大概会减少那些因模糊的粉饰而对长远的研究道路所造成的伤害吧。

---

[^1]: [如何激怒一位数学爱好者？ - 孙泰英的回答 - 知乎](https://www.zhihu.com/question/338618946/answer/779204340)

[^2]: MAXWELL J C. Tait’s “Thermodynamics”[J]. Nature, 1878, 17(431): 257–259.
