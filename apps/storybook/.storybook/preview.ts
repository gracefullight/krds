import type { Decorator, Preview } from "@storybook/react";
import { createElement } from "react";

import { createKrdsTheme } from "@gracefullight/krds";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import "@gracefullight/krds/reset.css";
import "./krds-tw-entry.css";

const muiDecorator = withThemeFromJSXProvider({
  themes: {
    light: createKrdsTheme(),
  },
  defaultTheme: "light",
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
});

const groupDecorator: Decorator = (Story, ctx) => {
  const title = ctx.title ?? "";
  if (title.startsWith("KRDS-TW/")) {
    return createElement(
      "div",
      { "data-krds-scope": "tw", className: "krds-tw" },
      createElement(Story),
    );
  }
  return muiDecorator(Story, ctx);
};

const preview: Preview = {
  decorators: [groupDecorator],
};

export default preview;
