"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect } from "react";

function DataThemeSync() {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const active = resolvedTheme || theme || "light";
    document.documentElement.setAttribute("data-theme", active);
  }, [theme, resolvedTheme]);

  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="typehindi-theme"
    >
      <DataThemeSync />
      {children}
    </NextThemesProvider>
  );
}
