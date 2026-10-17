import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Satori can't read woff2, so use the .ttf files the geist package also ships.
const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts");

const LIME = "#c8c800";

// The wordmark's ✱, drawn as strokes so it never depends on a font having the glyph.
export function Asterisk({ size, color = LIME }: { size: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
    >
      <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M18.36 5.64 5.64 18.36" />
    </svg>
  );
}

interface OgImageProps {
  eyebrow: string;
  title: string;
  footer: string;
}

// 1200×630 social preview in the site's style: wordmark, big uppercase title, mono footer.
export async function renderOgImage({ eyebrow, title, footer }: OgImageProps) {
  const [bold, mono] = await Promise.all([
    readFile(join(fontDir, "geist-sans/Geist-Bold.ttf")),
    readFile(join(fontDir, "geist-mono/GeistMono-Medium.ttf")),
  ]);

  const words = title.toUpperCase().split(" ");
  const titleSize = title.length > 20 ? 88 : 120;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px 76px",
          background: "#1c1c1c",
          color: "#f2efe8",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            sameer choubey
            <Asterisk size={24} />
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 22,
              letterSpacing: 2.6,
              color: "#a89f94",
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* One flex item per word so the lime period stays attached to the last word when it wraps. */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: titleSize * 0.2,
            maxWidth: 1040,
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: titleSize * -0.05,
          }}
        >
          {words.map((word, i) => (
            <div key={i} style={{ display: "flex" }}>
              {word}
              {i === words.length - 1 && <span style={{ color: LIME }}>.</span>}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: 22,
            letterSpacing: 1.8,
            color: "#8b8b8b",
          }}
        >
          {footer}
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: ogSize.width,
            height: 10,
            background: LIME,
          }}
        />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: bold, weight: 700, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 500, style: "normal" },
      ],
    }
  );
}
