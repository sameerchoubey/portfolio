"use client";

import { scrollToSection } from "@/lib/scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type ScrollLinkProps = ComponentProps<typeof Link> & { href: string };

// Link to "/#section" (or "/"). On the home page it eases to the section
// instead of jumping; on other pages it navigates normally.
export function ScrollLink({ href, onClick, ...props }: ScrollLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (pathname !== "/" || e.defaultPrevented) return;
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const id = href.split("#")[1] ?? null;
        if (scrollToSection(id)) e.preventDefault();
      }}
      {...props}
    />
  );
}
