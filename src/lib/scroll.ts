// Clearance for the fixed header when landing on a section.
const HEADER_OFFSET = 96;
const FLASH_MS = 900;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let frame = 0;

function flashEyebrow(section: HTMLElement) {
  const eyebrow = section.querySelector<HTMLElement>("[data-eyebrow]");
  if (!eyebrow) return;
  eyebrow.style.color = "var(--accent-ink)";
  window.setTimeout(() => {
    eyebrow.style.color = "";
  }, FLASH_MS);
}

/**
 * Eased scroll to the element with `id` (or the page top when `id` is null),
 * then flash the section's eyebrow. Returns false if the target isn't on the page.
 */
export function scrollToSection(id: string | null) {
  const target = id ? document.getElementById(id) : null;
  if (id && !target) return false;

  const root = document.scrollingElement ?? document.documentElement;
  const max = root.scrollHeight - root.clientHeight;
  const start = root.scrollTop;
  const end = target
    ? Math.min(max, Math.max(0, target.getBoundingClientRect().top + start - HEADER_OFFSET))
    : 0;
  const distance = end - start;

  cancelAnimationFrame(frame);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.scrollTop = end;
    if (target) flashEyebrow(target);
    return true;
  }

  // Let the reader take over mid-animation.
  const stop = () => cancelAnimationFrame(frame);
  window.addEventListener("wheel", stop, { once: true, passive: true });
  window.addEventListener("touchstart", stop, { once: true, passive: true });

  const duration = Math.min(1400, 500 + Math.abs(distance) * 0.35);
  const t0 = performance.now();
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / duration);
    root.scrollTop = start + distance * easeInOutCubic(p);
    if (p < 1) {
      frame = requestAnimationFrame(step);
    } else {
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      if (target) flashEyebrow(target);
    }
  };
  frame = requestAnimationFrame(step);
  return true;
}
