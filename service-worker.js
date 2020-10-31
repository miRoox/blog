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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","eeb9215a8557eb14e63023284d0f95f3"],["/blog2013/07/EdisonIn21Century/index.html","21396950d64af4993a6f949b476865ed"],["/blog2013/07/FenDou/index.html","8b3bbc8ecd586dc2b5dc7b85b9c6da9c"],["/blog2013/07/Qie/index.html","c2fde01a9a3adc3ac95282ee7fd17602"],["/blog2013/07/RhapsodyOfSand/index.html","dee4824db1dd5d6d78df1c807653cf0f"],["/blog2014/03/KTimesSum/index.html","1869f3e66e4d0180efea80768c7b4c7d"],["/blog2014/04/PiPaXin/index.html","39c0aced3f228f5f7038ebce0baebaf5"],["/blog2014/12/Miniascape/index.html","822cb17d8b3507d1f934b907c34fdf08"],["/blog2015/02/ShiBiao/index.html","ca9ddbd4f0661fecaa4d07bfd31c775e"],["/blog2015/02/Wei/index.html","c4a8cb283b98214679c5b34f09616765"],["/blog2015/03/Stain/index.html","a461c779b3ed817ca292db002aaf9edd"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","822e09c6a52a31455a43e08cb49ace57"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","d38d80b0d51120ab7ce1e8d28e33058d"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","6f36c1c82b93b89efe0997311ea63226"],["/blog2015/06/BellPolynomial/index.html","b4edefd66505b137c78a0ee0cade1c3d"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","dcfa94034f2eb7073eb4a21491c67375"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","cc4524c6878f9344a0af585dcfcad893"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","76cfc30e040d781e70f69c64b897dc25"],["/blog2015/10/Tiberium/index.html","f9c2c74b31f94351c58930a818212284"],["/blog2015/12/ChengTianQuan-01/index.html","ad12c8581c64fa8c8e881a2c858c7649"],["/blog2015/12/PKTFile/index.html","b59d2f5bcc1aeedec5fe17baf97d8f49"],["/blog2016/02/ChengTianQuan-02/index.html","84c630f6868b5cca8a08dd0078c6d3c7"],["/blog2016/04/LogicAndExperience/index.html","03788319ef371f20e839e9b2871159a2"],["/blog2016/12/CSFFileFormat/index.html","939714ee0cf30a69d9d22a0191e2da17"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","098e72e3b0ee701b9e68114da52d5bc7"],["/blog2016/12/ProveCRTWithConvolution/index.html","7217564416ad13ea159ab1e304be8c4c"],["/blog2017/03/MIXFormat/index.html","5c711b9e9b8c760fda9a7ad941cbeff0"],["/blog2017/04/WesternPhilosopher/index.html","aabc3f53f9a0f1984dd6496198367315"],["/blog2017/05/TheAlgebraOfADT-I/index.html","996dc6d8b96aa29e80d1754513b1ac36"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","c7e463043e05eabbcab7e2c1a854eec7"],["/blog2017/07/TheAlgebraOfADT-II/index.html","6c6f042bd3cd99d604be7afa32e035e8"],["/blog2017/08/DnDTabWithQt/index.html","756466f208b3f45d7667379fdefc3cca"],["/blog2017/09/ClassBasedOOPWithMma/index.html","9cca620b59121c7f63916282b7ecf6e4"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","bd0d7effef944d2527477ff95587f54b"],["/blog2017/11/TrapInCCpp-1/index.html","55540f94da1b25b5ebe53c0db0570c7b"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","c3493951c1d8507cb75d8c2c74d853e8"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","bfe11a614716de11c5a4ea0f6230b6db"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","db6aa28f5d841c2dfc0388cfea743d26"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","655653550bffe4fd9a59dd908f56e173"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","c1a5b4939a3d2b4edee3c46e848c86e3"],["/blog2018/10/PrintDefinitions/index.html","155af101188343f4c083374148ce6d2b"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","21ebd46e67693b439786b4061706abfd"],["/blog2018/12/WolframOnlineDemo/index.html","3ef993775d67af982f07c346f90ce414"],["/blog2019/01/PointerInWolfram/index.html","668aeec2b59bd8a21b8f0c9a36a416f8"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","6eaef9d21f0ed77c3752b761c6a76be3"],["/blog2019/01/SymbolSandbox/index.html","0d854bcf6d70a3ccf10e4b618bc286c0"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","8de521b83a04e6e805ca6007ee827d2c"],["/blog2019/04/MmaAutoLiterature/index.html","417c53e0e24ea651957d02664bf3a87a"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","8a9965f4345c6f9bd005620a2b4678f5"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","6336fe25efb67683df366ed64285efa6"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","149b66f9e7b3203a8d544cb64e0cfeaf"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","7f148ee64c0763877bc05eeeb0ca34da"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","5723eed77ec1d19ed59ce443514416ab"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","3e7341dd8319db051986629df4948105"],["/blog2019/10/SubmitFunctionToWFR/index.html","c39e63c441aad2423bf205207cdbbb6d"],["/blog2019/11/TerminologyAndPopularScience/index.html","ba6d86ddccf39cc5ce00bf8c902ced98"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","242aa479f2616cb647fa3c3142cb1444"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","fca09982dfb231d7aa9e412bc65e0ce5"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","9f8986c10398ac08ada0e68aace959a4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","f20d23cb6c028c6cd1b5c1cde577a3e2"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","2884a90bb1f6f64568d414aaeb58e675"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","59388066b6bb35e5d0e6d8955c6599e8"],["/blog404.html","25d5eb611da5643f0a9ac0586013e3a7"],["/blogabout/index.html","f56a4f35e28fa64246698f881fba31cf"],["/blogarchives/2011/07/index.html","075fe1561cdeab8b9cfe1ce0abd1c0c5"],["/blogarchives/2011/index.html","59d3d6a49c389247958bf41c1740a129"],["/blogarchives/2013/07/index.html","b40dd09483e27c973d23594518bceb74"],["/blogarchives/2013/index.html","6ab3d2c5a40c9f4f5ecf1df67056df59"],["/blogarchives/2014/03/index.html","689105e7a17b80577ab93f8e1d8e2c9e"],["/blogarchives/2014/04/index.html","54963ae964841c7fa1f4af7517d04cf2"],["/blogarchives/2014/12/index.html","4874352040c2f91439a57be8ceb59501"],["/blogarchives/2014/index.html","f021c70d3264f05ded882643ae912b41"],["/blogarchives/2015/02/index.html","8857bb4f1200980af1c30ff82fb12b89"],["/blogarchives/2015/03/index.html","6a409f41e28fee0f2ab8aa6311d4ee13"],["/blogarchives/2015/04/index.html","5983c6c961d04e614944e73141350650"],["/blogarchives/2015/05/index.html","590a9962a53709106939f3c614a784c4"],["/blogarchives/2015/06/index.html","0c0cc763034223658c41e210f4e3aedf"],["/blogarchives/2015/07/index.html","ed7b7926ed119c1b7bc55233e8147362"],["/blogarchives/2015/09/index.html","d3869eaf04005d4141a8fbe8ea8fb804"],["/blogarchives/2015/10/index.html","d762999a06dd0179b2c24ae68e6ecd30"],["/blogarchives/2015/12/index.html","1ce099f50a0e7a405f58d9bcbff14df8"],["/blogarchives/2015/index.html","ed9a7fed6f04dc1cbe173f8536007b7c"],["/blogarchives/2015/page/2/index.html","7fb254ec89f87cf4dba773cb02f5ce52"],["/blogarchives/2016/02/index.html","546c95359d90e77b60fd062b57a4f723"],["/blogarchives/2016/04/index.html","2e8e9ee009053f1c1089739bba917b90"],["/blogarchives/2016/12/index.html","4e506916799b6dc4e5295d250175e8f6"],["/blogarchives/2016/index.html","8cfdbfb5233d228df6b475c685ba6831"],["/blogarchives/2017/03/index.html","6321bf62c0fd7b115741b6556e9936e2"],["/blogarchives/2017/04/index.html","c4d50dea8a2fc62ad1831bec49f43554"],["/blogarchives/2017/05/index.html","018ceebe7b8cfb38cc3618a21233032f"],["/blogarchives/2017/06/index.html","eb31dcd80a7d9a7b1ea35082cb5d095e"],["/blogarchives/2017/07/index.html","5ffabd188545f0fd22639b9ff2650269"],["/blogarchives/2017/08/index.html","47c7110b4a9348192a7c43f781b6bd60"],["/blogarchives/2017/09/index.html","c12149675946068802242945a8d07770"],["/blogarchives/2017/10/index.html","029b094c35d5a5ba5cf490e8d8e15821"],["/blogarchives/2017/11/index.html","ce3057b70164095d687d66c3208fd021"],["/blogarchives/2017/index.html","1006a0d25f87b39b71d0113bf6585b19"],["/blogarchives/2018/05/index.html","28cf8868718e78e06ffea60669a8f477"],["/blogarchives/2018/06/index.html","14621e907cb095abdc92dd361e7abc47"],["/blogarchives/2018/08/index.html","acc6d1c040e257e2d243bf22323d2698"],["/blogarchives/2018/10/index.html","db859ea300fdd383cbd937c966bcad4a"],["/blogarchives/2018/11/index.html","2af2fa8486313b80a4ac5d0d5f513a37"],["/blogarchives/2018/12/index.html","31a543b7915cd085602db334000ccf59"],["/blogarchives/2018/index.html","b596c9cce248c20f54d8a6b2aa88d37b"],["/blogarchives/2019/01/index.html","515468c798eac1cf1192f126d26c939c"],["/blogarchives/2019/02/index.html","3c6c23e85312595304c5428d35ce8ecc"],["/blogarchives/2019/04/index.html","dc23d5e981defe5a0b1d39e4ca647774"],["/blogarchives/2019/05/index.html","52c3bb01970e59f38fe03a1ad3894936"],["/blogarchives/2019/07/index.html","054f4fe22c9602dd58d57715fa4ae338"],["/blogarchives/2019/09/index.html","2bb1aad41ba904b024d74fdcc95eae78"],["/blogarchives/2019/10/index.html","b8ca3d9757200da68b6b79d1f385e025"],["/blogarchives/2019/11/index.html","f2f0d6262e9c54e0a9526d91fa4dbaa6"],["/blogarchives/2019/12/index.html","e6ac4da385bb1ad5cd7a342baf0b6f2e"],["/blogarchives/2019/index.html","29f05479177b353a0becff9e3db9bf55"],["/blogarchives/2019/page/2/index.html","5d3494c7b9335b6a6912cb636148f1cf"],["/blogarchives/2020/01/index.html","7eb16c7cc3df9dcb57d8b0c2b00c5ffc"],["/blogarchives/2020/07/index.html","97bf105c835f3bec11d4c35729ed2995"],["/blogarchives/2020/08/index.html","3d818fba33f3aec47c5685df05e6cb15"],["/blogarchives/2020/10/index.html","b42abf0f7156bebd0c3068549744c1d2"],["/blogarchives/2020/index.html","710c973c044ee07a0965e7f27ce05627"],["/blogarchives/index.html","4c5a023a2764fe3f729190addb1ebf74"],["/blogarchives/page/2/index.html","4c5a023a2764fe3f729190addb1ebf74"],["/blogarchives/page/3/index.html","4c5a023a2764fe3f729190addb1ebf74"],["/blogarchives/page/4/index.html","4c5a023a2764fe3f729190addb1ebf74"],["/blogarchives/page/5/index.html","4c5a023a2764fe3f729190addb1ebf74"],["/blogarchives/page/6/index.html","4c5a023a2764fe3f729190addb1ebf74"],["/blogarchives/page/7/index.html","4c5a023a2764fe3f729190addb1ebf74"],["/blogcategories/index.html","6d2f63187256642bb45696d3b60f53bf"],["/blogcategories/代码编程/index.html","713719a0c021eed2a6bb19c49b4c77e5"],["/blogcategories/代码编程/page/2/index.html","2064b14722acaf8dd7f3c8dc80ab5387"],["/blogcategories/代码编程/page/3/index.html","e33d1b013567197027eea57344360d0b"],["/blogcategories/代码编程/page/4/index.html","67ec1330ba08e0f5743ef648f37ce145"],["/blogcategories/小说文艺/index.html","e647adfff7231afe972d7de5a7f53166"],["/blogcategories/小说文艺/page/2/index.html","ebf75da2e9a2a04583c0cf3278cc1b42"],["/blogcategories/数理科学/index.html","230a568c68a65d1fb06424b92222d54f"],["/blogcategories/杂谈散记/index.html","d1907ec33c2fca819c28f984bff861b7"],["/blogcategories/翻译作品/index.html","6d734d3be0656be2e968336871f91d3c"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","660118faef5c2657033db5368758537f"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","f6af3b0a5835f0807b12edcebd24bab4"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","45d2088d05fc266cb1b04fe0bea2278e"],["/blogpage/3/index.html","f498e2f7f9f984cf1d8ca7cc432a99ef"],["/blogpage/4/index.html","ff724c525aec95aed502677e48714b47"],["/blogpage/5/index.html","346d892c0d6f738eee9758d47c0510ea"],["/blogpage/6/index.html","66d790a659a5274e4cdae100e095f710"],["/blogpage/7/index.html","ceb4e3e4ecb9e15c745921cc0735a91d"],["/blogtags/C/index.html","352fec896b2598a56645b1ccd97334cb"],["/blogtags/Cloud/index.html","a48511e30b938d272ed8c05157d38047"],["/blogtags/C语言/index.html","7afecd894ac29f6bb08d986510cb698d"],["/blogtags/FlyCapture2/index.html","5fa23909c2e1c651499f156b2c75a4b7"],["/blogtags/Git/index.html","4d1d5860be85f68d1326d9d398bd1e17"],["/blogtags/GitHub/index.html","1696758009a57e1c6630ae4bb51291f8"],["/blogtags/Haskell/index.html","8db159d41a5ed6547173e10da1ef7fbe"],["/blogtags/LaTeX/index.html","84df0f0aaef0bb4d14364c399c4cdc05"],["/blogtags/LibraryLink/index.html","574409a8c8760752d07379f51b07c0bf"],["/blogtags/PMAC/index.html","1488c7256f581773e7d8308ca528a54c"],["/blogtags/Qt/index.html","d3714730447195218873dec13e269a56"],["/blogtags/Rust/index.html","c7a9ece842e177de27eab3785d6be5a2"],["/blogtags/Undocumented/index.html","aeab237f1536141ab3e3c88f50d10c14"],["/blogtags/Web/index.html","07e3743ef5dc7a671851fe4d40bd20f6"],["/blogtags/Wiki/index.html","9942691600f461515bda70f289d21db5"],["/blogtags/Wolfram/index.html","27c6077389288ae71ae1ae9c9f6aef80"],["/blogtags/Wolfram/page/2/index.html","3edcf603d48a04921db19b1fbb1280d3"],["/blogtags/Wolfram/page/3/index.html","d1e5bbcce5f0da8528df4faa1a60e00c"],["/blogtags/index.html","e7804b2a6c37fac29166cd5a5e0655c4"],["/blogtags/作文/index.html","f5525f7e11ce41ddcc6763b439087f60"],["/blogtags/作文/page/2/index.html","6a5da57eaf8c33f261e4967571f8dedc"],["/blogtags/傅里叶变换/index.html","71cb8d64cce19b68284f2a708d2df7b9"],["/blogtags/功能模拟/index.html","58ea8a3027f946d1bece24f25510fa92"],["/blogtags/参考/index.html","e96fb5107acce86cd5ce09eac07a76bf"],["/blogtags/哲学/index.html","2ebd5f2db304ae90825e7238e1169f2f"],["/blogtags/图像加密/index.html","643376168ac0b1c08e8ed6fec6b925ab"],["/blogtags/图像处理/index.html","a0b0d2fd242a664e98335495402aee70"],["/blogtags/小说/index.html","cca96c34e74dcc52ed93e63bf93770d2"],["/blogtags/微积分/index.html","c9b08003ea859c06b1604d01b4cd767f"],["/blogtags/拖放/index.html","35f4dd98dfc7ec034290d39d27ff5023"],["/blogtags/持续集成/index.html","34741b3bd552f9c882e9a89c6bfaab62"],["/blogtags/散记/index.html","38a678f9c8f1a4daa26eb5d8737d302f"],["/blogtags/数列/index.html","e1166ccb12c02842beb323710f9ddd81"],["/blogtags/数学/index.html","1bd9f7bc9f87fa003723bbd9cff5a99f"],["/blogtags/文件格式/index.html","99c722e87361a6b4623fd1330af935ac"],["/blogtags/文学编程/index.html","b587ea209be8b3d1cfb9693ecfef0617"],["/blogtags/文言文/index.html","9f44b5f00b84f0686db18daaedfd7cad"],["/blogtags/杂谈/index.html","0a2be17a7187a45fc8c10eebbe03154d"],["/blogtags/概率论/index.html","a0aef89ee198bb8ecb2e761b05c41cae"],["/blogtags/混沌/index.html","9024391e71f96ecdbe404c732dc27676"],["/blogtags/科幻/index.html","1b75d28158078e50ad82b5835939f7b4"],["/blogtags/科普/index.html","5b288bf1ed744028c7f1be303dac911f"],["/blogtags/程序设计/index.html","9517f2b78e4b85ed132ea73492ea3e0f"],["/blogtags/笔记/index.html","82f4a724c53daaab9b599cb6c971deed"],["/blogtags/符号计算/index.html","0b99c8524a1637548b44422c6f0f1f84"],["/blogtags/算法/index.html","b7d5957bdef283ab4266057477191d41"],["/blogtags/红警/index.html","396cee4ecefefd5fb915f8a395351ce3"],["/blogtags/编程/index.html","5b85a058bf8a17fc9490d3e4de6d63af"],["/blogtags/编程/page/2/index.html","9acfef764ffa04331f076c4a5950dfe6"],["/blogtags/编程/page/3/index.html","8a685e3aefa762757fe29480254064cc"],["/blogtags/翻译/index.html","bf0182fdace3d78ca9212cb3970dcce9"],["/blogtags/语法/index.html","a3cc840363611a2a90a6b9fec509ed86"],["/blogtags/踩坑/index.html","f181dfaadf152ced4a83dfe26bc9da17"],["/blogtags/逻辑/index.html","c5e8493dd7c0e1d80127a8dbec85529b"],["/blogtags/题解/index.html","0b2b16499fd4acb8ec3944c839b8e721"],["/blogtags/马克思主义/index.html","09e2fa41fa01b89706a2e04b368ba46f"]];
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







