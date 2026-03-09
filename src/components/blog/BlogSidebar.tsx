"use client";

import React from "react";
import Image from "next/image";

interface AuthorInfo {
  name: string;
  avatar?: string;
  role?: string;
  bio?: string;
  social?: {
    github?: string;
    twitter?: string;
    website?: string;
  };
}

interface BlogSidebarProps {
  author: AuthorInfo;
  date: string;
  title: string;
  subtitle?: string;
}

export function BlogSidebar({ author }: BlogSidebarProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Author info */}
      <div className="flex flex-col items-start gap-3">
        {author.avatar ? (
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={author.avatar}
              alt={author.name}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
            <span className="text-foreground text-sm font-medium">
              {author.name?.charAt(0) || "A"}
            </span>
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-foreground text-sm font-medium">{author.name}</p>
          {author.role && <p className="text-muted-foreground text-xs">{author.role}</p>}
        </div>
      </div>

      {/* Author bio */}
      {author.bio && <p className="text-muted-foreground text-xs leading-relaxed">{author.bio}</p>}
    </div>
  );
}
