import Image from "next/image";

interface Props {
  no: string;
  title: string;
  href: string;
  year: string;
  kind: string;
  status: string;
  tagline: string;
  description: string;
  tags: readonly string[];
  image: string;
}

export function ProjectCard({
  no,
  title,
  href,
  year,
  kind,
  status,
  tagline,
  description,
  tags,
  image,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col overflow-hidden rounded-2xl border bg-card text-foreground transition-colors duration-200 hover:border-lime-ink"
    >
      <div className="relative aspect-[16/10] border-b bg-slot">
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 1344px) 636px, (min-width: 860px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex justify-between gap-4 font-mono text-[12px] text-muted-foreground">
          <span>
            <span className="text-lime-ink">{no}</span> / {year} · {kind}
          </span>
          <span className="text-lime-ink">{status}</span>
        </div>
        <h3 className="mt-[18px] text-[30px] font-semibold tracking-[-.03em]">{title}</h3>
        <div className="mt-1.5 text-[18px] text-body">{tagline}</div>
        <p className="mt-3.5 text-pretty text-[15px] leading-[1.65] text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-4 border-t pt-5">
            <span className="font-mono text-[11px] text-dim">{tags.join(" · ")}</span>
            <span className="whitespace-nowrap text-[14px] font-semibold text-lime-ink">
              Open →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
