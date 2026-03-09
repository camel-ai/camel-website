import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack | CAMEL-AI",
  description:
    "Explore the CAMEL-AI tech stack - a comprehensive ecosystem of tools, frameworks, and integrations for building production-ready multi-agent systems.",
};

export default function TechStacksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
