import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { badgeClasses } from "@mui/material";

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
    }),
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
      style: ({ theme }) => ({
        [`& .${badgeClasses.badge}`]: {
          ...responsiveTypography("label.medium")({ theme: theme as Theme }),

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
    ...(
      [
        {
          color: "primary",
          text: "text.primary",
          border: "border.primary",
          bg: "element.primary-light",
        },
        {
          color: "secondary",
          text: "text.secondary",
          border: "border.secondary",
          bg: "element.secondary-lighter",
        },
        {
          color: "tertiary",
          text: "text.subtle",
          border: "element.gray-dark",
          bg: "element.gray-light",
        },
        {
          color: "point",
          text: "text.point",
          border: "border.point",
          bg: "element.point-lighter",
        },
        {
          color: "danger",
          text: "text.danger",
          border: "border.danger",
          bg: "element.danger-lighter",
        },
        {
          color: "warning",
          text: "text.warning",
          border: "border.warning",
          bg: "element.warning-lighter",
        },
        {
          color: "success",
          text: "text.success",
          border: "border.success",
          bg: "element.success-lighter",
        },
        {
          color: "info",
          text: "text.information",
          border: "border.information",
          bg: "element.information-lighter",
        },
      ] as const
    ).flatMap((conf) => [
      {
        props: {
          variant: "text" as const,
          fill: "outlined" as const,
          color: conf.color,
        },
        style: {
          [`& .${badgeClasses.badge}`]: {
            color: getPalette(conf.text as Parameters<typeof getPalette>[0]),
            outline: `1px solid ${getPalette(conf.border as Parameters<typeof getPalette>[0])}`,
          },
        },
      },
      {
        props: {
          variant: "text" as const,
          fill: "light" as const,
          color: conf.color,
        },
        style: {
          [`& .${badgeClasses.badge}`]: {
            backgroundColor: getPalette(
              conf.bg as Parameters<typeof getPalette>[0],
            ),
            color: getPalette(conf.text as Parameters<typeof getPalette>[0]),
          },
        },
      },
    ]),
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
};
