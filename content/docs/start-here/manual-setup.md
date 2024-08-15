---
title: "Manual Setup"
description: ""
summary: ""
date: 2023-11-08T12:26:26+01:00
lastmod: 2023-11-08T12:26:26+01:00
draft: false
weight: 120
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

The quickest way to get started with SEO is using a Thulite theme with [SEO already installed](/docs/start-here/getting-started/#check-if-seo-is-installed). If you want to add SEO to an existing Thulite project, this guide will explain how.

## Set up SEO

To follow this guide, you'll need an existing Thulite project.

### Add the integration

SEO is a [Thulite integration](https://docs.thulite.io/guides/integrations/). Add it to your site by running the following command in your project's root directory:

{{< tabs "install-images" >}}
{{< tab "npm" >}}

```bash
npm install @hyas/seo@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @hyas/seo@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @hyas/seo@latest
```

{{< /tab >}}
{{< /tabs >}}

This will install the required dependencies.

### Update mounts

Add mounts to `./config/_default/module.toml`:

```toml {title=module.toml}
## layouts
[[mounts]]
  source = "node_modules/@hyas/seo/layouts"
  target = "layouts"

[[mounts]]
  source = "layouts"
  target = "layouts"
```

### Customize SEO

{{< link-card
  title="Customize SEO"
  description="Update settings, parameters, and page frontmatter."
  href="/docs/start-here/customizing-seo/"
>}}
