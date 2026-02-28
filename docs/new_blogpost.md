# How to publish a new blog post

## 1. Create a new Markdown file

Add a new `.md` file in `src/content/blog/`. The filename becomes the URL slug,
so use lowercase kebab-case:

```
src/content/blog/my-new-article.md  ->  giannisalinetti.github.io/blog/my-new-article
```

## 2. Write the frontmatter

Every post needs a YAML frontmatter block at the top:

```markdown
---
title: "Your Article Title"
description: "A one-sentence summary that appears in post cards and previews."
date: 2026-02-28
tags: ["kubernetes", "containers"]
---

Your Markdown content starts here...
```

### Frontmatter fields

| Field         | Required | Type     | Notes                                  |
| :------------ | :------- | :------- | :------------------------------------- |
| `title`       | yes      | string   |                                        |
| `description` | yes      | string   | Shown on blog listing and home page    |
| `date`        | yes      | date     | Controls sort order (newest first)     |
| `tags`        | no       | string[] | Defaults to `[]`                       |
| `draft`       | no       | boolean  | Defaults to `false`                    |

## 3. Use `draft: true` for work in progress

The site filters out drafts automatically. You can safely commit and push an
unfinished article:

```markdown
---
title: "Work in Progress"
description: "Not ready yet."
date: 2026-03-01
draft: true
---
```

It will be in the repo but invisible on the live site. When ready, remove the
line or set `draft: false`.

## 4. Preview locally before pushing

```sh
npm run dev
```

Open `localhost:4321/blog/my-new-article` to check formatting, images, and
layout.

## 5. Publish

```sh
git add src/content/blog/my-new-article.md
git commit -m "Add blog post: Your Article Title"
git push
```

The GitHub Actions workflow will build and deploy automatically. The post will
appear on the blog listing page and, if among the 4 most recent, on the home
page "Recent Posts" section.

## Tips

- **Images in posts**: Place them in `public/images/blog/` and reference them
  as `/images/blog/your-image.jpg` in Markdown.
- **Consistent dates**: Use `YYYY-MM-DD` format. The date controls sort order.
- **Tags**: Use consistent, lowercase tag names across posts.
- **Slug naming**: Choose descriptive, SEO-friendly filenames since they become
  the URL (e.g. `getting-started-with-astro.md` rather than `post1.md`).
