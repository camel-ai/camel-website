"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function formatStars(count: number) {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  })
    .format(count)
    .toLowerCase();
}

type GithubStarsCountProps = {
  className?: string;
};

export function GithubStarsCount({ className }: GithubStarsCountProps) {
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch("/api/github-stars");
        const data = await res.json();
        if (typeof data.stars === "number") setStarCount(data.stars);
      } catch (e) {
        console.error("Failed to fetch stars", e);
      }
    };
    fetchStars();
  }, []);

  return (
    <span className={cn("tabular-nums", className)}>
      {starCount !== null ? formatStars(starCount) : "…"}
    </span>
  );
}
