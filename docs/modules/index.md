[storage-helpers](/docs/README.md) / [Exports](/docs/modules.md) / index

# Module: index

## Table of contents

### Classes

- [NoopStorage](/docs/classes/index.noopstorage.md)

### Interfaces

- [StorageConfig](/docs/interfaces/index.storageconfig.md)
- [StorageLike](/docs/interfaces/index.storagelike.md)

### Functions

- [clearStorage](/docs/modules/index.md#clearstorage)
- [getLocalStorage](/docs/modules/index.md#getlocalstorage)
- [getSessionStorage](/docs/modules/index.md#getsessionstorage)
- [getStorageItem](/docs/modules/index.md#getstorageitem)
- [key](/docs/modules/index.md#key)
- [removeStorageItem](/docs/modules/index.md#removestorageitem)
- [setStorageItem](/docs/modules/index.md#setstorageitem)

## Functions

### clearStorage

▸ **clearStorage**<T\>(`config?`: [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *void*

Erases all items inside the storage provided by an optional
[`config.getStorage`](/docs/interfaces/index.storageconfig.md#getstorage) or uses [getLocalStorage](/docs/modules/index.md#getlocalstorage).

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

**`see`** [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`config?` | [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *void*

Defined in: [storage-helpers.ts:499](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L499)

___

### getLocalStorage

▸ **getLocalStorage**(): [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

Returns [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
if present in the current environment
or [NoopStorage](/docs/classes/index.noopstorage.md), a dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values.

**Returns:** [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:270](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L270)

___

### getSessionStorage

▸ **getSessionStorage**(): [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

Returns [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
if present in the current environment
or [NoopStorage](/docs/classes/index.noopstorage.md), a dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values.

**Returns:** [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:281](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L281)

___

### getStorageItem

▸ **getStorageItem**<T\>(`key`: *string*, `config?`: [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\>): T \| *null*

Retrieves a value indexed by the input key to
an optional [`config.getStorage`](/docs/interfaces/index.storageconfig.md#getstorage) or uses [getLocalStorage](/docs/modules/index.md#getlocalstorage).

The item returned by the storage is hydrated using [`config.hydrate`](/docs/interfaces/index.storageconfig.md#hydrate) or defaults
to `JSON.parse`.

If [`config.validateHydrated`](/docs/interfaces/index.storageconfig.md#validatehydrated)

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

**`see`** [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`config?` | [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** T \| *null*

Defined in: [storage-helpers.ts:341](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L341)

___

### key

▸ **key**<T\>(`index`: *number*, `config?`: [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *string* \| *null*

Given an input `n` returns the `nth` key of the storage provided in
[`config.getStorage`](/docs/interfaces/index.storageconfig.md#getstorage) or uses [getLocalStorage](/docs/modules/index.md#getlocalstorage).

Returns `null` if there's not a key at the requested position.

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`config?` | [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *string* \| *null*

Defined in: [storage-helpers.ts:474](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L474)

___

### removeStorageItem

▸ **removeStorageItem**<T\>(`key`: *string*, `config?`: [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *void*

Removes an item indexed by `key` inside the storage provided by an optional
[`config.getStorage`](/docs/interfaces/index.storageconfig.md#getstorage) or uses [getLocalStorage](/docs/modules/index.md#getlocalstorage).

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

**`see`** [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`config?` | [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *void*

Defined in: [storage-helpers.ts:449](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L449)

___

### setStorageItem

▸ **setStorageItem**<T\>(`key`: *string*, `value`: T, `config?`: [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *void*

Adds the entry `key` -> `config.serialize(value)` inside a storage
provided by an optional
[`config.getStorage`](/docs/interfaces/index.storageconfig.md#getstorage) or
[getLocalStorage](/docs/modules/index.md#getlocalstorage).

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
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | T |
`config?` | [*StorageConfig*](/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *void*

Defined in: [storage-helpers.ts:418](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L418)
