import type { Metadata } from "next";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "CAMEL-AI | Finding the Scaling Laws of Agents",
  description:
    "CAMEL-AI is an open-source community for finding the scaling laws of agents for data generation, world simulation, task automation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.camel-ai.org/",
    siteName: "CAMEL-AI",
    title: "CAMEL-AI | Finding the Scaling Laws of Agents",
    description:
      "CAMEL-AI is an open-source community for finding the scaling laws of agents for data generation, world simulation, task automation.",
    images: [
      {
        url: "/image/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "CAMEL-AI - Finding the Scaling Laws of Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@camel_ai",
    creator: "@camel_ai",
    title: "CAMEL-AI | Finding the Scaling Laws of Agents",
    description:
      "CAMEL-AI is an open-source community for finding the scaling laws of agents for data generation, world simulation, task automation.",
    images: {
      url: "/image/thumbnail.png",
      alt: "CAMEL-AI - Finding the Scaling Laws of Agents",
    },
  },
};

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavBar />
      <main className="page-viewport">{children}</main>
      <Footer />
    </>
  );
}
