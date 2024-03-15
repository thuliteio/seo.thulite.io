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

## title

A string containing the website's title — for example `"Hyas"`

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

Name of Organization or Person — for example `"Hyas"`

### sameAs

`[]` (default). For example `["https://github.com/gethyas/hyas", "https://fosstodon.org/@hyas"]`

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
