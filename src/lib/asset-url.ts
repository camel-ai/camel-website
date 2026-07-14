/**
 * Optional CDN prefixing for static assets served from `public/`.
 *
 * When `NEXT_PUBLIC_ASSET_BASE_URL` is unset (the default), this is a no-op and
 * assets are served same-origin exactly as before. When it points at a distinct
 * CDN host (e.g. `https://cdn.camel-ai.org`), root-absolute asset paths are
 * rewritten to absolute CDN URLs. See docs/S3_MIGRATION.md.
 */
const BASE = (process.env.NEXT_PUBLIC_ASSET_BASE_URL ?? "").replace(/\/$/, "");

export function assetUrl(path: string): string {
  if (!BASE) return path; // no-op: same-origin relative URLs
  if (/^https?:\/\//.test(path)) return path; // already absolute
  return `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}
