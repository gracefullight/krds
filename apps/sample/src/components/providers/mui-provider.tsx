"use client";

import { createKrdsTheme } from "@gracefullight/krds";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { PropsWithChildren } from "react";

const krdsTheme = createKrdsTheme();

export default function MuiProvider({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={krdsTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
