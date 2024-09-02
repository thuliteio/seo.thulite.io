---
title: "Getting Started"
description: ""
summary: ""
date: 2023-11-08T11:42:20+01:00
lastmod: 2023-11-08T11:42:20+01:00
draft: false
weight: 110
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

SEO is the official SEO integration for the [Thulite](https://thulite.io/) framework. This guide will help you get started with SEO already installed. See the [manual setup instructions](/docs/start-here/manual-setup/) to add SEO to an existing Thulite project.

## Quick start

To follow this guide, you'll need an existing Thulite project with SEO installed.

### Check if SEO is installed

Check if SEO is installed by running the following command in your project's root directory:

{{< tabs "install-images" >}}
{{< tab "npm" >}}

```bash
npm list @thulite/seo
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm list @thulite/seo --depth 1
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn list @thulite/seo --depth=1
```

{{< /tab >}}
{{< /tabs >}}

This will print the version of the package installed. If nothing is printed, you'll first need to add SEO — proceed with the [manual setup instructions](/docs/start-here/manual-setup/).

### Customize SEO

{{< link-card
  title="Customize SEO"
  description="Update settings, parameters, and page frontmatter."
  href="/docs/start-here/customizing-seo/"
>}}

## Updating SEO

SEO is a Thulite integration, and is updated like any `@thulite/*` integration (or theme):

{{< tabs "update-images" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/seo@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @thulite/seo --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @thulite/seo --latest
```

{{< /tab >}}
{{< /tabs >}}

See the [SEO changelog](https://github.com/thuliteio/seo/blob/main/CHANGELOG.md) for a full list of the changes made in each release.

## Troubleshooting SEO

Use the [Settings](/docs/reference/settings/), [Parameters](/docs/reference/parameters/), and [Page Frontmatter](/docs/reference/page-frontmatter/) reference pages to ensure that SEO is configured and functioning properly. See the guides in the sidebar for topic-specific help.

If your answer cannot be found in these docs, please visit the [full Thulite Docs](https://docs.thulite.io/) for complete Thulite documentation. Your question may be answered by understanding how Thulite works in general, underneath this SEO integration.

You can also check for any known [SEO issues on GitHub](https://github.com/thuliteio/seo/issues), and get help in [Thulite Discussions](https://github.com/thuliteio/thulite/discussions) from our active, friendly community!
