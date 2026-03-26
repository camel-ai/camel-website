# Contributing

Thank you for contributing to this repository.

This project is the website for the organization and is built with `Next.js`, `TypeScript`, and `Tailwind CSS`. Contributions are welcome across product pages, UI components, blog content, localization, performance, and supporting API routes.

## What To Contribute

Good contributions include:

- Fixing bugs or regressions in the website
- Improving page content, copy, or SEO metadata
- Adding or editing blog posts in `public/blogs`
- Improving components in `src/components`
- Updating routes and pages in `src/app`
- Improving localization files in `messages`
- Refining developer documentation such as `README.md` and this file

If your change is large, user-facing, or changes site structure, open an issue or discussion first so the approach can be aligned before implementation.

## Local Setup

### Requirements

- `Node.js` 20.19+ required
- `npm` (this repo includes `package-lock.json`)

### Install

```bash
npm install
```

### Environment

Create a `.env.local` file in the repository root when you need server-side integrations.

Required for newsletter signup:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Optional for GitHub API rate limits:

```env
GITHUB_TOKEN=github_pat_xxxxxxxxxxxxxxxxxxxx
```

Notes:

- `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` are used by `src/app/api/newsletter/subscribe/route.ts`
- `GITHUB_TOKEN` is optional, but helps the GitHub stats endpoints avoid rate limits

### Start The App

```bash
npm run dev
```

The site runs locally at [http://localhost:3000](http://localhost:3000).

## Project Structure

Important directories and files:

- `src/app`: App Router pages, layouts, metadata, and API routes
- `src/components`: reusable UI and page components
- `src/app/api`: server routes for newsletter signup and GitHub-backed data
- `public`: static assets
- `public/blogs`: blog post folders and blog images
- `messages`: translation files
- `content/authors`: optional author profile YAML files used by the blog system
- `next.config.ts`: Next.js config, redirects, rewrites, and image settings
- `eslint.config.mjs`: lint rules
- `.prettierrc.json`: formatting rules

## Common Commands

Run these before opening a pull request:

```bash
npm run lint
npm run format:check
```

Useful commands during development:

```bash
npm run dev
npm run lint:fix
npm run format
npm run build
```

Guidance:

- Run `npm run lint` for all code changes
- Run `npm run format:check` before submitting
- Run `npm run build` when you change routes, metadata, blog rendering, localization, or anything that could affect the production build

## Code Style

This repository uses:

- `TypeScript` with `strict` mode enabled
- `ESLint` with Next.js rules
- `Prettier` for formatting
- `prettier-plugin-tailwindcss` for class ordering

Please follow these conventions:

- Prefer TypeScript for new code
- Reuse existing components and utilities before adding new abstractions
- Keep components focused and easy to read
- Use the `@/` import alias for code under `src`
- Keep formatting automated; do not hand-format around Prettier
- Avoid unrelated refactors in the same pull request

## Content And Blog Contributions

### Blog File Location

The blog system currently reads posts from:

- `public/blogs/<slug>/index.md`
- `public/blogs/<slug>/index.mdx`

Store images for a post in the same folder as the post file whenever possible.

### Blog Frontmatter

Supported frontmatter fields include:

- `title`
- `subtitle`
- `date`
- `author`
- `authorprofile`
- `role`
- `description`
- `keywords`
- `toc`
- `cover`
- `thumbnail`
- `featured`
- `category`

Example:

```md
---
title: "Example Post"
subtitle: "Short optional subtitle"
date: "2026-03-08"
author: "Organization Team"
description: "One-sentence summary for cards and SEO."
keywords: ["agents", "website"]
toc: true
cover: "./cover.png"
thumbnail: "./cover.png"
featured: false
category: "Engineering"
---
```

### Blog Content Rules

- Use one folder per post under `public/blogs`
- Name the content file `index.md` or `index.mdx`
- Keep related images beside the post file
- Use relative image paths like `./image.png` in frontmatter and markdown
- Make sure the post title, description, and date are present and accurate
- Preview the rendered page locally before submitting

### Author Profiles

If you want richer author information on blog posts, add an author file under `content/authors`:

- `content/authors/<slug>.yaml`

The blog utilities resolve the author slug from the `author` field, so keep the author name and file slug aligned.

## API Route Contributions

Current server-side routes include:

- newsletter subscription
- GitHub star aggregation
- GitHub contributors
- GitHub release data
- Keystatic route handling

When editing API routes:

- validate request input clearly
- avoid exposing secrets to the client
- document any new required environment variables
- test the happy path and basic failure cases locally

## Pull Requests

Before opening a pull request:

1. Sync with the latest default branch changes.
2. Keep the PR focused on one clear improvement.
3. Run `npm run lint` and `npm run format:check`.
4. Run `npm run build` for changes that may affect production behavior.
5. Add screenshots or a short screen recording for visible UI changes.
6. Mention any environment variables, migrations, or manual verification steps.

In your PR description, include:

- what changed
- why it changed
- how you tested it
- screenshots for UI changes, if relevant

## Review Expectations

Reviewers will usually look for:

- correctness
- visual consistency
- accessibility and responsive behavior
- clean routing and metadata behavior
- formatting and lint compliance
- whether the change matches the existing site patterns

## License

By contributing to this repository, you agree that your contributions will be licensed under the Apache 2.0 license in `LICENSE`.

## Need Help

If something is unclear, open an issue or ask in the project communication channel before spending time on a large implementation. Early alignment is much better than a large PR built on the wrong assumptions.
