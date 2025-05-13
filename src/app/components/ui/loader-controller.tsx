'use client';

import { useLinkStatus } from "next/link";
import { useEffect } from "react";

export default function LoaderController() {
  const { pending } = useLinkStatus();

  const open = () => {
    document.getElementById('loader')?.classList.remove('hidden');
    document.getElementById('loader')?.classList.add('visible');
  };

  const close = () => {
    document.getElementById('loader')?.classList.remove('visible');
    document.getElementById('loader')?.classList.add('hidden');
  };

  useEffect(() => {
    if (pending) {
      open();
      setTimeout(close, 2000);
    } else {
      setTimeout(close, 400);
    }
  }, [pending]);

  return null;
}