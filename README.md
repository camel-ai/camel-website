# CAMEL Website

This repository powers the official CAMEL organization website.

It is a `Next.js` application for presenting the CAMEL ecosystem, research, community, framework pages, blogs, and organization updates. If you are looking for the CAMEL framework itself, go to the main framework repository: [camel-ai/camel](https://github.com/camel-ai/camel).

## Links

- Website: [camel-ai.org](https://www.camel-ai.org/)
- Framework repository: [camel-ai/camel](https://github.com/camel-ai/camel)
- Documentation: [docs.camel-ai.org](https://docs.camel-ai.org/)
- Discord: [discord.camel-ai.org](https://discord.camel-ai.org/)
- Contributing guide: [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## About This Repo

This codebase contains the public-facing website for the organization, including:

- landing and product pages
- framework overview pages
- community and ambassador pages
- blog listing and blog post rendering
- localized site content
- lightweight server routes for newsletter and GitHub-backed data

The upstream CAMEL README focuses on the framework, research platform, and community mission. This repository focuses on the website that presents those initiatives and routes visitors to the framework, docs, blogs, and community channels.

## Features

- App Router site built with `Next.js`
- UI implemented with `React`, `TypeScript`, and `Tailwind CSS`
- blog system backed by markdown files in `public/blogs`
- internationalization via `next-intl`
- newsletter signup endpoint using `Resend`
- GitHub-backed endpoints for stars, contributors, and release metadata
- reusable component library under `src/components`

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

Recommended before opening a pull request:

```bash
npm run lint
npm run format:check
npm run build
```

## Project Structure

```text
src/
  app/                  App Router pages, layouts, and API routes
  components/           Reusable UI and page components
  i18n/                 Internationalization setup
  lib/                  Utilities
  store/                Client-side state stores
messages/               Translation files
public/                 Static assets
public/blogs/           Blog posts and blog images
keystatic.config.ts     Keystatic config
next.config.ts          Next.js config, redirects, rewrites, image settings
eslint.config.mjs       ESLint config
```

## Content Workflow

### Blog posts

Blog posts are loaded from:

- `public/blogs/<slug>/index.md`
- `public/blogs/<slug>/index.mdx`

Each post should live in its own folder, with related images stored beside the content file.

Typical frontmatter fields include:

- `title`
- `subtitle`
- `date`
- `author`
- `description`
- `keywords`
- `toc`
- `cover`
- `thumbnail`
- `featured`
- `category`

Use relative image paths such as `./cover.png` so the site can resolve them correctly.

### Author profiles

Optional author profiles can be added under:

- `content/authors/<slug>.yaml`

## Server Routes

This site includes a few lightweight API routes:

- `src/app/api/newsletter/subscribe/route.ts`
- `src/app/api/github-stars/route.ts`
- `src/app/api/github-contributors/route.ts`
- `src/app/api/github-releases/route.ts`
- `src/app/api/keystatic/[...params]/route.ts`

Example newsletter request:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"steve.wozniak@gmail.com","firstName":"Steve","lastName":"Wozniak"}' \
  http://localhost:3000/api/newsletter/subscribe
```

Successful responses return `{ ok: true, id }`.

## Contributing

Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) before opening a pull request.

### Docs & Guides

- [**Design Generation Guideline**](./docs/DESIGN_GENERATION_GUIDELINE.md) — Plan and review new UI before/after implementation
- [**Blog Upload Guide**](./docs/BLOG_UPLOAD_GUIDE.md) — Step-by-step guide for adding blog posts
- [**Project Memory**](./docs/MEMORY.md) — Stack, architecture, and key file locations

In general:

- keep pull requests focused
- run lint, formatting checks, and a production build before submitting
- include screenshots for visible UI changes
- document any new environment variables or manual verification steps

## Related Repositories

- Framework: [camel-ai/camel](https://github.com/camel-ai/camel)
- OWL: [camel-ai/owl](https://github.com/camel-ai/owl)
- OASIS: [camel-ai/oasis](https://github.com/camel-ai/oasis)
- CRAB: [camel-ai/crab](https://github.com/camel-ai/crab)
- LOONG: [camel-ai/loong](https://github.com/camel-ai/loong)
- SETA: [camel-ai/seta](https://github.com/camel-ai/seta)

## License

This repository is licensed under Apache 2.0. See [`LICENSE`](./LICENSE).
