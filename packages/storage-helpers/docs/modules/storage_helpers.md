[storage-helpers](/packages/storage-helpers/docs/README.md) / [Exports](/packages/storage-helpers/docs/modules.md) / storage-helpers

# Module: storage-helpers

## Table of contents

### Interfaces

- [StorageConfig](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)
- [StorageLike](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md)

### Variables

- [NoopStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#noopstorage)

### Functions

- [clearStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#clearstorage)
- [getLocalStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#getlocalstorage)
- [getSessionStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#getsessionstorage)
- [getStorageItem](/packages/storage-helpers/docs/modules/storage_helpers.md#getstorageitem)
- [key](/packages/storage-helpers/docs/modules/storage_helpers.md#key)
- [normalizeStorageKey](/packages/storage-helpers/docs/modules/storage_helpers.md#normalizestoragekey)
- [removeStorageItem](/packages/storage-helpers/docs/modules/storage_helpers.md#removestorageitem)
- [setStorageItem](/packages/storage-helpers/docs/modules/storage_helpers.md#setstorageitem)

## Variables

### NoopStorage

• `Const` **NoopStorage**: *object*

A dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values:
- length is always `0`.
- `setItem` and `removeItem` and `clear` have no effect.
- `getItem` and `key` always return null.

### Usage
```typescript
 const noopStorage = NoopStorage.create();

noopStorage.setItem('key', '43');
noopStorage.getItem('key') // null
```

#### Type declaration:

Name | Type |
:------ | :------ |
`create` | () => [*StorageLike*](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md) |

Defined in: [storage-helpers.ts:322](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L322)

## Functions

### clearStorage

▸ **clearStorage**<T\>(`config?`: [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *void*

Erases all items inside the storage provided by an optional
[`config.getStorage`](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md#getstorage) or uses [getLocalStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#getlocalstorage).

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

**`see`** [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`config?` | [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *void*

Defined in: [storage-helpers.ts:520](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L520)

___

### getLocalStorage

▸ **getLocalStorage**(): [*StorageLike*](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md)

Returns [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
if present in the current environment
or a dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage).

**Returns:** [*StorageLike*](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:331](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L331)

___

### getSessionStorage

▸ **getSessionStorage**(): [*StorageLike*](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md)

Returns [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
if present in the current environment
or a dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage).

**Returns:** [*StorageLike*](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:342](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L342)

___

### getStorageItem

▸ **getStorageItem**<T\>(`key`: *string*, `config?`: [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\>): T \| *null*

Retrieves a value indexed by the input key to
an optional [`config.getStorage`](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md#getstorage) or uses [getLocalStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#getlocalstorage).

The item returned by the storage is hydrated using [`config.hydrate`](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md#hydrate) or defaults
to `JSON.parse`.

If [`config.validateHydrated`](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md#validatehydrated)

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
`config?` | [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** T \| *null*

Defined in: [storage-helpers.ts:362](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L362)

___

### key

▸ **key**<T\>(`index`: *number*, `config?`: [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *string* \| *null*

Given an input `n` returns the `nth` key of the storage provided in
[`config.getStorage`](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md#getstorage) or uses [getLocalStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#getlocalstorage).

Returns `null` if there's not a key at the requested position.

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`config?` | [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *string* \| *null*

Defined in: [storage-helpers.ts:495](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L495)

___

### normalizeStorageKey

▸ **normalizeStorageKey**<T\>(`key`: *unknown*, `config?`: [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *string*

Returns key, optionally enhanced with version and namespace, that is
used to index storage values.

Used by
- [setStorageItem](/packages/storage-helpers/docs/modules/storage_helpers.md#setstorageitem)
- [getStorageItem](/packages/storage-helpers/docs/modules/storage_helpers.md#getstorageitem)
- [removeStorageItem](/packages/storage-helpers/docs/modules/storage_helpers.md#removestorageitem)

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *unknown* |
`config?` | [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *string*

Defined in: [storage-helpers.ts:264](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L264)

___

### removeStorageItem

▸ **removeStorageItem**<T\>(`key`: *string*, `config?`: [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *void*

Removes an item indexed by `key` inside the storage provided by an optional
[`config.getStorage`](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md#getstorage) or uses [getLocalStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#getlocalstorage).

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
`config?` | [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *void*

Defined in: [storage-helpers.ts:470](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L470)

___

### setStorageItem

▸ **setStorageItem**<T\>(`key`: *string*, `value`: T, `config?`: [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\>): *void*

Adds the entry `key` -> `config.serialize(value)` inside a storage
provided by an optional
[`config.getStorage`](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md#getstorage) or
[getLocalStorage](/packages/storage-helpers/docs/modules/storage_helpers.md#getlocalstorage).

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
`config?` | [*StorageConfig*](/packages/storage-helpers/docs/interfaces/storage_helpers.storageconfig.md)<T\> |

**Returns:** *void*

Defined in: [storage-helpers.ts:439](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L439)
