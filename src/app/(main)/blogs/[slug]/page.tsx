import { CustomMDX } from "@/components/mdx";
import { buildSeoMeta, getAllPosts, getPostBySlug, sortPostsByDateDesc } from "../utils";
import type { Metadata } from "next";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { ArrowLeftIcon, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  const meta = buildSeoMeta(post);
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      url: `/blogs/${slug}`,
    },
    alternates: {
      canonical: `/blogs/${slug}`,
    },
  } as Metadata;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return <div className="px-4 py-10 text-center">Post not found</div>;

  const allPosts = getAllPosts();
  const recentPosts = sortPostsByDateDesc(allPosts)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const authorInfo = post.authorData || {
    name: post.data.author || "Anonymous",
    avatar: post.data.authorprofile,
    role: post.data.role || "Author",
  };

  return (
    <article className="px-4 py-8 sm:px-6 sm:py-10">
      {/* Title Section */}
      <header className="border-border mx-auto mb-10 max-w-7xl border-b py-8 sm:mb-12 sm:py-12">
        <div className="mb-6 flex flex-wrap items-center justify-start gap-3 sm:mb-8">
          <Link
            href="/blogs"
            className="border-border hover:bg-muted inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-sm font-medium transition-colors"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            Back
          </Link>
          <div className="text-foreground flex flex-wrap items-center justify-start gap-2 text-xs font-medium tracking-wider uppercase sm:gap-3 sm:text-sm">
            {post.data.category && <span>BLOG / {post.data.category}</span>}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="col-span-1 flex flex-col items-start justify-start">
            <h1 className="text-foreground mb-4 text-left text-3xl leading-tight font-bold sm:text-4xl xl:text-5xl">
              {post.data.title}
            </h1>
            {post.data.subtitle && (
              <p className="text-muted-foreground mb-6 text-left text-lg leading-relaxed sm:text-xl">
                {post.data.subtitle}
              </p>
            )}
            <div className="text-muted-foreground flex flex-wrap items-center justify-start gap-2 text-sm sm:gap-3">
              {post.data.date && (
                <span>
                  {new Date(post.data.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
              <span className="text-border">|</span>
              <span className="inline-flex items-center gap-1">{post.readingTime} min read</span>
            </div>
          </div>
          {post.data.thumbnail && (
            <div className="bg-muted col-span-1 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={post.data.thumbnail}
                alt={post.data.title}
                width={1200}
                height={630}
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </header>

      {/* 12-col Grid: Left TOC (3) - Content (6) - Right Sidebar (3) */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-12">
          {/* Left Sidebar - Table of Contents */}
          <aside className="order-first xl:order-1 xl:col-span-2">
            <div className="xl:sticky xl:top-24">
              <BlogTableOfContents toc={post.toc} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="order-2 min-w-0 xl:col-span-8">
            <CustomMDX source={post.content} />
          </div>

          {/* Right Sidebar - Author */}
          <aside className="order-3 xl:col-span-2">
            <div className="xl:sticky xl:top-24">
              <BlogSidebar
                author={authorInfo}
                date={post.data.date}
                title={post.data.title}
                subtitle={post.data.subtitle}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="border-border mx-auto mt-16 max-w-7xl border-t pt-12">
          <h2 className="text-foreground mb-8 text-2xl font-bold">Recent Posts</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {recentPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blogs/${p.slug}`}
                className="group border-border hover:border-foreground/20 flex flex-col overflow-hidden rounded-2xl border transition-colors"
              >
                <div className="bg-muted relative aspect-video w-full">
                  {p.data.thumbnail && (
                    <Image
                      src={p.data.thumbnail}
                      alt={p.data.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="text-muted-foreground mb-2 flex items-center justify-between text-xs">
                    {p.data.category && (
                      <span className="border-border rounded-md border px-1 py-0.5 text-[10px] font-medium uppercase">
                        {p.data.category}
                      </span>
                    )}
                    <span className="tracking-wide uppercase">
                      {new Date(p.data.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-foreground mb-1 line-clamp-2 text-lg font-semibold group-hover:underline">
                    {p.data.title}
                  </h3>
                  {p.data.description && (
                    <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
                      {p.data.description}
                    </p>
                  )}
                  <div className="text-muted-foreground mt-auto flex items-center gap-2 text-xs">
                    {p.authorData?.avatar && (
                      <AuthorAvatar
                        name={p.authorData.name}
                        avatar={p.authorData.avatar}
                        avatarDark={p.authorData.avatarDark}
                        className="h-5 w-5 shrink-0"
                        sizes="20px"
                      />
                    )}
                    <span>{p.authorData?.name || p.data.author}</span>
                    <span className="ml-auto inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {p.readingTime} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
