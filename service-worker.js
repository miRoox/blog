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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","5e55421ae1ffacc1d14f53243a6fc0e9"],["/blog2013/07/EdisonIn21Century/index.html","d462cc7f05705a053aae3e0b8a5c4f43"],["/blog2013/07/FenDou/index.html","3bac376c93148eb093a6a6ab7993e319"],["/blog2013/07/Qie/index.html","2ef3b6ba7bc88b7997411e647f026207"],["/blog2013/07/RhapsodyOfSand/index.html","84f0e0b07c2299a911300ca9f4cb4dee"],["/blog2014/03/KTimesSum/index.html","22276acefe4748086112409076c96118"],["/blog2014/04/PiPaXin/index.html","650a36fcacf44f9ca3bc3ff2faa8e246"],["/blog2014/12/Miniascape/index.html","068e309d4d0c023e985d27bff846c304"],["/blog2015/02/ShiBiao/index.html","1ccc445aaf6614c71400df3769fa709d"],["/blog2015/02/Wei/index.html","f82f434f2ee93ff17061507ecd42110e"],["/blog2015/03/Stain/index.html","009fac46e9f676235c1505b11eeea40b"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","6ab04cd846e22e1a911b8926e854e000"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","adea953a9db72f3ed13b2f2ad930c193"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","9e123741547176306fa95b138a6503ac"],["/blog2015/06/BellPolynomial/index.html","b3f33e5900f256468a5f65b07ba92883"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","42d8afe516cc228d85c334144b881c5d"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","9a91c19f03f06920ee8a4249b292a5d1"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","c592a9c09453cbb31b87e1d673a04f93"],["/blog2015/10/Tiberium/index.html","c3d1314b5069e18d774bf59ffdc64017"],["/blog2015/12/ChengTianQuan-01/index.html","4bf99732c4037b73ead49bea9377a8f9"],["/blog2015/12/PKTFile/index.html","38b070e4fb761919f68059e74d85e7c8"],["/blog2016/02/ChengTianQuan-02/index.html","3b5ef60a1e85d56b51737b505f1d5f63"],["/blog2016/04/LogicAndExperience/index.html","fd7644b1f32e167a6d9aaf03f7567bf9"],["/blog2016/12/CSFFileFormat/index.html","1845b134dca1fe3b30aef509aafe09b9"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","e329b179342d8c79cf3f7b49d7c45854"],["/blog2016/12/ProveCRTWithConvolution/index.html","671172bf252e6524e0b5fcdc640b6adc"],["/blog2017/03/MIXFormat/index.html","29828623e9f04db70e859f4dc8fddf48"],["/blog2017/04/WesternPhilosopher/index.html","b649a5ab082c1bc3722f91c5056f794c"],["/blog2017/05/TheAlgebraOfADT-I/index.html","e899e09f148ed398e35c6f75d0f001de"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","22b981feefe08b3c55925478b008d2ef"],["/blog2017/07/TheAlgebraOfADT-II/index.html","a2462fca66a25676d0670cd7f88326b9"],["/blog2017/08/DnDTabWithQt/index.html","756466f208b3f45d7667379fdefc3cca"],["/blog2017/09/ClassBasedOOPWithMma/index.html","dcfb45e696e4aee4e01b3126ceec4fb7"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","c56016b11c97eec6f76ab1ddad4d13c6"],["/blog2017/11/TrapInCCpp-1/index.html","76f4e93b97cd9dba1155e6627951c18e"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","89ac9832b762ab2f362b9482b30069e2"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","88b828ab5d3da2993f2083f9e6a82fc4"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","d70d75314a98eacc92da52eb72cde548"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","655653550bffe4fd9a59dd908f56e173"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","92daf9b4aba7dc7853416a5d713ca27e"],["/blog2018/10/PrintDefinitions/index.html","eb28f7affda7ba6e4d32a576b04ee5df"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","21ebd46e67693b439786b4061706abfd"],["/blog2018/12/WolframOnlineDemo/index.html","17b1b23405a5c4f526321f20b8f44413"],["/blog2019/01/PointerInWolfram/index.html","b7d800d8a1b848be471e85a2360e0ef5"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","6807cbd273509ff4521eceb6816c6bce"],["/blog2019/01/SymbolSandbox/index.html","8b7cfee18bb1b84531f76f079a76fa67"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","6229c36782fcc78bdeef61ff868a3f3f"],["/blog2019/04/MmaAutoLiterature/index.html","e077c5c449e49bae0884ab8377eb8617"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","8a9965f4345c6f9bd005620a2b4678f5"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","a3b757704ab0311212fd0f539450f96b"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","2ad5963a09a94271ddd04bcf1f7be12e"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","d6c89c2b8c51ca120661bb2c0dba8231"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","22bd0c6c2409b228f8ee91c04a91c133"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","6fa3daa8a74820c5e7e050e96d940e82"],["/blog2019/10/SubmitFunctionToWFR/index.html","0fa73bd008bdb6c13f9402c4d11b6707"],["/blog2019/11/TerminologyAndPopularScience/index.html","dd53c8286f196f1146f9c7df84b39309"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","012b1e7bac1102f9b9941890994bb984"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","fca09982dfb231d7aa9e412bc65e0ce5"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","9f8986c10398ac08ada0e68aace959a4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","f20d23cb6c028c6cd1b5c1cde577a3e2"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","2884a90bb1f6f64568d414aaeb58e675"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","b903e06baa115f9d058015924a4a1836"],["/blog2020/11/JuliaPkgGuide/index.html","2f180221944586c5e0b45867b0f58149"],["/blog404.html","25d5eb611da5643f0a9ac0586013e3a7"],["/blogabout/index.html","13308ff7e6f6f8038d2cc4d1bacd91f1"],["/blogarchives/2011/07/index.html","23a0f3abb6b081ec518f74ca61f0554f"],["/blogarchives/2011/index.html","18df6a5b15403ca067b1bffe2a6ea875"],["/blogarchives/2013/07/index.html","7a20206fac49934ae732dc4eee89bf07"],["/blogarchives/2013/index.html","c65e4eace4572ac6ed3cd843641710ab"],["/blogarchives/2014/03/index.html","864a6688747946690b0831fa26454f13"],["/blogarchives/2014/04/index.html","a8d969cb8b1264211a86a602b7ad88f7"],["/blogarchives/2014/12/index.html","91c1cb2f22702106479f89b1e8ae7ea4"],["/blogarchives/2014/index.html","3f60348fff41f25cbf691080f9078e99"],["/blogarchives/2015/02/index.html","1ec488e5ab11bb8e3b7a3e625d884ad9"],["/blogarchives/2015/03/index.html","323312e17af116fc81106243ae0e2bef"],["/blogarchives/2015/04/index.html","250c55b2520fd409145f4e7d8553d490"],["/blogarchives/2015/05/index.html","2fb1cd1d1d5b81e943e2530ccbd994d4"],["/blogarchives/2015/06/index.html","f2a799f3e7ebb064ee2ac578db4fdf20"],["/blogarchives/2015/07/index.html","a7c8651e4ebabd6305e2062fed2864de"],["/blogarchives/2015/09/index.html","688778fdf4687a55404b0bbaef43d9f2"],["/blogarchives/2015/10/index.html","0aaddc68cb0c5e1d310a7ddf8b6fe03c"],["/blogarchives/2015/12/index.html","eb0af5577fa9007b157d399374283db0"],["/blogarchives/2015/index.html","6e6b15914f216807c623c888dda9e0fd"],["/blogarchives/2015/page/2/index.html","7302ddc208178685cb6a4821449c0465"],["/blogarchives/2016/02/index.html","bfc02426fb713625edd7d608c1b4e1cd"],["/blogarchives/2016/04/index.html","889ac60d21d7e8f1eb26dbc4a7ad5b83"],["/blogarchives/2016/12/index.html","1188b2cc18d6386e8a405f2249529eaf"],["/blogarchives/2016/index.html","503dd2d76d2d68ceabae800c7a5fd011"],["/blogarchives/2017/03/index.html","107e90eb76f869757baacb8f0c081787"],["/blogarchives/2017/04/index.html","7d3b19a3fdba1fd7322318e0e5ff3426"],["/blogarchives/2017/05/index.html","83418e74b4a46dcd162d310495571c3e"],["/blogarchives/2017/06/index.html","d18e775e4fba9866d315a3cfdb32c1ba"],["/blogarchives/2017/07/index.html","b7460523a5b903eb01caf9169b2db5eb"],["/blogarchives/2017/08/index.html","b6e48bf8561f6e3d965a4a0ea580a22c"],["/blogarchives/2017/09/index.html","e08ec021a99fd0d20011c3c20e2cd21e"],["/blogarchives/2017/10/index.html","e897403300e5d1b3a7d704f9e547e0e4"],["/blogarchives/2017/11/index.html","67507ad348adf8892d3ee7d13b60ed7c"],["/blogarchives/2017/index.html","132bd5edf744a12fedb9fa2edc900fee"],["/blogarchives/2018/05/index.html","c825f5eb7ba41f7e589c7a7bce6651a4"],["/blogarchives/2018/06/index.html","5b7e7291eb0a5dca57d48d7460bc7aac"],["/blogarchives/2018/08/index.html","4b7dac6c225f0e3bff5fd2d88b78e804"],["/blogarchives/2018/10/index.html","be26ee49c4eb61c5a7119155776c3088"],["/blogarchives/2018/11/index.html","3f5d0a9dabcf95aa1e3f448519ad7825"],["/blogarchives/2018/12/index.html","550e16c62f214c7caeb580cb28bbdeac"],["/blogarchives/2018/index.html","27b18191c99a75bb151663ba7b52cdfd"],["/blogarchives/2019/01/index.html","7b35f8c78f88f1f7f875abf25f04cc52"],["/blogarchives/2019/02/index.html","60be41e86f2f3e0f93cc4b6c19adf08a"],["/blogarchives/2019/04/index.html","9592a5723d3384e28ac0e27820eb9c0c"],["/blogarchives/2019/05/index.html","1c0570d806f6fd5d9dd0d22727e00180"],["/blogarchives/2019/07/index.html","724e40f4c1dfc4b62d53ec7a8ded522b"],["/blogarchives/2019/09/index.html","1df67d14dba83c8946e7a3168c57b838"],["/blogarchives/2019/10/index.html","c6c12cd3ebcf1104b6b302066a6e27f4"],["/blogarchives/2019/11/index.html","ffec3541ae654694fbaa96f755dcb7c6"],["/blogarchives/2019/12/index.html","9d849d202e8c2107176f6df018021c4b"],["/blogarchives/2019/index.html","aa50aecc1e54b0e93f18ba017320f8c9"],["/blogarchives/2019/page/2/index.html","a1bc678885a2304e6ec68f4487bf0e26"],["/blogarchives/2020/01/index.html","9df62e89fb545eb496613ab24879d303"],["/blogarchives/2020/07/index.html","85d7647b09053663be449b6a980fc85d"],["/blogarchives/2020/08/index.html","830839e784af4311907c30ea0536254e"],["/blogarchives/2020/10/index.html","aee0ecdb7601af8660a3b417f93d8331"],["/blogarchives/2020/11/index.html","1d2c03b93e41452537f3f308aa5770da"],["/blogarchives/2020/index.html","2e99b35e4d3d27cfbc647b585c5ea96d"],["/blogarchives/index.html","365594fe7eb9f94f64f6f6b2bf4ca663"],["/blogarchives/page/2/index.html","365594fe7eb9f94f64f6f6b2bf4ca663"],["/blogarchives/page/3/index.html","365594fe7eb9f94f64f6f6b2bf4ca663"],["/blogarchives/page/4/index.html","365594fe7eb9f94f64f6f6b2bf4ca663"],["/blogarchives/page/5/index.html","365594fe7eb9f94f64f6f6b2bf4ca663"],["/blogarchives/page/6/index.html","365594fe7eb9f94f64f6f6b2bf4ca663"],["/blogarchives/page/7/index.html","365594fe7eb9f94f64f6f6b2bf4ca663"],["/blogcategories/index.html","2b1856b2002f3b0e9ea1149b53cb3660"],["/blogcategories/代码编程/index.html","ff520788a6296ac30401850b3fb72453"],["/blogcategories/代码编程/page/2/index.html","4244406371d3559c57d32279b308000d"],["/blogcategories/代码编程/page/3/index.html","57ded206793c4ba7e906d88f50a4e6f1"],["/blogcategories/代码编程/page/4/index.html","f7e9735cd9a7f217c4247b605a26612a"],["/blogcategories/小说文艺/index.html","dfe55e6c9ca5e558c41482f0eafcf922"],["/blogcategories/小说文艺/page/2/index.html","f1a8347134c3bcfd034d727741027d72"],["/blogcategories/数理科学/index.html","b8ef80f5cf97c3d1b547eb7b29abc56b"],["/blogcategories/杂谈散记/index.html","ddef3a512ee9679f2871af7f63fd9def"],["/blogcategories/翻译作品/index.html","871076a154bf5ddc0237e8ffe8af4184"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","660118faef5c2657033db5368758537f"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","f7833ba37e97181a4a9c51a0a7ea7536"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","3d51e7d9ddf889946b63444d15836f85"],["/blogpage/3/index.html","59007b0ccac54d8f5ca8f8beb223fb97"],["/blogpage/4/index.html","86f271f5047245a1987d4d02c41ed596"],["/blogpage/5/index.html","a5c5f8f578cc03970afbc515cbe02b40"],["/blogpage/6/index.html","f22b3efe6ed449f7a5cb038bdcec59e5"],["/blogpage/7/index.html","07586fb0f3035614d764e7eb4d046504"],["/blogtags/C/index.html","d530bb06b63ca9f357efc4661f7c128f"],["/blogtags/Cloud/index.html","87c18dbd20e7dd8fc621824160641cf7"],["/blogtags/C语言/index.html","0e6642e7d18f9dc28e58fcd3f60f6bc6"],["/blogtags/FlyCapture2/index.html","ce39281859ceb3e4d2dc1ec699ce6825"],["/blogtags/Git/index.html","4d6b2e54849787492a25f24111b15525"],["/blogtags/GitHub/index.html","05b9e664c8ee68783fb77e9388d93f91"],["/blogtags/Haskell/index.html","79987ab142d5bc0ff4924c887bf3d165"],["/blogtags/Julia/index.html","7883a5dda0c07702b4c9b24dcd84fed3"],["/blogtags/LaTeX/index.html","84b62e4855108c4b98df34ac9b61022d"],["/blogtags/LibraryLink/index.html","c0412e8373bf918f17367bd4362527f3"],["/blogtags/PMAC/index.html","6bae60edf8bb4848caf22f517a882e96"],["/blogtags/Qt/index.html","2376b79052665104660a7fce5ae4dd1b"],["/blogtags/Rust/index.html","6c4a7a2cec574dec7a1218ebc7c37659"],["/blogtags/Undocumented/index.html","2a18067d0a0c2a074c180d4967319489"],["/blogtags/Web/index.html","6cd63f5e7192c3401fac33437da3ab8c"],["/blogtags/Wiki/index.html","251dd33583250437aeaca9a4cee45ab0"],["/blogtags/Wolfram/index.html","9c4f5d20e926a6cf7ed5bbf5f2368c4d"],["/blogtags/Wolfram/page/2/index.html","ac7cfd76b629abc3172970496e4604e9"],["/blogtags/Wolfram/page/3/index.html","2ec1a3ed9016fb1e52ef248a841041ff"],["/blogtags/index.html","2123f7534464bec996ec16900eb45a16"],["/blogtags/作文/index.html","e9ff7a19746ec54787c5fcae21f0eb9c"],["/blogtags/作文/page/2/index.html","e18de7f6186cba9b114265fd92e32eb2"],["/blogtags/傅里叶变换/index.html","a35d305fc43520f92ff007addef1e7d5"],["/blogtags/功能模拟/index.html","1be866e2f3a17e71d8aced8c12500734"],["/blogtags/参考/index.html","de8e8c8dba81b2b06db8b1303055cfe8"],["/blogtags/哲学/index.html","71d403ffe81406949dd740ab398934a6"],["/blogtags/图像加密/index.html","f18f32f2f98218b18095d991efd259af"],["/blogtags/图像处理/index.html","557e59aa3b003323640d41e834e73a56"],["/blogtags/小说/index.html","87624bb3a2d239428dc3d3b4a6996044"],["/blogtags/微积分/index.html","75d01a2e26b1d0d0877af819c87e9d4d"],["/blogtags/拖放/index.html","a50f9963149d0cfc96ce07785cf23abd"],["/blogtags/持续集成/index.html","85b5e211d8963087b9a4949b6b0747d8"],["/blogtags/散记/index.html","9a98ec44a4b13c1e497b39e73791a4e9"],["/blogtags/数列/index.html","730a54fe73ce5739090b0dfea46a0ce2"],["/blogtags/数学/index.html","5d61bcf88f79d1752cc9f4d2d317486c"],["/blogtags/文件格式/index.html","1a588e30d2ffb6b679a72450f26f2e29"],["/blogtags/文学编程/index.html","f90a8479be172818226b02ad9e137c08"],["/blogtags/文言文/index.html","44135d1728321681cfb0c4973581e99f"],["/blogtags/杂谈/index.html","3a2bb3909a8e43c7d58a3826d24fac84"],["/blogtags/概率论/index.html","7477e8fa39c0c74ceaa5d014d81bfe71"],["/blogtags/混沌/index.html","7b3306c86774d82b251b65ead34fab3a"],["/blogtags/科幻/index.html","e2bb48b9209d1ed71976b7a9b47ed8b0"],["/blogtags/科普/index.html","0f4bb79e18c75291c0baf2cf14ff92bb"],["/blogtags/程序设计/index.html","32bd2bb19a3af924983d2121f4824d1a"],["/blogtags/笔记/index.html","3adcb113e79572fd04d39c7aa5ef00cc"],["/blogtags/符号计算/index.html","012f13037e8420d4932dd9528d4e47bc"],["/blogtags/算法/index.html","eeda9a6e948e3b62c1cfde7246f8602e"],["/blogtags/红警/index.html","66e2b95f25388473deddc2fad161c0c0"],["/blogtags/编程/index.html","5fcfe5eea76b2630fb1aed403a93691d"],["/blogtags/编程/page/2/index.html","0fdfb6c7d63433591117cf697c83033f"],["/blogtags/编程/page/3/index.html","d7e7bbee17ec813632d0835fecbf2aef"],["/blogtags/翻译/index.html","2b23df0419f8f2662e6fec6c338664fe"],["/blogtags/语法/index.html","9211cbfa984c5f15034cef4a6da51758"],["/blogtags/踩坑/index.html","4cc3371a97c925ef5b3ded6ca226ede5"],["/blogtags/逻辑/index.html","ff3d6ecf2086025c290c78070e6c38dd"],["/blogtags/题解/index.html","8444c80c5296f4eb218d0f256827a88c"],["/blogtags/马克思主义/index.html","b41d89878cb8215a7bd057421fa0d8c7"]];
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







