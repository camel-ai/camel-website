import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const BLOG_DIST = path.join(process.cwd(), "astro", "dist");

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIST, "blogs", slug, "index.html");

  try {
    const html = await fs.readFile(filePath, "utf8");

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });
  } catch {
    return new Response("Blog post not found", { status: 404 });
  }
}
