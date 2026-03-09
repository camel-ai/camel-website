import { NextResponse } from "next/server";

export const revalidate = 3600; // seconds

export async function GET() {
  const repos = [
    "camel-ai/camel",
    "camel-ai/seta",
    "camel-ai/owl",
    "camel-ai/oasis",
    "camel-ai/crab",
    "camel-ai/loong",
    "camel-ai/agent-trust",
  ];

  try {
    const starCounts = await Promise.all(
      repos.map(async (repo) => {
        try {
          const response = await fetch(`https://api.github.com/repos/${repo}`, {
            headers: {
              "User-Agent": "camel-ai-website",
              Accept: "application/vnd.github+json",
              // Add GitHub token if available in env to avoid rate limits
              ...(process.env.GITHUB_TOKEN && {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              }),
            },
            next: { revalidate },
          });

          if (!response.ok) return 0;
          const data = await response.json();
          return data.stargazers_count || 0;
        } catch (err) {
          console.error(`Failed to fetch stars for ${repo}:`, err);
          return 0;
        }
      }),
    );

    const totalStars = starCounts.reduce((acc, count) => acc + count, 0);

    return NextResponse.json(
      { stars: totalStars, fetchedAt: new Date().toISOString() },
      {
        status: 200,
        headers: {
          "Cache-Control": `s-maxage=${revalidate}, stale-while-revalidate=86400`,
        },
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return NextResponse.json(
      { error: "Unexpected error" },
      { status: 500, headers: { "Cache-Control": `s-maxage=${revalidate}` } },
    );
  }
}
