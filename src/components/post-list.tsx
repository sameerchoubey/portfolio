import type { getBlogPosts } from "@/data/blog";
import { formatMonthYear } from "@/lib/utils";
import Link from "next/link";

type Post = Awaited<ReturnType<typeof getBlogPosts>>[number];

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 border-t py-[22px] text-foreground transition-colors hover:text-lime-ink"
        >
          <span>
            <span className="block text-[22px] font-medium tracking-[-.02em]">
              {post.metadata.title}
            </span>
            <span className="mt-1 block text-[14px] text-muted-foreground">
              {post.metadata.summary}
            </span>
          </span>
          <span className="whitespace-nowrap font-mono text-[12px] text-dim">
            {formatMonthYear(post.metadata.publishedAt)}
          </span>
        </Link>
      ))}
      <div className="border-t" />
    </div>
  );
}
