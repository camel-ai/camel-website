"use client";

import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Content from "@/components/layout/Content";
import Header from "@/components/layout/Header";
import {
  ArrowRight,
  Github,
  Users,
  BookOpen,
  Terminal,
  Share2,
  Database,
  Network,
  Briefcase,
  Wrench,
  Link2,
  GraduationCap,
  ChevronDown,
  ArrowDown,
  Star,
  GitFork,
  UserPlus,
} from "lucide-react";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import LogoMarquee from "@/components/LogoMarquee";
import TechStackContent from "@/components/techstack";
import { CommunityMap } from "@/components/community/CommunityMap";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const [currentPaperIndex, setCurrentPaperIndex] = React.useState(0);
  const [visiblePaperCount, setVisiblePaperCount] = React.useState(4);

  React.useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width < 768) {
        setVisiblePaperCount(1);
      } else if (width < 1024) {
        setVisiblePaperCount(2);
      } else {
        setVisiblePaperCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const logos = [
    { src: "/logo/partner/amazon.png", alt: "Amazon" },
    { src: "/logo/partner/apple.png", alt: "Apple" },
    { src: "/logo/partner/bytedance.png", alt: "Bytedance" },
    { src: "/logo/partner/cambridge.png", alt: "Cambridge" },
    { src: "/logo/partner/cmu.png", alt: "Carnegie Mellon University" },
    { src: "/logo/partner/columbia.png", alt: "Columbia University" },
    { src: "/logo/partner/deepmind.png", alt: "Deepmind" },
    { src: "/logo/partner/hku.png", alt: "The University of Hong Kong" },
    { src: "/logo/partner/kaust.png", alt: "KAUST" },
    { src: "/logo/partner/meta.png", alt: "Meta" },
    { src: "/logo/partner/mit.png", alt: "MIT" },
    { src: "/logo/partner/oxford.png", alt: "Oxford" },
    { src: "/logo/partner/stanford.png", alt: "Stanford" },
    { src: "/logo/partner/tesla.png", alt: "Tesla" },
  ];

  const researchLogos = [
    { src: "/logo/research/caltech.png", alt: "Caltech" },
    { src: "/logo/research/chicago.png", alt: "University of Chicago" },
    { src: "/logo/research/cmu.png", alt: "Carnegie Mellon University" },
    { src: "/logo/research/fudan.png", alt: "Fudan University" },
    { src: "/logo/research/harvard.png", alt: "Harvard University" },
    { src: "/logo/research/hku.png", alt: "The University of Hong Kong" },
    { src: "/logo/research/imperial.png", alt: "Imperial College London" },
    { src: "/logo/research/kaust.png", alt: "KAUST" },
    { src: "/logo/research/michigan.png", alt: "University of Michigan" },
    { src: "/logo/research/northwestern.png", alt: "Northwestern University" },
    { src: "/logo/research/nus.png", alt: "National University of Singapore" },
    { src: "/logo/research/oxford.png", alt: "Oxford" },
    { src: "/logo/research/pennstate.png", alt: "Penn State" },
    { src: "/logo/research/santafi.png", alt: "Santa Fe Institute" },
    { src: "/logo/research/standford.png", alt: "Stanford" },
    { src: "/logo/research/sydney.png", alt: "University of Sydney" },
    { src: "/logo/research/tokyou.png", alt: "University of Tokyo" },
    { src: "/logo/research/tsinghua.png", alt: "Tsinghua University" },
  ];

  const principles = [0, 1, 2, 3].map((i) => ({
    title: t(`principles.items.${i}.title`),
    description: t(`principles.items.${i}.description`),
  }));

  return (
    <>
      <Hero />

      <LogoMarquee logos={logos} />

      {/* Mission */}
      <Section variant="default" padding="md" id="mission">
        <Container size="xl">
          <Header
            tag={t("mission.tag")}
            tagVariant="neon"
            title={
              <>
                {t("mission.titlePart1")} <br />
                <span className="font-display-title text-neon-primary font-semibold">
                  {t("mission.scalingLaws")}
                </span>{" "}
                {t("mission.of")}{" "}
                <span className="font-display-title text-pink-primary font-semibold">
                  {t("mission.agents")}
                </span>
              </>
            }
            description={t("mission.description")}
            variant="one-column"
          />
          <Content align="center" spacing="relaxed" maxWidth="xl">
            <div className="flex max-w-md flex-col gap-8">
              <Image
                src="/image/mission.png"
                alt="Mission"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end">
              {/* Column 1: Core Framework */}
              <div className="flex-1 flex-col gap-8">
                <div className="bg-neon-secondary/20 border-border relative mb-4 flex min-h-[140px] flex-col gap-2 overflow-hidden rounded-xl border p-6 md:h-[160px]">
                  <Image
                    src="/icon/agents.svg"
                    alt="Number of Agents"
                    width={40}
                    height={40}
                    className="absolute -right-4 -bottom-4 h-32 w-32 object-contain opacity-20"
                  />
                  <h3 className="font-display-title text-neon-primary relative z-10 mb-8 flex items-center gap-2 text-2xl font-semibold">
                    {t("mission.numberOfAgents")}
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/camel-ai/camel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      CAMEL
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/camel-ai/camel/tree/master/camel/societies/workforce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      Workforce
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/camel-ai/oasis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      OASIS
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Environment */}
              <div className="flex-1 flex-col gap-8">
                <div className="bg-neon-secondary/20 border-border relative mb-4 flex min-h-[140px] flex-col gap-2 overflow-hidden rounded-xl border p-6 md:h-[180px]">
                  <Image
                    src="/icon/environments.svg"
                    alt="Number of Agents"
                    width={40}
                    height={40}
                    className="absolute -right-4 -bottom-4 h-32 w-32 object-contain opacity-20"
                  />
                  <h3 className="font-display-title text-neon-primary mb-8 flex items-center gap-2 text-2xl font-semibold">
                    {t("mission.environments")}
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/camel-ai/seta-env"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      SETA-ENV
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/camel-ai/crab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      CRAB
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/camel-ai/loong"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      LOONG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Evolution */}
              <div className="flex-1 flex-col gap-8">
                <div className="bg-neon-secondary/20 border-border relative mb-4 flex min-h-[140px] flex-col gap-2 overflow-hidden rounded-xl border p-6 md:h-[200px]">
                  <Image
                    src="/icon/evolution.svg"
                    alt="Evolution"
                    width={40}
                    height={40}
                    className="absolute -right-4 -bottom-4 h-32 w-32 object-contain opacity-20"
                  />
                  <h3 className="font-display-title text-neon-primary mb-8 flex items-center gap-2 text-2xl font-semibold">
                    {t("mission.evolution")}
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/camel-ai/seta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      SETA
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/camel-ai/owl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      OWL
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/camel-ai/camel/tree/master/camel/societies/agent_rl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border-border hover:border-neon-primary font-display-title text-gray-primary hover:text-neon-primary block w-full cursor-pointer rounded-xl border px-6 py-2 text-left text-base font-semibold transition-all duration-200 hover:shadow-md md:text-lg"
                    >
                      CAMEL for Agent RL
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Content>
        </Container>
      </Section>

      {/* Research */}
      <Section variant="secondary" padding="md" id="research">
        <Header
          tag={t("research.tag")}
          tagVariant="neon"
          title={t("research.title")}
          description={t("research.description")}
          variant="two-column"
        />
        <Container size="xl">
          <Content align="center">
            {/* Research papers slider */}
            <div className="my-8 flex w-full flex-col items-start justify-center gap-4">
              {(() => {
                const researchPapers = [
                  {
                    logo: "/logo/camel.png",
                    logoDark: "/logo/camel_white.png",
                    image: "/paper/camel_paper.jpg",
                    brand: "CAMEL",
                    title:
                      'CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society',
                    conference: "NeurIPS 2023",
                    date: "2 Dec 2023",
                    source: "arXiv",
                    link: "https://arxiv.org/abs/2303.17760",
                  },
                  {
                    logo: "/logo/owl.png",
                    logoDark: "/logo/owl_white.png",
                    image: "/paper/owl_paper.jpg",
                    brand: "OWL",
                    title:
                      "OWL: Optimized Workforce Learning for General Multi-Agent Assistance in Real-World Task Automation",
                    conference: "NeurIPS 2025",
                    date: "29 May 2025",
                    source: "arXiv",
                    link: "https://arxiv.org/abs/2505.23885",
                  },
                  {
                    logo: "/logo/oasis.png",
                    logoDark: "/logo/oasis_white.png",
                    image: "/paper/oasis_paper.jpg",
                    brand: "OASIS",
                    title:
                      "OASIS: Open Agent Social Interaction Simulations with One Million Agents",
                    conference: "NeurIPS 2024, Workshop Open-World Agents Poster",
                    date: "18 Nov 2024",
                    source: "arXiv",
                    link: "https://arxiv.org/abs/2411.11581",
                  },
                  {
                    logo: "/logo/loong.png",
                    logoDark: "/logo/loong_white.png",
                    image: "/paper/loong_paper.jpg",
                    brand: "LOONG",
                    title: "Loong: Synthesize Long Chain-of-Thoughts at Scale through Verifiers",
                    conference: "arXiv preprint",
                    date: "3 Sep 2025",
                    source: "arXiv",
                    link: "https://www.arxiv.org/abs/2509.03059",
                  },
                  {
                    logo: "/logo/crab.png",
                    logoDark: "/logo/crab_white.png",
                    image: "/paper/crab_paper.jpg",
                    brand: "CRAB",
                    title:
                      "CRAB: Cross-environment Agent Benchmark for Multimodal Language Model Agents",
                    conference: "NeurIPS 2024, Workshop on OWA-2024",
                    date: "18 Oct 2024",
                    source: "arXiv",
                    link: "https://arxiv.org/abs/2407.01511",
                  },
                  {
                    logo: "/logo/agent_trust.png",
                    logoDark: "/logo/agent_trust_white.png",
                    image: "/paper/agent_trust_paper.jpg",
                    brand: "AGENT TRUST",
                    title: "Can Large Language Model Agents Simulate Human Trust Behavior?",
                    conference: "NeurIPS 2024",
                    date: "1 Nov 2024",
                    source: "arXiv",
                    link: "https://arxiv.org/abs/2402.04559",
                  },
                  {
                    logo: "/logo/emos.png",
                    logoDark: "/logo/emos_white.png",
                    image: "/paper/emos_paper.jpg",
                    brand: "EMOS",
                    title:
                      "EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents",
                    conference: "ICLR 2025",
                    date: "30 Oct 2024",
                    source: "arXiv",
                    link: "https://arxiv.org/abs/2410.22662",
                  },
                ];

                const maxIndex = Math.max(0, researchPapers.length - visiblePaperCount);

                const handlePrev = () => {
                  setCurrentPaperIndex((prev) => Math.max(0, prev - 1));
                };

                const handleNext = () => {
                  setCurrentPaperIndex((prev) => Math.min(maxIndex, prev + 1));
                };

                const itemWidthPercent = 100 / visiblePaperCount;

                return (
                  <div className="flex w-full flex-col gap-3">
                    <div className="w-full overflow-x-visible">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                          transform: `translateX(-${currentPaperIndex * itemWidthPercent}%)`,
                        }}
                      >
                        {researchPapers.map((paper) => (
                          <div
                            key={paper.title}
                            className="shrink-0 px-2"
                            style={{
                              width: `${itemWidthPercent}%`,
                            }}
                          >
                            <Link
                              className="group bg-card hover:border-neon-primary border-border flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border p-4 text-left shadow-none transition-all duration-200 hover:shadow-lg"
                              href={paper.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {/* 1. Logo + brand name row */}
                              <div className="mb-2 flex shrink-0 items-center justify-center">
                                <Image
                                  src={paper.logo}
                                  alt={paper.brand}
                                  width={160}
                                  height={160}
                                  className="h-8 w-auto shrink-0 object-contain dark:hidden"
                                />
                                <Image
                                  src={paper.logoDark ?? paper.logo}
                                  alt={paper.brand}
                                  width={160}
                                  height={160}
                                  className="hidden h-8 w-auto shrink-0 object-contain dark:block"
                                />
                              </div>
                              {/* 2. Paper preview image */}
                              <div className="relative mb-2 w-full overflow-hidden">
                                <Image
                                  src={paper.image}
                                  alt={paper.title}
                                  width={600}
                                  height={900}
                                  className="h-auto w-full object-cover"
                                />
                              </div>
                              {/* 3. Title (middle) - large, bold, multi-line */}
                              <h3 className="text-md font-display-title text-foreground mb-4 min-h-0 flex-1 leading-relaxed font-bold">
                                {paper.title}
                              </h3>
                              {/* 4. Metadata (bottom) - conference/date row, then source row */}
                              <div className="text-muted-foreground flex shrink-0 flex-col gap-1 text-[10px]">
                                <div className="flex items-start justify-between gap-4">
                                  <span className="text-neon-primary font-semibold">
                                    {paper.conference}
                                  </span>
                                  <span className="text-muted-foreground shrink-0">
                                    {paper.date}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Counter + arrow controls - bottom right */}
                    <div className="mt-4 flex w-full items-center justify-between gap-3 px-4">
                      <span className="text-muted-foreground text-xs">
                        {currentPaperIndex + 1} / {researchPapers.length}
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={handlePrev}
                          disabled={currentPaperIndex === 0}
                          className="bg-card border-border text-muted-foreground hover:border-neon-primary hover:text-neon-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
                          aria-label="Previous paper"
                        >
                          <span className="inline-block -scale-x-100">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={currentPaperIndex === maxIndex}
                          className="bg-card border-border text-gray-primary hover:border-neon-primary hover:text-neon-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
                          aria-label="Next paper"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </Content>
        </Container>
        <Container size="xl">
          <div className="border-border flex w-full flex-col items-start gap-4 border-t pt-12 md:pt-24 lg:flex-row">
            <div className="bg-muted/40 flex h-full w-full flex-col gap-6 rounded-2xl p-6 text-left md:p-8 lg:w-1/2">
              <h3 className="font-display-title text-foreground text-xl font-semibold md:text-4xl">
                {t("research.researchWithUs")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {t("research.researchInvite")}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {t("research.researchDescription")}
              </p>
              <Button
                variant="default"
                size="lg"
                className="w-fit cursor-pointer rounded-full px-6"
                onClick={() => (window.location.href = "/community")}
              >
                {t("research.contactUs")}
              </Button>
            </div>

            <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:w-1/2">
              {researchLogos.map((logo) => (
                <div key={logo.alt} className="flex items-center justify-center px-4 py-3">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section variant="secondary" padding="md" id="principles">
        <Header
          tag={t("principles.tag")}
          tagVariant="neon"
          title={<>{t("principles.title")}</>}
          description={t("principles.description")}
          variant="one-column"
          ctaLink="/framework"
          ctaLabel={t("principles.learnMore")}
        />
        <Container size="xl">
          <div className="relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-12">
            {/* Circle outline decorations - background, center position */}
            <div className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center opacity-60 md:flex">
              <div className="border-neon-secondary/10 absolute h-160 w-160 rounded-full border-2" />
              <div className="border-neon-secondary/10 absolute h-120 w-120 rounded-full border-2" />
              <div className="border-neon-secondary/10 absolute h-80 w-80 rounded-full border-2" />
              <div className="border-neon-secondary/10 absolute h-40 w-40 rounded-full border-2" />
            </div>
            {/* Left: 2 principles vertical */}
            <div className="relative z-10 flex flex-col gap-4 md:col-span-4">
              {principles.slice(0, 2).map((principle, index) => (
                <div
                  key={principle.title}
                  className="hover:border-neon-secondary bg-neon-secondary/20 flex min-h-[180px] flex-1 flex-col justify-between rounded-2xl border border-transparent px-6 py-6 text-left backdrop-blur-md transition-colors"
                >
                  <span className="font-display-title text-neon-secondary/30 text-5xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-4 flex flex-col gap-3">
                    <span className="font-display-title text-foreground text-2xl leading-tight font-semibold">
                      {principle.title}
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center: three-box layer with circle decorations */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-1 py-16 md:col-span-4">
              {/* Layer 1: Foundation components - pink */}
              <div className="bg-pink-secondary/30 flex h-full w-full flex-1 items-center justify-center rounded-xl px-4 py-2 backdrop-blur-md">
                <span className="font-display-title text-pink-primary text-center text-lg font-semibold">
                  {t("principles.foundationComponents")}
                </span>
              </div>
              <ArrowDown className="text-pink-primary size-4" />
              {/* Layer 2: Core components - blue */}
              <div className="bg-blue-secondary/30 flex w-full flex-1 items-center justify-center rounded-xl px-4 py-2 backdrop-blur-md">
                <span className="font-display-title text-blue-primary text-center text-lg font-semibold">
                  {t("principles.coreComponents")}
                </span>
              </div>
              <ArrowDown className="text-blue-primary size-4" />
              {/* Layer 3: Application components - neon */}
              <div className="bg-neon-secondary/30 flex w-full flex-1 items-center justify-center rounded-xl px-4 py-2 backdrop-blur-md">
                <span className="font-display-title text-neon-primary text-center text-lg font-semibold">
                  {t("principles.applicationComponents")}
                </span>
              </div>
            </div>

            {/* Right: 2 principles vertical */}
            <div className="relative z-10 flex flex-col gap-4 md:col-span-4">
              {principles.slice(2, 4).map((principle, index) => (
                <div
                  key={principle.title}
                  className="hover:border-neon-secondary bg-neon-secondary/10 flex min-h-[180px] flex-1 flex-col justify-between rounded-2xl border border-transparent px-6 py-6 text-left backdrop-blur-md transition-colors"
                >
                  <span className="font-display-title text-neon-secondary/30 text-5xl font-bold">
                    {String(index + 3).padStart(2, "0")}
                  </span>
                  <div className="mt-4 flex flex-col gap-3">
                    <span className="font-display-title text-foreground text-2xl leading-tight font-semibold">
                      {principle.title}
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Unique Capabilities */}
      <Section variant="secondary" padding="md" id="unique-capabilities">
        <Header
          tag={t("capabilities.tag")}
          tagVariant="neon"
          title={t("capabilities.title")}
          description={t("capabilities.description")}
          variant="one-column"
          ctaLink="https://github.com/camel-ai/camel"
          ctaLabel={t("capabilities.knowMore")}
        />
        <Container size="xl">
          <div className="flex min-h-[40vh] w-full flex-col justify-center gap-6 md:flex-row md:flex-wrap md:items-start">
            {/* Card 1 - Workforce (tall, green/teal) */}
            <div className="bg-green-secondary/20 relative flex min-h-[280px] w-full max-w-none flex-col items-start justify-between rounded-2xl px-6 py-5 shadow-sm sm:w-auto sm:max-w-[280px] sm:min-w-[220px] sm:flex-1">
              <div className="text-muted-foreground/50 absolute top-5 right-6">
                <Briefcase className="size-6" />
              </div>
              <div className="mb-3 flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full ${i === 1 ? "bg-green-primary" : "bg-card"}`}
                  />
                ))}
              </div>
              <div>
                <h3 className="font-display-title text-foreground mb-2 pr-12 text-xl font-bold">
                  {t("capabilities.cards.0.title")}
                </h3>
                <p className="text-muted-foreground mb-4 text-left text-base leading-snug">
                  {t("capabilities.cards.0.description")}
                </p>
              </div>
            </div>
            {/* Card 2 - CAMEL Toolkit (shorter, pink) */}
            <div className="bg-pink-secondary/20 relative flex min-h-[200px] w-full max-w-none flex-col items-start justify-between rounded-2xl px-6 py-5 shadow-sm sm:w-auto sm:max-w-[280px] sm:min-w-[220px] sm:flex-1 md:mt-8">
              <div className="text-muted-foreground/50 absolute top-5 right-6">
                <Wrench className="size-6" />
              </div>
              <div className="mb-3 flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full ${i === 2 ? "bg-pink-primary" : "bg-card"}`}
                  />
                ))}
              </div>
              <div>
                <h3 className="font-display-title text-foreground mb-2 pr-12 text-xl font-bold">
                  {t("capabilities.cards.1.title")}
                </h3>
                <p className="text-muted-foreground mb-4 text-left text-base leading-snug">
                  {t("capabilities.cards.1.description")}
                </p>
              </div>
            </div>
            {/* Card 3 - Connect to RL (shorter, blue) */}
            <div className="bg-cyan-secondary/20 relative flex min-h-[200px] w-full max-w-none flex-col items-start justify-between rounded-2xl px-6 py-5 shadow-sm sm:w-auto sm:max-w-[280px] sm:min-w-[220px] sm:flex-1 md:mt-12">
              <div className="text-muted-foreground/50 absolute top-5 right-6">
                <Link2 className="size-6" />
              </div>
              <div className="mb-3 flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full ${i === 3 ? "bg-cyan-primary" : "bg-card"}`}
                  />
                ))}
              </div>
              <div>
                <h3 className="font-display-title text-foreground mb-2 pr-12 text-xl font-bold">
                  {t("capabilities.cards.2.title")}
                </h3>
                <p className="text-muted-foreground mb-4 text-left text-base leading-snug">
                  {t("capabilities.cards.2.description")}
                </p>
              </div>
            </div>
            {/* Card 4 - Research Ecosystem (tall, yellow/amber) */}
            <div className="bg-yellow-secondary/20 relative flex min-h-[280px] w-full max-w-none flex-col items-start justify-between rounded-2xl px-6 py-5 shadow-sm sm:w-auto sm:max-w-[280px] sm:min-w-[220px] sm:flex-1 md:mt-4">
              <div className="text-muted-foreground/50 absolute top-5 right-6">
                <GraduationCap className="size-6" />
              </div>
              <div className="mb-3 flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full ${i === 4 ? "bg-yellow-primary" : "bg-card"}`}
                  />
                ))}
              </div>
              <div>
                <h3 className="font-display-title text-foreground mb-2 pr-12 text-xl font-bold">
                  {t("capabilities.cards.3.title")}
                </h3>
                <p className="text-muted-foreground mb-4 text-left text-base leading-snug">
                  {t("capabilities.cards.3.description")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section variant="default" padding="md" id="techstack">
        <Header
          tag={t("techStack.tag")}
          title={t("techStack.title")}
          description={t("techStack.description")}
          variant="one-column"
          ctaLink="/techstacks"
          ctaLabel={t("techStack.viewFullTechStack")}
        />
        <Container size="xl">
          <TechStackContent />
        </Container>
      </Section>

      {/* Community */}
      <Section variant="default" padding="md" id="community">
        <Header
          tag={t("community.tag")}
          title={t("community.title")}
          description={t("community.description")}
          variant="one-column"
          ctaLink="/community"
          ctaLabel={t("community.joinCommunity")}
        />
        <Container size="xl">
          <div className="mt-12 flex flex-col items-center justify-center gap-12">
            {/* Community stats */}
            <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center gap-3">
                <Star className="text-neon-primary size-8 stroke-[1.5]" />
                <span className="font-display-title text-neon-primary text-2xl font-bold md:text-5xl">
                  38K
                </span>
                <span className="text-muted-foreground text-sm tracking-wide uppercase">
                  {t("community.stars")}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <UserPlus className="text-neon-primary size-8 stroke-[1.5]" />
                <span className="font-display-title text-neon-primary text-2xl font-bold md:text-5xl">
                  200+
                </span>
                <span className="text-muted-foreground text-sm tracking-wide uppercase">
                  {t("community.contributors")}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Users className="text-neon-primary size-8 stroke-[1.5]" />
                <span className="font-display-title text-neon-primary text-2xl font-bold md:text-5xl">
                  30K
                </span>
                <span className="text-muted-foreground text-sm tracking-wide uppercase">
                  {t("community.communityMembers")}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <GitFork className="text-neon-primary size-8 stroke-[1.5]" />
                <span className="font-display-title text-neon-primary text-2xl font-bold md:text-5xl">
                  4K+
                </span>
                <span className="text-muted-foreground text-sm tracking-wide uppercase">
                  {t("community.forks")}
                </span>
              </div>
            </div>
            {/* World map with community member locations */}
            <CommunityMap />
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section variant="default" padding="md" id="testimonials">
        <Header tag={t("testimonials.tag")} title={t("testimonials.title")} variant="one-column" />
        <Container size="xl">
          <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-3">
            {/* Large card - spans 2 columns */}
            <div className="bg-card col-span-1 flex flex-col justify-between rounded-3xl p-6 md:p-12">
              <blockquote className="text-muted-foreground mb-6 text-base leading-relaxed">
                "The thing that I find really interesting with this is that it's an unbelievably
                good way to make synthetic data. If you're trying to create any sort of customer
                service or chatbot agent that communicates with the public, this allows you to make
                synthetic data for training and fine-tuning."
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src="/testimonails/red_dragon_ai.avif"
                  alt="Sam Witteveen"
                  width={48}
                  height={48}
                  className="shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-muted-foreground font-semibold">Sam Witteveen</p>
                  <p className="text-muted-foreground text-sm">Co-founder @ Red Dragon AI</p>
                </div>
              </div>
            </div>

            {/* Medium card - spans 1 column */}
            <div className="bg-card col-span-1 flex flex-col justify-between rounded-3xl p-6">
              <blockquote className="text-muted-foreground mb-6 text-base leading-relaxed">
                "The CAMEL AI "Domain Expert" dataset, comprising 25,000 conversations between two
                GPT 3.5 Turbo agents was used as part of the training data for Teknium's OpenHermes
                model and the Microsoft Phi model"
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src="/testimonails/valory.jpeg"
                  alt="Valory"
                  width={48}
                  height={48}
                  className="shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-muted-foreground font-semibold">Valory</p>
                  <p className="text-muted-foreground text-sm">Open-source framework</p>
                </div>
              </div>
            </div>

            {/* Medium card - spans 1 column */}
            <div className="bg-card col-span-1 flex flex-col justify-between rounded-3xl p-6">
              <blockquote className="text-muted-foreground mb-6 text-base leading-relaxed">
                "Guohao Li, who designed Camel, highlights the potential of multi-agent systems to
                bypass traditional AI limitations, enabling tasks like phishing email generation and
                cyber bug development."
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src="/testimonails/economist.jpg"
                  alt="The Economist"
                  width={48}
                  height={48}
                  className="shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-muted-foreground font-semibold">The Economist</p>
                  <p className="text-muted-foreground text-sm">Newspaper</p>
                </div>
              </div>
            </div>

            {/* Large card - spans 2 columns */}
            <div className="bg-card col-span-1 flex flex-col justify-between rounded-3xl p-6">
              <blockquote className="text-muted-foreground mb-6 text-base leading-relaxed">
                "The essence of Camel lies in its prompt engineering, i.e., inception prompting. The
                prompts are actually carefully defined to assign roles, prevent flipping roles,
                prohibit harm and false information, and encourage consistent conversation."
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src="/testimonails/sophia_yang.avif"
                  alt="Sophia Yang"
                  width={48}
                  height={48}
                  className="shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-muted-foreground font-semibold">Sophia Yang, Ph.D.</p>
                  <p className="text-muted-foreground text-sm">
                    Head of Developer Relations @ Mistral AI
                  </p>
                </div>
              </div>
            </div>

            {/* Medium card - spans 1 column */}
            <div className="bg-card col-span-1 flex flex-col justify-between rounded-3xl p-6">
              <blockquote className="text-muted-foreground mb-4 text-base leading-relaxed">
                MPT-30B-Chat is a chatbot-like model for dialogue generation. It was built by
                finetuning MPT-30B and trained on 19.54% Camel-AI sourced data
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src="/testimonails/databricks.jpg"
                  alt="Databricks"
                  width={48}
                  height={48}
                  className="shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-muted-foreground font-semibold">Databricks</p>
                  <p className="text-muted-foreground text-sm">The Data and AI Company</p>
                </div>
              </div>
            </div>

            {/* Medium card - spans 1 column */}
            <div className="bg-card col-span-1 flex flex-col justify-between rounded-3xl p-6">
              <blockquote className="text-muted-foreground mb-4 text-base leading-relaxed">
                "This innovative concept is set to redefine the way AI agents interact with each
                other and, in doing so, revolutionize the realm of conversational AI."
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src="/testimonails/yogesh_haribhau.jpeg"
                  alt="Yogesh Haribhau Kulkarni"
                  width={48}
                  height={48}
                  className="shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-muted-foreground font-semibold">Yogesh Haribhau Kulkarni</p>
                  <p className="text-muted-foreground text-sm">AI Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-card border-border hover:border-neon-primary group rounded-[32px] border p-8 text-left transition-all hover:shadow-lg">
      <div className="bg-primary-1 text-neon-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
    </div>
  );
}
