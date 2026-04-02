---
title: "Settings"
description: ""
summary: ""
date: 2024-03-15T15:45:35+01:00
lastmod: 2024-03-15T15:45:35+01:00
draft: false
weight: 910
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

This reference guide describes the [SEO settings](/docs/start-here/customizing-seo/#update-settings) and the [Sitemap settings](/docs/built-ins/sitemap/).

## Example

```toml {title="config/_default/hugo.toml"}
title = "Thulite"
enableRobotsTXT = true

[sitemap]
  changefreq = "monthly"
  disable = false
  filename = "sitemap.xml"
  priority = 0.5
```

## title

A string containing the website's title — for example `"Thulite"`

## enableRobotsTXT

A boolean — for example `true` (default).

## sitemap

### changefreq

How frequently a page is likely to change. Valid values are `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, and `never`. Default is `""` (change frequency omitted from rendered sitemap).

### filename

The name of the generated file. Default is `sitemap.xml`.

### priority

The priority of a page relative to any other page on the site. Valid values range from 0.0 to 1.0. Default is `-1` (priority omitted from rendered sitemap).
