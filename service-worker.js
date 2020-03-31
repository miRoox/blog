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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","5f2c29a30f80902ee253719d5ae68ed6"],["/blog2013/07/EdisonIn21Century/index.html","e594716cd7856898c834b769cfc041cb"],["/blog2013/07/FenDou/index.html","e7e91f28227d7dfdc6d2e3dd68905b93"],["/blog2013/07/Qie/index.html","84078816b468da8a205c9d8036d79fe5"],["/blog2013/07/RhapsodyOfSand/index.html","5539e57b871ea9bfc291d72c18d1d333"],["/blog2014/03/KTimesSum/index.html","d20adc751bebbaf2dfd81ebe5f09119e"],["/blog2014/04/PiPaXin/index.html","527912b35ad837f29280ea40423fd014"],["/blog2014/12/Miniascape/index.html","050a85e0c7bbe4a7efc2b128ce9dfc0f"],["/blog2015/02/ShiBiao/index.html","702b6e21c91e225653993992a4408601"],["/blog2015/02/Wei/index.html","684caeaade5d29a81a5f2f366ca79907"],["/blog2015/03/Stain/index.html","b87e47186f9bc313e5d1118bffd5c0bb"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","e0ae0026644eba04fc5115910d9958a3"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","853a52c78c85586b5173e92fd8d61aa2"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","47c0b213b6bb7b92b3fd05e98b7b0805"],["/blog2015/06/BellPolynomial/index.html","8fa2b54a4bd133c6f4adfcf6571f7a01"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","e67fef11f0e6708817a3c14a19857444"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","459b65aa7ef689f1f35bd2e8cf3a7544"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","a5ba032406de2e2f913fc6d2fd3dc58b"],["/blog2015/10/Tiberium/index.html","e0f0146c6ee2f831f1137adeaaaaf3b2"],["/blog2015/12/ChengTianQuan-01/index.html","b066a96377a06ef07e6cb1652577c29b"],["/blog2015/12/PKTFile/index.html","5038280b8ac015c6eab14dde66a0f0d8"],["/blog2016/02/ChengTianQuan-02/index.html","833430d8000e2d43f86bc15dd3ebdb0d"],["/blog2016/04/LogicAndExperience/index.html","a2f75a939ccc80de904ade27232dd27f"],["/blog2016/12/CSFFileFormat/index.html","6f5994790b053c59ad4b9d03ac79b83d"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","db808145666f772e8f1f0eaa60b94152"],["/blog2016/12/ProveCRTWithConvolution/index.html","1ab35d99d2f5f9603d3ff453aa0c82e5"],["/blog2017/03/MIXFormat/index.html","0204073fb5fa3cf18e0834830081b663"],["/blog2017/04/WesternPhilosopher/index.html","f98beba2084dd6a3a27b2f2d78adffd0"],["/blog2017/05/TheAlgebraOfADT-I/index.html","724d0bb20abcaf66bcc116bde3d90bb9"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","a9e8c054d08a368053b604743d3d2600"],["/blog2017/07/TheAlgebraOfADT-II/index.html","a74a33492ac92199f71946a9eca312c9"],["/blog2017/08/DnDTabWithQt/index.html","3a5a568bd0b0062d6f27235a4d102e42"],["/blog2017/09/ClassBasedOOPWithMma/index.html","7f0f075d3628d0e000037689dbf26101"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","1ed28254bbb8014fd9022d5f332a5c59"],["/blog2017/11/TrapInCCpp-1/index.html","f272cbc0d08124e92f32eaeca5f593ab"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","c7c8acd6b2ec653cf94065f690577710"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","dd84fa40e7451a326bf7e7bd79613a19"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","96be50590b3b8b2f6d33a95c77faa7ef"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","9231b17af12c748b656b103e5cb43cee"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","e07748eac137c37d044c8eb49da455e9"],["/blog2018/10/PrintDefinitions/index.html","13136e1089fd9be99aab679b3497d662"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","e25c63c646ada84a8f969cb8581dc971"],["/blog2018/12/WolframOnlineDemo/index.html","9d65dc50b0e6ca7aa57b85f1842070cb"],["/blog2019/01/PointerInWolfram/index.html","5bd7a92f626e54bf62b3612211e295a0"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","0285cdc84abcad41856bab96406b5bf7"],["/blog2019/01/SymbolSandbox/index.html","7904f6e01407d0dd11e4469f77750f33"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","7fc42c871aca63d3d3c6e95689dc5676"],["/blog2019/04/MmaAutoLiterature/index.html","b6b4b65cdc496669f2a7f8940c9b703c"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","e46a8d42b7eeda0d67549af6c771fdbb"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","1d9a7607a68ffb220f885f0a7bfd143c"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","e0991bdbb3dd37abc840f866c048ddb3"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","a9ef497eba7432d10015ee5514cd755e"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","f07d9e636be10552bddb1efcd29f3f6b"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","7bc072af4a40b81c1dc2596f339f3edf"],["/blog2019/10/SubmitFunctionToWFR/index.html","c5e58f2f172168c57c6e40b04389c3cc"],["/blog2019/11/TerminologyAndPopularScience/index.html","372e93946838abbbb9416d9c75adc169"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","79205502f4e5666b390d7f8dddb2b51e"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","5615afd7a1d2ab1ebc8e5b9aa6abb6ce"],["/blog404.html","81fbf301951300c9bf36596228ccc76c"],["/blogabout/index.html","b82444f51f04f4d46d26a7140568c1bf"],["/blogarchives/2011/07/index.html","fc7492ae798f0709dc5eebaeedc5c455"],["/blogarchives/2011/index.html","c1d08cce1366b6a31f36b2468d11c9c9"],["/blogarchives/2013/07/index.html","ece5e69a2116f8a2778b0004de000a4b"],["/blogarchives/2013/index.html","bf80b88840dbf572d4652f479648abf2"],["/blogarchives/2014/03/index.html","7be678defab558595d97d2284b88e950"],["/blogarchives/2014/04/index.html","52b28ba820c13df036b11cbc68b1b93f"],["/blogarchives/2014/12/index.html","575001148592673c7ae43d0f43e025d0"],["/blogarchives/2014/index.html","b6c5c3f82a3ea54cead9d8f6ffb0225f"],["/blogarchives/2015/02/index.html","182f03993655943c9ce41c2db440431d"],["/blogarchives/2015/03/index.html","9e38d69ba11971405a46611a643bba6a"],["/blogarchives/2015/04/index.html","445821724199badbadeab59413c5687d"],["/blogarchives/2015/05/index.html","88a6e4f9f94a580af2d5097482cb9856"],["/blogarchives/2015/06/index.html","5845a0e20584116caf78e7ecdf39bdd2"],["/blogarchives/2015/07/index.html","d43382e89efc3a3bd4f6fa69bc41a0ba"],["/blogarchives/2015/09/index.html","e77d1298aa5578888fdd55a17f130ab3"],["/blogarchives/2015/10/index.html","1944317082d57f3ce00f5db3fdaacce5"],["/blogarchives/2015/12/index.html","6219dfa65d540036d3c14b79c10e7cda"],["/blogarchives/2015/index.html","c0f4341df4ae8dd0ff36aff2c4851485"],["/blogarchives/2015/page/2/index.html","1f1a1551f4f336c6f7bbf06cf566d949"],["/blogarchives/2016/02/index.html","4aac903585c3c2b1bdcf4fbb79f91dbd"],["/blogarchives/2016/04/index.html","b6eb7adadd87966a2fbdbb9f8eece6bd"],["/blogarchives/2016/12/index.html","e5b32ec4e51405b930fdaccdb0ecaabe"],["/blogarchives/2016/index.html","62c935874a4082433cf96781807a4017"],["/blogarchives/2017/03/index.html","0193dbee6e7e6b1b6ddb1d830738fc3f"],["/blogarchives/2017/04/index.html","a69cb8e39918f20bc5e817a93e420e1b"],["/blogarchives/2017/05/index.html","ce156c9ebf88821964c89fedccb5fa9c"],["/blogarchives/2017/06/index.html","de65012e0ad1799a10156dc8aa799efc"],["/blogarchives/2017/07/index.html","be2dc67272470fefc21002f899bc0f28"],["/blogarchives/2017/08/index.html","8658316e388c0c9aff73b50a59130360"],["/blogarchives/2017/09/index.html","40ca9e98d4316266fdcdde16f949a648"],["/blogarchives/2017/10/index.html","05176df6598f6843a6876892739f86ac"],["/blogarchives/2017/11/index.html","1605c7f299574b91ba7e44807f133ff1"],["/blogarchives/2017/index.html","184b4160fe5d0eaa345f916f5a6747fb"],["/blogarchives/2018/05/index.html","cb1d0669e7350e41400a97f216cb6f94"],["/blogarchives/2018/06/index.html","1ac5337c07828fb1335bb24dad2735c6"],["/blogarchives/2018/08/index.html","4916de302ceb1ccac21ced539138d726"],["/blogarchives/2018/10/index.html","ae55dfe734b74ba3338cf87920e9e181"],["/blogarchives/2018/11/index.html","acdf37f2b921254a9c35c05bccf2bf1f"],["/blogarchives/2018/12/index.html","5368969da2636d6b82d62b010a1bf9f2"],["/blogarchives/2018/index.html","db470156d8bd99c1f98cbec0e192fc87"],["/blogarchives/2019/01/index.html","89c890d794fba848d2d3ff8743d488ab"],["/blogarchives/2019/02/index.html","58b9ae8dc7961c9334692e93142f9b8f"],["/blogarchives/2019/04/index.html","a8ab45817a6333cb3dc623c1ac13111b"],["/blogarchives/2019/05/index.html","9b7fdc014de92c5edadea3104e3b608d"],["/blogarchives/2019/07/index.html","77d28eebd82ea0b9c9e4fef011eba014"],["/blogarchives/2019/09/index.html","d34d7363ad118d85f2014e6fb54902b0"],["/blogarchives/2019/10/index.html","69d708340edc9a74883ddd434bd378b0"],["/blogarchives/2019/11/index.html","012dc6088bfcde1500f708a778b6587b"],["/blogarchives/2019/12/index.html","120eb9cae20de8350a0bffbd5716c1e1"],["/blogarchives/2019/index.html","efc20c9d3636a2b4d9cbc5db956a7d5b"],["/blogarchives/2019/page/2/index.html","a07eeaf6e7a9717aef7b0121842be3bb"],["/blogarchives/2020/01/index.html","1a2fb11f87e95b7f92b101de9c259ca2"],["/blogarchives/2020/index.html","17ad06fe6a91576dcb78db4c8fef6695"],["/blogarchives/index.html","11e3c2b4548205c9b575b235957fd81f"],["/blogarchives/page/2/index.html","11e3c2b4548205c9b575b235957fd81f"],["/blogarchives/page/3/index.html","11e3c2b4548205c9b575b235957fd81f"],["/blogarchives/page/4/index.html","11e3c2b4548205c9b575b235957fd81f"],["/blogarchives/page/5/index.html","11e3c2b4548205c9b575b235957fd81f"],["/blogarchives/page/6/index.html","11e3c2b4548205c9b575b235957fd81f"],["/blogcategories/index.html","ea7cf59401697cd14636d14c1d20bd1f"],["/blogcategories/代码编程/index.html","80b526f3e1fd72955151a3a9f5eb62d3"],["/blogcategories/代码编程/page/2/index.html","eceaf444260e451a6584660ad49a57d4"],["/blogcategories/代码编程/page/3/index.html","084660063f5f4bda8c0bb6ddbd39feb4"],["/blogcategories/代码编程/page/4/index.html","424a203abcaefcdd93bc081618626201"],["/blogcategories/小说文艺/index.html","fc101542eb69c2db64081825e4f530a8"],["/blogcategories/小说文艺/page/2/index.html","7ead114ed83d391cd7575422e4edd629"],["/blogcategories/数理科学/index.html","2c1bbd12c7453036fd44cf0ff83e8e9a"],["/blogcategories/杂谈散记/index.html","6687947b0e6f2bac36a0095acf77e966"],["/blogcategories/翻译作品/index.html","d1f161c7e438e53331eb3c62224ddf9e"],["/blogcss/style.css","345f118445a4e3d8d3ce7c58c0b5fafd"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","680572b5319f73425547b54cbcc6f194"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","4d07a7f3a2a30f9e5a431eaeba905301"],["/blogjs/app.js","ad4268ee366f668d3f682c29c5ba0aed"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["/blogpage/2/index.html","41dcb4177fdfbca5330d9078845c6e92"],["/blogpage/3/index.html","5bd92e29d093119ab47e49a6f41159bb"],["/blogpage/4/index.html","51b7dbefb64bb1f8195214c25fb93285"],["/blogpage/5/index.html","fb73761c4d2da31de9cbcabe94871237"],["/blogpage/6/index.html","a9ce9692365e6be63d44b0ee0ad52183"],["/blogtags/C/index.html","3ea3171bd8b323b9c0394a4bfc418901"],["/blogtags/C语言/index.html","132c8bd5fdb0ca5d60691d173501475b"],["/blogtags/Git/index.html","604a8c1c2f131d4815721dacb9c22ba8"],["/blogtags/GitHub/index.html","7964cbf1fcce48d5509d9508e0a83e9b"],["/blogtags/Haskell/index.html","59f5cb5af4fefb38036397f2bd96d7ec"],["/blogtags/LaTeX/index.html","a237fc376c5005faa86a8f1382a3bbab"],["/blogtags/Qt/index.html","257a2dbf79aaba649d1a0806fb179dc8"],["/blogtags/Undocumented/index.html","25b3c2c9ebc2cb0c6abe99b97c4c958b"],["/blogtags/Web/index.html","b97737ee0f790fefb17cbdacb40e3274"],["/blogtags/Wiki/index.html","b6187595eb515e9b5643ef44eba87759"],["/blogtags/Wolfram/index.html","f67ad1d1acf676a481a24561fbbf0e35"],["/blogtags/Wolfram/page/2/index.html","eb1689ea50a5a11919f9a1ed95d4699c"],["/blogtags/index.html","2c5fee17a925fc1579c1e9a244baaa75"],["/blogtags/作文/index.html","b3c284d275ceb55f46de5927362247cf"],["/blogtags/作文/page/2/index.html","51c80e8cdf5fe71cac4bccaf06718f9b"],["/blogtags/傅里叶变换/index.html","b9b73d75ab307019ca1199c207707d60"],["/blogtags/功能模拟/index.html","a988faee2bab0b219e3e1b87242fd4bf"],["/blogtags/参考/index.html","268dbeb5e93cee20a2127c53cb866f66"],["/blogtags/哲学/index.html","bfd5c99ec6803e6682fc9d5f04f67dd4"],["/blogtags/图像加密/index.html","0e8ca7511208a8699992ba217922032f"],["/blogtags/图像处理/index.html","95c3d9c712e53f3a0deb799d3407c5bc"],["/blogtags/小说/index.html","c893ddd19492689156687fc47bd73209"],["/blogtags/微积分/index.html","72480941de1d7bf90f37caaae01ba0f0"],["/blogtags/拖放/index.html","b4b1ed116c229b3195fa40e20b45ff2b"],["/blogtags/持续集成/index.html","95f886f1f9216752e4e56cba3afd243a"],["/blogtags/散记/index.html","6daf5ffb80333520c7a1300e49a7e228"],["/blogtags/数列/index.html","125cca645535af45e88e1c3730004689"],["/blogtags/数学/index.html","3a17a789695e20957c4b3415ea1cf8e7"],["/blogtags/文件格式/index.html","eb747ede5a6a51f33fd2c908d0588791"],["/blogtags/文学编程/index.html","c09cc9fea5cc7f614d110c3acac74dca"],["/blogtags/文言文/index.html","c6bd20deda1ea82d5bccb4f0fa5494b0"],["/blogtags/杂谈/index.html","0262677722f3a0ffff9a4b0ccdb999dd"],["/blogtags/概率论/index.html","60001283dbb4db1f6eb3b642c517ce49"],["/blogtags/混沌/index.html","9827291c4f357edcdbb68770afb1fa6f"],["/blogtags/科幻/index.html","3b6ed1c713e5e531171c2c0df818fe1f"],["/blogtags/科普/index.html","1f2baddbf2f3cf502bc7014673dd9109"],["/blogtags/程序设计/index.html","11f77025f5d471571fbf4ca47cf5b98b"],["/blogtags/笔记/index.html","74784fe355d39a484ac99d3eae868377"],["/blogtags/符号计算/index.html","735ede99a152775d0a478ab532789434"],["/blogtags/算法/index.html","176efbdd1dc475008f85abcaff9b9b8a"],["/blogtags/红警/index.html","5802218af4a4cf34ce0d9392ed1977be"],["/blogtags/编程/index.html","9395c6a4393b4647bad35a8be519b9ce"],["/blogtags/编程/page/2/index.html","415fbefdf7cda6d7f8589e90b070fe7c"],["/blogtags/翻译/index.html","c3c52cbec8a6491445a5a2c67f469611"],["/blogtags/语法/index.html","7586af147552a9e0f00b236403aa7ef3"],["/blogtags/踩坑/index.html","d767e837f0bd5122dde5cfafca9ab9a6"],["/blogtags/逻辑/index.html","a9fc127db0f8729349cd0486eec89dad"],["/blogtags/题解/index.html","33d1c5f20629149daaa0c3e53304dae2"],["/blogtags/马克思主义/index.html","ed71493c197b8b18285af6c69381e00d"]];
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







