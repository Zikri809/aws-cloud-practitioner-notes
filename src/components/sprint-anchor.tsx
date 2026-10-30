"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SprintAnchor() {
  const pathname = usePathname();
  useEffect(() => {
    // Long streamed assessment pages can arrive after the browser's first anchor jump.
    const frame = requestAnimationFrame(() => {
      const hash = window.location.hash.slice(1);
      if (hash) document.getElementById(hash)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return null;
}
