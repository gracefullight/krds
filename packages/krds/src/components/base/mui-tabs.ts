import type { Components, Theme } from "@mui/material";

import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { tabClasses, tabsClasses } from "@mui/material";

declare module "@mui/material/Tabs" {
  interface TabsOwnProps {
    type?: "primary" | "secondary";
    fill?: "outlined" | "contained";
  }
}

export const MuiTabs: Components["MuiTabs"] = {
  defaultProps: {
    indicatorColor: "secondary",
    type: "primary",
    fill: "outlined",
  },

  styleOverrides: {
    root: {
      [`& .${tabsClasses.indicator}`]: {
        backgroundColor: getPalette("border.secondary"),
      },
    },
  },

  variants: [
    // * type
    // * primary는 PC로만 제공
    {
      props: { type: "primary" },
      style: {
        [`& .${tabsClasses.indicator}`]: {
          height: "4px",
        },

        [`& .${tabClasses.root}`]: {
          ...getTypography("pc.heading.small"),

          backgroundColor: getPalette("surface.white-subtle"),
          paddingBottom: "13.5px",
          paddingTop: "13.5px",
        },
      },
    },
    {
      props: { type: "secondary" },
      style: ({ theme }) => ({
        [`& .${tabsClasses.indicator}`]: {
          height: "3px",
        },

        [`& .${tabClasses.root}`]: {
          ...getTypography("pc.heading.xsmall"),

          paddingBottom: "7px",
          paddingTop: "7px",

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.heading.xsmall"),

            paddingBottom: "11px",
            paddingTop: "11px",
          },
        },
      }),
    },

    // * fill
    {
      props: { fill: "outlined" },
      style: {
        [`& .${tabClasses.root}.${tabClasses.selected}`]: {
          color: getPalette("text.secondary"),
        },
      },
    },
    {
      props: { fill: "outlined", type: "primary" },
      style: {
        [`& .${tabClasses.root}`]: {
          borderBottom: `2px solid ${getPalette("border.gray")}`,
          paddingLeft: "15px",
          paddingRight: "15px",
        },
      },
    },
    {
      props: { fill: "outlined", type: "secondary" },
      style: ({ theme }) => ({
        [`& .${tabClasses.root}`]: {
          paddingLeft: "7.5px",
          paddingRight: "7.5px",
        },

        [(theme as Theme).breakpoints.down("medium")]: {
          [`& .${tabClasses.root}`]: {
            paddingLeft: "11.5px",
            paddingRight: "11.5px",
          },
        },
      }),
    },
    {
      props: { fill: "contained" },
      style: {
        backgroundColor: getPalette("action.secondary"),

        [`& .${tabsClasses.indicator}`]: {
          display: "none",
        },

        [`& .${tabClasses.root}.${tabClasses.selected}`]: {
          backgroundColor: getPalette("action.secondary"),
          borderColor: getPalette("action.secondary-active"),
          color: getPalette("text.inverse-static"),
        },
      },
    },
    {
      props: { fill: "contained", type: "primary" },
      style: {
        [`& .${tabClasses.root}`]: {
          borderBlock: `1px solid ${getPalette("border.gray")}`,
          paddingLeft: "27px",
          paddingRight: "27px",

          "&:first-of-type": {
            borderBottomLeftRadius: getRadius("medium3"),
            borderTopLeftRadius: getRadius("medium3"),
            borderLeft: `1px solid ${getPalette("border.gray")}`,
          },

          "&:not(:first-of-type)": {
            borderLeft: `1px solid ${getPalette("border.gray")}`,
          },

          "&:last-of-type": {
            borderBottomRightRadius: getRadius("medium3"),
            borderTopRightRadius: getRadius("medium3"),
            borderRight: `1px solid ${getPalette("border.gray")}`,
          },

          [`&.${tabClasses.selected}`]: {
            backgroundColor: getPalette("action.secondary-active"),
            borderBlockColor: getPalette("action.secondary-active"),
            borderLeftColor: getPalette("action.secondary-active"),
            borderRightColor: getPalette("action.secondary-active"),
          },
        },
      },
    },
    {
      props: { fill: "contained", type: "secondary" },
      style: ({ theme }) => ({
        [`& .${tabClasses.root}`]: {
          paddingLeft: "12px",
          paddingRight: "12px",

          [`&.${tabClasses.selected}`]: {
            backgroundColor: getPalette("action.secondary-active"),
            borderRadius: getRadius("medium2"),
          },
        },

        [(theme as Theme).breakpoints.down("medium")]: {
          [`& .${tabClasses.root}`]: {
            paddingLeft: "15.5px",
            paddingRight: "15.5px",
          },
        },
      }),
    },
  ],
};
