# Step-by-Step Guide: Uploading Blogs

This guide walks you through adding a new blog post to the CAMEL website.

---

## Overview

Blogs are file-based: each post lives in `public/blogs/{slug}/` with an `index.md` (or `index.mdx`) file and optional assets. The site automatically discovers and displays all posts.

---

## Step 1: Create the Blog Folder

Create a new folder under `public/blogs/` using a **URL-friendly slug** as the folder name.

**Slug rules:**

- Lowercase
- Words separated by hyphens
- No spaces or special characters
- Example: `my-awesome-blog-post`

```bash
mkdir -p public/blogs/my-awesome-blog-post
```

---

## Step 2: Add the Main Content File

Create `index.md` (or `index.mdx`) inside the blog folder.

### Frontmatter (required at top of file)

```yaml
---
title: Your Blog Title
subtitle: Optional subtitle
date: "2024-12-15"
author: CAMEL-AI Team
authorprofile: ""
role: ""
description: Short description for cards and SEO (1–2 sentences).
seoTitle: Optional custom SEO title
seoDescription: Optional custom meta description
keywords:
  - CAMEL-AI
  - your-topic
  - another-keyword
toc: true
cover: ./assets/cover-image.jpg
thumbnail: ./assets/thumbnail-image.jpg
featured: false
category: Tutorial
---
```

### Frontmatter Fields

| Field           | Required | Description                                               |
| --------------- | -------- | --------------------------------------------------------- |
| `title`         | Yes      | Display title                                             |
| `date`          | Yes      | Publication date (ISO format: `YYYY-MM-DD`)               |
| `author`        | No       | Defaults to "CAMEL Team"                                  |
| `authorprofile` | No       | URL or path to author avatar (e.g. `./assets/author.png`) |
| `description`   | No       | Used in cards and SEO                                     |
| `cover`         | No       | Hero/cover image path                                     |
| `thumbnail`     | No       | Card/OG image; falls back to `cover` if omitted           |
| `category`      | No       | For filtering (e.g. Tutorial, Release Notes)              |
| `toc`           | No       | Show table of contents (default: true)                    |
| `featured`      | No       | Feature on homepage (default: false)                      |
| `keywords`      | No       | Array or comma-separated string for SEO                   |

---

## Step 3: Add Images and Assets

### Option A: Use an `assets` subfolder (recommended)

1. Create an `assets` folder inside your blog folder:

   ```
   public/blogs/my-awesome-blog-post/
   ├── index.md
   └── assets/
       ├── cover-image.jpg
       ├── thumbnail-image.jpg
       └── screenshot-1.png
   ```

2. Reference images in markdown with `./assets/filename.ext`:

   ```markdown
   ![Alt text](./assets/screenshot-1.png)
   ```

3. Use the same paths in frontmatter:
   ```yaml
   cover: ./assets/cover-image.jpg
   thumbnail: ./assets/thumbnail-image.jpg
   ```

### Option B: Images in the blog root

You can also place images directly in the blog folder and reference them as `./filename.ext`. Using `assets/` keeps the folder organized.

### Image path resolution

- `./` paths are resolved to `/blogs/{slug}/` (e.g. `./assets/foo.png` → `/blogs/my-awesome-blog-post/assets/foo.png`)
- Absolute paths starting with `/` are used as-is

---

## Step 4: Write the Content

Use standard Markdown (or MDX if using `index.mdx`):

- **Headers** (`#`, `##`, `###`) — used for the table of contents when `toc: true`
- **Code blocks** — use triple backticks with language for syntax highlighting
- **Images** — `![alt](./assets/image.png)`
- **Links** — `[text](url)`
- **Blockquotes** — `> quote`

---

## Step 5: Add an Author (Optional)

### Option A: Inline in frontmatter

Set `author` and optionally `authorprofile`:

```yaml
author: Jane Doe
authorprofile: ./assets/jane-avatar.png
```

### Option B: Author profile file

1. Create `content/authors/{slug}.yaml` (filename = slug, e.g. `jane-doe.yaml` for author "Jane Doe"):

   ```yaml
   name: Jane Doe
   avatar: /path/to/avatar.png
   role: Engineer
   bio: Short bio text.
   social:
     github: https://github.com/janedoe
     twitter: https://twitter.com/janedoe
     website: https://janedoe.com
   ```

2. Use the author name in frontmatter:
   ```yaml
   author: Jane Doe
   ```

The system matches `author` to the author slug (e.g. "Jane Doe" → `jane-doe`).

---

## Step 6: Verify Locally

1. Start the dev server:

   ```bash
   npm run dev
   ```

2. Open the blogs page: `http://localhost:3000/blogs`

3. Confirm your post appears and open it to check:
   - Title, date, author
   - Images load
   - Table of contents (if `toc: true`)
   - Layout and formatting

---

## Step 7: Commit and Deploy

1. Stage your changes:

   ```bash
   git add public/blogs/my-awesome-blog-post/
   git add content/authors/  # if you added an author
   ```

2. Commit:

   ```bash
   git commit -m "Add blog: Your Blog Title"
   ```

3. Push to trigger deployment (depends on your CI/CD setup).

---

## Quick Checklist

- [ ] Folder created at `public/blogs/{slug}/`
- [ ] `index.md` or `index.mdx` with valid frontmatter
- [ ] `title` and `date` set
- [ ] Images in `assets/` (or blog root) and referenced with `./` paths
- [ ] `cover` and/or `thumbnail` set for cards and OG
- [ ] Content written in Markdown
- [ ] Author set (inline or via `content/authors/`)
- [ ] Tested locally
- [ ] Committed and pushed

---

## Related Files

- Blog utilities: `src/app/(main)/blogs/utils.tsx`
- Blog index page: `src/app/(main)/blogs/page.tsx`
- Blog post page: `src/app/(main)/blogs/[slug]/page.tsx`
- Authors directory: `content/authors/`
