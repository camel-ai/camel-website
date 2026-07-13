# S3 Asset Migration Guide

All site resources live under `public/` and are referenced by absolute root paths
(e.g. `/image/...`, `/blogs/<slug>/assets/...`). This doc is the runbook for moving
them to S3/CloudFront.

Last audited: 2026-07-13. Every asset path referenced from `src/` and from blog
markdown resolves to an existing file under `public/` (audit commands at the bottom).

## Inventory (`public/`)

| Folder | Size | Contents | Notes |
| --- | --- | --- | --- |
| `blogs/` | ~151 MB | One folder per post: `index.md` + `assets/` images | Markdown itself is read server-side at build/render; only `assets/` images are served as static files |
| `package/` | ~31 MB | Downloadable release packages | Served with `Content-Disposition: attachment` via `next.config.ts` headers — replicate as S3 object metadata if moved |
| `tech-stack-logos/` | ~14 MB | Logos synced by `scripts/sync-tech-stack-logos.mjs` | |
| `logo/` | ~14 MB | Brand logos (light/dark variants) | |
| `image/` | ~9.5 MB | Page images, incl. site OG image `image/thumbnail.png` | `background.json` / `background_dark.json` are Lottie files imported into the JS bundle (not fetched at runtime) |
| `paper/` | ~2.1 MB | PDFs | |
| `people/`, `testimonails/`, `icon/`, `branding/`, `font/` | < 1 MB each | Photos, icons, fonts | `font/` woff2 files are bundled by `next/font/local` at build time and served from `/_next/static` — no need to migrate |
| root files | — | `favicon*`, `apple-touch-icon.png`, `android-chrome-*`, `manifest.json`, `google369f66f3d310b46e.html` | Must stay served from the site root domain (favicons, PWA manifest, Google Search Console verification) — do not move these to S3 |

## How references resolve

- **Components/pages**: hardcoded absolute paths like `/image/foo.png`, `/logo/bar.png`.
- **Blog markdown**: images are written as `./assets/<file>` and rewritten at render
  time to `/blogs/<slug>/assets/<file>` by `resolveImagePaths()` /
  `resolveContentImagePaths()` in `src/app/(main)/blogs/utils.tsx`. That function is
  the single hook point if you ever want to prefix blog asset URLs with a CDN host.
- **Image optimization is disabled** (`images.unoptimized: true` in `next.config.ts`),
  so every image is served as the original file — URLs are stable and cacheable,
  with no `/_next/image` coupling. This was done deliberately: the self-hosted
  optimizer was caching zero-byte WebP transforms (broken figures), and S3/CDN
  serving works best with original files.

## Known external assets (not in this repo)

- Demo videos embedded in several blog posts are hosted on
  `https://camel-ai.github.io/camel_asset/...` and `https://crab.camel-ai.org/...`.
  Migrate those repos/buckets separately if desired.
- The WeChat QR link in many posts points to `https://ghli.org/camel/wechat.png`
  (a hyperlink, not an embedded image).
- Contributor avatars load at runtime from `avatars.githubusercontent.com` /
  `lh3.googleusercontent.com` — third-party, not migratable.

## Migration steps

1. Sync assets (exclude markdown and root-domain files):

   ```sh
   aws s3 sync public/ s3://<bucket>/ \
     --exclude "*/index.md" \
     --exclude "favicon*" --exclude "manifest.json" \
     --exclude "apple-touch-icon.png" --exclude "android-chrome-*" \
     --exclude "google*.html" --exclude "font/*" \
     --cache-control "public, max-age=31536000, immutable"
   ```

2. For `package/*`, set `Content-Disposition: attachment` object metadata:

   ```sh
   aws s3 cp s3://<bucket>/package/ s3://<bucket>/package/ --recursive \
     --metadata-directive REPLACE --content-disposition attachment \
     --cache-control "public, max-age=31536000, immutable"
   ```

3. Serve. Two options:
   - **CloudFront in front of the whole site** (recommended): route asset path
     patterns (`/blogs/*`, `/image/*`, `/logo/*`, `/icon/*`, `/people/*`, `/paper/*`,
     `/package/*`, `/tech-stack-logos/*`, `/branding/*`, `/testimonails/*`) to the S3
     origin and everything else to the Next.js origin. No code changes needed —
     URLs stay identical.
   - **CDN hostname in URLs**: requires rewriting the hardcoded `/...` paths in
     components plus the blog resolver in `utils.tsx`. More churn; only do this if
     a fronting CDN is not an option. (Note: Next's `assetPrefix` does NOT apply to
     `public/` files, so it can't do this for you.)

4. After cutover, `public/blogs/*/index.md` must remain in the repo/deployment —
   the blog pages read the markdown from the filesystem at build time.

## Re-run the audit

```sh
# every asset path referenced in code exists in public/
grep -rhEo '"/(image|logo|icon|people|blogs|branding|paper|package|font|testimonails|tech-stack-logos)/[^"]+"' src/ \
  | tr -d '"' | sort -u | while read p; do [ -e "public$p" ] || echo "MISSING: $p"; done

# every relative asset referenced in blog markdown exists on disk
for f in public/blogs/*/index.md; do slug=$(basename $(dirname $f)); \
  grep -oE '\]\((\./|/)[^)]*\)' "$f" | sed -E 's/^\]\(//; s/\)$//' | while read p; do \
    case "$p" in ./*) rp="public/blogs/$slug/${p#./}";; /*) rp="public${p}";; esac; \
    [ -f "${rp%%#*}" ] || echo "MISSING: $slug -> $p"; done; done
```
