import { getBlogPosts } from "@/data/blog";

// Writing shows on the home page only while the newest post is under two years old,
// so it disappears when it goes stale and comes back as soon as a new post is published.
const WRITING_FRESH_MS = 2 * 365 * 24 * 60 * 60 * 1000;

export interface SiteSection {
  id: string;
  label: string;
  eyebrow: string;
  no: string;
  inNav: boolean;
}

// Numbered home-page sections, in order. The header nav and the "01 // ABOUT" eyebrows both read this.
export async function getSections(): Promise<SiteSection[]> {
  const [newest] = await getBlogPosts();
  const writingIsFresh =
    !!newest && Date.now() - new Date(newest.metadata.publishedAt).getTime() < WRITING_FRESH_MS;

  const sections: { id: string; label: string; eyebrow?: string; inNav?: boolean }[] = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work", eyebrow: "Selected work" },
    { id: "toolbox", label: "Toolbox" },
    ...(writingIsFresh ? [{ id: "writing", label: "Writing" }] : []),
    { id: "contact", label: "Contact", inNav: false },
  ];

  return sections.map((section, i) => ({
    id: section.id,
    label: section.label,
    eyebrow: (section.eyebrow ?? section.label).toUpperCase(),
    no: String(i + 1).padStart(2, "0"),
    inNav: section.inNav ?? true,
  }));
}
