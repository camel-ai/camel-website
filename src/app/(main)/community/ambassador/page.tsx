import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AMBASSADOR_APPLY_URL =
  "https://eigent-ai.notion.site/1ed511c70ba281dda616e5e5ed26d218?pvs=105";

export const metadata = {
  title: "Ambassador Program | CAMEL-AI",
  description:
    "Become a CAMEL-AI Ambassador and help grow our global community of AI researchers and developers.",
};

export default function AmbassadorPage() {
  return (
    <Section padding="lg">
      <Header
        title="CAMEL Ambassador Program"
        description="Help us build and grow the CAMEL-AI community around the world. As an Ambassador, you'll be at the forefront of the AI multi-agent revolution."
        minHeight="sm"
      />

      <Container size="lg" className="items-center justify-center">
        <Content
          layout="grid"
          columns={3}
          spacing="normal"
          align="center"
          maxWidth="full"
          customGrid="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="bg-card border-border-primary flex h-full flex-col rounded-xl border p-5 sm:p-6">
            <div className="mb-4 text-3xl">🎓</div>
            <h3 className="text-foreground mb-2 text-lg font-semibold">Early Access</h3>
            <p className="text-text-secondary flex-1 text-sm">
              Get early access to new features, research papers, and exclusive content.
            </p>
          </div>
          <div className="bg-card border-border-primary flex h-full flex-col rounded-xl border p-5 sm:p-6">
            <div className="mb-4 text-3xl">🌐</div>
            <h3 className="text-foreground mb-2 text-lg font-semibold">Global Network</h3>
            <p className="text-text-secondary flex-1 text-sm">
              Connect with fellow ambassadors and community leaders worldwide.
            </p>
          </div>
          <div className="bg-card border-border-primary flex h-full flex-col rounded-xl border p-5 sm:p-6">
            <div className="mb-4 text-3xl">🎁</div>
            <h3 className="text-foreground mb-2 text-lg font-semibold">Exclusive Swag</h3>
            <p className="text-text-secondary flex-1 text-sm">
              Receive CAMEL merchandise and exclusive ambassador perks.
            </p>
          </div>
          <div className="bg-card border-border-primary flex h-full flex-col rounded-xl border p-5 sm:p-6">
            <div className="mb-4 text-3xl">📢</div>
            <h3 className="text-foreground mb-2 text-lg font-semibold">Amplified Voice</h3>
            <p className="text-text-secondary flex-1 text-sm">
              Your ideas and feedback directly influence our roadmap.
            </p>
          </div>
          <div className="bg-card border-border-primary flex h-full flex-col rounded-xl border p-5 sm:p-6">
            <div className="mb-4 text-3xl">🏆</div>
            <h3 className="text-foreground mb-2 text-lg font-semibold">Recognition</h3>
            <p className="text-text-secondary flex-1 text-sm">
              Get featured on our website and social media channels.
            </p>
          </div>
          <div className="bg-card border-border-primary flex h-full flex-col rounded-xl border p-5 sm:p-6">
            <div className="mb-4 text-3xl">🤝</div>
            <h3 className="text-foreground mb-2 text-lg font-semibold">Direct Access</h3>
            <p className="text-text-secondary flex-1 text-sm">
              Direct communication with the CAMEL core team.
            </p>
          </div>
        </Content>

        {/* Requirements */}
        <Content
          layout="stack"
          spacing="loose"
          align="center"
          maxWidth="full"
          className="my-12 md:my-16"
        >
          <h2 className="font-display-title text-foreground text-2xl font-bold">
            What We're Looking For
          </h2>
          <div className="bg-card border-border-primary w-full rounded-xl border p-6 md:p-8">
            <ul className="text-foreground space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-camel">✓</span>
                <span>Passion for AI and multi-agent systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-camel">✓</span>
                <span>Active presence in your local tech or AI community</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-camel">✓</span>
                <span>Experience with open-source contributions or community building</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-camel">✓</span>
                <span>Commitment to organizing or participating in events and meetups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-camel">✓</span>
                <span>Ability to create content (blogs, videos, tutorials)</span>
              </li>
            </ul>
          </div>
        </Content>

        {/* Apply CTA */}
        <Content
          layout="stack"
          spacing="loose"
          align="center"
          maxWidth="full"
          className="my-12 md:my-16"
        >
          <h2 className="font-display-title text-foreground text-2xl font-bold">Ready to Join?</h2>
          <Button asChild size="lg" className="font-display-title font-semibold">
            <a
              href={AMBASSADOR_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </Content>
      </Container>
    </Section>
  );
}
