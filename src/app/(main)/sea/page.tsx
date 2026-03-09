import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "SEA Project | CAMEL-AI",
  description:
    "Learn about the SEA project - CAMEL-AI's initiative for advancing multi-agent research and collaboration.",
};

export default function SEAPage() {
  return (
    <Section padding="lg">
      <Header
        title="SEA Project"
        description="An initiative to advance multi-agent research and foster global collaboration in AI development."
        minHeight="sm"
      />

      <Container size="lg">
        {/* Overview */}
        <Content layout="stack" spacing="normal" align="left" maxWidth="full" className="mb-12">
          <div className="bg-card-background-secondary/80 border-border-primary w-full rounded-xl border p-6 md:p-8">
            <h2 className="text-foreground mb-4 text-2xl font-bold">About SEA</h2>
            <p className="text-text-secondary mb-4">
              The SEA project is CAMEL-AI's flagship initiative designed to bring together
              researchers, developers, and organizations to collaborate on cutting-edge multi-agent
              systems.
            </p>
            <p className="text-text-secondary">
              Through SEA, we aim to accelerate the development of collaborative AI agents that can
              work together to solve complex real-world problems.
            </p>
          </div>
        </Content>

        {/* Key Focus Areas */}
        <Content layout="stack" spacing="loose" align="center" maxWidth="full" className="mb-16">
          <h2 className="text-foreground text-center text-2xl font-bold">Key Focus Areas</h2>
          <Content layout="grid" columns={2} spacing="normal" align="left" maxWidth="full">
            <div className="bg-card-background-secondary/80 border-border-primary rounded-xl border p-5 md:p-6">
              <h3 className="text-foreground mb-2 text-lg font-semibold">Research Collaboration</h3>
              <p className="text-text-secondary text-sm">
                Partnering with academic institutions and research labs to advance multi-agent AI
                research.
              </p>
            </div>
            <div className="bg-card-background-secondary/80 border-border-primary rounded-xl border p-5 md:p-6">
              <h3 className="text-foreground mb-2 text-lg font-semibold">Open Datasets</h3>
              <p className="text-text-secondary text-sm">
                Creating and sharing datasets to accelerate multi-agent system development.
              </p>
            </div>
            <div className="bg-card-background-secondary/80 border-border-primary rounded-xl border p-5 md:p-6">
              <h3 className="text-foreground mb-2 text-lg font-semibold">Benchmark Development</h3>
              <p className="text-text-secondary text-sm">
                Building standardized benchmarks for evaluating multi-agent system performance.
              </p>
            </div>
            <div className="bg-card-background-secondary/80 border-border-primary rounded-xl border p-5 md:p-6">
              <h3 className="text-foreground mb-2 text-lg font-semibold">Community Projects</h3>
              <p className="text-text-secondary text-sm">
                Supporting community-driven projects that extend the CAMEL ecosystem.
              </p>
            </div>
          </Content>
        </Content>

        {/* CTA */}
        <Content layout="stack" spacing="normal" align="center" maxWidth="lg">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/sea/collaboration">
              <Button variant="default" size="default">
                View Collaborations
              </Button>
            </Link>
            <Link href="https://github.com/camel-ai" target="_blank">
              <Button variant="secondary" size="default">
                Contribute on GitHub
              </Button>
            </Link>
          </div>
        </Content>
      </Container>
    </Section>
  );
}
