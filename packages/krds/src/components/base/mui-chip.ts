import type { Components, Theme } from "@mui/material";

import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { chipClasses } from "@mui/material";

declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    large: true;
  }
}

export const MuiChip: Components["MuiChip"] = {
  defaultProps: {
    clickable: true,
    size: "medium",
  },

  styleOverrides: {
    root: {
      backgroundColor: getPalette("action.white"),
      borderRadius: getRadius("max"),
      color: getPalette("text.basic"),
      height: "auto",
      outline: `1px solid ${getPalette("border.gray-light")}`,

      [`&.${chipClasses.deletable}`]: {
        ":hover": {
          outline: "none",
          backgroundColor: getPalette("action.secondary-hover"),
        },

        ":active": {
          outline: "none",
          backgroundColor: getPalette("action.secondary-pressed"),
        },
      },

      [`& .${chipClasses.deleteIcon}`]: {
        color: getPalette("icon.gray-fill"),
        marginLeft: "2px",
        marginRight: 0,
        width: "16px",
        height: "16px",
      },

      [`& .${chipClasses.label}`]: {
        padding: 0,
      },
    },
  },

  variants: [
    // * size
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        ...getTypography("pc.label.xsmall"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.xsmall"),
        },

        padding: "2px 8px",
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        ...getTypography("pc.label.small"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.small"),
        },

        padding: "4.5px 10px",
      }),
    },
    {
      props: { size: "large" },
      style: ({ theme }) => ({
        ...getTypography("pc.label.medium"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.medium"),
        },

        padding: "7px 12px",
      }),
    },
    // * clickable
    {
      props: { clickable: true },
      style: {
        ":hover": {
          outline: "none",
          backgroundColor: getPalette("action.secondary-hover"),
        },

        ":active": {
          outline: "none",
          backgroundColor: getPalette("action.secondary-pressed"),
        },
      },
    },
  ],
};
