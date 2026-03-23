"use client";

import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SocialLinks from "../navigation/SocialLinks";

const INITIAL_PAGE_SIZE = 10;
const LOAD_MORE_SIZE = 10;

interface SerializedPost {
  slug: string;
  title: string;
  description?: string;
  date: string;
  category?: string;
  thumbnail?: string;
  author?: string;
  authorprofile?: string;
}

interface BlogContentProps {
  posts: SerializedPost[];
  categories: string[];
}

export default function BlogContent({ posts, categories }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter((p) => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  const visiblePosts = useMemo(
    () => filteredPosts.slice(0, visibleCount),
    [filteredPosts, visibleCount],
  );
  const hasMore = visibleCount < filteredPosts.length;

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(INITIAL_PAGE_SIZE);
  }, [selectedCategory]);

  // Load more when sentinel comes into view
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_SIZE, filteredPosts.length));
  }, [filteredPosts.length]);

  useEffect(() => {
    if (!hasMore) return;
    const el = loadMoreRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "100px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-0">
      {/* Left Sidebar - Categories and Social Links */}
      <aside className="h-fit w-full flex-shrink-0 lg:sticky lg:top-24 lg:mr-12 lg:w-44 lg:self-start">
        <div className="flex flex-col gap-4 lg:gap-6">
          {/* Category list */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 lg:flex-col">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "font-display-title cursor-pointer rounded-md px-2 py-1.5 text-left text-sm transition-colors lg:rounded-none lg:px-0",
                  !selectedCategory
                    ? "text-foreground bg-muted/60 font-semibold lg:bg-transparent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 lg:hover:bg-transparent",
                )}
              >
                All posts
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                  className={cn(
                    "font-display-title cursor-pointer rounded-md px-2 py-1.5 text-left text-sm transition-colors lg:rounded-none lg:px-0",
                    selectedCategory === cat
                      ? "text-foreground bg-muted/60 font-semibold lg:bg-transparent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 lg:hover:bg-transparent",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Separator */}
          <div className="border-border my-1 border-t lg:my-2" />

          {/* Follow us section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display-title text-foreground text-sm font-semibold">Follow us</h3>
            <SocialLinks />
          </div>
        </div>
      </aside>

      {/* Right Side - Blog Posts List */}
      <div className="flex flex-1 flex-col gap-8">
        {filteredPosts.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center">
            No posts found in this category.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {visiblePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group bg-card hover:border-neon-secondary flex flex-col overflow-hidden rounded-2xl border border-transparent transition-colors"
                >
                  {/* Right Side - Cover Image */}
                  <div className="bg-card relative h-48 w-full sm:aspect-[16/9] sm:h-auto">
                    {post.thumbnail && (
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  {/* Left Side - Content (Vertical Layout) */}
                  <div className="flex flex-1 flex-col justify-between px-4 py-4 sm:px-6">
                    <div className="flex flex-col gap-3">
                      {/* Category and Date */}
                      <div className="text-muted-foreground flex items-center gap-2 text-xs">
                        {post.category && (
                          <>
                            <span className="tracking-wide uppercase">{post.category}</span>
                            <span>•</span>
                          </>
                        )}
                        <span className="tracking-wide uppercase">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display-title text-foreground line-clamp-2 text-xl font-semibold group-hover:underline sm:text-2xl">
                        {post.title}
                      </h3>

                      {/* Description */}
                      {post.description && (
                        <p className="text-muted-foreground line-clamp-3 text-xs sm:text-sm">
                          {post.description}
                        </p>
                      )}
                    </div>

                    {/* Author */}
                    {post.author && (
                      <div className="border-border mt-4 flex items-center gap-2 border-t pt-4">
                        <span className="text-muted-foreground text-xs">{post.author}</span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            {hasMore && (
              <div
                ref={loadMoreRef}
                className="text-muted-foreground flex h-20 items-center justify-center text-sm"
                aria-hidden
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
