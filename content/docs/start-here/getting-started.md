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

SEO is the official SEO integration for the [Hyas](https://gethyas.com/) framework. This guide will help you get started with SEO already installed. See the [manual setup instructions](/docs/start-here/manual-setup/) to add SEO to an existing Hyas project.

## Quick start

To follow this guide, you'll need an existing Hyas project with SEO installed.

### Check if SEO is installed

Check if SEO is installed by running the following command in your project's root directory:

{{< tabs "install-images" >}}
{{< tab "npm" >}}

```bash
npm list @hyas/seo
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm list @hyas/seo --depth 1
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn list @hyas/seo --depth=1
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

SEO is a Hyas integration, and is updated like any `@hyas/*` integration (or theme):

{{< tabs "update-images" >}}
{{< tab "npm" >}}

```bash
npm install @hyas/seo@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @hyas/seo --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @hyas/seo --latest
```

{{< /tab >}}
{{< /tabs >}}

See the [SEO changelog](https://github.com/gethyas/seo/blob/main/CHANGELOG.md) for a full list of the changes made in each release.

## Troubleshooting SEO

Use the [Settings](/docs/reference/settings/), [Parameters](/docs/reference/parameters/), and [Page Frontmatter](/docs/reference/page-frontmatter/) reference pages to ensure that SEO is configured and functioning properly. See the guides in the sidebar for topic-specific help.

If your answer cannot be found in these docs, please visit the [full Hyas Docs](https://docs.gethyas.com/) for complete Hyas documentation. Your question may be answered by understanding how Hyas works in general, underneath this SEO integration.

You can also check for any known [SEO issues on GitHub](https://github.com/gethyas/seo/issues), and get help in [Hyas Discussions](https://github.com/gethyas/hyas/discussions) from our active, friendly community!
