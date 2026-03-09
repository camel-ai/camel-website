import { Suspense } from "react";
import { getAllPosts, sortPostsByDateDesc } from "./utils";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import BlogContent from "@/components/blog/BlogContent";

export const metadata = {
  title: "Blog",
  description:
    "CAMEL-AI blog: updates, tutorials, and insights on multi-agent systems, data generation, and AI research.",
  openGraph: {
    title: "Blog | CAMEL-AI",
    description:
      "CAMEL-AI blog: updates, tutorials, and insights on multi-agent systems, data generation, and AI research.",
    images: [
      {
        url: "/image/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "CAMEL-AI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | CAMEL-AI",
    description: "CAMEL-AI blog: updates, tutorials, and insights on multi-agent systems.",
    images: { url: "/image/thumbnail.png", alt: "CAMEL-AI Blog" },
  },
};

export default async function BlogIndexPage() {
  const allPosts = getAllPosts();
  const posts = sortPostsByDateDesc(allPosts);

  // Extract unique categories
  const categories = Array.from(
    new Set(posts.map((p) => p.data.category).filter(Boolean) as string[]),
  );

  // Serialize post data for the client component
  const serializedPosts = posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date,
    category: post.data.category,
    thumbnail: post.data.thumbnail,
    author: post.data.author,
    authorprofile: post.data.authorprofile,
  }));

  return (
    <Section padding="lg">
      <Header title="Blogs" minHeight="sm" variant="two-column" />
      <Container size="xl">
        <Suspense fallback={null}>
          <BlogContent posts={serializedPosts} categories={categories} />
        </Suspense>
      </Container>
    </Section>
  );
}
