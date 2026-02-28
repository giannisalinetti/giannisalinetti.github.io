---
title: "Getting Started with Astro"
description: "A quick look at why Astro is a great choice for building content-driven websites."
date: 2026-02-20
tags: ["astro", "web", "static-site"]
---

Astro is a modern web framework designed for building fast, content-focused websites. Unlike traditional JavaScript frameworks, Astro ships zero JavaScript by default, resulting in blazing-fast page loads.

## Why Astro?

- **Performance first**: Ships zero JS by default
- **Content collections**: First-class Markdown and MDX support
- **Island architecture**: Hydrate interactive components only when needed
- **Framework agnostic**: Use React, Vue, Svelte, or plain HTML

## Getting Started

Setting up a new Astro project is straightforward:

```bash
npm create astro@latest
```

From there, you can add integrations like Tailwind CSS, React, or any other framework you prefer.

## Content Collections

One of Astro's standout features is its content collections API. You define schemas for your content using Zod, and Astro handles type-safe querying and rendering automatically.

This makes it ideal for blogs, documentation sites, and portfolios where structured content is key.
