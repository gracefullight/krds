import type { CSSProperties } from "react";

import {
  BREAKPOINTS,
  getColor,
  getTypography,
} from "@gracefullight/krds-tokens";
import { createTheme } from "@mui/material/styles";
import { toMerged } from "es-toolkit";
import * as components from "#/components/base";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;

    xsmall: true;
    small: true;
    medium: true;
    large: true;
    xlarge: true;
    xxlarge: true;
  }

  interface ColorSchemeOverrides {
    high: true;
    dark: false;
  }

  interface Palette {
    point: Palette["primary"];
  }

  interface PaletteOptions {
    point?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    high?: string;
  }

  interface SimplePaletteColorOptions {
    high?: string;
  }

  interface TypographyVariants {
    "display-large": CSSProperties;
    "display-medium": CSSProperties;
    "display-small": CSSProperties;

    "heading-xlarge": CSSProperties;
    "heading-large": CSSProperties;
    "heading-medium": CSSProperties;
    "heading-small": CSSProperties;
    "heading-xsmall": CSSProperties;
    "heading-xxsmall": CSSProperties;

    "body-large": CSSProperties;
    "body-large-bold": CSSProperties;
    "body-medium": CSSProperties;
    "body-medium-bold": CSSProperties;
    "body-small": CSSProperties;
    "body-small-bold": CSSProperties;
    "body-xsmall": CSSProperties;
    "body-xsmall-bold": CSSProperties;
  }

  interface TypographyVariantsOptions {
    "display-large"?: CSSProperties;
    "display-medium"?: CSSProperties;
    "display-small"?: CSSProperties;

    "heading-xlarge"?: CSSProperties;
    "heading-large"?: CSSProperties;
    "heading-medium"?: CSSProperties;
    "heading-small"?: CSSProperties;
    "heading-xsmall"?: CSSProperties;
    "heading-xxsmall"?: CSSProperties;

    "body-large"?: CSSProperties;
    "body-large-bold"?: CSSProperties;
    "body-medium"?: CSSProperties;
    "body-medium-bold"?: CSSProperties;
    "body-small"?: CSSProperties;
    "body-small-bold"?: CSSProperties;
    "body-xsmall"?: CSSProperties;
    "body-xsmall-bold"?: CSSProperties;
  }
}

type ThemeOptions = Parameters<typeof createTheme>[0];

// ? https://www.figma.com/design/o8jepiinwX0H9a68rej55p/
export function createKrdsTheme(options: ThemeOptions = {}) {
  const krdsTheme = createTheme(
    toMerged(
      {
        breakpoints: {
          values: BREAKPOINTS,
        },

        palette: {
          primary: {
            main: getColor("primary.50"),
            high: getColor("primary.50", "high-contrast"),
          },

          secondary: {
            main: getColor("secondary.70"),
            high: getColor("secondary.60", "high-contrast"),
          },

          error: {
            main: getColor("danger.50"),
          },

          warning: {
            main: getColor("warning.30"),
          },

          success: {
            main: getColor("success.50"),
          },

          info: {
            main: getColor("information.60"),
          },

          point: {
            main: getColor("point.50"),
          },
        },

        typography: {
          // ? https://mui.com/material-ui/customization/typography/#html-font-size
          htmlFontSize: 10,

          h1: undefined,
          h2: undefined,
          h3: undefined,
          h4: undefined,
          h5: undefined,
          h6: undefined,
          subtitle1: undefined,
          subtitle2: undefined,
          body1: undefined,
          body2: undefined,
          button: undefined,
          overline: undefined,
        },
        components,
      } satisfies ThemeOptions,
      options,
    ),
  );

  const TYPOGRAPHY_VARIANTS = [
    "display.large",
    "display.medium",
    "display.small",
    "heading.xlarge",
    "heading.large",
    "heading.medium",
    "heading.small",
    "heading.xsmall",
    "heading.xxsmall",
    "body.large",
    "body.large-bold",
    "body.medium",
    "body.medium-bold",
    "body.small",
    "body.small-bold",
    "body.xsmall",
    "body.xsmall-bold",
  ] as const;

  krdsTheme.typography = toMerged(
    krdsTheme.typography,
    Object.fromEntries(
      TYPOGRAPHY_VARIANTS.map((variant) => [
        variant.replace(".", "-"),
        {
          ...getTypography(
            `pc.${variant}` as Parameters<typeof getTypography>[0],
          ),
          [krdsTheme.breakpoints.down("medium")]: {
            ...getTypography(
              `mobile.${variant}` as Parameters<typeof getTypography>[0],
            ),
          },
        },
      ]),
    ),
  );

  return krdsTheme;
}
