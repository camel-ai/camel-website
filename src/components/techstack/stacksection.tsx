import React from "react";
import StackItem from "./stackitem";

export interface StackItemData {
  id: string;
  name: string;
  logo?: boolean;
  showText?: boolean;
  subcategory?: string;
  onClick?: () => void;
}

export interface StackSectionProps {
  title: string;
  subtitle?: string;
  items: StackItemData[];
  variant?: "neon" | "green" | "yellow" | "pink" | "orange" | "grey" | "blue" | "red" | "bone";
  className?: string;
  grouped?: boolean;
}

const backgroundColorVariants = {
  neon: "bg-neon-secondary/30",
  green: "bg-green-secondary/30",
  yellow: "bg-yellow-secondary/30",
  pink: "bg-pink-secondary/30",
  orange: "bg-orange-secondary/30",
  grey: "bg-gray-secondary/30",
  blue: "bg-blue-secondary/30",
  red: "bg-red-secondary/30",
  bone: "bg-bone-secondary/30",
};

const borderColorVariants = {
  neon: "border-neon-primary",
  green: "border-green-primary",
  yellow: "border-yellow-primary",
  pink: "border-pink-primary",
  orange: "border-orange-primary",
  grey: "border-gray-primary",
  blue: "border-blue-primary",
  red: "border-red-primary",
  bone: "border-bone-primary",
};

// Group items by subcategory
const groupItemsBySubcategory = (items: StackItemData[]) => {
  const groups: { [key: string]: StackItemData[] } = {};

  items.forEach((item) => {
    const subcategory = item.subcategory || "Other";
    if (!groups[subcategory]) {
      groups[subcategory] = [];
    }
    groups[subcategory].push(item);
  });

  return groups;
};

export default function StackSection({
  title,
  subtitle,
  items,
  variant = "neon",
  className = "",
  grouped = false,
}: StackSectionProps) {
  // If grouped is true, render grouped layout
  if (grouped) {
    const groupedItems = groupItemsBySubcategory(items);
    const subcategories = Object.keys(groupedItems);

    return (
      <div className={`flex flex-col py-3 md:py-4 lg:flex-row ${className}`}>
        {/* Title Section */}
        <div
          className={`flex-shrink-0 border-t pt-3 md:pt-4 lg:w-1/5 ${borderColorVariants[variant]}`}
        >
          <h3 className={`font-display-title text-foreground mb-2 text-xl font-bold md:text-2xl`}>
            {title}
          </h3>
          {subtitle && <p className="text-muted-foreground font-palatino text-sm">{subtitle}</p>}
        </div>

        {/* Grouped Items Layout */}
        <div className="flex-1 lg:w-4/5">
          <div
            className={`border-border rounded-tr-xl rounded-b-xl border p-3 backdrop-blur-sm md:p-4 ${backgroundColorVariants[variant]}`}
          >
            {subcategories.map((subcategory, groupIndex) => (
              <div
                key={subcategory}
                className={`${groupIndex > 0 ? "border-border/40 mt-6 flex flex-col border-t pt-6" : ""}`}
              >
                {/* Subcategory Title */}
                <h4 className="font-display-title text-foreground mb-3 text-base font-bold md:text-lg">
                  {subcategory}:
                </h4>
                {/* Items in this subcategory */}
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {groupedItems[subcategory].map((item) => (
                    <StackItem
                      key={item.id}
                      variant={variant}
                      onClick={item.onClick}
                      id={item.id}
                      title={title}
                      showLogo={item.logo || false}
                      showText={item.showText !== false}
                    >
                      {item.name}
                    </StackItem>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Original non-grouped layout
  return (
    <div className={`flex flex-col py-3 md:py-4 lg:flex-row ${className}`}>
      {/* Title Section */}
      <div
        className={`flex-shrink-0 border-t pt-3 md:pt-4 lg:w-1/5 ${borderColorVariants[variant]}`}
      >
        <h3 className={`font-display-title text-foreground mb-2 text-xl font-semibold md:text-2xl`}>
          {title}
        </h3>
        {subtitle && <p className="text-muted-foreground font-display-title text-sm">{subtitle}</p>}
      </div>

      {/* Items Layout */}
      <div className="flex-1 lg:w-4/5">
        <div
          className={`border-border flex h-full flex-wrap gap-2 rounded-tr-xl rounded-b-xl border p-3 backdrop-blur-sm md:gap-4 md:p-4 ${backgroundColorVariants[variant]}`}
        >
          {items.map((item) => (
            <StackItem
              key={item.id}
              variant={variant}
              onClick={item.onClick}
              id={item.id}
              title={title}
              showLogo={item.logo || false}
              showText={item.showText !== false}
            >
              {item.name}
            </StackItem>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export a template function for easy usage
export const createStackSection = (
  title: string,
  items: string[] | StackItemData[],
  options?: {
    subtitle?: string;
    variant?: StackSectionProps["variant"];
    onItemClick?: (itemName: string, index: number) => void;
    grouped?: boolean;
  },
): StackSectionProps => {
  const stackItems: StackItemData[] = items.map((item, index) => {
    if (typeof item === "string") {
      return {
        id: `${title.toLowerCase().replace(/\s+/g, "-")}-${index}`,
        name: item,
        onClick: options?.onItemClick ? () => options.onItemClick!(item, index) : undefined,
      };
    }
    return item;
  });

  return {
    title,
    subtitle: options?.subtitle,
    items: stackItems,
    variant: options?.variant || "neon",
    grouped: options?.grouped || false,
  };
};
