import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import yaml from "js-yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// astro/src/utils/ → ../../.. → repo root → public/blogs
const POSTS_DIR = path.join(__dirname, "..", "..", "..", "public", "blogs");
const AUTHORS_DIR = path.join(__dirname, "..", "..", "..", "content", "authors");

export type AuthorData = {
  slug: string;
  name: string;
  avatar?: string;
  avatarDark?: string;
  role?: string;
  bio?: string;
  social?: {
    github?: string;
    twitter?: string;
    website?: string;
  };
};

export type BlogFrontmatter = {
  title: string;
  subtitle?: string;
  date: string;
  author?: string;
  authorprofile?: string;
  role?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  toc?: boolean;
  cover?: string;
  thumbnail?: string;
  featured?: boolean;
  category?: string;
};

export type TocItem = { depth: number; text: string; slug: string };

export type BlogPost = {
  slug: string;
  content: string;
  data: BlogFrontmatter;
  toc: TocItem[];
  readingTime: number;
  authorData?: AuthorData;
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export function getAuthorBySlug(slug: string): AuthorData | null {
  const filePath = path.join(AUTHORS_DIR, `${slug}.yaml`);
  if (!fs.existsSync(filePath)) return null;
  const file = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(file) as Record<string, unknown>;
  return {
    slug,
    name: (data.name as string) || slug,
    avatar: data.avatar as string | undefined,
    avatarDark: data.avatarDark as string | undefined,
    role: data.role as string | undefined,
    bio: data.bio as string | undefined,
    social: data.social as AuthorData["social"],
  };
}

const CAMEL_TEAM_AVATAR_LIGHT = "/logo/camel_icon.png";
const CAMEL_TEAM_AVATAR_DARK = "/logo/camel_icon_white.png";

function resolveAuthor(authorName?: string, authorprofile?: string): AuthorData | undefined {
  if (!authorName) return undefined;
  const authorSlug = slugify(authorName);
  const author = getAuthorBySlug(authorSlug);
  if (author) return author;
  const isCamelTeam = /^CAMEL(-AI)?\s*Team$/i.test(authorName?.trim() || "");
  if (authorprofile) {
    return { slug: authorSlug, name: authorName, avatar: authorprofile, role: "Contributor" };
  }
  if (isCamelTeam) {
    return {
      slug: authorSlug,
      name: authorName,
      avatar: CAMEL_TEAM_AVATAR_LIGHT,
      avatarDark: CAMEL_TEAM_AVATAR_DARK,
      role: "Contributor",
    };
  }
  return { slug: authorSlug, name: authorName, role: "Contributor" };
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => {
      const indexMd = path.join(POSTS_DIR, entry.name, "index.md");
      const indexMdx = path.join(POSTS_DIR, entry.name, "index.mdx");
      return fs.existsSync(indexMd) || fs.existsSync(indexMdx);
    })
    .map((entry) => entry.name);
}

export function buildTocFromMarkdown(markdown: string): TocItem[] {
  const lines = markdown.split("\n");
  const toc: TocItem[] = [];
  for (const line of lines) {
    const match = /^(#{1,6})\s+(.*)/.exec(line);
    if (match) {
      const depth = match[1].length;
      const text = match[2].replace(/`/g, "").trim();
      toc.push({ depth, text, slug: slugify(text) });
    }
  }
  return toc;
}

function resolveImagePaths(value: string | undefined, slug: string): string | undefined {
  if (!value || typeof value !== "string") return value;
  if (value.startsWith("./")) return `/blogs/${slug}/${value.slice(2)}`;
  if (value.startsWith("/")) return value;
  return value;
}

function resolveContentImagePaths(content: string, slug: string): string {
  return content.replace(/\]\(\.\//g, `](/blogs/${slug}/`);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPathMdx = path.join(POSTS_DIR, slug, "index.mdx");
  const fullPathMd = path.join(POSTS_DIR, slug, "index.md");
  const fullPath = fs.existsSync(fullPathMdx)
    ? fullPathMdx
    : fs.existsSync(fullPathMd)
      ? fullPathMd
      : null;
  if (!fullPath) return null;

  const file = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(file);

  const rawCover = data.cover || undefined;
  const rawThumbnail = data.thumbnail || data.cover || undefined;

  const frontmatter: BlogFrontmatter = {
    title: data.title || slug,
    subtitle: data.subtitle || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "CAMEL Team",
    role: data.role || "Author",
    authorprofile: data.authorprofile || undefined,
    description: data.description || "",
    seoTitle: data.seoTitle || undefined,
    seoDescription: data.seoDescription || undefined,
    keywords: Array.isArray(data.keywords)
      ? data.keywords
      : typeof data.keywords === "string"
        ? data.keywords.split(",").map((k: string) => k.trim())
        : [],
    toc: data.toc !== false,
    cover: resolveImagePaths(rawCover, slug),
    thumbnail:
      resolveImagePaths(rawThumbnail, slug) || resolveImagePaths(rawCover, slug) || undefined,
    featured: Boolean(data.featured),
    category: data.category || "",
  };

  const resolvedContent = resolveContentImagePaths(content, slug);
  const toc = frontmatter.toc ? buildTocFromMarkdown(content) : [];
  const readingTime = calculateReadingTime(content);
  const authorData = resolveAuthor(frontmatter.author, frontmatter.authorprofile);

  return { slug, content: resolvedContent, data: frontmatter, toc, readingTime, authorData };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug)).filter(Boolean) as BlogPost[];
}

export function sortPostsByDateDesc(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

export function buildSeoMeta(post: BlogPost) {
  const { title, description, seoTitle, seoDescription, keywords, thumbnail, cover, date, author } =
    post.data;
  const metaTitle = seoTitle || title;
  const metaDescription =
    seoDescription || description || post.data.subtitle || `${title} - CAMEL-AI Blog`;
  const ogImage = thumbnail || cover || "/image/thumbnail.png";
  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    ogImage,
    date,
    author,
  };
}
