---
title: "Overview"
description: ""
summary: ""
date: 2025-06-06T20:07:34+02:00
lastmod: 2025-06-06T20:07:34+02:00
draft: false
weight: 105
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Thulite SEO is an official SEO integration package for Thulite websites. It provides comprehensive search engine optimization features through structured data, meta tags, and other SEO best practices.

## Installation

Add the package to your Thulite project:


{{< tabs "installation" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/seo@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @thulite/seo@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @thulite/seo@latest
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun install @thulite/seo@latest
```

{{< /tab >}}
{{< /tabs >}}

## Features

### Meta Tags
- Title tags
- Meta descriptions
- Canonical URLs
- Robots directives
- Alternate language links

### Open Graph & Twitter Cards

- Social media preview optimization
- Image, title, and description for sharing

### Structured Data (JSON-LD)

- Website schema
- Organization/Person schema
- BreadcrumbList schema
- Article schema
- BlogPosting schema
- NewsArticle schema
- Product schema

### Other Features

- Favicon generation
- Sitemap generation
- Robots.txt configuration

## Configuration

### Basic Configuration

Add the following to your site configuration:

```toml {title="config/_default/params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.title]
    separator = "—"
    suffix = ""
  [seo.favicons]
    icon = "favicon.png" # favicon.png (default)
    svgIcon = "favicon.svg" # favicon.svg (default)
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Thulite" # Name of Organization or Person
    sameAs = ["https://github.com/thuliteio/thulite", "https://x.com/thuliteio", "https://fosstodon.org/@thulite"] # E.g. ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]
    images = ["cover-seo.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = [] # BlogPosting sections
    product = [] # Product sections
```

### Page-level Configuration

In your content front matter:

```yaml
---
title: "Your Page Title"
description: "Your page description"
seo:
  title: "Custom SEO Title" # Optional override
  description: "Custom SEO Description" # Optional override
  canonical: "https://example.com/canonical-url" # Optional canonical URL
  robots: "noindex, nofollow" # Optional robots directive
---
```

## Schema Types

### Website Schema

Applied to the homepage automatically.

### Organization/Person Schema

Applied to the homepage based on your configuration.

### BreadcrumbList Schema

Applied to all pages except the homepage.

### Content-specific Schemas

- Article: Applied to pages in sections defined in `seo.schemas.article`
- BlogPosting: Applied to pages in sections defined in `seo.schemas.blogPosting`
- NewsArticle: Applied to pages in sections defined in `seo.schemas.newsArticle`
- Product: Applied to pages in sections defined in `seo.schemas.product`

## Credits

This package is based on:

- [Hugo SEO](https://gitlab.com/hugo-modules/hugo-seo)
- [Structured Data for Breadcrumbs](https://bullaki.com/projects/web-design/seo-with-hugo-5-breadcrumbs/)
- [Schema.org pieces](https://developer.yoast.com/features/schema/pieces/)
