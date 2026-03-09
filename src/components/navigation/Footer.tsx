"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import NewsletterCard from "../newsletter/card";
import SocialLinks from "./SocialLinks";

const RESEARCH_KEYS = [
  { key: "camel", href: "https://github.com/camel-ai/camel" },
  { key: "seta", href: "https://github.com/camel-ai/seta" },
  { key: "owl", href: "https://github.com/camel-ai/owl" },
  { key: "oasis", href: "https://github.com/camel-ai/oasis" },
  { key: "crab", href: "https://github.com/camel-ai/crab" },
  { key: "loong", href: "https://github.com/camel-ai/loong" },
  { key: "agentTrust", href: "https://github.com/camel-ai/agent-trust" },
  { key: "emos", href: "https://arxiv.org/abs/2410.22662" },
];

const PRODUCT_KEYS = [
  { key: "openSourceCowork", href: "https://www.eigent.ai" },
  { key: "environmentForAgent", href: "https://www.eigent.ai/environment" },
];

const FRAMEWORK_KEYS = [
  { key: "informationRetrieval", href: "/framework/information-retrieval" },
  { key: "softwareEngineering", href: "/framework/software-engineering" },
  { key: "multimodal", href: "/framework/multimodal" },
  { key: "embodiedAI", href: "/framework/embodied-ai" },
  { key: "socialSimulation", href: "/framework/social-simulation" },
  { key: "domainSpecific", href: "/framework/domain-specific" },
];

const COMMUNITY_KEYS = [
  { key: "communityHub", href: "/community" },
  { key: "ambassador", href: "/community/ambassador" },
  { key: "mcp", href: "https://mcp.camel-ai.org" },
];

const RESOURCE_KEYS = [
  { key: "blogs", href: "/blogs" },
  { key: "docs", href: "https://docs.camel-ai.org" },
  { key: "techStack", href: "/techstacks" },
  { key: "about", href: "/about" },
  {
    key: "careers",
    href: "https://eigent-ai.notion.site/eigent-ai-careers?source=copy_link",
  },
  { key: "branding", href: "/branding" },
];

export default function Footer() {
  const t = useTranslations("Footer");

  const productItems = PRODUCT_KEYS.map(({ key, href }) => ({
    title: t(key),
    href,
  }));
  const researchItems = RESEARCH_KEYS.map(({ key, href }) => ({
    title: t(key),
    href,
  }));
  const communityItems = COMMUNITY_KEYS.map(({ key, href }) => ({
    title: t(key),
    href,
  }));
  const frameworkItems = FRAMEWORK_KEYS.map(({ key, href }) => ({
    title: t(key),
    href,
  }));
  const resourceItems = RESOURCE_KEYS.map(({ key, href }) => ({
    title: t(key),
    href,
  }));
  return (
    <footer className="bg-card rounded-t-[40px] py-6 md:rounded-t-[80px] md:py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 md:gap-20 md:px-8">
        {/* Banner: Slogan + Subscribe */}
        <div className="border-border flex flex-col items-stretch justify-between gap-8 border-b-1 py-8 md:gap-16 md:py-10">
          <div className="flex w-full flex-col justify-between">
            <h2 className="font-display-title text-neon-secondary/40 text-3xl leading-snug font-semibold sm:text-4xl md:text-6xl lg:text-7xl">
              {t("slogan")}
            </h2>
          </div>
          <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-6">
            <p className="text-text-secondary font-text-body max-w-md text-base">
              {t("subscribeDesc")}
            </p>
            <NewsletterCard className="w-full md:max-w-[560px]" />
          </div>
        </div>

        {/* Content: 6 column layout */}
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-12">
          {/* Column 1-2: Logo, mission, socials */}
          <div className="col-span-1 flex flex-col items-start justify-between gap-6 sm:col-span-2 lg:col-span-2">
            <div className="space-y-4">
              <Link href="/" className="w-fit transition-opacity hover:opacity-80">
                <Image
                  src="/logo/camel.png"
                  alt="CAMEL-AI"
                  width={256}
                  height={36}
                  className="h-10 w-auto object-contain dark:hidden"
                />
                <Image
                  src="/logo/camel_white.png"
                  alt="CAMEL-AI"
                  width={256}
                  height={36}
                  className="hidden h-10 w-auto object-contain dark:block"
                />
              </Link>
              <p className="text-gray-primary font-text-body w-full pt-4 text-base leading-relaxed md:pl-4">
                {t("mission")}
              </p>
            </div>
            <div className="w-full">
              <SocialLinks />
            </div>
          </div>

          {/* Column 3: Product */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display-title text-neon-primary text-base font-bold tracking-[0.1em] uppercase">
              {t("product")}
            </h3>
            <div className="flex flex-col gap-3">
              {productItems.map((item) => {
                const isExternal = item.href.startsWith("http");
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="font-text-body text-foreground group flex items-center justify-between text-sm"
                  >
                    <span className="group-hover:text-neon-primary relative bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 ease-out group-hover:bg-[length:100%_1px]">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 4: Research */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display-title text-neon-primary text-base font-bold tracking-[0.1em] uppercase">
              {t("research")}
            </h3>
            <div className="flex flex-col gap-3">
              {researchItems.map((item) => {
                const isExternal = item.href.startsWith("http");
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="font-text-body text-foreground group flex items-center justify-between text-sm"
                  >
                    <span className="group-hover:text-neon-primary relative bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 ease-out group-hover:bg-[length:100%_1px]">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 5: Community + Framework */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-display-title text-neon-primary text-base font-bold tracking-[0.1em] uppercase">
                {t("community")}
              </h3>
              <div className="flex flex-col gap-3">
                {communityItems.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="font-text-body text-foreground group flex items-center justify-between text-sm"
                    >
                      <span className="group-hover:text-neon-primary relative bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 ease-out group-hover:bg-[length:100%_1px]">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display-title text-neon-primary text-base font-bold tracking-[0.1em] uppercase">
                {t("framework")}
              </h3>
              <div className="flex flex-col gap-3">
                {frameworkItems.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="font-text-body text-foreground group flex items-center justify-between text-sm"
                    >
                      <span className="group-hover:text-neon-primary relative bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 ease-out group-hover:bg-[length:100%_1px]">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 6: Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display-title text-neon-primary text-base font-bold tracking-[0.1em] uppercase">
              {t("resources")}
            </h3>
            <div className="flex flex-col gap-3">
              {resourceItems.map((item) => {
                const isExternal = item.href.startsWith("http");
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="font-text-body text-foreground group flex items-center justify-between text-sm"
                  >
                    <span className="group-hover:text-neon-primary relative bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 ease-out group-hover:bg-[length:100%_1px]">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Ending */}
        <div className="flex w-full flex-row items-center justify-center gap-6 pt-8">
          <p className="text-text-secondary font-text-body text-sm" suppressHydrationWarning>
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
