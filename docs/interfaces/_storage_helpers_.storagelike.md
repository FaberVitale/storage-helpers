> [Globals](/docs/globals.md) / ["storage-helpers"](/docs/modules/_storage_helpers_.md) / StorageLike

# Interface: StorageLike

An equivalent to `lib.dom.d.ts` Storage

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

## Hierarchy

* **StorageLike**

## Implemented by

* [NoopStorage](/docs/classes/_storage_helpers_.noopstorage.md)

## Index

### Properties

* [length](/docs/interfaces/_storage_helpers_.storagelike.md#length)

### Methods

* [clear](/docs/interfaces/_storage_helpers_.storagelike.md#clear)
* [getItem](/docs/interfaces/_storage_helpers_.storagelike.md#getitem)
* [key](/docs/interfaces/_storage_helpers_.storagelike.md#key)
* [removeItem](/docs/interfaces/_storage_helpers_.storagelike.md#removeitem)
* [setItem](/docs/interfaces/_storage_helpers_.storagelike.md#setitem)

## Properties

### length

• `Readonly` **length**: number

*Defined in [storage-helpers.ts:11](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L11)*

## Methods

### clear

▸ **clear**(): void

*Defined in [storage-helpers.ts:10](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L10)*

**Returns:** void

___

### getItem

▸ **getItem**(`key`: string): string \| null

*Defined in [storage-helpers.ts:7](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** string \| null

___

### key

▸ **key**(`index`: number): string \| null

*Defined in [storage-helpers.ts:9](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |

**Returns:** string \| null

___

### removeItem

▸ **removeItem**(`key`: string): void

*Defined in [storage-helpers.ts:8](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L8)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** void

___

### setItem

▸ **setItem**(`key`: string, `value`: string): void

*Defined in [storage-helpers.ts:6](https://github.com/FaberVitale/storage-helpers/blob/e0cd7bb/src/storage-helpers.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** void
