import { Eyebrow } from "@/components/section";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[1344px] px-6 pb-20 leading-[normal]">
      <section className="px-2 pt-28">
        <Eyebrow no="404">PAGE NOT FOUND</Eyebrow>
        <h1 className="mt-8 text-[clamp(48px,8vw,112px)] font-bold uppercase leading-[.92] tracking-[-.05em]">
          Nothing
          <br />
          here<span className="text-lime-ink">.</span>
        </h1>
        <p className="mt-10 max-w-[620px] text-pretty text-[22px] leading-[1.45] text-body">
          The link might be old, or the page has moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2.5 rounded-lg bg-foreground px-[22px] py-3.5 text-[15px] font-semibold text-background transition-colors hover:bg-lime hover:text-lime-foreground"
        >
          <span aria-hidden>←</span> Back home
        </Link>
      </section>
    </main>
  );
}
