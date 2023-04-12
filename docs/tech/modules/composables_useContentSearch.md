[station](../README.md) / [Modules](../modules.md) / composables/useContentSearch

# Module: composables/useContentSearch

## Table of contents

### Functions

- [useContentSearch](composables_useContentSearch.md#usecontentsearch)

## Functions

### useContentSearch

▸ **useContentSearch**(`type`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ContentType`](types_post_types.md#contenttype) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isLoading` | `Ref`<`boolean`\> |
| `searchInput` | `Ref`<`string`\> |
| `searchResult` | `Ref`<{ `_path?`: `string` ; `banner`: `string` ; `description`: `string` ; `publicationDate`: `string` ; `tags`: `string`[] ; `title`: `string`  }[]\> |

#### Defined in

[composables/useContentSearch.ts:4](https://github.com/kiotosi/station/blob/cfb6b0e/composables/useContentSearch.ts#L4)
