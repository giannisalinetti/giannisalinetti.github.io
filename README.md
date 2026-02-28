# giannisalinetti.github.io

My personal website and blog, built with [Astro](https://astro.build/) and
hosted on [GitHub Pages](https://pages.github.com/).

Live at **[giannisalinetti.github.io](https://giannisalinetti.github.io)**

## Sections

| Section | Description |
| :--- | :--- |
| **Blog** | Technical articles on cloud-native, Kubernetes, and more |
| **Books** | Books I have authored |
| **Recordings** | Music projects and releases |

## Tech stack

- [Astro](https://docs.astro.build/) — static site generator
- [Tailwind CSS](https://tailwindcss.com/docs) — utility-first styling
- [GitHub Actions](https://docs.github.com/en/actions) — CI/CD pipeline for deployment

## Local development

```sh
npm install
npm run dev
```

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
src/
├── assets/            # Images and static assets
├── components/        # Reusable Astro components
├── content/
│   ├── blog/          # Blog posts (Markdown)
│   ├── books/         # Book entries (Markdown)
│   └── recordings/    # Recording entries (Markdown)
├── layouts/           # Page layouts
├── pages/             # File-based routing
├── styles/            # Global styles
├── consts.ts          # Site-wide constants
└── content.config.ts  # Content collection schemas
```

## License

The source code is licensed under the [MIT License](LICENSE).
Written content (blog posts, book descriptions, and other prose) is licensed
under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

See the [LICENSE](LICENSE) file for details.
