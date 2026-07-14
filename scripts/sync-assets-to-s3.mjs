/**
 * Publishes static assets from public/ to an S3 bucket for CloudFront serving.
 * See docs/S3_MIGRATION.md for the full runbook.
 *
 * Usage:
 *   S3_ASSETS_BUCKET=camel-website-assets node scripts/sync-assets-to-s3.mjs [--dryrun]
 *
 * Requires the AWS CLI (v2) on PATH with ambient credentials (env vars, a shared
 * profile via AWS_PROFILE, or an instance role). No credentials are read or stored
 * by this script.
 *
 * What it does NOT upload (must stay served from the site root / repo):
 *   - blog index.md    markdown, read from the filesystem at build time
 *   - favicon, manifest.json, apple-touch-icon, android-chrome, google verification
 *   - font files       bundled by next/font into /_next/static
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "..", "public");

const bucket = process.env.S3_ASSETS_BUCKET;
if (!bucket) {
  console.error("Error: set S3_ASSETS_BUCKET (e.g. camel-website-assets).");
  process.exit(1);
}

const dryrun = process.argv.includes("--dryrun");
const CACHE_CONTROL = "public, max-age=31536000, immutable";

const EXCLUDES = [
  "*.DS_Store",
  "*/index.md",
  "favicon*",
  "manifest.json",
  "apple-touch-icon.png",
  "android-chrome-*",
  "google*.html",
  "font/*",
];

function run(args) {
  console.log(`\n$ aws ${args.join(" ")}`);
  const res = spawnSync("aws", args, { stdio: "inherit" });
  if (res.status !== 0) {
    console.error(`\naws exited with code ${res.status}`);
    process.exit(res.status ?? 1);
  }
}

// 1. Sync everything (minus repo/root-domain files) with long-lived immutable caching.
run([
  "s3",
  "sync",
  PUBLIC_DIR + "/",
  `s3://${bucket}/`,
  ...EXCLUDES.flatMap((e) => ["--exclude", e]),
  "--cache-control",
  CACHE_CONTROL,
  ...(dryrun ? ["--dryrun"] : []),
]);

// 2. Downloadable release packages need Content-Disposition: attachment
//    (replicates the next.config.ts header for /package/:file).
run([
  "s3",
  "cp",
  `s3://${bucket}/package/`,
  `s3://${bucket}/package/`,
  "--recursive",
  "--metadata-directive",
  "REPLACE",
  "--content-disposition",
  "attachment",
  "--cache-control",
  CACHE_CONTROL,
  ...(dryrun ? ["--dryrun"] : []),
]);

console.log(dryrun ? "\nDry run complete." : "\nSync complete.");
