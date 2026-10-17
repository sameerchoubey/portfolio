"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { ScrollLink } from "@/components/scroll-link";
import type { SiteSection } from "@/lib/sections";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
  sections: SiteSection[];
  resumeUrl: string;
}

const iconButton =
  "grid size-9 shrink-0 place-items-center rounded-full border bg-transparent text-foreground transition-colors duration-200 hover:border-lime-ink";

export default function Navbar({ sections, resumeUrl }: NavbarProps) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = sections.filter((section) => section.inNav);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.scrollingElement ?? document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const pct = max > 0 ? (root.scrollTop / max) * 100 : 0;
      setProgress(Math.round(Math.min(100, Math.max(0, pct)) * 10) / 10);
      setScrolled(root.scrollTop > 40);

      // The section whose top has passed 40% of the viewport is the one being read.
      const marker = window.innerHeight * 0.4;
      let current: SiteSection | null = null;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= marker) current = section;
      }
      setActive(current?.inNav ? current.id : null);
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
  }, [sections, pathname]);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = () => setMenuOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close();
    };
    const onResize = () => desktop.matches && close();

    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const pct = Math.round(progress);

  return (
    <>
      <div aria-hidden className="h-[98px]" />
      <header
        ref={headerRef}
        className={cn(
          "pointer-events-none fixed inset-x-0 z-10 flex justify-center px-6 leading-[normal] transition-[top] [transition-duration:400ms]",
          scrolled ? "top-[14px]" : "top-5"
        )}
      >
        <div className="pointer-events-auto relative w-full max-w-[1296px] overflow-hidden rounded-[14px] border bg-hdr backdrop-blur-[14px]">
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

          <div className="flex items-center justify-between gap-4 px-4 py-[19px] sm:px-[22px]">
            <ScrollLink
              href="/"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-[17px] font-bold tracking-[-.03em] text-foreground sm:text-[19px]"
            >
              sameer choubey<span className="text-lime-ink">✱</span>
            </ScrollLink>

            <nav
              aria-label="Sections"
              className="hidden min-w-0 flex-1 items-center justify-center gap-4 font-mono text-[13px] tracking-[.03em] md:flex lg:gap-7"
            >
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  href={`/#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "inline-flex gap-1.5 whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground",
                    active === item.id && "text-foreground"
                  )}
                >
                  <span className="hidden text-lime-ink lg:inline">{item.no}</span>
                  {item.label}
                </ScrollLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ModeToggle />
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center whitespace-nowrap rounded-md bg-lime px-4 py-[9px] text-[14px] font-semibold text-lime-foreground transition-colors hover:bg-lime-hover md:inline-flex"
              >
                Résumé
              </a>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen((open) => !open)}
                className={cn(iconButton, "md:hidden")}
              >
                {menuOpen ? (
                  <XIcon aria-hidden className="size-[15px]" />
                ) : (
                  <MenuIcon aria-hidden className="size-[15px]" />
                )}
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav id="mobile-nav" aria-label="Sections" className="border-t px-4 pb-5 pt-2 md:hidden">
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      href={`/#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active === item.id ? "true" : undefined}
                      className={cn(
                        "flex items-baseline gap-3 py-3 font-mono text-[15px] tracking-[.03em] text-muted-foreground",
                        active === item.id && "text-foreground"
                      )}
                    >
                      <span className="text-[12px] text-lime-ink">{item.no}</span>
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex justify-center rounded-md bg-lime px-4 py-3 text-[14px] font-semibold text-lime-foreground transition-colors hover:bg-lime-hover"
              >
                Résumé
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
