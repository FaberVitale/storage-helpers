> [Globals](/docs/globals.md) / ["storage-helpers"](/docs/modules/_storage_helpers_.md) / StorageConfig

# Interface: StorageConfig<T\>

An optional configuration argument of all the helper functions
of [storage-helpers](https://github.com/FaberVitale/storage-helpers) that enables to set:
1. The way data is serialized and hydrated.
2. Which storage is used.
3. key version and namespace.
4. How to handle exceptions.
5. Validation for hydrated data.

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
* [validateHydrated](/docs/interfaces/_storage_helpers_.storageconfig.md#validatehydrated)
* [version](/docs/interfaces/_storage_helpers_.storageconfig.md#version)

## Properties

### getStorage

• `Optional` **getStorage**: undefined \| (key?: undefined \| string, version?: undefined \| string) => [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)

*Defined in [storage-helpers.ts:34](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L34)*

`storage` provider, defaults to [getLocalStorage](/docs/modules/_storage_helpers_.md#getlocalstorage)

Used by
- [setStorageItem](/docs/modules/_storage_helpers_.md#setstorageitem)
- [getStorageItem](/docs/modules/_storage_helpers_.md#getstorageitem)
- [removeStorageItem](/docs/modules/_storage_helpers_.md#removestorageitem)
- [key](/docs/modules/_storage_helpers_.md#key)
- [clearStorage](/docs/modules/_storage_helpers_.md#clearstorage)

___

### hydrate

• `Optional` **hydrate**: undefined \| (serialized: string) => T

*Defined in [storage-helpers.ts:108](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L108)*

Deserializes the value acquired from the local storage,
defaults to [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Used by
- [getStorageItem](/docs/modules/_storage_helpers_.md#getstorageitem)

### Example
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

*Defined in [storage-helpers.ts:202](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L202)*

Optional key namespace that can be added to minimize storage key collisions.

Used by
- [setStorageItem](/docs/modules/_storage_helpers_.md#setstorageitem)
- [getStorageItem](/docs/modules/_storage_helpers_.md#getstorageitem)
- [removeStorageItem](/docs/modules/_storage_helpers_.md#removestorageitem)

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

*Defined in [storage-helpers.ts:60](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L60)*

An optional error handler,
defaults to `console.error`.

Used by
- [setStorageItem](/docs/modules/_storage_helpers_.md#setstorageitem)
- [getStorageItem](/docs/modules/_storage_helpers_.md#getstorageitem)
- [removeStorageItem](/docs/modules/_storage_helpers_.md#removestorageitem)
- [key](/docs/modules/_storage_helpers_.md#key)
- [clearStorage](/docs/modules/_storage_helpers_.md#clearstorage)

### Custom logger example
```typescript
const storageConfig = {
 onError: (raisedError, ...rest) => {
   exampleCustomLogger.error(raisedError, { info: rest }),
 },
};

// In case of error `getStorageItem` returns null
// and the error is logged using the function provided in the config.
getStorageItem('user-conf', storageConfig);
```

___

### serialize

• `Optional` **serialize**: undefined \| (inputValue: T) => string

*Defined in [storage-helpers.ts:86](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L86)*

Converts the value provided to `string`,
defaults to [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Used by
- [setStorageItem](/docs/modules/_storage_helpers_.md#setstorageitem)

### Example
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

### validateHydrated

• `Optional` **validateHydrated**: undefined \| (hydrated: unknown) => unknown

*Defined in [storage-helpers.ts:154](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L154)*

Optional synchronous validation of the hydrated value retrieved by the storage:

a function that raises an exception if the retrieved value is
not valid.

Used by
- [getStorageItem](/docs/modules/_storage_helpers_.md#getstorageitem)

### Simple usage
```typescript
const storageConfig = {
  validateHydrated: (val: unknown) => {
    if(typeof val !== 'number' || !Number.isSafeInter(val)) {
      throw new TypeError("bad value");
    }
  }
};

const finiteIntNum = 'finite-int-num';

setStorageItem(finiteNum, {}, storageConfig); // persists value
getStorageItem(finiteNum, storageConfig); // Incorrect value returns null.
```

### Validation using yup
```typescript
const userSchema = yup.object().shape({
  name: yup.string().defined(),
  age: yup
    .number()
    .integer()
    .min(0)
    .defined(),
});

const config = {
  validate: val => userSchema.validateSync(val),
};

setStorageItem('user', { name: 'Tom', age: -1 }, config); // persists value
getStorageItem('user', config); // Incorrect value returns null.
```

___

### version

• `Optional` **version**: undefined \| string

*Defined in [storage-helpers.ts:178](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L178)*

Optional key versioning.

Used by
- [setStorageItem](/docs/modules/_storage_helpers_.md#setstorageitem)
- [getStorageItem](/docs/modules/_storage_helpers_.md#getstorageitem)
- [removeStorageItem](/docs/modules/_storage_helpers_.md#removestorageitem)

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
