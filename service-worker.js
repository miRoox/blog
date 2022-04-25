/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","4e0d8bcbea35107984255c4db438c131"],["/blog2013/07/EdisonIn21Century/index.html","009c97f1baba777c6b8fb7d38e4f3243"],["/blog2013/07/FenDou/index.html","3aa13224cd12197574bc7249656b3543"],["/blog2013/07/Qie/index.html","8831c3073fa67587c0c946da0ac3ec44"],["/blog2013/07/RhapsodyOfSand/index.html","2ca0cf369f805fa329c4a9bc6b1d3fc3"],["/blog2014/03/KTimesSum/index.html","a88041e84ae2b8e1fe31b74dbbb9d6e1"],["/blog2014/04/PiPaXin/index.html","b4612a4df09f9d43ab1af2566b5b127f"],["/blog2014/12/Miniascape/index.html","c091fa25c1860c3132edbdb1512bbd10"],["/blog2015/02/ShiBiao/index.html","d15784b202fb7a23de53f508fde0ba80"],["/blog2015/02/Wei/index.html","a349c664c55dfb9bab7ce79dcbfd98ca"],["/blog2015/03/Stain/index.html","e60b8dce055f87767c470a63f389d7cf"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","8a6b91d441e8b6829dff2f6a51f7b9a8"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","ea5a7245275cc09c5c0c7c4e8f26e4ad"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","91a36070ed9f0f04d90f99d3c4d88f79"],["/blog2015/06/BellPolynomial/index.html","660cb14cb4aa1a5915c0baf76b15545b"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","ef7f225cd779d4dcf61e25e944606880"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","650f8b74959eb14239af281c79160a2c"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","17a99d8c1793ccc39b3253ee52ff3626"],["/blog2015/10/Tiberium/index.html","94103d4fc4d9bbacf6ebd4265123b05d"],["/blog2015/12/ChengTianQuan-01/index.html","a671f96bd50b9f9185621bdeb3bf0037"],["/blog2015/12/PKTFile/index.html","a4e3067ee176490d51520ea48cfd5988"],["/blog2016/02/ChengTianQuan-02/index.html","cb35c1e8de2e7aec9463d37537867fa1"],["/blog2016/04/LogicAndExperience/index.html","220383bf8549ac2d61195f9662c9f2fd"],["/blog2016/12/CSFFileFormat/index.html","8044568a0f71e439d146a8ae06964ca9"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","0b686cbd63ff15f3e48add608d797fb2"],["/blog2016/12/ProveCRTWithConvolution/index.html","d782cc4e816de21d5dffd96fb44f5507"],["/blog2017/03/MIXFormat/index.html","501263f8955976b48a4b1de542969d88"],["/blog2017/04/WesternPhilosopher/index.html","4a621ff934173312bb12dc04f4725ec9"],["/blog2017/05/TheAlgebraOfADT-I/index.html","4455693c27adba9536286df60545770a"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","cb0d8709afd20f2cf0c70581eeb6c02f"],["/blog2017/07/TheAlgebraOfADT-II/index.html","85a8afc700e6a16289f3665f5d0495ba"],["/blog2017/08/DnDTabWithQt/index.html","5d97a0d4207bec25ee9979a523b52da8"],["/blog2017/09/ClassBasedOOPWithMma/index.html","d35c08bb9ac4e54a05fa9ba60b072cb0"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","dbd41505197fb2cb05c361e0482dacba"],["/blog2017/11/TrapInCCpp-1/index.html","d144e039f2011ab1fb3e32b3287c24bb"],["/blog2018/04/DebateOfScienceInAncientChina/index.html","0e5ea2acefd1fbebe47b4193fec7204e"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","86753b66061012dbff21ca25348e5d6e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","2ae5cd940625776d615a142b34cfdd99"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","12eeccfeffface5729a4ff6758389130"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","29552ed64a4f4b21809f5acb8db0e413"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","71e5160f63e7fa9ab7db8dc2c8f83288"],["/blog2018/10/PrintDefinitions/index.html","30942f843126552bd814e4bb3a85e84d"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","4b92f662adbc1ce7bed1943ca947cff8"],["/blog2018/12/WolframOnlineDemo/index.html","4325a9c47557f2d980c7d94e67e4e1c2"],["/blog2019/01/PointerInWolfram/index.html","c57eed6740aa5a5643bc7c2f3ae166c2"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","1454b1a5e072fdd11eabe1790a1a1139"],["/blog2019/01/SymbolSandbox/index.html","fa392eccd2f7cc6ab041ae1e88849abf"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","11786975041c65177c5777ea4589195b"],["/blog2019/04/MmaAutoLiterature/index.html","4a41c58615e823eab3868d3e85422047"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","b7749cd4a132ee61129761796e845197"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","029f363cb6bc893dfc9deab1b1b03650"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","b79d31c9ac8cdadd6795db118b2b1c14"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","bb8804cefc8f8145d6dd5eb1b102e52e"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","19bb3013568486a96354a687bbb5fc49"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","cafd1c73b67bf24f222bdb4a0015f7c8"],["/blog2019/10/SubmitFunctionToWFR/index.html","d91c096138b3dd841ddd67e54100358e"],["/blog2019/11/TerminologyAndPopularScience/index.html","7be347bd2eb58555c04859a3864be36d"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","d64c6efd666c4c9b000c6ec576e708ab"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","1212fd7f46ad0bb3b5a169618c6bf57e"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","a4327d57bf733353c42adb6c5ee6399b"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","62072fe2c3f768bae7d34bb3ab85a50d"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","641093a2f63f43f7d344c08e25bc737c"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","f1aa921aa126b6335b004af300a5d0d8"],["/blog2020/11/JuliaPkgGuide/index.html","30a9b416630389e47135a09c1e0d7f1d"],["/blog2020/12/Summary2020/index.html","004b375fc4922b4adbd01b70cf28a914"],["/blog2021/01/MSBuild-LaTeXDoc/index.html","9deccfeb5714fc6146381b6f6c6b5a45"],["/blog2021/05/Initonly-Setter-CSharp/index.html","8619a3a1f2c9f45e650d5c9ba1d84da7"],["/blog2021/10/Julia-unevaltypeof/index.html","e1f2c6fcc26339f660f19aa00d73ea06"],["/blog2022/01/Summary2021/index.html","6eef7af0bc5297d6b5bb08cd840b5f91"],["/blog404.html","486bd5587f54f1f8e1e69cd234315975"],["/blogabout/index.html","da8a8f248b6b2477dd4148ed23c421f4"],["/blogarchives/2011/07/index.html","12bb6e40950b5a4588c4cd21189d7bbf"],["/blogarchives/2011/index.html","cf32dcbabb38579f5cb84e5aa634ac7c"],["/blogarchives/2013/07/index.html","56e7ca4069f86eddf4c05eceffb4585b"],["/blogarchives/2013/index.html","fca96030123e2c20b98ab84e068f793e"],["/blogarchives/2014/03/index.html","4a7fe4bea144f85992a146bffedf3661"],["/blogarchives/2014/04/index.html","c89326fa95f27e83cf08fcd3147db903"],["/blogarchives/2014/12/index.html","78f0197170d146bd1e4615fa6b54dd20"],["/blogarchives/2014/index.html","5cd14f48321e76e113538787f0185f24"],["/blogarchives/2015/02/index.html","28b9b0b233aed745dc1e84a65d1bdf20"],["/blogarchives/2015/03/index.html","8a73ecd9999050a12b674d27624d63ee"],["/blogarchives/2015/04/index.html","85f9e9234fe90257a6ce857043baf18a"],["/blogarchives/2015/05/index.html","b5d2f69df8c25a4b243ca1d98af7b761"],["/blogarchives/2015/06/index.html","ddb185e42350828f22a30659ef908506"],["/blogarchives/2015/07/index.html","a3a6eb0ad92c4c706b8eb3c4903ff3df"],["/blogarchives/2015/09/index.html","a8fb83b7f8ecf00b5fa81b8b3f01870f"],["/blogarchives/2015/10/index.html","2a1c30fa285dd4357ee402f2a270863a"],["/blogarchives/2015/12/index.html","3e61460cbc61d2289122eb21fc66c80e"],["/blogarchives/2015/index.html","347650047d760c2234eb4803916d3ab3"],["/blogarchives/2015/page/2/index.html","79edacaf71297c71de8086d088eebcf6"],["/blogarchives/2016/02/index.html","6f431444bb24c04796b4fb88145da16c"],["/blogarchives/2016/04/index.html","8b5d55381a0a27fb103aaa9521ca8cec"],["/blogarchives/2016/12/index.html","dc812791ada9799bcb917fd02bbe707e"],["/blogarchives/2016/index.html","085ecb53bdbf3d0e1409652d4b63d81c"],["/blogarchives/2017/03/index.html","49311d3d2edf25df702cf1b9e4a6d76c"],["/blogarchives/2017/04/index.html","e57511a3cbfa0bac70e686050db11c76"],["/blogarchives/2017/05/index.html","202e31901d11e4c2e74df776b5279c5a"],["/blogarchives/2017/06/index.html","3929cdeb5d6a8f840395f8bc298aef7f"],["/blogarchives/2017/07/index.html","b1d535be76cc3ec91da41ec3c751b447"],["/blogarchives/2017/08/index.html","5823ad84ac9814d07e97a446056c946b"],["/blogarchives/2017/09/index.html","c47ecc24177f597c3970ea59a63e8f8c"],["/blogarchives/2017/10/index.html","946832fb5c4bb74b19d352649f9d53f8"],["/blogarchives/2017/11/index.html","362bdb1a8b97b59d7205f62edbbc2fc3"],["/blogarchives/2017/index.html","29c93eff62afbb9f4a6c4941e9d07d69"],["/blogarchives/2018/04/index.html","05c799337b2f250f56c9c6f07a1ad993"],["/blogarchives/2018/05/index.html","53510d7dd0ba4e24fe481b21e3648850"],["/blogarchives/2018/06/index.html","b8b745d09efc812cda492ea85533555d"],["/blogarchives/2018/08/index.html","6561e037d94f281e37481ef3dc4e2db5"],["/blogarchives/2018/10/index.html","d9c84cb29eed743a410f5c25f4e26336"],["/blogarchives/2018/11/index.html","99484cb467755b4cd736e1f4aabfcbb8"],["/blogarchives/2018/12/index.html","2db2fac409f693ea6e56450264e3ff82"],["/blogarchives/2018/index.html","165dc265a5704fac1d10cc936de91f01"],["/blogarchives/2019/01/index.html","ff9ee2b7b06cee2f74d8bd8c7555bb93"],["/blogarchives/2019/02/index.html","3dd65017c4904d54ccc84d738581b7ab"],["/blogarchives/2019/04/index.html","21fcc9ac8002f5d5dc580cee6b9f034c"],["/blogarchives/2019/05/index.html","014dc63f7d87545eca60fa25c6a56bec"],["/blogarchives/2019/07/index.html","3dcefaa56eea68ed9d52437ffb87abfc"],["/blogarchives/2019/09/index.html","01390029b9dbf40e6c2df608c97b228e"],["/blogarchives/2019/10/index.html","65c10e87cdd086afa8630b5b13bdb86f"],["/blogarchives/2019/11/index.html","7c1cfef876bf78c0304b60dc48dddf1d"],["/blogarchives/2019/12/index.html","43bc95065e620a45739700db74307132"],["/blogarchives/2019/index.html","13642f1c4065f321bcf53d7158c8bb7f"],["/blogarchives/2019/page/2/index.html","3e7d1d1fd78d2b55c1af1b7c66179fbd"],["/blogarchives/2020/01/index.html","70eda2959655d82caad8071f8e7031d0"],["/blogarchives/2020/07/index.html","78f1e7808ec9d8e0c94a2ce61ca25075"],["/blogarchives/2020/08/index.html","732990eef1a347ab2b3f68fe975d622a"],["/blogarchives/2020/10/index.html","bc1093f3ce6500a519cc651ab37de8e9"],["/blogarchives/2020/11/index.html","9bb1c58e8ae7d6fb2f6a9fa2277d80bf"],["/blogarchives/2020/12/index.html","ae64a3188604db5819a1f0fbba35660e"],["/blogarchives/2020/index.html","5e82a93ab02c530cbae6be09624c5248"],["/blogarchives/2021/01/index.html","1ff7bbdb50931cb4cda3ec453e36b15b"],["/blogarchives/2021/05/index.html","c13b1344f9c85343b27490a75a843d2d"],["/blogarchives/2021/10/index.html","6366e35c80d27aea29f56b4e67c6e1a4"],["/blogarchives/2021/index.html","31fb09eebc2b7bc6a2caa3ec75b8f750"],["/blogarchives/2022/01/index.html","d387663f6aa05306dafabbbab228333e"],["/blogarchives/2022/index.html","1c05eb17c6847b70cce9a62856a296bb"],["/blogarchives/index.html","a78a9c560268c33228fcd1558133db27"],["/blogarchives/page/2/index.html","a78a9c560268c33228fcd1558133db27"],["/blogarchives/page/3/index.html","a78a9c560268c33228fcd1558133db27"],["/blogarchives/page/4/index.html","a78a9c560268c33228fcd1558133db27"],["/blogarchives/page/5/index.html","a78a9c560268c33228fcd1558133db27"],["/blogarchives/page/6/index.html","a78a9c560268c33228fcd1558133db27"],["/blogarchives/page/7/index.html","a78a9c560268c33228fcd1558133db27"],["/blogcategories/index.html","fd297e0d3c801e71522ef0f5fd4880e8"],["/blogcategories/代码编程/index.html","92561adae6cbd97992dbcb672df3527a"],["/blogcategories/代码编程/page/2/index.html","81f0c4a533195cc9511b5c223c630329"],["/blogcategories/代码编程/page/3/index.html","d05aaa2911f17be8a58388e8593f054f"],["/blogcategories/代码编程/page/4/index.html","a5618377645d00a8a2f3dcbec3941beb"],["/blogcategories/小说文艺/index.html","37e25c11ce77d6ef6fff0ae30000ccfa"],["/blogcategories/小说文艺/page/2/index.html","ca7f6c747f07cbcdfc260ce1b188ffb2"],["/blogcategories/数理科学/index.html","2611d263afa76ff1958bba1fc6ed2f5f"],["/blogcategories/杂谈散记/index.html","1b4d13f16c0aac82256c17054994245f"],["/blogcategories/翻译作品/index.html","6ca5770ff5c44601d7a98ca784e9eead"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","2da4d11ee565c277713434109000ebd4"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","344d5c5d71d6fa1a838716b08f315d9e"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","1d5b5d6db8ea570f379b872ec081baba"],["/blogpage/3/index.html","87aaad6054981254103856cf26e2980c"],["/blogpage/4/index.html","0aa68d5a6df042a9d90c2dfaeb9124ed"],["/blogpage/5/index.html","b4b3d61b48c8d79477143b11d1ef9068"],["/blogpage/6/index.html","01fa0950271163a3f8b0473a5881d2e5"],["/blogpage/7/index.html","f0645f4955f9e96900a3a923085be3c0"],["/blogtags/C/index.html","20752f8f0ff8d11e1852d6d5ed9b14cd"],["/blogtags/Cloud/index.html","5f08b6832df89e9fd3b109018ce2d25e"],["/blogtags/C语言/index.html","c62161cef5d2c6511987fea07c6e46bb"],["/blogtags/FlyCapture2/index.html","225261d26446db61983c6206b7c75646"],["/blogtags/Git/index.html","789a6bdd2b650cb68c1cdea11eda9370"],["/blogtags/GitHub/index.html","e32fe298c52f1392e16ffcad8cb419b5"],["/blogtags/Haskell/index.html","c5e76a8d5011911f868e6073322a575b"],["/blogtags/Julia/index.html","8a7a06434ab6098dcabca3a001a590d5"],["/blogtags/LaTeX/index.html","83905bca00b31f13363a681e89564080"],["/blogtags/LibraryLink/index.html","41d569c3a393d450b38e6bae05891f3f"],["/blogtags/MSBuild/index.html","180caae5fc17a5d65ebf815b318d8e73"],["/blogtags/NET/index.html","bf7359a5860cd2ec22f1f0a44dde96f9"],["/blogtags/PMAC/index.html","faae6c508fd335410f6a2e985f4a05d9"],["/blogtags/Qt/index.html","ec295d8a5857231f0ed009eac4d86028"],["/blogtags/Rust/index.html","83806ff41c982cb4ce44c31dda28fac1"],["/blogtags/Undocumented/index.html","075142165c68a27e413f4dbbbf286b49"],["/blogtags/Visual-Studio/index.html","203551cc046047d7397e30387a1954c2"],["/blogtags/Web/index.html","4daa1f18fecfdf6933b0599a53bb68f1"],["/blogtags/Wiki/index.html","5f8c7478cada4e6821715f2790ec7c05"],["/blogtags/Wolfram/index.html","f4fffad7a129c377c737b8202d4634e1"],["/blogtags/Wolfram/page/2/index.html","0b03ffc6c9a11f6c3ef5cac45de34974"],["/blogtags/Wolfram/page/3/index.html","60dbbaf0d03f12c651878e7ecf02f468"],["/blogtags/index.html","0cc08ccbd5a5c2fc437661ce3df4c09c"],["/blogtags/作文/index.html","a62c0d9ade3048a7aa761b8d8e34f2d3"],["/blogtags/作文/page/2/index.html","5c3a016852cc91d5396eab608ed0df5e"],["/blogtags/傅里叶变换/index.html","0c9f728d640931c874770a8d2bf9e687"],["/blogtags/元编程/index.html","8b0ae2f0ccdd319201229846b16737a2"],["/blogtags/功能模拟/index.html","db156e9bc6783a1c0717eefc30a4b4b4"],["/blogtags/参考/index.html","d75c873d2c0947e53444088edf553c7c"],["/blogtags/哲学/index.html","282e523e25d3688e55cb6d92513ac4a0"],["/blogtags/图像加密/index.html","1231be1f29d446a6c7a13cd977e0b848"],["/blogtags/图像处理/index.html","92f3fe312811af43820a431c57cbee83"],["/blogtags/小说/index.html","4aace9a2efdb6a3422625e54afc7c67a"],["/blogtags/年终总结/index.html","16698343c9e48ef7a9ff1aa28bfa6640"],["/blogtags/微积分/index.html","b4712da6a48f4e4985444b9449da13a2"],["/blogtags/拖放/index.html","db89e2b2087b936b9de4a4877fbb99f9"],["/blogtags/持续集成/index.html","84bcc7782c76960fff0430ac6994ff3d"],["/blogtags/散记/index.html","e5f8680eda6babc94b60368a860ef3d7"],["/blogtags/数列/index.html","78627f61a06a6d38bba9d9f59607f40c"],["/blogtags/数学/index.html","baaad1af9d72313e2138fe5d10b0640e"],["/blogtags/文件格式/index.html","297e72e6861240f0f9dcad98cee5ecab"],["/blogtags/文学编程/index.html","1416ba06a65b258ecaff8966dbae0290"],["/blogtags/文言文/index.html","e7d12d327f079d11239d2393d5bed86f"],["/blogtags/杂谈/index.html","0ce7f33a6f7ba762f11442252e7e7636"],["/blogtags/概率论/index.html","ea4c6fe9055447ffa14c5f925b8cd51a"],["/blogtags/混沌/index.html","e18ee9c6142fbf9d73d33b24e80315a4"],["/blogtags/科学哲学/index.html","8b0dacb3774b11fc18e8d9e6d7b5fde5"],["/blogtags/科幻/index.html","cee159d136b1afc17778913a527ec899"],["/blogtags/科普/index.html","9e4990eaf26afb45f88e2112fd01bdf4"],["/blogtags/程序设计/index.html","09c523c7ea37e54f2372354f3d062825"],["/blogtags/笔记/index.html","44f9d6e0ed3c8891458c4c1acd448a04"],["/blogtags/符号计算/index.html","36d8af1dca6f816bdf5544aa9806440a"],["/blogtags/算法/index.html","d573f4b03fd1014088707a3c807667ca"],["/blogtags/红警/index.html","533e185daf5a792698e11ff22c0bfb12"],["/blogtags/编程/index.html","ffa87350b45e6b4c4364cb7ca87f666d"],["/blogtags/编程/page/2/index.html","5e9c6a06ce9fb8b635172bd93932ed6f"],["/blogtags/编程/page/3/index.html","a609d7787c93ccdbcd16cf749d7ce10b"],["/blogtags/翻译/index.html","dc4f21ab0eb7d511e2a54bccdfc6ccc0"],["/blogtags/语法/index.html","a482443a7eb683eb1b8cda9c6c43f66e"],["/blogtags/踩坑/index.html","e972c6c6b92c2f3be196ab75afde910d"],["/blogtags/逻辑/index.html","1d042069b3c1a5221a4363aef01e75b2"],["/blogtags/题解/index.html","d1366bf6d01929f66aec213a328b275e"],["/blogtags/马克思主义/index.html","dfdccef96484fc4063bcf39541f34655"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







