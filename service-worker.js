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

var precacheConfig = [["/blog2011/07/Stone-Man/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2013/07/EdisonIn21Century/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2013/07/FenDou/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2013/07/Qie/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2013/07/RhapsodyOfSand/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2014/03/KTimesSum/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2014/04/PiPaXin/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2014/12/Miniascape/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/02/ShiBiao/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/02/Wei/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/03/Stain/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/04/ZhuJiGongZhuMengRen/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/05/YouQianRenXingMeiQianShuaiXing/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/06/BellNumber/BellB.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/06/BellNumber/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/06/BellPolynomial/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/Idea/Idea.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/Idea/Idea0.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/Idea/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/ZenoParadoxAndCalculus/chase.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/ZenoParadoxAndCalculus/graph01.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/ZenoParadoxAndCalculus/graph02.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/ZenoParadoxAndCalculus/graph03.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/ZenoParadoxAndCalculus/graph04.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/ZenoParadoxAndCalculus/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/ZenoParadoxAndCalculus/newton.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/07/ZenoParadoxAndCalculus/vecplus.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/09/731/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/10/Tiberium/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/12/ChengTianQuan-01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2015/12/PKTFile/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2016/02/ChengTianQuan-02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2016/04/LogicAndExperience/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2016/12/CSFFileFormat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2016/12/LODESolutionUnderLowViewpoint/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2016/12/ProveCRTWithConvolution/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/03/MIXFormat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/04/WesternPhilosopher/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/05/TheAlgebraOfADT-I/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/06/MarxismInProgramDesign/connection.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/06/MarxismInProgramDesign/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/07/TheAlgebraOfADT-II/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/08/DnDTabWithQt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/09/ClassBasedOOPWithMma/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/10/ImageEncryptImprovedChirikovMap/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2017/11/TrapInCCpp-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/04/DebateOfScienceInAncientChina/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/05/2018-5-19-RemoveGitHubFork/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_10.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_11.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_12.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_2.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_3.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_4.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_5.gif","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_6.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_7.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_8.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/EverythingIsAnExpression_9.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/plot_1.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/plot_2.gif","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/plot_3.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/06/UnderstandWolframLang-I/plot_4.gif","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/08/ScopeInWolframLang/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/08/SubscriptAndDerivateInMma/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/08/UnicodeCharInMmaPackage/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/10/PrintDefinitions/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/10/PrintDefinitions/usage.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/11/FixCurrentValueRefresh/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2018/12/WolframOnlineDemo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/01/PointerInWolfram/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/01/SubcriptInMma-Addendum/Subscript.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/01/SubcriptInMma-Addendum/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/01/SymbolSandbox/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/02/WLGeneralUtilitiesMacro/CollectTo.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/02/WLGeneralUtilitiesMacro/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/04/MmaAutoLiterature/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/05/TrapAboutDerivativeInMma/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/05/WLStyleObject/Dataset.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/05/WLStyleObject/SparseArray.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/05/WLStyleObject/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/05/WLStyleObject/result.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/07/FormatOfVectorInLaTeX/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/07/RuleBasedStepByStepDerivative/echo-step.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/07/RuleBasedStepByStepDerivative/format.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/07/RuleBasedStepByStepDerivative/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/07/RuleBasedStepByStepDerivative/label.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/09/MatrixFormProblem/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/09/MatrixFormProblem/problem.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/09/MatrixFormProblem/solution-echo.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/09/MatrixFormProblem/solution.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/10/PersonalWiki/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/10/SubmitFunctionToWFR/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/11/TerminologyAndPopularScience/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2019/12/AboutGitHubActionsCIQt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/01/GitHubActionForWolframLanguage/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/07/WolframGitHubViewer/github_id.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/07/WolframGitHubViewer/github_repo-branch.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/07/WolframGitHubViewer/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/07/WolframGitHubViewer/markdown_badge.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/07/WolframGitHubViewer/notebook.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/08/WolframURLShortenForm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/08/wll-rs-design/adaptor.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/08/wll-rs-design/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/08/wll-rs-design/structure.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/08/wll-rs-design/types.png","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/10/TrapInSplicerProject/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/11/JuliaPkgGuide/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2020/12/Summary2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2021/01/MSBuild-LaTeXDoc/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2021/05/Initonly-Setter-CSharp/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2021/10/Julia-unevaltypeof/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog2022/01/Summary2021/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blog404.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogabout/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2011/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2011/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2013/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2013/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2014/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2014/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2014/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2014/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2015/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2016/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2016/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2016/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2016/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2017/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2018/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2018/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2018/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2018/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2018/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2018/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2018/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2019/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2020/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2020/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2020/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2020/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2020/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2020/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2021/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2021/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2021/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2021/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2022/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/2022/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogarchives/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/代码编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/代码编程/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/代码编程/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/代码编程/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/小说文艺/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/小说文艺/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/数理科学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/杂谈散记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcategories/翻译作品/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogcss/style.css","d41d8cd98f00b204e9800998ecf8427e"],["/blogfonts/Monaco.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/blogfonts/Skranji-Regular.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/blogfonts/Ubuntu-Regular.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/blogfriends/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogimages/avatar.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/blogimages/bg1.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/blogimages/bg2.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/blogimages/favicon.png","d41d8cd98f00b204e9800998ecf8427e"],["/blogimg/algolia.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blogimg/azure.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blogimg/baidu.svg","d41d8cd98f00b204e9800998ecf8427e"],["/blogindex.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogjs/app.js","d41d8cd98f00b204e9800998ecf8427e"],["/blogjs/search.js","d41d8cd98f00b204e9800998ecf8427e"],["/blogjs/valine.js","d41d8cd98f00b204e9800998ecf8427e"],["/blogpage/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogpage/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogpage/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogpage/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogpage/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogpage/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Cloud/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/C语言/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/FlyCapture2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Git/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/GitHub/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Haskell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Julia/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/LaTeX/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/LibraryLink/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/MSBuild/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/NET/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/PMAC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Qt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Rust/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Undocumented/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Visual-Studio/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Web/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Wiki/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Wolfram/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Wolfram/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/Wolfram/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/作文/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/作文/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/傅里叶变换/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/元编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/功能模拟/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/参考/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/哲学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/图像加密/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/图像处理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/小说/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/年终总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/微积分/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/拖放/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/持续集成/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/散记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/数列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/数学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/文件格式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/文学编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/文言文/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/杂谈/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/概率论/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/混沌/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/科学哲学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/科幻/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/科普/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/程序设计/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/符号计算/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/红警/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/编程/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/编程/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/翻译/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/语法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/踩坑/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/逻辑/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/题解/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/blogtags/马克思主义/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







