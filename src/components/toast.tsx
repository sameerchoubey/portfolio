import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface ToastProps {
  // Bump on every show: remounting restarts the entrance and the countdown line.
  id: number;
  open: boolean;
  label: string;
  message: string;
  duration: number;
}

// Bottom-centre notice in the header's style: blurred bar, mono label, lime countdown line.
// The wrapper stays mounted as a live region so screen readers announce each message.
export function Toast({ id, open, label, message, duration }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-20 flex justify-center px-6 leading-[normal]"
    >
      {id > 0 && (
        <div
          key={id}
          className={cn(
            "relative flex animate-toast-in items-center gap-3 overflow-hidden rounded-[14px] border bg-hdr py-3 pl-3 pr-5 backdrop-blur-[14px] transition-[opacity,transform] duration-200 motion-reduce:animate-none motion-reduce:transform-none",
            open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}
        >
          <span
            aria-hidden
            className="grid size-8 shrink-0 place-items-center rounded-full bg-lime text-lime-foreground"
          >
            <CheckIcon className="size-4" strokeWidth={2.4} />
          </span>
          <span>
            <span className="block font-mono text-[11px] tracking-[.12em] text-muted-foreground">
              {label}
            </span>
            <span className="mt-0.5 block text-[15px] font-medium tracking-[-.01em] text-foreground">
              {message}
            </span>
          </span>
          <span
            aria-hidden
            className="absolute bottom-0 left-0 h-0.5 w-full origin-left animate-toast-countdown bg-lime shadow-[0_0_12px_#c8c800]"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      )}
    </div>
  );
}
