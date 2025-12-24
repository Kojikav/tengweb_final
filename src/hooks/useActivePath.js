"use client";

import { usePathname } from "next/navigation";

export default function useActivePath() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return { pathname, isActive };
}