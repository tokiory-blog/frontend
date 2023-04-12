[station](../README.md) / [Modules](../modules.md) / types/preview.types

# Module: types/preview.types

## Table of contents

### Interfaces

- [PreviewTemplate](../interfaces/types_preview_types.PreviewTemplate.md)

### Type Aliases

- [PreviewGradientColor](types_preview_types.md#previewgradientcolor)

### Variables

- [previewTemplateSchema](types_preview_types.md#previewtemplateschema)

## Type Aliases

### PreviewGradientColor

Ƭ **PreviewGradientColor**: ``"pink"`` \| ``"red"`` \| ``"green"`` \| ``"blue"`` \| ``"rainbow"`` \| ``"yellow"`` \| ``"orange"`` \| ``"purple"`` \| ``"black"``

#### Defined in

[types/preview.types.ts:3](https://github.com/kiotosi/station/blob/cfb6b0e/types/preview.types.ts#L3)

## Variables

### previewTemplateSchema

• `Const` **previewTemplateSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `ZodOptional`<`ZodString`\> |
| `gradient` | `ZodOptional`<`ZodString`\> |
| `subtitle` | `ZodOptional`<`ZodString`\> |
| `title` | `ZodString` |
| `url` | `ZodString` |

#### Defined in

[types/preview.types.ts:21](https://github.com/kiotosi/station/blob/cfb6b0e/types/preview.types.ts#L21)
