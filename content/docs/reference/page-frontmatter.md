---
title: "Page Frontmatter"
description: ""
summary: ""
date: 2026-04-02T08:27:29+02:00
lastmod: 2026-04-02T08:27:35+02:00
draft: false
weight: 930
toc: true
params:
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
    sitemap: false # true (default) or false
---

This reference guide describes the [SEO page frontmatter](/docs/start-here/customizing-seo/#update-page-frontmatter).

## Example

```md
---
title: "First Indexed Page"
description: ""
summary: ""
date: 2026-04-02T08:28:01+02:00
lastmod: 2026-04-02T08:28:01+02:00
draft: true
weight: 999
toc: true
params:
  sitemap_exclude: false
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
    structured_data:
      product:
        currency: USD
        price: 99
        availability: https://schema.org/OnlineOnly
---
```

## title

Custom title (optional)

## description

custom description (recommended)

## robots

custom robot tags (optional)

## structured_data.product

### currency

For example `USD`

### price

For example: `500`

### availability

For example: `https://schema.org/OnlineOnly`
