---
title: "Favicon Implementation"
description: ""
summary: ""
date: 2025-06-06T20:27:37+02:00
lastmod: 2025-06-06T20:27:37+02:00
draft: false
weight: 205
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

The Thulite SEO package handles favicon generation automatically. It takes your source files and creates all the necessary variants and HTML tags. The system will warn you if your source files are missing or not suitable for resizing.

## Basic Setup

1. Prepare two favicon files:
   - `favicon.png` - A PNG file (at least 512x512 pixels)
   - `favicon.svg` - An SVG version (optional but recommended)

2. Place both files in your site's `assets/` directory

3. The package automatically generates:
   - favicon.ico (32x32)
   - SVG favicon
   - Apple touch icon (180x180)
   - Android icons (192x192 and 512x512)
   - Web manifest file

## Custom Configuration

If you need to customize the favicon filenames:

```toml {title="config/_default/params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.favicons]
    icon = "favicon.png" # favicon.png (default)
    svgIcon = "favicon.svg" # favicon.svg (default)
```

## How It Works

The package:

1. Loads your source favicon files
2. Resizes them to various dimensions
3. Generates appropriate HTML tags in your page head
4. Creates a web manifest file for PWA support
