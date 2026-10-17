import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  return [
    { url: DATA.url, lastModified: new Date() },
    { url: `${DATA.url}/blog` },
    ...posts.map((post) => ({
      url: `${DATA.url}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    })),
  ];
}
