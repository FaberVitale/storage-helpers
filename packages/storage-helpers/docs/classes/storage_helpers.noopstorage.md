[storage-helpers](/docs/README.md) / [Exports](/docs/modules.md) / [storage-helpers](/docs/modules/storage_helpers.md) / NoopStorage

# Class: NoopStorage

[storage-helpers](/docs/modules/storage_helpers.md).NoopStorage

A dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values:
- length is always `0`.
- `setItem` and `removeItem` and `clear` have no effect.
- `getItem` and `key` always return null.

## Implements

* [*StorageLike*](/docs/interfaces/storage_helpers.storagelike.md)

## Table of contents

### Constructors

- [constructor](/docs/classes/storage_helpers.noopstorage.md#constructor)

### Properties

- [length](/docs/classes/storage_helpers.noopstorage.md#length)

### Methods

- [clear](/docs/classes/storage_helpers.noopstorage.md#clear)
- [getItem](/docs/classes/storage_helpers.noopstorage.md#getitem)
- [key](/docs/classes/storage_helpers.noopstorage.md#key)
- [removeItem](/docs/classes/storage_helpers.noopstorage.md#removeitem)
- [setItem](/docs/classes/storage_helpers.noopstorage.md#setitem)
- [create](/docs/classes/storage_helpers.noopstorage.md#create)

## Constructors

### constructor

\+ **new NoopStorage**(): [*NoopStorage*](/docs/classes/storage_helpers.noopstorage.md)

**Returns:** [*NoopStorage*](/docs/classes/storage_helpers.noopstorage.md)

Defined in: [storage-helpers.ts:298](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L298)

## Properties

### length

• `Readonly` **length**: *number*

Implementation of: [StorageLike](/docs/interfaces/storage_helpers.storagelike.md).[length](/docs/interfaces/storage_helpers.storagelike.md#length)

Defined in: [storage-helpers.ts:294](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L294)

## Methods

### clear

▸ **clear**(): *void*

**Returns:** *void*

Implementation of: [StorageLike](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:316](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L316)

___

### getItem

▸ **getItem**(`key`: *string*): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *null* \| *string*

Implementation of: [StorageLike](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:312](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L312)

___

### key

▸ **key**(`index`: *number*): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** *null* \| *string*

Implementation of: [StorageLike](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:321](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L321)

___

### removeItem

▸ **removeItem**(`key`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *void*

Implementation of: [StorageLike](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:318](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L318)

___

### setItem

▸ **setItem**(`key`: *string*, `value`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | *string* |

**Returns:** *void*

Implementation of: [StorageLike](/docs/interfaces/storage_helpers.storagelike.md)

Defined in: [storage-helpers.ts:310](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L310)

___

### create

▸ `Static`**create**(): [*NoopStorage*](/docs/classes/storage_helpers.noopstorage.md)

**Returns:** [*NoopStorage*](/docs/classes/storage_helpers.noopstorage.md)

Defined in: [storage-helpers.ts:296](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L296)
