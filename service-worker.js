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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","30a7b08b8956f2023d0628bbc9a5c72f"],["/blog2013/07/EdisonIn21Century/index.html","1fda2edc925457adfcd4fa8aad49db26"],["/blog2013/07/FenDou/index.html","1d38f2d3892ba39ee1016b979a7a1a25"],["/blog2013/07/Qie/index.html","e991075b919236a037fd673f1ef22852"],["/blog2013/07/RhapsodyOfSand/index.html","7810ad309cc9e0d27aa57c493902c04e"],["/blog2014/03/KTimesSum/index.html","85ebeff731ac7e12c2ca57d7a77f5476"],["/blog2014/04/PiPaXin/index.html","0149f69a36e173032bc21cbdc8f686b0"],["/blog2014/12/Miniascape/index.html","a18e2bb6b6955b4b62a24aeb471d248c"],["/blog2015/02/ShiBiao/index.html","5feeb0166c0281de0b6398bdb23d7f04"],["/blog2015/02/Wei/index.html","2617366f89dde185cb51335159b833ff"],["/blog2015/03/Stain/index.html","dd49d85c769d3850673b672813713925"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","f82c9b263480fe2acdc02ef5e5d9600c"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","ca5f47b746628a9f5418058d29401824"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","2994da7eb38cc9bac527f662bac07cea"],["/blog2015/06/BellPolynomial/index.html","56d038cd502ecf716b5db35820ae2be9"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","93bd205c64cffdbf3c035ead4c8764af"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","8e19d51cd996ccba3c318602f24472c8"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","63227ecad0c50016508e00d2bc5a6843"],["/blog2015/10/Tiberium/index.html","fd3e157d79698f7b886d3d33519f2845"],["/blog2015/12/ChengTianQuan-01/index.html","55442dfb68bdfc7683beff9d8c7eee99"],["/blog2015/12/PKTFile/index.html","1ab84205a61bad5bbe55ac61712d3c0a"],["/blog2016/02/ChengTianQuan-02/index.html","5309525232b787be3bf9124efdfd9cae"],["/blog2016/04/LogicAndExperience/index.html","d6d11db9d76f29f11ce85d8228029bd5"],["/blog2016/12/CSFFileFormat/index.html","b2c54a316c93c77cd9be3eea16da0b3a"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","46e9ac24b4aa4de0b5ca105756d655ed"],["/blog2016/12/ProveCRTWithConvolution/index.html","e578c55970bf1feea64cd11845b9ffa2"],["/blog2017/03/MIXFormat/index.html","69fb464ccd3662ba7f23960216768720"],["/blog2017/04/WesternPhilosopher/index.html","4ca1f741f36a024dd5fed0c25e923241"],["/blog2017/05/TheAlgebraOfADT-I/index.html","337fd7431145a8e237f756933a6195b1"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","cad0302a6f02ce21af9127ca6932c01d"],["/blog2017/07/TheAlgebraOfADT-II/index.html","4d679ce55a5ba06e6f52c25b7cd498c4"],["/blog2017/08/DnDTabWithQt/index.html","b1ce745d03283ffc89a2bd8adebd82f9"],["/blog2017/09/ClassBasedOOPWithMma/index.html","555649eb837b4e5f767c291d014ce85f"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","899bb125501cde3609f4d992bbf5a0c1"],["/blog2017/11/TrapInCCpp-1/index.html","0b7832560e68d17efeefcfd77d6ebc81"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","6d76114628eff93ee400cae616998742"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","e591328aa8dc467d8a6fba00cb6bb633"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","e672b805764f42c252f26227575fa732"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","63845ee1af7f9aecf636d0b1d3e046b2"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","2e27378b18f7baca3064eab6dd5313d4"],["/blog2018/10/PrintDefinitions/index.html","e593640fcf42971965ec9de08c94ea8d"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","eaa393756853d985794a3847db6424ec"],["/blog2018/12/WolframOnlineDemo/index.html","7a05c7d53ef1484f31a3fcff9d19a618"],["/blog2019/01/PointerInWolfram/index.html","596129aa8d558cf422e6ee59c7826d6f"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","6a6e65fdeca43b0a19553d16a2bdcc0c"],["/blog2019/01/SymbolSandbox/index.html","d9af544bf6d24f0f3182e93307f1a56f"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","901cb6cfe93d46dce81bfeb42a52c869"],["/blog2019/04/MmaAutoLiterature/index.html","bca7d6197c80ac2a1fb8eaa2c9a9ffb4"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","92ddee3cee9700ae0b36d05b1297e2ef"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","b369f64b48c7b6915c8054e1007d7634"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","1db0475c0b7e96ced00233f1e652733a"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","692848608ac88a52da1cf8ae93d25dcb"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","7b49656d676ab061b8b0fe7b6e116080"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","cc2536df7f5a7aebaa7df2d196fbbab4"],["/blog2019/10/SubmitFunctionToWFR/index.html","79386dbb76b827542427ff0633ef7d3f"],["/blog2019/11/TerminologyAndPopularScience/index.html","6fea51504944114264cf50f69389be37"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","77742399b505aea9cc7b14a361d8ff36"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","46658e66a85144fb356748071a91a392"],["/blog404.html","981cce2d7ca7817c79dc207a9d39cd9a"],["/blogabout/index.html","8312fadaa4a333e7249f3a72edc2f9ed"],["/blogarchives/2011/07/index.html","d1ea19d7a708264662eb38cd87fbb2fb"],["/blogarchives/2011/index.html","544cdcdff6a7bfa827ffafcf1d43ae1a"],["/blogarchives/2013/07/index.html","eabec1033bd70de9d627542d7cb9a456"],["/blogarchives/2013/index.html","c3fcb46372a5e5cc36dcfc0b248d74c3"],["/blogarchives/2014/03/index.html","52dd60234efc4cb04a05a30dfdbf298e"],["/blogarchives/2014/04/index.html","12167594add5733cab19bc3fdd7a611b"],["/blogarchives/2014/12/index.html","7acc476f95b395cba8fab21e1b23431e"],["/blogarchives/2014/index.html","d7f1ae9ab7bd5a406efd4abc50876cb4"],["/blogarchives/2015/02/index.html","9e53a0b1a5f1d732e6241a918c2ca9d0"],["/blogarchives/2015/03/index.html","03ee429fb1bda0201ebb2cac4ff9a7b3"],["/blogarchives/2015/04/index.html","da6b98804332fafe50f8312a331776c8"],["/blogarchives/2015/05/index.html","1c64b57ee2ab5e62554fff8a43083d8d"],["/blogarchives/2015/06/index.html","f5e74696d2096c77c1006f4511bcc643"],["/blogarchives/2015/07/index.html","7dbdc6ef81c7f4988af1a4acda5e3049"],["/blogarchives/2015/09/index.html","02c0a13916bf89fd791995d67ee993b1"],["/blogarchives/2015/10/index.html","ec08a44dedaa385f1db9c500dc7a49c9"],["/blogarchives/2015/12/index.html","e20bef7befa92c0de6b8000548f33c9d"],["/blogarchives/2015/index.html","d824c88be922d78396370b25901f1daa"],["/blogarchives/2015/page/2/index.html","0fb9ee46d7f4623e5154176e261e80d7"],["/blogarchives/2016/02/index.html","ea7f3d3754c8174eb5b4d759fcb0cee8"],["/blogarchives/2016/04/index.html","5024fbdc37fe9ae0650184a89c34b7ab"],["/blogarchives/2016/12/index.html","74ee3d7b344a9906cbcfb0d030ea23af"],["/blogarchives/2016/index.html","40f794ff55f735776632b09fb6893666"],["/blogarchives/2017/03/index.html","3d12e9a6d3c8aa2d540bec4692ac449b"],["/blogarchives/2017/04/index.html","f8742135c73a52c24f381f98b6559f2b"],["/blogarchives/2017/05/index.html","0519bacd98e33e1c84f7e765afaaab57"],["/blogarchives/2017/06/index.html","caa940442cc40a1afdbe53f7bf3b2894"],["/blogarchives/2017/07/index.html","eb181df7e5401778701dcc2a05d35210"],["/blogarchives/2017/08/index.html","e9c668f06d2025377160d84418116475"],["/blogarchives/2017/09/index.html","a803284ad6ff09412b5254f3d2d67b3c"],["/blogarchives/2017/10/index.html","7d5faec32f1dd78ae27d2be555bbbe81"],["/blogarchives/2017/11/index.html","c57295ee4d82e4c0736fec970b23f1a3"],["/blogarchives/2017/index.html","c03744465165fb3f8d71625aa3134503"],["/blogarchives/2018/05/index.html","5cc827e8dfaa9d41ee05cf01116d2e0a"],["/blogarchives/2018/06/index.html","8c09d6605c804377582df95042e7110f"],["/blogarchives/2018/08/index.html","5e378b0fa52c15d12048125f0a6648b8"],["/blogarchives/2018/10/index.html","d1269730688286337827faec9c9857bd"],["/blogarchives/2018/11/index.html","2d441853cb919f9e16d66c49032ce255"],["/blogarchives/2018/12/index.html","2ccc02305617dc901b7327c7fd7f18f7"],["/blogarchives/2018/index.html","c52bf75a3c023bab58f7abf44d217e33"],["/blogarchives/2019/01/index.html","edc65d3253e8cd797833fb6ace11b94d"],["/blogarchives/2019/02/index.html","8466d4587bc932829f54d600395b9d79"],["/blogarchives/2019/04/index.html","267631b6ebd742cb504bf612f48a6173"],["/blogarchives/2019/05/index.html","ea3a07e192380e7490287aab056a28ce"],["/blogarchives/2019/07/index.html","0f6b4f5f858dc59b01dfb8e129842b43"],["/blogarchives/2019/09/index.html","47e7525226781fe18f9b21f06fe46459"],["/blogarchives/2019/10/index.html","cae66d6520a9c5f15ce0d64f162580ee"],["/blogarchives/2019/11/index.html","b2d3f5bcb3b449b9c98a2c639407a5d7"],["/blogarchives/2019/12/index.html","3b4d8ad519e2a9efd86cb40b5c153e04"],["/blogarchives/2019/index.html","debefdaf8478b4b25969a8506614a9d2"],["/blogarchives/2019/page/2/index.html","cb5a61f7d884a4c35004a143650a5764"],["/blogarchives/2020/01/index.html","b933c62ba3ffb06d057453eca4be4eaf"],["/blogarchives/2020/index.html","c4aeb656ca06172b320930b71ee318c2"],["/blogarchives/index.html","2845a6b4662df915e078329de4ed1e9f"],["/blogarchives/page/2/index.html","2845a6b4662df915e078329de4ed1e9f"],["/blogarchives/page/3/index.html","2845a6b4662df915e078329de4ed1e9f"],["/blogarchives/page/4/index.html","2845a6b4662df915e078329de4ed1e9f"],["/blogarchives/page/5/index.html","2845a6b4662df915e078329de4ed1e9f"],["/blogarchives/page/6/index.html","2845a6b4662df915e078329de4ed1e9f"],["/blogcategories/index.html","40289145518f0275249317325c0ec293"],["/blogcategories/代码编程/index.html","9e98a8d7a99e78b0f875f461c89f41e3"],["/blogcategories/代码编程/page/2/index.html","c1ef9b6e972a3cb95748de925403fa91"],["/blogcategories/代码编程/page/3/index.html","4500041fc955cf327c2a1cf1e2d4f42d"],["/blogcategories/代码编程/page/4/index.html","85857d0fe47d0cf02c99510b9c8f252e"],["/blogcategories/小说文艺/index.html","f04444590c96a85a7439d84dc1d963a8"],["/blogcategories/小说文艺/page/2/index.html","214c0d5d6f5faab9805d978e09400cfc"],["/blogcategories/数理科学/index.html","fa5d39c0db0d3d3369c40aea8a8491d6"],["/blogcategories/杂谈散记/index.html","a6e8a27c1a7f6e7807eca53aea2ebb88"],["/blogcategories/翻译作品/index.html","3c1600b5c0c64f54e6daf028036c19e9"],["/blogcss/style.css","ef73014f565a54395880554d20b95308"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","848afccb5f4e374b659957b552269bc8"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","97e726373d9cdcae687926b088d63f7f"],["/blogjs/app.js","ad4268ee366f668d3f682c29c5ba0aed"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["/blogpage/2/index.html","f2ce1f8eac2f1716350e1d11e19f2193"],["/blogpage/3/index.html","4661924249d85acd193f0d7ceb72fcd1"],["/blogpage/4/index.html","b9eac1b8ed29f4797e872ba56eca8206"],["/blogpage/5/index.html","f4df079cd4912e829b08598e735f9fb7"],["/blogpage/6/index.html","c05dde30ad643d126dd05f64b5225467"],["/blogtags/C/index.html","cd698b85a882293627849bc8fc696722"],["/blogtags/C语言/index.html","6fc4a6601fb1d55b9c5365022bc44c48"],["/blogtags/Git/index.html","77fa2f68d1aaff711d29d56c87b686a9"],["/blogtags/GitHub/index.html","b82e664831aab407cc3122cd789478d0"],["/blogtags/Haskell/index.html","1a607524d785e39bdb9c61f99ee90481"],["/blogtags/LaTeX/index.html","5564bd8caf7e84dff1c09b2c5e576f46"],["/blogtags/Qt/index.html","1ca8f02973025c2d92bb5f4e462edcc9"],["/blogtags/Undocumented/index.html","0a21e779c70abf43a0e08ab8cf3f349f"],["/blogtags/Web/index.html","41f15f6041e27cbe87724a26331b3e2d"],["/blogtags/Wiki/index.html","7902006626b97fb8c67a6532859940a4"],["/blogtags/Wolfram/index.html","8eb3870e4824e46b1522e5bbab494583"],["/blogtags/Wolfram/page/2/index.html","108057fca6ec268977d54d93fb5dbc0b"],["/blogtags/index.html","fd92852427653bf6ff666b3a28dde405"],["/blogtags/作文/index.html","1e7acf822b500b8ad5e365ec0e8d224b"],["/blogtags/作文/page/2/index.html","2d5787cf5741eafb9cbf0150db398347"],["/blogtags/傅里叶变换/index.html","67deeeb1432fbf92ed278fcf6376e145"],["/blogtags/功能模拟/index.html","5f710b2078723d1a1c6de7487dbd04d3"],["/blogtags/参考/index.html","16823bc5685b7fbad5140094265b8bf9"],["/blogtags/哲学/index.html","dcbbed5744f9a6f153e7080a9b27b5bf"],["/blogtags/图像加密/index.html","eb5ae81662ea182682a894a040786654"],["/blogtags/图像处理/index.html","09a9137f76626172362f643f17bfe097"],["/blogtags/小说/index.html","563449469de2321293e0bcb79c9c9803"],["/blogtags/微积分/index.html","d1605d32e9356fd046e301cb5dd840e3"],["/blogtags/拖放/index.html","1993eadb6ab15edc536941bf3fbdf12a"],["/blogtags/持续集成/index.html","e88dbd2c5d8d8608d7f77327864a49fa"],["/blogtags/散记/index.html","5c6d89a85cef5052124e27473d4fe661"],["/blogtags/数列/index.html","598b26011bcfaed1382337c5d91b1b36"],["/blogtags/数学/index.html","b97ae309c3f39cf78c55c86b5ccf1907"],["/blogtags/文件格式/index.html","586493f15fba7d245d8937caf1415e45"],["/blogtags/文学编程/index.html","9a70d9d09eff50f223e1148955684b25"],["/blogtags/文言文/index.html","13fc2a708c9939f0ec3b89befbdc9453"],["/blogtags/杂谈/index.html","d5d21f1e00347e08e5a59408d9ca2847"],["/blogtags/概率论/index.html","dc1129cae18894a0b660622e612fd499"],["/blogtags/混沌/index.html","8e8ca8b0727994b56264ac3bc82cdd45"],["/blogtags/科幻/index.html","c3a116dbd1c21c9852ede5b2ee33c24d"],["/blogtags/科普/index.html","8a224d72eb75bba808782bb9eb95f3c5"],["/blogtags/程序设计/index.html","c1d35dd898481f6f6df155f32eb5080d"],["/blogtags/笔记/index.html","b54ab9ba2064fd8bd0220b4169039f9b"],["/blogtags/符号计算/index.html","32ace1c860f7bc6d61e1fb50d4b49c0d"],["/blogtags/算法/index.html","1b6a7a2f5d1405755bbf06a08ddd3df4"],["/blogtags/红警/index.html","51c5c09c6305252a0b22469a834cb27b"],["/blogtags/编程/index.html","878736e74be29cafa30e5f6a9a507295"],["/blogtags/编程/page/2/index.html","02789f6bbde69a6a0a95b00b91f18c62"],["/blogtags/翻译/index.html","c0b68a5390db2258b7a7a12dc85265fb"],["/blogtags/语法/index.html","c3f5429ba95e5a4908938d15974a257f"],["/blogtags/踩坑/index.html","01c668d3b3d2467a8b98eaa4fc5a039e"],["/blogtags/逻辑/index.html","bdde0aa85ba1cf21650bf20a3e6c1af1"],["/blogtags/题解/index.html","f9e2f334e6d4eaea84d931542e5249ec"],["/blogtags/马克思主义/index.html","ed811d850eeb1f0457aafff01ea9e741"]];
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







