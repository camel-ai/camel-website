import React from "react";
import { cn } from "@/lib/utils";

interface ContentProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  spacing?: "tight" | "normal" | "relaxed" | "loose";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * Layout mode.
   * - "stack": single column (default, previous behavior)
   * - "grid": use CSS grid with `columns` or a custom grid config
   */
  layout?: "stack" | "grid";
  /** Number of columns to use when `layout="grid"` (falls back to stack when undefined). */
  columns?: 2 | 3 | 4;
  /**
   * Optional custom grid class (e.g. "grid-cols-1 md:grid-cols-[2fr_3fr]").
   * When provided with `layout="grid"`, this overrides the default column mapping.
   */
  customGrid?: string;
  className?: string;
}

const contentAlign = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
} as const;

const contentSpacing = {
  tight: "space-y-4",
  normal: "space-y-6",
  relaxed: "space-y-8",
  loose: "space-y-12",
} as const;

const contentGridSpacing = {
  tight: "gap-4",
  normal: "gap-6",
  relaxed: "gap-8",
  loose: "gap-12",
} as const;

const contentMaxWidth = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  full: "max-w-none",
} as const;

const gridColumnsByCount: Record<NonNullable<ContentProps["columns"]>, string> = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-4",
};

export function Content({
  children,
  align = "left",
  spacing = "normal",
  maxWidth = "full",
  layout = "stack",
  columns,
  customGrid,
  className,
}: ContentProps) {
  const isGrid = layout === "grid" && (columns || customGrid);

  return (
    <div
      className={cn(
        // base layout
        isGrid ? "grid" : "flex flex-col",
        // alignment
        contentAlign[align],
        // spacing (flex vs grid)
        isGrid ? contentGridSpacing[spacing] : contentSpacing[spacing],
        // responsive columns or custom grid
        isGrid && (customGrid || (columns && gridColumnsByCount[columns])),
        // width constraints
        contentMaxWidth[maxWidth],
        align === "center" && "mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Content;
