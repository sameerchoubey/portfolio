import { PostList } from "@/components/post-list";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="leading-[normal]">
      <Link
        href="/"
        className="font-mono text-[12px] tracking-[.12em] text-muted-foreground transition-colors hover:text-lime-ink"
      >
        ← HOME
      </Link>
      <h1 className="mt-8 text-[clamp(44px,8vw,80px)] font-bold uppercase leading-[.92] tracking-[-.05em]">
        Writing<span className="text-lime-ink">.</span>
      </h1>
      <div className="mt-12">
        <PostList posts={posts} />
      </div>
    </section>
  );
}
