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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","a94c6fdbe88738344a4e40657d869251"],["/blog2013/07/EdisonIn21Century/index.html","3c0c87b7b1af53725db919242d192f25"],["/blog2013/07/FenDou/index.html","6637f1ef79e5e26554503908664945b4"],["/blog2013/07/Qie/index.html","f9199e417b6ddf9157536808e3e0f535"],["/blog2013/07/RhapsodyOfSand/index.html","3eeb4a8c0c902653ca5eeab42b80b710"],["/blog2014/03/KTimesSum/index.html","69467fb0408d210c5b9b6747b37b4020"],["/blog2014/04/PiPaXin/index.html","c94683fab58e5d6432370e43a65112d0"],["/blog2014/12/Miniascape/index.html","f19356157ad6d159304c066a92dbf2a5"],["/blog2015/02/ShiBiao/index.html","fbb9ccb7d788de4d9dab6f95a4484931"],["/blog2015/02/Wei/index.html","efd6b58a123d5accefb75442856d9afd"],["/blog2015/03/Stain/index.html","f557104bd8b32b5f9290c48298552597"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","8e1aa98518635a61a726a4108e4a1ff7"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","7d51ca736f5996711b1480a696d21643"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","c3378c68bf5cbc4acc673e355c0592d1"],["/blog2015/06/BellPolynomial/index.html","4cf29ac0c91601b72c332204c0512bb7"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","6cbf980e6708b7a9d954337f3ee51b54"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","05348a30891373789469c9894c5d6baa"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","4a31f6db7384b98cf40c606198071dc4"],["/blog2015/10/Tiberium/index.html","c24ca21da02ae29fde76f88ad08f9f17"],["/blog2015/12/ChengTianQuan-01/index.html","f346779fd39362c04c81f8f7c7c015a7"],["/blog2015/12/PKTFile/index.html","d3f5c92555d6b47554872817054ea099"],["/blog2016/02/ChengTianQuan-02/index.html","4efd7b2f90adaeee7d9a12d89f3263a7"],["/blog2016/04/LogicAndExperience/index.html","8443648dfc27203f53a1ec505a324144"],["/blog2016/12/CSFFileFormat/index.html","c85cd7213e205d5fad3cc3cec2eed5e0"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","e3157599a48069674a18d5e1c710c101"],["/blog2016/12/ProveCRTWithConvolution/index.html","305c1b2608ce4b31e7f84606f001f6f1"],["/blog2017/03/MIXFormat/index.html","389cc6818029e9b54ba976c776a50830"],["/blog2017/04/WesternPhilosopher/index.html","cceaec7de229a56cd917fc23eb30dbcf"],["/blog2017/05/TheAlgebraOfADT-I/index.html","d2217a4f6f60970bfb9620dae013ce07"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","b90ca23eaec548a160f71d32f3340e3b"],["/blog2017/07/TheAlgebraOfADT-II/index.html","9ce4eef9c356b1582df67db672bf623e"],["/blog2017/08/DnDTabWithQt/index.html","8a02d352086a112cfd1a328f4f9e8d1e"],["/blog2017/09/ClassBasedOOPWithMma/index.html","3e6d2bfe726e9f9bbb0a3c5f8ee2898a"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","344a0d5b5986fbd3dac69c83610cc620"],["/blog2017/11/TrapInCCpp-1/index.html","8ba2dfde3dbae3176f66310393ad40a1"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","d7cd06bba4105b3023b4b026a64ac277"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","74dba350595cd7e0f922088e18bee168"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","edbae002133dd7ac9892192109153fcf"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","ef00367ce87aecdf60ebd1c91b296ef1"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","90404d1bd98717aee182d77374735ff5"],["/blog2018/10/PrintDefinitions/index.html","49cf24b70b74bd67c415332b83487c54"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","7856fb82b162e8c557986e7bed66c802"],["/blog2018/12/WolframOnlineDemo/index.html","8bec243a2b30a834198d1248fbd66850"],["/blog2019/01/PointerInWolfram/index.html","025bf2888d1eac6174fcbb5834f4e61d"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","58b45c6388de4e023f9df5f89a2246fd"],["/blog2019/01/SymbolSandbox/index.html","db7099706f2b08de76dc506dcfd2a4d1"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","2ef08ce93332f05dd8bb000e8fd37d5c"],["/blog2019/04/MmaAutoLiterature/index.html","714949609f770fe707db2427c09d0149"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","91da6c731ebae63ebfe4a1f005490ac7"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","a253126e4a07c7302f9591191a4ffb53"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","0278a1df19266e8129e3d3ac5c44d0c7"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","f584b44cc3abe5442d641a1494873b7f"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","786c6e772006c20b0e4174ce1e877866"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","43d45131bd5e1f9b222082612816af8b"],["/blog2019/10/SubmitFunctionToWFR/index.html","3e2578942853e267114eb94df322716b"],["/blog2019/11/TerminologyAndPopularScience/index.html","ea6d1f9c20d4805087098acc55cca454"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","91b7e4e6ff9f0330a0c8213178bf7769"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","fe6326c28c34bf3d539b2aadb83da9d5"],["/blog404.html","11c81e4359b0ac952dcd2409c492064d"],["/blogabout/index.html","a25a4e135e7d94fb72e674c793e685b8"],["/blogarchives/2011/07/index.html","14b64a053540123bbb0429e105df674c"],["/blogarchives/2011/index.html","99145e515577ef0c9c7aa52312585841"],["/blogarchives/2013/07/index.html","3183faf2b1562b4dc3fc0d5282e036c2"],["/blogarchives/2013/index.html","0216a21c8e68f333d4b8eb04c0b3f75f"],["/blogarchives/2014/03/index.html","169b4c36761c95c3df816026b487ae3d"],["/blogarchives/2014/04/index.html","5bed3966696cdb6f67b6b8ef89e4b093"],["/blogarchives/2014/12/index.html","cceb8e8c1b4818d8b2198d0ad7330049"],["/blogarchives/2014/index.html","f124d330a597e41b797bdfa30a3e480b"],["/blogarchives/2015/02/index.html","6aa29c2909d44d9e6743209851cf772a"],["/blogarchives/2015/03/index.html","7b89f0279de4a8b0df9bfdfc7b28200c"],["/blogarchives/2015/04/index.html","8bb29162265ebc5950ba72ffd4cad7dc"],["/blogarchives/2015/05/index.html","77ca2fd0863365015609398067a1ffbd"],["/blogarchives/2015/06/index.html","50d363a7f719dcf6f4dd521d1c116435"],["/blogarchives/2015/07/index.html","2654add31232f02ee33e3994b1fe4a60"],["/blogarchives/2015/09/index.html","dfeea5300c97cdf3309008f40b462962"],["/blogarchives/2015/10/index.html","a2474f0f122aa440f9b3368ecdf1407f"],["/blogarchives/2015/12/index.html","d332edb6c5b229bc3e90a4f47c794eb0"],["/blogarchives/2015/index.html","f64759e41ebea8340f405f8d2e7a522f"],["/blogarchives/2015/page/2/index.html","30302c8d2702b0db051daa77b450d949"],["/blogarchives/2016/02/index.html","4b5c7779b10914bd137a0588348fa44f"],["/blogarchives/2016/04/index.html","ce287e1d450dd790786f0754d9a65baa"],["/blogarchives/2016/12/index.html","b5a95a38f1507a9446981d44c3e65fe2"],["/blogarchives/2016/index.html","ab0b7890b61abd1d213eb70f06dfb0ff"],["/blogarchives/2017/03/index.html","557f185f53898c32eb83e7d08cbbed65"],["/blogarchives/2017/04/index.html","e5a301137f896d83fd37cf569a890552"],["/blogarchives/2017/05/index.html","64ab2d9053fd6f6291c097f2205f1a6b"],["/blogarchives/2017/06/index.html","8b6a2d5d5bbcedcff679ae5307ac6acb"],["/blogarchives/2017/07/index.html","5a4c3b513a15c5cee76c452541d2df33"],["/blogarchives/2017/08/index.html","f9188aef6b5cae529f631423b658f296"],["/blogarchives/2017/09/index.html","cbfa41f47fc5aa345f77a694ac23af51"],["/blogarchives/2017/10/index.html","b8ed6861e6e25f5115da0bc62ca36ba9"],["/blogarchives/2017/11/index.html","5e2ede0f7f02e222d25b2b3488a709dd"],["/blogarchives/2017/index.html","0dc6b65ff77cd0679bdd25ca240df2cc"],["/blogarchives/2018/05/index.html","ee60b315cb2d1a841a4b13ac25835313"],["/blogarchives/2018/06/index.html","a896987e24b35ddd6f3bf9e6648f3cde"],["/blogarchives/2018/08/index.html","ff8801cd57f62c8794109ba38782b027"],["/blogarchives/2018/10/index.html","7173bb461aa5f3e101abf8841fee0fe6"],["/blogarchives/2018/11/index.html","d27a00b725d370655046d4a20507b069"],["/blogarchives/2018/12/index.html","bd8dfab822b072e5e8677671955e6bba"],["/blogarchives/2018/index.html","e1630746ae1e0802163dd2d175a3304a"],["/blogarchives/2019/01/index.html","20a0733f9f1979ee1a566544e242a4a8"],["/blogarchives/2019/02/index.html","9f7b2bc95ca93f63076b960fcc57fd45"],["/blogarchives/2019/04/index.html","84677fa4fc5f937eb4655b1e2ea795f9"],["/blogarchives/2019/05/index.html","ddfcfd8c0b08d96342f95434789118fe"],["/blogarchives/2019/07/index.html","eff53730942114a79f03c13d44a7060b"],["/blogarchives/2019/09/index.html","ee671f76e78038ca63753c3985886788"],["/blogarchives/2019/10/index.html","73036df1a24f6a23037a45a942b374b1"],["/blogarchives/2019/11/index.html","62c2614e6c37e168a64ce0b8a4bd00dc"],["/blogarchives/2019/12/index.html","14c70824e43c402a76c9f9e638b1cf02"],["/blogarchives/2019/index.html","b06773034241dc9353a137958c24ff45"],["/blogarchives/2019/page/2/index.html","a3d9a1b41c1bfde24005c346bfcb3024"],["/blogarchives/2020/01/index.html","8c5d7c546906ebef7742b94c6364270e"],["/blogarchives/2020/index.html","cbf013c11841484f98d8f0e4ce42eb19"],["/blogarchives/index.html","3ca48061bfa810984958404463b24c1f"],["/blogarchives/page/2/index.html","3ca48061bfa810984958404463b24c1f"],["/blogarchives/page/3/index.html","3ca48061bfa810984958404463b24c1f"],["/blogarchives/page/4/index.html","3ca48061bfa810984958404463b24c1f"],["/blogarchives/page/5/index.html","3ca48061bfa810984958404463b24c1f"],["/blogarchives/page/6/index.html","3ca48061bfa810984958404463b24c1f"],["/blogcategories/index.html","076d671ba4336a6a69d9cd594a305a5b"],["/blogcategories/代码编程/index.html","09d035382370d318fb2c17891c608c99"],["/blogcategories/代码编程/page/2/index.html","b8e26ba5022ccd8d43391bd909ed5060"],["/blogcategories/代码编程/page/3/index.html","ab091e25176ea4420cb528a8ecb62f55"],["/blogcategories/代码编程/page/4/index.html","6ec61cedb28a7b3d52d76a225ab56203"],["/blogcategories/小说文艺/index.html","bc4b46bc3fff819c08e63e81394a1380"],["/blogcategories/小说文艺/page/2/index.html","3afbf6fb9504e3bc11fc398dea0ccf4c"],["/blogcategories/数理科学/index.html","cf7880d292e1f727630a4fb765375d49"],["/blogcategories/杂谈散记/index.html","9cf6bca2b9f576b50a5b578d5c4fb820"],["/blogcategories/翻译作品/index.html","6c87d4b050291fa84e8538a7550d2dd6"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","a30bcc8588965f682ac8bc9bb400ebbf"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","d438bebbe3038ba0df654d42d8d240f1"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","5016fc1e27882b74571ee13d4700046b"],["/blogpage/3/index.html","4e5ace9cd2aab48b7594c7fe437eac65"],["/blogpage/4/index.html","7f2348bd656938b38102957e6c2ffb9e"],["/blogpage/5/index.html","c37bac3ac8cfabf32cf7315f2a33e52f"],["/blogpage/6/index.html","c846b9c061357d2d2f922459964ace2b"],["/blogtags/C/index.html","d1fe15187d1bae72a93bc558fc6f7553"],["/blogtags/C语言/index.html","cdbe274918be10356d9a5761e075d70c"],["/blogtags/Git/index.html","8cddfc08e46479286c39d465fe9833ce"],["/blogtags/GitHub/index.html","398bfbcf5f9342c83309dc2200ec67af"],["/blogtags/Haskell/index.html","7e51ef0dee52aea905fcc88d44fed58a"],["/blogtags/LaTeX/index.html","5825582c0fc07a0e4ce94958b83678cf"],["/blogtags/Qt/index.html","8e493d9be227145dc6ef3a62e0907a1c"],["/blogtags/Undocumented/index.html","1cd2bb1a363d98feea8e9b059fad50ab"],["/blogtags/Web/index.html","a63b77d97664a460ca23bc201bb7530c"],["/blogtags/Wiki/index.html","48659b1d8e2c39e07aae69963a689656"],["/blogtags/Wolfram/index.html","30be1bb7c460bb239ed0e480fabbea89"],["/blogtags/Wolfram/page/2/index.html","37e0b3928e5a36fe9c870ecf2b3a2300"],["/blogtags/index.html","615fb2b441d85677c0897c6096d675f8"],["/blogtags/作文/index.html","af3230e4f22f1a3b2dd01a7e68d6d851"],["/blogtags/作文/page/2/index.html","80fd71ea038507c2b1917e8391c2a2f1"],["/blogtags/傅里叶变换/index.html","6f90b0e0c44ca9d7e80a04a70c8292da"],["/blogtags/功能模拟/index.html","7a00dfe3150f9efae5eaaefa47daf8ce"],["/blogtags/参考/index.html","317cb3d0c125075377790c1dc6a69349"],["/blogtags/哲学/index.html","17a15bcce9be23bfda28351a811fc0ce"],["/blogtags/图像加密/index.html","20eca5b9abcb1759ad623d3509d70c11"],["/blogtags/图像处理/index.html","cefbb04f9a6754112b539caa66cc858c"],["/blogtags/小说/index.html","999943bd436321d8de663fdd0f82af71"],["/blogtags/微积分/index.html","4256bd9ec069af775747f8b1744847f6"],["/blogtags/拖放/index.html","a7a799bc3c6bb99d4ceb837ed6ce0526"],["/blogtags/持续集成/index.html","f7a274e151ad8ee7a457a98e052c77b8"],["/blogtags/散记/index.html","01b804cb470ab69b675fe0a79b63de2d"],["/blogtags/数列/index.html","ef98edf50143db860914150fe001f4b4"],["/blogtags/数学/index.html","a70df7028d8281d322ed87330a7caaec"],["/blogtags/文件格式/index.html","d210825398019a2c8621cc486adcd54b"],["/blogtags/文学编程/index.html","3d25a4607a3ec6b4d1d032e8043c1b39"],["/blogtags/文言文/index.html","118fe3fcb782be6715980e163d5e2c5b"],["/blogtags/杂谈/index.html","4dcaec6ae3e838ff64c3e24cb87dcc61"],["/blogtags/概率论/index.html","3eb3b114a8699aab7c9bee97e70fff1e"],["/blogtags/混沌/index.html","4986b52540ea7ab1dca39d9f796a7994"],["/blogtags/科幻/index.html","c4d89103ebbdfb8fbbee2ed2d67ad089"],["/blogtags/科普/index.html","de0dd81c486e1b837ecb1afc9464be7e"],["/blogtags/程序设计/index.html","6ca9a8a72f7341a235e0ea3e0dff36f2"],["/blogtags/笔记/index.html","2caa253aa6b693665dc9012f59dbbaf2"],["/blogtags/符号计算/index.html","74ec5eed5ea55273dc5a3dd48883e5d4"],["/blogtags/算法/index.html","ecf64b1d4a785e27cc5a8694ec528234"],["/blogtags/红警/index.html","9df5f7df3b69a7bbbdc28b7d6e59ed25"],["/blogtags/编程/index.html","ebf01161dba35346651ac1b5c8e3c3f3"],["/blogtags/编程/page/2/index.html","bf0e730c5d4a6f430b34b8a97c2a0744"],["/blogtags/翻译/index.html","55fdc6c3f96e21bb34984c6786bde451"],["/blogtags/语法/index.html","e9896ed6c76de2c253982cc24336a6be"],["/blogtags/踩坑/index.html","58bb76aa39f532c620c36bb94b14f6ff"],["/blogtags/逻辑/index.html","c1a07dad58ce44e703431375e932cfb1"],["/blogtags/题解/index.html","f23d82f74c1f49d4597082ad0fe2e8ca"],["/blogtags/马克思主义/index.html","84592a852a4327639182f03d0f7b819c"]];
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







