import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";

export const metadata = {
  title: "Domain-Specific | CAMEL-AI Capabilities",
  description:
    "Specialized applications for healthcare, finance, security, and other domain-specific use cases",
};

export default function DomainSpecificPage() {
  return (
    <Section padding="lg">
      <Header
        tag="Capability"
        tagVariant="neon"
        title="Domain-Specific Applications"
        description="Specialized agent systems for healthcare, finance, security, and other domain-specific requirements"
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
