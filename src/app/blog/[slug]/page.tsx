import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Unknown slugs 404 instead of trying (and failing) to read a missing file.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  let post = await getPost((await params).slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  // Without a frontmatter image, ./opengraph-image.tsx supplies the preview. Leave the
  // images key out entirely in that case: even `images: undefined` overrides the file.
  let images = image ? { images: [{ url: `${DATA.url}${image}` }] } : {};

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      ...images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...images,
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  let post = await getPost((await params).slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/blog/${post.slug}/opengraph-image`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <Link
        href="/blog"
        className="font-mono text-[12px] tracking-[.12em] text-muted-foreground transition-colors hover:text-lime-ink"
      >
        ← ALL WRITING
      </Link>
      <h1 className="mt-8 max-w-[650px] text-balance text-[clamp(32px,5vw,44px)] font-semibold leading-[1.1] tracking-[-.03em]">
        {post.metadata.title}
      </h1>
      <div className="mb-10 mt-4 max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="font-mono text-[12px] uppercase tracking-[.08em] text-dim">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
