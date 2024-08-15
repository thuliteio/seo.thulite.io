---
title: "WebSite"
description: ""
summary: ""
date: 2024-03-14T21:35:11+01:00
lastmod: 2024-03-14T21:35:11+01:00
draft: false
weight: 710
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

A `WebSite` is a set of related web pages and other items typically served from a single web domain and accessible via URLs.

## Settings

You can set `title` and `description` in `config/_default/params.toml`:

```toml {title="params.toml"}
# Hugo
title = "My Docs"
description = "Congrats on setting up a new Doks project!"
```

## Generated meta tag

Thulite SEO generates the following meta tag (homepage only) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "url": "https://getdoks.org/",
      "name": "My Docs",
      "description": "Congrats on setting up a new Doks project!"
    }
  ]
}
</script>
```

## Resources

- [WebSite](https://schema.org/WebSite)
