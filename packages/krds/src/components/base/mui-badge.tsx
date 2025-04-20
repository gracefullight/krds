import type { Components, Theme } from "@mui/material";
import type { VariantStyleProps } from "#/components/base/component.types";

import { badgeClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    tertiary: true;
    point: true;
    danger: true;

    default: false;
    error: false;
  }

  interface BadgePropsVariantOverrides {
    text: true;
  }

  interface BadgeOwnProps {
    size?: "medium" | "large";
    fill?: "contained" | "outlined" | "light";
  }
}

export const MuiBadge: Components["MuiBadge"] = {
  defaultProps: {
    color: "primary",
    max: 999,
    size: "medium",
    fill: "contained",
  },

  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${badgeClasses.badge}`]: {
        ...getTypography("pc.label.small"),

        color: getPalette("text.inverse-static"),
      },

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.label.small"),
      },

      variants: [
        // * color
        {
          props: { color: "primary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.primary"),
            },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.secondary"),
            },
          },
        },
        {
          props: { color: "tertiary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.gray"),
            },
          },
        },
        {
          props: { color: "point" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.point"),
            },
          },
        },
        {
          props: { color: "danger" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.danger"),
            },
          },
        },
        {
          props: { color: "warning" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.warning"),
            },
          },
        },
        {
          props: { color: "success" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.success"),
            },
          },
        },
        {
          props: { color: "info" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.information"),
            },
          },
        },

        // * variant
        {
          props: { variant: "dot" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              borderRadius: getRadius("max"),
              minWidth: "6px",
              height: "6px",
            },
          },
        },
        {
          props: { variant: "standard" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              borderRadius: getRadius("max"),
              paddingLeft: "8px",
              paddingRight: "8px",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              borderRadius: getRadius("small2"),
              paddingLeft: "8px",
              paddingRight: "8px",
              transform: "none",
            },
          },
        },
        // * disabled
        {
          props: { className: "disabled" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.disabled-light"),
              color: getPalette("text.disabled-on"),
            },
          },
        },

        // * variant, size
        {
          props: { variant: "text", size: "medium" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              paddingBottom: "0.5px",
              paddingTop: "0.5px",
            },
          },
        },
        {
          props: { variant: "text", size: "large" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${badgeClasses.badge}`]: {
              ...getTypography("pc.label.medium"),

              [theme.breakpoints.down("medium")]: {
                ...getTypography("mobile.label.medium"),
              },

              paddingBottom: "3px",
              paddingTop: "3px",
            },
          }),
        },

        // * variant, fill
        {
          props: { variant: "text", fill: "outlined" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: "transparent",
            },
          },
        },
        // * variant, fill, color
        {
          props: { variant: "text", fill: "outlined", color: "primary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.primary"),
              outline: `1px solid ${getPalette("border.primary")}`,
            },
          },
        },
        {
          props: { variant: "text", fill: "outlined", color: "secondary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.secondary"),
              outline: `1px solid ${getPalette("border.secondary")}`,
            },
          },
        },
        {
          props: { variant: "text", fill: "outlined", color: "tertiary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.subtle"),
              outline: `1px solid ${getPalette("element.gray-dark")}`,
            },
          },
        },
        {
          props: { variant: "text", fill: "outlined", color: "point" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.point"),
              outline: `1px solid ${getPalette("border.point")}`,
            },
          },
        },
        {
          props: { variant: "text", fill: "outlined", color: "danger" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.danger"),
              outline: `1px solid ${getPalette("border.danger")}`,
            },
          },
        },
        {
          props: { variant: "text", fill: "outlined", color: "warning" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.warning"),
              outline: `1px solid ${getPalette("border.warning")}`,
            },
          },
        },
        {
          props: { variant: "text", fill: "outlined", color: "success" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.success"),
              outline: `1px solid ${getPalette("border.success")}`,
            },
          },
        },
        {
          props: { variant: "text", fill: "outlined", color: "info" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.information"),
              outline: `1px solid ${getPalette("border.information")}`,
            },
          },
        },
        {
          props: { variant: "text", fill: "light", color: "primary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.primary-light"),
              color: getPalette("text.primary"),
            },
          },
        },
        {
          props: { variant: "text", fill: "light", color: "secondary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.secondary-lighter"),
              color: getPalette("text.secondary"),
            },
          },
        },
        {
          props: { variant: "text", fill: "light", color: "tertiary" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.gray-light"),
              color: getPalette("text.subtle"),
            },
          },
        },
        {
          props: { variant: "text", fill: "light", color: "point" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.point-lighter"),
              color: getPalette("text.point"),
            },
          },
        },
        {
          props: { variant: "text", fill: "light", color: "danger" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.danger-lighter"),
              color: getPalette("text.danger"),
            },
          },
        },
        {
          props: { variant: "text", fill: "light", color: "warning" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.warning-lighter"),
              color: getPalette("text.warning"),
            },
          },
        },
        {
          props: { variant: "text", fill: "light", color: "success" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.success-lighter"),
              color: getPalette("text.success"),
            },
          },
        },
        {
          props: { variant: "text", fill: "light", color: "info" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              backgroundColor: getPalette("element.information-lighter"),
              color: getPalette("text.information"),
            },
          },
        },
        // * variant, fill, disabled
        {
          props: { variant: "text", fill: "outlined", className: "disabled" },
          style: {
            [`& .${badgeClasses.badge}`]: {
              color: getPalette("text.disabled"),
              outline: `1px solid ${getPalette("element.disabled-dark")}`,
            },
          },
        },
      ],
    }),
  },
};
