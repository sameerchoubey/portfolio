import { cn } from "@/lib/utils";

interface EyebrowProps {
  no: string;
  children: React.ReactNode;
  className?: string;
}

// "01 // ABOUT". data-eyebrow is the hook scrollToSection flashes after landing.
export function Eyebrow({ no, children, className }: EyebrowProps) {
  return (
    <div
      data-eyebrow
      className={cn(
        "font-mono text-[12px] tracking-[.12em] text-muted-foreground transition-colors [transition-duration:250ms]",
        className
      )}
    >
      <span className="text-lime-ink">{no}</span>
      {" // "}
      {children}
    </div>
  );
}

interface SectionProps {
  id: string;
  no: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

// Numbered section: eyebrow in the left 3fr column, content in the right 9fr.
export function Section({ id, no, label, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-2 pt-28 md:grid md:grid-cols-[minmax(200px,3fr)_minmax(0,9fr)] md:gap-12",
        className
      )}
    >
      <Eyebrow no={no}>{label}</Eyebrow>
      <div className="mt-6 md:mt-0">{children}</div>
    </section>
  );
}
