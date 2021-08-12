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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","f1277ded76ccb52a05619d3bce742616"],["/blog2013/07/EdisonIn21Century/index.html","3d9d020238dd7202494de7f5ad9ec419"],["/blog2013/07/FenDou/index.html","d77eac288d47791262af92463ac76546"],["/blog2013/07/Qie/index.html","59123dcb6c8235ac16e2aa1dedaab7ad"],["/blog2013/07/RhapsodyOfSand/index.html","10af7e9f71a707c88aad05fdb9183fe0"],["/blog2014/03/KTimesSum/index.html","7374080642030ebeb529a0b13d868c28"],["/blog2014/04/PiPaXin/index.html","3491117d042a24476d60cdfa464cb90a"],["/blog2014/12/Miniascape/index.html","275ce596db144dafdc60cc492a75aa55"],["/blog2015/02/ShiBiao/index.html","24793f1a95c488a90444ad08df3d7e52"],["/blog2015/02/Wei/index.html","1a172c992fd60b924d689024d51db1a6"],["/blog2015/03/Stain/index.html","e0113c2ca2c8a318491e2c53540c1e63"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","0f3c6286953cff271312cf306f8c0da7"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","10f2edbf8d3cd18a99d48a6daa543b23"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","16f5c4ebd3bdb07dfb373e3548439409"],["/blog2015/06/BellPolynomial/index.html","f305252ddacba5f30857418e9b84f021"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","9335fe77a0b28c2222f6bb556cdc82b6"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","b7960c3bd21f6a3b64658a1341ca7764"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","2d723aa4fad8e982e4e147b3216222d2"],["/blog2015/10/Tiberium/index.html","7292539c6259f39918a9528fd5e564aa"],["/blog2015/12/ChengTianQuan-01/index.html","7554ed7e0ff9d29e7211c393b2446522"],["/blog2015/12/PKTFile/index.html","766dd5bd17ea0708a370dd23fb193207"],["/blog2016/02/ChengTianQuan-02/index.html","1681aa90143bc83e012cb0d4370f2928"],["/blog2016/04/LogicAndExperience/index.html","b3cac651d7b1e45a3889003b579ae88f"],["/blog2016/12/CSFFileFormat/index.html","2cc3c27306e0883e96b346b96fce51b0"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","b0a84af4c715e5cf50352d808b712d49"],["/blog2016/12/ProveCRTWithConvolution/index.html","e25d0eaf7308b44850ff581ebaa266ca"],["/blog2017/03/MIXFormat/index.html","b90d12c17ea1539f18c279bcf1a8257b"],["/blog2017/04/WesternPhilosopher/index.html","64cab90433066a9e670b2986f67708fd"],["/blog2017/05/TheAlgebraOfADT-I/index.html","1c47fbbd570803b9ffaf51c7fa9ed0f7"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","3998f7a43c100ba68a21a3ede345cdca"],["/blog2017/07/TheAlgebraOfADT-II/index.html","7c84869ca050b4f84e98450fd2e4b2d1"],["/blog2017/08/DnDTabWithQt/index.html","c7732d09bd696cd7b0dd153ac84f2159"],["/blog2017/09/ClassBasedOOPWithMma/index.html","9abad0e85002b82c8c73ecc6a8c06f82"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","fee92dcbde3aa3ad0d243f45846a2e17"],["/blog2017/11/TrapInCCpp-1/index.html","8c81d743fd8a095eabb362c09f50d451"],["/blog2018/04/DebateOfScienceInAncientChina/index.html","0e5ea2acefd1fbebe47b4193fec7204e"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","4fdbb43ea4b0e0e7e100fe6a7a3962c9"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","26d2c775e6095ca243b2320271eec12b"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","04cc6cd4d7f961b83b1a5e96caeeb9c8"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","00247e842a362107f6de2883ff7171ad"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","471a623506f2a3c546ae0eb880c3192d"],["/blog2018/10/PrintDefinitions/index.html","16c9587a5c3fe41e0bea9221f41421d0"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","de03bbf8f09c3529805e8790be4035d6"],["/blog2018/12/WolframOnlineDemo/index.html","498f815e072f52e93e97ae54807326f2"],["/blog2019/01/PointerInWolfram/index.html","157f70d66c63f2bdab02d0fc955c2849"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","5b92477a846bda0d675b6890ea839672"],["/blog2019/01/SymbolSandbox/index.html","86c84a34dd82ff2c3d994b6752994058"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","4d46b98ea3776093fb366ef8594fd3f9"],["/blog2019/04/MmaAutoLiterature/index.html","6f98896e1ee5f2c9684cdfec2ea1662a"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","6057f10eb65595c048acb6004bec174a"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","17d9bc8eaafcbffd2643c79350d0b628"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","72dec8160747fab8cc1e7891e1fba932"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","4335e8e4256ae8714b691f50ad7411ec"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","7dc327d0dd24fa0786d29c1f038d4ffd"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","5e0a2fec13e98c61cb24d910cc41cb42"],["/blog2019/10/SubmitFunctionToWFR/index.html","d3244ec3c11752a61892298b7244416f"],["/blog2019/11/TerminologyAndPopularScience/index.html","dd5503d446cdbca5a9c794c23411bd27"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","03fbb1b7acfcaeb054108f32bd77fbe4"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","1212fd7f46ad0bb3b5a169618c6bf57e"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","5c894fd372df34e05ff65e574639bfd4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","62072fe2c3f768bae7d34bb3ab85a50d"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","a908b0d22af2b711835f09f7e456c13f"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","f1aa921aa126b6335b004af300a5d0d8"],["/blog2020/11/JuliaPkgGuide/index.html","30a9b416630389e47135a09c1e0d7f1d"],["/blog2020/12/Summary2020/index.html","004b375fc4922b4adbd01b70cf28a914"],["/blog2021/01/MSBuild-LaTeXDoc/index.html","d1f80a6bd9f139210c76193522c8a661"],["/blog2021/05/Initonly-Setter-CSharp/index.html","8ccc11072b8f817958a0c3febacdd491"],["/blog404.html","486bd5587f54f1f8e1e69cd234315975"],["/blogabout/index.html","da8a8f248b6b2477dd4148ed23c421f4"],["/blogarchives/2011/07/index.html","28ac177006d3306a3d60d7184e94ad35"],["/blogarchives/2011/index.html","ec2270db1584a5ace9a8c73a6364abf3"],["/blogarchives/2013/07/index.html","0ef112abcbb9b6f510dd2b00403598d5"],["/blogarchives/2013/index.html","edc10d9169ebfe51beebce2d3edd5a35"],["/blogarchives/2014/03/index.html","486a2fb428cc7b0fd6ace8accfbe262e"],["/blogarchives/2014/04/index.html","7f4dc73ab32d2be31502baf50d980d87"],["/blogarchives/2014/12/index.html","507fdacebb6ab6f3e99327107894896f"],["/blogarchives/2014/index.html","a3db293975cd74a22e0a1ca551290890"],["/blogarchives/2015/02/index.html","c5b23b502321a7179773bea56295ff12"],["/blogarchives/2015/03/index.html","501c6613a400e20a6026e1569795645b"],["/blogarchives/2015/04/index.html","e4b6fe8718c7d59a38e25c19a683239f"],["/blogarchives/2015/05/index.html","f508f73e0f8fe55a0ba939c05327b061"],["/blogarchives/2015/06/index.html","4ce3f169d5b85b651f1c59225a7bbcaa"],["/blogarchives/2015/07/index.html","dccef1ea14ea142c74be1a91716e4f6a"],["/blogarchives/2015/09/index.html","afc10995a0732551b7c9b5659a548cda"],["/blogarchives/2015/10/index.html","16761491c6289286357cbd908acd9387"],["/blogarchives/2015/12/index.html","0a47569fdc597cbf486971871182c904"],["/blogarchives/2015/index.html","591a3db586831f79cedf767279c45761"],["/blogarchives/2015/page/2/index.html","6bef3f75659840f0a7b415cafca818c4"],["/blogarchives/2016/02/index.html","ef5bfc2ff12b2e60258f2b678f74a1a4"],["/blogarchives/2016/04/index.html","9ed684bbcd7b5ef9c99ff1f488e5b8ff"],["/blogarchives/2016/12/index.html","0bc109f1875dc4e0b539175c3e1dc062"],["/blogarchives/2016/index.html","958a84704f62c8cf659d1a251d42434b"],["/blogarchives/2017/03/index.html","e038104d9fb149996883edae64cfe5d7"],["/blogarchives/2017/04/index.html","5e81dd288a9bdb44c12ef7de4c867241"],["/blogarchives/2017/05/index.html","4da3bdc37fa1811cceb9344f2fdc40d3"],["/blogarchives/2017/06/index.html","a352ef30b1f2293d22f3b94d53f6993d"],["/blogarchives/2017/07/index.html","a99e60a5e616ef0229419c6bc35e5565"],["/blogarchives/2017/08/index.html","ed3dfde0e99416be27beb740c1ac9486"],["/blogarchives/2017/09/index.html","82950dea082d7866f183e77b42d04089"],["/blogarchives/2017/10/index.html","c12d080a8add9fb18473fde4899df9e0"],["/blogarchives/2017/11/index.html","980c1a2c36f81979aa8eb142f0ba6b84"],["/blogarchives/2017/index.html","a14e522d657c26ce22cf80c6940618b9"],["/blogarchives/2018/04/index.html","60313735edf1990bc85a092134e80f59"],["/blogarchives/2018/05/index.html","66e0a867951a20660fa830e245e7852d"],["/blogarchives/2018/06/index.html","42e584dd579cb454e2cae908107ccf1d"],["/blogarchives/2018/08/index.html","5950ffdba8645e3686e89e894e9b1575"],["/blogarchives/2018/10/index.html","992bc69d99cd181cd36b98ca4665356d"],["/blogarchives/2018/11/index.html","2948422a891af76195aac25e787013d1"],["/blogarchives/2018/12/index.html","a2b5c273f0116f4e8512577c74e67810"],["/blogarchives/2018/index.html","2af965b860da38d397e38515eec877a5"],["/blogarchives/2019/01/index.html","a2c9aebfa11b9b69836a27df41ec2f6f"],["/blogarchives/2019/02/index.html","7e719cf0d0b844f02ded7ca2a640f584"],["/blogarchives/2019/04/index.html","28d925f8369f474a5ad3d84719e3ba95"],["/blogarchives/2019/05/index.html","ba942ca717c2f3ff898293a11292750a"],["/blogarchives/2019/07/index.html","8b6661ad565fe5cb986800f7433f9f0b"],["/blogarchives/2019/09/index.html","5f16bad6b9cf0b3e3c2e2dc1d1b6c581"],["/blogarchives/2019/10/index.html","3bf7e45cd59e7e39fe348d65a4699676"],["/blogarchives/2019/11/index.html","f1f0dd72f0a1d8d3fae47ad16bd38f6d"],["/blogarchives/2019/12/index.html","83233706e566ed619808b35691940136"],["/blogarchives/2019/index.html","4a0242df7f4e66f82fc50916c9fc462c"],["/blogarchives/2019/page/2/index.html","50f3266eb3553788d2f539179e0428da"],["/blogarchives/2020/01/index.html","70532710bbc4d4d08a09f3e78f350921"],["/blogarchives/2020/07/index.html","30028444679e176a2bccda83ec0a8810"],["/blogarchives/2020/08/index.html","9af7c86f46c1dc5c549db5d615f2a658"],["/blogarchives/2020/10/index.html","c5d1eae281e60a0585a5c852bdac9aab"],["/blogarchives/2020/11/index.html","9c4e47bff20616467ab0fe07e4197ad0"],["/blogarchives/2020/12/index.html","624a94c62dae88170c32f598aee8a722"],["/blogarchives/2020/index.html","bb744671967c6a639872e297c9247601"],["/blogarchives/2021/01/index.html","66746de63d9557d32257f9444bbdac9e"],["/blogarchives/2021/05/index.html","eaefeb0861d951197b75c0cdc2178024"],["/blogarchives/2021/index.html","37d5c4a2aabc1143e57304231f42c0bc"],["/blogarchives/index.html","2510027561a7fecf76f185f689ef179c"],["/blogarchives/page/2/index.html","2510027561a7fecf76f185f689ef179c"],["/blogarchives/page/3/index.html","2510027561a7fecf76f185f689ef179c"],["/blogarchives/page/4/index.html","2510027561a7fecf76f185f689ef179c"],["/blogarchives/page/5/index.html","2510027561a7fecf76f185f689ef179c"],["/blogarchives/page/6/index.html","2510027561a7fecf76f185f689ef179c"],["/blogarchives/page/7/index.html","2510027561a7fecf76f185f689ef179c"],["/blogcategories/index.html","efedce7ea36e2b48b4f2b02de2d6e350"],["/blogcategories/代码编程/index.html","628e8df284da4a4b426c09afac6107a6"],["/blogcategories/代码编程/page/2/index.html","139bd956de4291cfe9324377be755dc4"],["/blogcategories/代码编程/page/3/index.html","05b3e31d47e1355ea26ee71629008f1b"],["/blogcategories/代码编程/page/4/index.html","4ef3b9d7c9ee1cdd5d1a435c888d59eb"],["/blogcategories/小说文艺/index.html","2396f965f66f88b28917533c4e8e67b9"],["/blogcategories/小说文艺/page/2/index.html","0e3cc072000e545ef33a442af1560511"],["/blogcategories/数理科学/index.html","e61bdccb5fbcdea09d09670205cf06a4"],["/blogcategories/杂谈散记/index.html","57fd8bbf2f10263904165c54632fbe4b"],["/blogcategories/翻译作品/index.html","adc7782cde62106c984ee49f4df49cb9"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","27b566e65a9b1586b42aaf1c68d415aa"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","25b818f315c038aab72e07372c2b3deb"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","5b63d41b0fb26bd22eb2b580f9e92b8c"],["/blogpage/3/index.html","4cfd4a3331fbedab4f60360bbfe5cfb3"],["/blogpage/4/index.html","fb4a50b910c172b790f7af29d74a031f"],["/blogpage/5/index.html","53f6fd27726b1e60f3b7aa94c65d5b4f"],["/blogpage/6/index.html","45285296d5583010c7aee8895f1d15a8"],["/blogpage/7/index.html","fc231df5aa2fccf9463a8fc7ba650c4f"],["/blogtags/C/index.html","6ad65130adaf886800b468259191ea73"],["/blogtags/Cloud/index.html","1394a26843980e7e4ad6ab581adaea87"],["/blogtags/C语言/index.html","4be898208af3895be0b7cd59d8811a9a"],["/blogtags/FlyCapture2/index.html","8b0fb4ccb31de03314827019854bc98f"],["/blogtags/Git/index.html","a64c7706d06a0a98af3850266b85a57f"],["/blogtags/GitHub/index.html","166e510ed83c656b33bc7ebdb7aaf84d"],["/blogtags/Haskell/index.html","8ecd1fdd072819d4a81622e5288151f3"],["/blogtags/Julia/index.html","3921d5d9bef6adfd85ff5367ecb165d8"],["/blogtags/LaTeX/index.html","d82bb969b8f9bb780385c3540e592f5a"],["/blogtags/LibraryLink/index.html","27728ed1aee2747be16971cee521f9c8"],["/blogtags/MSBuild/index.html","690713cd02b685b5c8adce5ef791d581"],["/blogtags/NET/index.html","e75c0bd5c6c9cd75d7994df47da0b16b"],["/blogtags/PMAC/index.html","e99aec7f06fa72ea15174253587c90ad"],["/blogtags/Qt/index.html","053ee2cd259dd8eca0dccfec2da974b8"],["/blogtags/Rust/index.html","a90dad3418c4bf4c096e39b3f6917e7c"],["/blogtags/Undocumented/index.html","a10d1ea736b32d94e0bb73ff638aac89"],["/blogtags/Visual-Studio/index.html","d8b4dbdd55b9d9bad4dae1b18428f49c"],["/blogtags/Web/index.html","d1c0f1196329336700b099a9886814d8"],["/blogtags/Wiki/index.html","b139a33fef7c125bc69873f171c17317"],["/blogtags/Wolfram/index.html","8b336ff41e197ef6476f6828ad2b86ff"],["/blogtags/Wolfram/page/2/index.html","47e5f23f153fe636930fdde59ed11cda"],["/blogtags/Wolfram/page/3/index.html","0464641da1bfd36a747c1bafb96a119d"],["/blogtags/index.html","8308496e4424e85ff45274c65bebc2dd"],["/blogtags/作文/index.html","da99e945790a7dddb2c4eedaea0d2bf9"],["/blogtags/作文/page/2/index.html","24c94bc63f708d587aa2c8dd582be81a"],["/blogtags/傅里叶变换/index.html","20856d8faa5ef92bfab797fe62f11c43"],["/blogtags/功能模拟/index.html","adf4761d1babd16ef290095ff3f157ab"],["/blogtags/参考/index.html","b0583b2089b4d2de2eac02ffbca7abf1"],["/blogtags/哲学/index.html","178306f65b7c9a75be8fa2800525429b"],["/blogtags/图像加密/index.html","5b23fd0f27ba8963c492b4c17c5e3b96"],["/blogtags/图像处理/index.html","b0e0b0eb1c57d02c028a8a453c14159b"],["/blogtags/小说/index.html","556576cd30f0ca42a0032e8534638b57"],["/blogtags/年终总结/index.html","bdfde8c23fabe1fd5c1a99f425890d3b"],["/blogtags/微积分/index.html","c209ce9600e9961c59c7b10d00d9bf36"],["/blogtags/拖放/index.html","9ebef0a4da65dedf7dd4c535a27d9cfc"],["/blogtags/持续集成/index.html","9710d3ca457170c9751f1715f4f15e60"],["/blogtags/散记/index.html","cb56ad8f261a25e07c3fa742e11bd19f"],["/blogtags/数列/index.html","a59873125f1b299ed76a714281d29177"],["/blogtags/数学/index.html","a1fc9ace3d61fbeded26f3e73cfb81ac"],["/blogtags/文件格式/index.html","1ece6cf33c22a7843e4ef266c7dc427f"],["/blogtags/文学编程/index.html","fc480eb1a9d8bea8970190bd69940c42"],["/blogtags/文言文/index.html","19321c40b6b24432c907cb842bbb15f1"],["/blogtags/杂谈/index.html","c8f031ffb7c7bed42ebf102c5ccd84c9"],["/blogtags/概率论/index.html","73c8e7bdeedfb13c9f89b7962398758c"],["/blogtags/混沌/index.html","62bce0ed646c2ea96d278564ff1c9cdf"],["/blogtags/科学哲学/index.html","6dc8ed3ce5a6c692ae90bc02ace22a00"],["/blogtags/科幻/index.html","0559500cacce70956cb1eba761748a8b"],["/blogtags/科普/index.html","a6b52fc3435231eec400453997c82cd6"],["/blogtags/程序设计/index.html","f47bd03177c3c1cfe53d191c02da63fe"],["/blogtags/笔记/index.html","ab8bbf874622fc0d16722fe6b4214219"],["/blogtags/符号计算/index.html","490dd5de0899fb6768a337a80b0b67e3"],["/blogtags/算法/index.html","3ae3411a0942a86f8f55773c92e4c3c4"],["/blogtags/红警/index.html","7285417d0bcd2aab82a07ac6270f2d40"],["/blogtags/编程/index.html","3a2fae69762773b8048d36761e7c80bd"],["/blogtags/编程/page/2/index.html","00a84496af2b2479ef35ce7b4646aa80"],["/blogtags/编程/page/3/index.html","e5275caa35ad495483305ca07192d89f"],["/blogtags/翻译/index.html","ee90c997e1ad978590cba1582b7fd1e8"],["/blogtags/语法/index.html","0193be99e5269d1b9c2b17928c580b93"],["/blogtags/踩坑/index.html","ecc43b688302d03b55debbde61d739c9"],["/blogtags/逻辑/index.html","1a6e2520e303fee2d6a63ff5e548ad9d"],["/blogtags/题解/index.html","ebc06274d4af347a756a903f04ea65c7"],["/blogtags/马克思主义/index.html","143e85e81650c79d5ddc51c22f40a91b"]];
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







