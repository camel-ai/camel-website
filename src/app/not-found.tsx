import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/Footer";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className="page-viewport flex min-h-screen flex-col">
        <Section
          variant="gradient"
          padding="lg"
          className="flex flex-1 items-center justify-center"
        >
          <Container size="xl" className="relative z-10">
            <div className="flex flex-col items-center justify-center py-16 text-center md:py-24">
              <span className="font-display-title text-neon-primary/20 text-8xl font-bold select-none md:text-9xl">
                404
              </span>
              <h1 className="font-display-title text-foreground mt-4 mb-2 text-2xl font-semibold md:text-4xl">
                Page not found
              </h1>
              <p className="text-muted-foreground mb-10 max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s
                get you back on track.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="text-foreground gap-2">
                  <Link href="/">
                    <Home className="size-5" />
                    Back to home
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-neon-primary gap-2"
                >
                  <Link href="/blogs">
                    <ArrowLeft className="size-5" />
                    Browse blogs
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </div>
      <Footer />
    </>
  );
}
