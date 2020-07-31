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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","ec71816c7f3659c7fd1ccb3159d23032"],["/blog2013/07/EdisonIn21Century/index.html","66e904a8d249abfee98fcc9423da28ac"],["/blog2013/07/FenDou/index.html","7d850b5a90bdd1e5655a28c1015941b9"],["/blog2013/07/Qie/index.html","fe2319d1f03e99aceb2920406dfc9941"],["/blog2013/07/RhapsodyOfSand/index.html","cc54225d0c7fcb25bcb5095037918037"],["/blog2014/03/KTimesSum/index.html","57d55dfe2fcb84c8e5ce0135c7739bf2"],["/blog2014/04/PiPaXin/index.html","ccee5bf066fff7065cdf5db477c7b941"],["/blog2014/12/Miniascape/index.html","d786b8d91383db7d9b82bdd549b01ff6"],["/blog2015/02/ShiBiao/index.html","301b851775b1dfa42ee2f08fbab66d8d"],["/blog2015/02/Wei/index.html","e72e866447e1729e52e399c8e265f779"],["/blog2015/03/Stain/index.html","89a3e65a969b750fd4b31f5a68f34b78"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","43557514ba6a29b31df30da32d92d52b"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","c86987e6d11e7f2aeae7bfe75cd258e0"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","77d30d208044c033f35723ab4ed1a6c3"],["/blog2015/06/BellPolynomial/index.html","a7563281ecea722eeb6541899be17f59"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","f64e033df70b743ca46e31c8cc009dca"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","d153fee053a1dcbcdf48ee84d833c2f2"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","c464bfe9bca929ad123d7e2c9040fa4f"],["/blog2015/10/Tiberium/index.html","2b1bec4939109fcb6a43dd017d822dad"],["/blog2015/12/ChengTianQuan-01/index.html","0a7d72af54a4478dbb8f1638882ae342"],["/blog2015/12/PKTFile/index.html","eba37525cf9dff10e77f43c3f8257623"],["/blog2016/02/ChengTianQuan-02/index.html","a35406a12129dff1faa700a313321a78"],["/blog2016/04/LogicAndExperience/index.html","463495b6ffdb58250bd8e232ea933e8c"],["/blog2016/12/CSFFileFormat/index.html","54d57507fe1318a2bb9dcfba770bbc5c"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","9f9b63b2e3ed975b05a30b8dff62dc96"],["/blog2016/12/ProveCRTWithConvolution/index.html","3cee986c7ea039c3391cb898725529ee"],["/blog2017/03/MIXFormat/index.html","fc36479961acd055f3f87b9baa2f5b86"],["/blog2017/04/WesternPhilosopher/index.html","5c3708228c7eada2f210a3597e6bc7da"],["/blog2017/05/TheAlgebraOfADT-I/index.html","ce5ee81e6d31fc5bf2f2c1ff1765909a"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","de8a3b92114b0361aeac5191d20a89b7"],["/blog2017/07/TheAlgebraOfADT-II/index.html","2a22649ab09e19d287ba8b67636c3cb5"],["/blog2017/08/DnDTabWithQt/index.html","756466f208b3f45d7667379fdefc3cca"],["/blog2017/09/ClassBasedOOPWithMma/index.html","4de97640a3cd280deefd90db53398c2d"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","ea2445a97d8402d75073b0e330779138"],["/blog2017/11/TrapInCCpp-1/index.html","5f55a200e4aba4b5ed3ed04ad1e7227e"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","ceb8ed5cd34d89ab28aa472b5ee1c3fd"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","50e9c7b9f88acb1a461be13c240e3a7f"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","9c07440b65153627b3281a1d0be1e529"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","655653550bffe4fd9a59dd908f56e173"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","6a57b9c9068ddba7508810d862450abc"],["/blog2018/10/PrintDefinitions/index.html","103bcbf2af66dfc00a3faf7231eaae1a"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","21ebd46e67693b439786b4061706abfd"],["/blog2018/12/WolframOnlineDemo/index.html","a9345bd667463d4f2a941d1e4c881168"],["/blog2019/01/PointerInWolfram/index.html","e018e98841f565c90ee7cefc5ed8c90b"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","ab5a8025a502395306c5389f4fa108b9"],["/blog2019/01/SymbolSandbox/index.html","3846afe5d662e7e120c878bcf11bdc85"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","ac4291c8785ffbd43600ab69143f996b"],["/blog2019/04/MmaAutoLiterature/index.html","3165999611e92498f5548a9534ba566f"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","8a9965f4345c6f9bd005620a2b4678f5"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","88499e606ceb8a071667eaa86d134685"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","a992457ce7db27abbd385c22138ec4a2"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","f077d6b9e918de8de8e17ac968a7727f"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","6b413bab4d7b87440427465365ff5564"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","a6321518e74a9164e204d70436ac78bc"],["/blog2019/10/SubmitFunctionToWFR/index.html","4eb2592e00fcf7874b3e25f3c001a2a5"],["/blog2019/11/TerminologyAndPopularScience/index.html","a5d1d5c61c395f9099cfa62869b0df61"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","75b409f2e465fb3efc191c8d3e837d49"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","d85a7fb4122a7680b5bad46cf52830d7"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","119c388945dc31e5ed24f1689a5ef58f"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog404.html","25d5eb611da5643f0a9ac0586013e3a7"],["/blogabout/index.html","c49df4c2d70fe5d439549c60d1a28e67"],["/blogarchives/2011/07/index.html","1855d7d4eba5dcf84a9a1cd16f610494"],["/blogarchives/2011/index.html","0ddf4671d7013172c33a902db37239cb"],["/blogarchives/2013/07/index.html","9fce6f698723a0098083ec8c761b181e"],["/blogarchives/2013/index.html","250ef7a91e37df367d5ee65194d234e9"],["/blogarchives/2014/03/index.html","20520196fa215668ac1c66a32f6ffe7e"],["/blogarchives/2014/04/index.html","5b7200e8d2db17b73f23a90950bea6df"],["/blogarchives/2014/12/index.html","e38e1acbda262994f9ec708a2aa9037d"],["/blogarchives/2014/index.html","63041aac6bce25ce6504749195226bda"],["/blogarchives/2015/02/index.html","cf3146d4b4db2491881f446f6aa71243"],["/blogarchives/2015/03/index.html","f1b1cac50ba36f6a8c4c3df289f5e407"],["/blogarchives/2015/04/index.html","371bec3ac70b6a3e45f02042b07dd8be"],["/blogarchives/2015/05/index.html","d4242b30978b965f5a11d3fd84ddd4d6"],["/blogarchives/2015/06/index.html","b198b28f85af317ee8d488f1baeaf57f"],["/blogarchives/2015/07/index.html","d0cc50f0b0d872b192915879c0d73665"],["/blogarchives/2015/09/index.html","be41ea0af93462540281c47f5b2b556c"],["/blogarchives/2015/10/index.html","f306d7bc1b97a409dbeddb3177f27e71"],["/blogarchives/2015/12/index.html","7dce9ab48a749b5a59e1eae1225944d7"],["/blogarchives/2015/index.html","3774bafbbb741cabee484247534574e7"],["/blogarchives/2015/page/2/index.html","e78b3a13eaae09663e5bc0d77465a21d"],["/blogarchives/2016/02/index.html","3ed3943d43886eff41d953e13e96bccd"],["/blogarchives/2016/04/index.html","b13e83dfbc272f64205806633699ebdd"],["/blogarchives/2016/12/index.html","6cd6bab69405f4e34e31a3781495ed11"],["/blogarchives/2016/index.html","6f9c1afcf169f27c39de0dc4787dc1ed"],["/blogarchives/2017/03/index.html","630eac96542d5425f0e17e37dba33435"],["/blogarchives/2017/04/index.html","1f4386b062a2160c9b63a0291e9bbf19"],["/blogarchives/2017/05/index.html","411776611e4f368bbbc35b4fe11c2320"],["/blogarchives/2017/06/index.html","08d52cd28906c975d94113d7d3beebda"],["/blogarchives/2017/07/index.html","884aed5546fa8cf079b014172ee2e618"],["/blogarchives/2017/08/index.html","4e99b0da3c940a5d3f8f299788b9fa31"],["/blogarchives/2017/09/index.html","765723d2edc2fd24972c4a82cad96d40"],["/blogarchives/2017/10/index.html","3971b193b96c501a24ae54be38b73f0d"],["/blogarchives/2017/11/index.html","0f410682710214bc003c038c6b584296"],["/blogarchives/2017/index.html","a272fe3085353f9593a93b3d55533c2b"],["/blogarchives/2018/05/index.html","a5f4fb9f3436440a29250458e5a46d3c"],["/blogarchives/2018/06/index.html","a3db42ae46494a92cfcddfa8922d4839"],["/blogarchives/2018/08/index.html","966a831a7b50c6181b1d22f660f737f8"],["/blogarchives/2018/10/index.html","b319893d60c6b188d22e84b090054dec"],["/blogarchives/2018/11/index.html","567173adfe0f680f3b0c84e1fd61d1cf"],["/blogarchives/2018/12/index.html","2dc7a2c9e9ebd55d1fff1d0a4dba1af1"],["/blogarchives/2018/index.html","84b14278888e0adc9bbfc33065d1dabb"],["/blogarchives/2019/01/index.html","2bea4d2f5041b2e2dd0cd758b30bd72c"],["/blogarchives/2019/02/index.html","bf47fcff00f09613464325ff36427379"],["/blogarchives/2019/04/index.html","b323dc4331d453c33668563e1c28731e"],["/blogarchives/2019/05/index.html","5dff2995c58de85bf9e93f54c26bca03"],["/blogarchives/2019/07/index.html","81895b19d075045161d78881b98eaa0e"],["/blogarchives/2019/09/index.html","9af9d142c99b432046f889a7ee9d7185"],["/blogarchives/2019/10/index.html","be90394102b50ddbe7cd0ddf640a2af1"],["/blogarchives/2019/11/index.html","2a4b405f41a88d74d78374f40d7ccee5"],["/blogarchives/2019/12/index.html","33f222b61909952f18ed78bb0ca02c5d"],["/blogarchives/2019/index.html","056d2b6a53d84ea89c74b6aa103b2c16"],["/blogarchives/2019/page/2/index.html","d766816000c8fb601b761379c352ede2"],["/blogarchives/2020/01/index.html","8d5cd55d82a70fb5df016ebf2ee8ea41"],["/blogarchives/2020/07/index.html","edfcbf662d4d422029e14c328564bcef"],["/blogarchives/2020/index.html","6050e779d80b442e2829e043e29872bc"],["/blogarchives/index.html","bc42fdc9af64b66c96d90cc9b62c2675"],["/blogarchives/page/2/index.html","bc42fdc9af64b66c96d90cc9b62c2675"],["/blogarchives/page/3/index.html","bc42fdc9af64b66c96d90cc9b62c2675"],["/blogarchives/page/4/index.html","bc42fdc9af64b66c96d90cc9b62c2675"],["/blogarchives/page/5/index.html","bc42fdc9af64b66c96d90cc9b62c2675"],["/blogarchives/page/6/index.html","bc42fdc9af64b66c96d90cc9b62c2675"],["/blogcategories/index.html","a6013f602f63e17c936ff971e58efb6d"],["/blogcategories/代码编程/index.html","a15a12628814ca518ca5fc7317562483"],["/blogcategories/代码编程/page/2/index.html","259971ef3b01f37032f89bac63cf886e"],["/blogcategories/代码编程/page/3/index.html","97a356e24b7d4e604964905e03a60bbe"],["/blogcategories/代码编程/page/4/index.html","dd22d81871d943058ff1873e4eae5176"],["/blogcategories/小说文艺/index.html","b658afa9dbaf3d2eaaa28c45c1150d42"],["/blogcategories/小说文艺/page/2/index.html","be1dad94fecd59941fb9e717ca5f21e2"],["/blogcategories/数理科学/index.html","43d7ea7d4ca128476bdc2590886469a2"],["/blogcategories/杂谈散记/index.html","0788885259817b488bca51944a450f6b"],["/blogcategories/翻译作品/index.html","9dce76e9982600459a254aff5c69b7dd"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","bd39d1c11ce125fd9fe7dc97e3bc75f7"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","3a3ad0c236ed09b299838c0cc766e989"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","ab257baec8a9319dde448cc931c3064f"],["/blogpage/3/index.html","07b77929f0d401d3141d8483d96b0496"],["/blogpage/4/index.html","52fa57978dc8e2f033b84c96e65da384"],["/blogpage/5/index.html","478f001ae10927903aa56dc5af042916"],["/blogpage/6/index.html","cd328df8b58874dcc27289819be1437e"],["/blogtags/C/index.html","ff5642e827d5b8ba65b87789e1a3146b"],["/blogtags/C语言/index.html","36c1a5f1bbcfe9538ba5524097d304b3"],["/blogtags/Git/index.html","cc06f786a5b09722de88fa9d0ab7b207"],["/blogtags/GitHub/index.html","947fabbfcaea45b1bdeeccdf0539a4ae"],["/blogtags/Haskell/index.html","aaf0147227a759de06ac866f8f27a1a5"],["/blogtags/LaTeX/index.html","fd4ff7374d4c4537e3d20b182d8992c2"],["/blogtags/Qt/index.html","f5c5f76ad74b9efa9de349de22fc221e"],["/blogtags/Undocumented/index.html","bfc86df1e2c7de0fd8769b39c73d77ba"],["/blogtags/Web/index.html","6c476729d91c665d95c56246f3f80f40"],["/blogtags/Wiki/index.html","c1042f3224670563b600ed2259245050"],["/blogtags/Wolfram/index.html","afe934c06d4909d4f43cf025a9a03355"],["/blogtags/Wolfram/page/2/index.html","341315a1538548d7a03284877d228d9c"],["/blogtags/index.html","454bcd976e38202c2eb4dac6b5b6cfbc"],["/blogtags/作文/index.html","852b0b1f3e29616756a5cd1621340493"],["/blogtags/作文/page/2/index.html","3ce4b11c93532428099cee44e7eab23e"],["/blogtags/傅里叶变换/index.html","bf0376d5e79320c11f2db9fe2b6cd430"],["/blogtags/功能模拟/index.html","2f322f3e1f419822024c99a37f5bc973"],["/blogtags/参考/index.html","d21bbcb8cd3f1ee756c5c202112fc578"],["/blogtags/哲学/index.html","d5091e82922bc727347eee9a66ccdc5b"],["/blogtags/图像加密/index.html","3399ed358b5da9bb23ad5ce4a57885c2"],["/blogtags/图像处理/index.html","bf001a4ac5a5a9620e1212b168f7d43c"],["/blogtags/小说/index.html","1b359ed7a7bfb87f239afde6079a0188"],["/blogtags/微积分/index.html","bc96c523aa080c26cdda058710ca542c"],["/blogtags/拖放/index.html","e57162685238e84df247262ba97bd035"],["/blogtags/持续集成/index.html","dc1674876cf0fb115ebecc5ecc6b73d8"],["/blogtags/散记/index.html","991395ef869fd9114317a0de3674ba4c"],["/blogtags/数列/index.html","f861d74ea6911a5d89600f6373a64493"],["/blogtags/数学/index.html","c77faa1f09d6cee06d6e24f48360167d"],["/blogtags/文件格式/index.html","ea03435ecef569f3154a60fd5fd1fa01"],["/blogtags/文学编程/index.html","abd722e3952267885bc16a495424d049"],["/blogtags/文言文/index.html","3c58c057c36183ac4caecef85cffacdc"],["/blogtags/杂谈/index.html","73cbe97f0482bde433d63bb762cda47f"],["/blogtags/概率论/index.html","baede9febc1849ef1cd88e62c1f22777"],["/blogtags/混沌/index.html","3de5292784354a879b49e717b28241a2"],["/blogtags/科幻/index.html","ddcb2301574d40f29a4eb30bdb354947"],["/blogtags/科普/index.html","7b1ecee5af212f77ef68a856294cb8d2"],["/blogtags/程序设计/index.html","82f2bdcbab455b5bbc1f7bffd8009e0d"],["/blogtags/笔记/index.html","c27297e54a514caf8c3d71fca4122760"],["/blogtags/符号计算/index.html","7f701f1960fc1c66fecd08f10d2c4dd7"],["/blogtags/算法/index.html","e63dede532689c28e27902d9e95f829c"],["/blogtags/红警/index.html","f5ebf8f3ff4510dcdddeacf8df906493"],["/blogtags/编程/index.html","68e2d61e14b7a83cdec36b549be01248"],["/blogtags/编程/page/2/index.html","19ba0d6e20ea6943c9ae547ce9b2ccc5"],["/blogtags/翻译/index.html","aaf7d7f6204554ac2257eab8a70d2e01"],["/blogtags/语法/index.html","e0c466ef21a591f5913a95cd7924e074"],["/blogtags/踩坑/index.html","1324501efd9a5c3ace2cde5f507b9aee"],["/blogtags/逻辑/index.html","aea4f925656b824515e676dd684f6bb7"],["/blogtags/题解/index.html","4dfd174c0fbc2dcec6e9f6622dbbe545"],["/blogtags/马克思主义/index.html","e40dbe45050e634c44250bf912520cad"]];
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







