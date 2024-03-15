---
title: "BlogPosting"
description: ""
summary: ""
date: 2024-03-14T21:38:52+01:00
lastmod: 2024-03-14T21:38:52+01:00
draft: false
weight: 770
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

A blog post.

## Settings

You can set `blogPosting` in `config/_default/params.toml`:

```toml {title="params.toml"}
# SEO (@hyas/seo)
[seo]
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Hyas" # Name of Organization or Person
    sameAs = ["https://github.com/gethyas/hyas", "https://fosstodon.org/@hyas"] # E.g. ["https://github.com/gethyas/hyas", "https://fosstodon.org/@hyas"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = ["blog"] # BlogPosting sections
    product = [] # Product sections
```

## Generated meta tag

Hyas SEO generates the following meta tag (if applicable) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Example Post",
      "description": "Just an example post.",
      "isPartOf": {
        "@id": "https://getdoks.org/blog/example-post/"
      },
      "mainEntityOfPage": {
        "@id": "https://getdoks.org/blog/example-post/"
      },
      "datePublished": "2023-09-07T16:27:22+02:00",
      "dateModified": "2023-09-07T16:27:22+02:00",
      "author": {
        "@type": "Organization",
        "name": "Hyas",
        "url": "https://getdoks.org/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hyas"
      }
    }
  ]
}
</script>
```

## Resources

- [Article (`Article`, `NewsArticle`, `BlogPosting`) structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [BlogPosting](https://schema.org/BlogPosting)
