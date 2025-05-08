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

  krdsTheme.typography = toMerged(krdsTheme.typography, {
    "display-large": {
      ...getTypography("pc.display.large"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.display.large"),
      },
    },
    "display-medium": {
      ...getTypography("pc.display.medium"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.display.medium"),
      },
    },
    "display-small": {
      ...getTypography("pc.display.small"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.display.small"),
      },
    },

    "heading-xlarge": {
      ...getTypography("pc.heading.xlarge"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.xlarge"),
      },
    },
    "heading-large": {
      ...getTypography("pc.heading.large"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.large"),
      },
    },
    "heading-medium": {
      ...getTypography("pc.heading.medium"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.medium"),
      },
    },
    "heading-small": {
      ...getTypography("pc.heading.small"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.small"),
      },
    },
    "heading-xsmall": {
      ...getTypography("pc.heading.xsmall"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.xsmall"),
      },
    },
    "heading-xxsmall": {
      ...getTypography("pc.heading.xxsmall"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.xxsmall"),
      },
    },

    "body-large": {
      ...getTypography("pc.body.large"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.body.large"),
      },
    },
    "body-large-bold": {
      ...getTypography("pc.body.large-bold"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.body.large-bold"),
      },
    },
    "body-medium": {
      ...getTypography("pc.body.medium"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.body.medium"),
      },
    },
    "body-medium-bold": {
      ...getTypography("pc.body.medium-bold"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.body.medium-bold"),
      },
    },
    "body-small": {
      ...getTypography("pc.body.small"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.body.small"),
      },
    },
    "body-small-bold": {
      ...getTypography("pc.body.small-bold"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.body.small-bold"),
      },
    },
    "body-xsmall": {
      ...getTypography("pc.body.xsmall"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.body.xsmall"),
      },
    },
    "body-xsmall-bold": {
      ...getTypography("pc.body.xsmall-bold"),

      [krdsTheme.breakpoints.down("medium")]: {
        ...getTypography("mobile.body.xsmall-bold"),
      },
    },
  });

  return krdsTheme;
}
