---
title : "Improve your search rankings"
description: "SEO for Thulite websites. Simple setup. Sensible defaults."
lead: "SEO for Thulite websites. Simple setup. Sensible defaults."
date: 2023-09-07T16:33:54+02:00
lastmod: 2026-03-23T15:12:34+01:00
draft: false
seo:
  title: "Thulite SEO — Improve your search rankings" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

```toml {title="params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.title]
    separator = "—"
    suffix = ""
  [seo.description]
    summaryFallback = "" # "" (default)
  [seo.description.length]
    errorlevel = "warning" # warning (default), error, or ignore
    min = 110
    max = 160
  [seo.favicons]
    icon = "favicon.png" # favicon.png (default)
    svgIcon = "favicon.svg" # favicon.svg (default)
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Thulite" # Name of Organization or Person
    sameAs = ["https://github.com/thuliteio/thulite", "https://x.com/thuliteio", "https://fosstodon.org/@thulite"] # E.g. ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = [] # BlogPosting sections
    product = [] # Product sections
```
