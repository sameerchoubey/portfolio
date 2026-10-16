"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { ScrollLink } from "@/components/scroll-link";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NAV = ["About", "Experience", "Work", "Toolbox", "Writing"];

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.scrollingElement ?? document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const pct = max > 0 ? (root.scrollTop / max) * 100 : 0;
      setProgress(Math.round(Math.min(100, Math.max(0, pct)) * 10) / 10);
      setScrolled(root.scrollTop > 40);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const pct = Math.round(progress);

  return (
    <>
      <div aria-hidden className="h-[98px]" />
      <header
        className={cn(
          "pointer-events-none fixed inset-x-0 z-10 flex justify-center px-6 leading-[normal] transition-[top] [transition-duration:400ms]",
          scrolled ? "top-[14px]" : "top-5"
        )}
      >
        <div className="pointer-events-auto relative flex w-full max-w-[1296px] items-center justify-between gap-4 overflow-hidden rounded-[14px] border bg-hdr px-4 py-[19px] backdrop-blur-[14px] sm:px-[22px]">
          {/* Scroll progress */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 h-0.5 bg-lime shadow-[0_0_12px_#c8c800] transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
          {scrolled && (
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[5px] whitespace-nowrap rounded-[3px] bg-background px-[5px] py-px font-mono text-[10px] tracking-[.06em] text-lime-ink transition-[left,transform] duration-150 ease-linear"
              style={{ left: `${progress}%`, transform: `translateX(-${pct}%)` }}
            >
              {pct}%
            </div>
          )}

          <ScrollLink
            href="/"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-[17px] font-bold tracking-[-.03em] text-foreground sm:text-[19px]"
          >
            sameer choubey<span className="text-lime-ink">✱</span>
          </ScrollLink>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 font-mono text-[13px] tracking-[.03em] md:flex lg:gap-7">
            {NAV.map((label, i) => (
              <ScrollLink
                key={label}
                href={`/#${label.toLowerCase()}`}
                className="inline-flex gap-1.5 whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="hidden text-lime-ink lg:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <a
              href={DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center whitespace-nowrap rounded-md bg-lime px-3 py-[9px] text-[14px] font-semibold text-lime-foreground transition-colors hover:bg-lime-hover sm:px-4"
            >
              Résumé
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
