---
title: "Breadcrumb"
description: ""
summary: ""
date: 2024-03-14T21:38:13+01:00
lastmod: 2024-03-14T21:38:13+01:00
draft: false
weight: 740
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

A set of links that can help a user understand and navigate a website hierarchy.

## Settings

No settings.

## Generated meta tag

Hyas SEO generates the following meta tag (if applicable, not homepage) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "item": "https://getdoks.org/",
      "name": "Welcome to Doks",
      "position": 1
    },
    {
      "@type": "ListItem",
      "item": "https://getdoks.org/docs/",
      "name": "Docs",
      "position": 2
    },
    {
      "@type": "ListItem",
      "item": "https://getdoks.org/docs/guides/",
      "name": "Guides",
      "position": 3
    },
    {
      "@type": "ListItem",
      "name": "Example Guide",
      "position": 4
    }
  ]
 }
 </script>
```

## Resources

- [Breadcrumb (`BreadcrumbList`) structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [breadcrumb](https://schema.org/breadcrumb)
- [BreadcrumbList](https://schema.org/BreadcrumbList)
