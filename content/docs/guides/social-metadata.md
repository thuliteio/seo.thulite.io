---
title: "Social Metadata"
description: ""
summary: ""
date: 2025-06-06T20:42:04+02:00
lastmod: 2025-06-06T20:42:04+02:00
draft: false
weight: 215
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
The Thulite SEO package handles most OpenGraph and Twitter card metadata automatically. It uses your page content, images, and site configuration to generate appropriate tags. You can override specific values at the page level using the seo front matter section. The system is designed to follow best practices for social sharing, including proper image handling and content type specification.

## Global configuration

Add social media settings to your site configuration:

```toml
[params.social]
  twitter = "yourtwitterhandle"  # Without @ symbol (will be added automatically)
  facebook_app_id = "123456789"  # Optional Facebook App ID
  # OR
  facebook_admin = "admin_id"    # Optional Facebook Admin ID
```

## Page-level customization

In your content front matter:

```yaml
---
title: "Your Page Title"
description: "Your page description"
# Optional: Override SEO metadata
seo:
  title: "Custom Social Title"
  description: "Custom social description that will be used for both OpenGraph and Twitter"
---
```

## Images for social sharing

The package automatically uses:

1. First image from page resources (preferred)
2. Default site images if no page images exist

To specify custom images for a page, add them as page resources:

```bash
content/
└── posts/
    └── my-post/
        ├── index.md
        └── featured-image.jpg  # Will be used for social cards
```

## Twitter card types

- If a page has images: Uses "summary_large_image" card type
- If no images: Uses "summary" card type

## OpenGraph metadata

The package automatically generates:

- `og:url` - Page permalink
- `og:site_name` - Site title
- `og:title` - Page title
- `og:description` - Page description
- `og:locale` - Page language
- `og:type` - "article" for content pages, "website" for other pages
- `og:image` - Page images (up to 6)
- `article:published_time` - For content pages
- `article:modified_time` - For content pages
- `article:tag` - From page tags (up to 6)
