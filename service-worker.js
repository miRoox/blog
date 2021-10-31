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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","ce996c62d106177900202701b99260b4"],["/blog2013/07/EdisonIn21Century/index.html","8f85a8b9b2a1cca959afc8f90a3066a8"],["/blog2013/07/FenDou/index.html","22059f8e2b944f14ca57d80075c639b8"],["/blog2013/07/Qie/index.html","072f772a9ec9119b66c32a9bf792a69a"],["/blog2013/07/RhapsodyOfSand/index.html","2a0340eb7b700cd01a993985168541f3"],["/blog2014/03/KTimesSum/index.html","fd9e78c5c8615e00483e0bd57d0e3069"],["/blog2014/04/PiPaXin/index.html","2684eb737b420cc1751fe4e3466577d7"],["/blog2014/12/Miniascape/index.html","6aa5f7314785c3a84c2d4bcc3d2f4bca"],["/blog2015/02/ShiBiao/index.html","67443b51797635c3509bad6d8e0e4f92"],["/blog2015/02/Wei/index.html","fc7eab501fdf8cc9ba59c0abeca213f3"],["/blog2015/03/Stain/index.html","7bbc85375f8153dfc03cd50c23b2b5be"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","73b10b0440f6d4b1dc406f67dfff4e75"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","4deb4da8713808e9c9b096b1f00e225b"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","f30c09622f94f4a6c36d9a0946cf42a5"],["/blog2015/06/BellPolynomial/index.html","b4859245ad5ba5e92cf2e77a014a1dc4"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","3bf2f12566b49f6a3f4e4a49c171bea0"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","a7918b619e6f4623cbd7f799eef737f2"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","686bf91caf29659b326d7ed8802be615"],["/blog2015/10/Tiberium/index.html","6781dc2b25c1bfb44b124d71d163aecc"],["/blog2015/12/ChengTianQuan-01/index.html","1a6fc43d6e8ff75e5facd27b2fe7f997"],["/blog2015/12/PKTFile/index.html","d3575320938b095e05f3a0961284b917"],["/blog2016/02/ChengTianQuan-02/index.html","ebbdea1adb8b6c4f3cc07f766d854fc7"],["/blog2016/04/LogicAndExperience/index.html","0c8819b81220f9859a0c7877b826738b"],["/blog2016/12/CSFFileFormat/index.html","0f1109c173c0ffa9fcc49287ae0aec15"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","b569bed00352991b4b70c430e3c28a48"],["/blog2016/12/ProveCRTWithConvolution/index.html","19aaa15ab8d878548f62e344c81a8d0b"],["/blog2017/03/MIXFormat/index.html","608795c0106a9b96fc72cff070877d7f"],["/blog2017/04/WesternPhilosopher/index.html","93f02b007dcc87082b1d604c11ee4338"],["/blog2017/05/TheAlgebraOfADT-I/index.html","5e9b46985cb5952e6cc643f734530870"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","15ef3cae3de596a20a24fd9fe5c80f17"],["/blog2017/07/TheAlgebraOfADT-II/index.html","f47c0cc62418ae0d2c82adcded10b9a7"],["/blog2017/08/DnDTabWithQt/index.html","42570db8cf1753ae5903533d342eee50"],["/blog2017/09/ClassBasedOOPWithMma/index.html","d35c08bb9ac4e54a05fa9ba60b072cb0"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","f8bd6474a54b02f0caec29c79517455b"],["/blog2017/11/TrapInCCpp-1/index.html","900aa4a7234bf1d2c402a53410b229ab"],["/blog2018/04/DebateOfScienceInAncientChina/index.html","0e5ea2acefd1fbebe47b4193fec7204e"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","d9b0f098d8476a0b475f86e2e4348c9b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","c3164f833096d52d67d850ab9aa9a048"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","1dcb6febb4e8362521ac226f6a905ee4"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","29552ed64a4f4b21809f5acb8db0e413"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","a2298de200e78824c0d71ebafafeda19"],["/blog2018/10/PrintDefinitions/index.html","16c1d11d92636c08e46c9f21303869ea"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","02d8b710e6493862d9f7c06bffdd00fd"],["/blog2018/12/WolframOnlineDemo/index.html","42f0732f26144486aecacb5ad54cebf9"],["/blog2019/01/PointerInWolfram/index.html","c57eed6740aa5a5643bc7c2f3ae166c2"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","793ce0838b192539b9ec8f775513db07"],["/blog2019/01/SymbolSandbox/index.html","23f292edfd731c3318510a43fd3b808d"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","11786975041c65177c5777ea4589195b"],["/blog2019/04/MmaAutoLiterature/index.html","0f13fc5ddd6702eccb422216c0c4b111"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","b853817d30d5f289bde6c1ef241b2296"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","029f363cb6bc893dfc9deab1b1b03650"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","6f379a4e83111482e023ade2931b44c0"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","655c30d7e9505c9eb9ce6ffe107d2f69"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","6dcc155dac74e5b1c9aa4d1738a61cc6"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","f6345057954cf7931e34afaf48f22476"],["/blog2019/10/SubmitFunctionToWFR/index.html","d4abc06e33aa8046d564517f35131a04"],["/blog2019/11/TerminologyAndPopularScience/index.html","81117641c433e82f5078ca22f8bcd580"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","3f351b0fa66d61fe36ae1a36c25e8b2f"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","1212fd7f46ad0bb3b5a169618c6bf57e"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","5c894fd372df34e05ff65e574639bfd4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","62072fe2c3f768bae7d34bb3ab85a50d"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","641093a2f63f43f7d344c08e25bc737c"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","f1aa921aa126b6335b004af300a5d0d8"],["/blog2020/11/JuliaPkgGuide/index.html","30a9b416630389e47135a09c1e0d7f1d"],["/blog2020/12/Summary2020/index.html","004b375fc4922b4adbd01b70cf28a914"],["/blog2021/01/MSBuild-LaTeXDoc/index.html","9deccfeb5714fc6146381b6f6c6b5a45"],["/blog2021/05/Initonly-Setter-CSharp/index.html","8619a3a1f2c9f45e650d5c9ba1d84da7"],["/blog2021/10/Julia-unevaltypeof/index.html","ed3fd0de11c2760cdf73be2991e39a8f"],["/blog404.html","486bd5587f54f1f8e1e69cd234315975"],["/blogabout/index.html","da8a8f248b6b2477dd4148ed23c421f4"],["/blogarchives/2011/07/index.html","b18685f61aa4be2afc2ecd6c25af4258"],["/blogarchives/2011/index.html","ae05a9ed25a098b24227ac9806c69a12"],["/blogarchives/2013/07/index.html","77dc634bcf8f82436627e2e0a001e432"],["/blogarchives/2013/index.html","974f3d45e12cae48c82cf78414ca6e1a"],["/blogarchives/2014/03/index.html","b6df3b3184229c98cd262a7ef8807339"],["/blogarchives/2014/04/index.html","d95df5f681ac41458820e03bbebda11d"],["/blogarchives/2014/12/index.html","a483c5973a33c2b6257785ee6b42a926"],["/blogarchives/2014/index.html","56247b61a64299387348b46aa5e6cf3b"],["/blogarchives/2015/02/index.html","a25e20b485eba0e99315727f05f924c5"],["/blogarchives/2015/03/index.html","42aa61098dda76a616f3fe60dc19abbc"],["/blogarchives/2015/04/index.html","a22bd86dc23bee5955a128f1a4ca84da"],["/blogarchives/2015/05/index.html","a585b994074b97eff8d7834d7a51fbda"],["/blogarchives/2015/06/index.html","77211fb15db557623830b6f9f5518876"],["/blogarchives/2015/07/index.html","a098e7bc19dd19000bcf3ff8161ea6f4"],["/blogarchives/2015/09/index.html","453f68e45d7189d3172b15f8b40c3833"],["/blogarchives/2015/10/index.html","7d931a0f8e4791cbe150a561d7fa2f1e"],["/blogarchives/2015/12/index.html","20405128a5078bf2de6ec1256d4bf3b6"],["/blogarchives/2015/index.html","25a4a0be6ec58dec9ca95e3067359d3e"],["/blogarchives/2015/page/2/index.html","df3175e52c7adc8aa45f89c5104447eb"],["/blogarchives/2016/02/index.html","3feec81bc1378edd3023413bc141b9a4"],["/blogarchives/2016/04/index.html","5dfd83bd0701fc182ee41e796ff57b3f"],["/blogarchives/2016/12/index.html","f02ef46284374839fbfc4c3f72d960c3"],["/blogarchives/2016/index.html","b2a00f865d23e9c514d4c4389620bad7"],["/blogarchives/2017/03/index.html","14b6bbd6fa9892d6490efd5c7592908c"],["/blogarchives/2017/04/index.html","62e83c40ae713dccd76f1ac1fea7efec"],["/blogarchives/2017/05/index.html","97f2963197ec358d8d6d13f11d48ce82"],["/blogarchives/2017/06/index.html","0d8fa84b0b14676b6ff1690774c67f6d"],["/blogarchives/2017/07/index.html","5ace3ae0633b2541bcb2eab7b79ab00f"],["/blogarchives/2017/08/index.html","c8f1699752eb50b04a46a75c629e39fe"],["/blogarchives/2017/09/index.html","00fad00e3ecd511e20b21909f56a53bd"],["/blogarchives/2017/10/index.html","8fd44e2a525d390c7d9ffeebbf4e129e"],["/blogarchives/2017/11/index.html","f7ebcdc1e1a3f1babe6066298fb4e41e"],["/blogarchives/2017/index.html","b6e6db83a757fc4ce5c60780fdec8e3f"],["/blogarchives/2018/04/index.html","5f937be40718933ac8d69ca26dae2a2b"],["/blogarchives/2018/05/index.html","3c1de4dfc213bd4d995ce12c0c74848d"],["/blogarchives/2018/06/index.html","d04c711712d1f775a17ef72e955476f9"],["/blogarchives/2018/08/index.html","6e61114835ce17c860d5d2cf8f1507b4"],["/blogarchives/2018/10/index.html","1064e68f85d02eae4637daf40609ef1c"],["/blogarchives/2018/11/index.html","386e7b2a1529c0b2998014c1e1a33737"],["/blogarchives/2018/12/index.html","489e79edfc6f3a6c077fee237f750279"],["/blogarchives/2018/index.html","46d0a2d327a8a8eee1d9044161807eb9"],["/blogarchives/2019/01/index.html","73d46b452fd60e79d675c320e75c4a32"],["/blogarchives/2019/02/index.html","0430e8fdf6fe14b2aab1364bd4783533"],["/blogarchives/2019/04/index.html","bc133e4b750077180fe773f92035d18b"],["/blogarchives/2019/05/index.html","eb24562b6e3b3d8e2f99f48cc48c4d49"],["/blogarchives/2019/07/index.html","841e571795fde95604678a1f9d7d4eb3"],["/blogarchives/2019/09/index.html","14f057454fc4b1779405cfeeefe6ebbc"],["/blogarchives/2019/10/index.html","db5a828a45b03464b2b87666f6ec2535"],["/blogarchives/2019/11/index.html","f6737ee095080dd5bc8997fbf68fac46"],["/blogarchives/2019/12/index.html","34b8ad54fd5043439aeb625de835b657"],["/blogarchives/2019/index.html","273cc3954095dd89cfdb86d7c02f69db"],["/blogarchives/2019/page/2/index.html","4a5ddf1bee0f6917462b1f9f2b17415b"],["/blogarchives/2020/01/index.html","bb135a72041cc88aeeb1f6c760d1ec02"],["/blogarchives/2020/07/index.html","3dcff4cc540c450f493951916eb61d0b"],["/blogarchives/2020/08/index.html","ef425777607545893b70a5e5045200a5"],["/blogarchives/2020/10/index.html","07eba606d66c13adcb3555bd1510ef8c"],["/blogarchives/2020/11/index.html","75bcc9208bfa26d425937c2a53a666e0"],["/blogarchives/2020/12/index.html","5525479fc65100b24940670fbf5502ff"],["/blogarchives/2020/index.html","bfda17c7552cc2a0a39a91d5238af1f9"],["/blogarchives/2021/01/index.html","4ce0252652ed5ed03482552fe2a6452f"],["/blogarchives/2021/05/index.html","39863dac3c976908191be35eb8fbe1e8"],["/blogarchives/2021/10/index.html","dd2093fef47e830947669380239bd06d"],["/blogarchives/2021/index.html","ca8f3def70327e9cab3e87ee4f178556"],["/blogarchives/index.html","b82c495bc010b1c841e855bde3fd2458"],["/blogarchives/page/2/index.html","b82c495bc010b1c841e855bde3fd2458"],["/blogarchives/page/3/index.html","b82c495bc010b1c841e855bde3fd2458"],["/blogarchives/page/4/index.html","b82c495bc010b1c841e855bde3fd2458"],["/blogarchives/page/5/index.html","b82c495bc010b1c841e855bde3fd2458"],["/blogarchives/page/6/index.html","b82c495bc010b1c841e855bde3fd2458"],["/blogarchives/page/7/index.html","b82c495bc010b1c841e855bde3fd2458"],["/blogcategories/index.html","70b12848e1295aa3ec9dca68c9fa049a"],["/blogcategories/代码编程/index.html","4ed4e2c28625afa34dc96c27043c7f2d"],["/blogcategories/代码编程/page/2/index.html","abf2e5cad37373f183448a5ab2be1602"],["/blogcategories/代码编程/page/3/index.html","f239097d1e573086f8090de6a4887034"],["/blogcategories/代码编程/page/4/index.html","f61d60c8e288b1d654da618b826d4194"],["/blogcategories/小说文艺/index.html","f295a4438d35b80bcc8e21455995215f"],["/blogcategories/小说文艺/page/2/index.html","294c2b42e1070d3013dc16c2a51db577"],["/blogcategories/数理科学/index.html","65bbfc901e6308c8cff5774c16edc876"],["/blogcategories/杂谈散记/index.html","a7fa9e8cdba7100847d3231d6b56543d"],["/blogcategories/翻译作品/index.html","7f3e30e4aba237fa3a77d8d5759689a9"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","27b566e65a9b1586b42aaf1c68d415aa"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","faf092b56054e4b6a679eafae394884f"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","34345d4474fb880f836d4b3fe4fe9814"],["/blogpage/3/index.html","9b0ddec251127e2cdeaaf28a8d5157fd"],["/blogpage/4/index.html","661ffdbbb80ebbd8bfee0d965ed109e8"],["/blogpage/5/index.html","8e1ba1bae0103df348d16059be4d784a"],["/blogpage/6/index.html","10de3b1844c17c38e938cde9d7003b77"],["/blogpage/7/index.html","c45f28f1cb46c73de7f18d1d2532e1f3"],["/blogtags/C/index.html","d260a88594f1aa61f0ad072e926fa0ce"],["/blogtags/Cloud/index.html","a27262463374f138087921e23ecdba95"],["/blogtags/C语言/index.html","6c608bd0a58d485c70efc40c71584134"],["/blogtags/FlyCapture2/index.html","ad93ea5924730f56a44a1acc43f16287"],["/blogtags/Git/index.html","0bd60ba49af69e9801aa1315751a0b6a"],["/blogtags/GitHub/index.html","50532e1ee661411a277b005f3aa3e014"],["/blogtags/Haskell/index.html","8e5df3b577bc1a4f557cff20604897ec"],["/blogtags/Julia/index.html","92865e68960d4fda2fb81ca5be1fed6a"],["/blogtags/LaTeX/index.html","1860f4e31b6c8c64e498a101343c1ee8"],["/blogtags/LibraryLink/index.html","a69c0ad7f3db0c134573a970e5195852"],["/blogtags/MSBuild/index.html","ed327f32d7a936ad20d116bbe0222956"],["/blogtags/NET/index.html","7ea7f8efd30478f56a66c3ff287cf75a"],["/blogtags/PMAC/index.html","31d843c62a635a37708753d457b18a0a"],["/blogtags/Qt/index.html","6251a9e5fafa32d3517a942b69405b53"],["/blogtags/Rust/index.html","ead2ffcfd8d4c09e608ce317db888646"],["/blogtags/Undocumented/index.html","5d69a981b796eb76c05bf5d182a38c79"],["/blogtags/Visual-Studio/index.html","876c962acdb153f0c9f58afd511c0d7c"],["/blogtags/Web/index.html","5b173d9b801c5ad072fed1c8bcb2c323"],["/blogtags/Wiki/index.html","7b591797a7383a243138c864475b1b75"],["/blogtags/Wolfram/index.html","bc956e70a4eab3e5dd897e072810b255"],["/blogtags/Wolfram/page/2/index.html","b5335cc852dda99949cdef3902c55c60"],["/blogtags/Wolfram/page/3/index.html","eebaa1c48425644679c1d1c370a2860c"],["/blogtags/index.html","491b38088862d816fcf6fa4df729380b"],["/blogtags/作文/index.html","74a435a8143e7e7152d83c2a5cdc6c9f"],["/blogtags/作文/page/2/index.html","bad748fe7658a290c43c4f3a31630d9d"],["/blogtags/傅里叶变换/index.html","e06e3637f28a0eaa8a08403566d057f2"],["/blogtags/元编程/index.html","14053d3d71c73a23aa64547dda0d9cf1"],["/blogtags/功能模拟/index.html","4a2c192bef17d4d42e29b94fab41391f"],["/blogtags/参考/index.html","ebd0e9b5979131f2e226b5684a408de1"],["/blogtags/哲学/index.html","8daec1735a6a8f6ee7e2a21131f2eaf9"],["/blogtags/图像加密/index.html","7c02ad9d89d567bcca2a804aae419da9"],["/blogtags/图像处理/index.html","acdeb515fe9b25d1c92e4e79f8bf32ac"],["/blogtags/小说/index.html","4aaad788f751b686401070e7aa2241ff"],["/blogtags/年终总结/index.html","c9531b4b622f9fd24799a52d18dd300f"],["/blogtags/微积分/index.html","d7514ab83ecb7361b69c6d736200c7dc"],["/blogtags/拖放/index.html","b73796ea488cd8f2632899bb6a95a04a"],["/blogtags/持续集成/index.html","88f29589202f479865058991dfc6ed0f"],["/blogtags/散记/index.html","0faf7cece174a7505458ea278ef5f3b1"],["/blogtags/数列/index.html","c039051c70a9bdc1ee5b101f32151b2f"],["/blogtags/数学/index.html","12b3945619638dfde890d4278760ac22"],["/blogtags/文件格式/index.html","384d74d061f4544d5b91fd8597397eee"],["/blogtags/文学编程/index.html","23f1be2c204cd796738fb34df12b2f40"],["/blogtags/文言文/index.html","fef56d855f7f17c37ec6d32b9be15e8b"],["/blogtags/杂谈/index.html","f3155cb4ad9c10cc4481c0b211b9d155"],["/blogtags/概率论/index.html","6baab03a0200f9864b4a02784bd3ec01"],["/blogtags/混沌/index.html","eeff209dfd47d564cd53fd89461d0ebe"],["/blogtags/科学哲学/index.html","6e21e98ff38191ae49147d35b22810bd"],["/blogtags/科幻/index.html","24c53a89bcb9fc2a1dad2236bbcc90f9"],["/blogtags/科普/index.html","903b95251f608bf6803ea328344608c3"],["/blogtags/程序设计/index.html","da868aa26a252aff16fa27a2f5f2af59"],["/blogtags/笔记/index.html","c07d1c669f25ab7e831b55899dee3a4b"],["/blogtags/符号计算/index.html","3f6f5cd6cf891cf637da4fd4049472ff"],["/blogtags/算法/index.html","bc9191f8cc3ef3471a03c0f959bb9031"],["/blogtags/红警/index.html","4205ff34ebc737b6d0facee64c5f2bf7"],["/blogtags/编程/index.html","c89639a1ddbb37035b4a498d42a1eedb"],["/blogtags/编程/page/2/index.html","a692ad833170aa06ad5281dac8962191"],["/blogtags/编程/page/3/index.html","80aa3b5fa8fdf685a2d79ac08f93d1b0"],["/blogtags/翻译/index.html","39be90ecd6ed068bf97c63afc773713f"],["/blogtags/语法/index.html","500171773da2a7f97d7a4b6d236c852b"],["/blogtags/踩坑/index.html","e691de22928b966e23539d1ebc5a81c5"],["/blogtags/逻辑/index.html","5ec4288a554c5110280e6d32da8f9343"],["/blogtags/题解/index.html","7138efb3779f75a493b7b9bca10f10f9"],["/blogtags/马克思主义/index.html","c7112cea6d757180299cafbcefa0412c"]];
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







