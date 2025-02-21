"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import useMounted from "@/hooks/useMounted";

function ThemeToggleProvider({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof NextThemesProvider>) {
  const mounted = useMounted();

  if (!mounted) return null;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeToggleProvider;
