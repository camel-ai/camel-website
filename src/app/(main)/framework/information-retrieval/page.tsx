import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Information Retrieval | CAMEL-AI Capabilities",
  description:
    "Build powerful web search, deep research, and RAG-powered question answering systems with CAMEL",
};

export default function InformationRetrievalPage() {
  return (
    <Section padding="lg">
      <Header
        tag="Capability"
        tagVariant="neon"
        title="Information Retrieval"
        description="Build powerful search engines, deep research systems, and RAG-powered applications that can find and synthesize information from vast datasets"
        minHeight="sm"
      />

      <Container size="lg">
        <Content layout="stack" spacing="normal" align="center">
          <div className="bg-card border-gray-3 w-full rounded-xl border p-6 md:p-8">
            <p className="text-gray-primary text-center">
              Content coming soon. Check our{" "}
              <a href="https://docs.camel-ai.org" className="text-neon-primary hover:underline">
                documentation
              </a>{" "}
              for examples.
            </p>
          </div>
        </Content>
      </Container>
    </Section>
  );
}
