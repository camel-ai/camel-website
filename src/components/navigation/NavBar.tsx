"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuIcon, Github, X, ChevronDown, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

type NavItem = "product" | "research" | "community" | null;

const RESEARCH_ITEM_KEYS = [
  {
    key: "camel",
    href: "https://github.com/camel-ai/camel",
    iconPath: "/logo/camel_icon.png",
    iconPathDark: "/logo/camel_icon_white.png",
  },
  {
    key: "seta",
    href: "https://github.com/camel-ai/seta",
    iconPath: "/logo/seta_icon.png",
    iconPathDark: "/logo/seta_icon_white.png",
  },
  {
    key: "owl",
    href: "https://github.com/camel-ai/owl",
    iconPath: "/logo/owl_icon.png",
    iconPathDark: "/logo/owl_icon_white.png",
  },
  {
    key: "oasis",
    href: "https://github.com/camel-ai/oasis",
    iconPath: "/logo/oasis_icon.png",
    iconPathDark: "/logo/oasis_icon_white.png",
  },
  {
    key: "crab",
    href: "https://github.com/camel-ai/crab",
    iconPath: "/logo/crab_icon.png",
    iconPathDark: "/logo/crab_icon_white.png",
  },
  {
    key: "loong",
    href: "https://github.com/camel-ai/loong",
    iconPath: "/logo/loong_icon.png",
    iconPathDark: "/logo/loong_icon_white.png",
  },
  {
    key: "agentTrust",
    href: "https://github.com/camel-ai/agent-trust",
    iconPath: "/logo/agent_trust_icon.png",
    iconPathDark: "/logo/agent_trust_icon_white.png",
  },
  {
    key: "emos",
    href: "https://arxiv.org/abs/2410.22662",
    iconPath: "/logo/emos_icon.png",
    iconPathDark: "/logo/emos_icon_white.png",
  },
] as const;

// Content item component for standard items (with optional subtitle)
interface NavContentItemProps {
  title: string;
  href: string;
  description?: string;
  hoverBg?: boolean;
}

const NavContentItem = ({ title, href, description, hoverBg }: NavContentItemProps) => {
  const isExternal = href?.startsWith("http");
  const Comp = isExternal ? "a" : Link;

  return (
    <Comp
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group link-grow-underline block",
        hoverBg ? "hover:bg-muted/70 rounded-lg px-2 py-2.5 transition-colors" : "py-2",
      )}
    >
      <span className="font-display-title group-hover:text-foreground text-base font-semibold transition-colors">
        {title}
      </span>
      {description && <p className="text-muted-foreground mt-0.5 text-xs">{description}</p>}
    </Comp>
  );
};

// Content item component for research items (with logo) - fixed height
interface ResearchContentItemProps {
  title: string;
  href: string;
  description: string;
  iconPath: string;
  iconPathDark?: string;
}

const ResearchContentItem = ({
  title,
  href,
  description,
  iconPath,
  iconPathDark,
}: ResearchContentItemProps) => {
  const isExternal = href?.startsWith("http");
  const Comp = isExternal ? "a" : Link;

  return (
    <Comp
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group hover:bg-muted/70 flex h-[68px] items-center gap-3 rounded-lg px-2 py-2.5 transition-colors"
    >
      <img src={iconPath} alt={title} className="size-9 shrink-0 object-contain dark:hidden" />
      <img
        src={iconPathDark ?? iconPath}
        alt={title}
        className="hidden size-9 shrink-0 object-contain dark:block"
      />
      <div className="min-w-0">
        <span className="font-display-title group-hover:text-foreground text-sm font-semibold transition-colors">
          {title}
        </span>
        <p className="text-muted-foreground mt-0.5 line-clamp-1 text-xs">{description}</p>
      </div>
    </Comp>
  );
};

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="size-9 cursor-pointer"
        aria-label="Theme toggle"
      >
        <Sun className="text-muted-foreground size-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="size-9 cursor-pointer"
    >
      {isDark ? (
        <Sun className="text-muted-foreground hover:text-foreground size-4" />
      ) : (
        <Moon className="text-muted-foreground hover:text-foreground size-4" />
      )}
    </Button>
  );
}

const NAV_STORAGE_KEY = "camel-nav-expanded";

function getStoredNavState(): {
  activeNav: NavItem;
  isMobileMenuOpen: boolean;
  mobileExpanded: string | null;
} {
  if (typeof window === "undefined") {
    return { activeNav: null, isMobileMenuOpen: false, mobileExpanded: null };
  }
  try {
    const stored = sessionStorage.getItem(NAV_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        activeNav: parsed.activeNav ?? null,
        isMobileMenuOpen: !!parsed.isMobileMenuOpen,
        mobileExpanded: parsed.mobileExpanded ?? null,
      };
    }
  } catch {
    // ignore parse errors
  }
  return { activeNav: null, isMobileMenuOpen: false, mobileExpanded: null };
}

export default function NavBar() {
  const t = useTranslations("NavBar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);
  const [activeNav, setActiveNav] = useState<NavItem>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hasRestored, setHasRestored] = useState(false);

  const researchItems = RESEARCH_ITEM_KEYS.map(({ key, href, iconPath, iconPathDark }) => ({
    title: t(`researchItems.${key}.title`),
    description: t(`researchItems.${key}.description`),
    href,
    iconPath,
    iconPathDark,
  }));

  // Restore nav state from sessionStorage on mount (e.g. after refresh)
  useEffect(() => {
    if (hasRestored) return;
    const stored = getStoredNavState();
    setActiveNav(stored.activeNav);
    setIsMobileMenuOpen(stored.isMobileMenuOpen);
    setMobileExpanded(stored.mobileExpanded);
    setHasRestored(true);
  }, [hasRestored]);

  // Persist nav state to sessionStorage when it changes
  useEffect(() => {
    if (!hasRestored) return;
    sessionStorage.setItem(
      NAV_STORAGE_KEY,
      JSON.stringify({
        activeNav,
        isMobileMenuOpen,
        mobileExpanded,
      }),
    );
  }, [activeNav, isMobileMenuOpen, mobileExpanded, hasRestored]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setMobileExpanded(null);
  }, []);

  const pathname = usePathname();
  const isInitialMount = useRef(true);

  // Close expanded panels when route changes (e.g. after clicking a link)
  // Skip on initial mount so we don't override restored state from sessionStorage
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setActiveNav(null);
    setMobileExpanded(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch("/api/github-stars");
        const data = await res.json();
        if (data.stars) setStarCount(data.stars);
      } catch (e) {
        console.error("Failed to fetch stars", e);
      }
    };
    fetchStars();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatStars = (count: number | null) => {
    if (count === null) return "";
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    })
      .format(count)
      .toLowerCase();
  };

  const dropdownNavItems: { key: NavItem; label: string }[] = [
    { key: "product", label: t("product") },
    { key: "research", label: t("research") },
    { key: "community", label: t("community") },
  ];

  const logoSectionWidth = "w-[180px]";

  return (
    <header
      className={cn(
        "font-display-title fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled || activeNav
          ? "border-border bg-background/80 border-b backdrop-blur-xl"
          : "bg-transparent",
      )}
      onMouseLeave={() => setActiveNav(null)}
    >
      {/* Navbar Row */}
      <div className="mx-auto flex h-16 max-w-[1856px] items-center justify-between px-4">
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center">
          <Link
            href="/"
            className={cn(
              "flex items-center transition-opacity hover:opacity-80",
              logoSectionWidth,
            )}
          >
            <Image
              src="/logo/camel.png"
              alt="CAMEL-AI"
              width={256}
              height={36}
              className="mb-1 h-8 w-auto object-contain dark:hidden"
              priority
            />
            <Image
              src="/logo/camel_white.png"
              alt="CAMEL-AI"
              width={256}
              height={36}
              className="mb-1 hidden h-8 w-auto object-contain dark:block"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {/* Dropdown nav items: Product, Research, Community */}
            {dropdownNavItems.map((item) => (
              <button
                key={item.key}
                className={cn(
                  "font-display-title inline-flex cursor-pointer items-center gap-1.5 rounded-md py-1 text-base font-semibold transition-colors",
                  activeNav === item.key ? "text-foreground" : "text-foreground",
                )}
                onMouseEnter={() => setActiveNav(item.key)}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "text-muted-foreground size-3.5 transition-transform duration-200",
                    activeNav === item.key ? "rotate-180" : "",
                  )}
                />
              </button>
            ))}

            {/* Docs - direct link */}
            <a
              href="https://docs.camel-ai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="link-grow-underline font-display-title text-foreground hover:text-foreground rounded-md py-1 text-base font-semibold transition-colors"
              onMouseEnter={() => setActiveNav(null)}
            >
              {t("docs")}
            </a>

            {/* About - direct link */}
            <Link
              href="/about"
              className="link-grow-underline font-display-title text-foreground hover:text-foreground rounded-md py-1 text-base font-semibold transition-colors"
              onMouseEnter={() => setActiveNav(null)}
            >
              {t("about")}
            </Link>
          </nav>
        </div>

        {/* Right Side: GitHub & Discord */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="secondary" size="sm" asChild>
              <a href="https://github.com/camel-ai" target="_blank" rel="noopener noreferrer">
                <Github className="!text-neon-primary size-4" />
                {starCount !== null && (
                  <span className="font-display-title text-neon-primary py-0.5 text-lg font-bold">
                    {formatStars(starCount)}
                  </span>
                )}
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open("https://discord.camel-ai.org", "_blank")}
              className="font-display-title inline-flex cursor-pointer items-center gap-1 font-semibold"
            >
              <Image
                src="/icon/discord_white.svg"
                alt="discord"
                width={24}
                height={24}
                className="dark:hidden"
              />
              <Image
                src="/icon/discord.svg"
                alt="discord"
                width={24}
                height={24}
                className="hidden dark:block"
              />
              {t("discord")}
            </Button>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label={t("toggleMenu")}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Dropdown Content Panel */}
      {activeNav && (
        <div
          className="animate-in fade-in slide-in-from-top-1 hidden px-4 duration-200 lg:block"
          onMouseEnter={() => setActiveNav(activeNav)}
        >
          <div className="mx-auto max-w-[1856px] py-8">
            <div className="flex">
              <div className={logoSectionWidth} />

              <div className="flex-1">
                {/* ── PRODUCT ── */}
                {activeNav === "product" && (
                  <div className="grid grid-cols-3 gap-16">
                    {/* Column 1: Open Source Cowork - card */}
                    <a
                      href="https://www.eigent.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border bg-muted/40 hover:bg-card group flex cursor-pointer flex-col justify-between rounded-xl border p-6 transition-all duration-200"
                    >
                      <div>
                        <Image
                          src="/logo/eigent_icon.png"
                          alt="Eigent"
                          width={32}
                          height={32}
                          className="mb-3 object-contain"
                        />
                        <p className="font-display-title group-hover:text-foreground mb-2 text-lg font-bold transition-colors">
                          {t("openSourceCowork")}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {t("openSourceCoworkDesc")}
                        </p>
                      </div>
                      <div className="mt-6">
                        <span className="text-foreground inline-flex items-center gap-2 text-sm font-semibold group-hover:underline">
                          {t("learnMore")}
                          <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </a>

                    {/* Column 2: Environments for Agents - card */}
                    <a
                      href="https://www.eigent.ai/environments"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border bg-muted/40 hover:bg-card group flex cursor-pointer flex-col justify-between rounded-xl border p-6 transition-all duration-200"
                    >
                      <div>
                        <Image
                          src="/logo/eigent_icon.png"
                          alt="Eigent"
                          width={32}
                          height={32}
                          className="mb-3 object-contain"
                        />
                        <p className="font-display-title group-hover:text-foreground mb-2 text-lg font-bold transition-colors">
                          {t("environmentsForAgents")}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {t("environmentsForAgentsDesc")}
                        </p>
                      </div>
                      <div className="mt-6">
                        <span className="text-foreground inline-flex items-center gap-2 text-sm font-semibold group-hover:underline">
                          {t("learnMore")}
                          <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </a>

                    {/* Column 3: Open Source Framework */}
                    <div className="flex flex-col gap-1">
                      <p className="text-muted-foreground mb-2 text-xs font-bold tracking-wider uppercase">
                        {t("openSourceFramework")}
                      </p>
                      <NavContentItem title={t("coreComponents")} href="/framework" />
                      <NavContentItem title={t("foundationComponents")} href="/framework" />
                      <NavContentItem title={t("applicationComponents")} href="/framework" />
                    </div>
                  </div>
                )}

                {/* ── RESEARCH ── */}
                {activeNav === "research" && (
                  <div className="grid grid-cols-3 gap-16">
                    {/* Column 1: First half of projects */}
                    <div className="flex flex-col">
                      <p className="text-muted-foreground mb-3 text-xs font-bold tracking-wider uppercase">
                        {t("projects")}
                      </p>
                      <div className="flex flex-col">
                        {researchItems.slice(0, 4).map((item) => (
                          <ResearchContentItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            description={item.description}
                            iconPath={item.iconPath}
                            iconPathDark={item.iconPathDark}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Second half of projects */}
                    <div className="flex flex-col">
                      <p className="text-muted-foreground invisible mb-3 text-xs font-bold tracking-wider uppercase">
                        {t("projects")}
                      </p>
                      <div className="flex flex-col">
                        {researchItems.slice(4).map((item) => (
                          <ResearchContentItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            description={item.description}
                            iconPath={item.iconPath}
                            iconPathDark={item.iconPathDark}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Research With Us banner */}
                    <div className="border-border bg-muted/40 hover:bg-card group flex h-full cursor-pointer flex-col justify-between rounded-xl border p-6 transition-all duration-200">
                      <div>
                        <p className="font-display-title mb-2 text-lg font-bold">
                          {t("researchWithUs")}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {t("researchWithUsDesc")}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href="/resources/research"
                          className="text-foreground inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                        >
                          {t("learnMore")}
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── COMMUNITY ── */}
                {activeNav === "community" && (
                  <div className="grid grid-cols-3 gap-16">
                    {/* Column 1: Learn */}
                    <div className="flex flex-col">
                      <p className="text-muted-foreground mb-3 text-xs font-bold tracking-wider uppercase">
                        {t("learn")}
                      </p>
                      <div className="flex flex-col">
                        <NavContentItem
                          title={t("blogs")}
                          href="/blogs"
                          description={t("blogsDesc")}
                          hoverBg
                        />
                        <NavContentItem
                          title={t("github")}
                          href="https://github.com/camel-ai"
                          description={t("githubDesc")}
                          hoverBg
                        />
                        <NavContentItem
                          title={t("discord")}
                          href="https://discord.camel-ai.org"
                          description={t("discordDesc")}
                          hoverBg
                        />
                      </div>
                    </div>

                    {/* Column 2: Built with CAMEL */}
                    <div className="flex flex-col">
                      <p className="text-muted-foreground mb-3 text-xs font-bold tracking-wider uppercase">
                        {t("builtWithCamel")}
                      </p>
                      <div className="flex flex-col">
                        <NavContentItem
                          title={t("communityHub")}
                          href="/community"
                          description={t("communityHubDesc")}
                          hoverBg
                        />
                        <NavContentItem
                          title={t("ambassadorProgram")}
                          href="https://eigent-ai.notion.site/1ed511c70ba281dda616e5e5ed26d218?pvs=105"
                          description={t("ambassadorProgramDesc")}
                          hoverBg
                        />
                      </div>
                    </div>

                    {/* Column 3: Ambassador banner */}
                    <div className="border-border bg-muted/40 hover:bg-card group flex h-full cursor-pointer flex-col justify-between rounded-xl border p-6 transition-all duration-200">
                      <div>
                        <p className="font-display-title mb-2 text-lg font-bold">
                          {t("joinAmbassadorProgram")}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {t("joinAmbassadorProgramDesc")}
                        </p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="https://eigent-ai.notion.site/1ed511c70ba281dda616e5e5ed26d218?pvs=105"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                        >
                          {t("applyNow")}
                          <ArrowRight className="size-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={logoSectionWidth} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="bg-background border-border animate-in slide-in-from-top-1 absolute top-full right-0 left-0 flex max-h-[calc(100vh-64px)] flex-col gap-2 overflow-y-auto border-b px-4 py-6 shadow-xl lg:hidden">
          {/* Product */}
          <button
            className="text-muted-foreground flex w-full items-center justify-between px-2 py-3 text-base font-bold tracking-wider uppercase"
            onClick={() => setMobileExpanded(mobileExpanded === "product" ? null : "product")}
          >
            {t("product")}
            <ChevronDown
              className={cn(
                "size-4 transition-transform",
                mobileExpanded === "product" ? "rotate-180" : "",
              )}
            />
          </button>
          {mobileExpanded === "product" && (
            <div className="flex flex-col gap-3 pb-2">
              {/* Eigent cards */}
              <Link
                href="https://www.eigent.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-muted/40 hover:bg-muted/70 active:bg-muted/70 flex flex-col rounded-xl border p-4 transition-colors"
                onClick={toggleMobileMenu}
              >
                <Image
                  src="/logo/eigent_icon.png"
                  alt="Eigent"
                  width={28}
                  height={28}
                  className="mb-2 object-contain"
                />
                <span className="font-display-title text-base font-bold">
                  {t("openSourceCowork")}
                </span>
                <p className="text-muted-foreground mt-1 text-xs">{t("openSourceCoworkDesc")}</p>
              </Link>
              <Link
                href="https://www.eigent.ai/environments"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-muted/40 hover:bg-muted/70 active:bg-muted/70 flex flex-col rounded-xl border p-4 transition-colors"
                onClick={toggleMobileMenu}
              >
                <Image
                  src="/logo/eigent_icon.png"
                  alt="Eigent"
                  width={28}
                  height={28}
                  className="mb-2 object-contain"
                />
                <span className="font-display-title text-base font-bold">
                  {t("environmentsForAgents")}
                </span>
                <p className="text-muted-foreground mt-1 text-xs">
                  {t("environmentsForAgentsDesc")}
                </p>
              </Link>
              <p className="text-muted-foreground mt-1 mb-1 px-2 text-xs font-bold tracking-wider">
                {t("openSourceFramework")}
              </p>
              <Link
                href="/framework"
                className="font-display-title hover:bg-muted/70 active:bg-muted/70 rounded-lg px-2 py-2.5 text-base font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                {t("coreComponents")}
              </Link>
              <Link
                href="/framework"
                className="font-display-title hover:bg-muted/70 active:bg-muted/70 rounded-lg px-2 py-2.5 text-base font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                {t("foundationComponents")}
              </Link>
              <Link
                href="/framework"
                className="font-display-title hover:bg-muted/70 active:bg-muted/70 rounded-lg px-2 py-2.5 text-base font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                {t("applicationComponents")}
              </Link>
            </div>
          )}

          {/* Research */}
          <button
            className="text-muted-foreground flex w-full items-center justify-between px-2 py-3 text-base font-bold tracking-wider uppercase"
            onClick={() => setMobileExpanded(mobileExpanded === "research" ? null : "research")}
          >
            {t("research")}
            <ChevronDown
              className={cn(
                "size-4 transition-transform",
                mobileExpanded === "research" ? "rotate-180" : "",
              )}
            />
          </button>
          {mobileExpanded === "research" && (
            <div className="flex flex-col gap-1 pb-2">
              {researchItems.map((item) => {
                const isExternal = item.href?.startsWith("http");
                const Comp = isExternal ? "a" : Link;
                return (
                  <Comp
                    key={item.title}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="hover:bg-muted/70 active:bg-muted/70 flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    <img
                      src={item.iconPath}
                      alt={item.title}
                      className="size-7 shrink-0 object-contain dark:hidden"
                    />
                    <img
                      src={item.iconPathDark ?? item.iconPath}
                      alt={item.title}
                      className="hidden size-7 shrink-0 object-contain dark:block"
                    />
                    <span className="font-display-title text-base font-semibold">{item.title}</span>
                  </Comp>
                );
              })}
            </div>
          )}

          {/* Community */}
          <button
            className="text-muted-foreground flex w-full items-center justify-between px-2 py-3 text-base font-bold tracking-wider uppercase"
            onClick={() => setMobileExpanded(mobileExpanded === "community" ? null : "community")}
          >
            {t("community")}
            <ChevronDown
              className={cn(
                "size-4 transition-transform",
                mobileExpanded === "community" ? "rotate-180" : "",
              )}
            />
          </button>
          {mobileExpanded === "community" && (
            <div className="flex flex-col gap-1 pb-2">
              <p className="text-muted-foreground mt-1 mb-1 px-2 text-xs font-bold tracking-wider">
                {t("learn")}
              </p>
              <Link
                href="/blogs"
                className="font-display-title hover:bg-muted/70 active:bg-muted/70 rounded-lg px-2 py-2.5 text-base font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                {t("blogs")}
              </Link>
              <a
                href="https://github.com/camel-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-title hover:bg-muted/70 active:bg-muted/70 rounded-lg px-2 py-2.5 text-base font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                {t("github")}
              </a>
              <a
                href="https://discord.camel-ai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-title hover:bg-muted/70 active:bg-muted/70 rounded-lg px-2 py-2.5 text-base font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                {t("discord")}
              </a>
              <p className="text-muted-foreground mt-3 mb-1 px-2 text-xs font-bold tracking-wider">
                {t("builtWithCamel")}
              </p>
              <Link
                href="/community"
                className="font-display-title hover:bg-muted/70 active:bg-muted/70 rounded-lg px-2 py-2.5 text-base font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                {t("communityHub")}
              </Link>
              <a
                href="https://eigent-ai.notion.site/1ed511c70ba281dda616e5e5ed26d218?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-title hover:bg-muted/70 active:bg-muted/70 rounded-lg px-2 py-2.5 text-base font-semibold transition-colors"
                onClick={toggleMobileMenu}
              >
                {t("ambassadorProgram")}
              </a>
            </div>
          )}

          {/* Docs - direct link */}
          <a
            href="https://docs.camel-ai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground px-2 py-3 text-base font-bold tracking-wider uppercase transition-colors"
            onClick={toggleMobileMenu}
          >
            {t("docs")}
          </a>

          {/* About - direct link */}
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground px-2 py-3 text-base font-bold tracking-wider uppercase transition-colors"
            onClick={toggleMobileMenu}
          >
            {t("about")}
          </Link>

          {/* Bottom actions */}
          <div className="border-border mt-2 flex flex-col gap-3 border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">{t("language")}</span>
              <LanguageSwitcher />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">{t("theme")}</span>
              <ThemeToggle />
            </div>
            <Button asChild className="w-full">
              <a
                href="https://eigent-ai.notion.site/1ed511c70ba281dda616e5e5ed26d218?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-title font-semibold"
                onClick={toggleMobileMenu}
              >
                {t("becomeAmbassador")}
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full gap-2">
              <a href="https://github.com/camel-ai/camel" target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                <span className="font-display-title font-semibold">{t("starOnGitHub")}</span>
                {starCount && (
                  <span className="text-muted-foreground ml-auto">{formatStars(starCount)}</span>
                )}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
