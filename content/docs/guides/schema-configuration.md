---
title: "Schema Configuration"
description: ""
summary: ""
date: 2025-06-06T20:34:29+02:00
lastmod: 2025-06-06T20:34:29+02:00
draft: false
weight: 210
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

The Thulite SEO package applies different schemas based on your configuration and page context. The homepage gets Website and Organization/Person schemas, while content pages get BreadcrumbList and content-specific schemas based on their section. Make sure to test your implementation with Google's validation tools to ensure proper setup.

## Basic schema configuration

Add the following to your site configuration file:

```toml {title="config/_default/params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.schemas]
  # Required: Choose between "Organization" or "Person"
  type = "Organization"

  # Required: Name of your organization or person
  name = "Your Company Name"

  # Optional: Path to your logo (for Organization schema)
  logo = "images/logo.png"

  # Optional: Social profiles for sameAs property
  sameAs = [
    "https://twitter.com/yourhandle",
    "https://facebook.com/yourpage",
    "https://linkedin.com/company/yourcompany"
  ]

  # Optional: Images to include in schema
  images = ["images/featured.jpg"]

  # Define which content sections use specific schema types
  article = ["blog", "articles"]
  blogPosting = ["posts"]
  newsArticle = ["news"]
  product = ["products", "store"]
```

## Schema types and when they're applied

1. **Website Schema**: Applied to homepage automatically
2. **Organization/Person Schema**: Applied to homepage based on `type` setting
3. **BreadcrumbList Schema**: Applied to all pages except homepage
4. **Content-specific Schemas**: Applied based on section mappings

## Product schema configuration

For product pages, add structured data in the front matter:

```yaml
---
title: "Product Name"
description: "Product description"
seo:
  structured_data:
    product:
      currency: "USD"
      price: "99.99"
      availability: "https://schema.org/InStock"
---
```

## Testing your schemas

After configuration, validate your structured data using:

- [Google's Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
