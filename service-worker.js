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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","35558e593dc148b81b933e747127e032"],["/blog2013/07/EdisonIn21Century/index.html","620df3b7ed32b3697c282a66417ed0b4"],["/blog2013/07/FenDou/index.html","d36fe84b3b9f54728b50aa2a7b71eeaa"],["/blog2013/07/Qie/index.html","29d15e2132395e3fc90f194082990e54"],["/blog2013/07/RhapsodyOfSand/index.html","049c98a9acb1e46c27ff2fa58490a92d"],["/blog2014/03/KTimesSum/index.html","744fdaf5e01855c2e10d2e2ea1b5e781"],["/blog2014/04/PiPaXin/index.html","2a14a64f4f14a19a9061efe63026c5c0"],["/blog2014/12/Miniascape/index.html","bb157662df6b9ab77e7efc3996a11694"],["/blog2015/02/ShiBiao/index.html","88533ccb844f08cba4759d61fb0bc924"],["/blog2015/02/Wei/index.html","911603a040b1294a29695709befa4e63"],["/blog2015/03/Stain/index.html","b47def37b06571054f42844a7cfaa592"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","c9dfcb3f619899b2f1ad94ad6fa704fb"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","77953b5d2d74e048dd2b102c9c4054d1"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","3bdc3f283b0e6ad67390e830cbf5677a"],["/blog2015/06/BellPolynomial/index.html","90fb5ab32a4b90f0c287a5ee1fd9eea3"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","bd319f745538d4677025f4f4982414fa"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","44521245bf520302ace35011642165d5"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","ad5c73179cad3d16960f00cb439fed6c"],["/blog2015/10/Tiberium/index.html","1247990ae8958cfc64f704466a799da9"],["/blog2015/12/ChengTianQuan-01/index.html","fc12fbbe2b48847d62b19b387e435003"],["/blog2015/12/PKTFile/index.html","2326dedae6af7587198c4f0489154dda"],["/blog2016/02/ChengTianQuan-02/index.html","d1350229c744699e65a2ee4e0dcd15ff"],["/blog2016/04/LogicAndExperience/index.html","fc8a024231ee134be5d4d1a55793fb3b"],["/blog2016/12/CSFFileFormat/index.html","9aaed7837034e66ec372fd2ef7316c8b"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","06744b1fc589a5104dc4c18e3dc637b1"],["/blog2016/12/ProveCRTWithConvolution/index.html","36de154f43fe35d1708c10a0100a438d"],["/blog2017/03/MIXFormat/index.html","53d36f0716ee0b2b7db694b8ddeeaa5b"],["/blog2017/04/WesternPhilosopher/index.html","0a3c1f7dc65d8f5bc0907b2d4a4c815c"],["/blog2017/05/TheAlgebraOfADT-I/index.html","9ed0fd05b2e9128a5b2cac8140a70bed"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","70a0f100b36c970f1dc423a2835a9a99"],["/blog2017/07/TheAlgebraOfADT-II/index.html","f7bcba8e6f55b9133938bd8d39648e44"],["/blog2017/08/DnDTabWithQt/index.html","756466f208b3f45d7667379fdefc3cca"],["/blog2017/09/ClassBasedOOPWithMma/index.html","5c51a1b8106220d8955908c60691224a"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","712148ebca46e177f3ddaca2ac3d8870"],["/blog2017/11/TrapInCCpp-1/index.html","d4ba81131fce11f39b9304706d171140"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","02dc1d99a1d311f7da2b67841928e90f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","7b99cad450c5c9f228a6fb42f02c411c"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","beff5b495ce91f5edf7cd70ba68d00ba"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","655653550bffe4fd9a59dd908f56e173"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","5f585734d4f3847c0b88fd8b83e21498"],["/blog2018/10/PrintDefinitions/index.html","13114fc92f1ac48a0689d9da2109e7f5"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","21ebd46e67693b439786b4061706abfd"],["/blog2018/12/WolframOnlineDemo/index.html","0330e2e3d92e5abb736ca07c1cca3a2d"],["/blog2019/01/PointerInWolfram/index.html","84c190a754a2183eaf2cd62e4981179a"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","fde174741ce5d0d9d93881e0efb36452"],["/blog2019/01/SymbolSandbox/index.html","afeb209f7dc790f00d38d384c47b9e33"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","57f7247cf70c4f4175c78dbdda13976f"],["/blog2019/04/MmaAutoLiterature/index.html","da2be1fe6dc25aea7bb8aead0b0e69d4"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","8a9965f4345c6f9bd005620a2b4678f5"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","30e0ec1fdb4528f308765407e713bd0a"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","235921cd42eac887f8c6010286024a5b"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","7df3f8079f7eac25561331499d94faca"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","f510a43fef1ea7d68a7775e070995fc0"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","5d8c00b10654e5df1a9406c7c899cde7"],["/blog2019/10/SubmitFunctionToWFR/index.html","a98f6fd6d3e0cb12ac98c96f0a38d0f9"],["/blog2019/11/TerminologyAndPopularScience/index.html","fc404df58e83d7b3f40bf69db1fad272"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","636e16a6d1dea3496113c24b7c4b6d5d"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","fca09982dfb231d7aa9e412bc65e0ce5"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","9f8986c10398ac08ada0e68aace959a4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","f20d23cb6c028c6cd1b5c1cde577a3e2"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","2884a90bb1f6f64568d414aaeb58e675"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","b903e06baa115f9d058015924a4a1836"],["/blog2020/11/JuliaPkgGuide/index.html","e90a36345ba7eac7d0eb87b5cd005d5e"],["/blog2020/12/Summary2020/index.html","5fb7ac45956a181e27f0347177400302"],["/blog404.html","25d5eb611da5643f0a9ac0586013e3a7"],["/blogabout/index.html","13308ff7e6f6f8038d2cc4d1bacd91f1"],["/blogarchives/2011/07/index.html","ea51a489f8c0a5f6ec9d15bbd8ed7e13"],["/blogarchives/2011/index.html","4558b8e14f30ad8159ec9f0f520e12c7"],["/blogarchives/2013/07/index.html","67c39035d7b6c39b9adcb12466f4c1c3"],["/blogarchives/2013/index.html","859e6c566cf24a83f349b1c264b9ec5f"],["/blogarchives/2014/03/index.html","bc54474acd81a6e1e3fdbd3d277b0a96"],["/blogarchives/2014/04/index.html","11317ecf8d490295f7373380ea84893c"],["/blogarchives/2014/12/index.html","7bbb3a3c9988c064bccb94b487e55525"],["/blogarchives/2014/index.html","c682f4645eb4ccbba3c076b357b8f9f3"],["/blogarchives/2015/02/index.html","908f06fc6d34250844b4a51154fab923"],["/blogarchives/2015/03/index.html","f8d107f09335fde2eaacdece7de5dd80"],["/blogarchives/2015/04/index.html","bb225a7742362f3edf0b450ca32dddf9"],["/blogarchives/2015/05/index.html","806af2d7f16ce3dc7cb24dcbeb1a95b2"],["/blogarchives/2015/06/index.html","1cf1f1fc8ec47beb1466bf2494146c66"],["/blogarchives/2015/07/index.html","2a02bd8966e9521581db829707646785"],["/blogarchives/2015/09/index.html","bb8a6592218d6ebb5bb6c6664f45114d"],["/blogarchives/2015/10/index.html","431a7d18aeb6bf47012e842832298cfa"],["/blogarchives/2015/12/index.html","7a8c77d718af43fa3b44748c5bfdddc3"],["/blogarchives/2015/index.html","f928b35f1f1c8f7fd69dc18922c448e2"],["/blogarchives/2015/page/2/index.html","60ed4ce0833f2032ac5e85e31bd3367c"],["/blogarchives/2016/02/index.html","cf428e3117c0e5e6c3591d21574750b5"],["/blogarchives/2016/04/index.html","27b004646644279a9c932e9f030191e5"],["/blogarchives/2016/12/index.html","9f9e345c544424f12c4ae868f36db038"],["/blogarchives/2016/index.html","37f842413f7f1cfcddb37ffaaff4467d"],["/blogarchives/2017/03/index.html","d95b5af5b33349a4dcb29da06eca6158"],["/blogarchives/2017/04/index.html","3121c5ee69d8912eca5385bd88b7315b"],["/blogarchives/2017/05/index.html","22c1eb6b691c9e1906ea149352f16c2a"],["/blogarchives/2017/06/index.html","83094c2a53e798f3bdec8d6c11e36e6f"],["/blogarchives/2017/07/index.html","540cc36462ea1b3047a0b4ea3e85214e"],["/blogarchives/2017/08/index.html","fe7a144a1755fc024ddd194ce7cc061c"],["/blogarchives/2017/09/index.html","b8a71cc84154eca45bb7b0a4f9785f31"],["/blogarchives/2017/10/index.html","9f7d6de90b1ffe7f1b55585046703808"],["/blogarchives/2017/11/index.html","a829c29fdf03fcec23de0be1fbe9c565"],["/blogarchives/2017/index.html","d98d01bc2560d573f40e3ae99b8140a5"],["/blogarchives/2018/05/index.html","a9b13e6e3afd6c95f869736474cf4a36"],["/blogarchives/2018/06/index.html","0b1393a0981ecde54a0e149174c9cb10"],["/blogarchives/2018/08/index.html","92a98d243be3c219d5677776bd0047b6"],["/blogarchives/2018/10/index.html","a1e06e6b757bbe34087652c91cfe92fd"],["/blogarchives/2018/11/index.html","2e5c86e540fd5fdee73b69cb9a051add"],["/blogarchives/2018/12/index.html","55d62bb950d2ff272481d60f5f6d1d39"],["/blogarchives/2018/index.html","a65d7b546e9a0ae8de525c7b098d3ddc"],["/blogarchives/2019/01/index.html","1958609542f5502e1b1e34ad1e14f7f2"],["/blogarchives/2019/02/index.html","d20ee60ab772ffe65a5940286a963310"],["/blogarchives/2019/04/index.html","369a4126a2aba6be2829fe4ea1b3c8b2"],["/blogarchives/2019/05/index.html","9e82431fae25e2e7d51dd24d216ad280"],["/blogarchives/2019/07/index.html","7cf9dd9c02d49239227d5c92bb8e9977"],["/blogarchives/2019/09/index.html","c1641a116e0c05b543588a617f3a1168"],["/blogarchives/2019/10/index.html","006c0f296d8fead53ec86210a8652808"],["/blogarchives/2019/11/index.html","70d1d4572d3fb2be0b788ff0aa276629"],["/blogarchives/2019/12/index.html","8cd0e8cfed3f930b01be2672e0483076"],["/blogarchives/2019/index.html","d2333e70f9f5791d1f5724062d89477d"],["/blogarchives/2019/page/2/index.html","4b4484c90542f56d56b23e53cd57f2bf"],["/blogarchives/2020/01/index.html","24a3b9b6f5194c016b62b7883fbd88fa"],["/blogarchives/2020/07/index.html","1479f7462009929161499638410e7b9f"],["/blogarchives/2020/08/index.html","9060da011bb14923779ac80876fe2ac2"],["/blogarchives/2020/10/index.html","907c8b517d163c779aec08006d340118"],["/blogarchives/2020/11/index.html","75ab6786f7a7160d3eeb9918e8690f14"],["/blogarchives/2020/12/index.html","ce0c5ebabedc1cdf5560f117c1b0eea6"],["/blogarchives/2020/index.html","82588abc148919ea1273ee5eaa0d9fd7"],["/blogarchives/index.html","323d56c97e7f6c4b2d1eb8700c0f21e3"],["/blogarchives/page/2/index.html","323d56c97e7f6c4b2d1eb8700c0f21e3"],["/blogarchives/page/3/index.html","323d56c97e7f6c4b2d1eb8700c0f21e3"],["/blogarchives/page/4/index.html","323d56c97e7f6c4b2d1eb8700c0f21e3"],["/blogarchives/page/5/index.html","323d56c97e7f6c4b2d1eb8700c0f21e3"],["/blogarchives/page/6/index.html","323d56c97e7f6c4b2d1eb8700c0f21e3"],["/blogarchives/page/7/index.html","323d56c97e7f6c4b2d1eb8700c0f21e3"],["/blogcategories/index.html","bda8931082abd04095b1e816a73ba8aa"],["/blogcategories/代码编程/index.html","a42a5efff956c319c398ed85041ca1fe"],["/blogcategories/代码编程/page/2/index.html","f4b13bf1e8500fd0355444abeec3f730"],["/blogcategories/代码编程/page/3/index.html","dc7bbb084a8056d8fe14364c70cc4074"],["/blogcategories/代码编程/page/4/index.html","390b6657e125885529a68afb0f2eadce"],["/blogcategories/小说文艺/index.html","841a7ee8d4d80c75efade29ae8dd2fad"],["/blogcategories/小说文艺/page/2/index.html","538e0db345962635f29999de291ef1f0"],["/blogcategories/数理科学/index.html","2ee930e32fe03587f8ef6b8f3c2ed18f"],["/blogcategories/杂谈散记/index.html","ac2a9537d4a30219c21fbaf747bbf06d"],["/blogcategories/翻译作品/index.html","4e9a05cfb271cad978050ae8781f1062"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","660118faef5c2657033db5368758537f"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","0a37f813c99fa10cd99c1001e02b4856"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","30caf9a57dc6d7868ab6b50aeebcd1e3"],["/blogpage/3/index.html","d78fdb7ba70cf8e9e7b5f1621d2d3a51"],["/blogpage/4/index.html","3bbd99f2152f7de16494856836806c67"],["/blogpage/5/index.html","9d8435b658d65f6cd700c21c0b879fa5"],["/blogpage/6/index.html","1ceb1fecbd144eb39ce4b6ecef5ad0e6"],["/blogpage/7/index.html","f86166afe22d35ec8fa6819c80102547"],["/blogtags/C/index.html","76e929ce71e994828b2356bfd8f46a33"],["/blogtags/Cloud/index.html","2d601f4c5b0d81ff4ba07fcfa3455806"],["/blogtags/C语言/index.html","b07092204a40bd2639e58b3ecfa062cc"],["/blogtags/FlyCapture2/index.html","9578538f5660e35b78e46623f94845b0"],["/blogtags/Git/index.html","fbf5d04b14cffb463080b292b6087a50"],["/blogtags/GitHub/index.html","03b6eab19ec82698f44830a80c3a4387"],["/blogtags/Haskell/index.html","2f44d2efbf7b4245f3d8f75f046c606d"],["/blogtags/Julia/index.html","42a412371f4950da913f474926e9833b"],["/blogtags/LaTeX/index.html","9b0172d62f6ade52b64f411390abffb3"],["/blogtags/LibraryLink/index.html","2843a77ecd5272fa45214b502065d23e"],["/blogtags/PMAC/index.html","afd080dfc8257ff4f54064780358bfce"],["/blogtags/Qt/index.html","0be933303978f1d542e95cd414a57f7f"],["/blogtags/Rust/index.html","6f88ce9342460fe9b28c7eae5634ec31"],["/blogtags/Undocumented/index.html","96051f538f330bc3417866f7e3f5abc4"],["/blogtags/Web/index.html","eef6bcb91942959ccaeb588512ebe711"],["/blogtags/Wiki/index.html","1f3fa72f15afae44da738fe963b40f13"],["/blogtags/Wolfram/index.html","8c898628dc646f596bf27d2a14748136"],["/blogtags/Wolfram/page/2/index.html","8c897dca0ce162d8837fdd07ac57c3fe"],["/blogtags/Wolfram/page/3/index.html","e699da42e46a45812e8ed40a19e831e5"],["/blogtags/index.html","25d31f34a1047f2d1a0c9ee7b2c8a25c"],["/blogtags/作文/index.html","7ca2d529bac6fb2ff904b6ebd010899a"],["/blogtags/作文/page/2/index.html","c3fe44711960098769e07dcd4a9b36e9"],["/blogtags/傅里叶变换/index.html","c819bc01e8bc8106400ea259bf29c230"],["/blogtags/功能模拟/index.html","669780b13edd3a0609c064edd7bba662"],["/blogtags/参考/index.html","0f28f209c16026c97cc57755f350676e"],["/blogtags/哲学/index.html","999d1bea1b95a404820b9a314b8b2f9f"],["/blogtags/图像加密/index.html","199a52fc3c006dfd50e175d0142b69eb"],["/blogtags/图像处理/index.html","cbe0fa1343d9461e3bd4a6c734d0fba9"],["/blogtags/小说/index.html","6fc7fa128e4930624d9089f15daf886d"],["/blogtags/年终总结/index.html","b342749cba82f9ea147b820cdc3d1d86"],["/blogtags/微积分/index.html","9a7a2de6256b082ed73a68a8244d99b3"],["/blogtags/拖放/index.html","c1805cfc186ddd57fd31bf7529d25665"],["/blogtags/持续集成/index.html","eab07ccf55139e7917f5d89b9e21ba45"],["/blogtags/散记/index.html","6bff73671ef892dee289c49334c4fc9c"],["/blogtags/数列/index.html","036f5993a32fa24bdf49470d38d6821c"],["/blogtags/数学/index.html","77094ace6e2b8e338b2c71f344468de9"],["/blogtags/文件格式/index.html","da4600ee7c58274f5cded9f466d13ebd"],["/blogtags/文学编程/index.html","ce909fa4b4a8e49977b0919c3d5aa54b"],["/blogtags/文言文/index.html","92cbd81645e7e05229fb6bb12ec2dced"],["/blogtags/杂谈/index.html","b044fc48e94336cf919bd34c57cd87c0"],["/blogtags/概率论/index.html","c204120b7e4bc58a9d51fce51b6946b7"],["/blogtags/混沌/index.html","ba1e19294ecf2e106e71b348d72d5a17"],["/blogtags/科幻/index.html","d859de176f743f2b7f505d522a81e1ed"],["/blogtags/科普/index.html","8c1b56a9ceaaf16b29e26c93583d05d4"],["/blogtags/程序设计/index.html","ef80a0fcf80ad5b77725895823f9a031"],["/blogtags/笔记/index.html","12efa7c85618ab0572dc1eacfb39e706"],["/blogtags/符号计算/index.html","dbf7ce1e1c692a0e3853806d2d9b10b3"],["/blogtags/算法/index.html","529087b95f1a952c5de3cf86ae38108d"],["/blogtags/红警/index.html","dbacfbe20db2ad0eddae48d805effed4"],["/blogtags/编程/index.html","10315b332bc5c5e8dc4dbaf6d7bf6f1b"],["/blogtags/编程/page/2/index.html","ea9cc2ebafbc7c5b30d754d3a9b7f1cc"],["/blogtags/编程/page/3/index.html","a13746fcf97d6b14b9b8ab11810d9218"],["/blogtags/翻译/index.html","b6a902e1d2245038cb1ad69f47e975ed"],["/blogtags/语法/index.html","05ab6c770aa35436ad4c1c55a3ab93a1"],["/blogtags/踩坑/index.html","272e15cbdc2a81ab6269fc20eb4fcb04"],["/blogtags/逻辑/index.html","f230743fca9b05c44dcfdf34b2c08a99"],["/blogtags/题解/index.html","b7839ef257925ab3e3cd69e355371f17"],["/blogtags/马克思主义/index.html","cb0dbd059c1542fb8dc8110b3a768d32"]];
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







