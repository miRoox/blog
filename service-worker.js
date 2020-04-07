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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","78c8022c6df1f98668b9e865b36b32b6"],["/blog2013/07/EdisonIn21Century/index.html","d939667068abb486d7aaf0a801984ec2"],["/blog2013/07/FenDou/index.html","a1d8256e0e0503651cdc35c1cd9c9ec8"],["/blog2013/07/Qie/index.html","96ef08cbbfe5a6d4ed98cf1f434b9d1e"],["/blog2013/07/RhapsodyOfSand/index.html","12cef31f3170660612026ef33952e67c"],["/blog2014/03/KTimesSum/index.html","2a4d0ec8f0b1dc9b882a38790a0e74b4"],["/blog2014/04/PiPaXin/index.html","d9aaa875727414456dbc0bec038a6d09"],["/blog2014/12/Miniascape/index.html","31dac7108a42c94ae51fa5dd0c32aece"],["/blog2015/02/ShiBiao/index.html","c25e12ef0cdde39e07107b818fd216ce"],["/blog2015/02/Wei/index.html","3f130253027d1da94c417a67cb7b8667"],["/blog2015/03/Stain/index.html","a24c8866b1ceb325796b6133d940d998"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","ca8176f461df72abffb7aa75f1486dda"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","0c2aa85e499cf1e9b561a7f4aa56acd6"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","5ce6d171ae16594323ff27d0277a44e8"],["/blog2015/06/BellPolynomial/index.html","37b0b4985a349941372cbbd2bdd1d3f5"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","217a3aa2f32a29a95c8e8cb3f6fca747"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","332acd9622c3d5fbaccd39ff0f88cb67"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","e718ac5332c664ff6da34aaaa00a3973"],["/blog2015/10/Tiberium/index.html","1635368b3a6f114e9648d9f1dc0414eb"],["/blog2015/12/ChengTianQuan-01/index.html","61dc895662c038ae5d181bc11aaa66cb"],["/blog2015/12/PKTFile/index.html","4b1ceb2b05dceff21442e0b17460f7d3"],["/blog2016/02/ChengTianQuan-02/index.html","1998e595de6ed296b56dfe968e01c2eb"],["/blog2016/04/LogicAndExperience/index.html","416f83af91dca36179dd3d7b0fc6e706"],["/blog2016/12/CSFFileFormat/index.html","03a64996e7d58154ea9b953e57a8c7d2"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","8eb9a771acee54b32d4558f989cf093d"],["/blog2016/12/ProveCRTWithConvolution/index.html","9f2094db64c74d18f901b9acdb45704e"],["/blog2017/03/MIXFormat/index.html","f59b4aee38ef73e7d610f9bb4e1df6ed"],["/blog2017/04/WesternPhilosopher/index.html","57abd57a2fce8d0403b00e592ba5bed4"],["/blog2017/05/TheAlgebraOfADT-I/index.html","e3ed10a1e591dfc95595c7d80c423532"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","18266b5ddffd4d36093044fed77d2216"],["/blog2017/07/TheAlgebraOfADT-II/index.html","b0fd2a3469c5e4a94dc8053b9031bb0c"],["/blog2017/08/DnDTabWithQt/index.html","78b217925ae3c90471121e27e42911a4"],["/blog2017/09/ClassBasedOOPWithMma/index.html","43e34e8f1a1d5e4cb65ea96f8fe2294e"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","320d9da9c0749fe1c7ca54a86df46764"],["/blog2017/11/TrapInCCpp-1/index.html","054f0902b07488175a4f5877811efd2e"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","a0e95c915653c7f54ad5d5f287b05f10"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","05a69f22d32b28c038f564fda0ffe7d9"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","326b856cc0d358527555c72b087d4f47"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","3cb72144cf127d8b2068d45592e865f8"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","325156a54564c04fb15c53c72e240232"],["/blog2018/10/PrintDefinitions/index.html","1ed3423b46e284ee7221b416e023727e"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","709cbaabec896fe820f946473b42713f"],["/blog2018/12/WolframOnlineDemo/index.html","17c39aed10d27a10c825c517e5a4fc3b"],["/blog2019/01/PointerInWolfram/index.html","51c8396f4eefe380fd3ed97e470c0e22"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","f114b78b0c7809061e3cc647b9ecd824"],["/blog2019/01/SymbolSandbox/index.html","b71a14339c939c9f4a6fc28bc9939a94"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","eda79f6f29c3bc52aaec2de20ad5631f"],["/blog2019/04/MmaAutoLiterature/index.html","a09b58f58cf899182132980c00f60eef"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","986692d97bc28bbf7f34fde02177c8dc"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","f4601f6f45d3c216b1b5b40c85e2855e"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","be48ca86bcbf7633b916ca45662cbc6b"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","f4eb21077b9e76607b0987c5a6bd5c4b"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","9962f6b22ff9542d8a4653bdff4652c3"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","bbb2e08bef3bd520e1e358b7ab86845a"],["/blog2019/10/SubmitFunctionToWFR/index.html","5e2cb85f121326b8a63ef1511eb7392c"],["/blog2019/11/TerminologyAndPopularScience/index.html","e5152a669650323b26684ecc9d243642"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","7ba00e8b11044508a60d1023e60ef7b8"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","8199396ee5a5ed97884c27f9fccf28ee"],["/blog404.html","5365015f0f8a88c26769d0197abe8a78"],["/blogabout/index.html","cfdb3a2610309edd1c3c07b756f5d138"],["/blogarchives/2011/07/index.html","a8b9d16431300a4e3ffaed4731b40a46"],["/blogarchives/2011/index.html","71cb667f5a0c1959dd0ce35f62a10369"],["/blogarchives/2013/07/index.html","afd851892157029d8e8e0d5673d781f3"],["/blogarchives/2013/index.html","d21294dbaa61b2f4df48b66b7b836dd7"],["/blogarchives/2014/03/index.html","e826d0be3c13299566214ab6bc4275f1"],["/blogarchives/2014/04/index.html","87926a7a5d45f20eefa2891444f5809d"],["/blogarchives/2014/12/index.html","1db52916e004e47dfa572b75b869c579"],["/blogarchives/2014/index.html","094b77111ea655ce86d561c22d97f115"],["/blogarchives/2015/02/index.html","7cadb05f1b4ce08c134bd1af83224e46"],["/blogarchives/2015/03/index.html","50183661e159289552f01ea8bd191d0d"],["/blogarchives/2015/04/index.html","e4faf6a7891be365bc8c1d99de440cd1"],["/blogarchives/2015/05/index.html","665af4d310aecade96f4552c23117cbf"],["/blogarchives/2015/06/index.html","b3d158cbb9d2a61a345dbe8336e0e838"],["/blogarchives/2015/07/index.html","1af1b395c980e5f817f4be18f9c9d6c8"],["/blogarchives/2015/09/index.html","81365f495c47c11995c1a741851e5585"],["/blogarchives/2015/10/index.html","08365ae38deb3058ac2aa5d2ac35d710"],["/blogarchives/2015/12/index.html","4e05d0d0f0dcc423314ecc81e3341287"],["/blogarchives/2015/index.html","0ec1f26d6bd6eacd6831db95e5dca89f"],["/blogarchives/2015/page/2/index.html","fa5cce71971a90a176e24660d0f6663f"],["/blogarchives/2016/02/index.html","77a055cddd9de82030cb0a8c895980fb"],["/blogarchives/2016/04/index.html","e9b2e0a98474ad5c5b44995f33a9d083"],["/blogarchives/2016/12/index.html","2eeddd2da3bfaac363c13928753773f9"],["/blogarchives/2016/index.html","d558d31b8876abd01206d5c671151d1d"],["/blogarchives/2017/03/index.html","6d49e41982d60de463baa983e6a3c2fc"],["/blogarchives/2017/04/index.html","d2b7a32fcd31929b79dbaa7dbe25f9a4"],["/blogarchives/2017/05/index.html","db2ef70a747f31461f2f0bdcd9861388"],["/blogarchives/2017/06/index.html","6c23e8303f88ee46850bd843972b5d3d"],["/blogarchives/2017/07/index.html","19065f6ffb8d54ad1716412c589d93cb"],["/blogarchives/2017/08/index.html","e3c6ca9a8c79fe7ff2a782115ea91710"],["/blogarchives/2017/09/index.html","716f3f4af51eec95db676dd0da3c9929"],["/blogarchives/2017/10/index.html","c73e6c5847bb55837a84b0f106bdb1dc"],["/blogarchives/2017/11/index.html","ff794f8be8d8755af1224944c97639e6"],["/blogarchives/2017/index.html","a27b4a1d7fc849b9324d1a504e396b98"],["/blogarchives/2018/05/index.html","86ba9acfd5f073099067aa49ecf3ddfc"],["/blogarchives/2018/06/index.html","8c223169eb80af7415e0c66ae452a522"],["/blogarchives/2018/08/index.html","6da8ece816a3c7a3e2844d9bed25eb1c"],["/blogarchives/2018/10/index.html","6ce3a0fe1c4ea26927e1f69d5be176ad"],["/blogarchives/2018/11/index.html","f6a3925cd2c9df40a1de7c9ccdd458c0"],["/blogarchives/2018/12/index.html","723d43ff0a2174ecfabed5c49333e7bc"],["/blogarchives/2018/index.html","691ab10e9e98f09235e5c3c366806db4"],["/blogarchives/2019/01/index.html","e56341411836f34095c390e457617410"],["/blogarchives/2019/02/index.html","60f3d7dfbbcb90d1c59d7639d633b3d3"],["/blogarchives/2019/04/index.html","459930b942faf5ef9f5019102bf2f4a9"],["/blogarchives/2019/05/index.html","55025fb538518667caf8fcc1f534d97f"],["/blogarchives/2019/07/index.html","ae1b415823b4d8edcf3bf46f14c61874"],["/blogarchives/2019/09/index.html","fe009b182d0f4c0fb0e0ae2f0cd1eefa"],["/blogarchives/2019/10/index.html","76656cf3c9b402b2224e5257c0cdd647"],["/blogarchives/2019/11/index.html","6a67c10f7a6d26b251bd14c276d2cc70"],["/blogarchives/2019/12/index.html","848f2c26b3263d87cb5dd48be553962d"],["/blogarchives/2019/index.html","4e57d1e94be7851dceb7cd81cc843381"],["/blogarchives/2019/page/2/index.html","e6fef499cae3dab178902a66e6ad04f5"],["/blogarchives/2020/01/index.html","f24ce23173c157f928e791ced627253d"],["/blogarchives/2020/index.html","d4076ee9fb8260c498a256a44460c8e1"],["/blogarchives/index.html","eb59c84c38ce7cbd99d23d04301657f7"],["/blogarchives/page/2/index.html","eb59c84c38ce7cbd99d23d04301657f7"],["/blogarchives/page/3/index.html","eb59c84c38ce7cbd99d23d04301657f7"],["/blogarchives/page/4/index.html","eb59c84c38ce7cbd99d23d04301657f7"],["/blogarchives/page/5/index.html","eb59c84c38ce7cbd99d23d04301657f7"],["/blogarchives/page/6/index.html","eb59c84c38ce7cbd99d23d04301657f7"],["/blogcategories/index.html","bf572282ca93d3666ab3490da49e3aad"],["/blogcategories/代码编程/index.html","993a193dc8f6d98f4dc511fc2153e9f3"],["/blogcategories/代码编程/page/2/index.html","885319217b7d4f30f9d0b65aa3c02083"],["/blogcategories/代码编程/page/3/index.html","1aa674b947ea19592b21f1df708d3338"],["/blogcategories/代码编程/page/4/index.html","221de2991de34ee7e986aecef54ab139"],["/blogcategories/小说文艺/index.html","9eabaca6c8fe181c4fd8c1eadf0dd8f9"],["/blogcategories/小说文艺/page/2/index.html","b621d2b35ff3519e135adbefcb54e65e"],["/blogcategories/数理科学/index.html","b47071592befe173580cd17153d7b6bf"],["/blogcategories/杂谈散记/index.html","dde4bcfc2ad75b6665e12c976dee91c6"],["/blogcategories/翻译作品/index.html","c33c0bea733667183f6cc38f62631efa"],["/blogcss/style.css","48880c4489bbc7fd79e23a9403e2c2d2"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","6a07e51ae465820a5a496acf9dfd8596"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","23ea0d2a614701a8c83d8c91ed83fdb6"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","c60adce24bba31e3ee18e41196b07a6d"],["/blogpage/2/index.html","1e54799435639120eb55c2b3a1016a7d"],["/blogpage/3/index.html","6f7a2a6fdc06ad39c32959ac60ee64d1"],["/blogpage/4/index.html","e0dd3e94720ee76def62124d881af710"],["/blogpage/5/index.html","fb7a3f5b0c181bae4a0bf66a61a8590d"],["/blogpage/6/index.html","2e6c2e3575c775da3195cc744f19e522"],["/blogtags/C/index.html","0577826c424d3ce78bc5351474d82c11"],["/blogtags/C语言/index.html","4a9e47c9cc255edc220540128ba2cc11"],["/blogtags/Git/index.html","5e9df8c37eacb2856c2574d90d044175"],["/blogtags/GitHub/index.html","46ccddb72e57b0a66deac5dc88b8122b"],["/blogtags/Haskell/index.html","7edde2bc7573f8bc2341b61b38bb4bcc"],["/blogtags/LaTeX/index.html","6c7128d517d5d065351a73c4a2d4a71a"],["/blogtags/Qt/index.html","7b335e6478187040c0ad498e6f24d97d"],["/blogtags/Undocumented/index.html","d8cc34cfd2bf59fd1b600c90ed754614"],["/blogtags/Web/index.html","a62d8f209bb117215d9161ca6ec5147f"],["/blogtags/Wiki/index.html","45d296fdf130949d42d9f8c16113148e"],["/blogtags/Wolfram/index.html","cf85d8390cf0eda05e4b97aea6c6b25b"],["/blogtags/Wolfram/page/2/index.html","cbdc71b7dd64aefa31a1c16bc7c3d7fb"],["/blogtags/index.html","d4a9ea50b7f37a9c1eba908769ec8f55"],["/blogtags/作文/index.html","758fd05972f69490acb730f7c8e4aec1"],["/blogtags/作文/page/2/index.html","600abce331c1c1ae1729fba64341213f"],["/blogtags/傅里叶变换/index.html","40ea67bdb317f9c7a06711ac6c1dfb9f"],["/blogtags/功能模拟/index.html","30d176e3866d8623e4998af8e446b7cb"],["/blogtags/参考/index.html","37262d201c4113194f04ab14880b11e4"],["/blogtags/哲学/index.html","fc9b110e7648f5e1954293ba0944c735"],["/blogtags/图像加密/index.html","65f79d38c94cfa9b5cf7a844e19b9054"],["/blogtags/图像处理/index.html","fb85ea83f999c86811676d3cdbf78c1a"],["/blogtags/小说/index.html","1ab5cd266cfdbc920f955f6009b8b023"],["/blogtags/微积分/index.html","c9a893f6b0baff51a894cabe10d91733"],["/blogtags/拖放/index.html","ec8f7fb86dc8bed650ca1b808a2961eb"],["/blogtags/持续集成/index.html","0b3abd4dad6b0fa816089de0a95aa6ac"],["/blogtags/散记/index.html","159b57ac05c6d25b11124087df1f8150"],["/blogtags/数列/index.html","f1bb6897940a8691ff856aa76f9081a3"],["/blogtags/数学/index.html","8e267d512a13567c2c6017ce8a5f9a88"],["/blogtags/文件格式/index.html","d695ade80a9d47bfc48da6e617e41864"],["/blogtags/文学编程/index.html","bd8d0b4129054accfa382d2c784a4cbf"],["/blogtags/文言文/index.html","242cb8af382fd3fe33ccb43b8cd3b088"],["/blogtags/杂谈/index.html","dffddf1ced54eb6bb8316525143b3e12"],["/blogtags/概率论/index.html","367e6e6af93ddab8aa67340d383b00f5"],["/blogtags/混沌/index.html","0fe4445200bc0b17a5212cd33b6a9567"],["/blogtags/科幻/index.html","d1f6685682df9efbb838473c2be0373c"],["/blogtags/科普/index.html","c9179474979dea984a5c29ffe4bbf548"],["/blogtags/程序设计/index.html","d4f1bec54a63d892a7ab463f0bee8798"],["/blogtags/笔记/index.html","7c2271bea3614bfbeb7c7e82f6012c7e"],["/blogtags/符号计算/index.html","f8699c9d5ed0109c02727858d05ca7f0"],["/blogtags/算法/index.html","3951de2817aef17034365a7616e67ad9"],["/blogtags/红警/index.html","7a8c1c817f3beaf6dac12a31364cd0da"],["/blogtags/编程/index.html","c4b71d6a3619bc11de06ecb8e2437a3c"],["/blogtags/编程/page/2/index.html","e38785e330253f36f1a6f44220238d3d"],["/blogtags/翻译/index.html","b19de218ad95a88fc21b162c529926b0"],["/blogtags/语法/index.html","42a01d261452d8303c61a1bd29e5229c"],["/blogtags/踩坑/index.html","55feead549fcbec6b25570880c9ff73e"],["/blogtags/逻辑/index.html","e7c931adef00604df9cbad5c3b24a2e9"],["/blogtags/题解/index.html","477ae7f001eb40181a006834e569f5b0"],["/blogtags/马克思主义/index.html","3f76c572248961f6c9e70230bf6e5906"]];
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







