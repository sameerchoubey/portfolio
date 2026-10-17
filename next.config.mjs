/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Per-post preview images render on demand and read these from disk,
  // which file tracing can't detect on its own.
  outputFileTracingIncludes: {
    "/blog/[slug]/opengraph-image": [
      "./node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf",
      "./node_modules/geist/dist/fonts/geist-mono/GeistMono-Medium.ttf",
      "./content/*.mdx",
    ],
  },
};

export default nextConfig;
