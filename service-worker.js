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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","0ffdb802d527aaef1fdd8a5218c29d06"],["/blog2013/07/EdisonIn21Century/index.html","5ad120eb774e43e7af154a36484a45ea"],["/blog2013/07/FenDou/index.html","2c6381b34275a8f93cde093441b1dbad"],["/blog2013/07/Qie/index.html","06c8ef90d167f1d293e09fbaa60071ce"],["/blog2013/07/RhapsodyOfSand/index.html","64ec25fdf4ef40e58a4155de94fad68c"],["/blog2014/03/KTimesSum/index.html","8dcd5d882e5fb3a6d258a81898674437"],["/blog2014/04/PiPaXin/index.html","ac9c6f8e05b79c2b3eb350673a348767"],["/blog2014/12/Miniascape/index.html","7a6a610da284772f3128f09983458fbf"],["/blog2015/02/ShiBiao/index.html","85631419e45716f93e4e316a2174c92f"],["/blog2015/02/Wei/index.html","b612d29ca3bf46f09f7852ddf86b30d3"],["/blog2015/03/Stain/index.html","7893870e2b37a5fab585c05b260ee2c5"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","e61ad7521efbdc4c0d38020be5350980"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","6918ef1669fd9e2bdcb6f81f5e658f6d"],["/blog2015/06/BellNumber/BellB.svg","3641e9655f2c24a0869d0111c3651aa9"],["/blog2015/06/BellNumber/index.html","3df86d4d8732e3614708bf9d8380635b"],["/blog2015/06/BellPolynomial/index.html","a20fe7e9d89813e40d4ffd6bb3409bd2"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","58009fac32c6842301fef2fd8717d158"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","70e0ab2068254c738e0195b05669ac41"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","fd1057b139d286545d422b9d285188b3"],["/blog2015/10/Tiberium/index.html","64dc4a9530d19cdb6db74bb1db384ad6"],["/blog2015/12/ChengTianQuan-01/index.html","86ba12eebdcef899f0cec089a2432640"],["/blog2015/12/PKTFile/index.html","9b8477281fa2644a87974c40d2c6dc9e"],["/blog2016/02/ChengTianQuan-02/index.html","d9e02391fad7b34c490f659571673418"],["/blog2016/04/LogicAndExperience/index.html","75b775002bc3bc811029c6a6628100d0"],["/blog2016/12/CSFFileFormat/index.html","10ef9791866460688253e11798ec2603"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","4dbb775766e69c78b675592fc0afa203"],["/blog2016/12/ProveCRTWithConvolution/index.html","9c3510e9d6a8fed994e853e22e482c85"],["/blog2017/03/MIXFormat/index.html","106bc88d9ea49ea742d8f3e92ba8e018"],["/blog2017/04/WesternPhilosopher/index.html","ebd06967ab62ce9400e16e08df36f8a4"],["/blog2017/05/TheAlgebraOfADT-I/index.html","fdc4f3ef8edb85fa7efca26a2ef30ef6"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","2842a677986bc2ced8c9334550d44658"],["/blog2017/07/TheAlgebraOfADT-II/index.html","91adef2b5f785a043176473781225dea"],["/blog2017/08/DnDTabWithQt/index.html","4fc3ea2347ac1ed6b1b35460f854f0e9"],["/blog2017/09/ClassBasedOOPWithMma/index.html","81c484128b80f47cfd0171c491a5fdae"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","824e05eb5d425cfb486a95570003c8ad"],["/blog2017/11/TrapInCCpp-1/index.html","4327831c3529f4bdfe8538074cc3c5d8"],["/blog2018/04/DebateOfScienceInAncientChina/index.html","fe3ac0fe830a084ddcd8565340e4fed2"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","24c505c3afbd59920512d118b06b3687"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","87879ac92dcd30ad7d89269aab1362a7"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","08d8a224a21c77f5770f43e4213afe1e"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","717ead890b27fc69b45d5b4d5f9ad28e"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","34c3743cf5163518d7c04537ef1fd91f"],["/blog2018/10/PrintDefinitions/index.html","72f6f5eb316ce70e07b5ffca8ac56d23"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","db3960c698ef3d1c36b190c376a9d534"],["/blog2018/12/WolframOnlineDemo/index.html","cfb440f7d6b3082604ca1df2d92c8d58"],["/blog2019/01/PointerInWolfram/index.html","fd1f1dd8a1911ea436398649897b2242"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","0ed38733a6c708d93d43c6bd652a3c42"],["/blog2019/01/SymbolSandbox/index.html","72fabbb83f20ec882f555507ded06eef"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","a491d378c479a686edd8ff607926b070"],["/blog2019/04/MmaAutoLiterature/index.html","3eef0919552e75a2e97e8ea8f7e8e463"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","c9987d53d014021935f6e673c0a545b3"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","b1f7ae10857fb41e394d9258d11f49db"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","7460e011d15dcf774a68b4eceef1f400"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","faa4b164aa2060731800a74e02d9fe25"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","f27f6b066315c7d505f78e016fcb1f18"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","f666201356aa7e4b4e7d54f43341cda3"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","c669914bda443873821a1052f46794a4"],["/blog2019/09/MatrixFormProblem/index.html","37244f08ce5134f830a9111ad399e865"],["/blog2019/09/MatrixFormProblem/problem.svg","d2d611c92f686a320a01de8f2bb1b6ca"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","0601c4d1b259d0ab117f15e1a486da95"],["/blog2019/09/MatrixFormProblem/solution.svg","4816eddd5060d6a8f9c6f3d62b67ffb9"],["/blog2019/10/PersonalWiki/index.html","a1cf22d8d3fe9d0f312bca2888877f32"],["/blog2019/10/SubmitFunctionToWFR/index.html","f580b7c1056756565f4c2c4b308a8c17"],["/blog2019/11/TerminologyAndPopularScience/index.html","f857619f25f24c4ced178876611706ae"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","40a2e0e91dbb3da39c215d6abaa35317"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","4286768f5f6a400a96462cc4470bf27f"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","15b4f75e4833af0121f920c1790877a7"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","e46950685498528be11fb3272b9908c1"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","f5dc81c7419e8903fbddc6d3a68990f0"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","c8838375804119bc018446b5f0a19a8e"],["/blog2020/11/JuliaPkgGuide/index.html","961e78e1214ef56c2fb2c8f86a2c673f"],["/blog2020/12/Summary2020/index.html","becaaecabbd5547b5d44b1ca6779f5d0"],["/blog2021/01/MSBuild-LaTeXDoc/index.html","b1aed16bd405b8087b066a33dddd771d"],["/blog2021/05/Initonly-Setter-CSharp/index.html","ef62e89ff91d6036a99a8fbe8d3cf3f5"],["/blog2021/10/Julia-unevaltypeof/index.html","6aa7a403398542a78b78114e4535255e"],["/blog2022/01/Summary2021/index.html","2fb31dd67db64d53b145b0b74298bdf2"],["/blog404.html","9f179d99e006e05efbf286bed15fe512"],["/blogabout/index.html","94f3fdae3a3f143535d5d799d53b9cb5"],["/blogarchives/2011/07/index.html","89a6151ee116291d3080c0c8bb001cad"],["/blogarchives/2011/index.html","40a4929240e5042b6ef1552b8ab58723"],["/blogarchives/2013/07/index.html","4661cb634a9bcff26672caab7771e4d5"],["/blogarchives/2013/index.html","83db2eaca21cf956325ac0828b2be9c3"],["/blogarchives/2014/03/index.html","f92074aa2f56868a104a36cef5b1cb48"],["/blogarchives/2014/04/index.html","ae66e98f5cea75f5a7f87b0328f2c38e"],["/blogarchives/2014/12/index.html","b5837fce3d4cf2cef7fdede5371da573"],["/blogarchives/2014/index.html","8eca8dc6ca448436c2774badf67752d5"],["/blogarchives/2015/02/index.html","15fffa7e57b7965dd4e370ad09203593"],["/blogarchives/2015/03/index.html","e21047f0381440261182ecb6e6d71bad"],["/blogarchives/2015/04/index.html","1f20f210e9f8fe333f65ba89b402f329"],["/blogarchives/2015/05/index.html","e4e4f97f7697241ebfa9f63686dfddb6"],["/blogarchives/2015/06/index.html","3b35603cd9b22f252707c13aeb7f308b"],["/blogarchives/2015/07/index.html","5c5a6e3f4b5b26e7c2045aded609b42c"],["/blogarchives/2015/09/index.html","f8eefae13f912903e37180e62c8282e9"],["/blogarchives/2015/10/index.html","33f16a2b7da2bfd7cc14e88dfe5abfcb"],["/blogarchives/2015/12/index.html","0c215e5248868138afb5426abc3d3ea6"],["/blogarchives/2015/index.html","cb5cb24134c3aafc19577b872baef7ea"],["/blogarchives/2015/page/2/index.html","87a600444a9888b34ad7c5aeee1e3a1b"],["/blogarchives/2016/02/index.html","031718a6f701b97ecbb71352bdfcd6b8"],["/blogarchives/2016/04/index.html","823aa93dc2a4f0f31e5d305bc5036332"],["/blogarchives/2016/12/index.html","7b82a8bb54c877cd9a64a6983916b1dd"],["/blogarchives/2016/index.html","676bab98326d08deaa5e8246b5fbbdea"],["/blogarchives/2017/03/index.html","daef87ab46bffaa3c358b14812ae2fe4"],["/blogarchives/2017/04/index.html","4eecce17536dc644b0f934ed9aab946f"],["/blogarchives/2017/05/index.html","d6be499d23c597570c883ebb1dbc2f0e"],["/blogarchives/2017/06/index.html","d235c3af432a37a9b3177e70d809f6a7"],["/blogarchives/2017/07/index.html","4e4099dd762cb19af9d70c9f31f843d4"],["/blogarchives/2017/08/index.html","8777189c5264b1891e9aa9361b119eea"],["/blogarchives/2017/09/index.html","8bcda6aedbc2ff818501a416940b53b2"],["/blogarchives/2017/10/index.html","2802210775abf0686c525dd43599af8b"],["/blogarchives/2017/11/index.html","ac6c03b95e6191607b751f36e49469fb"],["/blogarchives/2017/index.html","f46035a491ccf77b3f3e0c60fb19b857"],["/blogarchives/2018/04/index.html","b229199f251ca9b99f2f25fde105d8ed"],["/blogarchives/2018/05/index.html","5d9c4bdde298ce084e2d91b65e15b988"],["/blogarchives/2018/06/index.html","7ac0994d1adfefce963b3855fa4d9245"],["/blogarchives/2018/08/index.html","56d8be05f2bdf7a2c32b6c5553b8bfbf"],["/blogarchives/2018/10/index.html","9ccc508a7a01f342b5e3612d90919a58"],["/blogarchives/2018/11/index.html","ee4c5a67182918b058836029579e1999"],["/blogarchives/2018/12/index.html","d7c0d197c8f012cff800f965082edc34"],["/blogarchives/2018/index.html","975f7211eb47589c876bd01e8d854970"],["/blogarchives/2019/01/index.html","450bfa1571c16616f13fa60b7d95a531"],["/blogarchives/2019/02/index.html","cb9ce755b13fed0ae1fbf3542139c44a"],["/blogarchives/2019/04/index.html","56bd7dc46ceea10b0b4111108738e5f8"],["/blogarchives/2019/05/index.html","37fccd2c35094eef81a12217c8489eaa"],["/blogarchives/2019/07/index.html","8673ed90eca2c14127f6cdb3fb4a957c"],["/blogarchives/2019/09/index.html","60fabea691ec965163cc1a9c07a145c3"],["/blogarchives/2019/10/index.html","2a0b04d2b5ed4f23d78837e76fdb44fc"],["/blogarchives/2019/11/index.html","13cb86960f3aee4826a0f4a787f2db27"],["/blogarchives/2019/12/index.html","05f301712865f652486f4f6792f690b8"],["/blogarchives/2019/index.html","5b8d5d725e65b66fad02c38a537b0a7c"],["/blogarchives/2019/page/2/index.html","9d6786e3e9e0babcc68641b368776d2a"],["/blogarchives/2020/01/index.html","e16dec625d13474af5f8077fd53dbfdc"],["/blogarchives/2020/07/index.html","271b41a010ce042e73f71ef04ea92575"],["/blogarchives/2020/08/index.html","5b8f6b0bd92e6483ec6d982ac5c61e77"],["/blogarchives/2020/10/index.html","643339dd4295b5146feb6a707c6451f0"],["/blogarchives/2020/11/index.html","9b0206e2261bdb6fe76e6be8f955ce44"],["/blogarchives/2020/12/index.html","002492c02489c806737b4f09ce19e106"],["/blogarchives/2020/index.html","b17623e9d5cfb8d18dde2fbb07bc0e86"],["/blogarchives/2021/01/index.html","1ebc2ad95f4589250cadfa31c04dbdb5"],["/blogarchives/2021/05/index.html","e46aec373dacef1aac72e0e2386e2b3a"],["/blogarchives/2021/10/index.html","2cca98a6479b24faddb137900643cc58"],["/blogarchives/2021/index.html","62bd97fd51a7de4f32d8f20502f89974"],["/blogarchives/2022/01/index.html","5d6c5298420d47eedddd6ac4ead67a4b"],["/blogarchives/2022/index.html","a6d0458edcc98d447e0a599d61e96cfc"],["/blogarchives/index.html","b74a4c3ca8dea6491e630bca35e36407"],["/blogarchives/page/2/index.html","b74a4c3ca8dea6491e630bca35e36407"],["/blogarchives/page/3/index.html","b74a4c3ca8dea6491e630bca35e36407"],["/blogarchives/page/4/index.html","b74a4c3ca8dea6491e630bca35e36407"],["/blogarchives/page/5/index.html","b74a4c3ca8dea6491e630bca35e36407"],["/blogarchives/page/6/index.html","b74a4c3ca8dea6491e630bca35e36407"],["/blogarchives/page/7/index.html","b74a4c3ca8dea6491e630bca35e36407"],["/blogcategories/index.html","be93af95b418548663331530c058f13e"],["/blogcategories/代码编程/index.html","39981fe5b2cbb9f148e9a053c7aa59b1"],["/blogcategories/代码编程/page/2/index.html","3ca9bd7a145da112956c2010c9b6a955"],["/blogcategories/代码编程/page/3/index.html","f90c294f8e6933a6eae9976fa7448e6b"],["/blogcategories/代码编程/page/4/index.html","a8497267d2f02f1b8d2b934a2c488a3c"],["/blogcategories/小说文艺/index.html","0cdf8df51dfdf6bf7aa45ef9c6b8580d"],["/blogcategories/小说文艺/page/2/index.html","e2e1bd0695009c00af5ca967d46d6602"],["/blogcategories/数理科学/index.html","ff545651ff92b43bdbbc0dbf4f760185"],["/blogcategories/杂谈散记/index.html","a758c2a72a10e993bdddaeffb4f04b86"],["/blogcategories/翻译作品/index.html","4a6a68a49b22489bb13e7ad9a6b4854f"],["/blogcss/style.css","e4e2cecf7c6dd184323b20cfe789582b"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","e7a856eebb7495062a3d793d09514996"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","f97f555e3864eb711baa2a1ec3296cf3"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","8211f8d0b7a45e7e4cb5241855cee6df"],["/blogpage/3/index.html","7b9ea62e5fe48c6f7e8f45381e602968"],["/blogpage/4/index.html","da968c3d850fde555701a71db97dbda5"],["/blogpage/5/index.html","6ec835f9b59a510b75a8f95539d968a4"],["/blogpage/6/index.html","69d320bbb2cc0a23de008210ea17f4e2"],["/blogpage/7/index.html","473c58ce014b4dd68325df81a3e75090"],["/blogtags/C/index.html","166983ae608a6131daceca8ffc7299a5"],["/blogtags/Cloud/index.html","921686f9c6ec54ae79a0e34448e05f21"],["/blogtags/C语言/index.html","a36da36ccddd5e4fb3414fff366a778c"],["/blogtags/FlyCapture2/index.html","2a96ce4ccaf4c23faeca07305f269fcc"],["/blogtags/Git/index.html","7a83fdb257df569b3e53788eb5782f11"],["/blogtags/GitHub/index.html","c3eecc4541388514d5fe4bf5ef253f0b"],["/blogtags/Haskell/index.html","27800f89bed6fbdfca443eec244b61c0"],["/blogtags/Julia/index.html","28388d074cfb73f3d5022d1b649aef1c"],["/blogtags/LaTeX/index.html","13364b353853183bbb32e8d5c9c22c7a"],["/blogtags/LibraryLink/index.html","36f62b446bcc6cf9e7b91dde3eb80bcd"],["/blogtags/MSBuild/index.html","35a3352072aac78ae7666a774cdce0b5"],["/blogtags/NET/index.html","30d3ff14e3b8eac0a67c54bfd5c579cf"],["/blogtags/PMAC/index.html","98c9e8dcf0da1d0c377662b86b5ff4bd"],["/blogtags/Qt/index.html","3c5dafecb9a7b1ee52bbf59f97051d3d"],["/blogtags/Rust/index.html","aa3feeb9c0e920037d7a53ec273e6d93"],["/blogtags/Undocumented/index.html","47f914dd21f6a611defeb6e033b32732"],["/blogtags/Visual-Studio/index.html","bb900428a4af98d2a1a546530f887dc9"],["/blogtags/Web/index.html","5a1193fcaf3027931ecfa927b6b3975e"],["/blogtags/Wiki/index.html","32edc7d5f29cd82b123c9db9946ea0fe"],["/blogtags/Wolfram/index.html","27b287eaf11edc10262cb68053ac0fa8"],["/blogtags/Wolfram/page/2/index.html","ac0b9de9997993700184799e014b9404"],["/blogtags/Wolfram/page/3/index.html","f00b7b864eec5516850dcf1feecd2139"],["/blogtags/index.html","df8ce2091537f62db519d942f890600b"],["/blogtags/作文/index.html","870a14b301221889f2fc634f607d9dc5"],["/blogtags/作文/page/2/index.html","78e8cefc3f3e9d4601675e779561b91a"],["/blogtags/傅里叶变换/index.html","79a87881781a70ab231fd59844cb2b6a"],["/blogtags/元编程/index.html","0da8ef479ac2b36cb1a8a6754da9052e"],["/blogtags/功能模拟/index.html","207c64c157893895281eac9aacfc0ba9"],["/blogtags/参考/index.html","2c32cfa3481405eb4690e12de89425af"],["/blogtags/哲学/index.html","2a65442393ed4bd47677c15b2e58aa1b"],["/blogtags/图像加密/index.html","6737dd2650f15a5a945880b37ab55753"],["/blogtags/图像处理/index.html","0a90874d4370e3c2405eab26eeb3e733"],["/blogtags/小说/index.html","b0c68524058858057e372593dda1be4d"],["/blogtags/年终总结/index.html","10afb7f585071cd985c1c01b77d79c96"],["/blogtags/微积分/index.html","7656319644dc5942cf375cbdbba63fb9"],["/blogtags/拖放/index.html","1709b0b6aef9113bcb1bdb3930e02703"],["/blogtags/持续集成/index.html","d7a9bfa5aa7e23e54cdce944e88e6cd3"],["/blogtags/散记/index.html","bf23842f3be42f397b91edd8f0125dc1"],["/blogtags/数列/index.html","1bee8c42132687e6c9b2222cc06bc70d"],["/blogtags/数学/index.html","17e0dd79a2e47d914c1342c58713c0d5"],["/blogtags/文件格式/index.html","cc25e142a185a5ad6bc6d9a3d4f0dadb"],["/blogtags/文学编程/index.html","132fac82e36ee903ec7d1e9f0176feb0"],["/blogtags/文言文/index.html","ab9c04b9e1c9a77c2f7c7122ff2d344b"],["/blogtags/杂谈/index.html","6270429433e02974281b96064b5f0100"],["/blogtags/概率论/index.html","2788483144293ec3c330207af7ca0bc4"],["/blogtags/混沌/index.html","5729c343c7f99555cdafb1ec8cddb8a9"],["/blogtags/科学哲学/index.html","5016017b43ca4b950679d122663c7300"],["/blogtags/科幻/index.html","00201cb57e7c9fca549fe561347ea69b"],["/blogtags/科普/index.html","ee5c173cc57b79377cb5210b4cbd37a6"],["/blogtags/程序设计/index.html","06e3d372f59efbeda32efaedd1a13af4"],["/blogtags/笔记/index.html","b1f1ac7115a728a483e58698bdd1c1d2"],["/blogtags/符号计算/index.html","c32aa5e728d3d067d4b7a882d56b42e5"],["/blogtags/算法/index.html","be7270b4d4df8dca7948eee06e0ced46"],["/blogtags/红警/index.html","8a37351f52f656a523d18dec5876da17"],["/blogtags/编程/index.html","8a9512cf75a6c85018c7f4359c9c464a"],["/blogtags/编程/page/2/index.html","b8bb5e9a4009a83e8e19b40db49c02a0"],["/blogtags/编程/page/3/index.html","f6d9a5ac3ac9998fadf3a2ca0ca870d9"],["/blogtags/翻译/index.html","91b9fef0d28fc0704c3ea24188db6dc3"],["/blogtags/语法/index.html","3f38ec39a16988f597ea0db1d6f5eb21"],["/blogtags/踩坑/index.html","539e95a3c435bd680f29f53c692c13fb"],["/blogtags/逻辑/index.html","77d657dbd8a23de6f69945bca09316e6"],["/blogtags/题解/index.html","9eb0e1e0604b8d626f7f39a634464e3d"],["/blogtags/马克思主义/index.html","1bc5e1ce71ef91799f683a39718a1841"]];
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







