import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Layers, Zap, Database, Terminal } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Framework | CAMEL-AI",
  description:
    "A comprehensive multi-agent framework designed for scalability, evolvability, and statefulness with code-as-prompt architecture",
};

export default function FrameworkPage() {
  return (
    <>
      <Section padding="lg">
        <Header
          tag="Framework"
          tagVariant="neon"
          title="The CAMEL Multi-Agent Framework"
          description="A comprehensive framework designed for building scalable, evolvable, and stateful multi-agent systems with code-as-prompt architecture"
          variant="one-column"
          minHeight="sm"
        />

        <Container size="xl">
          {/* Core Principles */}
          <Content layout="grid" columns={4} spacing="relaxed" className="mb-12 md:mb-16">
            <div className="bg-card flex h-full flex-col rounded-xl p-6 transition-all md:p-8">
              <div className="bg-neon-primary/10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                <Layers className="text-neon-primary h-6 w-6" />
              </div>
              <h3 className="font-display-title text-foreground mb-3 shrink-0 text-xl font-semibold md:text-2xl">
                Evolvability
              </h3>
              <p className="text-muted-foreground min-h-0 flex-1 leading-relaxed">
                Agents can dynamically evolve their capabilities through data generation,
                fine-tuning, and continuous learning processes.
              </p>
            </div>

            <div className="bg-card flex h-full flex-col rounded-xl p-6 transition-all md:p-8">
              <div className="bg-green-primary/10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                <Zap className="text-green-primary h-6 w-6" />
              </div>
              <h3 className="font-display-title text-foreground mb-3 shrink-0 text-xl font-semibold md:text-2xl">
                Scalability
              </h3>
              <p className="text-muted-foreground min-h-0 flex-1 leading-relaxed">
                From single agents to massive workforces with thousands of agents working in
                parallel across distributed systems.
              </p>
            </div>

            <div className="bg-card flex h-full flex-col rounded-xl p-6 transition-all md:p-8">
              <div className="bg-pink-primary/10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                <Database className="text-pink-primary h-6 w-6" />
              </div>
              <h3 className="font-display-title text-foreground mb-3 shrink-0 text-xl font-semibold md:text-2xl">
                Statefulness
              </h3>
              <p className="text-muted-foreground min-h-0 flex-1 leading-relaxed">
                Built-in memory systems including vector databases, long-term memory, and contextual
                state management for persistent agent behavior.
              </p>
            </div>

            <div className="bg-card flex h-full flex-col rounded-xl p-6 transition-all md:p-8">
              <div className="bg-yellow-primary/10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                <Code className="text-yellow-primary h-6 w-6" />
              </div>
              <h3 className="font-display-title text-foreground mb-3 shrink-0 text-xl font-semibold md:text-2xl">
                Code-as-Prompt
              </h3>
              <p className="text-muted-foreground min-h-0 flex-1 leading-relaxed">
                Define agent behaviors, tools, and interactions using clean, type-safe code rather
                than brittle prompt templates.
              </p>
            </div>
          </Content>

          {/* Three-Layer Architecture */}
          <Content layout="stack" spacing="relaxed" align="center" className="mb-16">
            <div className="w-full text-center">
              <Image
                src="/image/layer_architecture.png"
                alt="Three-Layer Architecture"
                width={1000}
                height={1000}
                className="h-auto w-full"
                sizes="100vw"
              />
            </div>
          </Content>

          {/* CTA Section */}
          <Content layout="stack" spacing="normal" align="center">
            <div className="from-neon-secondary/30 to-neon-secondary/10 text-text-inverse w-full rounded-2xl bg-gradient-to-b p-6 text-center sm:p-8 md:p-12">
              <h3 className="text-neon-primary font-display-title mb-6 text-2xl font-bold sm:text-3xl md:mb-8 md:text-4xl">
                Ready to Get Started?
              </h3>
              <p className="text-neon-primary mb-6 text-base opacity-90 md:mb-8 md:text-lg">
                Explore our comprehensive documentation and start building with CAMEL today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="https://docs.camel-ai.org" target="_blank">
                    <Terminal className="mr-2 h-5 w-5" />
                    View Documentation
                  </Link>
                </Button>
                <Button asChild size="lg" variant="default">
                  <Link href="https://github.com/camel-ai/camel" target="_blank">
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </Content>
        </Container>
      </Section>
    </>
  );
}
