import { DATA } from "@/data/resume";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `${DATA.name}: Frontend by instinct.`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  const [job] = DATA.work;
  return renderOgImage({
    eyebrow: DATA.location.toUpperCase(),
    title: "Frontend by instinct",
    footer: `${job.title} · ${job.company}`.toUpperCase(),
  });
}
