# /api/search
Search for the content

## Params

**Required**:

- `type` : "article" | "tutorial" (*)
- `query` : string*

**Example**:

```json
{
  "type": "article",
  "query": "с"
}
```

## Response

- With the correct set of arguments, it will return the type of search and list of articles
- Return `400` if there's missing param in body

**Example**:
```json
{                                                                                                                                                                           16:01:28
  "type": "article",
  "posts": [
    {
    "_path": "/article/path-alias",
    "title": "Сокращение путей с помощью алиасов",
    "description": "В данной статье рассмотрим как с помощью алиасов сократить пути для импортов.",
    "tags": ["typescript", "web"],
    "publicationDate": "01 Apr 2023"
    },
    {
    "_path": "/article/satori-og",
    "title": "Автогенерация превью с помощью Satori",
    "description": "В данной статье рассказывается об автогенерации превью с помощью Satori. Satori - библиотека от Vercel, которая создана для того чтобы превращать HTML-верстку в SVG картинки. С помощью данной библиотеки мы будем динамически генерировать Open Graph превью для страниц. В данном блоге превью сделаны именно по этому принципу, так что вперед под кат :)\n",
    "tags": ["backend", "satori"],
    "publicationDate": "08 Apr 2023"
    }
  ]
}
```


## Plain response info
```yaml
GET: /api/og

# Params
title: string*
url: string*
subtitle: string
description: string
gradient: PreviewGradientColor

# Response codes
200: Image
400: Wrong query params
```
