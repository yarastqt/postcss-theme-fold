## 1.9.1 (2021-12-08)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check for exists processed prop ([b8f6b19](https://github.com/yarastqt/postcss-theme-fold/commit/b8f6b19da399bf89fbb70ba03f69c92b625fe1c4))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* fix replace var with correct regexp ([6f55801](https://github.com/yarastqt/postcss-theme-fold/commit/6f5580131f2a30bd3dba43684343fb6e6cc62204))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use key for invalidate cache ([28c17ee](https://github.com/yarastqt/postcss-theme-fold/commit/28c17eef5ad5d180b7d50e06889afc806da3bb65))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* added option to disable warnings ([8a0e46e](https://github.com/yarastqt/postcss-theme-fold/commit/8a0e46ee9b24899aa85c41124dc9fd1d6938752f))
* generate two cases for global selector ([9e5dea5](https://github.com/yarastqt/postcss-theme-fold/commit/9e5dea590a9ebbc868a0cc3cf0b53edcc0d28606))
* impl debug mode ([5488f2e](https://github.com/yarastqt/postcss-theme-fold/commit/5488f2e7b97bcf17f8307547de0282cc0018e5ea))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* impl preserve option ([9ec89b1](https://github.com/yarastqt/postcss-theme-fold/commit/9ec89b161f83c001dfa611589daf6db50b729702))
* preserve list of css variables ([01de6a1](https://github.com/yarastqt/postcss-theme-fold/commit/01de6a18c16953106541f9d8f64270510c1683fa))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))
* variables in root selector for themekit ([a9fe6c9](https://github.com/yarastqt/postcss-theme-fold/commit/a9fe6c9d1045cea36972a89f739ef2aed8245350))



# 1.9.0 (2021-12-03)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check for exists processed prop ([b8f6b19](https://github.com/yarastqt/postcss-theme-fold/commit/b8f6b19da399bf89fbb70ba03f69c92b625fe1c4))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* fix replace var with correct regexp ([6f55801](https://github.com/yarastqt/postcss-theme-fold/commit/6f5580131f2a30bd3dba43684343fb6e6cc62204))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* added option to disable warnings ([8a0e46e](https://github.com/yarastqt/postcss-theme-fold/commit/8a0e46ee9b24899aa85c41124dc9fd1d6938752f))
* generate two cases for global selector ([9e5dea5](https://github.com/yarastqt/postcss-theme-fold/commit/9e5dea590a9ebbc868a0cc3cf0b53edcc0d28606))
* impl debug mode ([5488f2e](https://github.com/yarastqt/postcss-theme-fold/commit/5488f2e7b97bcf17f8307547de0282cc0018e5ea))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* impl preserve option ([9ec89b1](https://github.com/yarastqt/postcss-theme-fold/commit/9ec89b161f83c001dfa611589daf6db50b729702))
* preserve list of css variables ([01de6a1](https://github.com/yarastqt/postcss-theme-fold/commit/01de6a18c16953106541f9d8f64270510c1683fa))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))
* variables in root selector for themekit ([a9fe6c9](https://github.com/yarastqt/postcss-theme-fold/commit/a9fe6c9d1045cea36972a89f739ef2aed8245350))



# 1.8.0 (2021-11-29)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check for exists processed prop ([b8f6b19](https://github.com/yarastqt/postcss-theme-fold/commit/b8f6b19da399bf89fbb70ba03f69c92b625fe1c4))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* fix replace var with correct regexp ([6f55801](https://github.com/yarastqt/postcss-theme-fold/commit/6f5580131f2a30bd3dba43684343fb6e6cc62204))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* added option to disable warnings ([8a0e46e](https://github.com/yarastqt/postcss-theme-fold/commit/8a0e46ee9b24899aa85c41124dc9fd1d6938752f))
* impl debug mode ([5488f2e](https://github.com/yarastqt/postcss-theme-fold/commit/5488f2e7b97bcf17f8307547de0282cc0018e5ea))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* impl preserve option ([9ec89b1](https://github.com/yarastqt/postcss-theme-fold/commit/9ec89b161f83c001dfa611589daf6db50b729702))
* preserve list of css variables ([01de6a1](https://github.com/yarastqt/postcss-theme-fold/commit/01de6a18c16953106541f9d8f64270510c1683fa))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))
* variables in root selector for themekit ([a9fe6c9](https://github.com/yarastqt/postcss-theme-fold/commit/a9fe6c9d1045cea36972a89f739ef2aed8245350))



# 1.7.0 (2021-11-22)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check for exists processed prop ([b8f6b19](https://github.com/yarastqt/postcss-theme-fold/commit/b8f6b19da399bf89fbb70ba03f69c92b625fe1c4))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* fix replace var with correct regexp ([6f55801](https://github.com/yarastqt/postcss-theme-fold/commit/6f5580131f2a30bd3dba43684343fb6e6cc62204))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* added option to disable warnings ([8a0e46e](https://github.com/yarastqt/postcss-theme-fold/commit/8a0e46ee9b24899aa85c41124dc9fd1d6938752f))
* impl debug mode ([5488f2e](https://github.com/yarastqt/postcss-theme-fold/commit/5488f2e7b97bcf17f8307547de0282cc0018e5ea))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* impl preserve option ([9ec89b1](https://github.com/yarastqt/postcss-theme-fold/commit/9ec89b161f83c001dfa611589daf6db50b729702))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))
* variables in root selector for themekit ([a9fe6c9](https://github.com/yarastqt/postcss-theme-fold/commit/a9fe6c9d1045cea36972a89f739ef2aed8245350))



## 1.6.1 (2021-06-16)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check for exists processed prop ([b8f6b19](https://github.com/yarastqt/postcss-theme-fold/commit/b8f6b19da399bf89fbb70ba03f69c92b625fe1c4))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* fix replace var with correct regexp ([6f55801](https://github.com/yarastqt/postcss-theme-fold/commit/6f5580131f2a30bd3dba43684343fb6e6cc62204))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* added option to disable warnings ([8a0e46e](https://github.com/yarastqt/postcss-theme-fold/commit/8a0e46ee9b24899aa85c41124dc9fd1d6938752f))
* impl debug mode ([5488f2e](https://github.com/yarastqt/postcss-theme-fold/commit/5488f2e7b97bcf17f8307547de0282cc0018e5ea))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))
* variables in root selector for themekit ([a9fe6c9](https://github.com/yarastqt/postcss-theme-fold/commit/a9fe6c9d1045cea36972a89f739ef2aed8245350))



# 1.6.0 (2021-06-04)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* added option to disable warnings ([8a0e46e](https://github.com/yarastqt/postcss-theme-fold/commit/8a0e46ee9b24899aa85c41124dc9fd1d6938752f))
* impl debug mode ([5488f2e](https://github.com/yarastqt/postcss-theme-fold/commit/5488f2e7b97bcf17f8307547de0282cc0018e5ea))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))
* variables in root selector for themekit ([a9fe6c9](https://github.com/yarastqt/postcss-theme-fold/commit/a9fe6c9d1045cea36972a89f739ef2aed8245350))



# 1.5.0 (2021-01-18)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* added option to disable warnings ([8a0e46e](https://github.com/yarastqt/postcss-theme-fold/commit/8a0e46ee9b24899aa85c41124dc9fd1d6938752f))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))
* variables in root selector for themekit ([a9fe6c9](https://github.com/yarastqt/postcss-theme-fold/commit/a9fe6c9d1045cea36972a89f739ef2aed8245350))



# 1.4.0 (2020-09-24)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* added option to disable warnings ([8a0e46e](https://github.com/yarastqt/postcss-theme-fold/commit/8a0e46ee9b24899aa85c41124dc9fd1d6938752f))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



## 1.3.3 (2020-06-04)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* support levels multi-theme ([4ec2691](https://github.com/yarastqt/postcss-theme-fold/commit/4ec2691d97847a842dab1891a801719a3930f221))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



## 1.3.2 (2020-06-01)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* check processed nodes ([51821e3](https://github.com/yarastqt/postcss-theme-fold/commit/51821e306c0819e8099701917c7d85dc433089f2))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



## 1.3.1 (2020-05-20)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* change check type for predicate ([3b9c820](https://github.com/yarastqt/postcss-theme-fold/commit/3b9c820e33cae054465ec831edcc7f551cb9eead))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



# 1.3.0 (2020-05-20)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add predicate for process each vars ([fe57d42](https://github.com/yarastqt/postcss-theme-fold/commit/fe57d424e74fd31aeee02c0a23127dd2d52f4005))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



# 1.2.0 (2020-04-15)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* remove expanded variables ([dccd2bd](https://github.com/yarastqt/postcss-theme-fold/commit/dccd2bddce3ff3e53b7b882d33fd067eab23c854))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



# 1.1.0 (2020-04-04)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* right process global selector ([9c72704](https://github.com/yarastqt/postcss-theme-fold/commit/9c727044ad8a3ba5ab63c046a8e277681f233384))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add mode for single and multi themes ([10ea117](https://github.com/yarastqt/postcss-theme-fold/commit/10ea11744e8002ff5aca848d026007e891901391))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl new algo for expand vars ([2fa00e5](https://github.com/yarastqt/postcss-theme-fold/commit/2fa00e500f09e7693aa6c98c5c3d69b67efb308b))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



## 1.0.3 (2020-02-19)


### Bug Fixes

* add capture var for VARIABLE_FULL_RE ([d1d8114](https://github.com/yarastqt/postcss-theme-fold/commit/d1d8114ba98201c60b2e9f2a2f8dff6c4d602794))
* expand local variables for theme ([faf8869](https://github.com/yarastqt/postcss-theme-fold/commit/faf88692944c5a59ba1ba26a253683c48704b18d))
* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



## 1.0.2 (2020-02-19)


### Bug Fixes

* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



## 1.0.1 (2020-02-14)


### Bug Fixes

* handle unknown vars ([6ca6aa3](https://github.com/yarastqt/postcss-theme-fold/commit/6ca6aa3cd6989d48180a477f21763494e274e1af))
* prevent duplicate theme selectors ([ca7d181](https://github.com/yarastqt/postcss-theme-fold/commit/ca7d181b3c3439c8d5eb6fda0873963e3e7150f3))
* prevent remove duplicate selector without theme ([1f30ced](https://github.com/yarastqt/postcss-theme-fold/commit/1f30ced11b7048c794a30567855423b665e68670))
* process all variables in decl value ([a6a035d](https://github.com/yarastqt/postcss-theme-fold/commit/a6a035d562481430def402a571750a6fe4479fcb))
* skip rule if variable not found ([768e7c7](https://github.com/yarastqt/postcss-theme-fold/commit/768e7c7d2270630ccf364fd0c82c4045ceffd5b7))
* use fallback for globalSelectors ([fc3855d](https://github.com/yarastqt/postcss-theme-fold/commit/fc3855dba79f36c5015f50aabbd77d879a4ba3cb))
* use more specific regexp for replace var ([bebe583](https://github.com/yarastqt/postcss-theme-fold/commit/bebe58365d856f1d912a29c378b99cb48049dcb4))


### Features

* add cache ([9becbf2](https://github.com/yarastqt/postcss-theme-fold/commit/9becbf2b234b88013734b10a87cdb25288e6ddf3))
* add main file ([490c12a](https://github.com/yarastqt/postcss-theme-fold/commit/490c12ae008717eb4f1ab8efdc2cb58f7149056b))
* add plugin stub ([e824d36](https://github.com/yarastqt/postcss-theme-fold/commit/e824d36a94fb30eb32a70424419f188fbf151cca))
* add theme variable extractor ([78a10c6](https://github.com/yarastqt/postcss-theme-fold/commit/78a10c668b977c500a701b7b5ed7ebbb9f1c70af))
* add variable extractor from themes ([7d562ae](https://github.com/yarastqt/postcss-theme-fold/commit/7d562ae1ce7b53bdd3884987a6cd777ac29bebd1))
* impl plugin ([876e1b0](https://github.com/yarastqt/postcss-theme-fold/commit/876e1b05e917b358b2d2374a3416b36e733f58ee))
* support global selectors ([e0ee154](https://github.com/yarastqt/postcss-theme-fold/commit/e0ee154264d49809c1f50a81f8e8d9a0b21f8ac5))



