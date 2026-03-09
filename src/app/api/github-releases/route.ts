import { NextResponse } from "next/server";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
}

async function getFileSize(url: string): Promise<number> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentLength = response.headers.get("content-length");
    return contentLength ? parseInt(contentLength, 10) : 0;
  } catch (error) {
    console.error(`Error fetching file size for ${url}:`, error);
    return 0;
  }
}

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/repos/eigent/eigent/releases/latest", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Eigent-Website",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const release: GitHubRelease = await response.json();

    // Map assets to platform types and fetch their sizes
    const packageSizes: Record<string, { size: number; url: string }> = {};

    // Process assets in parallel to get file sizes
    const assetPromises = release.assets.map(async (asset) => {
      const name = asset.name.toLowerCase();
      const fileSize = await getFileSize(asset.browser_download_url);

      if (name.includes("mac") && (name.includes("m1") || name.includes("arm64"))) {
        return {
          type: "MAC_M",
          size: fileSize,
          url: asset.browser_download_url,
        };
      } else if (name.includes("mac") && (name.includes("intel") || name.includes("x64"))) {
        return {
          type: "MAC_I",
          size: fileSize,
          url: asset.browser_download_url,
        };
      } else if (name.includes("windows") || name.includes("win")) {
        return {
          type: "WINDOWS",
          size: fileSize,
          url: asset.browser_download_url,
        };
      } else if (name.includes("linux")) {
        return {
          type: "LINUX",
          size: fileSize,
          url: asset.browser_download_url,
        };
      }
      return null;
    });

    const results = await Promise.all(assetPromises);

    results.forEach((result) => {
      if (result) {
        packageSizes[result.type] = {
          size: result.size,
          url: result.url,
        };
      }
    });

    return NextResponse.json({
      success: true,
      version: release.tag_name,
      packages: packageSizes,
    });
  } catch (error) {
    console.error("Error fetching GitHub releases:", error);

    // Return fallback data if GitHub API fails
    return NextResponse.json({
      success: false,
      version: "latest",
      packages: {
        MAC_M: { size: 125 * 1024 * 1024, url: "" },
        MAC_I: { size: 128 * 1024 * 1024, url: "" },
        WINDOWS: { size: 135 * 1024 * 1024, url: "" },
        LINUX: { size: 120 * 1024 * 1024, url: "" },
      },
    });
  }
}
