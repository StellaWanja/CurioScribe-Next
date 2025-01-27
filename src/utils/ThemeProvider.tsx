import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function ThemeProvider({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider;
