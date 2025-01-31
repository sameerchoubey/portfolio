// components/ui/toast.tsx
"use client";

import { Toaster, toast } from 'react-hot-toast';

export const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        className: '!bg-green-100 !text-green-800 dark:!bg-green-900 dark:!text-green-100',
        duration: 2000,
        style: {
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '14px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      }}
    />
  );
};