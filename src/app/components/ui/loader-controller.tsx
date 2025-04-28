'use client';

import { useLinkStatus } from "next/link";
import { useEffect } from "react";

export default function LoaderController() {
  const { pending } = useLinkStatus();

  useEffect(() => {
    if (pending) {
      document.getElementById('loader')?.classList.remove('hidden');
      document.getElementById('loader')?.classList.add('visible');
    } else {
      setTimeout(() => {
        document.getElementById('loader')?.classList.remove('visible');
        document.getElementById('loader')?.classList.add('hidden');
      }, 300);
    }
  }, [pending]);

  return null;
}