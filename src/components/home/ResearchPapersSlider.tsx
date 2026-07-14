"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/asset-url";

const researchPapers = [
  {
    logo: "/logo/camel.png",
    logoDark: "/logo/camel_white.png",
    image: "/paper/camel_paper.jpg",
    brand: "CAMEL",
    title: 'CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society',
    conference: "NeurIPS 2023",
    date: "2 Dec 2023",
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
    link: "https://arxiv.org/abs/2505.23885",
  },
  {
    logo: "/logo/oasis.png",
    logoDark: "/logo/oasis_white.png",
    image: "/paper/oasis_paper.jpg",
    brand: "OASIS",
    title: "OASIS: Open Agent Social Interaction Simulations with One Million Agents",
    conference: "NeurIPS 2024, Workshop Open-World Agents Poster",
    date: "18 Nov 2024",
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
    link: "https://www.arxiv.org/abs/2509.03059",
  },
  {
    logo: "/logo/crab.png",
    logoDark: "/logo/crab_white.png",
    image: "/paper/crab_paper.jpg",
    brand: "CRAB",
    title: "CRAB: Cross-environment Agent Benchmark for Multimodal Language Model Agents",
    conference: "NeurIPS 2024, Workshop on OWA-2024",
    date: "18 Oct 2024",
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
    link: "https://arxiv.org/abs/2402.04559",
  },
  {
    logo: "/logo/emos.png",
    logoDark: "/logo/emos_white.png",
    image: "/paper/emos_paper.jpg",
    brand: "EMOS",
    title: "EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents",
    conference: "ICLR 2025",
    date: "30 Oct 2024",
    link: "https://arxiv.org/abs/2410.22662",
  },
];

export default function ResearchPapersSlider() {
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

  const maxIndex = Math.max(0, researchPapers.length - visiblePaperCount);
  const itemWidthPercent = 100 / visiblePaperCount;

  const handlePrev = () => setCurrentPaperIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentPaperIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <div className="my-8 flex w-full flex-col items-start justify-center gap-4">
      <div className="flex w-full flex-col gap-3">
        <div className="w-full overflow-x-visible">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPaperIndex * itemWidthPercent}%)` }}
          >
            {researchPapers.map((paper) => (
              <div
                key={paper.title}
                className="shrink-0 px-2"
                style={{ width: `${itemWidthPercent}%` }}
              >
                <Link
                  className="group bg-card hover:border-neon-primary border-border flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border p-4 text-left shadow-none transition-all duration-200 hover:shadow-lg"
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mb-2 flex shrink-0 items-center justify-center">
                    <Image
                      src={assetUrl(paper.logo)}
                      alt={paper.brand}
                      width={160}
                      height={160}
                      sizes="64px"
                      className="h-8 w-auto shrink-0 object-contain dark:hidden"
                    />
                    <Image
                      src={assetUrl(paper.logoDark ?? paper.logo)}
                      alt={paper.brand}
                      width={160}
                      height={160}
                      sizes="64px"
                      className="hidden h-8 w-auto shrink-0 object-contain dark:block"
                    />
                  </div>
                  <div className="relative mb-2 w-full overflow-hidden">
                    <Image
                      src={assetUrl(paper.image)}
                      alt={paper.title}
                      width={600}
                      height={900}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <h3 className="text-md font-display-title text-foreground mb-4 min-h-0 flex-1 leading-relaxed font-bold">
                    {paper.title}
                  </h3>
                  <div className="text-muted-foreground flex shrink-0 flex-col gap-1 text-[10px]">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-neon-primary font-semibold">{paper.conference}</span>
                      <span className="text-muted-foreground shrink-0">{paper.date}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

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
    </div>
  );
}
