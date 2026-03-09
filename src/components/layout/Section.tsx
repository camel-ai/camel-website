import { cn } from "@/lib/utils";

type PaddingSize = "none" | "sm" | "md" | "lg" | "xl";

interface SectionProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "dark" | "gradient";
  padding?: PaddingSize;
  paddingTop?: PaddingSize;
  paddingBottom?: PaddingSize;
  className?: string;
  id?: string;
}

const sectionVariants = {
  default: "bg-transparent",
  secondary: "bg-card",
  dark: "bg-[--color-bg-inverse] text-[--color-text-inverse]",
  gradient:
    "bg-gradient-to-b from-[--color-bg-primary] via-[--color-bg-tertiary] to-[--color-bg-primary]",
};

const sectionPaddingTop = {
  none: "pt-0",
  sm: "pt-8 md:pt-12",
  md: "pt-12 md:pt-16 lg:pt-20",
  lg: "pt-16 md:pt-24 lg:pt-32",
  xl: "pt-24 md:pt-32 lg:pt-40",
};

const sectionPaddingBottom = {
  none: "pb-0",
  sm: "pb-8 md:pb-12",
  md: "pb-12 md:pb-16 lg:pb-20",
  lg: "pb-16 md:pb-24 lg:pb-32",
  xl: "pb-24 md:pb-32 lg:pb-40",
};

export function Section({
  children,
  variant = "default",
  padding = "lg",
  paddingTop,
  paddingBottom,
  className,
  id,
}: SectionProps) {
  const pt = sectionPaddingTop[paddingTop ?? padding];
  const pb = sectionPaddingBottom[paddingBottom ?? padding];
  return (
    <section id={id} className={cn("w-full", sectionVariants[variant], pt, pb, className)}>
      {children}
    </section>
  );
}

export default Section;
