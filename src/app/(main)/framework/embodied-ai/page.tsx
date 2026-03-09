import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Embodied AI | CAMEL-AI Capabilities",
  description:
    "Build agents that interact with physical and digital environments through GUI automation and robotics",
};

export default function EmbodiedAIPage() {
  return (
    <Section padding="lg">
      <Header
        tag="Capability"
        tagVariant="yellow"
        title="Embodied AI"
        description="Build agents that interact with the physical and digital world through GUI automation, computer use, and robotic control"
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
