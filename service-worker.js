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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","b0de1e1fd730b7cc6e8d9f903e896954"],["/blog2013/07/EdisonIn21Century/index.html","a6be7a1a853aa208384cf9f215e51fd2"],["/blog2013/07/FenDou/index.html","13fcb8c62a86ea0f0c5210535fb696d4"],["/blog2013/07/Qie/index.html","4f02020b691170a7bf67fab876a7df17"],["/blog2013/07/RhapsodyOfSand/index.html","e037732749a0644cc02b40f57909af9b"],["/blog2014/03/KTimesSum/index.html","4b6548aad757e75d283479793a847c28"],["/blog2014/04/PiPaXin/index.html","8d4bdf0d45c37d212792ab7b402f80d2"],["/blog2014/12/Miniascape/index.html","9ec8099aefc8606467ffc6a392ae55ff"],["/blog2015/02/ShiBiao/index.html","cea964170b24be6798d8b0bb9a4f1651"],["/blog2015/02/Wei/index.html","9a443831e3946fc2ae96b828c7329500"],["/blog2015/03/Stain/index.html","c65308150dea95f4b6ad7f5974310b34"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","b23edbb03f3315b97e8dd0a2d0592661"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","81558e0f989b56863c3f4eefbea98714"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","5131bb0d1c1e5daff2aaa996f8d9008b"],["/blog2015/06/BellPolynomial/index.html","bcc0f11b64748524ba950f60c94bdb4a"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","046bfa427706c8bb225ce6f22e392552"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","7ad02d1452848320076ae90d60d47b23"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","9948e422da697277e790aed0b1d68bb7"],["/blog2015/10/Tiberium/index.html","5d6c1c7fdeb66e9d10bd1ebe1a8c9519"],["/blog2015/12/ChengTianQuan-01/index.html","b20bd27570862d2715c2868c41e6e6b6"],["/blog2015/12/PKTFile/index.html","534951151783987b86ce3e2d699044c8"],["/blog2016/02/ChengTianQuan-02/index.html","710061558465dc9f686e98b309dd8c00"],["/blog2016/04/LogicAndExperience/index.html","14f72a9fd39572d40e27cbf93d85a780"],["/blog2016/12/CSFFileFormat/index.html","6cb9e40d8df621dbbbc8adf809324273"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","a73b1c38f883bd9ef7fd7d48a0ec3c62"],["/blog2016/12/ProveCRTWithConvolution/index.html","3b522f0ce9e80f465e6a1f1bc5c07caa"],["/blog2017/03/MIXFormat/index.html","7b459c993808e3c01a90bb7a2ad20a4a"],["/blog2017/04/WesternPhilosopher/index.html","563813f93c060760a8fb9a6f3af1eb8f"],["/blog2017/05/TheAlgebraOfADT-I/index.html","6dfc683af407fc6ff3fe84e6df65a7ef"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","eebfcf0c96a37aa125748bb3dc9c3fc4"],["/blog2017/07/TheAlgebraOfADT-II/index.html","4e136fedb7dcf7790c9dd973ef38a1ab"],["/blog2017/08/DnDTabWithQt/index.html","307e55a61e7831493a441b021c1ae6a1"],["/blog2017/09/ClassBasedOOPWithMma/index.html","bc964b5dcacbf7f1d00afd9b678d52ed"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","31b8981be3bbf2ecd3a9727a592c3906"],["/blog2017/11/TrapInCCpp-1/index.html","547fa21ec18a18265a69fc41f23bbb80"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","af87d811d48fcc3d7104770d6e81c1ba"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","519b54dbca4204b840927707ed4c51d5"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","fcbd0cfce3ccb6842ffae70a3739bb88"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","17f78eced2af4cb7440e18292c1c2e29"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","c59a5f86c33a82621e28417c7fa128a2"],["/blog2018/10/PrintDefinitions/index.html","c94d8a3138f3dfcfd4873324b1a673fe"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","7d164d648615e96b4593389161a7c2fd"],["/blog2018/12/WolframOnlineDemo/index.html","7671f20a26eb24a4b99958c38d9cb2c2"],["/blog2019/01/PointerInWolfram/index.html","727a0822f33cf1c6b26c416db260d592"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","2d19753a8a63d403df3af03e3338414d"],["/blog2019/01/SymbolSandbox/index.html","de5ed82fef1e3274dc3d9766c1498c60"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","572eb29538c41a06381713c3c3aa35cd"],["/blog2019/04/MmaAutoLiterature/index.html","035832709b1932f14e37422d4cdbee87"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","002e81680240074c51c8382033fde014"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","c78aee07016407f4caf58052094dbd75"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","01b9841a970c99846bafe503d9943581"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","b54b7af57cfd5135494ec19d7805aad9"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","a9584883cfdaa6e17c67f719806c6323"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","e3b14d25794655a733246ee61d3401d6"],["/blog2019/10/SubmitFunctionToWFR/index.html","da01f49011fab78748ff8b2b7189a9b0"],["/blog2019/11/TerminologyAndPopularScience/index.html","f6538e2d417f010d4b26194d62df6546"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","1b2bcae32f174904e30b826d535f17c6"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","5fbdba7264e6a8029e0e620235a6c695"],["/blog404.html","e4da099d01f9bb77376861c43425ca5a"],["/blogabout/index.html","81dba17b2c475b3d9ff9a3740a2b08a4"],["/blogarchives/2011/07/index.html","499392352e8e552bb8eeb21fbe736405"],["/blogarchives/2011/index.html","70bfa860d2d600040f0177ae84b644a0"],["/blogarchives/2013/07/index.html","41a4b48769ac1f0fe7e005af09ae6c6c"],["/blogarchives/2013/index.html","80dc916b7d7eddfa0d310f607d7e4851"],["/blogarchives/2014/03/index.html","4fbb1e67c365d492294d697d529cb4a0"],["/blogarchives/2014/04/index.html","aae5d6f402b9d4d7dc3a5ada242bba5a"],["/blogarchives/2014/12/index.html","cd63d4f1ca01c5a3083ec8bf079df526"],["/blogarchives/2014/index.html","50afae02525c6d19df508e3bf142edd7"],["/blogarchives/2015/02/index.html","9666cadfa6b910f3490be5abca81a548"],["/blogarchives/2015/03/index.html","06e6c9e828944ca6c5670b05c6db6ee9"],["/blogarchives/2015/04/index.html","e7a404f6b13b065e6aec69230dc01696"],["/blogarchives/2015/05/index.html","cd039c3a55ddc0626ea3ec9172116cf6"],["/blogarchives/2015/06/index.html","3632718fb8ac149c9a00ad5b8f5b14aa"],["/blogarchives/2015/07/index.html","6b1074f46ee5c9d69fa985973487068e"],["/blogarchives/2015/09/index.html","e537828c934a7af63300b2e860553ae6"],["/blogarchives/2015/10/index.html","5cc2ecc82b7870b17aa91d77fffab127"],["/blogarchives/2015/12/index.html","17a2444e8763aa541b5f31ab7c7f417e"],["/blogarchives/2015/index.html","dfa7c0dc14c8b01328b44d593691f2fd"],["/blogarchives/2015/page/2/index.html","564db707f5a457986fb0edb7be2edac0"],["/blogarchives/2016/02/index.html","3fdfdb8701d8d4b77edcb4f6afd54e45"],["/blogarchives/2016/04/index.html","ffb5cc3b58779ffed0520973f58ccfc3"],["/blogarchives/2016/12/index.html","f3185ed6192185a1cb790689d5434cf4"],["/blogarchives/2016/index.html","db644c0ec264f0202023b45ee3d4c287"],["/blogarchives/2017/03/index.html","b3c58793c4a8a843ae587e58696ddb42"],["/blogarchives/2017/04/index.html","572af2370d33b163f7d01ad722e0223f"],["/blogarchives/2017/05/index.html","f536357838c050f1a0c3e0059cac290f"],["/blogarchives/2017/06/index.html","e72a49b64b158ea1fbd221a390561158"],["/blogarchives/2017/07/index.html","f67ac0817a6ad98fa96d7f6a704886a1"],["/blogarchives/2017/08/index.html","21b0a68d9d93e8dfd40243155b152411"],["/blogarchives/2017/09/index.html","a6e0696f57240d7d0810dea5efcd4f6e"],["/blogarchives/2017/10/index.html","c3184a02d7f330e4395285f851bb7d9c"],["/blogarchives/2017/11/index.html","5708c5253c123326d708403df994fad1"],["/blogarchives/2017/index.html","0bed1f5619e6d7df1bf5cc87a0a037ec"],["/blogarchives/2018/05/index.html","6aff530d5b150173348aee5e54713e33"],["/blogarchives/2018/06/index.html","c66baaeada19fd11c2f2644c1c9de577"],["/blogarchives/2018/08/index.html","f97d41c2f62f53edb8aaa90a2d58b4ca"],["/blogarchives/2018/10/index.html","7907ad4046d68a9535096e6a6456abcb"],["/blogarchives/2018/11/index.html","88fac60142f5937af525a36e72186339"],["/blogarchives/2018/12/index.html","7d4e175a7f0322ff76068661d92cb793"],["/blogarchives/2018/index.html","f3248d048c08e0d2e78af8adaadd5640"],["/blogarchives/2019/01/index.html","9570c8459b4c5baf60d95b435f29415e"],["/blogarchives/2019/02/index.html","03732461fa4c197fc9e8db2f55d70429"],["/blogarchives/2019/04/index.html","dfb94c7bc04634757ea0a4b1e3ca840c"],["/blogarchives/2019/05/index.html","87c045bc56096caf2afd31414ab11539"],["/blogarchives/2019/07/index.html","1164a0a81335af0dbfd34a726e54c505"],["/blogarchives/2019/09/index.html","a5e0b2e6c56df35cf82245325ba92b70"],["/blogarchives/2019/10/index.html","107f2351d5fd76c1b7ea2ab32be10282"],["/blogarchives/2019/11/index.html","7f172d8d17670a8ed3e7b9125f629bfb"],["/blogarchives/2019/12/index.html","845a1a5f2ce0a9e0b719b195a83a7ca8"],["/blogarchives/2019/index.html","6052332899f6c0355ee5a6763df8a582"],["/blogarchives/2019/page/2/index.html","39e93a358f006d0c337fbaa727d3f7e8"],["/blogarchives/2020/01/index.html","2faa27bde1d9bd3cec06d367c0d84a62"],["/blogarchives/2020/index.html","f14b9f250d03f8aaffb7bc9ea724053d"],["/blogarchives/index.html","caa1edc2db71288acc61bd4d342c8843"],["/blogarchives/page/2/index.html","caa1edc2db71288acc61bd4d342c8843"],["/blogarchives/page/3/index.html","caa1edc2db71288acc61bd4d342c8843"],["/blogarchives/page/4/index.html","caa1edc2db71288acc61bd4d342c8843"],["/blogarchives/page/5/index.html","caa1edc2db71288acc61bd4d342c8843"],["/blogarchives/page/6/index.html","caa1edc2db71288acc61bd4d342c8843"],["/blogcategories/index.html","a92a353920a54c1bd7e144e460b00d0d"],["/blogcategories/代码编程/index.html","096a8b549b24c8091ccaed2db8b82547"],["/blogcategories/代码编程/page/2/index.html","3e5fbd2ef182360fd3e099125c0eeb17"],["/blogcategories/代码编程/page/3/index.html","5633ee9c2aff8b46061282d31f5f82e5"],["/blogcategories/代码编程/page/4/index.html","6d7f6f667bb733f53ea827ff10e95fc8"],["/blogcategories/小说文艺/index.html","437fbbe4a661a01cff91771140045f56"],["/blogcategories/小说文艺/page/2/index.html","0898415f1a94a6a426fcb1891b3e37c3"],["/blogcategories/数理科学/index.html","0090951b3f723d13fedd9a7ece737124"],["/blogcategories/杂谈散记/index.html","a9d3f7bfc8eb10ab8e3f7724600cc07b"],["/blogcategories/翻译作品/index.html","6eb6e47249e1c233eb8a9dd1118d781e"],["/blogcss/style.css","ef73014f565a54395880554d20b95308"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","1c8856358de1958f4ac6e8dd234347f1"],["/blogimages/404.png","39ef3aeebb5565d65e5ad9a628779954"],["/blogimages/Copyright_CC.png","f713aa1d0f02195c93815adb88bd529e"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/background-cover.jpg","f71f69f3445014dc2047215635dd4d50"],["/blogimages/calendar.png","73d2dd5be4a5451ebe0a1c6487b477a2"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimages/tag-icon.svg","bf3d47eafc57a7c0191e73520a0c0cec"],["/blogimg/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","712013677be7fbc5c15f6406e5dba670"],["/blogjs/app.js","ad4268ee366f668d3f682c29c5ba0aed"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["/blogpage/2/index.html","16c157b444635034ba75c29e638bc70c"],["/blogpage/3/index.html","54498b5cf4abd86fb15bfecb653d296d"],["/blogpage/4/index.html","0b4fd7fc6230436e323c9f529ca6b7a3"],["/blogpage/5/index.html","4b71b6b1d6deb7ae358fad305b3203b1"],["/blogpage/6/index.html","80fbb24d2ed59734692d50387f387371"],["/blogtags/C/index.html","a2eb5807688e4d2320d0d30c0de64bd4"],["/blogtags/C语言/index.html","888342565dc6f7b99702fc410362056b"],["/blogtags/Git/index.html","9460e081b96e38be4f9f7e192bc70b6e"],["/blogtags/GitHub/index.html","aeb5671acb778ba9e0dd7f9e901189d0"],["/blogtags/Haskell/index.html","459113fb4acdc5b6b43e39b9addf1b29"],["/blogtags/LaTeX/index.html","da8a4c5c43cacf85eca0e1161614bf5e"],["/blogtags/Qt/index.html","8a61be5ad0841b7d908abaf55699869d"],["/blogtags/Undocumented/index.html","95823791a8eca4213ac24fbba01a77cf"],["/blogtags/Web/index.html","e408859c3138fb52537b8b87a895f692"],["/blogtags/Wiki/index.html","4d05beb170dc760f31caf87188077163"],["/blogtags/Wolfram/index.html","377f4a3069f4e8643f6aaa46307ed5ee"],["/blogtags/Wolfram/page/2/index.html","f653303a10c8e435c5adbfd3eb332f24"],["/blogtags/index.html","ccb7ec3a86bcfb27ea7e40e61d40a7c9"],["/blogtags/作文/index.html","e2cbafe4f7afee4c21e4f51f28218a8c"],["/blogtags/作文/page/2/index.html","37c03eaf404dc5fdac2ed102f57cbeb2"],["/blogtags/傅里叶变换/index.html","3e0c25cf49b458fc89437b59c3ba70f4"],["/blogtags/功能模拟/index.html","2a0e3ecb6cadd0c8d4c7ef19deb37c22"],["/blogtags/参考/index.html","ef00f61bd699b83e3e151c046fd8b948"],["/blogtags/哲学/index.html","ee9a831dfbd874567f7424b64057a03a"],["/blogtags/图像加密/index.html","b2f5600d88ffcd7d6ea9108f955140ec"],["/blogtags/图像处理/index.html","cb022712ac3868c5979d5d10ca513b03"],["/blogtags/小说/index.html","5a8d51321b1c27716f5976ddbfb4d55e"],["/blogtags/微积分/index.html","db4f01a603f35215951b75857f3e73f7"],["/blogtags/拖放/index.html","0ae5a11f2b9fff1c7fc40bcae47cdcdc"],["/blogtags/持续集成/index.html","57b4db78b35dd979189face51ba002d3"],["/blogtags/散记/index.html","5353e4dddb4d073b0c65f314b0e4286b"],["/blogtags/数列/index.html","01ddc7a7d387d623257f5228a899e672"],["/blogtags/数学/index.html","6e363113aadc0ed82bf0d4301f482e6d"],["/blogtags/文件格式/index.html","06ead1e9574eec4ae4f7acdbf202dd91"],["/blogtags/文学编程/index.html","3d6bc951c6d67cc82a2a4f74d3e06e41"],["/blogtags/文言文/index.html","bc063a78b845262cb8e04c9cd003df02"],["/blogtags/杂谈/index.html","e34018c5b25d6917b8d67f73b3d5d6a3"],["/blogtags/概率论/index.html","d93e7e82bed03c57486eb989aaea83b8"],["/blogtags/混沌/index.html","292752bcd8f65e24df6d0347cdbf797a"],["/blogtags/科幻/index.html","52762db76c665b1f5130c74ad37d0379"],["/blogtags/科普/index.html","f554915a8aa613f2dd686be9883483a9"],["/blogtags/程序设计/index.html","c499e73227bbfbd385f04587f16486a5"],["/blogtags/笔记/index.html","6a0d3628db1a0fea6df2a06a905fd84d"],["/blogtags/符号计算/index.html","6b27213732ef66e194f632901dc57a2e"],["/blogtags/算法/index.html","23b4b4b1c94948ef6e68304e7568e541"],["/blogtags/红警/index.html","5537ef8dc648eea9266cf1e852944f59"],["/blogtags/编程/index.html","88015cdad754671ff17c4b092b88ba15"],["/blogtags/编程/page/2/index.html","31d190fb49e72754c9a1cb7fc4af8411"],["/blogtags/翻译/index.html","008c0bff31c64fd97e1a57b747e26183"],["/blogtags/语法/index.html","f2d9f921802083783d33451fc17a0cea"],["/blogtags/踩坑/index.html","3b385f2f559de4541ca2879e2084819e"],["/blogtags/逻辑/index.html","e6ddf6df0e8eaca76c47287f23e84da3"],["/blogtags/题解/index.html","b128cf3586355d4062b9bed35f9593f2"],["/blogtags/马克思主义/index.html","05d415b2dc0aef4d921613236d009ad5"]];
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







