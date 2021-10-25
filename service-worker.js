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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","b7354e20ac4a1e52e0960304d17ed00d"],["/blog2013/07/EdisonIn21Century/index.html","9c2a6234f74b3f48a7cbbc4b4ea12c9e"],["/blog2013/07/FenDou/index.html","d8903ae4ac80df4092a6a6d2e7f95965"],["/blog2013/07/Qie/index.html","838c3c3c5c0c627868be265f4407ceec"],["/blog2013/07/RhapsodyOfSand/index.html","07adca2503a78a92b78d8ff2a67cde74"],["/blog2014/03/KTimesSum/index.html","5318c3816e9c15458a642f924444924d"],["/blog2014/04/PiPaXin/index.html","e34582a7e233c1962ac64a627f0a6e43"],["/blog2014/12/Miniascape/index.html","f18b6b8e2896fb84c42c55affa90d547"],["/blog2015/02/ShiBiao/index.html","c9c695fb244c8fa90a11e95fe8d38aed"],["/blog2015/02/Wei/index.html","c5c25c43179e7c46c1dd9e8fdb35909d"],["/blog2015/03/Stain/index.html","52bbeaa55461d71db72f5ca6883a6eaa"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","2883326d0888a1d3cfcf48d2728fedbc"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","a99e8f44e5124ae13e96adb19d9b9806"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","6c0817bf1e63f0cf8abb065cb0ef2c92"],["/blog2015/06/BellPolynomial/index.html","3a6c7b0a9727b50440156cce7f50760e"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","d0b1c143262b05117b9dc2ded798966e"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","554a05992a965049ef243dc8d9972676"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","5efb822d5c36d8d2e4404b75ef00cd70"],["/blog2015/10/Tiberium/index.html","7884e061bf90ddb8294671735a928f35"],["/blog2015/12/ChengTianQuan-01/index.html","9371a3c6a3b9bdd72e3a2f5ee9fe2536"],["/blog2015/12/PKTFile/index.html","02f2c43d562efe15a7b66749ba1d294c"],["/blog2016/02/ChengTianQuan-02/index.html","65c282bb6eaf78fc933b566fccd06c85"],["/blog2016/04/LogicAndExperience/index.html","f4d796c9d04b05bb9ec7e0d950ba0e55"],["/blog2016/12/CSFFileFormat/index.html","58db0d3dc0949be6a07c831b1be87834"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","00619717eac6bb6acb05c74e75e99942"],["/blog2016/12/ProveCRTWithConvolution/index.html","dc60046bdcbbe649f4f2c0a0077f0bea"],["/blog2017/03/MIXFormat/index.html","94f4d31d1d5f019c514ed1de95fc2d33"],["/blog2017/04/WesternPhilosopher/index.html","0d9f478ffa3268bd0e3f6a90af25553d"],["/blog2017/05/TheAlgebraOfADT-I/index.html","e1e6e8a68b31856d7ee756c76afbc5a6"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","0fdaa5f81b670064cb6edb7cf6eb7b58"],["/blog2017/07/TheAlgebraOfADT-II/index.html","22804f2fe346be0fc18e681a0fd3f47c"],["/blog2017/08/DnDTabWithQt/index.html","71564add44ee0c98a2333e237a776799"],["/blog2017/09/ClassBasedOOPWithMma/index.html","d35c08bb9ac4e54a05fa9ba60b072cb0"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","6783ce2d913de9e50a7d1c853b81e3cc"],["/blog2017/11/TrapInCCpp-1/index.html","db070190222526511bb46cbb102c73f0"],["/blog2018/04/DebateOfScienceInAncientChina/index.html","0e5ea2acefd1fbebe47b4193fec7204e"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","e910dec2bd82c33f03685a0c5be98646"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","c061396d6acf9dcd7f1e26d08f78339d"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","24e1880fb9bee2354c0ac489d6d85c2a"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","29552ed64a4f4b21809f5acb8db0e413"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","3d2030164aedad238f0148aa914c7627"],["/blog2018/10/PrintDefinitions/index.html","75c692ba660840e42bb70bb398946e40"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","228f0ec4ecfe06c478e13db5d970632f"],["/blog2018/12/WolframOnlineDemo/index.html","6ecf4699bc40266d5d1067b1de2a84cf"],["/blog2019/01/PointerInWolfram/index.html","c57eed6740aa5a5643bc7c2f3ae166c2"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","d09f4864a24b39453d2f7d6bdb078df1"],["/blog2019/01/SymbolSandbox/index.html","b2a7e06a18e051685de2492bce16c733"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","11786975041c65177c5777ea4589195b"],["/blog2019/04/MmaAutoLiterature/index.html","4f4a0f952731564809f5f4236e38f48a"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","55f7e67f73a63c0821f34810efc368fe"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","029f363cb6bc893dfc9deab1b1b03650"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","d8c8474f76d269687d51e5d281bc76b8"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","39a806a5569f6ceb2d18e9ee92e9acb5"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","9acbb9fd552814cca2b7aadb4be05d63"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","ca1956a09cc6a24b6d91861c9d272efc"],["/blog2019/10/SubmitFunctionToWFR/index.html","b623da8b96a2f65995ce2b87fd9b67a7"],["/blog2019/11/TerminologyAndPopularScience/index.html","d8e86c0886c5c80bd9a8fd0328f8e07f"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","ebfb4fe478260eabd06e5de02f4dce94"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","1212fd7f46ad0bb3b5a169618c6bf57e"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","5c894fd372df34e05ff65e574639bfd4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","62072fe2c3f768bae7d34bb3ab85a50d"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","641093a2f63f43f7d344c08e25bc737c"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","f1aa921aa126b6335b004af300a5d0d8"],["/blog2020/11/JuliaPkgGuide/index.html","30a9b416630389e47135a09c1e0d7f1d"],["/blog2020/12/Summary2020/index.html","004b375fc4922b4adbd01b70cf28a914"],["/blog2021/01/MSBuild-LaTeXDoc/index.html","9deccfeb5714fc6146381b6f6c6b5a45"],["/blog2021/05/Initonly-Setter-CSharp/index.html","143b626cfd8a37be291561938a6ea69a"],["/blog404.html","486bd5587f54f1f8e1e69cd234315975"],["/blogabout/index.html","da8a8f248b6b2477dd4148ed23c421f4"],["/blogarchives/2011/07/index.html","4f020767124431692f5cc7dcb121e06a"],["/blogarchives/2011/index.html","52a4a3f473b0292fafead84cacf5e692"],["/blogarchives/2013/07/index.html","99c5abd3ac1618e4a787b985338db42c"],["/blogarchives/2013/index.html","43749cd4c522a96cbb2e6273caa5888b"],["/blogarchives/2014/03/index.html","af4d772fbe951e7625316881f179375a"],["/blogarchives/2014/04/index.html","9af1372c8742973f540daba8e7077003"],["/blogarchives/2014/12/index.html","708fb40669f9d6440eb39860ef4b0491"],["/blogarchives/2014/index.html","927f87d7287cbdf09d7403f8e0e9679a"],["/blogarchives/2015/02/index.html","b863942fc9b5ce61ea7dcf34f47718e0"],["/blogarchives/2015/03/index.html","9b42907f13196d026a69b24ff83a7b90"],["/blogarchives/2015/04/index.html","135e771619c8c23f9dd80ac4a78956a9"],["/blogarchives/2015/05/index.html","b52138ff15b121ba48a20088519efa9b"],["/blogarchives/2015/06/index.html","8007499fecce6ca9ccc501935f2e7b34"],["/blogarchives/2015/07/index.html","9a371c77afe010aba86818b9aa3ebc57"],["/blogarchives/2015/09/index.html","460fde78748b37421f5f5f2d320b4d4b"],["/blogarchives/2015/10/index.html","6ce71554b879bcba11e83262bb223b85"],["/blogarchives/2015/12/index.html","14d9b1feded30d16e3e6401a193f2075"],["/blogarchives/2015/index.html","b787c89d04cbc7817111c56c3edd3040"],["/blogarchives/2015/page/2/index.html","9914be4b52395d40f1b60a6e37fb431f"],["/blogarchives/2016/02/index.html","0eb7a5bdf46f248cd1291a0b33b63c5b"],["/blogarchives/2016/04/index.html","cff5d2c63837f82b1b6cb9324c5338b7"],["/blogarchives/2016/12/index.html","8d03002789ebb186a2c1f63bc20ece0a"],["/blogarchives/2016/index.html","1875ca85c541e9768b6e69212dc1bd93"],["/blogarchives/2017/03/index.html","53d13de791de9c03a3c80b803eb75449"],["/blogarchives/2017/04/index.html","36ac9ddde89059dcd8dd13dbc0d0b782"],["/blogarchives/2017/05/index.html","957e2c7a8082621363420afc11429b37"],["/blogarchives/2017/06/index.html","40ea45d098bffc7d91ae752a8f12a629"],["/blogarchives/2017/07/index.html","322579c1ce753c4338e60969383ddae1"],["/blogarchives/2017/08/index.html","019b0ad965cc81e25e9ffb1c6c50d397"],["/blogarchives/2017/09/index.html","c2d18a134ed10dabbb65ab97d40d5a12"],["/blogarchives/2017/10/index.html","48bec7a42748706ddeae15adca878104"],["/blogarchives/2017/11/index.html","3aa4f6558067cb7a82e0ca3bd88e5176"],["/blogarchives/2017/index.html","1ded0db02ed8ec2402723fc74479373e"],["/blogarchives/2018/04/index.html","980872d3d06ade64f736d16dbe305c90"],["/blogarchives/2018/05/index.html","db70210d2ba234b90d0fd67c6ec129ac"],["/blogarchives/2018/06/index.html","abd959d3d66b12274ec040a2d5f21cb6"],["/blogarchives/2018/08/index.html","c7d403a2db49551fc612bce78c678004"],["/blogarchives/2018/10/index.html","a76003be6e54de4beea6a550981e9cab"],["/blogarchives/2018/11/index.html","8b6637e7b537819db5307e7f5a261c58"],["/blogarchives/2018/12/index.html","c2b44a3f229a5bc7a69754d0e72d6ce9"],["/blogarchives/2018/index.html","d583962f76f7a6f024ffe36f73668b9b"],["/blogarchives/2019/01/index.html","7d2d001ba281e7a6bab9f936ff75a30b"],["/blogarchives/2019/02/index.html","2defb8b0241157f05f7ba0c9703c9e1f"],["/blogarchives/2019/04/index.html","94734a64ef94f99c92faf60bedb33020"],["/blogarchives/2019/05/index.html","14c9eb2b3a437f1cf9380a1f81b1cd16"],["/blogarchives/2019/07/index.html","310fa35387da902205d2407a12d7864b"],["/blogarchives/2019/09/index.html","e819b8faebc132a6115ed048ad52d2d8"],["/blogarchives/2019/10/index.html","b506f8f0786e2691a4f312245c98962d"],["/blogarchives/2019/11/index.html","8a19673937d745f058a4338610a837e6"],["/blogarchives/2019/12/index.html","11a822a3e9198c1c66a19c7b2d4b3e7d"],["/blogarchives/2019/index.html","b587a25b94c2faf93db51291a83835bb"],["/blogarchives/2019/page/2/index.html","8c9b4a97288e1b7288dd5eb6ea0df8f1"],["/blogarchives/2020/01/index.html","a0630f0501db73d3076b80d61edc6850"],["/blogarchives/2020/07/index.html","e19b03238b75e293ac990978473dd1a3"],["/blogarchives/2020/08/index.html","0031f11caaba78b3f1a7cc9a3f2b0681"],["/blogarchives/2020/10/index.html","22fe3e0aef3b8eb94b3982c3161fbe88"],["/blogarchives/2020/11/index.html","c53d26b40cc97573ff078e254aa344b2"],["/blogarchives/2020/12/index.html","c26ce2949d68e046e4ebf26fb3308ad7"],["/blogarchives/2020/index.html","d620d074737db0f8bd9bfe6b5ea342d3"],["/blogarchives/2021/01/index.html","c8908dfd31554d669ba0f10a2aaea59b"],["/blogarchives/2021/05/index.html","6e887687e505124e653e132543c875f9"],["/blogarchives/2021/index.html","3ee01e8f0b5865319fc4575a937afc03"],["/blogarchives/index.html","2d3da74854dad5782318a73d2969a931"],["/blogarchives/page/2/index.html","2d3da74854dad5782318a73d2969a931"],["/blogarchives/page/3/index.html","2d3da74854dad5782318a73d2969a931"],["/blogarchives/page/4/index.html","2d3da74854dad5782318a73d2969a931"],["/blogarchives/page/5/index.html","2d3da74854dad5782318a73d2969a931"],["/blogarchives/page/6/index.html","2d3da74854dad5782318a73d2969a931"],["/blogarchives/page/7/index.html","2d3da74854dad5782318a73d2969a931"],["/blogcategories/index.html","efedce7ea36e2b48b4f2b02de2d6e350"],["/blogcategories/代码编程/index.html","774a97717e77e6129ef48e50cc0f87f9"],["/blogcategories/代码编程/page/2/index.html","216b26e8a4fe81d433be346f29151102"],["/blogcategories/代码编程/page/3/index.html","6c762bbc216870759f9d7eb207daa45a"],["/blogcategories/代码编程/page/4/index.html","3c84bd175097929b90da74701edc9510"],["/blogcategories/小说文艺/index.html","10868361e85d35f3c8f83418fb34d32b"],["/blogcategories/小说文艺/page/2/index.html","3e89cdfba0dbeb3edc7e1204d454a2d3"],["/blogcategories/数理科学/index.html","7d4efece5af68a8c7904cb7705f2ce0f"],["/blogcategories/杂谈散记/index.html","acc15535301107657f6617293359ef82"],["/blogcategories/翻译作品/index.html","678922563a891a63f39a5facd3cd1033"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","27b566e65a9b1586b42aaf1c68d415aa"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","8c2f27dab41012361e4815b38ef57948"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","b4c29c504f97de3e98308b02a8fa6d6b"],["/blogpage/3/index.html","20bec000c80d92344f5e626bd15e2c1c"],["/blogpage/4/index.html","d2fc4d8224406c6e3f11c381ef372e7a"],["/blogpage/5/index.html","0c7801bb47511afdd120a6fb7ae1b9b7"],["/blogpage/6/index.html","5c12438f9809ad10741e95b3cc4f7e99"],["/blogpage/7/index.html","2f9ce4d5ec7a2a46e3f95548588cf2a3"],["/blogtags/C/index.html","24b2c1d48c1f0a1ae56938a9bdc2a45e"],["/blogtags/Cloud/index.html","0b4f65f40c3d84ef1f7c27c27e515828"],["/blogtags/C语言/index.html","fe093f71a4bf79853e552346f5779657"],["/blogtags/FlyCapture2/index.html","db1ecbe548ab2e38119dcaa3fe261138"],["/blogtags/Git/index.html","117845a2b026b569ace811058515d536"],["/blogtags/GitHub/index.html","ac7caed672d12d89ffbd744d5c082bb8"],["/blogtags/Haskell/index.html","24703406d1290e8a0921ac36dface530"],["/blogtags/Julia/index.html","9714913adf14bba52eb80b44aacaa0c8"],["/blogtags/LaTeX/index.html","5366b252d43d5e29a9ee6facf6ad6e82"],["/blogtags/LibraryLink/index.html","410a3d646c5583732180a6b3102e733e"],["/blogtags/MSBuild/index.html","94e9932f75b0256a5889ce3bad8b5993"],["/blogtags/NET/index.html","b3016d20211bdf2d5d3c6077b20cf988"],["/blogtags/PMAC/index.html","bfaaacc10933d0c6e7d217533e4735ac"],["/blogtags/Qt/index.html","a6653f47156c2431898b6c5db9262b0c"],["/blogtags/Rust/index.html","6f323f9e2c837385e4e92d7b16b75201"],["/blogtags/Undocumented/index.html","84dc5ca5e6002350e91e22930654d0fe"],["/blogtags/Visual-Studio/index.html","637cc84a0aae27efbdc4ae045e3e4602"],["/blogtags/Web/index.html","b985bd65726a3f24ebc185dcd9297422"],["/blogtags/Wiki/index.html","41e3629ed8c50fd5492dff0eec15ee03"],["/blogtags/Wolfram/index.html","c602b125550940976e630a8bde5d86df"],["/blogtags/Wolfram/page/2/index.html","5d288a2e5019e254df6267c44f82b073"],["/blogtags/Wolfram/page/3/index.html","33960754fee0681b717cdd40d05f2f0c"],["/blogtags/index.html","4cea2db276694287bad675acf356f42d"],["/blogtags/作文/index.html","e3cf1dbd9228690904900e1d34594a84"],["/blogtags/作文/page/2/index.html","85e44189754f9d26f31d6e3cd7576171"],["/blogtags/傅里叶变换/index.html","7dc993821d4886a0944d291aa61c18ad"],["/blogtags/元编程/index.html","33225e03408a163789b97e7eddd7fab3"],["/blogtags/功能模拟/index.html","08f782dab719482dd887f0e574164373"],["/blogtags/参考/index.html","1c295762799eadba814be333489b1750"],["/blogtags/哲学/index.html","5a085d70cdce21b2375d223676661b6f"],["/blogtags/图像加密/index.html","5bd1412e59d4a93333a73001bce48be9"],["/blogtags/图像处理/index.html","8970628597c39cebf1df70cabd8ed14d"],["/blogtags/小说/index.html","d3bc76d4864e219cb330de6e304cb69c"],["/blogtags/年终总结/index.html","ec02c6508b6aa01870bd239d545ba316"],["/blogtags/微积分/index.html","d365aa8c18226ea61329d17f81e9474b"],["/blogtags/拖放/index.html","71f56df3d7a9a5c25e32404450808e0e"],["/blogtags/持续集成/index.html","357e2d0d8505a2eaf1e1cc767f62fd6e"],["/blogtags/散记/index.html","2695405fa759dec2f747b55c8ca2a474"],["/blogtags/数列/index.html","e568505435d1d5524258bac9b2c31e30"],["/blogtags/数学/index.html","939e9b9890c52d3f6690a41249b9e248"],["/blogtags/文件格式/index.html","129191893cb3d1f0172d47ecc8a56a60"],["/blogtags/文学编程/index.html","336c60ac078963b7dac3bf30c3fc9f04"],["/blogtags/文言文/index.html","2b7191bf9c977e8770cec1294e84fba9"],["/blogtags/杂谈/index.html","70c09930f2dd85c1f4454a47bdf62c83"],["/blogtags/概率论/index.html","d6fba4a0b152075bf00714d69c85202f"],["/blogtags/混沌/index.html","95936073753b2c308230b1ff423fccdc"],["/blogtags/科学哲学/index.html","8a387f4724408935a6e21f5968bde6d4"],["/blogtags/科幻/index.html","1d77f833148c954d578fa8ebf876faa2"],["/blogtags/科普/index.html","80c9b7f094a8952e3a5ed1315953ad92"],["/blogtags/程序设计/index.html","4daffa56726d2abd0b833cd5e6a8d31c"],["/blogtags/笔记/index.html","99fff4151b7790acaa08ea60475f8e2b"],["/blogtags/符号计算/index.html","4c6af70275087b8d33ccbae61055fd9b"],["/blogtags/算法/index.html","5e4ec040b27cf37a49ef89587b30217d"],["/blogtags/红警/index.html","44f93f0c903627ca31a9340dc238672e"],["/blogtags/编程/index.html","5ad7ce3b87a727673117b624162ea261"],["/blogtags/编程/page/2/index.html","f934246fd5ea5e8a171e92a205833dac"],["/blogtags/编程/page/3/index.html","452f64ccf618bdd8677117f64b64044d"],["/blogtags/翻译/index.html","7033f9c260c3003b5c1b7cda7c77deca"],["/blogtags/语法/index.html","f352501ca1b102cb3167c5233cdea3fe"],["/blogtags/踩坑/index.html","3bd5b01091fb785219dea46feea6545c"],["/blogtags/逻辑/index.html","c08cd73cc2f24079cfb52a0b7d504fd0"],["/blogtags/题解/index.html","e15cb10439e1ff928cc5797911732c85"],["/blogtags/马克思主义/index.html","8134e098b01239e1c1e097c6623598e3"]];
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







