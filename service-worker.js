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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","c493203855464c432fc23f29579e53f0"],["/blog2013/07/EdisonIn21Century/index.html","b52fd88c1ead9ead377d378d06d1e9da"],["/blog2013/07/FenDou/index.html","a1d8256e0e0503651cdc35c1cd9c9ec8"],["/blog2013/07/Qie/index.html","78ac25fc864fa7a20e6e57dabd3bdf08"],["/blog2013/07/RhapsodyOfSand/index.html","0b050542b9c3042cbe7e762e1a3b63e2"],["/blog2014/03/KTimesSum/index.html","cda9ba4681a542bfebb5cba2a4e5d759"],["/blog2014/04/PiPaXin/index.html","5a4be543f6357852203274584df64afb"],["/blog2014/12/Miniascape/index.html","31dac7108a42c94ae51fa5dd0c32aece"],["/blog2015/02/ShiBiao/index.html","820c57041270dcbfff8c34f10cde3ab1"],["/blog2015/02/Wei/index.html","61c24bd1aa168fcc295b860ed71206ce"],["/blog2015/03/Stain/index.html","b7b7dbc1ecb47f4a85924d07a1b67aa5"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","3149d5b2f103cb88ba56ddf07643f683"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","fbe3fad61b7ae7f6be44acdb6859b176"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","ca084f4ccffd06906bd603d4d816673d"],["/blog2015/06/BellPolynomial/index.html","75750ef7715c0706d5127a8edcac545e"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","4a525eb1df84feef81d120e92bda5d33"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","c17a2766822acc66650b37c1d62c7a75"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","bd4d0a985a54994316205e5e3e6e0c3e"],["/blog2015/10/Tiberium/index.html","e904fc191cae103250d100a6c51ac922"],["/blog2015/12/ChengTianQuan-01/index.html","b96104a8515e71427edd8db9a7b0885e"],["/blog2015/12/PKTFile/index.html","b849fc25cdbcb7208e78198c53927f5e"],["/blog2016/02/ChengTianQuan-02/index.html","1998e595de6ed296b56dfe968e01c2eb"],["/blog2016/04/LogicAndExperience/index.html","076f8673339db88089d49071ab79b690"],["/blog2016/12/CSFFileFormat/index.html","c5cc79c8a58d9aa0096dcae31d4dfb77"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","8eb9a771acee54b32d4558f989cf093d"],["/blog2016/12/ProveCRTWithConvolution/index.html","9f2094db64c74d18f901b9acdb45704e"],["/blog2017/03/MIXFormat/index.html","064d0c5bdb81ef615cc6e9f77e6c8ce0"],["/blog2017/04/WesternPhilosopher/index.html","078d34ea13dafb6dfb48d68d3a9d79e9"],["/blog2017/05/TheAlgebraOfADT-I/index.html","42fab63bd0eb4f841d3ef38a124f414c"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","efa25328ce16faa1732286c5c57a51cd"],["/blog2017/07/TheAlgebraOfADT-II/index.html","c257e4a3097ec15430d591b0b451eed5"],["/blog2017/08/DnDTabWithQt/index.html","41b019cf6184412918d357afcaaea798"],["/blog2017/09/ClassBasedOOPWithMma/index.html","7b3d5dcd0b7574bb17b628cfbbfb37a9"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","320d9da9c0749fe1c7ca54a86df46764"],["/blog2017/11/TrapInCCpp-1/index.html","aa44987643dfec10f277da52aa533edb"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","a0e95c915653c7f54ad5d5f287b05f10"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","2abc2b1731d9747ec1499843c0f4e64f"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","91ad039c66724eff3c19652bdebe3a1d"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","3cb72144cf127d8b2068d45592e865f8"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","391408607afb05fed35890dc48558a2e"],["/blog2018/10/PrintDefinitions/index.html","138e2643d51d7eaf3fe5e393ba43f334"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","709cbaabec896fe820f946473b42713f"],["/blog2018/12/WolframOnlineDemo/index.html","4233b411794bf5ca6469183cbefc064d"],["/blog2019/01/PointerInWolfram/index.html","65edc130446b0eaf3ee84cabacffc6cd"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","9dbe7e43d7f34c53a9f0b8ebe321becd"],["/blog2019/01/SymbolSandbox/index.html","eb3ca87a1f89d7156ba534742a359f27"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","5dfcb8f362963fbfd324e474e8ebc137"],["/blog2019/04/MmaAutoLiterature/index.html","0d2b4b5f6a219b84f2150e55682eacd7"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","986692d97bc28bbf7f34fde02177c8dc"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","b860d1026eb035bc4d1c9b772dcdd7ec"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","904bf7ec901affac39c646f11ed3fe7c"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","af5bdcc1e49b74e6ba8c80d484e88e2e"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","7c4d2ace0405c054703cc6bf4d079c16"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","e764feb3abe555408930966edc49d032"],["/blog2019/10/SubmitFunctionToWFR/index.html","cf5733fd6d71a379485b5271bbbb4b6c"],["/blog2019/11/TerminologyAndPopularScience/index.html","468dc9b976ff3e59c931b2013bac353c"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","aa5a84f6164983cf9eaa42a23b53c0d7"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","8199396ee5a5ed97884c27f9fccf28ee"],["/blog404.html","5365015f0f8a88c26769d0197abe8a78"],["/blogabout/index.html","cfdb3a2610309edd1c3c07b756f5d138"],["/blogarchives/2011/07/index.html","aac87ca175c8c3d955cf3ba1e859d484"],["/blogarchives/2011/index.html","d056ce2b3f5214385b4353292edd2b51"],["/blogarchives/2013/07/index.html","58bd0b874201040730cd32e3f6119d94"],["/blogarchives/2013/index.html","d7bd0bdbcbe04af2f2b3f8483c07ac2d"],["/blogarchives/2014/03/index.html","666a90975e896b378b7276e835178211"],["/blogarchives/2014/04/index.html","2814eacd47db4ea5cf1bc62584eb28c4"],["/blogarchives/2014/12/index.html","6caa309f7e52af9fa23b97cd8dd7b1c9"],["/blogarchives/2014/index.html","3878d031c86e5e120238225fc845171b"],["/blogarchives/2015/02/index.html","dc8611125ee7b7783167c74c3c0cfacb"],["/blogarchives/2015/03/index.html","226b61bf1b6b5974180f3ebb81a0fe3b"],["/blogarchives/2015/04/index.html","3c31c8acfae46f2d1b3c3f34f37ee1ab"],["/blogarchives/2015/05/index.html","e234e4aa6c8a530efb739b92810b96a4"],["/blogarchives/2015/06/index.html","c5b65e45a5c33b41253f495e43cf698a"],["/blogarchives/2015/07/index.html","7d8ee86f45e9578f99c530ad783d9335"],["/blogarchives/2015/09/index.html","e81a257b263ff9f9496f9b3b440d1f48"],["/blogarchives/2015/10/index.html","a4159905c0f27ded59e5902d66cc9b9f"],["/blogarchives/2015/12/index.html","368e6e4527f605a138e940c44cd76527"],["/blogarchives/2015/index.html","94f043eca0c7a5aeaf45e38b5cfa4159"],["/blogarchives/2015/page/2/index.html","58c2e524977cfb156af4dec5f2956b20"],["/blogarchives/2016/02/index.html","83f2ffe5bf0e5e59b4f421bf7cae7299"],["/blogarchives/2016/04/index.html","b3467f0d1a9c5c298694d44a1a10d0a8"],["/blogarchives/2016/12/index.html","5276be567b03a4ad9e65c8edcb856c81"],["/blogarchives/2016/index.html","439b95e3385063242cf1bdca8a9b2092"],["/blogarchives/2017/03/index.html","c5b6a5094ede7db340656ec475bd0aed"],["/blogarchives/2017/04/index.html","bee366b771dbdd854359a1f4bca2e75c"],["/blogarchives/2017/05/index.html","4f5a96c772a83e61883198beb99bed01"],["/blogarchives/2017/06/index.html","d81f7b85b71816b21e72fd2a667d5f38"],["/blogarchives/2017/07/index.html","c2c07dd3e63323f83573eed26d6537db"],["/blogarchives/2017/08/index.html","14863e01a8c9aa72f47187a10438b961"],["/blogarchives/2017/09/index.html","14a0208f8397c5b798c8ec4b93f870c5"],["/blogarchives/2017/10/index.html","230034e4cdc4891f98067db0f1e89515"],["/blogarchives/2017/11/index.html","f7ec1e0fb21183280c565fa60d3ffa3e"],["/blogarchives/2017/index.html","2118b13eb0e723750de08aa140d1b12c"],["/blogarchives/2018/05/index.html","d0d661586b6f86fb05959691d77b027a"],["/blogarchives/2018/06/index.html","91b590bf24bb705b181d6e2fba5f4ff2"],["/blogarchives/2018/08/index.html","2c77c7a3e0c6a9854878535f77f82f03"],["/blogarchives/2018/10/index.html","1a6dfaadf9b1182fb6f3b46e038a3224"],["/blogarchives/2018/11/index.html","d4477def7676bb4a3659c100f8d52b54"],["/blogarchives/2018/12/index.html","7feee24b1ee6904099a0c06e7a340278"],["/blogarchives/2018/index.html","c061506942d7fba21327ddf5488411e0"],["/blogarchives/2019/01/index.html","ae6e3c1fdc71b234c4dcd147482075c0"],["/blogarchives/2019/02/index.html","169f3fa38eed75e82ebfb174d814e93f"],["/blogarchives/2019/04/index.html","2a09c72e32f45e5acd99511aad349708"],["/blogarchives/2019/05/index.html","a040dda1fa067fb2323dee69398b295a"],["/blogarchives/2019/07/index.html","dcdb82e6cb5533d61dde5ae0fb8bb5ec"],["/blogarchives/2019/09/index.html","88829a3292d27385eb7f7b56f6a4f105"],["/blogarchives/2019/10/index.html","26431185461efe9e18cdcd856f5bc302"],["/blogarchives/2019/11/index.html","b53b1fc73763a9f5b37b209cc2a806f2"],["/blogarchives/2019/12/index.html","db99d3161a045ff0955bd1c756c2138f"],["/blogarchives/2019/index.html","c2a0723912f16df24600f3daa4a5f698"],["/blogarchives/2019/page/2/index.html","0db6b911896c6217212e726b16ebb60b"],["/blogarchives/2020/01/index.html","2d13c6719621af2ec82a5be4d331010b"],["/blogarchives/2020/index.html","a81534ab02718f67ed80f9fd015239b0"],["/blogarchives/index.html","95b745062066ff77169e0f553b9511e6"],["/blogarchives/page/2/index.html","95b745062066ff77169e0f553b9511e6"],["/blogarchives/page/3/index.html","95b745062066ff77169e0f553b9511e6"],["/blogarchives/page/4/index.html","95b745062066ff77169e0f553b9511e6"],["/blogarchives/page/5/index.html","95b745062066ff77169e0f553b9511e6"],["/blogarchives/page/6/index.html","95b745062066ff77169e0f553b9511e6"],["/blogcategories/index.html","bf572282ca93d3666ab3490da49e3aad"],["/blogcategories/代码编程/index.html","94ca0977b234d1140aa17f797320ccc2"],["/blogcategories/代码编程/page/2/index.html","ec91bc53966ac2ddcd6b79947aa67329"],["/blogcategories/代码编程/page/3/index.html","8f4e0fc771bc3957d7a9d55c65ca4176"],["/blogcategories/代码编程/page/4/index.html","d48385e5d19221d1e1c1f43513e18aab"],["/blogcategories/小说文艺/index.html","f62f88d39da8526b3bcddcd65dd62cc5"],["/blogcategories/小说文艺/page/2/index.html","dc2e216fdfc9f2250aaa75c3fd32d5ef"],["/blogcategories/数理科学/index.html","a97298c9b4aabf224078e3e933c37352"],["/blogcategories/杂谈散记/index.html","ecc4f9ec6cd08daa8d5db412a5865024"],["/blogcategories/翻译作品/index.html","b8b2d7155ee3ca6fc727c596f9f5e4b8"],["/blogcss/style.css","48880c4489bbc7fd79e23a9403e2c2d2"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","6a07e51ae465820a5a496acf9dfd8596"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","f57da975451ed1785efc2e62d85c26e8"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","c60adce24bba31e3ee18e41196b07a6d"],["/blogpage/2/index.html","ee158b0a7dff5715af72332390013811"],["/blogpage/3/index.html","f55d14f290ee0011e108f57bfd38b273"],["/blogpage/4/index.html","0eeeae204ba7c02e2035d27ad7918c17"],["/blogpage/5/index.html","561abca12cac2834257b9dd885b05c7c"],["/blogpage/6/index.html","e224eb3833b2fe470c91727c981d2027"],["/blogtags/C/index.html","3db3f4ffac775153d534e61e4e0f960e"],["/blogtags/C语言/index.html","15032d041e358bb2946ac93aaa3fbb2d"],["/blogtags/Git/index.html","fb63b23e3cddeaa65b42eccbc9fa77b3"],["/blogtags/GitHub/index.html","eaa2c49015017344e652d7a2d613e027"],["/blogtags/Haskell/index.html","9c19a4ce1b90ba04eee93b0a51e848c3"],["/blogtags/LaTeX/index.html","6e177ae643e9ead6b89ea581a833b510"],["/blogtags/Qt/index.html","5ab809e49e539883d52bfe630eaa41af"],["/blogtags/Undocumented/index.html","7be5a6f85c27baa73797b92007679dc3"],["/blogtags/Web/index.html","6771726eefad62e3bac0824bbb246956"],["/blogtags/Wiki/index.html","339808e352c30a84934b8e0daf307d94"],["/blogtags/Wolfram/index.html","499ab63d19ba05013c771954a02c5e28"],["/blogtags/Wolfram/page/2/index.html","b8685d5dda52a33b7c859073b53d97a0"],["/blogtags/index.html","d4a9ea50b7f37a9c1eba908769ec8f55"],["/blogtags/作文/index.html","4c21eec281d8d62f8ed35cc0c50de22f"],["/blogtags/作文/page/2/index.html","cbcb75f872b61df43c11e45776055bb3"],["/blogtags/傅里叶变换/index.html","0f1bfa3ed680410cb7df6494f7ecb68f"],["/blogtags/功能模拟/index.html","78832ee8196ca12bcdd2824f4d2ab91b"],["/blogtags/参考/index.html","31581c2253ea248c86c3a212a661eff0"],["/blogtags/哲学/index.html","93e87d84884b2baccc2d878d15c7b422"],["/blogtags/图像加密/index.html","0e21d5834c032593b80c77ec084cd3d8"],["/blogtags/图像处理/index.html","f58c7c17fa49ecf8fe4dd9d19f0854f6"],["/blogtags/小说/index.html","a93ec6ee3ddb65058542540e941781ef"],["/blogtags/微积分/index.html","6d8f6a7bb56769a99537669237566f3d"],["/blogtags/拖放/index.html","749bf1fdda5ae4fe75705a3cd36fdba3"],["/blogtags/持续集成/index.html","85ef63cbb51e6075c1beac516a4170dc"],["/blogtags/散记/index.html","d6a37c4567d2c9a30a769292e026369f"],["/blogtags/数列/index.html","090ab0ffa55f288682d450082b070f60"],["/blogtags/数学/index.html","481cc7666faa4e2afc81705a2ea96fc0"],["/blogtags/文件格式/index.html","76004f6db3e90ca5058efc05a8861bf9"],["/blogtags/文学编程/index.html","a34e163bb1b2ab79db2c02dbee5e520d"],["/blogtags/文言文/index.html","36d5f1b40bea940b905800da8ab5a581"],["/blogtags/杂谈/index.html","c0eeaa44524063191826bf1df7b8317a"],["/blogtags/概率论/index.html","706594aef19cefae235017ee46220666"],["/blogtags/混沌/index.html","3950b3d142a4ad38e67ae1bd4d1400d6"],["/blogtags/科幻/index.html","d55e2a960e76660a66032d168b0edc1e"],["/blogtags/科普/index.html","2ca0075836da06586b7ffc33d2a7a6aa"],["/blogtags/程序设计/index.html","ddd3f7c2e5bf42b4cb09a9c7635fad48"],["/blogtags/笔记/index.html","120b70fe9a70372b1405c8fb05cfb758"],["/blogtags/符号计算/index.html","c83b0312f90da6263719473ea8c9e6c1"],["/blogtags/算法/index.html","ff1a5dda105198c5df4436d0e7bc4a3a"],["/blogtags/红警/index.html","374657c1c967457019b81f037504e2e4"],["/blogtags/编程/index.html","a7da8e7729a28a33124759fbe512c34f"],["/blogtags/编程/page/2/index.html","816a5a38fe7e10557af34bca1fbb7e1b"],["/blogtags/翻译/index.html","6383aaeb9d6c333e9a07d039db0b91dd"],["/blogtags/语法/index.html","32bdf79a8b9442553aae4a2d445f422f"],["/blogtags/踩坑/index.html","1700e0c50ddf586f83efc6b913bbcb5e"],["/blogtags/逻辑/index.html","3853cd1beb8056d44fe582529914fbfd"],["/blogtags/题解/index.html","5f5ed5eb2097c7508b5c20a2511f8fc2"],["/blogtags/马克思主义/index.html","fe6181164380855dee4052ef46cd118c"]];
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







