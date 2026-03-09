import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Multimodal | CAMEL-AI Capabilities",
  description:
    "Process images, generate videos, and work across modalities with CAMEL's multimodal agents",
};

export default function MultimodalPage() {
  return (
    <Section padding="lg">
      <Header
        tag="Capability"
        tagVariant="purple"
        title="Multimodal"
        description="Work across text, images, video, and documents. Build agents that understand visual content and generate multimodal outputs"
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
