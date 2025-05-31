import type { Components, Theme } from "@mui/material";

import { getPalette, getRadius } from "@gracefullight/krds-tokens";
import {
  dialogActionsClasses,
  dialogClasses,
  dialogContentClasses,
} from "@mui/material";
import { pickersLayoutClasses } from "@mui/x-date-pickers";

declare module "@mui/material/Dialog" {}

export const MuiDialog: Components["MuiDialog"] = {
  defaultProps: {
    maxWidth: "medium",
    fullWidth: true,
  },

  styleOverrides: {
    root: {},

    paper: ({ theme }) => ({
      borderRadius: getRadius("xlarge2"),
      boxShadow: "none",
      margin: "4px",
      padding: "24px",
      outline: `1px solid ${getPalette("border.gray")}`,
      width: "calc(100% - 16px)",

      [(theme as Theme).breakpoints.down("medium")]: {
        padding: "20px",

        // * 모바일 date input calendar
        [`&:has(.${dialogContentClasses.root} .${pickersLayoutClasses.root})`]:
          {
            maxWidth: "inherit",
            padding: 0,
          },
      },

      [`& .${dialogActionsClasses.root}`]: {
        padding: "0 16px 16px 16px",

        [(theme as Theme).breakpoints.down("medium")]: {
          paddingLeft: "4px",
          paddingRight: "4px",
        },
      },
    }),
  },

  variants: [
    {
      props: { maxWidth: "xsmall" },
      style: ({ theme }) => ({
        [`& .${dialogClasses.paper}`]: {
          maxWidth: "400px",

          [(theme as Theme).breakpoints.down("medium")]: {
            maxWidth: "320px",
          },
        },
      }),
    },
    {
      props: { maxWidth: "small" },
      style: ({ theme }) => ({
        [`& .${dialogClasses.paper}`]: {
          maxWidth: "400px",

          [(theme as Theme).breakpoints.down("medium")]: {
            maxWidth: "320px",
          },
        },

        [`& .${dialogActionsClasses.root}`]: {
          paddingBottom: 0,
        },
      }),
    },
    {
      props: { maxWidth: "medium" },
      style: ({ theme }) => ({
        [`& .${dialogClasses.paper}`]: {
          maxWidth: "560px",

          [(theme as Theme).breakpoints.down("medium")]: {
            maxWidth: "320px",
          },
        },
      }),
    },
    {
      props: { maxWidth: "large" },
      style: ({ theme }) => ({
        [`& .${dialogClasses.paper}`]: {
          maxWidth: "760px",

          [(theme as Theme).breakpoints.down("medium")]: {
            maxWidth: "320px",
          },
        },
      }),
    },
    {
      props: { maxWidth: "xlarge" },
      style: ({ theme }) => ({
        [`& .${dialogClasses.paper}`]: {
          maxWidth: "760px",

          [(theme as Theme).breakpoints.down("medium")]: {
            maxWidth: "320px",
          },
        },
      }),
    },
    {
      props: { maxWidth: "xxlarge" },
      style: ({ theme }) => ({
        [`& .${dialogClasses.paper}`]: {
          maxWidth: "760px",

          [(theme as Theme).breakpoints.down("medium")]: {
            maxWidth: "320px",
          },
        },
      }),
    },
  ],
};
