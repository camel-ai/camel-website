import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Note: upgrade-insecure-requests was removed - it can break CSS/asset loading when
// deployed behind reverse proxies (e.g. Dokploy). HSTS header already enforces HTTPS.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https:",
  "manifest-src 'self'",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/ambassador",
        destination: "/community/ambassador",
        permanent: true,
      },
      {
        source: "/collaboration-questionnaire",
        destination: "/sea/collaboration",
        permanent: true,
      },
      {
        source: "/task-automation",
        destination: "/framework/software-engineering",
        permanent: true,
      },
      {
        source: "/world-simulation",
        destination: "/framework/social-simulation",
        permanent: true,
      },
      {
        source: "/data-generation",
        destination: "/framework/data-training",
        permanent: true,
      },
      {
        source: "/launchweek-environments",
        destination: "/sea",
        permanent: true,
      },
      {
        source: "/mcp",
        destination: "https://mcp.camel-ai.org",
        permanent: true,
        basePath: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/package/:file",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment",
          },
        ],
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  images: {
    // Serve original files directly. The self-hosted optimizer was producing
    // (and caching for a year) zero-byte WebP/AVIF transforms, which showed up
    // as broken figures across blogs. Originals also keep asset URLs stable
    // for the planned S3 migration.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default withNextIntl(nextConfig);
