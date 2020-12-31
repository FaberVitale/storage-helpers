> [Globals](/docs/globals.md) / "storage-helpers"

# Module: "storage-helpers"

## Index

### Classes

* [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)

### Interfaces

* [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)
* [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)

### Functions

* [clearStorage](/docs/modules/_storage_helpers_.md#clearstorage)
* [getLocalStorage](/docs/modules/_storage_helpers_.md#getlocalstorage)
* [getSessionStorage](/docs/modules/_storage_helpers_.md#getsessionstorage)
* [getStorageItem](/docs/modules/_storage_helpers_.md#getstorageitem)
* [key](/docs/modules/_storage_helpers_.md#key)
* [removeStorageItem](/docs/modules/_storage_helpers_.md#removestorageitem)
* [setStorageItem](/docs/modules/_storage_helpers_.md#setstorageitem)

## Functions

### clearStorage

▸ **clearStorage**<T\>(`config?`: [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\>): void

*Defined in [storage-helpers.ts:499](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L499)*

Erases all items inside the storage provided by an optional
[`config.getStorage`](/docs/interfaces/_storage_helpers_.storageconfig.md#getstorage) or uses [getLocalStorage](/docs/modules/_storage_helpers_.md#getlocalstorage).

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

**`see`** [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Type parameters:

Name | Default |
------ | ------ |
`T` | unknown |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`config?` | [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\> |   |

**Returns:** void

___

### getLocalStorage

▸ **getLocalStorage**(): [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)

*Defined in [storage-helpers.ts:270](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L270)*

Returns [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
if present in the current environment
or [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md), a dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values.

**Returns:** [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)

___

### getSessionStorage

▸ **getSessionStorage**(): [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)

*Defined in [storage-helpers.ts:281](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L281)*

Returns [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
if present in the current environment
or [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md), a dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values.

**Returns:** [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)

___

### getStorageItem

▸ **getStorageItem**<T\>(`key`: string, `config?`: [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\>): T \| null

*Defined in [storage-helpers.ts:341](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L341)*

Retrieves a value indexed by the input key to
an optional [`config.getStorage`](/docs/interfaces/_storage_helpers_.storageconfig.md#getstorage) or uses [getLocalStorage](/docs/modules/_storage_helpers_.md#getlocalstorage).

The item returned by the storage is hydrated using [`config.hydrate`](/docs/interfaces/_storage_helpers_.storageconfig.md#hydrate) or defaults
to `JSON.parse`.

If [`config.validateHydrated`](/docs/interfaces/_storage_helpers_.storageconfig.md#validatehydrated)

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

**`see`** [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string |  |
`config?` | [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\> |   |

**Returns:** T \| null

___

### key

▸ **key**<T\>(`index`: number, `config?`: [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\>): string \| null

*Defined in [storage-helpers.ts:474](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L474)*

Given an input `n` returns the `nth` key of the storage provided in
[`config.getStorage`](/docs/interfaces/_storage_helpers_.storageconfig.md#getstorage) or uses [getLocalStorage](/docs/modules/_storage_helpers_.md#getlocalstorage).

Returns `null` if there's not a key at the requested position.

#### Type parameters:

Name | Default |
------ | ------ |
`T` | unknown |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`index` | number |  |
`config?` | [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\> |   |

**Returns:** string \| null

___

### removeStorageItem

▸ **removeStorageItem**<T\>(`key`: string, `config?`: [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\>): void

*Defined in [storage-helpers.ts:449](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L449)*

Removes an item indexed by `key` inside the storage provided by an optional
[`config.getStorage`](/docs/interfaces/_storage_helpers_.storageconfig.md#getstorage) or uses [getLocalStorage](/docs/modules/_storage_helpers_.md#getlocalstorage).

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

**`see`** [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Type parameters:

Name | Default |
------ | ------ |
`T` | unknown |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string |  |
`config?` | [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\> |   |

**Returns:** void

___

### setStorageItem

▸ **setStorageItem**<T\>(`key`: string, `value`: T, `config?`: [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\>): void

*Defined in [storage-helpers.ts:418](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L418)*

Adds the entry `key` -> `config.serialize(value)` inside a storage
provided by an optional
[`config.getStorage`](/docs/interfaces/_storage_helpers_.storageconfig.md#getstorage) or
[getLocalStorage](/docs/modules/_storage_helpers_.md#getlocalstorage).

### Simple usage
```ts
// Adds the entry `'user-conf' -> '{"colorScheme":"dark","locale":"es-ES"}'`
// to `localStorage`
setStorageItem("user-conf", { colorScheme: "dark", locale: 'es-ES' });
```

### Custom serialization/hydration
```ts
const userConfKey = 'user-conf';
const storageConfig = {
 hydrate: val => JSON.parse(atob(val)),
 serialize: val => btoa(JSON.stringify(val))},
};

// Stores the object using a custom serialization.
setStorageItem(userConfKey,
  { colorScheme: "dark", locale: 'es-ES' },
  storageConfig
);

// Returns `{ colorScheme: "dark", locale: 'es-ES' }`
getStorageItems(userConfKey, storageConfig);
```

### Key namespace and version
```typescript
const storageConfig = { version: "v1", namespace: "tracking" };

// persists on `localStorage` the entry `[tracking]user@v1` -> `{"name":"Mark"}`
setStorageItem("user", { name: "Mark" }, storageConfig);

// returns `{"name":"Mark"}`
getStorageItem("user", storageConfig);
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string |  |
`value` | T |  |
`config?` | [StorageConfig](/docs/interfaces/_storage_helpers_.storageconfig.md)<T\> |   |

**Returns:** void
