import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { ogSize, renderOgImage } from "@/lib/og";
import { formatMonthYear } from "@/lib/utils";

export const alt = `Writing by ${DATA.name}`;
export const size = ogSize;
export const contentType = "image/png";

// Next 14 renders this route on demand (it can't prerender image routes under [slug]),
// so next.config.mjs ships the fonts and posts it reads.
export default async function Image({ params }: { params: { slug: string } }) {
  // Look the slug up instead of building a file path from it: unknown or crafted slugs 404.
  const post = (await getBlogPosts()).find((p) => p.slug === params.slug);
  if (!post) return new Response("Not found", { status: 404 });

  const { metadata } = post;
  return renderOgImage({
    eyebrow: "WRITING",
    title: metadata.title,
    footer: `${formatMonthYear(metadata.publishedAt)} · ${DATA.name}`.toUpperCase(),
  });
}
