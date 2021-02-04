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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","ac0c1f24478cec9ed5cd15c29c934b80"],["/blog2013/07/EdisonIn21Century/index.html","6c2266599976a594fcec6a3179d7171e"],["/blog2013/07/FenDou/index.html","aba7311b82a614103d01be26bc8b6f4a"],["/blog2013/07/Qie/index.html","de99bef5248f7461897fc6ce023903b1"],["/blog2013/07/RhapsodyOfSand/index.html","dc7c3f16fe8f5c60277e3370d1da0cc0"],["/blog2014/03/KTimesSum/index.html","2cc8a42abd656844057a198382c09f61"],["/blog2014/04/PiPaXin/index.html","6bb2d636abcd126f4c13e70253768821"],["/blog2014/12/Miniascape/index.html","8611a73b326ffd5fd6e1e771fd9fb74c"],["/blog2015/02/ShiBiao/index.html","0bbed1c20faed179b1d9133db33c7271"],["/blog2015/02/Wei/index.html","6d396b42565864c5804f86339fa93d17"],["/blog2015/03/Stain/index.html","064d0b05ffd51e86d6cd349e7c86df54"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","7c002eb9c2c585412e01cea55822c7ba"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","f14643990351634ecde37cf9b0fae84f"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","25c1111eb87cfc1c5afac2d059db68ed"],["/blog2015/06/BellPolynomial/index.html","7c2c9ccba1740edfbc49e9554d2f893d"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","5fb5af074bc80ef41f119b48d9fddc82"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","22bf206202854fa29446e976da871aa2"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","26569508f6590d76a5343e424780b3d2"],["/blog2015/10/Tiberium/index.html","fa5b4915b66d79d5a8596f39adfe18bc"],["/blog2015/12/ChengTianQuan-01/index.html","75780fddb63ea5a7730a620fb95bb79c"],["/blog2015/12/PKTFile/index.html","8f9f476434871b7a871e13a97fc71ae0"],["/blog2016/02/ChengTianQuan-02/index.html","fd3075fa8be6c642f9e37617d568d8c1"],["/blog2016/04/LogicAndExperience/index.html","090766334b1b93424d011364f1245706"],["/blog2016/12/CSFFileFormat/index.html","b10c7c586fd3fefcf6ae906a9e77373b"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","108a1f0693482746ad0906d41a4ad7a3"],["/blog2016/12/ProveCRTWithConvolution/index.html","9e9542f346db5f6677496986ee0b76c6"],["/blog2017/03/MIXFormat/index.html","ea423b96f652b2a060138e58918218c5"],["/blog2017/04/WesternPhilosopher/index.html","81acf053c285f1d15149d7185e771bba"],["/blog2017/05/TheAlgebraOfADT-I/index.html","07c5a071d4012f2e7b06f80ccb88bfd2"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","4ec86d9d41ac30f088059337eaf9d74b"],["/blog2017/07/TheAlgebraOfADT-II/index.html","2e5fb015efe4444bd513c5b4cd4f2dd0"],["/blog2017/08/DnDTabWithQt/index.html","c7732d09bd696cd7b0dd153ac84f2159"],["/blog2017/09/ClassBasedOOPWithMma/index.html","572c8495b869edc0288fa572fd07bf28"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","c460c328cf6679befcc68a020fc2f89b"],["/blog2017/11/TrapInCCpp-1/index.html","913e510e0c3cea3105ad8a2a0ce595f0"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","ad9db1aae08c0d0de46f5497b14bf002"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","463fa804c638441b6361a3c4fcb2d4ce"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","8eb7701135fc1c57be81746a7098800c"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","dbed1013ee29dd02a1ea52b1a16f5513"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","d72a392eb8d339ca030755bc60bbb163"],["/blog2018/10/PrintDefinitions/index.html","e1fbc568c2df28e06ec9ec44fefb8efc"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","86cbfdff542d79a84cb7b3c94739967b"],["/blog2018/12/WolframOnlineDemo/index.html","f9fe70223695e8099fcd432b5b8ef173"],["/blog2019/01/PointerInWolfram/index.html","43844e4d4928af83588bd229a969c677"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","2196b5af6c1f047d9cc7e86676f7b3fd"],["/blog2019/01/SymbolSandbox/index.html","5ee1c4f624c680f402f3cc34daf7b558"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","1cc43d7e1849ef7ae6338b839d835fa3"],["/blog2019/04/MmaAutoLiterature/index.html","6c11bc7ddf35324051daea530132b854"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","95d45aec666e68b0897ad35a84107787"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","e7908363bbbccdf9f69dbabce6570b03"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","6d9e58d9e3d9bbe775833352fabee2ae"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","b3b6116cd1936c787aa467f6cd787395"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","eea4229bc7f8c8318cc8882242380cf8"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","a4b2da94964b60adf4dd52f92d656ed4"],["/blog2019/10/SubmitFunctionToWFR/index.html","a3bf9d7aec809a63675025bf9b2c64bc"],["/blog2019/11/TerminologyAndPopularScience/index.html","475f348b7236a8c2f56374eb4467db91"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","a4da59bc80acef682bb3b171947a6141"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","1212fd7f46ad0bb3b5a169618c6bf57e"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","5c894fd372df34e05ff65e574639bfd4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","62072fe2c3f768bae7d34bb3ab85a50d"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","a908b0d22af2b711835f09f7e456c13f"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","f1aa921aa126b6335b004af300a5d0d8"],["/blog2020/11/JuliaPkgGuide/index.html","30a9b416630389e47135a09c1e0d7f1d"],["/blog2020/12/Summary2020/index.html","004b375fc4922b4adbd01b70cf28a914"],["/blog2021/01/MSBuild-LaTeXDoc/index.html","0f1b08445cc4e57ca1016decadb9be5c"],["/blog404.html","486bd5587f54f1f8e1e69cd234315975"],["/blogabout/index.html","da8a8f248b6b2477dd4148ed23c421f4"],["/blogarchives/2011/07/index.html","2fbe244424e58b669268f58cb75d6d2c"],["/blogarchives/2011/index.html","8589c36f4e79b2ee0d613aa5f762602b"],["/blogarchives/2013/07/index.html","53e952b83709f1e6af0ee8e244078b57"],["/blogarchives/2013/index.html","9418e36d61c45c6a1332909ad74e8119"],["/blogarchives/2014/03/index.html","c717c3e9811e9f58573403ffd7442f47"],["/blogarchives/2014/04/index.html","010cf1917fcfcb92a02c47182a065efa"],["/blogarchives/2014/12/index.html","5f98dcf6a09eba26a4157bfd106c1de8"],["/blogarchives/2014/index.html","b0d023e692dddaac99b316facee57e79"],["/blogarchives/2015/02/index.html","592f7051d4f5d5ad4fe717c00029b048"],["/blogarchives/2015/03/index.html","f3807034515b7aa6ed90729fe6cd3f1b"],["/blogarchives/2015/04/index.html","436116e1442f8ff37470ab4ceb06caf0"],["/blogarchives/2015/05/index.html","933ade1d484eac5e2e3a51d8cba6157d"],["/blogarchives/2015/06/index.html","72c48c6a4502eebfa472fd3c879ca335"],["/blogarchives/2015/07/index.html","6daae6c55d7965e0880ac3cee5def73c"],["/blogarchives/2015/09/index.html","16bf325270ab638bda175b941d9729c1"],["/blogarchives/2015/10/index.html","d483113788a28283b9062a53cc5b52cf"],["/blogarchives/2015/12/index.html","4d26c87b6e79570cd9e6d1c9ba48dcf6"],["/blogarchives/2015/index.html","a23e38a9c2205138d5ddd46dd58f2ec7"],["/blogarchives/2015/page/2/index.html","e678e3b7bb485c6597b2c80460e9655c"],["/blogarchives/2016/02/index.html","814ac14838bae054959d1c37f3b93dc9"],["/blogarchives/2016/04/index.html","e7bb1683f64186eed9d60f7df16d719d"],["/blogarchives/2016/12/index.html","98afeb95a064cb7cf02c9fc42dc26bf2"],["/blogarchives/2016/index.html","1e1d61e7259d85b070d7c28f21b1b53e"],["/blogarchives/2017/03/index.html","1b3a16c703575f38815e7169978675ec"],["/blogarchives/2017/04/index.html","5743f187c326f498072289c4fde3e3c4"],["/blogarchives/2017/05/index.html","2847b2685e31e9241ba1d470b3ef1c03"],["/blogarchives/2017/06/index.html","c75a0ec41f1df21554b6e616f4c8682f"],["/blogarchives/2017/07/index.html","5217609ced0f09d15e456198d7dc1841"],["/blogarchives/2017/08/index.html","58b4da2e13d46c6024170f0b199b16da"],["/blogarchives/2017/09/index.html","58707ba7649949d3e7cb894b090bb2d1"],["/blogarchives/2017/10/index.html","84efdf02a11e30f7f52f077d28dd6713"],["/blogarchives/2017/11/index.html","ff562a13503f1aa7353e3ff9207ba31f"],["/blogarchives/2017/index.html","6dd12584cb0e85363e00b9250901e2b9"],["/blogarchives/2018/05/index.html","fc45ee4d518cda1abf466fe1baca57ab"],["/blogarchives/2018/06/index.html","794b6680f264264d030ae9df462ab030"],["/blogarchives/2018/08/index.html","108a6913087f450c454dbbc4c2546023"],["/blogarchives/2018/10/index.html","5cfd37c89f27fa967d68ab4797abf104"],["/blogarchives/2018/11/index.html","0364d4c5b00d208d75c98af1bb834feb"],["/blogarchives/2018/12/index.html","53437d87822d7365f6329fdd9c13fcb2"],["/blogarchives/2018/index.html","fb1409712f1a90de8c9744b2fded3a36"],["/blogarchives/2019/01/index.html","108a6bc946dbc7c8600f2306fe8b396f"],["/blogarchives/2019/02/index.html","d6047a9c5cf173213bae920379516c5b"],["/blogarchives/2019/04/index.html","0e491660a02f804ded7d47fc794ef6a7"],["/blogarchives/2019/05/index.html","e6f21c5c64da62d5d566d81744c6393b"],["/blogarchives/2019/07/index.html","ca7159006f1f2ad89bae0e4aa7000eef"],["/blogarchives/2019/09/index.html","617279c5c0dcdfd5aff70f1f9673470d"],["/blogarchives/2019/10/index.html","503d91c9dbe71f001f1aa1429c97f8c4"],["/blogarchives/2019/11/index.html","9a624f6c02377be1b3e03de44f66ed91"],["/blogarchives/2019/12/index.html","ff618bb87b66cb819212c93ccb9a4173"],["/blogarchives/2019/index.html","a391a2193e76fa0300f6fe045aa61221"],["/blogarchives/2019/page/2/index.html","ba49aeb8eac49039a3acd366364de5b5"],["/blogarchives/2020/01/index.html","4e01da60f214eadc111f2cf1ed7ba20a"],["/blogarchives/2020/07/index.html","d27520c96b0bf02180247dcab09ea669"],["/blogarchives/2020/08/index.html","6749ad856538ed40a4cf40461cb465d3"],["/blogarchives/2020/10/index.html","1c77f8c44c84b0184955b98fd06a94ed"],["/blogarchives/2020/11/index.html","5b8d20a07d2841e3ec20a4d51aadaf9a"],["/blogarchives/2020/12/index.html","3c577ac3a48517fa723b3ee124a21b2b"],["/blogarchives/2020/index.html","d4ed607179633e3840ba2d6726bbb76c"],["/blogarchives/2021/01/index.html","d9838dce03701d51f2e00bf4f224d3d1"],["/blogarchives/2021/index.html","ea53da2f91a37e883ae3473c6ec1abb6"],["/blogarchives/index.html","88fde1f0d49ccc6016e2763a774e87ef"],["/blogarchives/page/2/index.html","88fde1f0d49ccc6016e2763a774e87ef"],["/blogarchives/page/3/index.html","88fde1f0d49ccc6016e2763a774e87ef"],["/blogarchives/page/4/index.html","88fde1f0d49ccc6016e2763a774e87ef"],["/blogarchives/page/5/index.html","88fde1f0d49ccc6016e2763a774e87ef"],["/blogarchives/page/6/index.html","88fde1f0d49ccc6016e2763a774e87ef"],["/blogarchives/page/7/index.html","88fde1f0d49ccc6016e2763a774e87ef"],["/blogcategories/index.html","9ee2b336d8b87a4fd7d8c13384a3ebb7"],["/blogcategories/代码编程/index.html","ea53ef8055fcde277fe05ad3c952bc45"],["/blogcategories/代码编程/page/2/index.html","cab4bf623d47080f3321a14693b3b187"],["/blogcategories/代码编程/page/3/index.html","0b56817f90b80ee12364257ed3ee130f"],["/blogcategories/代码编程/page/4/index.html","db4aab5b167ff1b2b58a1ae395027319"],["/blogcategories/小说文艺/index.html","17187a60000f0d3652eaf21369b9ce6b"],["/blogcategories/小说文艺/page/2/index.html","bafe8479b5ec4a22cb50f8c42c50f50c"],["/blogcategories/数理科学/index.html","598929e2d65eac9be19e416ed2e781ee"],["/blogcategories/杂谈散记/index.html","7af828482d4d0cc1b7308668e6df9d3d"],["/blogcategories/翻译作品/index.html","cbd83b08ce8dfff9f3c5371466ab8b5a"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","27b566e65a9b1586b42aaf1c68d415aa"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","1acd35332705a8c8cdf10b8ce1c5ce17"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","62cbf41e772aa411f31b7ff04b0771b7"],["/blogpage/3/index.html","af9b032d235602e0ec33f5bde113e03c"],["/blogpage/4/index.html","d79a8302aa3651a76ac0f1440e3f354b"],["/blogpage/5/index.html","24d7844bca663d250628cea484c24ac5"],["/blogpage/6/index.html","b9b3b2d2ee489d9b78653bde4e01c797"],["/blogpage/7/index.html","9f16b61e27593dfe124515e42e6cdd67"],["/blogtags/C/index.html","951e1786ab111808615d6ca144a8d393"],["/blogtags/Cloud/index.html","042ea65dbc59db2f2faf23924f7651cd"],["/blogtags/C语言/index.html","7553c2ca044d753d8d2feb5c2f8f4647"],["/blogtags/FlyCapture2/index.html","5318c64161597e0c51135550c8d50740"],["/blogtags/Git/index.html","0f9368fb1764423c0744efe33cfbaf81"],["/blogtags/GitHub/index.html","aebcb610b53487332057e741ad1a20d1"],["/blogtags/Haskell/index.html","87c462e8dcea3ba4d4fe040840096e59"],["/blogtags/Julia/index.html","bb4f93b77b04b4bf6ae118254b8d05d4"],["/blogtags/LaTeX/index.html","7b233337d13e4d85173ff71bdd2d97c6"],["/blogtags/LibraryLink/index.html","80d3f4ae0e598245b89b31945eca9c18"],["/blogtags/MSBuild/index.html","28b7962e2a211415d5c12d44a677c2d9"],["/blogtags/PMAC/index.html","4f51f10ca2a6e78539aab40305669e6d"],["/blogtags/Qt/index.html","03f71a301d210fae795f68ca30266681"],["/blogtags/Rust/index.html","813ee0c530e5f8af18f29c5b3c9cdf1e"],["/blogtags/Undocumented/index.html","d2c046ad152615ff64ce3009ffa0f50a"],["/blogtags/Visual-Studio/index.html","60b095f59104863d51a8dc74c74736e0"],["/blogtags/Web/index.html","a0a2973c8adbc38a4af227cdbcf410b0"],["/blogtags/Wiki/index.html","8bb959f8a85d322d2bdac32a606b6d06"],["/blogtags/Wolfram/index.html","39365fc5780549391a1addbaa8401ae6"],["/blogtags/Wolfram/page/2/index.html","539991160a79f4fd5ea2050588f68cda"],["/blogtags/Wolfram/page/3/index.html","56b5a2e3f0b43b1e48f719cd4f67060c"],["/blogtags/index.html","b96f014f8afbfd12fe53ff15b9bb69c8"],["/blogtags/作文/index.html","2508a694593f96188a1c0eab8dc09da8"],["/blogtags/作文/page/2/index.html","32582c1b75b3811ed1a39b83aaa6cba0"],["/blogtags/傅里叶变换/index.html","634053f99df6e2f54368551ac5ed98fb"],["/blogtags/功能模拟/index.html","4795276018ebe4044d980e0e1390b546"],["/blogtags/参考/index.html","a947f0d1639ec98c09ed8903d540bda9"],["/blogtags/哲学/index.html","8dd5946388d95e77e8ffa5f273b94c73"],["/blogtags/图像加密/index.html","e4c11bf20f650394107fb28be1afdbc3"],["/blogtags/图像处理/index.html","1988862e17281b44cbcde0f79256c090"],["/blogtags/小说/index.html","8db9b63fd8baf3c092274d94b4a6e4cd"],["/blogtags/年终总结/index.html","24f573316550923c737171459d662ce3"],["/blogtags/微积分/index.html","255eda151cdd612a0d1c77f07d37882a"],["/blogtags/拖放/index.html","dddfaf3a4b2c72ca44e206c1517dcb67"],["/blogtags/持续集成/index.html","66cb093e1a30f9a1895f82a421a10dfc"],["/blogtags/散记/index.html","af6e321f26287a97a60a17517e9c600e"],["/blogtags/数列/index.html","7410f39babf67cf988b99fec8262442e"],["/blogtags/数学/index.html","9fda656cece666e7b161ded39b452822"],["/blogtags/文件格式/index.html","5ad353d4824b10c664eda8918801c463"],["/blogtags/文学编程/index.html","ab0e5f788a9f694749b496c278e791f3"],["/blogtags/文言文/index.html","095e5bfd2942ccebffd8d3b0d77b9026"],["/blogtags/杂谈/index.html","0292eef7963cf1ddf8c76ba8b78b897e"],["/blogtags/概率论/index.html","430cb89bb6bd553db63eeec7c8bf1b5c"],["/blogtags/混沌/index.html","6f42a69f2db4cf9b485752331d23406d"],["/blogtags/科幻/index.html","685da7bce2cb31bfda685f7aa766450b"],["/blogtags/科普/index.html","88d98b9f6861a9fb8dc47a2e6ecbffe5"],["/blogtags/程序设计/index.html","6ea3162e1f857c312377ea264833a056"],["/blogtags/笔记/index.html","3e504fca975fcff77176b302b0f4f65a"],["/blogtags/符号计算/index.html","31faa3cfd000a298b29fe3b45cabd703"],["/blogtags/算法/index.html","bc06696ca801b3e8117f5fb0ca355b91"],["/blogtags/红警/index.html","25096ed94c7ba97dc94382fd0e6a1ee2"],["/blogtags/编程/index.html","3d1f1a49aa359a24d4c8e99c7d77d3d2"],["/blogtags/编程/page/2/index.html","3b41115a86cbab802cebaf0c95159a13"],["/blogtags/编程/page/3/index.html","0938a586482e9eb160c6ce7b05808eb6"],["/blogtags/翻译/index.html","0a56689ee99c4d835b1a0d58972e09d0"],["/blogtags/语法/index.html","ed4e8689262f3cf486549c01b80162eb"],["/blogtags/踩坑/index.html","1694387c7f573e53b1875537856ed3f4"],["/blogtags/逻辑/index.html","47b514a275cb65623875106c48b3c661"],["/blogtags/题解/index.html","bb55f671d778763d6e06faeb835a2bf4"],["/blogtags/马克思主义/index.html","d658caea46d3457435ac816e88066a70"]];
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







