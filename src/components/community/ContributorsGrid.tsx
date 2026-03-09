"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  contributions: number;
  html_url: string;
  type: string;
}

export function ContributorsGrid() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github-contributors")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setContributors(data.contributors || []);
      })
      .catch(() => setError("Unable to load contributors"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16">
        <Loader2 className="text-neon-primary size-10 animate-spin" />
        <p className="text-gray-primary">Loading contributors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground">{error}</p>
        <Link
          href="https://github.com/camel-ai/camel/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-primary mt-4 inline-block hover:underline"
        >
          View on GitHub →
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="font-display-title text-foreground text-center text-2xl font-bold md:text-3xl">
        All Contributors
      </h2>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-16">
        {contributors.map((contributor) => (
          <Tooltip key={contributor.id}>
            <TooltipTrigger asChild>
              <Link
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-lg p-2 transition-all duration-200"
              >
                <div className="ring-border group-hover:ring-neon-primary relative size-10 overflow-hidden rounded-full ring-1 transition-all md:size-11">
                  <Image
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8}>
              <p className="font-medium">{contributor.login}</p>
              <p className="text-xs opacity-90">
                {contributor.contributions.toLocaleString()} commits
              </p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="pt-4 text-center">
        <Link
          href="https://github.com/camel-ai/camel/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-primary text-sm font-medium hover:underline"
        >
          View all contributors on GitHub →
        </Link>
      </div>
    </div>
  );
}
