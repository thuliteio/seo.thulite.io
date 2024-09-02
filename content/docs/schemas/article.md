---
title: "Article"
description: ""
summary: ""
date: 2024-03-14T21:38:24+01:00
lastmod: 2024-03-14T21:38:24+01:00
draft: false
weight: 750
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.

## Settings

You can set `article` in `config/_default/params.toml`:

```toml {title="params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Thulite" # Name of Organization or Person
    sameAs = ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"] # E.g. ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = ["blog"] # BlogPosting sections
    product = [] # Product sections
```

## Generated meta tag

Thulite SEO generates the following meta tag (if applicable) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
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
        "name": "Thulite",
        "url": "https://getdoks.org/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Thulite"
      }
    }
  ]
}
</script>
```

## Resources

- [Article (`Article`, `NewsArticle`, `BlogPosting`) structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Article](https://schema.org/Article)
