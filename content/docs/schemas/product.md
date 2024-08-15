---
title: "Product"
description: ""
summary: ""
date: 2024-03-14T21:39:05+01:00
lastmod: 2024-03-14T21:39:05+01:00
draft: false
weight: 780
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.

## Settings

You can set `product` in `config/_default/params.toml`:

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
    product = ["themes"] # Product sections
```

You can set `currency`, `price`, and `availability` in the frontmatter of a page:

```md
---
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
  structured_data:
    product:
      currency: USD
      price: 0
      availability: https://schema.org/OnlineOnly
---
```

## Generated meta tag

Thulite SEO generates the following meta tag (if applicable) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "Doks",
      "description": "Doks theme for Thulite sites.",
      "brand": {
        "@type": "Brand",
        "name": "Thulite"
      },
      "image": [
        {
          "@id": "https://thulite.io/themes/doks/featured-doks.png"
        }
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://thulite.io/themes/doks/",
        "priceCurrency": "USD",
        "price": "0",
        "availability": "https://schema.org/OnlineOnly"
      }
    }
  ]
}
</script>
```

## Resources

- [Product (`Product`, `Review`, `Offer`) structured data](https://developers.google.com/search/docs/appearance/structured-data/product)
- [Product](https://schema.org/Product)
