---
title: "Organization"
description: ""
summary: ""
date: 2024-03-14T21:37:51+01:00
lastmod: 2024-03-14T21:37:51+01:00
draft: false
weight: 720
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

An organization such as a school, NGO, corporation, club, etc.

## Settings

You can set `type`, `logo`, `name`, `sameAs`, and `images` in `config/_default/params.toml`:

```toml {title="params.toml"}
# SEO (@hyas/seo)
[seo]
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Thulite" # Name of Organization or Person
    sameAs = ["https://github.com/gethyas/hyas", "https://fosstodon.org/@hyas"] # E.g. ["https://github.com/gethyas/hyas", "https://fosstodon.org/@hyas"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = ["blog"] # BlogPosting sections
    product = [] # Product sections
```

## Generated meta tag

Thulite SEO generates the following meta tag (if applicable, homepage only) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "url": "https://thulite.io/",
      "name": "Thulite",
      "sameAs": [
        "https://github.com/gethyas/hyas",
        "https://fosstodon.org/@hyas"
      ],
      "image": [
        {
          "@id": "https://thulite.io/cover.png"
        }
      ],
      "logo": {
        "@id": "https://thulite.io/favicon-512x512.png"
      }
    }
  ]
}
</script>
```

## Resources

- [Organization](https://schema.org/Organization)
