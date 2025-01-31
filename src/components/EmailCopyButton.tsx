// components/EmailCopyButton.tsx
"use client";

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export function EmailCopyButton({ email }: { email: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard!');
  };

  return (
    <span
      className="text-blue-500 hover:underline font-medium cursor-pointer"
      onClick={handleCopy}
    >
      email
    </span>
  );
}