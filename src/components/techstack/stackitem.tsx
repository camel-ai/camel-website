"use client";

import React, { useState } from "react";
import Image from "next/image";

interface StackItemProps {
  children: React.ReactNode;
  variant?: "neon" | "green" | "yellow" | "pink" | "orange" | "grey" | "blue" | "red" | "bone";
  onClick?: () => void;
  id?: string;
  showLogo?: boolean;
  showText?: boolean;
  title?: string;
}

const colorVariants = {
  neon: "bg-neon-secondary/30 hover:bg-neon-secondary/80",
  green: "bg-green-secondary/30 hover:bg-green-secondary/80",
  yellow: "bg-yellow-secondary/30 hover:bg-yellow-secondary/80",
  pink: "bg-pink-secondary/30 hover:bg-pink-secondary/80",
  orange: "bg-orange-secondary/30 hover:bg-orange-secondary/80",
  grey: "bg-[color-mix(in_srgb,var(--gray-5)_18%,transparent)] hover:bg-[color-mix(in_srgb,var(--gray-5)_38%,transparent)] dark:bg-[color-mix(in_srgb,var(--gray-8)_22%,transparent)] dark:hover:bg-[color-mix(in_srgb,var(--gray-8)_40%,transparent)]",
  blue: "bg-blue-secondary/30 hover:bg-blue-secondary/80",
  red: "bg-red-secondary/30 hover:bg-red-secondary/80",
  bone: "bg-bone-secondary/30 hover:bg-bone-secondary/80",
};

/** Section title → folder under public/tech-stack-logos/ (no entry = logos not used for that section) */
const LOGO_CATEGORY_BY_SECTION: Record<string, string> = {
  Models: "models",
  Storage: "storage",
  "Data Loaders": "data-loaders",
  Interpreters: "interpreters",
  Runtime: "run-time",
  "Run Time": "run-time",
  Retrievers: "retrievers",
  MCP: "mcp",
  "Human in the Loop": "human-in-the-loop",
  Observe: "observe",
};

export default function StackItem({
  children,
  variant = "neon",
  onClick,
  id,
  title,
  showLogo = false,
  showText = true,
}: StackItemProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  const logoCategory = title ? LOGO_CATEGORY_BY_SECTION[title] : undefined;
  const fullLogoPath =
    showLogo && id && logoCategory ? `/tech-stack-logos/${logoCategory}/${id}.svg` : null;

  const showImage = Boolean(fullLogoPath && !logoFailed);
  const showLabel = showText || logoFailed;
  const isLogoOnly = showLogo && !showText && showImage;

  const buttonClasses = `
    group
    ${isLogoOnly ? "p-1" : "px-4 py-1"}
    font-display-title text-sm sm:text-base font-semibold
    transition-all duration-200 ease-in-out
    rounded-sm
    cursor-pointer
    flex items-center gap-2
    ${colorVariants[variant]}
    hover:border-transparent
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current
  `;

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {showImage && (
        <span className="inline-flex shrink-0 items-center justify-center rounded transition-opacity duration-200 dark:bg-white dark:px-1.5 dark:py-1 dark:opacity-100 dark:shadow-sm dark:group-hover:opacity-50">
          <Image
            src={fullLogoPath!}
            alt=""
            width={16}
            height={16}
            unoptimized
            className={isLogoOnly ? "h-6 w-auto" : "h-4 w-auto"}
            onError={() => setLogoFailed(true)}
          />
        </span>
      )}
      {showLabel && children}
    </button>
  );
}
