# storage-helpers &mdash; ![npm version](https://img.shields.io/npm/v/storage-helpers) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FaberVitale/storage-helpers/blob/main/LICENSE) ![bundle size on npm](https://img.shields.io/bundlephobia/minzip/storage-helpers) [![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2FFaberVitale%2Fstorage-helpers%2Fmain%2Fpackages%2Fstorage-helpers%2Fpackage.json)](https://github.com/FaberVitale/storage-helpers)

## Description

A set of tools to manage localStorage, sessionStorage and more that run on browsers, node and deno.

## Main features

* runs everywhere browsers, node and deno.

* tiny, less than 1kB(gzip), and tree-shakable.

* optional storage key versioning and namespace.

* optional custom serialization and hydration logic.

* optional validation of hydrated data.


## Project structure

This project is organized as a monorepo, packages are available inside [/packages](/packages) folder.

### Packages

* [storage-helpers](/packages/storage-helpers/README.md)

### Examples

* [validation-with-yup](/examples/validation-with-yup/README.md)


## Developing

This monorepo uses [pnpm](https://pnpm.js.org/en/).


1. Install pnpm.

```bash
npm i -g pnpm
```

2. Install package dependencies.1


```bash
pnpm i
```

## License

[MIT](/License)