import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  // next-themes writes data-theme="dark" | "light" on <html>
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        // shadcn semantic names, mapped onto the theme tokens in globals.css
        border: "var(--line)",
        input: "var(--line2)",
        ring: "var(--accent-ink)",
        background: "var(--bg)",
        foreground: "var(--fg)",
        primary: {
          DEFAULT: "var(--fg)",
          foreground: "var(--bg)",
        },
        secondary: {
          DEFAULT: "var(--slot)",
          foreground: "var(--fg)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "var(--slot)",
          foreground: "var(--muted)",
        },
        accent: {
          DEFAULT: "var(--slot)",
          foreground: "var(--fg)",
        },
        popover: {
          DEFAULT: "var(--card)",
          foreground: "var(--fg)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--fg)",
        },
        // tokens with no shadcn equivalent
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line2)",
        },
        dim: "var(--dim)",
        body: "var(--body)",
        slot: "var(--slot)",
        hdr: "var(--hdr)",
        lime: {
          DEFAULT: "#c8c800",
          hover: "#e3e37a",
          // text on a lime fill, same in both themes
          foreground: "#1c1c1c",
          // lime as text on the page: lime in dark, olive in light
          ink: "var(--accent-ink)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Blog post prose follows the theme tokens, so no prose-invert is needed.
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--body)",
            "--tw-prose-headings": "var(--fg)",
            "--tw-prose-lead": "var(--body)",
            "--tw-prose-links": "var(--accent-ink)",
            "--tw-prose-bold": "var(--fg)",
            "--tw-prose-counters": "var(--muted)",
            "--tw-prose-bullets": "var(--line2)",
            "--tw-prose-hr": "var(--line)",
            "--tw-prose-quotes": "var(--fg)",
            "--tw-prose-quote-borders": "var(--line2)",
            "--tw-prose-captions": "var(--muted)",
            "--tw-prose-code": "var(--fg)",
            "--tw-prose-pre-code": "var(--fg)",
            "--tw-prose-pre-bg": "var(--card)",
            "--tw-prose-th-borders": "var(--line2)",
            "--tw-prose-td-borders": "var(--line)",
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
