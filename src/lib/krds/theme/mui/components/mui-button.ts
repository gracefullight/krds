import type { Components } from "@mui/material";
import type { Theme } from "@mui/material/styles";

import { getPalette } from "@/lib/krds/design-tokens/palettes";
import { getRadius } from "@/lib/krds/design-tokens/radius";
import { getTypography } from "@/lib/krds/design-tokens/typography";

// ? https://mui.com/material-ui/api/button/
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;

    success: false;
    error: false;
    info: false;
    warning: false;
  }

  interface ButtonPropsSizeOverrides {
    xlarge: true;
    xsmall: true;
  }
}

export const MuiButton: Components["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    variant: "contained",
  },

  styleOverrides: {
    root: {
      borderRadius: getRadius("medium3"),

      variants: [
        // * variant
        {
          props: { variant: "outlined" },
          style: {
            border: 0,
          },
        },

        // * variant, color
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: getPalette("button.primary-fill"),
            color: getPalette("text.inverse-static"),

            ":hover": {
              backgroundColor: getPalette("button.primary-fill-hover"),
            },

            ":active": {
              backgroundColor: getPalette("button.primary-fill-pressed"),
            },
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            backgroundColor: getPalette("button.secondary-fill"),
            color: getPalette("text.primary"),
            outline: `1px solid ${getPalette("button.secondary-border")}`,

            ":hover": {
              backgroundColor: getPalette("button.secondary-fill-hover"),
            },

            ":active": {
              backgroundColor: getPalette("button.secondary-fill-pressed"),
            },
          },
        },
        {
          props: { variant: "outlined", color: "tertiary" },
          style: {
            backgroundColor: getPalette("button.tertiary-fill"),
            color: getPalette("text.basic"),
            outline: `1px solid ${getPalette("button.tertiary-border")}`,

            ":hover": {
              backgroundColor: getPalette("button.tertiary-fill-hover"),
            },

            ":active": {
              backgroundColor: getPalette("button.tertiary-fill-pressed"),
            },
          },
        },

        // * disabled
        {
          props: { disabled: true },
          style: {
            backgroundColor: getPalette("button.disabled-fill"),
            color: getPalette("text.disabled-on"),
          },
        },

        // * size
        {
          props: { size: "xsmall" },
          style: ({ theme }: { theme: Theme }) => ({
            ...getTypography("pc.label.xsmall"),

            paddingBottom: "4.5px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "4.5px",

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.xsmall"),
            },
          }),
        },
        {
          props: { size: "small" },
          style: ({ theme }: { theme: Theme }) => ({
            ...getTypography("pc.label.small"),

            paddingBottom: "8.5px",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "8.5px",

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.small"),
            },
          }),
        },
        {
          props: { size: "medium" },
          style: ({ theme }: { theme: Theme }) => ({
            ...getTypography("pc.label.medium"),

            paddingBottom: "11px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "11px",

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.medium"),
            },
          }),
        },
        {
          props: { size: "large" },
          style: ({ theme }: { theme: Theme }) => ({
            ...getTypography("pc.label.large"),

            paddingBottom: "13.5px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "13.5px",

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.large"),
            },
          }),
        },
        {
          props: { size: "xlarge" },
          style: ({ theme }: { theme: Theme }) => ({
            ...getTypography("pc.label.large"),

            paddingBottom: "17.5px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "17.5px",

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.large"),
            },
          }),
        },
      ],
    },
  },
};
