"use client";

import { Toast } from "@/components/toast";
import { playCopyChime, unlockAudio } from "@/lib/sound";
import { useEffect, useRef, useState } from "react";

const TOAST_MS = 2400;

// The contact email. A click copies it (with a chime and a toast) instead of opening a
// mail client; modified clicks, and browsers without the Clipboard API, still follow mailto.
export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [toastId, setToastId] = useState(0);
  const [open, setOpen] = useState(false);
  const hideTimer = useRef<number>();

  useEffect(() => () => window.clearTimeout(hideTimer.current), []);

  const showToast = () => {
    window.clearTimeout(hideTimer.current);
    setToastId((id) => id + 1);
    setOpen(true);
    hideTimer.current = window.setTimeout(() => setOpen(false), TOAST_MS);
  };

  return (
    <>
      <a
        href={`mailto:${email}`}
        title="Copy email address"
        className={className}
        onClick={(e) => {
          if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          if (!navigator.clipboard) return;
          e.preventDefault();
          unlockAudio();
          navigator.clipboard.writeText(email).then(
            () => {
              playCopyChime();
              showToast();
            },
            () => {
              window.location.href = `mailto:${email}`;
            }
          );
        }}
      >
        {email}
      </a>
      <Toast
        id={toastId}
        open={open}
        label="COPIED TO CLIPBOARD"
        message={email}
        duration={TOAST_MS}
      />
    </>
  );
}
