[storage-helpers](/docs/README.md) / [Exports](/docs/modules.md) / [storage-helpers](/docs/modules/storage_helpers.md) / StorageConfig

# Interface: StorageConfig<T\>

[storage-helpers](/docs/modules/storage_helpers.md).StorageConfig

An optional configuration argument of all the helper functions
of [storage-helpers](https://github.com/FaberVitale/storage-helpers) that enables to set:
1. The way data is serialized and hydrated.
2. Which storage is used.
3. key version and namespace.
4. How to handle exceptions.
5. Validation for hydrated data.

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [namespace](/docs/interfaces/storage_helpers.storageconfig.md#namespace)
- [version](/docs/interfaces/storage_helpers.storageconfig.md#version)

### Methods

- [getStorage](/docs/interfaces/storage_helpers.storageconfig.md#getstorage)
- [hydrate](/docs/interfaces/storage_helpers.storageconfig.md#hydrate)
- [onError](/docs/interfaces/storage_helpers.storageconfig.md#onerror)
- [serialize](/docs/interfaces/storage_helpers.storageconfig.md#serialize)
- [validateHydrated](/docs/interfaces/storage_helpers.storageconfig.md#validatehydrated)

## Properties

### namespace

• `Optional` **namespace**: *string*

Optional key namespace that can be added to minimize storage key collisions.

Used by
- [setStorageItem](/docs/modules/storage_helpers.md#setstorageitem)
- [getStorageItem](/docs/modules/storage_helpers.md#getstorageitem)
- [removeStorageItem](/docs/modules/storage_helpers.md#removestorageitem)

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

Defined in: [storage-helpers.ts:202](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L202)

___

### version

• `Optional` **version**: *string* \| *number*

Optional key versioning.

Used by
- [setStorageItem](/docs/modules/storage_helpers.md#setstorageitem)
- [getStorageItem](/docs/modules/storage_helpers.md#getstorageitem)
- [removeStorageItem](/docs/modules/storage_helpers.md#removestorageitem)

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

Defined in: [storage-helpers.ts:178](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L178)

## Methods

### getStorage

▸ `Optional`**getStorage**(`key`: *string*, `version`: *undefined* \| *string* \| *number*): [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

`storage` provider, defaults to [getLocalStorage](/docs/modules/storage_helpers.md#getlocalstorage)

Used by
- [setStorageItem](/docs/modules/storage_helpers.md#setstorageitem)
- [getStorageItem](/docs/modules/storage_helpers.md#getstorageitem)
- [removeStorageItem](/docs/modules/storage_helpers.md#removestorageitem)
- [key](/docs/modules/storage_helpers.md#key)
- [clearStorage](/docs/modules/storage_helpers.md#clearstorage)

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`version` | *undefined* \| *string* \| *number* |

**Returns:** [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:34](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L34)

▸ `Optional`**getStorage**(): [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

**Returns:** [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:35](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L35)

___

### hydrate

▸ `Optional`**hydrate**(`serialized`: *string*): T

Deserializes the value acquired from the local storage,
defaults to [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Used by
- [getStorageItem](/docs/modules/storage_helpers.md#getstorageitem)

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

#### Parameters:

Name | Type |
:------ | :------ |
`serialized` | *string* |

**Returns:** T

Defined in: [storage-helpers.ts:108](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L108)

___

### onError

▸ `Optional`**onError**(`raisedError`: *unknown*, `config`: *undefined* \| [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\>, `key?`: *string*): *void*

An optional error handler,
defaults to `console.error`.

Used by
- [setStorageItem](/docs/modules/storage_helpers.md#setstorageitem)
- [getStorageItem](/docs/modules/storage_helpers.md#getstorageitem)
- [removeStorageItem](/docs/modules/storage_helpers.md#removestorageitem)
- [key](/docs/modules/storage_helpers.md#key)
- [clearStorage](/docs/modules/storage_helpers.md#clearstorage)

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

#### Parameters:

Name | Type |
:------ | :------ |
`raisedError` | *unknown* |
`config` | *undefined* \| [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\> |
`key?` | *string* |

**Returns:** *void*

Defined in: [storage-helpers.ts:60](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L60)

___

### serialize

▸ `Optional`**serialize**(`inputValue`: T): *string*

Converts the value provided to `string`,
defaults to [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Used by
- [setStorageItem](/docs/modules/storage_helpers.md#setstorageitem)

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

#### Parameters:

Name | Type |
:------ | :------ |
`inputValue` | T |

**Returns:** *string*

Defined in: [storage-helpers.ts:86](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L86)

___

### validateHydrated

▸ `Optional`**validateHydrated**(`hydrated`: *unknown*): *unknown*

Optional synchronous validation of the hydrated value retrieved by the storage:

a function that raises an exception if the retrieved value is
not valid.

Used by
- [getStorageItem](/docs/modules/storage_helpers.md#getstorageitem)

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

#### Parameters:

Name | Type |
:------ | :------ |
`hydrated` | *unknown* |

**Returns:** *unknown*

Defined in: [storage-helpers.ts:154](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L154)
