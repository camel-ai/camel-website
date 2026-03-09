"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import TechStackContent from "@/components/techstack";

export default function TechStacksPage() {
  return (
    <div className="min-h-screen">
      <Section variant="gradient" padding="lg" id="hero">
        <Container size="xl" className="relative z-10">
          <Header
            tag="Tech Stack"
            tagVariant="neon"
            title="CAMEL-AI Tech Stack"
            description="Built on state-of-the-art CAMEL/OASIS research with open benchmarks and datasets. Explore the full technology stack powering multi-agent AI systems."
            variant="one-column"
          />
          <TechStackContent />
        </Container>
      </Section>
    </div>
  );
}
