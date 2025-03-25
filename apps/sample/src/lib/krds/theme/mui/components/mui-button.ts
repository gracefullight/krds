import type { VariantStyleProps } from "@/lib/krds/theme/mui/components/component.types";
import { type Components, buttonClasses } from "@mui/material";
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
      minWidth: "auto",

      [`& .${buttonClasses.startIcon}`]: {
        marginRight: "4px",
      },

      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: "4px",
      },

      variants: [
        // * variant
        {
          props: { variant: "outlined" },
          style: {
            border: 0,
          },
        },
        {
          props: {
            variant: "text",
          },
          style: {
            borderRadius: getRadius("small3"),
            color: getPalette("text.basic"),

            ":hover": {
              backgroundColor: getPalette("button.text-fill-hover"),
            },

            ":active": {
              backgroundColor: getPalette("button.text-fill-pressed"),
            },
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

        // * variant, size
        {
          props: {
            variant: "contained",
            size: "xsmall",
          },
          style: {
            paddingBottom: "4.5px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "4.5px",
          },
        },
        {
          props: {
            variant: "contained",
            size: "small",
          },
          style: {
            paddingBottom: "8.5px",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "8.5px",
          },
        },
        {
          props: {
            variant: "contained",
            size: "medium",
          },
          style: {
            paddingBottom: "11px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "11px",
          },
        },
        {
          props: {
            variant: "contained",
            size: "large",
          },
          style: {
            paddingBottom: "13.5px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "13.5px",
          },
        },
        {
          props: {
            variant: "contained",
            size: "xlarge",
          },
          style: {
            paddingBottom: "17.5px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "17.5px",
          },
        },
        {
          props: {
            variant: "outlined",
            size: "xsmall",
          },
          style: {
            paddingBottom: "4.5px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "4.5px",
          },
        },
        {
          props: {
            variant: "outlined",
            size: "small",
          },
          style: {
            paddingBottom: "8.5px",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "8.5px",
          },
        },
        {
          props: {
            variant: "outlined",
            size: "medium",
          },
          style: {
            paddingBottom: "11px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "11px",
          },
        },
        {
          props: {
            variant: "outlined",
            size: "large",
          },
          style: {
            paddingBottom: "13.5px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "13.5px",
          },
        },
        {
          props: {
            variant: "outlined",
            size: "xlarge",
          },
          style: {
            paddingBottom: "17.5px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "17.5px",
          },
        },
        {
          props: {
            variant: "text",
            size: "xsmall",
          },
          style: {
            paddingBottom: 0,
            paddingLeft: "2px",
            paddingRight: "2px",
            paddingTop: 0,
          },
        },
        {
          props: {
            variant: "text",
            size: "small",
          },
          style: {
            paddingBottom: "0.5px",
            paddingLeft: "2px",
            paddingRight: "2px",
            paddingTop: "0.5px",
          },
        },
        {
          props: {
            variant: "text",
            size: "medium",
          },
          style: {
            paddingBottom: "3px",
            paddingLeft: "2px",
            paddingRight: "2px",
            paddingTop: "3px",
          },
        },
        {
          props: {
            variant: "text",
            size: "large",
          },
          style: {
            paddingBottom: "5.5px",
            paddingLeft: "2px",
            paddingRight: "2px",
            paddingTop: "5.5px",
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
        // * disabled, variant
        {
          props: { disabled: true, variant: "text" },
          style: {
            backgroundColor: "transparent",
            color: getPalette("text.disabled"),
          },
        },

        // * size
        {
          props: { size: "xsmall" },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.xsmall"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.xsmall"),
            },
          }),
        },
        {
          props: { size: "small" },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.small"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.small"),
            },
          }),
        },
        {
          props: { size: "medium" },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.medium"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.medium"),
            },
          }),
        },
        {
          props: { size: "large" },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.large"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.large"),
            },
          }),
        },
        {
          props: { size: "xlarge" },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.large"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.large"),
            },
          }),
        },
      ],
    },
  },
};
