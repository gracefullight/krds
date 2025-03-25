import type { PropsWithChildren } from "react";

import krdsTheme from "@/lib/krds/theme/mui/mui-krds-theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";

export default function MuiProvider({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={krdsTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
