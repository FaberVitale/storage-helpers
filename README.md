# storage-helpers &mdash; ![npm version](https://img.shields.io/npm/v/storage-helpers) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FaberVitale/storage-helpers/blob/main/LICENSE) ![bundle size on npm](https://img.shields.io/bundlephobia/minzip/storage-helpers) [![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2FFaberVitale%2Fstorage-helpers%2Fmain%2Fpackage.json)](https://github.com/FaberVitale/storage-helpers)

## Description

A set of tools to manage localStorage, sessionStorage and more that run on browsers, node and deno.

## Main features

* tiny, less than 1kB, and tree-shakable.

* optional storage key versioning and namespace.

* optional custom serialization and hydration logic.

* optional validation of hydrated data.

## Simple example

```ts
const storageConfig = {
  version: "v2",
  namespace: "user-conf"
};

// persists on localStorage `[user-conf]i18n@v2` -> `{"locale":"es-ES","floatingPoint":"dot","unit":"metric"}`
setStorageItem("i18n", { locale: 'es-ES', floatingPoint: 'dot', unit: 'metric' }, storageConfig);

// returns `{"locale":"es-ES","floatingPoint":"dot","unit":"metric"}` hydrated
getStorageItem("i18n", storageConfig);

```

## Installation

### node

Add [storage-helpers](https://www.npmjs.com/package/storage-helpers) to package.json

```bash
  npm i storage-helpers --save
```
### deno

[Import](https://deno.land/x/storage_helpers) directly in your typescript files

```ts
import { setStorageItem }  "https://deno.land/x/storage_helpers@v0.4.2/mod.ts";
```

### UMD build

html files

```html
  <script src="https://unpkg.com/storage-helpers@0.4.2/dist/storage_helpers.umd.production.min.js"></script>
```

---

## Documentation

* [Storage helpers docs (github.com)](./docs/modules/_storage_helpers_.md)
* [Storage helpers docs (doc.deno.land)](https://doc.deno.land/https/deno.land/x/storage_helpers/mod.ts)
* [npm page](https://www.npmjs.com/package/storage-helpers)
* [deno.land page](https://deno.land/x/storage_helpers)
* [Changelog](/CHANGELOG.md)

## License

[MIT](/License)