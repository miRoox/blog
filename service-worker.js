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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","338dd0212fd1a60fb6b4b9d20fd207ff"],["/blog2013/07/EdisonIn21Century/index.html","320ba7d4cc8927ab85dd99357d960c95"],["/blog2013/07/FenDou/index.html","7d850b5a90bdd1e5655a28c1015941b9"],["/blog2013/07/Qie/index.html","377e24b512ad3ae638d01e4e1a3ec75d"],["/blog2013/07/RhapsodyOfSand/index.html","c6a52d066e5162b361579fa2378e3f9e"],["/blog2014/03/KTimesSum/index.html","825779b27b308aef63d5533b6af7cfb1"],["/blog2014/04/PiPaXin/index.html","9142bebe2a63be11555e954eb8e1b736"],["/blog2014/12/Miniascape/index.html","d786b8d91383db7d9b82bdd549b01ff6"],["/blog2015/02/ShiBiao/index.html","e0112c09ac3784b554de7bc28685fd8a"],["/blog2015/02/Wei/index.html","9f9c5bc92148938fa784a27bf0b108e0"],["/blog2015/03/Stain/index.html","c649a836402de1eb78724dc743fa5e0e"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","eb5763664770de2ad81033779f908639"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","03c987272211a5f942e69d062a809f39"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","ff2cb76c42d0a8f89afffe3cba095949"],["/blog2015/06/BellPolynomial/index.html","e0b88d71a7882a3eabb42a09499d62bd"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","6a2fc177833eb65a0cc2c32635caa84c"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","ddc64031f2ca76394efcf97dba0450fb"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","efd1de29446d6f67146b87e8e774bbab"],["/blog2015/10/Tiberium/index.html","c0e761b838a911ad97b2cd44802e0b0e"],["/blog2015/12/ChengTianQuan-01/index.html","f96e4b43059fa8b3d06d976344f4804d"],["/blog2015/12/PKTFile/index.html","d8170bf77c2a753533cfde1f83d1b4c4"],["/blog2016/02/ChengTianQuan-02/index.html","fee8243db528a0e3694ded9f85dc5246"],["/blog2016/04/LogicAndExperience/index.html","6e474a91392c2a4b0d1f73c8345afc5f"],["/blog2016/12/CSFFileFormat/index.html","61ed105dca2095ef547bcac5fa976882"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","6d6ec8ef5df5c125a3c2e9d9689e0854"],["/blog2016/12/ProveCRTWithConvolution/index.html","e843189037ed2274049c8f1e01599f92"],["/blog2017/03/MIXFormat/index.html","b5b5233fb43d17718c59216e0c74f06d"],["/blog2017/04/WesternPhilosopher/index.html","21599f049e4bc5fe33171c05d420dcb2"],["/blog2017/05/TheAlgebraOfADT-I/index.html","ce1006775874a4f36f6189b8774ec0cb"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","97adb24948ca311bad76d439d3a24db9"],["/blog2017/07/TheAlgebraOfADT-II/index.html","c021c80c0ed8d8d53dad37b9979e213f"],["/blog2017/08/DnDTabWithQt/index.html","756466f208b3f45d7667379fdefc3cca"],["/blog2017/09/ClassBasedOOPWithMma/index.html","8a7576799e0bcdd95c6c6dd5db3412be"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","ea2445a97d8402d75073b0e330779138"],["/blog2017/11/TrapInCCpp-1/index.html","836b74dc6c254f746f3ad74d7d609c41"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","d8ace16724786ff5284878f7deea5a4b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","a0aa463fbc577413ebf69f1c46853ff0"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","dac48c60c370f8f3feb25d1c936aaf66"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","655653550bffe4fd9a59dd908f56e173"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","15d2b8ab8f5b375ae655b89a3df6e391"],["/blog2018/10/PrintDefinitions/index.html","955aca3202f69055e80032d334241ded"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","21ebd46e67693b439786b4061706abfd"],["/blog2018/12/WolframOnlineDemo/index.html","94217819dfba082069bfa94902ea8c7f"],["/blog2019/01/PointerInWolfram/index.html","24c2f63ac7800934262e14f41bcde4a5"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","c6d568807ada6fbfeebc8e5aafe7c717"],["/blog2019/01/SymbolSandbox/index.html","0fdbb28d42ca66959b82bc4f03a6830b"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","b88893d2034830cde9dc3997b24503d2"],["/blog2019/04/MmaAutoLiterature/index.html","6dc65b728d58da58f759ed5afd39c4a4"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","8a9965f4345c6f9bd005620a2b4678f5"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","2422caff10f229337491c7d199adab08"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","aa6c4950334e7c4be7292642ce6faec1"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","1f9555ac57cfdff2a479b8f61264b1ea"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","93b09f687790484226c6c63705bc853c"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","c92354c9a9f919f20c91d407368fa4db"],["/blog2019/10/SubmitFunctionToWFR/index.html","3f32db919b34072a1e0120f0800cbfe5"],["/blog2019/11/TerminologyAndPopularScience/index.html","a88026d5ebe35a0bdca17b973d63267d"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","25cf55fecf74aeee9dab3335a04696ef"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","6de0a2001f8f506cb9db01cc0b370cc6"],["/blog404.html","25d5eb611da5643f0a9ac0586013e3a7"],["/blogabout/index.html","c49df4c2d70fe5d439549c60d1a28e67"],["/blogarchives/2011/07/index.html","34767518787893dadc85c0c8d9e72d6d"],["/blogarchives/2011/index.html","d546ad0fa89101365a03abcadd52d6fc"],["/blogarchives/2013/07/index.html","7a9e038242b26a329af40cbfb72e8e81"],["/blogarchives/2013/index.html","9bc111f063fcb220d4a898818579b378"],["/blogarchives/2014/03/index.html","8d2637b92bfa420ebe644bfc92e9f582"],["/blogarchives/2014/04/index.html","d5d74e8ad52a375dfa0c9d909049a245"],["/blogarchives/2014/12/index.html","fa26ee6b09ce7ef7b30d02c04fd5dae9"],["/blogarchives/2014/index.html","b9c6c56ecec83b276a15376bbdbbfed7"],["/blogarchives/2015/02/index.html","33b498300491d23aaa297ef56f49321d"],["/blogarchives/2015/03/index.html","5f394bf4b231aecc15dd97be9ada5d23"],["/blogarchives/2015/04/index.html","fef00a50265d363b04b4199b4f981bb5"],["/blogarchives/2015/05/index.html","e5e1bb81c10c9ffaea6eb42a43cb082e"],["/blogarchives/2015/06/index.html","d3e5b9254c21d29809b5e8d6e5f202b4"],["/blogarchives/2015/07/index.html","304c341f1638ff45afd3272b5fb0559a"],["/blogarchives/2015/09/index.html","f7f527c492b95d8133ebf21671b7001c"],["/blogarchives/2015/10/index.html","bfbfce492dd91fed5127e30702ded46d"],["/blogarchives/2015/12/index.html","73b4455af1637133ae3d0ec69ab10d90"],["/blogarchives/2015/index.html","0d6fa05ce17bdd95c5779c63002443ed"],["/blogarchives/2015/page/2/index.html","2dbb0505c6e77427828526868d877b54"],["/blogarchives/2016/02/index.html","4e8c4adbfea887e72db21b032d71af04"],["/blogarchives/2016/04/index.html","1592e42e9513c4bffa0bf22ba30751ac"],["/blogarchives/2016/12/index.html","604114379f1d90d3f16db14d989b0b48"],["/blogarchives/2016/index.html","d81b3765a7a6e85de9773a9f0f97b646"],["/blogarchives/2017/03/index.html","93d2033fdec14d10f9e5c914864a0bfb"],["/blogarchives/2017/04/index.html","36889475ebd9e11693b41ebcdedc7c69"],["/blogarchives/2017/05/index.html","ad98e294b7203751cca80e2b9efe1d2a"],["/blogarchives/2017/06/index.html","959a0d328ba268f5e027600bfd94dbcf"],["/blogarchives/2017/07/index.html","a2a38a96c5fa3a20f1b074df21237861"],["/blogarchives/2017/08/index.html","1d45c8bdd8a4b1993a46be336bcd4c01"],["/blogarchives/2017/09/index.html","40d95f9c39e36d80363e24f5f20a4d5a"],["/blogarchives/2017/10/index.html","1148217db2fe5a100944b3daa38668ad"],["/blogarchives/2017/11/index.html","3482cc921335674b5f47b3c7399e06a4"],["/blogarchives/2017/index.html","c30becf71244d70c761bcd5ab5315a4c"],["/blogarchives/2018/05/index.html","28aaef12e20ee63ce141f16456fc57b1"],["/blogarchives/2018/06/index.html","8eeb166f8598dd77ba00eecba77da9cc"],["/blogarchives/2018/08/index.html","14c49b99e8f91af6b6dbef94ca17f68f"],["/blogarchives/2018/10/index.html","1f189b517cfb24ba1099da689bd3664e"],["/blogarchives/2018/11/index.html","d4e15dfbce704e13da167f3217095a38"],["/blogarchives/2018/12/index.html","496950f909259888ff688357471209a7"],["/blogarchives/2018/index.html","182186d93b28c9def5309404822c9870"],["/blogarchives/2019/01/index.html","fccf9e116b8f4f3844e3b53dae1ddc1b"],["/blogarchives/2019/02/index.html","72a2748d13e75d1a6f8109aa6b759e61"],["/blogarchives/2019/04/index.html","1545787224ebbd317c177be4329bcc15"],["/blogarchives/2019/05/index.html","dfe076993a9bc451eb01b1369f7b52f5"],["/blogarchives/2019/07/index.html","2db4f53f9897578cf7b14b6b9bb713e9"],["/blogarchives/2019/09/index.html","2756270d320eae4c88a62aa29fb9e07c"],["/blogarchives/2019/10/index.html","dfe6979ce3501a29c7952d18341222e9"],["/blogarchives/2019/11/index.html","5a1bd32c8909c028512d33dd90874e54"],["/blogarchives/2019/12/index.html","aeaf7503630464defa580a05a16ade99"],["/blogarchives/2019/index.html","22b67dcc505cfded230e106bf48274ce"],["/blogarchives/2019/page/2/index.html","94b70cc24ef230680cb4cf656b0b1425"],["/blogarchives/2020/01/index.html","7a291b67aa677243a3dd1ea12b3f5625"],["/blogarchives/2020/index.html","6d3e4382b0d537941965e9127a9e86d5"],["/blogarchives/index.html","81927277483f9291b7b2e1c225335f8b"],["/blogarchives/page/2/index.html","81927277483f9291b7b2e1c225335f8b"],["/blogarchives/page/3/index.html","81927277483f9291b7b2e1c225335f8b"],["/blogarchives/page/4/index.html","81927277483f9291b7b2e1c225335f8b"],["/blogarchives/page/5/index.html","81927277483f9291b7b2e1c225335f8b"],["/blogarchives/page/6/index.html","81927277483f9291b7b2e1c225335f8b"],["/blogcategories/index.html","1f96b2db5c1d52864720a8b96aad1648"],["/blogcategories/代码编程/index.html","4eaad477cdafdfcc5fdccb2babeb801c"],["/blogcategories/代码编程/page/2/index.html","91995bee1650134658820b4ea5ce3f44"],["/blogcategories/代码编程/page/3/index.html","b6dcde51b4722e2d8f74a6e9f6b2ddaf"],["/blogcategories/代码编程/page/4/index.html","fd86b52d633f363e16b0ff9d95ea7d82"],["/blogcategories/小说文艺/index.html","55a838dcc119c9caebcf767d454f67e5"],["/blogcategories/小说文艺/page/2/index.html","f6b0947891ca9dfcf3486d3c3d4e7c88"],["/blogcategories/数理科学/index.html","0eab4eda88bb364c128367b42ac0c9e0"],["/blogcategories/杂谈散记/index.html","9745133e7f33ba25be7089ffea8908e4"],["/blogcategories/翻译作品/index.html","321b5e9b371e3621bb41f2f7013b3a71"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","bd39d1c11ce125fd9fe7dc97e3bc75f7"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","a2efe1c88e8fba716b8b8d7d0b441416"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","f637991d90da02245eb19361479e5737"],["/blogpage/3/index.html","0221d4fac401ec09578d02f91f959e46"],["/blogpage/4/index.html","775b8332cebff66903d3970a2474251f"],["/blogpage/5/index.html","0c9406bc6e748c19dde09370d0dfa19f"],["/blogpage/6/index.html","0f71ec12f65e6d54f43bf9e628ed0cca"],["/blogtags/C/index.html","f01cc55764801bdc5841e80d5ce2b051"],["/blogtags/C语言/index.html","aee68f8e7002b740fc16c78bfdfdefab"],["/blogtags/Git/index.html","851cb22c2c2970a28f08d48676729929"],["/blogtags/GitHub/index.html","c2b304a674e2afba801bec891764ccf5"],["/blogtags/Haskell/index.html","d54f3a44ee851d08c8e6e2384b37e2b3"],["/blogtags/LaTeX/index.html","8ebf609e28ff40c5170db0972d6417db"],["/blogtags/Qt/index.html","c8885c6b08e6e0e05bbdf4438e0b1143"],["/blogtags/Undocumented/index.html","40361c50691ae5a2b751dbf0b946d8f4"],["/blogtags/Web/index.html","26a958008a928cf801e11421aa584638"],["/blogtags/Wiki/index.html","2a2f92d4b25f9ce4daf46618349be898"],["/blogtags/Wolfram/index.html","8a991113ff2f50a83ab039768a995f6a"],["/blogtags/Wolfram/page/2/index.html","5d70376839e40f744a675f851b5e941d"],["/blogtags/index.html","4ae979f23f445d358f06a4f87d4a9755"],["/blogtags/作文/index.html","43d50a063243312bff4d7fbc3eb83970"],["/blogtags/作文/page/2/index.html","9dfde39034ef8c41fb88b12dd4c1fdd7"],["/blogtags/傅里叶变换/index.html","8959a9a500594295a6c8e7ba546781b8"],["/blogtags/功能模拟/index.html","a974be191f4a2f881b574f0ee98815d9"],["/blogtags/参考/index.html","3c9a79b7decec3cb6b97ebfe4cb5862a"],["/blogtags/哲学/index.html","f2b23066faf366753543100add6d22ff"],["/blogtags/图像加密/index.html","9cbd626b1f84e55a5c83020382fccc3f"],["/blogtags/图像处理/index.html","18e8b48799f1c46017b52b8e07e6fb64"],["/blogtags/小说/index.html","28cbf9acfdb61d11b174ba9405476438"],["/blogtags/微积分/index.html","474f5b047fda73c05d330889aa7c87e2"],["/blogtags/拖放/index.html","64c5ddda8044a0b0e7cfa6b9a025b06d"],["/blogtags/持续集成/index.html","f0979114848ef591ed20169b91619bf9"],["/blogtags/散记/index.html","b4323985f873d197e7f1763c4fe11866"],["/blogtags/数列/index.html","5bd6f82e1c305d7ad201882f46539398"],["/blogtags/数学/index.html","e8261cda130384753ec4a4092ac3954d"],["/blogtags/文件格式/index.html","0706ab878e85f4afd9bdc501e46493be"],["/blogtags/文学编程/index.html","d3be7397712935e790cd48bdd40d1513"],["/blogtags/文言文/index.html","6032879713a7034fed146c8b3c150cc7"],["/blogtags/杂谈/index.html","eab428cad8a18b121c42b8eeb3be420b"],["/blogtags/概率论/index.html","a4c1d2f4371899aa381c92c6d6040f49"],["/blogtags/混沌/index.html","695204aec2cda7bbce892d2cce99f7a3"],["/blogtags/科幻/index.html","4a15cecaf98735e4f03d849942902eda"],["/blogtags/科普/index.html","1afb38d82cc614755c1396a415f851c3"],["/blogtags/程序设计/index.html","402fd29103931e4c387ebe965134df83"],["/blogtags/笔记/index.html","60afe2bc486765452202db9855cbf370"],["/blogtags/符号计算/index.html","d6f851b2c9dcf36050acb093684d6824"],["/blogtags/算法/index.html","b5c70ab736d90baa1a501279a3d5a253"],["/blogtags/红警/index.html","a8dcb9ebee9f647bc2eec218de93a852"],["/blogtags/编程/index.html","17d543f416261076c1b92d2fffa69747"],["/blogtags/编程/page/2/index.html","c69ebd521e03633b8222ba5673eb352f"],["/blogtags/翻译/index.html","723d812961dfa7ea5b95e6be2305b985"],["/blogtags/语法/index.html","01c25b01df937e883946cc293f540abc"],["/blogtags/踩坑/index.html","e0f5b124cdaedddea37c00db38914ea4"],["/blogtags/逻辑/index.html","1205c6259e0c0b75011911c0b7787775"],["/blogtags/题解/index.html","a0c5aa2cb0fd928093a3bdc056da1cac"],["/blogtags/马克思主义/index.html","79cc88f532f2d8fedb55957c4f506df1"]];
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







