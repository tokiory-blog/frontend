---
description: Search for tutorials and articles
---

# Content Search

{% swagger method="post" path="/api/search" baseUrl="https://yikiotsi.vercel.app" summary="Search for articles and tutorials" expanded="true" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="type" type=""tutorial" | "article"" required="true" %}
Where to search [`ContentType`]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="query" type="string" required="true" %}
Search query
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="List of content" %}
```
{
    type: "article" // Or "tutorial"
    posts: [] // List of articles with type Post
}
```
{% endswagger-response %}
{% endswagger %}
