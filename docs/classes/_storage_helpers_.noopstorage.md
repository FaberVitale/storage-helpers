> [Globals](/docs/globals.md) / ["storage-helpers"](/docs/modules/_storage_helpers_.md) / NoopStorage

# Class: NoopStorage

A dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values:
- length is always `0`.
- `setItem` and `removeItem` and `clear` have no effect.
- `getItem` and `key` always return null.

## Hierarchy

* **NoopStorage**

## Implements

* [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)

## Index

### Constructors

* [constructor](/docs/classes/_storage_helpers_.noopstorage.md#constructor)

### Properties

* [length](/docs/classes/_storage_helpers_.noopstorage.md#length)

### Methods

* [clear](/docs/classes/_storage_helpers_.noopstorage.md#clear)
* [getItem](/docs/classes/_storage_helpers_.noopstorage.md#getitem)
* [key](/docs/classes/_storage_helpers_.noopstorage.md#key)
* [removeItem](/docs/classes/_storage_helpers_.noopstorage.md#removeitem)
* [setItem](/docs/classes/_storage_helpers_.noopstorage.md#setitem)
* [create](/docs/classes/_storage_helpers_.noopstorage.md#create)

## Constructors

### constructor

\+ **new NoopStorage**(): [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)

*Defined in [storage-helpers.ts:185](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L185)*

**Returns:** [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)

## Properties

### length

• `Readonly` **length**: number

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md).[length](/docs/interfaces/_storage_helpers_.storagelike.md#length)*

*Defined in [storage-helpers.ts:181](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L181)*

## Methods

### clear

▸ **clear**(): void

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:203](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L203)*

**Returns:** void

___

### getItem

▸ **getItem**(`key`: string): string \| null

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:199](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L199)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** string \| null

___

### key

▸ **key**(`index`: number): string \| null

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:208](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L208)*

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |

**Returns:** string \| null

___

### removeItem

▸ **removeItem**(`key`: string): void

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:205](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L205)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** void

___

### setItem

▸ **setItem**(`key`: string, `value`: string): void

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:197](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L197)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** void

___

### create

▸ `Static`**create**(): [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)

*Defined in [storage-helpers.ts:183](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L183)*

**Returns:** [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)
