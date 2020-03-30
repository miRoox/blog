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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","c37404c92ca58f8d377b515de1ad96f6"],["/blog2013/07/EdisonIn21Century/index.html","dc25eb08ee864f65bd06be54a9b73e0d"],["/blog2013/07/FenDou/index.html","d59da4553cb94e2586e6f82cf9c0bf90"],["/blog2013/07/Qie/index.html","3dc0195f4cf12af83632be3ea30c88d4"],["/blog2013/07/RhapsodyOfSand/index.html","b543eab1ef45ae6564a1ce0091b46597"],["/blog2014/03/KTimesSum/index.html","a7e266bb9c4a07e71af11ed69f371579"],["/blog2014/04/PiPaXin/index.html","d0dd1f70e7e5bf4d4174ab74686984dd"],["/blog2014/12/Miniascape/index.html","b55db75ab8b9f42cb8c6165f3853fdee"],["/blog2015/02/ShiBiao/index.html","31f4ee3442ddb32254648978d44586b1"],["/blog2015/02/Wei/index.html","2bdfa6f2b70222102449354beb4b029a"],["/blog2015/03/Stain/index.html","ca178a9948415c7f90e009a72ab78c7e"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","24a1436b9b75a7ed284bab5813b28cfc"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","7ba8e434e37cd6156f728002dfe6cdfb"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","e5d7a51990bcc1b7eb588e6796b47720"],["/blog2015/06/BellPolynomial/index.html","29bed1f38c3a9c0815d8dec11f35b4e7"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","c6ca18446e6e1b9b66b8a82cca08dab3"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","bfe1b1b444527952a87842a858200875"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","75d307827f723d59ca7460713607b227"],["/blog2015/10/Tiberium/index.html","d57d029491c122739e8a0d9df5d225a6"],["/blog2015/12/ChengTianQuan-01/index.html","ffe188a2a53b871f2a8dea333d1dae46"],["/blog2015/12/PKTFile/index.html","3714c70b2705bb3f6fa81ff2535336a1"],["/blog2016/02/ChengTianQuan-02/index.html","5fe0f4053593023f1a73794552e98d83"],["/blog2016/04/LogicAndExperience/index.html","07699b10e4bf1f832624c1e3de75663e"],["/blog2016/12/CSFFileFormat/index.html","dbc828e20b71e14b132997668523d05b"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","3dc192a0d950dea0b739e9cc5e64376c"],["/blog2016/12/ProveCRTWithConvolution/index.html","ea016b266fc78196444eefb7053d7a3d"],["/blog2017/03/MIXFormat/index.html","f03bbf112aeeb021b59ed5355cd324ae"],["/blog2017/04/WesternPhilosopher/index.html","86f68cdb9932be66d29de4380c3a34ff"],["/blog2017/05/TheAlgebraOfADT-I/index.html","39205dfee615a541f2e935dacd6473d9"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","a0d7c1fa564df8cd8c2cd47483d24017"],["/blog2017/07/TheAlgebraOfADT-II/index.html","75393afae67174141ee120f641dd7abf"],["/blog2017/08/DnDTabWithQt/index.html","b23a3f4de12eceda87bf8b660d60c16f"],["/blog2017/09/ClassBasedOOPWithMma/index.html","f150c23cdf2141c289c3e798630b6142"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","450b9a5c764ad2ba5d05ee1b94807968"],["/blog2017/11/TrapInCCpp-1/index.html","365ec451071d2719b53fe81020a24fef"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","122b6aa093fb60641cbb50398f9ebd03"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","2eccd75fae05f1088b69ba056e2818e9"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","39f5e5582d85d31d56df94d76fb094a8"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","f54cae7738e0767e8cb834b43c1ab692"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","f3256dcaf3b0ae4216bd086a0234f807"],["/blog2018/10/PrintDefinitions/index.html","2f85b89e218dd86e0c1d3b2e7b4a2324"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","25d278a7869670d5e1e1ac01d731c491"],["/blog2018/12/WolframOnlineDemo/index.html","197c25cc888c119762f6370e588e5edd"],["/blog2019/01/PointerInWolfram/index.html","4ae0f51f5bde666897e7f66ae50fe170"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","09608ba1cf65c2b588d5059ba1772234"],["/blog2019/01/SymbolSandbox/index.html","2e75b43f11aceee3b0669ec1ffe07821"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","bf7188f019a45a43996f1be675043436"],["/blog2019/04/MmaAutoLiterature/index.html","6f375feff0ba869056c43265576bc9f0"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","34ada54a3cddbc387084d8c2759e03fa"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","5c6516e847881944f5539588679b064a"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","30c51d892dbab1a284b3b8f589cfffba"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","3aeffcf6a55288651fce2762f0f4fba2"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","d54b24d091ab6907f86ed1ab8e111354"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","5aea6a58e0095b726a88730e8b8cb731"],["/blog2019/10/SubmitFunctionToWFR/index.html","94b09ba89c31f9ffbc61eb14f60d9f60"],["/blog2019/11/TerminologyAndPopularScience/index.html","0823553c5de16da25e6ed739c863bd72"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","3528f5057df6eb16b676f07b8017170d"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","51899f137817d321d54998c14da6f494"],["/blog404.html","16c354c7614684be5588f83a6e6da13b"],["/blogabout/index.html","d901a2d5c652234ff95b105cc8cf24db"],["/blogarchives/2011/07/index.html","e557e5f7b0932deb8229db414f5da957"],["/blogarchives/2011/index.html","8aad50e6c64982396ab741e034abd37c"],["/blogarchives/2013/07/index.html","abea55e4bb4770ddcc9d2de2b31db459"],["/blogarchives/2013/index.html","163f5967b4b992d31339808fb52bee61"],["/blogarchives/2014/03/index.html","e1ad429d9e8a31e335852aeb3ed13ae5"],["/blogarchives/2014/04/index.html","7a5c6fd288682bbfed0310436b518f34"],["/blogarchives/2014/12/index.html","3a121f1fbf37b6d0f2bb2f68898e2b82"],["/blogarchives/2014/index.html","77744f6fbc4080f8f8b7bed5b69a3168"],["/blogarchives/2015/02/index.html","31dc31cfae4841db32b0b92652d78572"],["/blogarchives/2015/03/index.html","660fb5d6fa818aaf8fb16c807c7e6eec"],["/blogarchives/2015/04/index.html","a2b328abb188c6269c5ce3f8d6730a35"],["/blogarchives/2015/05/index.html","063de1dc245b3df9239aa077c3e383cf"],["/blogarchives/2015/06/index.html","5bac815e5f67106425c75c931b8ed13f"],["/blogarchives/2015/07/index.html","b2132e21c3ea08f59e93bf2e9a27e56e"],["/blogarchives/2015/09/index.html","ce40af96cc073012b042355aca15ea8c"],["/blogarchives/2015/10/index.html","428170e612454d73ff0e6909bb4af5c8"],["/blogarchives/2015/12/index.html","22da0623dcdfd4e90022145239e4a50b"],["/blogarchives/2015/index.html","fc5335766bd73fa575a3ab8df39d8d86"],["/blogarchives/2015/page/2/index.html","7c6413bb4f4a94d68580ad524156cb8c"],["/blogarchives/2016/02/index.html","1ef671c2275100e3ddf82fae23a7f440"],["/blogarchives/2016/04/index.html","8dab0ac34945c9e1ce2231e2d52f461e"],["/blogarchives/2016/12/index.html","44513ad3f61ff3e3b4dada1b824489d2"],["/blogarchives/2016/index.html","1945db352a50404f89475a36675fa8cc"],["/blogarchives/2017/03/index.html","520016a4e129dd32c6dc5c42d02b7dc9"],["/blogarchives/2017/04/index.html","8c4db064c8aaacf4319b063edb91a653"],["/blogarchives/2017/05/index.html","f6de081cb82c18752a549c0635e77a7a"],["/blogarchives/2017/06/index.html","233216917da2877f20c91c740559bf1d"],["/blogarchives/2017/07/index.html","1cdbda7a11c626bff43ac6786f920c65"],["/blogarchives/2017/08/index.html","ffba5d4d08c801474a6d5c8644b7e41a"],["/blogarchives/2017/09/index.html","7397577ab544ab09c4d2e009c77d748b"],["/blogarchives/2017/10/index.html","15258189e275442c74fe5294dfdf0f4a"],["/blogarchives/2017/11/index.html","2f97baef1e9f451b80633b718c88506c"],["/blogarchives/2017/index.html","d7559a5de43e336309d76f285ff8f55d"],["/blogarchives/2018/05/index.html","b1f26634cb61000f83a5bb6a653ed840"],["/blogarchives/2018/06/index.html","dbece76b0879d7df8212889126dd503f"],["/blogarchives/2018/08/index.html","faa51936d877e6fd2d77d5ff4a8e7580"],["/blogarchives/2018/10/index.html","c3bf5b365d40e3171210cb9d2bb43e56"],["/blogarchives/2018/11/index.html","2d346d2f294c9999d1426074333c6ac3"],["/blogarchives/2018/12/index.html","1a37f0dea5e14c529ae9774627eedfd0"],["/blogarchives/2018/index.html","3d40d97fada44ef8640053513c605d53"],["/blogarchives/2019/01/index.html","2f914968e6b9c2d9c1b8f115c88e9964"],["/blogarchives/2019/02/index.html","7edbd22372e4986c13a77c01cef23e89"],["/blogarchives/2019/04/index.html","41b9877dd2278176d911012bffb6df90"],["/blogarchives/2019/05/index.html","a530e9d18a5ac6a47e363ba86b4dbbf9"],["/blogarchives/2019/07/index.html","99615960b4e79231ed0d410691e151ab"],["/blogarchives/2019/09/index.html","34cc9cf4f587931f71fef35cb6036c44"],["/blogarchives/2019/10/index.html","426eaa39ae8264a06f08d27c66728604"],["/blogarchives/2019/11/index.html","d6a73220aff944806ee97775080e2beb"],["/blogarchives/2019/12/index.html","944d868e7012ff9d2f85dd13d9bd8b50"],["/blogarchives/2019/index.html","a65b46b2fe0e8e92f969d59ca0483130"],["/blogarchives/2019/page/2/index.html","2140d2b3bac2e5fcfad514ac35df6e50"],["/blogarchives/2020/01/index.html","23bd7dfb34d8ab02298ed6e5e86c0bfd"],["/blogarchives/2020/index.html","87d62c79b1ddd7835b8648802ab2f020"],["/blogarchives/index.html","7ca6314c68982c48a7c8342ea7cc8d20"],["/blogarchives/page/2/index.html","7ca6314c68982c48a7c8342ea7cc8d20"],["/blogarchives/page/3/index.html","7ca6314c68982c48a7c8342ea7cc8d20"],["/blogarchives/page/4/index.html","7ca6314c68982c48a7c8342ea7cc8d20"],["/blogarchives/page/5/index.html","7ca6314c68982c48a7c8342ea7cc8d20"],["/blogarchives/page/6/index.html","7ca6314c68982c48a7c8342ea7cc8d20"],["/blogcategories/index.html","f64278da94c07c2fea85086975b28d17"],["/blogcategories/代码编程/index.html","16c81eb1d38930753ca29fe3b771e520"],["/blogcategories/代码编程/page/2/index.html","c622042c6f9b14a0163c0a73c83285e2"],["/blogcategories/代码编程/page/3/index.html","2f250807523655bfa54bf7c1e1810126"],["/blogcategories/代码编程/page/4/index.html","26323c6b901bafd156583ec8427053a1"],["/blogcategories/小说文艺/index.html","bc0b109a664924c57d3163ab28b962d1"],["/blogcategories/小说文艺/page/2/index.html","d75f26ba0a414ce19c414cd71d2b834e"],["/blogcategories/数理科学/index.html","b5f82205dd4a2d2e52026056ffda3f5f"],["/blogcategories/杂谈散记/index.html","52c96fd3eba242291fc1e3efbeff723c"],["/blogcategories/翻译作品/index.html","3cb5c88019d384d89aba9b2bb7280125"],["/blogcss/style.css","ef73014f565a54395880554d20b95308"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","cf9f8c14e22e86f76b809fd079572c87"],["/blogimages/404.png","39ef3aeebb5565d65e5ad9a628779954"],["/blogimages/Copyright_CC.png","f713aa1d0f02195c93815adb88bd529e"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/background-cover.jpg","f71f69f3445014dc2047215635dd4d50"],["/blogimages/calendar.png","73d2dd5be4a5451ebe0a1c6487b477a2"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimages/tag-icon.svg","bf3d47eafc57a7c0191e73520a0c0cec"],["/blogimg/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","0f0ab4d7936e082cf9e51f90eef4a05a"],["/blogjs/app.js","ad4268ee366f668d3f682c29c5ba0aed"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["/blogpage/2/index.html","06c867c459ae954842fb53436469df8e"],["/blogpage/3/index.html","fda7f7ee1e7af9a6354b06a49bd5d89b"],["/blogpage/4/index.html","659fbf1d8ef188b4e186956b1d776120"],["/blogpage/5/index.html","415afa58c25c643b268feaecffabad7f"],["/blogpage/6/index.html","711c796aea4c0684de1dbf44fec47e45"],["/blogtags/C/index.html","db0b5a94f77cd4157d1a18b6dd89c21b"],["/blogtags/C语言/index.html","a98031a9f83775b099ca591686684a6b"],["/blogtags/Git/index.html","bc85453f3d064cd5dd9b894016e23e6e"],["/blogtags/GitHub/index.html","a164840f4980be22276b94d65d174e4b"],["/blogtags/Haskell/index.html","bb865aec408ee9b2671aec160308c1b8"],["/blogtags/LaTeX/index.html","f237f746388352bdd40cce3eff024199"],["/blogtags/Qt/index.html","8418db209395a28d840c8041ecca46ed"],["/blogtags/Undocumented/index.html","5cf4be22902d0f397e09f33352bf7eb7"],["/blogtags/Web/index.html","b98b8eeb8be01bcd0d144493e3b3dbf2"],["/blogtags/Wiki/index.html","b023226dc6932745813f052f2b7787ce"],["/blogtags/Wolfram/index.html","f3fea0597875d3300f12030e817dd344"],["/blogtags/Wolfram/page/2/index.html","ddf2ce4ce69f871f51e90a59d95bd5d9"],["/blogtags/index.html","db7b63290cdbd226ecd9f7ca456896fd"],["/blogtags/作文/index.html","24ed882faedec84461b0beab77086f14"],["/blogtags/作文/page/2/index.html","9ea934b30fbb6774a84a36066c6a079f"],["/blogtags/傅里叶变换/index.html","05511ded1993023b22054ebb88253031"],["/blogtags/功能模拟/index.html","b93fcb244226e4f644e55ed139bb5eb7"],["/blogtags/参考/index.html","aceead4cd57aa1a13c84048337f3ab49"],["/blogtags/哲学/index.html","0215cc42c18d92b776af14745b35e794"],["/blogtags/图像加密/index.html","d95c795767f01d3016e6f4e4f41818f8"],["/blogtags/图像处理/index.html","09f01a93f635ce67cc9a309ca1ffde41"],["/blogtags/小说/index.html","7d83f0967a9a4998d6123a2dfe9d15b0"],["/blogtags/微积分/index.html","31ead74612bf3722d677848dd45314c4"],["/blogtags/拖放/index.html","10049475a0766a23bdbd882aa1f889ea"],["/blogtags/持续集成/index.html","56e0e82d373ee21824b1ac1a26cb3931"],["/blogtags/散记/index.html","43da04e6d9bb48f95791b73d4451a2d4"],["/blogtags/数列/index.html","c9da312e75c2a65b14c88a87cdcd9c88"],["/blogtags/数学/index.html","5a638a3d73a5992459ff47ab3f22d4f0"],["/blogtags/文件格式/index.html","4811c2ab6e2da705dea5e941003d325f"],["/blogtags/文学编程/index.html","80d1940d42a9ea2989891f781cdefc7c"],["/blogtags/文言文/index.html","49724a6f371667cea17d6dc5d3ce352d"],["/blogtags/杂谈/index.html","d258e76d4ac9fe881fabf03c3a8e3af0"],["/blogtags/概率论/index.html","df1244c56c5e00012569cde431f17ff0"],["/blogtags/混沌/index.html","fe81bc24beee59270eb1bd9cccc09cf6"],["/blogtags/科幻/index.html","2443c6cfe5b2ee77308093debf027778"],["/blogtags/科普/index.html","71ff6fcf4fec7f00447830738aab9f41"],["/blogtags/程序设计/index.html","f9af0b26936669c874cdc055ea4f6196"],["/blogtags/笔记/index.html","d9953b1dc73fac40f7503b2b520f6afd"],["/blogtags/符号计算/index.html","63872058540002edcd65f8356db9d6be"],["/blogtags/算法/index.html","4676c8a1554e8f62e23c19c37482e455"],["/blogtags/红警/index.html","93cab3ccf7557129363ac9d00d884eb1"],["/blogtags/编程/index.html","cdf5939ae634e284f9cb41b2301ac291"],["/blogtags/编程/page/2/index.html","d7710cfb58c9aed194fa5213243254df"],["/blogtags/翻译/index.html","39d392f52534aaf8f3e22727fcacc368"],["/blogtags/语法/index.html","57babfcdb0042415f1decfe98a999de7"],["/blogtags/踩坑/index.html","427803417770b8c494f39370abee937a"],["/blogtags/逻辑/index.html","df5fad65097bab79337a2fe2859980a0"],["/blogtags/题解/index.html","18fe7be39190d4cb06b653841e4c5203"],["/blogtags/马克思主义/index.html","6a96eb6cd82c956b113239793901ef31"]];
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







