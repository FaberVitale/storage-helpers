> [Globals](/docs/globals.md) / ["storage-helpers"](/docs/modules/_storage_helpers_.md) / StorageConfig

# Interface: StorageConfig<T\>

An optional configuration argument of all the helper functions
of [storage-helpers](https://github.com/FaberVitale/storage-helpers) that enables to set:
1. The way data is serialized and hydrated.
2. Which storage is used.
3. key version and namespace.
4. How to handle exceptions.

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **StorageConfig**

## Index

### Properties

* [getStorage](/docs/interfaces/_storage_helpers_.storageconfig.md#getstorage)
* [hydrate](/docs/interfaces/_storage_helpers_.storageconfig.md#hydrate)
* [namespace](/docs/interfaces/_storage_helpers_.storageconfig.md#namespace)
* [onError](/docs/interfaces/_storage_helpers_.storageconfig.md#onerror)
* [serialize](/docs/interfaces/_storage_helpers_.storageconfig.md#serialize)
* [version](/docs/interfaces/_storage_helpers_.storageconfig.md#version)

## Properties

### getStorage

• `Optional` **getStorage**: undefined \| (key?: undefined \| string, version?: undefined \| string) => [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)

*Defined in [storage-helpers.ts:26](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L26)*

`storage` provider, defaults to [getLocalStorage](/docs/modules/_storage_helpers_.md#getlocalstorage)

___

### hydrate

• `Optional` **hydrate**: undefined \| (val: string) => T

*Defined in [storage-helpers.ts:74](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L74)*

Deserializes the value acquired from the local storage,
defaults to [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

**`example`** 
```typescript
const serialize = (val: unknown) => btoa(JSON.serialize(val));
const hydrate = (serialized: string) => JSON.parse(atob(serialized));
const storageConfig = { serialize, hydrate };

// stores `value` as base-64 string `eyJ2YWwiOjR9`.
setStorageItem("myKey", { val: 4 }, storageConfig);

// returns `{ val: 4 }`.
getStorageItem("myKey", storageConfig);
```

___

### namespace

• `Optional` **namespace**: undefined \| string

*Defined in [storage-helpers.ts:112](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L112)*

Optional key namespace that minimizes collisions.

**`example`** 
```typescript
const storageConfig = { version: "v1", namespace: "tracking" };

// persists on `localStorage` the entry `[tracking]user@v1` -> `{"name":"Mark"}`
setStorageItem("user", { name: "Mark" }, storageConfig);

// returns `{"name":"Mark"}`
getStorageItem("user", storageConfig);

// removes the entry `[tracking]user@v1` -> `{"name":"Mark"}`.
removeStorageItem("user", storageConfig);
```

___

### onError

• `Optional` **onError**: undefined \| (raisedError: unknown, config: [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\> \| undefined, key?: undefined \| string) => void

*Defined in [storage-helpers.ts:32](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L32)*

An optional error handler,
defaults to `console.error`.

___

### serialize

• `Optional` **serialize**: undefined \| (val: T) => string

*Defined in [storage-helpers.ts:55](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L55)*

Converts the value provided to `string`,
defaults to [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

**`example`** 
```typescript
const serialize = (val: unknown) => btoa(JSON.serialize(val));
const hydrate = (serialized: string) => JSON.parse(atob(serialized));
const storageConfig = { serialize, hydrate };

// stores `value` as base-64 string `eyJ2YWwiOjR9`.
setStorageItem("myKey", { val: 4 }, storageConfig);

// returns `{ val: 4 }`.
getStorageItem("myKey", storageConfig);
```

___

### version

• `Optional` **version**: undefined \| string

*Defined in [storage-helpers.ts:93](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L93)*

Optional key versioning.

**`example`** 
```typescript
const storageConfig = { version: "v1" };

// persists on `localStorage` the entry `myKey@v1` -> `{"val":2}`
setStorageItem("myKey", { val: 2 }, storageConfig);

// returns `{ val: 2 }`
getStorageItem("myKey", storageConfig);

// removes the entry `myKey@v1` -> `{"val":2}`.
removeStorageItem("myKey", storageConfig);
```
