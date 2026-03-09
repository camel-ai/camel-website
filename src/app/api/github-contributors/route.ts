import { NextResponse } from "next/server";

export const revalidate = 3600; // 1 hour

export interface GitHubContributor {
  login: string;
  id: number;
  avatar_url: string;
  contributions: number;
  html_url: string;
  type: string;
}

export async function GET() {
  const repo = "camel-ai/camel";
  const perPage = 100;

  try {
    const contributors: GitHubContributor[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.github.com/repos/${repo}/contributors?per_page=${perPage}&page=${page}`,
        {
          headers: {
            "User-Agent": "camel-ai-website",
            Accept: "application/vnd.github+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }),
          },
          next: { revalidate },
        },
      );

      if (!response.ok) {
        const error = await response.text();
        console.error(`GitHub API error: ${response.status}`, error);
        return NextResponse.json(
          { error: "Failed to fetch contributors" },
          { status: response.status },
        );
      }

      const data: GitHubContributor[] = await response.json();

      // Filter out anonymous contributors (no login)
      contributors.push(...data.filter((c) => c.login));

      if (data.length < perPage) {
        hasMore = false;
      } else {
        page++;
        // GitHub limits to first 500 contributors; stop at 5 pages to be safe
        if (page > 5) hasMore = false;
      }
    }

    return NextResponse.json(
      { contributors, fetchedAt: new Date().toISOString() },
      {
        status: 200,
        headers: {
          "Cache-Control": `s-maxage=${revalidate}, stale-while-revalidate=86400`,
        },
      },
    );
  } catch (error) {
    console.error("Failed to fetch contributors:", error);
    return NextResponse.json({ error: "Failed to fetch contributors" }, { status: 500 });
  }
}
