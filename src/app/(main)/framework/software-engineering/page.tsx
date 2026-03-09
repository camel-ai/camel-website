import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Software Engineering | CAMEL-AI Capabilities",
  description:
    "Automate code generation, bug fixing, and software development workflows with CAMEL agents",
};

export default function SoftwareEngineeringPage() {
  return (
    <Section padding="lg">
      <Header
        tag="Capability"
        tagVariant="green"
        title="Software Engineering"
        description="Automate software development workflows from code generation to bug fixing, with agents that understand codebases and collaborate on complex tasks"
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
