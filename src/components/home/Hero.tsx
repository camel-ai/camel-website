"use client";

import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import Content from "@/components/layout/Content";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useTheme } from "next-themes";
import backgroundAnimation from "../../../public/image/background.json";
import backgroundDarkAnimation from "../../../public/image/background_dark.json";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const t = useTranslations("HomePage.hero");

  const typingPhrases = React.useMemo(() => t.raw("typingPhrases") as string[], [t]);

  const [activeTab, setActiveTab] = React.useState<"camel" | "owl" | "seta" | "oasis">("camel");

  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && subIndex < currentPhrase.length) {
      // Typing forward
      timeout = setTimeout(() => setSubIndex((prev) => prev + 1), 120);
    } else if (!isDeleting && subIndex === currentPhrase.length) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && subIndex > 0) {
      // Deleting
      timeout = setTimeout(() => setSubIndex((prev) => prev - 1), 60);
    } else if (isDeleting && subIndex === 0) {
      // Move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, phraseIndex, typingPhrases]);

  const tabContent: Record<
    typeof activeTab,
    {
      header: string;
      body: string;
      logs: string[];
    }
  > = {
    camel: {
      header: t("tabs.camel.header"),
      body: t("tabs.camel.body"),
      logs: ["pip install camel-ai"],
    },
    owl: {
      header: t("tabs.owl.header"),
      body: t("tabs.owl.body"),
      logs: ["git clone https://github.com/camel-ai/owl.git"],
    },
    seta: {
      header: t("tabs.seta.header"),
      body: t("tabs.seta.body"),
      logs: ["git clone https://github.com/camel-ai/seta.git"],
    },
    oasis: {
      header: t("tabs.oasis.header"),
      body: t("tabs.oasis.body"),
      logs: ["pip install camel-oasis"],
    },
  };

  const current = tabContent[activeTab];

  return (
    <Section
      variant="gradient"
      padding="md"
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-40">
        <div className="absolute top-1/2 left-1/2 h-[max(100vh,calc(100vw/1.65))] w-[max(100vw,calc(100vh*1.65))] -translate-x-1/2 -translate-y-1/2">
          <Lottie
            key={resolvedTheme ?? "light"}
            animationData={resolvedTheme === "dark" ? backgroundDarkAnimation : backgroundAnimation}
            loop
            className="!h-full !w-full"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      {/* Bottom gradient mask: from background to transparent over bottom 20vh */}
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t to-transparent" />
      <Container size="xl" className="z-10 flex flex-1 flex-col justify-end pt-20 sm:pt-24">
        <Content align="left" spacing="relaxed" maxWidth="full">
          <div className="flex h-full w-full flex-col items-start">
            {/* Row 1: Tag */}
            <div className="flex w-full justify-start">
              <span className="border-neon-secondary bg-neon-secondary/10 text-neon-primary mb-4 inline-flex w-fit items-center rounded-full border px-3 py-1 text-left text-xs font-semibold">
                {t("tag")}
              </span>
            </div>

            {/* Row 2: Title */}
            <div className="mb-6 flex w-full justify-start sm:mb-8">
              <h1 className="font-display-title text-foreground text-left text-3xl leading-snug font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                {t("titleLine1")}
                <br />
                {t("titleLine2")}{" "}
                <motion.span
                  key={phraseIndex}
                  className="text-neon-primary font-display-title font-bold"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {typingPhrases[phraseIndex].slice(0, subIndex)}
                  <span className="animate-pulse">|</span>
                </motion.span>
              </h1>
            </div>

            {/* Row 3: Description (left) + Tabs (right) */}
            <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:gap-12 lg:gap-24">
              <div className="flex md:w-2/3">
                <div className="bg-card border-border-primary flex w-full flex-col overflow-hidden rounded-xl border">
                  <Tabs
                    value={activeTab}
                    onValueChange={(value) => setActiveTab(value as typeof activeTab)}
                    className="flex h-full w-full flex-col"
                  >
                    {/* Terminal header */}
                    <div className="flex flex-row items-start justify-between gap-4 px-4 pt-2">
                      <p className="font-text-code text-neon-primary text-left text-sm break-all sm:text-base lg:text-lg">
                        {current.logs.map((log, index) => (
                          <span
                            key={index}
                            className="font-text-code text-neon-primary text-left text-sm sm:text-base lg:text-lg"
                          >
                            {log}
                          </span>
                        ))}
                      </p>
                    </div>
                    {/* Tabs using shared Tabs UI */}
                    <div className="flex w-full flex-col flex-wrap items-stretch justify-between gap-2 p-2 sm:flex-row sm:items-center">
                      <TabsList
                        variant="line"
                        className="flex flex-row flex-wrap gap-1 bg-transparent p-0"
                      >
                        {(["camel", "owl", "seta", "oasis"] as const).map((tab) => {
                          const label =
                            tab === "camel"
                              ? "CAMEL"
                              : tab === "owl"
                                ? "OWL"
                                : tab === "seta"
                                  ? "SETA"
                                  : "OASIS";
                          const iconSrc =
                            tab === "camel"
                              ? "/logo/camel_icon.png"
                              : tab === "owl"
                                ? "/logo/owl_icon.png"
                                : tab === "seta"
                                  ? "/logo/seta_icon.png"
                                  : "/logo/oasis_icon.png";
                          const darkIconSrc =
                            tab === "camel"
                              ? "/logo/camel_icon_white.png"
                              : tab === "owl"
                                ? "/logo/owl_icon_white.png"
                                : tab === "seta"
                                  ? "/logo/seta_icon_white.png"
                                  : "/logo/oasis_icon_white.png";

                          return (
                            <TabsTrigger
                              key={tab}
                              value={tab}
                              className="font-display-title text-neon-primary hover:bg-neon-secondary/30 data-[state=active]:bg-neon-secondary/50 data-[state=active]:text-neon-primary inline-flex items-center gap-2 rounded-lg px-3 py-1 text-sm font-bold transition-all sm:px-4 sm:text-base"
                            >
                              <Image
                                src={iconSrc}
                                alt={`${label} logo`}
                                width={40}
                                height={40}
                                className="h-8 w-8 object-contain dark:hidden"
                              />
                              <Image
                                src={darkIconSrc}
                                alt={`${label} logo`}
                                width={40}
                                height={40}
                                className="hidden h-8 w-8 object-contain dark:block"
                              />
                              <span className="font-display-title hidden font-bold sm:inline">
                                {label}
                              </span>
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>
                      <Button
                        variant="default"
                        size="default"
                        className="font-display-title w-full cursor-pointer font-bold sm:w-auto"
                        onClick={() => (window.location.href = "https://github.com/camel-ai")}
                      >
                        {t("startBuilding")}
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </Tabs>
                </div>
              </div>

              <div className="flex items-start justify-start md:w-1/3">
                <p className="text-gray-primary max-w-sm text-left text-sm md:text-base">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>
        </Content>
      </Container>
    </Section>
  );
};

export default Hero;
