import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Social Simulation | CAMEL-AI Capabilities",
  description:
    "Simulate population dynamics, role-playing scenarios, and strategic interactions with multi-agent systems",
};

export default function SocialSimulationPage() {
  return (
    <Section padding="lg">
      <Header
        tag="Capability"
        tagVariant="red"
        title="Social Simulation"
        description="Simulate complex social dynamics, from population behaviors to strategic game playing and role-playing scenarios"
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
