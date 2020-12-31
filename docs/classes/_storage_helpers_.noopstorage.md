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

*Defined in [storage-helpers.ts:298](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L298)*

**Returns:** [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)

## Properties

### length

• `Readonly` **length**: number

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md).[length](/docs/interfaces/_storage_helpers_.storagelike.md#length)*

*Defined in [storage-helpers.ts:294](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L294)*

## Methods

### clear

▸ **clear**(): void

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:316](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L316)*

**Returns:** void

___

### getItem

▸ **getItem**(`key`: string): string \| null

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:312](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L312)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** string \| null

___

### key

▸ **key**(`index`: number): string \| null

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:321](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L321)*

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |

**Returns:** string \| null

___

### removeItem

▸ **removeItem**(`key`: string): void

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:318](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L318)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** void

___

### setItem

▸ **setItem**(`key`: string, `value`: string): void

*Implementation of [StorageLike](/docs/interfaces/_storage_helpers_.storagelike.md)*

*Defined in [storage-helpers.ts:310](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L310)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** void

___

### create

▸ `Static`**create**(): [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)

*Defined in [storage-helpers.ts:296](https://github.com/FaberVitale/storage-helpers/blob/main/src/storage-helpers.ts#L296)*

**Returns:** [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)
