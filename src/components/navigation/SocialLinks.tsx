"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const socialItems: { title: string; href: string; icon: ReactNode }[] = [
  {
    title: "GitHub",
    href: "https://github.com/camel-ai",
    icon: <Image src="/icon/github.svg" alt="GitHub" width={24} height={24} className="size-5" />,
  },
  {
    title: "Twitter/X",
    href: "https://x.com/CamelAIOrg",
    icon: <Image src="/icon/x.svg" alt="Twitter/X" width={24} height={24} className="size-5" />,
  },
  {
    title: "Discord",
    href: "https://discord.camel-ai.org",
    icon: <Image src="/icon/discord.svg" alt="Discord" width={24} height={24} className="size-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/camel-ai-org/",
    icon: (
      <Image src="/icon/linkedin.svg" alt="LinkedIn" width={24} height={24} className="size-5" />
    ),
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@CamelAI",
    icon: <Image src="/icon/youtube.svg" alt="YouTube" width={24} height={24} className="size-5" />,
  },
  {
    title: "Reddit",
    href: "https://www.reddit.com/r/CamelAI/",
    icon: <Image src="/icon/reddit.svg" alt="Reddit" width={24} height={24} className="size-5" />,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex w-full flex-row flex-wrap gap-3">
      {socialItems.map((item) => {
        const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto");
        return (
          <Link
            key={item.title}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="bg-neon-secondary/10 hover:bg-neon-secondary/20 text-neon-primary hover:text-neon-primary inline-flex size-10 items-center justify-center rounded-full transition-colors dark:bg-white dark:hover:bg-neutral-100"
            aria-label={item.title}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
