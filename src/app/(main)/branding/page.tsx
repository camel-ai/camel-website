import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Download, Mail } from "lucide-react";

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

export default function BrandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Section variant="gradient" padding="lg" id="hero">
        <Container size="xl" className="relative z-10">
          <Header
            tagVariant="neon"
            title="Eigent AI | Brand Guideline"
            description="Language and assets for using the Eigent AI brand in your marketing and communications"
            variant="one-column"
          />
          <p className="text-muted-foreground mt-4 text-center text-sm">
            Copyright 2025 Eigent AI. All rights reserved.
          </p>
        </Container>
      </Section>

      {/* Quick Download Links */}
      <Section padding="lg" id="downloads" className="scroll-mt-20">
        <Container size="xl">
          <h2 className="font-display-title text-foreground mb-6 text-2xl font-bold md:mb-8">
            Quick Download Links
          </h2>

          <div className="space-y-10">
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
        </Container>
      </Section>

      {/* Credits & Contact */}
      <Section variant="default" padding="lg" id="contact">
        <Container size="xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
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

          <div className="border-border mt-10 border-t pt-10 md:mt-12 md:pt-12">
            <h3 className="font-display-title text-foreground mb-4 text-xl font-semibold">
              Contact
            </h3>
            <p className="text-muted-foreground mb-4">
              For legal inquiries, please contact{" "}
              <a
                href="mailto:info@eigent.ai"
                className="text-neon-primary inline-flex items-center gap-1 break-all hover:underline"
              >
                <Mail className="size-4" />
                info@eigent.ai
              </a>
            </p>
            <p className="text-muted-foreground">
              For everything else, including requesting permission to use our logos, questions about
              these guidelines, or if your communications go beyond the cases outlined above, please
              contact{" "}
              <a
                href="mailto:info@eigent.ai"
                className="text-neon-primary inline-flex items-center gap-1 break-all hover:underline"
              >
                <Mail className="size-4" />
                info@eigent.ai
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
