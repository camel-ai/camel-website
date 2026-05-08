import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const BLOG_DIST = path.join(process.cwd(), "astro", "dist");

async function readHtml(...segments: string[]) {
  const filePath = path.join(BLOG_DIST, ...segments);
  const html = await fs.readFile(filePath, "utf8");

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

export async function GET() {
  try {
    return await readHtml("blogs", "index.html");
  } catch {
    return new Response("Blog build artifact not found", { status: 404 });
  }
}
