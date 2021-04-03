# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.0](https://github.com/FaberVitale/storage-helpers/compare/v0.4.3...v0.5.0) (2021-04-03)


### ⚠ BREAKING CHANGES

* NoopStorage is no longer an es6 class

### Features

* expose normalizeStorageKey ([8ec2882](https://github.com/FaberVitale/storage-helpers/commit/8ec2882df30d46f1ada7d461645232dcac78ed01))
* support version passed as nuber ([3c51ae4](https://github.com/FaberVitale/storage-helpers/commit/3c51ae4056efe8507c4331ac29b833d4fb142ffc))


### Bug Fixes

* **ci:** broken pipeline on windows ([91f5802](https://github.com/FaberVitale/storage-helpers/commit/91f58026f188b341868c6bdba02d05adee452105))
* **docs:** broken internal links ([fcce612](https://github.com/FaberVitale/storage-helpers/commit/fcce6120d65b7867283319727cac270ed4154183))
* **docs:** broken links ([a3cc56d](https://github.com/FaberVitale/storage-helpers/commit/a3cc56dc95bb2a859ea30f7a6e024536fc249ded))
* **docs:** README  broken link ([daf1d5e](https://github.com/FaberVitale/storage-helpers/commit/daf1d5e3a6975b139f99059c43327e6524726784))
* **lint:** eslint configuration ([ff52dab](https://github.com/FaberVitale/storage-helpers/commit/ff52dab2ca3f20980cd1e9bc8341b3cc40ca9423))
* **readme:** type-coverage badge ([23ab43c](https://github.com/FaberVitale/storage-helpers/commit/23ab43cf9fdcefaf8fb48e6d3889e2bf0f61fe8a))


* make noopStorage a singleton ([efb64b1](https://github.com/FaberVitale/storage-helpers/commit/efb64b1a8e3dd6d70af7515d5924377413181836))

### [0.4.3](https://github.com/FaberVitale/storage-helpers/compare/v0.4.2...v0.4.3) (2021-03-06)

### [0.4.2](https://github.com/FaberVitale/storage-helpers/compare/v0.4.1...v0.4.2) (2020-12-31)


### Features

* add optional validation of the hydrated data retrieved ([3b25032](https://github.com/FaberVitale/storage-helpers/commit/3b2503203871264dd6fe2399feee50f87d1ff5ac))

### [0.4.1](https://github.com/FaberVitale/storage-helpers/compare/v0.4.0...v0.4.1) (2020-12-26)


### Features

* **build:** add umd build ([cb4f5ee](https://github.com/FaberVitale/storage-helpers/commit/cb4f5ee7ae4f7d1a6721332ae12d4a8dbf510d24))


### Bug Fixes

* set correct author in Licences ([092acec](https://github.com/FaberVitale/storage-helpers/commit/092acecf29748984ee6e451302317c9ce3cb8230))
* **ts:** broken ts module typings on node ([cea4dbc](https://github.com/FaberVitale/storage-helpers/commit/cea4dbc0c43131b1590e70ca58c79e625f807156))

## [0.4.0](https://github.com/FaberVitale/storage-helpers/compare/v0.3.0...v0.4.0) (2020-12-19)


### ⚠ BREAKING CHANGES

* renamed ./src/index.ts to ./src/storage-helpers.ts

* added markdown documentation and expanded readme ([328887e](https://github.com/FaberVitale/storage-helpers/commit/328887ef08589764d934fa9679101af4442bf651))

## [0.3.0](https://github.com/FaberVitale/storage-helpers/compare/v0.2.0...v0.3.0) (2020-12-13)


### ⚠ BREAKING CHANGES

* key() now  has same error handling behaviour of the other helpers
* removed getNoopStorage & InMemoryStorage

### Features

* add key namespace using storageConfig.namespace ([f5cd371](https://github.com/FaberVitale/storage-helpers/commit/f5cd3711bcdfc5efdab55f5ed428734b20d5c1e6))
* deno support, clean up api and reduce bundle size ([273eab8](https://github.com/FaberVitale/storage-helpers/commit/273eab840b6315daaa56d8713d33c769daa56841))


### Bug Fixes

* author settings ([f8e3a40](https://github.com/FaberVitale/storage-helpers/commit/f8e3a40f6d38bbb2ec6afe1b4b3636ad9895f96a))


* add key() tests ([df67727](https://github.com/FaberVitale/storage-helpers/commit/df67727202480664b34f2f484ac3031c8a4baf9c))
