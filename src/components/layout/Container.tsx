import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: boolean;
  className?: string;
}

const containerSizes = {
  sm: "max-w-screen-sm", // 640px
  md: "max-w-screen-md", // 768px
  lg: "max-w-screen-lg", // 1024px
  xl: "max-w-screen-xl", // 1280px
  "2xl": "max-w-[1856px]", // 1856px
  full: "max-w-full",
};

export function Container({ children, size = "xl", padding = true, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        containerSizes[size],
        padding && "px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
