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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","7fc2cda07c3c5378a64783e5b1f4f6f7"],["/blog2013/07/EdisonIn21Century/index.html","fca2ec190f1ca41d1b947c8f40bd815d"],["/blog2013/07/FenDou/index.html","a46b8caed2f5723057ed40957d3e40c5"],["/blog2013/07/Qie/index.html","392f3eb65904cc5ed3b2103d020cf2f4"],["/blog2013/07/RhapsodyOfSand/index.html","796b8c2e022ef20a772a9c94ada88e3e"],["/blog2014/03/KTimesSum/index.html","c2f5c64716aef8da67515aa25cfb4785"],["/blog2014/04/PiPaXin/index.html","efc7edafdc119c3f2fcb339f9094569f"],["/blog2014/12/Miniascape/index.html","060be17bf930382da82576756fdb5a95"],["/blog2015/02/ShiBiao/index.html","40a9e2a473459a6f88e25b4ed2138233"],["/blog2015/02/Wei/index.html","78beb2ae7dbf02530f90bdbc10f82091"],["/blog2015/03/Stain/index.html","daaf1a5411724dfe8df81b090529143b"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","d453bcc18dacbe3a13228a012fcfd0cd"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","b0b6ac9037b1966570e864d9e3c2190f"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","7cab6131a1fabde1d2b2b30e2ee8e0e5"],["/blog2015/06/BellPolynomial/index.html","4fe1a263dbe8b8778a558d20bb74ccef"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","d6ec9a4cab4b720a69de658468e9ae6f"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","9d2e722ba341e252e8b6e5f1f80f2a92"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","5f2bc6d932484e218e9cf27efe6fb422"],["/blog2015/10/Tiberium/index.html","36ab747c12e3319b88f67d03467aa193"],["/blog2015/12/ChengTianQuan-01/index.html","1605bad9799c39f48fc8aa0bc9f5780f"],["/blog2015/12/PKTFile/index.html","c5db4ba0953c732b5bf2f67a7237cbfb"],["/blog2016/02/ChengTianQuan-02/index.html","50f4e20fbb3a7e43650491700ed97673"],["/blog2016/04/LogicAndExperience/index.html","2181b7fffc5bb04b0090be24e7d75899"],["/blog2016/12/CSFFileFormat/index.html","1ba70a7e4d44bce991a9909c0e27aca1"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","2f7408b7798b00f41ad042c6c0f63cc4"],["/blog2016/12/ProveCRTWithConvolution/index.html","7c8678ef3a547067bce5ba158d8b5a6a"],["/blog2017/03/MIXFormat/index.html","f4ee93f00096bb19223ce16993715aad"],["/blog2017/04/WesternPhilosopher/index.html","5d309a64569ac91bc741c182d02d6073"],["/blog2017/05/TheAlgebraOfADT-I/index.html","5653ffd654a7d701db1c38b98feea987"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","2c0a612b7998670867cfdbc1adf91827"],["/blog2017/07/TheAlgebraOfADT-II/index.html","eb61fa88f5e16ace775bda4bebd13cff"],["/blog2017/08/DnDTabWithQt/index.html","c7732d09bd696cd7b0dd153ac84f2159"],["/blog2017/09/ClassBasedOOPWithMma/index.html","1096907c093a22db2d6379c85ac7d56d"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","9491778526e2c3a6041970886b5fe606"],["/blog2017/11/TrapInCCpp-1/index.html","0f8a07e7297e3d440ac537384fc3ea91"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","b035e42d02f6348912b89b00342ff333"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","487a224e1a1fa3c4030125b58f46ff69"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","b13def1b6a703d39be24592faff04131"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","dbed1013ee29dd02a1ea52b1a16f5513"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","316e1fd46e6f8b1cb5afbd72a600e092"],["/blog2018/10/PrintDefinitions/index.html","d6715a29a2297676f419295277058710"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","86cbfdff542d79a84cb7b3c94739967b"],["/blog2018/12/WolframOnlineDemo/index.html","10c13fd3bc77a39925ac3237c12fdb2d"],["/blog2019/01/PointerInWolfram/index.html","2ef6762ef3dffba03d589cdad1adb89f"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","c9789c0e590141e5e1ddbd8c55473e83"],["/blog2019/01/SymbolSandbox/index.html","2c30ca176bcccb19293714d988d7be5c"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","6c1c4897531bb4bcddc7197648956cba"],["/blog2019/04/MmaAutoLiterature/index.html","bc65795665e2ee0ed51309eda09f2c67"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","95d45aec666e68b0897ad35a84107787"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","63be03d8c86c4609b6c860c047103568"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","9521a2561ad9c7b9e0e335f58d27c3b8"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","149b230b1441e0225bbcbcb08388baf9"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","6242e13574802f6c367c4f8939eb2308"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","b97bc00eaf65873bc44e724b07ddeacd"],["/blog2019/10/SubmitFunctionToWFR/index.html","96d40a58ebd484abdc1938b57e02f81a"],["/blog2019/11/TerminologyAndPopularScience/index.html","a17a37f6260207ba7216efd309d3c884"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","f915171b677beabf7c47c5774f7f1938"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","1212fd7f46ad0bb3b5a169618c6bf57e"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","5c894fd372df34e05ff65e574639bfd4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","62072fe2c3f768bae7d34bb3ab85a50d"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","a908b0d22af2b711835f09f7e456c13f"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","f1aa921aa126b6335b004af300a5d0d8"],["/blog2020/11/JuliaPkgGuide/index.html","30a9b416630389e47135a09c1e0d7f1d"],["/blog2020/12/Summary2020/index.html","8dd798b9c5e80a270410b481ce56b749"],["/blog404.html","486bd5587f54f1f8e1e69cd234315975"],["/blogabout/index.html","da8a8f248b6b2477dd4148ed23c421f4"],["/blogarchives/2011/07/index.html","7a12b7ad87bb436152bccca14853e88b"],["/blogarchives/2011/index.html","316fa09d6c6d22f682e46ba03bfda142"],["/blogarchives/2013/07/index.html","415bcd5ae093039fa25fbd67dc1ff067"],["/blogarchives/2013/index.html","ffa250efd8570e4a357acd973272429c"],["/blogarchives/2014/03/index.html","4a231c2de445c11eec6ba09bc4565a47"],["/blogarchives/2014/04/index.html","517921069004ba1abe1ca756a8f0b734"],["/blogarchives/2014/12/index.html","f451eee4117998676e45af9bf4f47cb4"],["/blogarchives/2014/index.html","038de275b4187af8d37f4b17298a3414"],["/blogarchives/2015/02/index.html","c02f973c4dcba3b5dfbaea1334078011"],["/blogarchives/2015/03/index.html","9d984bcd2fb95932782bb3233b82298b"],["/blogarchives/2015/04/index.html","58d7536c87b2c66960c0927838481e2f"],["/blogarchives/2015/05/index.html","47f13973bc06ee731bb469b64e5c5f78"],["/blogarchives/2015/06/index.html","d0441d5fa855ad6e5748fdd38a245c1d"],["/blogarchives/2015/07/index.html","1c30b1a071cf57c8ae5e9b2093300303"],["/blogarchives/2015/09/index.html","109078604ca963b6159981acefaf65c9"],["/blogarchives/2015/10/index.html","70ce8fe62c15be4d66fff6f3e67ae9fa"],["/blogarchives/2015/12/index.html","f3e811a2bc9ea222cb02129ccf1bb0d6"],["/blogarchives/2015/index.html","722480f86ef871f4a4fc68e0e6953346"],["/blogarchives/2015/page/2/index.html","a1a73bfad5d4d2c5e0a12287b137ae29"],["/blogarchives/2016/02/index.html","2806f878e5c5da2785308774cd322e18"],["/blogarchives/2016/04/index.html","d6ccc8037476d4c3986b2b3ba8f30ca5"],["/blogarchives/2016/12/index.html","5c9e272a39497712a7c2edbfad01d49b"],["/blogarchives/2016/index.html","c74c5fcbc86bee2757e90194d50331a3"],["/blogarchives/2017/03/index.html","9aaea54fef89aac1416aa2adc213157e"],["/blogarchives/2017/04/index.html","3a2a0553b717b1b6f197cb346d3e159a"],["/blogarchives/2017/05/index.html","9ff86555a1befe16cc6232d6dea8eaab"],["/blogarchives/2017/06/index.html","a474032edaf812101c09df84cda25d5d"],["/blogarchives/2017/07/index.html","b4aa903fb48b377ab8d18c7535fa3d34"],["/blogarchives/2017/08/index.html","5aaccf2827b682e7e6d1f7023ae85c5f"],["/blogarchives/2017/09/index.html","3ccd74227b52fdfd85a071f0f51b4d62"],["/blogarchives/2017/10/index.html","4271ce6778e759182f1e2c5bcbaa44fd"],["/blogarchives/2017/11/index.html","149940887ebb15ec6966d81e8f4ba285"],["/blogarchives/2017/index.html","897fea1349ca903e86d5c50a35437bad"],["/blogarchives/2018/05/index.html","3e3cb0cb3e8b2a6916dc00d73328d396"],["/blogarchives/2018/06/index.html","3d6d2baaa6f1b5c90c0b4be2664f3828"],["/blogarchives/2018/08/index.html","a8102e72c842af9b9269ecd8276a46fd"],["/blogarchives/2018/10/index.html","8e5e9c77d9a59442e3b47c77315a584f"],["/blogarchives/2018/11/index.html","9d627431b2eb1b53171876527d7d5bd6"],["/blogarchives/2018/12/index.html","4086278b09f04680d5f05678cae487e2"],["/blogarchives/2018/index.html","e6ae08199147845a1b62c5e8362d9164"],["/blogarchives/2019/01/index.html","beb2d23707e35bc0bf66674cbbc39e03"],["/blogarchives/2019/02/index.html","983aa9ee65617895efb5bc2efb2ccde4"],["/blogarchives/2019/04/index.html","3c8317769f4e4b75dafdad4ea9a523b7"],["/blogarchives/2019/05/index.html","b87fef75c8347d0ed06cd4c2b6bc8fe4"],["/blogarchives/2019/07/index.html","274e085cfe41681781c92b198b3bce06"],["/blogarchives/2019/09/index.html","3f2aee273b2d0434db6ef3b42f3ffbab"],["/blogarchives/2019/10/index.html","bff88df5b23e05d8e0eed07b14465265"],["/blogarchives/2019/11/index.html","f979e9048fda92666b08aa62500f1163"],["/blogarchives/2019/12/index.html","fc3ca43164101030ce45b525d6a056cb"],["/blogarchives/2019/index.html","31e977aa0e79d5cdc176297037b2e288"],["/blogarchives/2019/page/2/index.html","1b0647838857f9532fdc617b517dafa3"],["/blogarchives/2020/01/index.html","4374ae44dc5ae06062cdc0c3c77b05cd"],["/blogarchives/2020/07/index.html","59ef44ac595336d0218ede6e6487a637"],["/blogarchives/2020/08/index.html","1df222769addb5488f37c7d7dcd749ea"],["/blogarchives/2020/10/index.html","5459c703ad0f4557dc21e63abdafe7cc"],["/blogarchives/2020/11/index.html","b436ee6c51d6bf4a44f5b0ac0d2be3ab"],["/blogarchives/2020/12/index.html","66bb2d9f4ba19a46efe6cb280df74468"],["/blogarchives/2020/index.html","d4b6a661c29519ca095c9736d6b767f5"],["/blogarchives/index.html","b954cefba22871c10914f0c6676c546f"],["/blogarchives/page/2/index.html","b954cefba22871c10914f0c6676c546f"],["/blogarchives/page/3/index.html","b954cefba22871c10914f0c6676c546f"],["/blogarchives/page/4/index.html","b954cefba22871c10914f0c6676c546f"],["/blogarchives/page/5/index.html","b954cefba22871c10914f0c6676c546f"],["/blogarchives/page/6/index.html","b954cefba22871c10914f0c6676c546f"],["/blogarchives/page/7/index.html","b954cefba22871c10914f0c6676c546f"],["/blogcategories/index.html","4fcd6230e10144aa546541d9865fa4fa"],["/blogcategories/代码编程/index.html","449dc706b4d65f4f888d82779ec7a3de"],["/blogcategories/代码编程/page/2/index.html","e58f09d9ffdbe9f7ca94d4c46ebc995e"],["/blogcategories/代码编程/page/3/index.html","44180614d84db3d88892dd74f18869d1"],["/blogcategories/代码编程/page/4/index.html","87f37867e151e942b6d36a9770cd73cc"],["/blogcategories/小说文艺/index.html","9efada7ac50c11d0f04422eb1808c180"],["/blogcategories/小说文艺/page/2/index.html","6e1cb7d76bebe6d0c29de51ade97bc14"],["/blogcategories/数理科学/index.html","57bf4b4177f9b309215af2aa06f6b092"],["/blogcategories/杂谈散记/index.html","2e791cf9c09e8e205ca4fa8112988ca2"],["/blogcategories/翻译作品/index.html","bb57c66d5f31b1e13bc07b8f914a3a6b"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","27b566e65a9b1586b42aaf1c68d415aa"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","19469d8654640ea5f23f81a068245e2c"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","3c7c9f6865c2d200cc846021d686cbdd"],["/blogpage/3/index.html","dc0fdf9920fc8d697f71f9e10899d9dd"],["/blogpage/4/index.html","a4aa6c66be5a5353e7e5d3677fef3711"],["/blogpage/5/index.html","a8204da57c87544230119bd7b1782b7d"],["/blogpage/6/index.html","0318608d065ec4f61123973c7e5d208c"],["/blogpage/7/index.html","bcaf395abd8004fe28c64f71eafe46a4"],["/blogtags/C/index.html","2b595097b721fdcad6170c566bacd037"],["/blogtags/Cloud/index.html","80e723a65ed36050703946bcf8f29865"],["/blogtags/C语言/index.html","be263800f0bcabb51b3d2a99c51080fb"],["/blogtags/FlyCapture2/index.html","5b8e4eebb1b6e6dd3cbc7ea7c0f97f3e"],["/blogtags/Git/index.html","704b3621d8c54737f3a6980c07d9de41"],["/blogtags/GitHub/index.html","353968ed9f23fbfff41da18c76f110b7"],["/blogtags/Haskell/index.html","542a27006d04fd35f6d42641f29facbb"],["/blogtags/Julia/index.html","4bdecea99ab2e7e8c9909f4faa45ea46"],["/blogtags/LaTeX/index.html","9221703bc00a3bf55d64524cc987de07"],["/blogtags/LibraryLink/index.html","517f90a5ec99561ab118e8bc0f03cf76"],["/blogtags/PMAC/index.html","1f5489bc801ba7a1b3b81bd544b46c55"],["/blogtags/Qt/index.html","9e8e733f6208238d1b432ff308fba3e9"],["/blogtags/Rust/index.html","0c9126f546c7e5c0e400c1a5f06caedb"],["/blogtags/Undocumented/index.html","a7e68cb6fa3b404ca48cb1cb9664e027"],["/blogtags/Web/index.html","f1b13c0681e3d63630c75b2acc7a8569"],["/blogtags/Wiki/index.html","65f65df5108e55f67eb97b3ccb995049"],["/blogtags/Wolfram/index.html","2cbee856e14c672afaf9d613aeb3918b"],["/blogtags/Wolfram/page/2/index.html","455c341404b9c963657396bf0961dc3f"],["/blogtags/Wolfram/page/3/index.html","7dd6bcf8fef494495053ada0485b04b7"],["/blogtags/index.html","99410b2341da0bef9c9a5b309ac5cded"],["/blogtags/作文/index.html","92bbc5b7798c46ea8305c25bf3ba3ad4"],["/blogtags/作文/page/2/index.html","074e55bb64e1fabc47cbd945e5dbd916"],["/blogtags/傅里叶变换/index.html","2168358d48e63d8b7d1362874bf46e9b"],["/blogtags/功能模拟/index.html","88c4e5d0a3451d83d584813787e8197c"],["/blogtags/参考/index.html","154a10a4efa751cb41d1fadfaa360a5e"],["/blogtags/哲学/index.html","bb87b02cbbef9371aa54e7f23dac5ad1"],["/blogtags/图像加密/index.html","538b408ac95b93c94ab4a2c134e409b4"],["/blogtags/图像处理/index.html","10b5827c348eeb30802d25c890e448cc"],["/blogtags/小说/index.html","0af9a1c6ddc7ce31eb6a1c69bfa547fa"],["/blogtags/年终总结/index.html","ab59b4062a084744b1127acfca4ad507"],["/blogtags/微积分/index.html","7fc1917b58795ea79791d55b5f7ead05"],["/blogtags/拖放/index.html","49057dfa3162b9664ff26bd1eaf2dab4"],["/blogtags/持续集成/index.html","6a403ce57f6164ac6a691c60ad4651a7"],["/blogtags/散记/index.html","5c24e55192aa099dbbf19f5e7e8aa333"],["/blogtags/数列/index.html","f0640e062a90d360ac59c527af1418df"],["/blogtags/数学/index.html","d5737349b982d883939461c4e9c4387a"],["/blogtags/文件格式/index.html","1ed6f2eb6cc151d220bb0c244ba85046"],["/blogtags/文学编程/index.html","ba1f94c79dfb342fa09554968c26af0d"],["/blogtags/文言文/index.html","98ede1f2fbb71daa6fb75565f5af29a4"],["/blogtags/杂谈/index.html","fcfce30741427246cf2539eded9a3861"],["/blogtags/概率论/index.html","1236053b83f1a99ae21ad1acbca3d6ef"],["/blogtags/混沌/index.html","8c4fbe5bd05a703eaaba14beaf2eb603"],["/blogtags/科幻/index.html","ea49a543b8767ba0f6b75fc1a5b6f08e"],["/blogtags/科普/index.html","988ac70bc70996e7394981dbc2fa49eb"],["/blogtags/程序设计/index.html","fddc6ae400707df790a5717650852630"],["/blogtags/笔记/index.html","4f6f602650ef30f81eef3340319c5b37"],["/blogtags/符号计算/index.html","dc497010e073daaaff47ce27c44b4bb7"],["/blogtags/算法/index.html","c2fcbc2d1b9ba402c252f495105577ed"],["/blogtags/红警/index.html","285d2fb7425344a2ea0c780717f015a5"],["/blogtags/编程/index.html","0cd222cb3bb818dfdafe4f6ad86f306e"],["/blogtags/编程/page/2/index.html","bdd1e6771c1c6d7e70847dad388fb481"],["/blogtags/编程/page/3/index.html","765a592be152fcaf2d9d453aa0c8f581"],["/blogtags/翻译/index.html","6651e17e4039f3263c42bd117e96ae2a"],["/blogtags/语法/index.html","3e20e4ce49f3e6861283b24f51e85064"],["/blogtags/踩坑/index.html","e9f3e115e469e4e93d05fe6772b37513"],["/blogtags/逻辑/index.html","dbb5142da1b80a08ad444a862a6dfa19"],["/blogtags/题解/index.html","92e0ad1f3db7d6192a4f05989417ec97"],["/blogtags/马克思主义/index.html","6e12c4380a822ddb56adce8e3510af6c"]];
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







