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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","72ffbf5e1c6d689c4096cf700b2689ef"],["/blog2013/07/EdisonIn21Century/index.html","ab8ad2e8a02bb707b807fef0de5c1098"],["/blog2013/07/FenDou/index.html","126b474b27dfb0ffc3af5ed85bb23eee"],["/blog2013/07/Qie/index.html","26527a8c74454935b130e50139c3d80c"],["/blog2013/07/RhapsodyOfSand/index.html","215b94ac09afa0fbe17ecd8a78c35563"],["/blog2014/03/KTimesSum/index.html","2c3c2d89e8518d89dc8d1d8c5d3a2dcf"],["/blog2014/04/PiPaXin/index.html","684d6f55f645f6e2605a6ec639fce55f"],["/blog2014/12/Miniascape/index.html","d786b8d91383db7d9b82bdd549b01ff6"],["/blog2015/02/ShiBiao/index.html","b287fca2b2719387c64e2b56f9bbf39c"],["/blog2015/02/Wei/index.html","046aecfe9aaf5881c308f888993e79d9"],["/blog2015/03/Stain/index.html","9b4e8570fbd51e429f8c94c64e533cd0"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","ff1d7a46d7af4d17794876c85ac2908b"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","76e713f9d161d066a767208419e1ca9c"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","0a5bc7600f0502ec95f239646406de25"],["/blog2015/06/BellPolynomial/index.html","93b230a7ffe8cfc99e1ee1c27cfd3dcc"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","3d97173e854413c65d67a00a7d02282f"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","d5e280f7b171ee221c4618fc97f3d2cd"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","4a2e010e52d3a149b151d1cc6f7db64b"],["/blog2015/10/Tiberium/index.html","68046d4abb056513c778a7226e38477b"],["/blog2015/12/ChengTianQuan-01/index.html","80ef53b9ab999c1430243d610ddc165d"],["/blog2015/12/PKTFile/index.html","2bc4f2317ed6954ef3b8ff960f56fd09"],["/blog2016/02/ChengTianQuan-02/index.html","a5248ab817022d79fd430bba83246162"],["/blog2016/04/LogicAndExperience/index.html","1cc3f4e695427834c71ea4ba9bd4045e"],["/blog2016/12/CSFFileFormat/index.html","406b071b6c12a8c2f57e91e01d3987d3"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","66a38f5ac44433e5647eceefeb4ed969"],["/blog2016/12/ProveCRTWithConvolution/index.html","d639ab2650c0e6fab1d3e36ac7084d9b"],["/blog2017/03/MIXFormat/index.html","4605a148e07e5366b0c090d03d363c74"],["/blog2017/04/WesternPhilosopher/index.html","645185aa16cabd2595415ec21fd5feed"],["/blog2017/05/TheAlgebraOfADT-I/index.html","6e206549b926b1d99eb99e2e9c2a2a0c"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","af8c52735e73452da975d9aded13d840"],["/blog2017/07/TheAlgebraOfADT-II/index.html","af9d97cad991659c90105d168cb70da0"],["/blog2017/08/DnDTabWithQt/index.html","756466f208b3f45d7667379fdefc3cca"],["/blog2017/09/ClassBasedOOPWithMma/index.html","68c900b35bf075b55a104d30a3978f66"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","ea2445a97d8402d75073b0e330779138"],["/blog2017/11/TrapInCCpp-1/index.html","c06f74f05a1f8d72b42083da5e6f5163"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","2484305e90bbc1d289471bb9881d16c2"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","9b67b28166070afc158dc38c4074d81d"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","748ed5aa9de1ce9407a92c4ea3ec0be3"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","655653550bffe4fd9a59dd908f56e173"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","fb8c777c0552d18abd27e474700b1731"],["/blog2018/10/PrintDefinitions/index.html","6f830a37625c49569be8b5f88b1ab93d"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","21ebd46e67693b439786b4061706abfd"],["/blog2018/12/WolframOnlineDemo/index.html","c04a4563e81f30a0d23a2449a7d7ecaa"],["/blog2019/01/PointerInWolfram/index.html","7027538981ad18c3e56e7d49c6f947f3"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","77b6da5e027c69d54474d435a6d65ac0"],["/blog2019/01/SymbolSandbox/index.html","db1966ddeca52df545bf52a051450418"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","ba03b529bc228be225f6b9a3bbedfdc3"],["/blog2019/04/MmaAutoLiterature/index.html","7e831e72097835e8ec27b6fef0e8681e"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","8a9965f4345c6f9bd005620a2b4678f5"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","fafb00d667e5da49548cfffcf9af634b"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","7818b8562caf0ce645af1bc55b889851"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","1d5f21f8734933f6df0d877146e57a43"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","23e54aaa46df320bfce0a31cc8ce5ec9"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","6aa16cfa87951e77d45199cc344ca745"],["/blog2019/10/SubmitFunctionToWFR/index.html","cc51d5a413ce54d4049607b7347af233"],["/blog2019/11/TerminologyAndPopularScience/index.html","a66a7f83b189b3d6c085717fd628a2f9"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","0dc58befc176a52b625577ab748fce46"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","fca09982dfb231d7aa9e412bc65e0ce5"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","9f8986c10398ac08ada0e68aace959a4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","c3fe2436951d8818ba6f8ef1b6f24de9"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog404.html","25d5eb611da5643f0a9ac0586013e3a7"],["/blogabout/index.html","f56a4f35e28fa64246698f881fba31cf"],["/blogarchives/2011/07/index.html","4da046e289a726d6d96d564960fa2cc3"],["/blogarchives/2011/index.html","f051620966d83c1af637ab8ccb7f0e76"],["/blogarchives/2013/07/index.html","b99d80cf3313fb93a48a6495174c22ef"],["/blogarchives/2013/index.html","6407c711524da23acb8a1c52bef1569b"],["/blogarchives/2014/03/index.html","557e24ed48f2353819d8f29795538cf1"],["/blogarchives/2014/04/index.html","90e4ac59cd6ce84ac6f683ae1698d385"],["/blogarchives/2014/12/index.html","7ac904f1ffcae5ae6425b34192c2a563"],["/blogarchives/2014/index.html","fc7f7eab7e792146d94917d6ed45ca5f"],["/blogarchives/2015/02/index.html","b0f0eec0c7081935e9240fd6f34e836a"],["/blogarchives/2015/03/index.html","eaf488188ea77adb3ebb28cad1e08616"],["/blogarchives/2015/04/index.html","a0eb2ddb88ee2f9d04f570026877526b"],["/blogarchives/2015/05/index.html","66644ade072ff8b91b2af30e1a7cd956"],["/blogarchives/2015/06/index.html","5d6b842ea579188956d6841470e645b9"],["/blogarchives/2015/07/index.html","3d5b36165c9e60049cc1e138d8968b0a"],["/blogarchives/2015/09/index.html","e79c3f8d088449e8c83328d51b644602"],["/blogarchives/2015/10/index.html","b1493134025ea03877f2e3b028de5e3a"],["/blogarchives/2015/12/index.html","0d5791c115634eab52fc398ee9d65a00"],["/blogarchives/2015/index.html","8a8ed442e850cf64762df78a9a2a0bbd"],["/blogarchives/2015/page/2/index.html","f10b234dedaedf77b38627a361024ead"],["/blogarchives/2016/02/index.html","87971d0f39048577f0ed40e43f04d536"],["/blogarchives/2016/04/index.html","8e950f318b463faf3799d5a14ed696c0"],["/blogarchives/2016/12/index.html","34162609b29d6508ed1079573c744d09"],["/blogarchives/2016/index.html","31f808d56e609316e07db338d2ed9e41"],["/blogarchives/2017/03/index.html","abe381fd5884591cde100cf02d752316"],["/blogarchives/2017/04/index.html","c21d2ef7b666f038060de307055b6125"],["/blogarchives/2017/05/index.html","6d409f0b61d91ec2facfedc5026e8d0a"],["/blogarchives/2017/06/index.html","36fc9163cd572fee431e081a4162e4dd"],["/blogarchives/2017/07/index.html","2907b7a006f7faedef03b3b5eaf09f7c"],["/blogarchives/2017/08/index.html","85309c21c8f06bdb7fb843e707b5336e"],["/blogarchives/2017/09/index.html","ef0653aa82b4dda4ce9ce554edd0637e"],["/blogarchives/2017/10/index.html","145351e542175b34cf31a7d0c41d01cb"],["/blogarchives/2017/11/index.html","f0444ee7e7dc7ef8491c7917a037e7cd"],["/blogarchives/2017/index.html","49537c73bfbe77bb8bd8bc315e577c16"],["/blogarchives/2018/05/index.html","9438ebd524ff59e22cb221431030dde6"],["/blogarchives/2018/06/index.html","0f7b3aa8250080944d275d61f00b7898"],["/blogarchives/2018/08/index.html","ee63c05bced62c42a2271d8c79abf5a2"],["/blogarchives/2018/10/index.html","7b182058b40972ed41a168b0c24e7206"],["/blogarchives/2018/11/index.html","6f0ed0d1a46196b555e8fbaf8504e254"],["/blogarchives/2018/12/index.html","0b7a5ec45096b1cc3fba467f4b028358"],["/blogarchives/2018/index.html","1dd2934b96f83435505266b5737a11bd"],["/blogarchives/2019/01/index.html","a13253ef2b9ebe52c4bde773c3b2b7f7"],["/blogarchives/2019/02/index.html","179509d47fcf675dfaae4d7e3af133c0"],["/blogarchives/2019/04/index.html","6295c761a0bb1ed214a92a3651508e28"],["/blogarchives/2019/05/index.html","3ef4912fc4968167eeeb5316a787c978"],["/blogarchives/2019/07/index.html","80076bcfdfcb3a6bf9780700a353dbd4"],["/blogarchives/2019/09/index.html","d57d193471960c87398d31413c1624e5"],["/blogarchives/2019/10/index.html","55e82806b5723c1342d3cc3c936f80af"],["/blogarchives/2019/11/index.html","39bb4313b32fde4d2793ea3e47082390"],["/blogarchives/2019/12/index.html","7c7586606f023e60ba7e9d06ed245e6e"],["/blogarchives/2019/index.html","082aca15536a74a6a1b41019328015f9"],["/blogarchives/2019/page/2/index.html","272fc60df16a3833c160ff0b360c5abf"],["/blogarchives/2020/01/index.html","a511873ca524e2855f2c0666f7ea2f8d"],["/blogarchives/2020/07/index.html","7480e04651d6f2118686212a15a6a8b9"],["/blogarchives/2020/08/index.html","7c975f13a6c411ffad52f06f5187523e"],["/blogarchives/2020/index.html","ada10fdd54f99a62b491218c88bac2c5"],["/blogarchives/index.html","8583ca78a5bfa590690ff6694c4cd776"],["/blogarchives/page/2/index.html","8583ca78a5bfa590690ff6694c4cd776"],["/blogarchives/page/3/index.html","8583ca78a5bfa590690ff6694c4cd776"],["/blogarchives/page/4/index.html","8583ca78a5bfa590690ff6694c4cd776"],["/blogarchives/page/5/index.html","8583ca78a5bfa590690ff6694c4cd776"],["/blogarchives/page/6/index.html","8583ca78a5bfa590690ff6694c4cd776"],["/blogcategories/index.html","03cf86e582e2af727dd6303ec55dcf81"],["/blogcategories/代码编程/index.html","6823fce6cb03172f494161dfbbb11140"],["/blogcategories/代码编程/page/2/index.html","1c2a7968cec1d017a97ac86bdc460ce1"],["/blogcategories/代码编程/page/3/index.html","54b535b600d510eafbb04d8220643d58"],["/blogcategories/代码编程/page/4/index.html","e774fdf07ed561aae021579b121d549e"],["/blogcategories/小说文艺/index.html","e8145473473eeddf18d07c6a1d3ebf6c"],["/blogcategories/小说文艺/page/2/index.html","62fd4efe1bbbda7b2552a70118f825bb"],["/blogcategories/数理科学/index.html","9ffac7fba85666fc6e9598fa6f12c838"],["/blogcategories/杂谈散记/index.html","acef5cb1618b95fa699cb5fd56c6c1de"],["/blogcategories/翻译作品/index.html","51e1f7deb51aa8d556ab92b373d97e3c"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","a64504a2237a13b3872f52138e4f390f"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","6fafd8406ea11cf6b9ed2f869392de6a"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","8e31c4ac5d9e6d4c08f500e8f6e8b88d"],["/blogpage/3/index.html","93aafacb4ffb3a84550f47213a005ff8"],["/blogpage/4/index.html","8481a3567de9033fd410bb3cc8799bbc"],["/blogpage/5/index.html","475e74866c32f1c70f7fbfc0ba982aec"],["/blogpage/6/index.html","1fbf2dec2c99cffdb63823b606961cff"],["/blogtags/C/index.html","3a28f668302cbd508849eb1c4ba47861"],["/blogtags/C语言/index.html","bb65204a0526fc3bce6b3a3c6b8d6058"],["/blogtags/Git/index.html","f597bd72e182e73bc24445215c1b5fd2"],["/blogtags/GitHub/index.html","8c212a5abcc889bae3fe724dfdf9a5ef"],["/blogtags/Haskell/index.html","8a8e6eca714e6c29297fb64e1cb58e43"],["/blogtags/LaTeX/index.html","d798c9f080bbaf7ce9a8ac16a62a60ba"],["/blogtags/LibraryLink/index.html","fe9895092ae9cd8a1a05ad7565367760"],["/blogtags/Qt/index.html","f11d9e83f26af4cad4edfdbce9c1c0d4"],["/blogtags/Rust/index.html","cc284ad3c42b326a1cdd944794f85143"],["/blogtags/Undocumented/index.html","abcdcefb41531fd89d1b13594a729237"],["/blogtags/Web/index.html","1f589d3b2e2b69c857cf8845d88c9bbc"],["/blogtags/Wiki/index.html","528f5a70d9fd79b60b8e4801db12009c"],["/blogtags/Wolfram/index.html","9944294707c7a6d497ed1d666b6d4ca2"],["/blogtags/Wolfram/page/2/index.html","422fd8fcab38824fb98cc252adab2500"],["/blogtags/Wolfram/page/3/index.html","b4478f1f8ea81cfd66a225b5cacc8103"],["/blogtags/index.html","f72a71c9eacf83932b216f6cba44fbbc"],["/blogtags/作文/index.html","47b79d03dc71a0dc3a492cc00fd348c1"],["/blogtags/作文/page/2/index.html","13169b229aa7e6ba2012f9c1b3a4c15f"],["/blogtags/傅里叶变换/index.html","c71c0a8ceb9edec4c567079c99bf4349"],["/blogtags/功能模拟/index.html","e50311e53f7c3241448b8c638205b9b2"],["/blogtags/参考/index.html","1fdc37d7a6408d2cf8cb5caa83cbfeac"],["/blogtags/哲学/index.html","6cbddf5a2497d04b1ff456aeeb856513"],["/blogtags/图像加密/index.html","22699d3c09bc27d3c5082ba525d0da25"],["/blogtags/图像处理/index.html","29ad2c06390b88f24b05b81710751ef1"],["/blogtags/小说/index.html","899eab5534f57224efcb5ad657fe3ac3"],["/blogtags/微积分/index.html","8e10137c65f978740c651ab464e3daa4"],["/blogtags/拖放/index.html","287010945ff3536d61f91c9f3ec1be2e"],["/blogtags/持续集成/index.html","935f0bf4181b45eaa466fd9ab7f56050"],["/blogtags/散记/index.html","4f9aec5701355513837d527cd1742711"],["/blogtags/数列/index.html","a5a3629209740bd7db2fe777dad8dca4"],["/blogtags/数学/index.html","827ded6d9ec10f384a6185f9eefa0bc3"],["/blogtags/文件格式/index.html","531d726eb084403fdec327fd1cbfc065"],["/blogtags/文学编程/index.html","2a8b13e38dbd5fe7c28d158db9348228"],["/blogtags/文言文/index.html","ae0c9de7a38036d68b211dc92cbcae8f"],["/blogtags/杂谈/index.html","d580570f1c9883db1dcc310b528106e1"],["/blogtags/概率论/index.html","e31bce1b41b5dce9d64096a09c845184"],["/blogtags/混沌/index.html","312848d9c9cf4334f190f852ed1f94ab"],["/blogtags/科幻/index.html","dd6549fc909107aaa851ddaedba35452"],["/blogtags/科普/index.html","7a6df5e159ac751548c4ff9cab02587e"],["/blogtags/程序设计/index.html","342d9c55149cf67623b0fabaff8174f2"],["/blogtags/笔记/index.html","305827f94dbf900a0af695232b243111"],["/blogtags/符号计算/index.html","5e3baba89cb1d1e816ca70a6a6a8184c"],["/blogtags/算法/index.html","05c167f93e97e9f10fd6645f94930936"],["/blogtags/红警/index.html","949460ee9f5a05f1ad19509eeaeb8e88"],["/blogtags/编程/index.html","3564ecb66e6a448882d49dbbb538d3de"],["/blogtags/编程/page/2/index.html","e13c6a4560e04e52d7d68c2b3c746931"],["/blogtags/翻译/index.html","eabf3222929f65e2fdd49f00d208b562"],["/blogtags/语法/index.html","f9058b794c525a9e4526e55bbbdca714"],["/blogtags/踩坑/index.html","b2f586726f7e66a4e49bb4c4cfd0fdbb"],["/blogtags/逻辑/index.html","415fa680d96824a68c5a2d9759ff5349"],["/blogtags/题解/index.html","54118343dcf4cf77cfe055add94d04d1"],["/blogtags/马克思主义/index.html","9c6ee71e670889a165daa2ae8618585a"]];
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







