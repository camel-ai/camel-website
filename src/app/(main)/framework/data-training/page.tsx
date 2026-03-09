import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import Link from "next/link";
import { Database, Zap, Target, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Data & Training | CAMEL-AI",
  description:
    "Data generation, RL integration, and benchmarking for training and evaluating agent systems",
};

export default function DataTrainingPage() {
  return (
    <Section padding="lg">
      <Header
        tag="Data & Training"
        tagVariant="neon"
        title="Data, RL, and Evaluation"
        description="Generate training data, integrate with RL frameworks, and evaluate agent performance across 30+ benchmarks"
        minHeight="sm"
      />

      <Container size="xl">
        <Content
          layout="grid"
          spacing="normal"
          customGrid="grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          <Link
            href="/framework/data-training"
            className="group bg-card border-gray-3 hover:border-neon-primary rounded-xl border p-6 transition-all hover:shadow-lg md:p-8"
          >
            <div className="bg-neon-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
              <Database className="text-neon-primary h-6 w-6" />
            </div>
            <h3 className="font-display-title text-gray-primary group-hover:text-neon-primary mb-3 text-xl font-semibold transition-colors md:text-2xl">
              Data Generation
            </h3>
            <p className="text-gray-primary mb-4 leading-relaxed">
              Chain-of-thought synthesis, self-instruct pipelines, and tool-integrated reasoning
              data.
            </p>
            <span className="text-neon-primary flex items-center gap-2 font-semibold">
              Learn more{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/framework/data-training"
            className="group bg-card border-gray-3 hover:border-green-primary rounded-xl border p-6 transition-all hover:shadow-lg md:p-8"
          >
            <div className="bg-green-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
              <Zap className="text-green-primary h-6 w-6" />
            </div>
            <h3 className="font-display-title text-gray-primary group-hover:text-green-primary mb-3 text-xl font-semibold transition-colors md:text-2xl">
              RL & Environments
            </h3>
            <p className="text-gray-primary mb-4 leading-relaxed">
              Reinforcement learning integration with AReaL, Verl, and Slime frameworks.
            </p>
            <span className="text-green-primary flex items-center gap-2 font-semibold">
              Learn more{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/framework/data-training"
            className="group bg-card border-gray-3 hover:border-purple-primary rounded-xl border p-6 transition-all hover:shadow-lg md:p-8"
          >
            <div className="bg-purple-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
              <Target className="text-purple-primary h-6 w-6" />
            </div>
            <h3 className="font-display-title text-gray-primary group-hover:text-purple-primary mb-3 text-xl font-semibold transition-colors md:text-2xl">
              Benchmarking
            </h3>
            <p className="text-gray-primary mb-4 leading-relaxed">
              30+ integrated benchmarks from SWE-Bench to GAIA for comprehensive evaluation.
            </p>
            <span className="text-purple-primary flex items-center gap-2 font-semibold">
              Learn more{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Content>
      </Container>
    </Section>
  );
}
