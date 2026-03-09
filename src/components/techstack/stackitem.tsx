import React from "react";
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
  grey: "bg-gray-secondary/30 hover:bg-gray-secondary/80",
  blue: "bg-blue-secondary/30 hover:bg-blue-secondary/80",
  red: "bg-red-secondary/30 hover:bg-red-secondary/80",
  bone: "bg-bone-secondary/30 hover:bg-bone-secondary/80",
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
  // Map section titles to directory names
  const getLogoPath = (sectionTitle: string) => {
    const titleMap: { [key: string]: string } = {
      Models: "models",
      Tools: "tools",
      Storage: "storage",
      "Data Loaders": "loaders",
      Interpreters: "interpreters",
      "Run Time": "run-time",
      "Human in the Loop": "human-in-the-loop",
      Observe: "observe",
    };
    return titleMap[sectionTitle] || sectionTitle.toLowerCase().replace(/\s+/g, "-");
  };

  // Construct the full logo path using the mapped directory name
  const logoDir = title ? getLogoPath(title) : "";
  const fullLogoPath =
    showLogo && id && logoDir
      ? `https://camel-ai.github.io/camel_asset/logos/${logoDir}/${id}.svg`
      : null;

  // Special styling for logo-only items
  const isLogoOnly = showLogo && !showText;
  const buttonClasses = `
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
    <button onClick={onClick} className={buttonClasses}>
      {fullLogoPath && (
        <Image
          src={fullLogoPath}
          alt={`${children} logo`}
          width={16}
          height={16}
          className={isLogoOnly ? "h-6 w-auto" : "h-4 w-auto"}
          onError={() => {
            // Hide image if it fails to load
            const img = document.querySelector(`img[src="${fullLogoPath}"]`) as HTMLImageElement;
            if (img) {
              img.style.display = "none";
            }
          }}
        />
      )}
      {showText && children}
    </button>
  );
}
