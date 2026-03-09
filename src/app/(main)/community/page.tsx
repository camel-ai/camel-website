import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { GitFork, Star, UserPlus, Users } from "lucide-react";
import { CommunityImageSlider } from "@/components/community/CommunityImageSlider";
import { ContributorsGrid } from "@/components/community/ContributorsGrid";

export const metadata = {
  title: "Community | CAMEL-AI",
  description:
    "Join the CAMEL-AI community - researchers, developers, and AI enthusiasts building the future of multi-agent systems.",
};

export default function CommunityPage() {
  return (
    <Section padding="lg">
      <Header
        title="CAMEL-AI Community"
        description="Join our vibrant community of researchers, developers, and AI enthusiasts building the future of collaborative AI agents."
        minHeight="sm"
      />

      <Container size="xl">
        {/* Community Stats */}
        <Content layout="grid" columns={4} spacing="normal" align="center" maxWidth="full">
          <div className="flex flex-col items-center gap-3">
            <Star className="text-neon-primary size-8 stroke-[1.5]" />
            <span className="font-display-title text-neon-primary text-2xl font-bold md:text-5xl">
              38K
            </span>
            <span className="text-gray-primary text-sm tracking-wide uppercase">Stars</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <UserPlus className="text-neon-primary size-8 stroke-[1.5]" />
            <span className="font-display-title text-neon-primary text-2xl font-bold md:text-5xl">
              200+
            </span>
            <span className="text-gray-primary text-sm tracking-wide uppercase">Contributors</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Users className="text-neon-primary size-8 stroke-[1.5]" />
            <span className="font-display-title text-neon-primary text-2xl font-bold md:text-5xl">
              30K
            </span>
            <span className="text-gray-primary text-sm tracking-wide uppercase">
              Community Members
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <GitFork className="text-neon-primary size-8 stroke-[1.5]" />
            <span className="font-display-title text-neon-primary text-2xl font-bold md:text-5xl">
              4K+
            </span>
            <span className="text-gray-primary text-sm tracking-wide uppercase">Forks</span>
          </div>
        </Content>

        <CommunityImageSlider />

        {/* Join Options */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row">
          <Link href="https://discord.camel-ai.org" target="_blank" className="group flex-1">
            <div className="bg-card border-border hover:border-neon-primary flex h-full flex-col overflow-hidden rounded-xl border transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/image/join_discord.avif"
                  alt="Join Discord"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:rotate-6"
                />
              </div>
              <div className="flex flex-col items-center p-5 text-center sm:p-6">
                <h3 className="font-display-title text-foreground mb-4 text-xl font-bold sm:text-2xl">
                  Join Discord
                </h3>
                <Button variant="outline" className="w-full sm:w-auto">
                  Join Discord
                </Button>
              </div>
            </div>
          </Link>
          <Link href="/community/ambassador" className="group flex-1">
            <div className="bg-card border-border hover:border-neon-primary flex h-full flex-col overflow-hidden rounded-xl border transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/image/ambassador.png"
                  alt="Ambassador Program"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:rotate-6"
                />
              </div>
              <div className="flex flex-col items-center p-5 text-center sm:p-6">
                <h3 className="font-display-title text-foreground mb-4 text-xl font-bold sm:text-2xl">
                  Ambassador Program
                </h3>
                <Button variant="default" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/camel-ai" target="_blank" className="group flex-1">
            <div className="bg-card border-border hover:border-neon-primary flex h-full flex-col overflow-hidden rounded-xl border transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/image/build_with_camel.avif"
                  alt="Build with CAMEL"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:rotate-6"
                />
              </div>
              <div className="flex flex-col items-center p-5 text-center sm:p-6">
                <h3 className="font-display-title text-foreground mb-4 text-xl font-bold sm:text-2xl">
                  Build with CAMEL
                </h3>
                <Button variant="outline" className="w-full sm:w-auto">
                  View GitHub
                </Button>
              </div>
            </div>
          </Link>
        </div>

        <ContributorsGrid />
      </Container>
    </Section>
  );
}
