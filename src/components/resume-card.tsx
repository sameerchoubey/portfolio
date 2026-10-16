interface ResumeCardProps {
  title: string;
  href?: string | null;
  subtitle: string;
  period: string;
  description: string;
  stack: readonly string[];
}

// One experience row: period | company, role, blurb | stack.
export const ResumeCard = ({
  title,
  href,
  subtitle,
  period,
  description,
  stack,
}: ResumeCardProps) => {
  return (
    <div className="grid gap-3 border-t py-7 md:grid-cols-[140px_minmax(0,1fr)_auto] md:items-start md:gap-8">
      <span className="whitespace-nowrap font-mono text-[12px] text-muted-foreground md:pt-1.5">
        {period}
      </span>
      <div>
        <h3 className="text-[22px] font-semibold tracking-[-.02em]">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lime-ink"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <div className="mt-1 text-[14px] text-muted-foreground">{subtitle}</div>
        <p className="mt-3.5 max-w-[560px] text-pretty text-[15px] leading-[1.65] text-body">
          {description}
        </p>
      </div>
      <span className="whitespace-nowrap font-mono text-[11px] leading-[1.8] text-dim md:pt-1.5 md:text-right">
        {stack.join(" · ")}
      </span>
    </div>
  );
};
