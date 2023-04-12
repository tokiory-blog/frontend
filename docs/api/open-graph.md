---
description: Open graph preview generation
---

# Open Graph

{% swagger method="get" path="/api/og" baseUrl="https://yikiotso.vercel.app" summary="Get Open Graph preview" %}
{% swagger-description %}
Generates open graph dynamic preview with query parameters
{% endswagger-description %}

{% swagger-parameter in="query" name="title" type="string" required="true" %}
Title, that displayed on the preview
{% endswagger-parameter %}

{% swagger-parameter in="query" name="url" required="true" type="string" %}
Url, that displayed on the preview
{% endswagger-parameter %}

{% swagger-parameter in="query" name="subtitle" type="string" %}
Subtitle, that displayed on the preview
{% endswagger-parameter %}

{% swagger-parameter in="query" name="description" type="string" %}
Description, that displayed on the preview
{% endswagger-parameter %}

{% swagger-parameter in="query" name="gradient" type="PreviewGradientColor" %}
Color of the gradient
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Image" %}

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Wrong query params" %}

{% endswagger-response %}
{% endswagger %}
