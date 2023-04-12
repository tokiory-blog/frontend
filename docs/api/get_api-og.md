# /api/og
Get Open Graph preview

## Params

**Required**:

- `title` : string*
- `url` : string*

**Optional**:

- `subtitle` : string
- `description` : string
- `gradient` : PreviewGradientColor

## Response
- Will return open graph preview image on success;
- Will return `400` code if there is missed required param.


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



