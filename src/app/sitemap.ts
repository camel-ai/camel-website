import { MetadataRoute } from "next";
import path from "node:path";
import fs from "node:fs";

function getBlogSlugsWithDates(): { slug: string; date: string }[] {
  const postsDir = path.join(process.cwd(), "public", "blogs");
  if (!fs.existsSync(postsDir)) return [];
  const entries = fs.readdirSync(postsDir, { withFileTypes: true });
  const result: { slug: string; date: string }[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const indexMd = path.join(postsDir, entry.name, "index.md");
    const indexMdx = path.join(postsDir, entry.name, "index.mdx");
    const indexPath = fs.existsSync(indexMd) ? indexMd : fs.existsSync(indexMdx) ? indexMdx : null;
    if (!indexPath) continue;
    const content = fs.readFileSync(indexPath, "utf8");
    const dateMatch = content.match(/^date:\s*["']?([^"'\n]+)["']?/m);
    result.push({ slug: entry.name, date: dateMatch?.[1] ?? new Date().toISOString() });
  }
  return result;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.camel-ai.org";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/community/ambassador`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/framework`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/framework/information-retrieval`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/framework/software-engineering`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/framework/multimodal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/framework/embodied-ai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/framework/social-simulation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/framework/domain-specific`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/framework/data-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${baseUrl}/sea`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${baseUrl}/sea/collaboration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/branding`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/techstacks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPosts = getBlogSlugsWithDates().map(({ slug, date }) => {
    const d = new Date(date);
    return {
      url: `${baseUrl}/blogs/${slug}`,
      lastModified: isNaN(d.getTime()) ? new Date() : d,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...blogPosts];
}
