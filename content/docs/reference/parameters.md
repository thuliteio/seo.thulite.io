---
title: "Parameters"
description: ""
summary: ""
date: 2024-03-15T15:45:42+01:00
lastmod: 2024-03-15T15:45:42+01:00
draft: false
weight: 920
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

This reference guide describes the [SEO parameters](/docs/start-here/customizing-seo/#update-parameters).

## Example

```toml {title="config/_default/params.toml"}
# Hugo
title = "Thulite"
subTitle = "SEO"
description = "Everything you need to make your Thulite website more visible in search results. Solid setup and easy to use."
images = ["cover.png"]

[social]
  twitter = "getdoks"
  facebook_admin = ""

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

## title

A string containing the website's title — for example `"Thulite"`

## description

A string containing the website's description — for example `"Congrats on setting up a new Doks project!"`

## images

A slice of images — for example `["cover.png"]`

## social

### twitter

### facebook_admin

## seo.title

### separator

"|" (default)

### suffix

`title` `hugo.toml` (default)

## seo.favicons

### icon

`favicon.png` (default)

### svgIcon

`favicon.svg` (default)

## seo.schemas

### type

`"Organization"` (default) or `"Person"`

### logo

Logo of Organization — `"favicon-512x512.png"` (default)

### name

Name of Organization or Person — for example `"Thulite"`

### sameAs

`[]` (default). For example `["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]`

### images

`["cover.png"]` (default)

### article

Article sections, `[]` (default)

### newsArticle

NewsArticle sections, `[]` (default)

### blogPosting

BlogPosting sections — for example `["blog"]` (default)

### product

Product sections, `[]` (default)
