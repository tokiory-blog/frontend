[station](../README.md) / [Modules](../modules.md) / composables/useContentNavigation

# Module: composables/useContentNavigation

## Table of contents

### Functions

- [useContentNavigation](composables_useContentNavigation.md#usecontentnavigation)

## Functions

### useContentNavigation

▸ **useContentNavigation**(`content`, `levels`): `Ref`<`HeadingItem`[]\>

Consumes Markdown Content and returns the headlines of the desired level

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `MarkdownRoot` | Markdown content body |
| `levels` | `TitleLevel`[] | Possible levels of headings |

#### Returns

`Ref`<`HeadingItem`[]\>

Titles navigation list

#### Defined in

[composables/useContentNavigation.ts:116](https://github.com/kiotosi/station/blob/cfb6b0e/composables/useContentNavigation.ts#L116)
