[storage-helpers](/packages/storage-helpers/docs/README.md) / [Exports](/packages/storage-helpers/docs/modules.md) / [storage-helpers](/packages/storage-helpers/docs/modules/storage_helpers.md) / StorageLike

# Interface: StorageLike

[storage-helpers](/packages/storage-helpers/docs/modules/storage_helpers.md).StorageLike

An equivalent to `lib.dom.d.ts` Storage

**`see`** [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

## Table of contents

### Properties

- [length](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md#length)

### Methods

- [clear](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md#clear)
- [getItem](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md#getitem)
- [key](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md#key)
- [removeItem](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md#removeitem)
- [setItem](/packages/storage-helpers/docs/interfaces/storage_helpers.storagelike.md#setitem)

## Properties

### length

• `Readonly` **length**: *number*

Defined in: [storage-helpers.ts:11](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L11)

## Methods

### clear

▸ **clear**(): *void*

**Returns:** *void*

Defined in: [storage-helpers.ts:10](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L10)

___

### getItem

▸ **getItem**(`key`: *string*): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *null* \| *string*

Defined in: [storage-helpers.ts:7](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L7)

___

### key

▸ **key**(`index`: *number*): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** *null* \| *string*

Defined in: [storage-helpers.ts:9](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L9)

___

### removeItem

▸ **removeItem**(`key`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *void*

Defined in: [storage-helpers.ts:8](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L8)

___

### setItem

▸ **setItem**(`key`: *string*, `value`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | *string* |

**Returns:** *void*

Defined in: [storage-helpers.ts:6](https://github.com/FaberVitale/storage-helpers/blob/main/packages/storage-helpers/src/storage-helpers.ts#L6)
