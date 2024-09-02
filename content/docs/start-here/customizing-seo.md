---
title: "Customizing SEO"
description: ""
summary: ""
date: 2024-03-15T15:25:08+01:00
lastmod: 2024-03-15T15:25:08+01:00
draft: false
weight: 130
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

You can customize Thulite SEO by updating settings, parameters, and page frontmatter.

## Update settings

Update [settings](/docs/reference/settings/) in `./config/_default/hugo.toml`:

```toml
title = "Thulite"
enableRobotsTXT = true
```

## Update parameters

Update [parameters](/docs/reference/parameters/) in `./config/_default/params.toml`:

```toml {title=params.toml}
# Hugo
title = "Thulite"
description = "Congrats on setting up a new Doks project!"
images = ["cover.png"]

[social]
  twitter = "getdoks"
  facebook_admin = ""

# SEO (@thulite/seo)
[seo]
  [seo.title]
    separator = "" # "|" (default)
    suffix = "" # title hugo.toml (default)
  [seo.favicons]
    icon = "favicon.png" # favicon.png (default)
    svgIcon = "favicon.svg" # favicon.svg (default)
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Thulite" # Name of Organization or Person
    sameAs = [] # E.g. ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = ["blog"] # BlogPosting sections
    product = [] # Product sections
```

## Update page frontmatter

Update [page frontmatter](/docs/reference/page-frontmatter/):

```yml
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
  structured_data:
    product:
      currency: USD
      price: 500
      availability: https://schema.org/OnlineOnly
```
