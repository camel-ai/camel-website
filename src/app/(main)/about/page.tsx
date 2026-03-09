import React from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero: full screen height, background image, text left */}
      <Section
        variant="gradient"
        padding="md"
        id="hero"
        className="relative min-h-[80vh] items-center justify-center md:min-h-[90vh]"
      >
        <Image
          src="/image/background_about.png"
          alt=""
          fill
          className="object-cover object-bottom"
          priority
          sizes="100vw"
        />
        <Container size="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md py-10 sm:py-16">
            <h1 className="font-display-title text-foreground mb-5 text-3xl leading-snug font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              We are Finding
              <br />
              the{" "}
              <span className="font-display-title text-neon-primary font-semibold">
                Scaling Laws
              </span>{" "}
              of <span className="font-display-title text-pink-primary font-semibold">Agents</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-xl">
              CAMEL-AI is an open-source community for finding the scaling laws of agents for data
              generation, world simulation, and task automation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Teams: left sticky menu, right content with people cards */}
      <Section padding="lg" id="team" className="scroll-mt-20">
        <Header
          tagVariant="neon"
          title="Our Team"
          description="Meet the team behind CAMEL-AI"
          variant="one-column"
        />
        <Container size="xl" className="flex flex-col">
          {/* Founder */}
          <div className="flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:gap-16">
            <div className="shrink-0 lg:w-56">
              <div className="space-y-1 lg:sticky lg:top-24">
                <h2 className="font-display-title text-foreground mb-8 text-2xl font-bold">
                  Founder
                </h2>
              </div>
            </div>

            {/* Right: content */}
            <div className="min-w-0 flex-1 space-y-10 md:space-y-16">
              <div className="bg-card flex flex-col gap-6 rounded-xl p-6 sm:flex-row md:p-8">
                <div className="shrink-0">
                  <Image
                    src="/people/guohao_li.jpg"
                    alt="Guohao Li"
                    width={160}
                    height={160}
                    className="aspect-square h-32 w-32 rounded-xl object-cover sm:h-40 sm:w-40"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display-title text-foreground mb-1 text-2xl font-bold sm:text-3xl">
                    Guohao Li
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm sm:mb-8">
                    Founder and CEO @ CAMEL-AI & Eigent.AI
                  </p>
                  <div className="grid gap-6 md:grid-cols-1">
                    <div>
                      <h4 className="text-foreground mb-2 text-sm font-semibold tracking-wider uppercase">
                        Open Source
                      </h4>
                      <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                        <li>Creator of CAMEL-AI.org, DeepGCNs.org</li>
                        <li>Core Contributor of PyG.org</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-2 text-sm font-semibold tracking-wider uppercase">
                        Academia
                      </h4>
                      <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                        <li>Postdoc at Oxford</li>
                        <li>PhD at KAUST</li>
                        <li>
                          Publications at NeurIPS, ICML, ICLR, ICCV, CVPR, RSS, 3DV, and TPAMI
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-2 text-sm font-semibold tracking-wider uppercase">
                        Industry
                      </h4>
                      <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                        <li>Early member at Kumo.AI (Sequoia backed)</li>
                        <li>Research at Intel ISL Labs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisors */}
          <div className="flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:gap-16">
            <div className="shrink-0 lg:w-56">
              <div className="space-y-1 lg:sticky lg:top-24">
                <h2 className="font-display-title text-foreground mb-8 text-2xl font-bold">
                  Advisors
                </h2>
              </div>
            </div>

            {/* Right: content */}
            <div className="min-w-0 flex-1 space-y-10 md:space-y-16">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-card flex flex-col gap-6 rounded-xl p-6 sm:flex-row md:p-8">
                  <div className="shrink-0">
                    <Image
                      src="/people/bernard_ghanem.jpg"
                      alt="Bernard Ghanem"
                      width={120}
                      height={120}
                      className="aspect-square h-24 w-24 rounded-xl object-cover sm:h-28 sm:w-28"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display-title text-foreground mb-1 text-2xl font-bold sm:text-3xl">
                      Bernard Ghanem
                    </h3>
                    <p className="text-muted-foreground mb-5 text-sm sm:mb-8">
                      King Abdullah University of Science and Technology
                    </p>
                    <ul className="text-muted-foreground list-inside list-disc space-y-4 text-sm">
                      <li>Rising star professor in the Middle East region.</li>
                      <li>
                        He was awarded the Shoman Arab Researcher Award for the topic of Machine
                        Learning and Big Data.
                      </li>
                      <li>
                        Deputy Director of AI Initiative at KAUST and now leading a bigger
                        initiative at KAUST on GenAI.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-card flex flex-col gap-6 rounded-xl p-6 sm:flex-row md:p-8">
                  <div className="shrink-0">
                    <Image
                      src="/people/philip_trorr.jpg"
                      alt="Philip Torr"
                      width={120}
                      height={120}
                      className="aspect-square h-24 w-24 rounded-xl object-cover sm:h-28 sm:w-28"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display-title text-foreground mb-1 text-2xl font-bold sm:text-3xl">
                      Philip Torr
                    </h3>
                    <p className="text-muted-foreground mb-5 text-sm sm:mb-8">
                      University of Oxford
                    </p>
                    <ul className="text-muted-foreground list-inside list-disc space-y-4 text-sm">
                      <li>
                        <strong className="text-foreground">2019:</strong> Fellow of the Royal
                        Academy of Engineering (FREng)
                      </li>
                      <li>
                        <strong className="text-foreground">2021:</strong> Fellow of the Royal
                        Society (FRS) for contributions to computer vision
                      </li>
                      <li>
                        <strong className="text-foreground">2021:</strong> Turing AI world leading
                        researcher fellow
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
