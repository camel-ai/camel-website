import React from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const downloadLinks = [
  {
    brand: "Eigent AI",
    items: [
      {
        label: "Logo",
        file: "Eigent Logo.zip",
        size: "142.9KB",
        href: "/package/eigent-logo.zip",
      },
    ],
  },
  {
    brand: "Font",
    items: [
      {
        label: "Palatino",
        file: "Palatino.zip",
        size: "1779.3KB",
        href: "/package/palatino.zip",
      },
    ],
  },
  {
    brand: "CAMEL AI",
    items: [
      {
        label: "Logos & Font",
        file: "CAMEL Branding Pack.zip",
        size: "6.7 MiB",
        href: "/package/camel-branding-pack.zip",
      },
      {
        label: "Built with CAMEL",
        file: "Built with CAMEL.zip",
        size: "128.0KB",
        href: "/package/built-with-camel.zip",
      },
      {
        label: "CAMEL Paper Template",
        file: "CAMEL Paper Template.zip",
        size: "—",
        href: "/package/camel-paper-template.zip",
      },
    ],
  },
];

const navSections = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "positioning", num: "02", label: "Positioning" },
  { id: "logo", num: "03", label: "Logo" },
  { id: "color", num: "04", label: "Color" },
  { id: "typography", num: "05", label: "Typography" },
  { id: "imagery", num: "06", label: "Imagery" },
  { id: "voice", num: "07", label: "Voice" },
  { id: "downloads", num: "08", label: "Assets" },
] as const;

const brandColors = [
  { name: "Neon primary", className: "bg-neon-primary", fg: "text-black" },
  { name: "Neon secondary", className: "bg-neon-secondary", fg: "text-foreground" },
  { name: "Cyan", className: "bg-cyan-primary", fg: "text-black" },
  { name: "Pink", className: "bg-pink-primary", fg: "text-black" },
  { name: "Surface / card", className: "bg-card border-border border", fg: "text-foreground" },
  { name: "Foreground", className: "bg-foreground", fg: "text-background" },
] as const;

function BrandNav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex flex-col gap-1", className)} aria-label="Brand sections">
      {navSections.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-muted-foreground hover:text-foreground group flex items-baseline gap-3 rounded-md py-1.5 text-sm transition-colors"
        >
          <span className="font-mono text-xs tabular-nums opacity-60 group-hover:opacity-100">
            {item.num}
          </span>
          <span className="font-medium">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

function SectionBlock({
  id,
  num,
  title,
  kicker,
  children,
  className,
}: {
  id: string;
  num: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div id={id} className={cn("scroll-mt-24 pt-4 first:pt-0 lg:scroll-mt-28", className)}>
      <div className="mb-8 flex flex-col gap-2 border-b border-border pb-8 lg:mb-10 lg:pb-10">
        <div className="text-muted-foreground flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
          <span className="tabular-nums">{num}</span>
          {kicker ? (
            <>
              <span className="bg-border h-px w-6 shrink-0" aria-hidden />
              <span>{kicker}</span>
            </>
          ) : null}
        </div>
        <h2 className="font-display-title text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="text-muted-foreground space-y-6 text-base leading-relaxed md:text-lg [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}

export default function BrandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero — full-bleed intro */}
      <Section variant="gradient" padding="lg" id="hero" className="border-border border-b">
        <Container size="xl" className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-neon-primary font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              Brand kit
            </p>
            <h1 className="font-display-title text-foreground mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Eigent AI
            </h1>
            <p className="text-muted-foreground mt-6 text-lg md:text-xl">
              Language, color, type, and files for representing Eigent AI and CAMEL in product,
              press, and partner materials.
            </p>
            <p className="text-muted-foreground mt-4 text-sm">
              Copyright 2025 Eigent AI. All rights reserved.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg" paddingBottom="xl" className="relative">
        <Container size="xl" className="flex flex-col gap-12 lg:flex-row lg:gap-16 xl:gap-24">
          {/* Mobile TOC */}
          <div className="lg:hidden -mx-2 overflow-x-auto px-2 pb-2">
            <div className="flex w-max gap-2">
              {navSections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="border-border bg-card text-muted-foreground hover:border-neon-secondary/40 hover:text-foreground shrink-0 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors"
                >
                  {item.num} {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop sticky TOC */}
          <aside className="hidden lg:block w-52 shrink-0 xl:w-56">
            <div className="sticky top-28">
              <p className="text-muted-foreground mb-4 font-mono text-xs tracking-widest uppercase">
                Contents
              </p>
              <BrandNav />
            </div>
          </aside>

          <div className="min-w-0 flex-1 space-y-20 md:space-y-28 lg:space-y-32">
            <SectionBlock id="overview" num="01" title="Overview" kicker="Start here">
              <p>
                This page is the single source for how we present Eigent AI alongside CAMEL—what we
                say, how we look, and which files to use. When in doubt, prefer clarity and restraint
                over decoration.
              </p>
              <p>
                <strong>CAMEL-AI.org</strong> is the open research community;{" "}
                <strong>Eigent AI</strong> is the product and company brand. Use each name only in
                contexts where that relationship is accurate.
              </p>
            </SectionBlock>

            <SectionBlock id="positioning" num="02" title="Positioning" kicker="What we stand for">
              <p>
                We speak as builders of reliable, multi-agent systems—confident and precise, never
                hype-driven. Lead with outcomes and evidence; avoid vague “AI magic” language.
              </p>
              <ul className="text-foreground list-inside list-disc space-y-2 marker:text-neon-primary">
                <li>Pair technical depth with plain-English explanations for broader audiences.</li>
                <li>Credit collaborators, datasets, and upstream OSS where relevant.</li>
                <li>Reserve superlatives for claims you can substantiate.</li>
              </ul>
            </SectionBlock>

            <SectionBlock id="logo" num="03" title="Logo" kicker="Marks & placement">
              <p>
                Use approved logo packages only—do not redraw, skew, add effects, or change colors
                outside the provided variants. Maintain clear space at least equal to the height of
                the logomark around lockups.
              </p>
              <div className="not-prose grid gap-4 sm:grid-cols-2">
                <div className="border-border bg-card flex min-h-[140px] items-center justify-center rounded-xl border p-8">
                  <Image
                    src="/logo/eigent_icon.png"
                    alt="Eigent icon mark"
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div className="flex min-h-[140px] items-center justify-center rounded-xl border border-white/10 bg-neutral-950 p-8">
                  <Image
                    src="/logo/camel_white.png"
                    alt="CAMEL wordmark on dark"
                    width={200}
                    height={48}
                    className="h-10 w-auto max-w-full object-contain object-left"
                  />
                </div>
                <div className="border-border bg-card flex min-h-[140px] items-center justify-center rounded-xl border p-8 sm:col-span-2">
                  <Image
                    src="/logo/camel.png"
                    alt="CAMEL wordmark on light"
                    width={200}
                    height={48}
                    className="h-10 w-auto max-w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-sm">
                Full vector and alternate treatments live in the downloadable packs in{" "}
                <a href="#downloads" className="text-neon-primary font-medium hover:underline">
                  Assets
                </a>
                .
              </p>
            </SectionBlock>

            <SectionBlock id="color" num="04" title="Color" kicker="Core palette">
              <p>
                Primary expression uses neon accents on neutral surfaces. Use accent color for focus
                states, highlights, and key CTAs—not large fields of saturated color.
              </p>
              <div className="not-prose grid grid-cols-2 gap-3 sm:grid-cols-3">
                {brandColors.map((c) => (
                  <div
                    key={c.name}
                    className={cn(
                      "flex min-h-[100px] flex-col justify-end rounded-xl p-4 shadow-sm",
                      c.className,
                      c.fg,
                    )}
                  >
                    <span className="text-xs font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="typography" num="05" title="Typography" kicker="Type hierarchy">
              <p>
                <strong className="font-display-title text-2xl md:text-3xl">Display — Palatino</strong>{" "}
                for page titles and editorial headlines.
              </p>
              <p>
                <strong className="font-sans text-xl font-semibold">UI body — Inter</strong> for
                interface copy, long-form web reading, and descriptions.
              </p>
              <p>
                <strong className="font-mono text-base">Mono — Inconsolata</strong> for code, technical
                labels, and metadata.
              </p>
            </SectionBlock>

            <SectionBlock id="imagery" num="06" title="Imagery" kicker="Screens & diagrams">
              <p>
                Prefer real product UI, readable diagrams, and neutral backgrounds. Crop tightly,
                remove sensitive data, and keep contrast high enough for accessibility.
              </p>
              <p>
                Avoid stock “robots shaking hands” tropes and cluttered collages. When showing
                agents or workflows, favor schematics and timelines that explain behavior.
              </p>
            </SectionBlock>

            <SectionBlock id="voice" num="07" title="Voice & tone" kicker="How we write">
              <ul className="text-foreground list-inside list-disc space-y-2 marker:text-neon-primary">
                <li>Active voice, short sentences, concrete nouns.</li>
                <li>Define acronyms on first use in external-facing docs.</li>
                <li>Match formality to channel: more technical in papers, warmer on the website.</li>
                <li>Do not imply human oversight where automation is fully autonomous unless true.</li>
              </ul>
            </SectionBlock>

            <SectionBlock id="downloads" num="08" title="Assets & contact" kicker="Downloads">
              <p className="mb-8">
                Official logo archives, fonts, and CAMEL templates. Use these bundles rather than
                exporting from the website.
              </p>

              <div className="not-prose space-y-10">
                {downloadLinks.map((group) => (
                  <div key={group.brand} className="space-y-4">
                    <h3 className="font-display-title text-foreground border-border border-b pb-2 text-lg font-semibold">
                      {group.brand}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((item) => {
                        const isExternal = item.href.startsWith("http");
                        return (
                          <a
                            key={item.file}
                            href={item.href}
                            {...(isExternal
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : { download: item.file })}
                            className="group border-border bg-card hover:border-neon-secondary/50 hover:bg-card/80 flex items-center justify-between gap-3 rounded-xl border p-4 transition-all sm:gap-4 sm:p-5"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="text-foreground truncate font-medium">{item.label}</p>
                              <p className="text-muted-foreground truncate text-sm">{item.file}</p>
                              <p className="text-muted-foreground mt-1 text-xs">{item.size}</p>
                            </div>
                            <Download className="text-muted-foreground group-hover:text-neon-primary size-5 shrink-0 transition-colors" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="not-prose border-border mt-12 grid gap-8 border-t pt-12 md:grid-cols-2 md:gap-12">
                <div>
                  <h3 className="text-muted-foreground mb-2 text-sm font-semibold tracking-wider uppercase">
                    Prepared by
                  </h3>
                  <p className="text-foreground font-medium">Douglas Yueming Lai</p>
                </div>
                <div>
                  <h3 className="text-muted-foreground mb-2 text-sm font-semibold tracking-wider uppercase">
                    Updated by
                  </h3>
                  <p className="text-foreground font-medium">Eigent AI [2026]</p>
                </div>
              </div>

              <div className="not-prose border-border mt-10 border-t pt-10">
                <h3 className="font-display-title text-foreground mb-4 text-xl font-semibold">
                  Contact
                </h3>
                <p className="text-muted-foreground mb-4">
                  For legal inquiries, please contact{" "}
                  <a
                    href="mailto:info@eigent.ai"
                    className="text-neon-primary inline-flex items-center gap-1 break-all hover:underline"
                  >
                    <Mail className="size-4 shrink-0" />
                    info@eigent.ai
                  </a>
                </p>
                <p className="text-muted-foreground">
                  For permission to use our logos, questions about these guidelines, or uses beyond
                  what is described here, contact{" "}
                  <a
                    href="mailto:info@eigent.ai"
                    className="text-neon-primary inline-flex items-center gap-1 break-all hover:underline"
                  >
                    <Mail className="size-4 shrink-0" />
                    info@eigent.ai
                  </a>
                </p>
              </div>
            </SectionBlock>
          </div>
        </Container>
      </Section>
    </div>
  );
}
