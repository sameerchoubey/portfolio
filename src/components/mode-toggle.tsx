"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-9 shrink-0 place-items-center rounded-full border bg-transparent text-foreground transition-colors duration-200 hover:border-lime-ink"
    >
      {/* Sun in dark, moon in light. Toggled in CSS so the server render matches. */}
      <SunIcon aria-hidden className="hidden size-[15px] dark:block" />
      <MoonIcon aria-hidden className="size-[15px] dark:hidden" />
    </button>
  );
}
