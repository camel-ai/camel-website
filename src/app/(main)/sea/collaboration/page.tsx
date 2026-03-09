import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "SEA Collaborations | CAMEL-AI",
  description:
    "Explore SEA project collaborations - partnerships and joint research initiatives with organizations worldwide.",
};

export default function SEACollaborationPage() {
  return (
    <div className="page-container px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display-title text-foreground mb-5 text-center text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl">
          SEA Collaborations
        </h1>
        <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-center text-base sm:text-lg md:mb-12">
          Partnerships and joint research initiatives with organizations worldwide.
        </p>

        {/* Collaboration Types */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-foreground mb-6 text-center text-2xl font-bold md:mb-8">
            How We Collaborate
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <div className="bg-card-background-secondary/80 border-border-primary rounded-xl border p-6 text-center">
              <div className="mb-4 text-3xl">🎓</div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">Academic</h3>
              <p className="text-muted-foreground text-sm">
                Research partnerships with universities and institutes.
              </p>
            </div>
            <div className="bg-card-background-secondary/80 border-border-primary rounded-xl border p-6 text-center">
              <div className="mb-4 text-3xl">🏢</div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">Industry</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise partnerships for real-world applications.
              </p>
            </div>
            <div className="bg-card-background-secondary/80 border-border-primary rounded-xl border p-6 text-center">
              <div className="mb-4 text-3xl">🌍</div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">Community</h3>
              <p className="text-muted-foreground text-sm">
                Open-source collaborations with global developers.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Collaborations */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-foreground mb-6 text-center text-2xl font-bold md:mb-8">
            Featured Partners
          </h2>
          <div className="bg-card-background-secondary/80 border-border-primary rounded-xl border p-6 md:p-8">
            <p className="text-muted-foreground text-center">
              We collaborate with leading research institutions and organizations worldwide. Contact
              us to explore partnership opportunities.
            </p>
          </div>
        </div>

        {/* Become a Partner */}
        <div className="from-brand-camel/10 to-brand-blue/10 border-brand-camel/20 rounded-xl border bg-gradient-to-r p-6 text-center md:p-8">
          <h2 className="text-foreground mb-4 text-2xl font-bold">Become a Partner</h2>
          <p className="text-muted-foreground mx-auto mb-6 max-w-xl">
            Interested in collaborating with CAMEL-AI? We're always looking for new partnerships to
            advance multi-agent AI research.
          </p>
          <Link href="mailto:info@camel-ai.org">
            <Button variant="default" size="default">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
