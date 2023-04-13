[station](../README.md) / [Modules](../modules.md) / utils/fontPath

# Module: utils/fontPath

## Table of contents

### Functions

- [getFontPath](utils_fontPath.md#getfontpath)
- [getFontUrl](utils_fontPath.md#getfonturl)

## Functions

### getFontPath

▸ **getFontPath**(`type`, `fw`): `string`

Get relative path of a font

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Fonts`](types_fonts_types.md#fonts) | Font type |
| `fw` | [`FontWeight`](types_fonts_types.md#fontweight) | Font weight |

#### Returns

`string`

Relative font path

#### Defined in

[utils/fontPath.ts:10](https://github.com/kiotosi/station/blob/4059bc9/utils/fontPath.ts#L10)

___

### getFontUrl

▸ **getFontUrl**(`type`, `fw`): `string`

Get absolute URL of a font

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Fonts`](types_fonts_types.md#fonts) | Font type |
| `fw` | [`FontWeight`](types_fonts_types.md#fontweight) | Font weight |

#### Returns

`string`

Absolute url for the font

#### Defined in

[utils/fontPath.ts:31](https://github.com/kiotosi/station/blob/4059bc9/utils/fontPath.ts#L31)
