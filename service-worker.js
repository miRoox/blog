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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","9cd0b98371a2c07b26459a2469a9dcf5"],["/blog2013/07/EdisonIn21Century/index.html","f1e6053856d5d5a69bad429935dbfb62"],["/blog2013/07/FenDou/index.html","287dd8887a2de6d577f20203004fde6e"],["/blog2013/07/Qie/index.html","c5f31627ce27fa8144bf2722d44d9c99"],["/blog2013/07/RhapsodyOfSand/index.html","6408710a30162e8908bc0c659e6104c7"],["/blog2014/03/KTimesSum/index.html","f4e141b72e3b63d9b3dd792cabfe7ab6"],["/blog2014/04/PiPaXin/index.html","5ccbfad3474ce2b80fe592d89ff8b3f3"],["/blog2014/12/Miniascape/index.html","971f4bd0d047ef45337382125f9e74a7"],["/blog2015/02/ShiBiao/index.html","746fba76676601f50a2ff5748136734b"],["/blog2015/02/Wei/index.html","a8f5a67b8b12c6a481018dae449fde40"],["/blog2015/03/Stain/index.html","89a27a2ab0a9b3aaa1c8547c07656767"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","e8901dc159ff58b39c3f36a32fd04db0"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","a58e7c84da07fef6a6331e2c7f5bb49b"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","326da42705bb1b96cd0991a2c904424e"],["/blog2015/06/BellPolynomial/index.html","741a2e958c82ee2f5b2bd7b966d20e65"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","e369b96c72068d4a84db6c9e5d7e6f7b"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","ab26b6d99aea9b06dc617206f94f7470"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","baf10790e7cfe333affe03c40805ac94"],["/blog2015/10/Tiberium/index.html","b44141430d03cbdcc99a00ea4b5d1c41"],["/blog2015/12/ChengTianQuan-01/index.html","511076d54832c6a2ec776d3d3590ef01"],["/blog2015/12/PKTFile/index.html","4bf8b19a76687f98f79bdd3c0ea747d2"],["/blog2016/02/ChengTianQuan-02/index.html","2b2692d680d7290b50d2518854384b8d"],["/blog2016/04/LogicAndExperience/index.html","f9d176687a9f2e6e144cd9a162c42db4"],["/blog2016/12/CSFFileFormat/index.html","83d12b26bd56fac42cd3e64f1ee7b4ee"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","9eb4756568a1d1f93eed7d74ad33c17f"],["/blog2016/12/ProveCRTWithConvolution/index.html","289c17b2e210851b7a7b67ff92d08cbc"],["/blog2017/03/MIXFormat/index.html","3cfc51d7040d1f4ac7b5426b38c11866"],["/blog2017/04/WesternPhilosopher/index.html","581be928ba23d51a06904f201ec91804"],["/blog2017/05/TheAlgebraOfADT-I/index.html","3cdd43985e63828d5a0d0ea173e5686a"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","928708a8bf568c8dd030f45002ad5df3"],["/blog2017/07/TheAlgebraOfADT-II/index.html","c3e9711a6e53ccf0fa806d8d41605617"],["/blog2017/08/DnDTabWithQt/index.html","c7732d09bd696cd7b0dd153ac84f2159"],["/blog2017/09/ClassBasedOOPWithMma/index.html","4c22ed66415327e8ca7ca11e7ae2e461"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","dd94eb282f1cf278f3e96c5d0af0518c"],["/blog2017/11/TrapInCCpp-1/index.html","0886e02574325da8b934045cbbe0672c"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","3ea4dd79f9aabdf5d39bd5f7b9ff5a72"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","c3a701bd150ddae556a2b7470ba13893"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","bfc15cee9b44e640e6830e14919b8556"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","dbed1013ee29dd02a1ea52b1a16f5513"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","b5985bd9fccd69ba5adc1c1c9e1e807f"],["/blog2018/10/PrintDefinitions/index.html","336b648695e9cb929db46a501c8b2d83"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","86cbfdff542d79a84cb7b3c94739967b"],["/blog2018/12/WolframOnlineDemo/index.html","d9a9de7f6bf6edbfe48996ebe2b1331b"],["/blog2019/01/PointerInWolfram/index.html","d1210b45c453736c63a9a3bebbde8955"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","fd16922bbfb125e756c76c32148334ea"],["/blog2019/01/SymbolSandbox/index.html","f484dd670c13757e4c68a87306109a81"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","417923e08558e883e973467dea6b98c8"],["/blog2019/04/MmaAutoLiterature/index.html","7536814a54c89ed0a169949fc17315ed"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","95d45aec666e68b0897ad35a84107787"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","f3189de43b7806a349720c069335b201"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","8a93a6d28a8e5e43a21be3b811ce331e"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","65f2253cc02d0bdd65b46ec3a6dc165c"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","22a916c6409a987395b50b581194270a"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","935e0550201e5a5ff4db18494b8cd6f1"],["/blog2019/10/SubmitFunctionToWFR/index.html","8aa6f4835b2b5588686ace93de503fd2"],["/blog2019/11/TerminologyAndPopularScience/index.html","6ebea62d35ad954a35f5e037c9920b05"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","9bf9fefb87b24a45e6b073b9388fd070"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","1212fd7f46ad0bb3b5a169618c6bf57e"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","5c894fd372df34e05ff65e574639bfd4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","62072fe2c3f768bae7d34bb3ab85a50d"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","a908b0d22af2b711835f09f7e456c13f"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog2020/10/TrapInSplicerProject/index.html","f1aa921aa126b6335b004af300a5d0d8"],["/blog2020/11/JuliaPkgGuide/index.html","30a9b416630389e47135a09c1e0d7f1d"],["/blog2020/12/Summary2020/index.html","004b375fc4922b4adbd01b70cf28a914"],["/blog2021/01/MSBuild-LaTeXDoc/index.html","d1f80a6bd9f139210c76193522c8a661"],["/blog2021/05/Initonly-Setter-CSharp/index.html","b69bf30d60d0fd4ecb8a21470c1c8d52"],["/blog404.html","486bd5587f54f1f8e1e69cd234315975"],["/blogabout/index.html","da8a8f248b6b2477dd4148ed23c421f4"],["/blogarchives/2011/07/index.html","032f1e5c0b6f97b8fa346514abd9a099"],["/blogarchives/2011/index.html","2cdbbc492820ae9e33ad9ce7c2a1d3c1"],["/blogarchives/2013/07/index.html","343913af3612274f4f8fa9bd129412f4"],["/blogarchives/2013/index.html","611a941f07772017bd5dfcbc52b940b0"],["/blogarchives/2014/03/index.html","c6bb3a486b3c085b324283302335ccdd"],["/blogarchives/2014/04/index.html","719550b14c22a5be79466669a30a447b"],["/blogarchives/2014/12/index.html","b05057fa58dafcf3ad9b7c2023a9e934"],["/blogarchives/2014/index.html","936c97e725dfed21d8cf66265e8cb428"],["/blogarchives/2015/02/index.html","64c80ad202ed61e296cbe508f29b5ca9"],["/blogarchives/2015/03/index.html","b2b1bfd65798b52f002a583744263832"],["/blogarchives/2015/04/index.html","a92c2d40afa92c09b2e6b09fd41a7321"],["/blogarchives/2015/05/index.html","a492e6f2948308b3acc99d1d85cafc38"],["/blogarchives/2015/06/index.html","bc73f2703ac89f8eb54aca871c9eac36"],["/blogarchives/2015/07/index.html","7f7b9f609fc5b028ab074b4e2c48bb58"],["/blogarchives/2015/09/index.html","8877f3311b73d6572893a2d8920044dd"],["/blogarchives/2015/10/index.html","c4f14e0c53a01c2a4e56555305a01ff7"],["/blogarchives/2015/12/index.html","31833567e802840652e7328ad91bd0cc"],["/blogarchives/2015/index.html","3905853b65ddf20bce48c7ad7f1c6762"],["/blogarchives/2015/page/2/index.html","5f9e6d6fdde6ab4039560deaf33ded5f"],["/blogarchives/2016/02/index.html","b9893dbd67538e4310fb0ad6595e1af7"],["/blogarchives/2016/04/index.html","b479b2bc4078d549e9b6c0aa141573e3"],["/blogarchives/2016/12/index.html","3509acf3410b03ea93bc748b6e6bde1a"],["/blogarchives/2016/index.html","1b26d967509385aa0cf936c8c8ededb8"],["/blogarchives/2017/03/index.html","73eab872741d6899e7dbf61a95c277ef"],["/blogarchives/2017/04/index.html","3fb3f088a8307668483dbe63e7fc33d5"],["/blogarchives/2017/05/index.html","6eb3bc56488ab0cf5da085b85b35aaed"],["/blogarchives/2017/06/index.html","e4c6b20444e912fbf300da497bf3a718"],["/blogarchives/2017/07/index.html","f437983f760bde97bf12abd4da177278"],["/blogarchives/2017/08/index.html","895c8e1e5b91b7bafdbbab1d36100c21"],["/blogarchives/2017/09/index.html","20713bd6ddfe40f15499f2ae11f5de81"],["/blogarchives/2017/10/index.html","7e5aa6a5441874f1c07a873ea9c2520c"],["/blogarchives/2017/11/index.html","15dc4cb9553cda5e0e75a1842e131db2"],["/blogarchives/2017/index.html","1ee6c17cca63dd25554a557b64d7b87f"],["/blogarchives/2018/05/index.html","20733e84b4ba3234ef14b50a707270de"],["/blogarchives/2018/06/index.html","d38aa7ce4aacda9a5bbfbe62448ff369"],["/blogarchives/2018/08/index.html","2f507b80288cf57aa7a18e2cf37838d9"],["/blogarchives/2018/10/index.html","b8534c3dc3e25b515a95084904923b2b"],["/blogarchives/2018/11/index.html","bc2ae4bdb0a8baa8016cc8f6eadf01e2"],["/blogarchives/2018/12/index.html","ef5d4d10083e3510cbe22511f22ac96d"],["/blogarchives/2018/index.html","18d01ad92a3a5db33c7537e6b2d01e36"],["/blogarchives/2019/01/index.html","9b9d6c23c24895b397274b4d3cc12166"],["/blogarchives/2019/02/index.html","b00fa271895a5631e662e10f685fb044"],["/blogarchives/2019/04/index.html","a2c823c52077efa23c7f490bbea18497"],["/blogarchives/2019/05/index.html","cb75fc57af74d51fc9692c054394cc36"],["/blogarchives/2019/07/index.html","bb54f41a1dc34c1e963568ced192381a"],["/blogarchives/2019/09/index.html","66cd08a6cf10d8b82689c3c2c836ed2e"],["/blogarchives/2019/10/index.html","4a29fbfd5b5d951c8190a38c97608e41"],["/blogarchives/2019/11/index.html","55549fff491da0edbcf5f8519ad7b541"],["/blogarchives/2019/12/index.html","66b3f134b4d9960dd4848d7d499dd0b5"],["/blogarchives/2019/index.html","76f322ca08cd25913757fdb84485f73a"],["/blogarchives/2019/page/2/index.html","ac24edf5bd576386cac3bcc4f98c317c"],["/blogarchives/2020/01/index.html","37850184a0edfd2541d74065fc2159bf"],["/blogarchives/2020/07/index.html","e6edf056e8ee9be999dc25b651e279eb"],["/blogarchives/2020/08/index.html","c4288d359bb37b93b61a515ba27a8595"],["/blogarchives/2020/10/index.html","f178517008e05e1ec2b9fc7eb23dd7bd"],["/blogarchives/2020/11/index.html","43a6d36381226ccc420bd151fcd56ae9"],["/blogarchives/2020/12/index.html","bfdf9f7a4f3890d04c6fed2c35ace0a5"],["/blogarchives/2020/index.html","ec7f12a791e7713c0fc751f7bb51fffa"],["/blogarchives/2021/01/index.html","5244851c6a31021d656e42ec213ce538"],["/blogarchives/2021/05/index.html","4085331d5aa23b6e69443b7433446de7"],["/blogarchives/2021/index.html","799ccea4c3eb1918512af0086be0b90e"],["/blogarchives/index.html","84d239c40d72487af04f9888f76875a8"],["/blogarchives/page/2/index.html","84d239c40d72487af04f9888f76875a8"],["/blogarchives/page/3/index.html","84d239c40d72487af04f9888f76875a8"],["/blogarchives/page/4/index.html","84d239c40d72487af04f9888f76875a8"],["/blogarchives/page/5/index.html","84d239c40d72487af04f9888f76875a8"],["/blogarchives/page/6/index.html","84d239c40d72487af04f9888f76875a8"],["/blogarchives/page/7/index.html","84d239c40d72487af04f9888f76875a8"],["/blogcategories/index.html","504174dd02d00d02073ae24bcce968fe"],["/blogcategories/代码编程/index.html","0d69057224e2f0954c59ff57070841a8"],["/blogcategories/代码编程/page/2/index.html","17a4b714d592c4d24c60904b8ca9cfc4"],["/blogcategories/代码编程/page/3/index.html","e4b34cffcec1f5a0e4fd5239f123f823"],["/blogcategories/代码编程/page/4/index.html","302a442963843f17e3724283d01bd6b0"],["/blogcategories/小说文艺/index.html","e5e88eb0691b8c888b5ab632e906b737"],["/blogcategories/小说文艺/page/2/index.html","75424f88da2412560656078a75abfe1b"],["/blogcategories/数理科学/index.html","b11f3cf48c2224930e52c34b80020194"],["/blogcategories/杂谈散记/index.html","b1513ee11709ba3ebc299977fd140260"],["/blogcategories/翻译作品/index.html","036d4c2df4f6f9b2f900703a0bb88e66"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","27b566e65a9b1586b42aaf1c68d415aa"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","d5672b08d5f63a3ade24351686efe091"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","c26a5735d5acb4be922f049e24f420d2"],["/blogpage/3/index.html","bee5d2002b0eaf5839db46a250f7de9a"],["/blogpage/4/index.html","c25d1b61dbc074245603639ca867a50e"],["/blogpage/5/index.html","8154fe05c354597c272716227c067800"],["/blogpage/6/index.html","4f6c1603e671d9b3ea062019e73a9b69"],["/blogpage/7/index.html","78fb24fcc148dbdf8225fde70933d893"],["/blogtags/C/index.html","4ccc2e0534d883850c0e9ad2eb1dc16a"],["/blogtags/Cloud/index.html","cae0c0eb402b39b9c5142073aefee36c"],["/blogtags/C语言/index.html","2f0fe0d8ca773768bb89769484328135"],["/blogtags/FlyCapture2/index.html","def86f5eabeaa88628c3a9d4694b29ac"],["/blogtags/Git/index.html","2b4d60a1cd164ecba83d77c708de930f"],["/blogtags/GitHub/index.html","45aa239ffe385849f9bb91f214f56188"],["/blogtags/Haskell/index.html","4f25c891eceb043b21cc276d3c9d4579"],["/blogtags/Julia/index.html","ff2189dc40933647b97a7f7a62bafa7b"],["/blogtags/LaTeX/index.html","13f435516296373a545091fbd5283304"],["/blogtags/LibraryLink/index.html","ef3f0c6e6feb78f503f2e47e85054ca6"],["/blogtags/MSBuild/index.html","2a56e2468000a194696317a9356e6ee0"],["/blogtags/NET/index.html","00cf4b50f75aba45561c43ef5050437b"],["/blogtags/PMAC/index.html","6692e4fc8cf3305aa5761e6d85345e7f"],["/blogtags/Qt/index.html","ca27d59d922f8fd0ab775cdb2a32638e"],["/blogtags/Rust/index.html","1a2f7e4ed2922ec874040faaa7db0bf2"],["/blogtags/Undocumented/index.html","9b1c61b84aa6cbb1e40875e9def2f857"],["/blogtags/Visual-Studio/index.html","797159c94d86a3cdadc98f02e496fe7a"],["/blogtags/Web/index.html","9ee029d863eb6148eb71f8e74766531e"],["/blogtags/Wiki/index.html","b31d82d2b4554ad3331627eb57b8d6a3"],["/blogtags/Wolfram/index.html","8512ff0f349e7f4e0bed239537e2440a"],["/blogtags/Wolfram/page/2/index.html","ad20747bdc7803fcb076ea307f84775c"],["/blogtags/Wolfram/page/3/index.html","1008134d120ac7b51b65817593808bd9"],["/blogtags/index.html","3fede104704ef343d0553eb639bb1c93"],["/blogtags/作文/index.html","18583640d35fb03c361fc22355fffa90"],["/blogtags/作文/page/2/index.html","7e98cfebfce991efb41e585f2f069da0"],["/blogtags/傅里叶变换/index.html","378d6acd9a5eec1a4a289b608afe36bf"],["/blogtags/功能模拟/index.html","5fe2056948a24861aa9a5cbcf0c947bd"],["/blogtags/参考/index.html","fd05d77c6372b6cec48fcc6b8c571fb5"],["/blogtags/哲学/index.html","e478b7100426730123c8032e87ea2c1a"],["/blogtags/图像加密/index.html","407cf84427887d99266272e73a189e73"],["/blogtags/图像处理/index.html","4c306ae7a1f22f0566c3a7f815833777"],["/blogtags/小说/index.html","26e7c6786fd5b8d9f34afb67839e128f"],["/blogtags/年终总结/index.html","d23c6b6eb7d8ccdea48293239a41a4ec"],["/blogtags/微积分/index.html","b64cb4e280a59f196f43aee370c6fdaa"],["/blogtags/拖放/index.html","3469cebc2139ff570c1ffc69a6fa3517"],["/blogtags/持续集成/index.html","7c2ef289d94f2d60ca8966e7d4849983"],["/blogtags/散记/index.html","0b06f9a3cb4f81fcb8d5a45e7226010f"],["/blogtags/数列/index.html","529c40258d54eab1f3312e10ab708d1f"],["/blogtags/数学/index.html","46d0538b6dbee708e1d1cadedfbb6adf"],["/blogtags/文件格式/index.html","ff6c78121efaff6917f1205854bb4ad1"],["/blogtags/文学编程/index.html","59ce9b9c4291a7539204553b887aeaf3"],["/blogtags/文言文/index.html","7a936cce2514e8649e78c6eafceb4d96"],["/blogtags/杂谈/index.html","19f30e4d4e15acd11e39a20bd814c21f"],["/blogtags/概率论/index.html","9e7281c3c3af6a8c2488ad699ddd9ca0"],["/blogtags/混沌/index.html","d828b91336606f78476425c4eb539ac0"],["/blogtags/科幻/index.html","26c3c51c64e28171e9440a2e8d569385"],["/blogtags/科普/index.html","1a212bead650325969b2fb8232d3f0ae"],["/blogtags/程序设计/index.html","150c7448800e3d50567bca172117955b"],["/blogtags/笔记/index.html","aed54778468e5e10352981ae7943af92"],["/blogtags/符号计算/index.html","6727d38cda36c6fddf3d1f2828bf919c"],["/blogtags/算法/index.html","46ed198fe6cb687a0962130e882d54e4"],["/blogtags/红警/index.html","75472e584a9c569ab85d9f5978e012c1"],["/blogtags/编程/index.html","f35b8455ff9cfff880e581a82f7d9820"],["/blogtags/编程/page/2/index.html","1fe5fbcdcedd7e41bfa6b97908930671"],["/blogtags/编程/page/3/index.html","ec85fdbbfccad3703eec427d56f17344"],["/blogtags/翻译/index.html","e38be77c718bfd57a68c2d0965c0f141"],["/blogtags/语法/index.html","06eec10384c69e7e0b823717edc15223"],["/blogtags/踩坑/index.html","4accfd3b409f0cd673ffcd771f602e74"],["/blogtags/逻辑/index.html","a7df91edcf1d7e6000accf624576f760"],["/blogtags/题解/index.html","29c16b0c34e346660dce57b693ca0205"],["/blogtags/马克思主义/index.html","54300f0b41b2ab76ca4319f9eb5a3341"]];
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







