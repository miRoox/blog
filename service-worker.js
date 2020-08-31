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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","8d8bbe94ebfd4a1fc2e08cb02d095f10"],["/blog2013/07/EdisonIn21Century/index.html","a3444219492d3f6592adc8778816fe0d"],["/blog2013/07/FenDou/index.html","126b474b27dfb0ffc3af5ed85bb23eee"],["/blog2013/07/Qie/index.html","3a5f2be06a7f3bb706b2fcbf06ac6a78"],["/blog2013/07/RhapsodyOfSand/index.html","e89b961414d6e21df89d242f09803b91"],["/blog2014/03/KTimesSum/index.html","dcb873815edb30b5f218ff803a175858"],["/blog2014/04/PiPaXin/index.html","b9282fd665b8aa914a9e896b44c39c6a"],["/blog2014/12/Miniascape/index.html","d786b8d91383db7d9b82bdd549b01ff6"],["/blog2015/02/ShiBiao/index.html","e3a6af3b4870ab0ade2d0ee0c00c3612"],["/blog2015/02/Wei/index.html","3c3a94e0f186763fedec1800acb9ac34"],["/blog2015/03/Stain/index.html","77dbab22ed6b6fad97b5ce3bbb0b4d4a"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","033b5bde409059e0b2a870ffd638d8e8"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","8e4c2d240f1e7792a9cc4bd2e81de092"],["/blog2015/06/BellNumber/BellB.svg","07f8c74f3bc7e1be2a30054d5294d8d8"],["/blog2015/06/BellNumber/index.html","0e1eb14e4234fc95244ab5f527977636"],["/blog2015/06/BellPolynomial/index.html","97ef0aaf6dd6b51a2cc3246518e2d232"],["/blog2015/07/Idea/Idea.jpg","9c96869370e875fa71302248c02ea319"],["/blog2015/07/Idea/Idea0.jpg","9a0a4036596b9e9670f95ad7e882bab3"],["/blog2015/07/Idea/index.html","fc21151ae446cbcc4c79922d7914192f"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","f41c2c1f75ebbcef27419af5e5f98aad"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d83d94c844d3d727d060fdcb1de5eef8"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","852447a26ad7e1d84ebc11387759b3a2"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","618200e17ee33c19a8f98747392f294c"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","284f2968a45654249c50cae0942b4245"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","94fc66e26fdcf9760a4a996bd9983c93"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","000b72ad65636ef19104b65344999de4"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","93dac623005840243ebe475775dee1f3"],["/blog2015/09/731/index.html","6c70be2bc29ce85c2c069c9404b19327"],["/blog2015/10/Tiberium/index.html","ce2df4676c16ce22b733a6725d810304"],["/blog2015/12/ChengTianQuan-01/index.html","7ec74d5b1b7c963c1c06d202e72ed004"],["/blog2015/12/PKTFile/index.html","9ee88c4438ff58d00b0d6821b02d4bb4"],["/blog2016/02/ChengTianQuan-02/index.html","2408b48f9bca50040418c10262d4e742"],["/blog2016/04/LogicAndExperience/index.html","1d408914b291ecddb6e077402d72f223"],["/blog2016/12/CSFFileFormat/index.html","9295a9e2a5d0fd73d3cf717875438a25"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","fe82fb7f614ab9572b35ef143a3b180e"],["/blog2016/12/ProveCRTWithConvolution/index.html","6b8feffc23f0532663525633ab31013f"],["/blog2017/03/MIXFormat/index.html","7c929e5dce10ba45cbaa453e83af3e79"],["/blog2017/04/WesternPhilosopher/index.html","a5fb3acf0cb9747e84d031142613e44c"],["/blog2017/05/TheAlgebraOfADT-I/index.html","149808824cca329fc7ad46a74aae1cb9"],["/blog2017/06/MarxismInProgramDesign/connection.png","07f43b9936750faea3833fcf00ae2365"],["/blog2017/06/MarxismInProgramDesign/index.html","9ea41c13fde1dfdce91a940b59bf4908"],["/blog2017/07/TheAlgebraOfADT-II/index.html","c14c1cb0600a382da09e5c15a650fba1"],["/blog2017/08/DnDTabWithQt/index.html","756466f208b3f45d7667379fdefc3cca"],["/blog2017/09/ClassBasedOOPWithMma/index.html","ba4befd5cd9956250dd7c6538213dd86"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","ea2445a97d8402d75073b0e330779138"],["/blog2017/11/TrapInCCpp-1/index.html","4cf0b652abba3a836b2c14960e46b6af"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","0f07a557aab10fdcb0d0e6c0fa7b71fc"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","eb0b02b638fdd271bdcd360a7d376d5f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","79ea634a485d634bfdd5cc7c6724cd2b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","bd8e86b77d220db1f48668d6d62d74f5"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","bf6ce816f15402867830adecbde3458d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","b913e40ed55c68a5b45718c03290515f"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","91b97f1784c48e43ad196059d7b9efe4"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d0bb57d2437b3e66424b70c5f774a78d"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","f421ab603cc2366fc5c2eb8db1d6796b"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","b203b8d79606555649a72a62717258a3"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","51e28aef7e7f1b269788da8892f58f47"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","4b51f31701ba7889040d5bcf86687dc7"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","df4b1441743b04e8475de42ea9f49446"],["/blog2018/06/UnderstandWolframLang-I/index.html","7222415a2195d6dfeaf899aac5413015"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","cd4688ae680c053c3f8e3940837c8505"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","2b8f13b3357bfc9ee241c29fd01598b7"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","e678ca35d68e67c6577bb35622c8bb96"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","88697ccff5ada46af5c6170a9e8207a0"],["/blog2018/08/ScopeInWolframLang/index.html","3ce5a1c8d20f4442e975b63579ae5ba7"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","655653550bffe4fd9a59dd908f56e173"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","47948bb577526b924852c975d992369e"],["/blog2018/10/PrintDefinitions/index.html","95a5568a9c1f57e9f5defdb4a893be20"],["/blog2018/10/PrintDefinitions/usage.png","a51cf361facc9afd1ffbe9438d1c38c7"],["/blog2018/11/FixCurrentValueRefresh/index.html","21ebd46e67693b439786b4061706abfd"],["/blog2018/12/WolframOnlineDemo/index.html","c8ff895609f19cb58dfdcfab0ff1537c"],["/blog2019/01/PointerInWolfram/index.html","5138cbdb156cff1b4197841a7a48c33b"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d12adf3c71012d6ff4efaa7422e0a3c3"],["/blog2019/01/SubcriptInMma-Addendum/index.html","6db750127a5359339f81f657d542513e"],["/blog2019/01/SymbolSandbox/index.html","3b1431802a83aa3230a741abc457d9cb"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","9adc090a86f3bfde57375507e0d4baf3"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","9348ea8667a34bc94eada12546f3fce6"],["/blog2019/04/MmaAutoLiterature/index.html","6694ecca2d7ca2f0da67b3bedffa4c46"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","8a9965f4345c6f9bd005620a2b4678f5"],["/blog2019/05/WLStyleObject/Dataset.png","a5ebbdda623b569e37cd00ca6992eabc"],["/blog2019/05/WLStyleObject/SparseArray.png","f238ae378b6532801bc5179fe9fca207"],["/blog2019/05/WLStyleObject/index.html","4298ee1c213110a334658e25196a7af1"],["/blog2019/05/WLStyleObject/result.png","a08a332bef95b837d53d7f623256fc1a"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","cafe216811a7d33b80b6a4892763bfeb"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","e3f11428bdc6cee8b8dafb8653dda51b"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","87859d38c01a357b15e647b1379daadb"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","de35f296c44f6602c827833aade83690"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","1597407246a857c891b0e29ea98bf5b0"],["/blog2019/09/MatrixFormProblem/index.html","009c1a12f4333ce12615238a570c6be4"],["/blog2019/09/MatrixFormProblem/problem.svg","559f9387179e6c1969f893f7dab3b986"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","c8771bed6215fac959f00f5af2d24cee"],["/blog2019/09/MatrixFormProblem/solution.svg","0a7caa3ff483706d0101df4c8bc4b5aa"],["/blog2019/10/PersonalWiki/index.html","b4d591f903aa397ff1f2a74df24dab69"],["/blog2019/10/SubmitFunctionToWFR/index.html","93b12851bff9c522306258cf8608a44a"],["/blog2019/11/TerminologyAndPopularScience/index.html","4ed9f14534f714a0621ed14221a97cce"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","e2039c746b10fb50f93d625cf478855e"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","fca09982dfb231d7aa9e412bc65e0ce5"],["/blog2020/07/WolframGitHubViewer/github_id.png","c4f9b84e35d1bbd0dc68a02e390c43ed"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","672edf9f052cf2769ca7d733a00587c1"],["/blog2020/07/WolframGitHubViewer/index.html","9f8986c10398ac08ada0e68aace959a4"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","6a10f4fd239016695daf0f5a2046ece9"],["/blog2020/07/WolframGitHubViewer/notebook.png","b2e28f965e234f55580c53e8bd03b9ca"],["/blog2020/08/WolframURLShortenForm/index.html","8e137402fdae95c11069572345bffa60"],["/blog2020/08/wll-rs-design/adaptor.png","4247b3555cc3f50ff92db694b9bf3fa5"],["/blog2020/08/wll-rs-design/index.html","2884a90bb1f6f64568d414aaeb58e675"],["/blog2020/08/wll-rs-design/structure.png","23faed5591a9ec5f7dd57f088d72ba63"],["/blog2020/08/wll-rs-design/types.png","67b424633ed998024450ce3b50644f77"],["/blog404.html","25d5eb611da5643f0a9ac0586013e3a7"],["/blogabout/index.html","f56a4f35e28fa64246698f881fba31cf"],["/blogarchives/2011/07/index.html","8be3a87c452923591e2c4842134b915f"],["/blogarchives/2011/index.html","020c82d4f572ffab884f3a1a44e8fa55"],["/blogarchives/2013/07/index.html","ab9a1aa1aa83f52162dcf439591af955"],["/blogarchives/2013/index.html","377e20b5ccf7ce2c4087a3a1c3006a67"],["/blogarchives/2014/03/index.html","c23c94ee2f9ecc0ca836bcc6b63e3d7e"],["/blogarchives/2014/04/index.html","e9c3cb4bc762ed35aa13dc9bfb49ce7b"],["/blogarchives/2014/12/index.html","6f748b2d1b5ec11eee3911b264c2b76b"],["/blogarchives/2014/index.html","c18717228a21857ee3a7974fcf5d3b23"],["/blogarchives/2015/02/index.html","8108e5a0b6c7fa9de5db9fd4b417f3ac"],["/blogarchives/2015/03/index.html","80a8fcb02285fedef34a4b5530d9ccee"],["/blogarchives/2015/04/index.html","9b0a42c48fc6a00e5b787c4d51c54ea6"],["/blogarchives/2015/05/index.html","c410475b1a2f7009c0bfba8d2fb946b4"],["/blogarchives/2015/06/index.html","7f9c31097eb7ba57ae21fced3afd188f"],["/blogarchives/2015/07/index.html","7bfdd53c781570ea84c759a50b864463"],["/blogarchives/2015/09/index.html","47e5974bc9cb0cb4bf5eaca3eb1c7f22"],["/blogarchives/2015/10/index.html","8c3b99187dedd84dd933a2c22b9be03e"],["/blogarchives/2015/12/index.html","95c0b00f3b4339a616edbc886586b766"],["/blogarchives/2015/index.html","ad0811f062e1e9ca907f10566a9b8d44"],["/blogarchives/2015/page/2/index.html","a527f6ebee6baf98aaaa71c62996078c"],["/blogarchives/2016/02/index.html","56bd5f86ce34fdd8811772a27413a20f"],["/blogarchives/2016/04/index.html","4cf2697215b330fd455164ca450a8bbd"],["/blogarchives/2016/12/index.html","a8ba297d57197090659fed49940d9a26"],["/blogarchives/2016/index.html","6788ce3713b76b921d9945b229fba399"],["/blogarchives/2017/03/index.html","1e3d078ab9e6ffdee85ab9eab8a04b2d"],["/blogarchives/2017/04/index.html","172dbe958ed0754c43baf98a18440f2b"],["/blogarchives/2017/05/index.html","9d7ac64f2b83b9fb108d88a0b6177da1"],["/blogarchives/2017/06/index.html","9ea2e38c394fde6d0a56b3ae71da771b"],["/blogarchives/2017/07/index.html","beb7ea0f62c23b596633ccefecbde566"],["/blogarchives/2017/08/index.html","1cc635a208e21feff3b364c280ca30c8"],["/blogarchives/2017/09/index.html","ef0bf680f3855fe3eb78b4423370fca3"],["/blogarchives/2017/10/index.html","878294e5ee6de306a91b74ed57eac976"],["/blogarchives/2017/11/index.html","3f7c3f7a95286557ba5c2bcc9925cac7"],["/blogarchives/2017/index.html","6af5972cf69aff1fef274e7f56759ba3"],["/blogarchives/2018/05/index.html","2514451e0c25f9ac863c9c085115ce81"],["/blogarchives/2018/06/index.html","726cf06914693fb43b3310b609dda95d"],["/blogarchives/2018/08/index.html","876e5afe305d4a17e9cc26bee6e295c6"],["/blogarchives/2018/10/index.html","c152952602b9a87eaed563f615627166"],["/blogarchives/2018/11/index.html","0aa50cdad0b92c6524fd073b777683fc"],["/blogarchives/2018/12/index.html","529970b21111ce4039064db63d37b18c"],["/blogarchives/2018/index.html","68d5bd5ec5dea3e97aa515d019c2c7ca"],["/blogarchives/2019/01/index.html","789ff0082006c1a5ede6cf7474d86c86"],["/blogarchives/2019/02/index.html","75187ab479f274cb9ce9ad653e3c8e4f"],["/blogarchives/2019/04/index.html","b270b81057ccde7b8794dbb751e77336"],["/blogarchives/2019/05/index.html","407d72bc53a6a21d2081b8d19afbe960"],["/blogarchives/2019/07/index.html","c5a9001843a1859c689534bdf8b83961"],["/blogarchives/2019/09/index.html","63770abca88d89965e613c9e0a1e1455"],["/blogarchives/2019/10/index.html","dbdbd5cead4714a8fd2f013dd3f541de"],["/blogarchives/2019/11/index.html","d4bffef19c629b81d536ad8781161351"],["/blogarchives/2019/12/index.html","7487c55a79e3a576a23062b4086e0512"],["/blogarchives/2019/index.html","8fb9a165182e2e61dd1595ee7b4d03bd"],["/blogarchives/2019/page/2/index.html","82018838bc1ef5a8d7d169222dc59aff"],["/blogarchives/2020/01/index.html","906d6abaedaf18277fb7840d621ed114"],["/blogarchives/2020/07/index.html","8fff3f2ddf4dce62b4431d39c03b21a8"],["/blogarchives/2020/08/index.html","886a285e800c9aad78173d63b8f3772b"],["/blogarchives/2020/index.html","5c27475dcb3859e8c04b6df2cd635d22"],["/blogarchives/index.html","7677a4ce418dbf54f01c57c93a6d9c2d"],["/blogarchives/page/2/index.html","7677a4ce418dbf54f01c57c93a6d9c2d"],["/blogarchives/page/3/index.html","7677a4ce418dbf54f01c57c93a6d9c2d"],["/blogarchives/page/4/index.html","7677a4ce418dbf54f01c57c93a6d9c2d"],["/blogarchives/page/5/index.html","7677a4ce418dbf54f01c57c93a6d9c2d"],["/blogarchives/page/6/index.html","7677a4ce418dbf54f01c57c93a6d9c2d"],["/blogarchives/page/7/index.html","7677a4ce418dbf54f01c57c93a6d9c2d"],["/blogcategories/index.html","4816b4cfc0e80a40f36fd751798bce76"],["/blogcategories/代码编程/index.html","168193ddcf20f7694b36990d4e7d01c3"],["/blogcategories/代码编程/page/2/index.html","adfd2dc4a6002d32a292aee212494ed6"],["/blogcategories/代码编程/page/3/index.html","265b5df071b032feb3136b4ed8e7fc16"],["/blogcategories/代码编程/page/4/index.html","d4a9c229144a20eab66e3e1378c5da7c"],["/blogcategories/小说文艺/index.html","2853447896a71d0134442da8c73e3f81"],["/blogcategories/小说文艺/page/2/index.html","b1deac284cdae6a996d339c81609c04c"],["/blogcategories/数理科学/index.html","846f07289c60b31db05072671c6ea838"],["/blogcategories/杂谈散记/index.html","015eecabf89800393fea396f900162c8"],["/blogcategories/翻译作品/index.html","9cfd5e34abcafdfe439113d863e08446"],["/blogcss/style.css","e4120c4da314895725f3fac670b4c799"],["/blogfonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/blogfonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/blogfonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/blogfriends/index.html","660118faef5c2657033db5368758537f"],["/blogimages/avatar.jpg","e9f19df95461433396802bba32e49c98"],["/blogimages/bg1.jpg","443406e6f6d46151868aa5b6fcf20676"],["/blogimages/bg2.jpg","223eb2a636353b899f8af1da9306d3dc"],["/blogimages/favicon.png","c95ea1adb64bd115846e9b69250a6df8"],["/blogimg/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/blogimg/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/blogimg/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/blogindex.html","1174a7bb93c7b7e406a0a3202c3ede2b"],["/blogjs/app.js","fc6b6fd83988374192f07ee0adea32a9"],["/blogjs/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/blogjs/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["/blogpage/2/index.html","0379e8ed3d35e6f1e2e4ac3e76480abd"],["/blogpage/3/index.html","834700fbf3d8da53c79a02cb24c90c93"],["/blogpage/4/index.html","d972ae1673a0a35bcc0b495fca8c5949"],["/blogpage/5/index.html","9d237dfba4a202dba7d7c93458b07775"],["/blogpage/6/index.html","1ba6d68160b358ebf4751feca6ce1408"],["/blogpage/7/index.html","70d4ef277407a76670ce8341ea249031"],["/blogtags/C/index.html","3de491b2f0e827d5a0bfbc0911f45607"],["/blogtags/Cloud/index.html","45ec68f4df4a957a58508653957b468e"],["/blogtags/C语言/index.html","0d913b9095e5861d7033889d6f595ef0"],["/blogtags/Git/index.html","6d89839ab45ce41bd4a432533bbdd1dd"],["/blogtags/GitHub/index.html","354a01c5f554f2610eb24d2b0eeb188f"],["/blogtags/Haskell/index.html","bd1acb5b7dda44ff27dc09081ce07163"],["/blogtags/LaTeX/index.html","14a8ed15621e77d610f890f9d0700c65"],["/blogtags/LibraryLink/index.html","83c8d198cbd4db602be88d1772cc1989"],["/blogtags/Qt/index.html","57a047ca9dab5e656d2f1e598cba955e"],["/blogtags/Rust/index.html","796f0d0e145eeb221ebfa6bd5427c8f1"],["/blogtags/Undocumented/index.html","9b2b18932a68b8064baa9840414efcf8"],["/blogtags/Web/index.html","3208e6a5537b9e8ff0a7017b57af66ab"],["/blogtags/Wiki/index.html","743e2c04a42a8ccf402351d469f74817"],["/blogtags/Wolfram/index.html","b27fe0fb6727d05631f08af759b7478a"],["/blogtags/Wolfram/page/2/index.html","242ca03c47900dd84fc1d74a5fe935cb"],["/blogtags/Wolfram/page/3/index.html","bbc1a1a47298a55225630c4a65c849b2"],["/blogtags/index.html","7622c34b26b3764e0ab0aa2d2c432ef4"],["/blogtags/作文/index.html","bf5f68a0d464d8f87c2a4a52bf98e97f"],["/blogtags/作文/page/2/index.html","0d8e05443ee395f75217c974efea0bc6"],["/blogtags/傅里叶变换/index.html","ec02293d3b1d2ace57415c60cb2b7ec8"],["/blogtags/功能模拟/index.html","c3647ad93211cc290edd59c0ba2ece48"],["/blogtags/参考/index.html","ac938d44aee9c837818f4a186022aafd"],["/blogtags/哲学/index.html","c0270d70a45c066ff81e05a2280442ef"],["/blogtags/图像加密/index.html","e94b9c70e1e3dbccde5c7dfae4b8e23f"],["/blogtags/图像处理/index.html","9c473302d7cfbc9694d3be1c14cbe8ba"],["/blogtags/小说/index.html","21662163167f8bdc94c1646de1a90c8c"],["/blogtags/微积分/index.html","6efbb4d5c28d1ee340cdb075a841b0bd"],["/blogtags/拖放/index.html","c45c87a86594ea7ae702f0b49efc8618"],["/blogtags/持续集成/index.html","bfa0bea798ae9f6e1ca15f8b2e355cb8"],["/blogtags/散记/index.html","88af6e1cb0588d9e959e1b4fde3010e6"],["/blogtags/数列/index.html","8e3afebb65ea8a50037be2823d6f8a91"],["/blogtags/数学/index.html","6b82aaf64bf34edcaf4082bbde6ea3e8"],["/blogtags/文件格式/index.html","36b9b75aa80c9898f5cd2af191062934"],["/blogtags/文学编程/index.html","07c1a0c99b6fa07444e0a003a9c20ae9"],["/blogtags/文言文/index.html","9e27c05d8f4177e39718d437a6307271"],["/blogtags/杂谈/index.html","4ec0015ead2446be52953114f0fa7494"],["/blogtags/概率论/index.html","5ca4bfadd61f8e1722ea30336ebaf388"],["/blogtags/混沌/index.html","e922908982071f448f6a2dc0b229d56b"],["/blogtags/科幻/index.html","62005acf9224f62624355b8679c0e0c2"],["/blogtags/科普/index.html","ebe6e0b057e556098b5b9513cc5f9e3b"],["/blogtags/程序设计/index.html","c609e51076002b8649c4f51fb35ec097"],["/blogtags/笔记/index.html","c68fa8e565e468236124b1a71cd61bee"],["/blogtags/符号计算/index.html","aea4d8223689d9e3f4de708cd13f148a"],["/blogtags/算法/index.html","e8f8beb9c1310826aa2161a48e0f1759"],["/blogtags/红警/index.html","5811f050dee0d06bbac9a6cb06941112"],["/blogtags/编程/index.html","32c7320fde60f942e147901c450d4fe0"],["/blogtags/编程/page/2/index.html","2142647875dee45c6e4a9b9a69c80f29"],["/blogtags/翻译/index.html","de44dd2eac45083132797ff6bfd43675"],["/blogtags/语法/index.html","39b42adabf8904ec78916b1d81adebf6"],["/blogtags/踩坑/index.html","86cf6f8ab146261c8e745c8b9bc4b0c2"],["/blogtags/逻辑/index.html","4e4baab0d7df5494373c120e88f070e3"],["/blogtags/题解/index.html","40f1b116df4b541e1a55334da05b674d"],["/blogtags/马克思主义/index.html","230abde6c1562cea9ac23791736e33d9"]];
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







