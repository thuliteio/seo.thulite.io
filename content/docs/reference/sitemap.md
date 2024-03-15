---
title: "Sitemap"
description: ""
summary: ""
date: 2024-03-14T21:59:01+01:00
lastmod: 2024-03-14T21:59:01+01:00
draft: false
weight: 940
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

This reference guide describes the [Sitemap settings](/docs/built-ins/sitemap/).

## Settings

### changefreq

How frequently a page is likely to change. Valid values are `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, and `never`. Default is `""` (change frequency omitted from rendered sitemap).

### filename

The name of the generated file. Default is `sitemap.xml`.

### priority

The priority of a page relative to any other page on the site. Valid values range from 0.0 to 1.0. Default is `-1` (priority omitted from rendered sitemap).
