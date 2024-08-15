---
title: "Sitemap"
description: ""
summary: ""
date: 2024-03-14T21:04:10+01:00
lastmod: 2024-03-14T21:04:10+01:00
draft: false
weight: 650
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

A sitemap is a list of pages of a website. Structured listings of a site's pages help with search engine optimization, providing a link for web crawlers such as search engines to follow.

## Settings

Set the default values for [change frequency](https://www.sitemaps.org/protocol.html#changefreqdef) and [priority](https://www.sitemaps.org/protocol.html#priority), and the name of the generated file, in `config/_default/hugo.toml`.

See the [Sitemap reference page](/docs/reference/sitemap/) for all available values.

```toml {title="hugo.toml"}
[sitemap]
  changefreq = "monthly"
  filename = "sitemap.xml"
  priority = 0.5
```

## Generated files

Thulite SEO generates the following `sitemap.xml` — for example:

```xml {title="sitemap.xml"}
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <sitemap>
      <loc>https://seo.thulite.io/en/sitemap.xml</loc>
      <lastmod>2023-09-07T17:19:07+02:00</lastmod>
   </sitemap>
   <sitemap>
      <loc>https://seo.thulite.io/de/sitemap.xml</loc>
      <lastmod>2023-09-07T16:04:48+02:00</lastmod>
   </sitemap>
   <sitemap>
      <loc>https://seo.thulite.io/nl/sitemap.xml</loc>
   </sitemap>
</sitemapindex>
```

## Resources

- [Sitemap templates](https://gohugo.io/templates/sitemap-template/)
