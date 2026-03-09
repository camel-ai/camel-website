import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TAG_VARIANT_STYLES = {
  neon: "text-neon-primary bg-neon-secondary/10 border-neon-secondary [--tag-dot:var(--neon-700)]",
  gray: "text-gray-primary bg-gray-secondary/10 border-gray-secondary [--tag-dot:var(--gray-700)]",
  bone: "text-bone-primary bg-bone-secondary/10 border-bone-secondary [--tag-dot:var(--bone-700)]",
  green:
    "text-green-primary bg-green-secondary/10 border-green-secondary [--tag-dot:var(--green-700)]",
  red: "text-red-primary bg-red-secondary/10 border-red-secondary [--tag-dot:var(--red-700)]",
  yellow:
    "text-yellow-primary bg-yellow-secondary/10 border-yellow-secondary [--tag-dot:var(--yellow-700)]",
  purple:
    "text-purple-primary bg-purple-secondary/10 border-purple-secondary [--tag-dot:var(--purple-700)]",
} as const;

export type TagVariant = keyof typeof TAG_VARIANT_STYLES;

interface HeaderProps {
  tag?: string;
  /** Color variant for the tag badge. */
  tagVariant?: TagVariant;
  title: React.ReactNode;
  description?: string;
  variant?: "one-column" | "two-column";
  /** Optional background image for the left column when using the two-column variant. */
  leftBackgroundImage?: string;
  /** Optional background image for the right column when using the two-column variant. */
  rightBackgroundImage?: string;
  /** Optional minimum height for the header section. */
  minHeight?: "sm" | "md" | "lg";
  /** Optional CTA link URL. */
  ctaLink?: string;
  /** Optional CTA button label. Requires ctaLink to be set. */
  ctaLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Header({
  tag,
  tagVariant = "neon",
  title,
  description,
  variant = "one-column",
  leftBackgroundImage,
  rightBackgroundImage,
  ctaLink,
  ctaLabel,
  className,
  children,
}: HeaderProps) {
  const isExternalLink = ctaLink?.startsWith("http");
  const tagStyles = TAG_VARIANT_STYLES[tagVariant];
  return (
    <header
      className={cn("flex w-full items-center justify-center overflow-hidden py-8", className)}
    >
      <Container>
        {variant === "one-column" ? (
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            {tag && (
              <div
                className={cn(
                  "font-display-title inline-flex items-center rounded-sm border px-4 py-1 text-xs font-semibold tracking-wider uppercase",
                  tagStyles,
                )}
              >
                <div className="mr-2 h-1 w-1 rounded-sm bg-[var(--tag-dot)]" />
                {tag}
              </div>
            )}
            <h2 className="font-display-title text-foreground text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
              {title}
            </h2>
            {description && (
              <div className="text-muted-foreground max-w-3xl text-base leading-relaxed md:text-lg">
                {description}
              </div>
            )}
            {ctaLink && ctaLabel && (
              <div className="pt-4">
                {isExternalLink ? (
                  <Button
                    asChild
                    variant="default"
                    size="default"
                    className="font-display-title gap-2 font-semibold"
                  >
                    <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                      {ctaLabel}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="default"
                    size="default"
                    className="font-display-title gap-2 font-semibold"
                  >
                    <Link href={ctaLink}>
                      {ctaLabel}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                )}
              </div>
            )}
            {children && <div className="pt-4">{children}</div>}
          </div>
        ) : (
          <div className="flex flex-col items-stretch gap-8 md:flex-row md:gap-16">
            {/* Left side - tag, title, description aligned together */}
            <div
              className={cn(
                "flex w-full flex-col items-start space-y-6 text-left md:w-2/3",
                rightBackgroundImage &&
                  "bg-foreground/40 relative overflow-hidden rounded-[32px] p-6 md:p-8",
              )}
            >
              {rightBackgroundImage && (
                <>
                  <Image
                    src={rightBackgroundImage}
                    alt="Header background"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                  />
                  <div className="from-foreground/80 via-foreground/50 absolute inset-0 bg-gradient-to-l to-transparent" />
                </>
              )}

              <div
                className={cn(
                  rightBackgroundImage &&
                    "relative z-10 flex flex-col items-start justify-center gap-4",
                )}
              >
                {tag && (
                  <div
                    className={cn(
                      "font-display-title mb-4 inline-flex w-fit items-center rounded-md border-[0.5px] px-4 py-1.5 text-xs font-semibold tracking-wider uppercase",
                      tagStyles,
                    )}
                  >
                    <div className="mr-2 h-2 w-2 rounded-sm bg-[var(--tag-dot)]" />
                    {tag}
                  </div>
                )}
                <h2 className="font-display-title text-foreground mb-4 text-4xl leading-snug font-semibold tracking-tight md:text-5xl">
                  {title}
                </h2>
                {description && (
                  <div className="text-gray-primary max-w-4xl text-base leading-relaxed md:text-lg">
                    {description}
                  </div>
                )}
                {ctaLink && ctaLabel && (
                  <div className="pt-4">
                    {isExternalLink ? (
                      <Button
                        asChild
                        variant="secondary"
                        size="default"
                        className="font-display-title gap-2 font-semibold"
                      >
                        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                          {ctaLabel}
                          <ArrowRight className="size-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="secondary"
                        size="default"
                        className="font-display-title gap-2 font-semibold"
                      >
                        <Link href={ctaLink}>
                          {ctaLabel}
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
                {children && <div className="pt-4">{children}</div>}
              </div>
            </div>

            {/* Right side - optional imagery / supporting content */}
            <div
              className={cn(
                "relative flex h-full w-full flex-col overflow-hidden pt-2 md:w-1/3",
                leftBackgroundImage && "min-h-[220px] md:min-h-[260px]",
              )}
            >
              {leftBackgroundImage && (
                <>
                  <Image
                    src={leftBackgroundImage}
                    alt={typeof tag === "string" ? tag : "Header illustration"}
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="absolute inset-0 h-full w-full object-contain object-center"
                  />
                  <div className="absolute inset-0" />
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
