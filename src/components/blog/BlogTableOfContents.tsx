"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { ListIcon } from "lucide-react";

type TocItem = { depth: number; text: string; slug: string };

interface BlogTableOfContentsProps {
  toc: TocItem[];
}

export function BlogTableOfContents({ toc }: BlogTableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.slug))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsOpen(false);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <div className="w-full">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer justify-between gap-2"
      >
        <span className="text-muted-foreground flex items-center gap-2 text-sm">
          <ChevronDownIcon
            className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
          />
          Table of Contents
        </span>
        <ListIcon className="h-4 w-4" />
      </Button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "mt-3 max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="pl-1">
          <ul className="space-y-2">
            {toc.map((item, index) => (
              <li
                key={`${item.slug}-${index}`}
                style={{ paddingLeft: `${(item.depth - 1) * 12}px` }}
              >
                <a
                  href={`#${item.slug}`}
                  className="text-muted-foreground hover:text-foreground block py-0.5 text-sm transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
