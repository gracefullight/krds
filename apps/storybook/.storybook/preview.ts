import type { Preview } from "@storybook/react";

import { createKrdsTheme } from "@gracefullight/krds";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import "@gracefullight/krds/reset.css";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: createKrdsTheme(),
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
