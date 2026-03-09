"use client";

import DOMPurify from "isomorphic-dompurify";
import { marked, Renderer } from "marked";
import { highlight } from "sugar-high";
import { useCallback, useMemo } from "react";

// Custom renderer for marked with styling
const renderer = new Renderer();

// Add IDs to headings for anchor links
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

renderer.heading = function ({ text, depth }) {
  const slug = slugify(text);
  return `<h${depth} id="${slug}"><a href="#${slug}" class="anchor-link" aria-hidden="true">#</a>${text}</h${depth}>`;
};

// External links open in new tab
renderer.link = function ({ href, title, text }) {
  const safeHref = href || "#";
  const titleAttr = title ? ` title="${title}"` : "";
  if (safeHref.startsWith("/") || safeHref.startsWith("#")) {
    return `<a href="${safeHref}"${titleAttr}>${text}</a>`;
  }
  return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer"${titleAttr}>${text}</a>`;
};

// Build Next.js image optimization URL for CDN-style delivery (AVIF/WebP, responsive)
function getOptimizedImageUrl(src: string, width: number, quality = 75): string {
  const encoded = encodeURIComponent(src);
  return `/_next/image?url=${encoded}&w=${width}&q=${quality}`;
}

// Images with rounded corners, figure support, and CDN optimization
renderer.image = function ({ href, title, text }) {
  const safeHref = href || "";
  const caption = title || text;
  const isLocal = safeHref.startsWith("/");
  let imgTag: string;
  if (isLocal) {
    // Route through Next.js image optimization for AVIF/WebP, responsive srcset
    const widths = [640, 828, 1200];
    const srcset = widths.map((w) => `${getOptimizedImageUrl(safeHref, w)} ${w}w`).join(", ");
    const defaultSrc = getOptimizedImageUrl(safeHref, 1200);
    const sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px";
    imgTag = `<img src="${defaultSrc}" srcset="${srcset}" sizes="${sizes}" alt="${text || ""}" loading="lazy" decoding="async" class="rounded-lg" />`;
  } else {
    imgTag = `<img src="${safeHref}" alt="${text || ""}" loading="lazy" decoding="async" class="rounded-lg" />`;
  }
  if (caption && caption !== safeHref) {
    return `<figure class="blog-figure">${imgTag}<figcaption>${caption}</figcaption></figure>`;
  }
  return imgTag;
};

// Code blocks with syntax highlighting and copy button
renderer.code = function ({ text, lang }) {
  const language = lang || "";
  let highlighted: string;
  try {
    highlighted = highlight(text);
  } catch {
    highlighted = text;
  }
  const langBadge = language ? `<span class="code-lang-badge">${language}</span>` : "";
  return `<div class="code-block-wrapper" data-code="${encodeURIComponent(text)}">${langBadge}<button class="copy-code-btn" type="button" aria-label="Copy code"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></button><pre class="language-${language}"><code>${highlighted}</code></pre></div>`;
};

// Blockquotes with callout support (GitHub-flavored)
renderer.blockquote = function ({ text }) {
  // Check for GitHub-style callouts: [!NOTE], [!TIP], [!WARNING], [!IMPORTANT], [!CAUTION]
  const calloutMatch = text.match(/^\s*<p>\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*/i);
  if (calloutMatch) {
    const type = calloutMatch[1].toLowerCase();
    const content = text.replace(calloutMatch[0], "<p>");
    const icons: Record<string, string> = {
      note: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
      tip: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
      warning:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
      important:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
      caution:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
    };
    return `<div class="callout callout-${type}"><div class="callout-title">${icons[type] || ""}<span>${type.charAt(0).toUpperCase() + type.slice(1)}</span></div><div class="callout-content">${content}</div></div>`;
  }
  return `<blockquote>${text}</blockquote>`;
};

// Tables with styling
renderer.table = function (token) {
  const headerCells = token.header.map((cell) => `<th>${cell.text}</th>`).join("");
  const headerRow = `<tr>${headerCells}</tr>`;
  const bodyRows = token.rows
    .map((row) => {
      const cells = row.map((cell) => `<td>${cell.text}</td>`).join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");
  return `<div class="table-wrapper"><table class="prose-table"><thead>${headerRow}</thead><tbody>${bodyRows}</tbody></table></div>`;
};

marked.setOptions({
  renderer,
  gfm: true,
  breaks: false,
});

export function CustomMDX({ source }: { source: string }) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const btn = target.closest(".copy-code-btn");
    if (!btn) return;
    const wrapper = btn.closest(".code-block-wrapper") as HTMLElement;
    if (!wrapper) return;
    const code = decodeURIComponent(wrapper.dataset.code || "");
    navigator.clipboard.writeText(code).then(() => {
      btn.classList.add("copied");
      setTimeout(() => btn.classList.remove("copied"), 2000);
    });
  }, []);

  const sanitizedHtml = useMemo(() => {
    const parsedHtml = marked(source) as string;

    return DOMPurify.sanitize(parsedHtml, {
      USE_PROFILES: { html: true, svg: true },
      ALLOW_UNKNOWN_PROTOCOLS: false,
      ADD_ATTR: [
        "aria-hidden",
        "class",
        "data-code",
        "decoding",
        "id",
        "loading",
        "rel",
        "sizes",
        "srcset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-width",
        "target",
        "viewBox",
        "x",
        "y",
        "rx",
        "ry",
        "cx",
        "cy",
        "r",
        "d",
      ],
    });
  }, [source]);

  return (
    <div
      className="blog-prose"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
