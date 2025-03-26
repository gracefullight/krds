"use client";

import type { PropsWithChildren } from "react";

import { createKrdsTheme } from "@gracefullight/krds";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";

const krdsTheme = createKrdsTheme();

export default function MuiProvider({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={krdsTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
