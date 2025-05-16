import type { Components, Theme } from "@mui/material";

import { ArrowDown } from "@gracefullight/krds-icons";
import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { accordionClasses, accordionSummaryClasses } from "@mui/material";

declare module "@mui/material/Accordion" {}

export const MuiAccordion: Components["MuiAccordion"] = {
  defaultProps: {
    className: "size-medium type-default",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: getPalette("text.basic"),
      backgroundColor: getPalette("action.secondary"),
      borderRadius: getRadius("large2"),
      boxShadow: "none",

      [`&.${accordionClasses.expanded}`]: {
        backgroundColor: getPalette("action.secondary-hover"),
      },

      ":hover": {
        backgroundColor: getPalette("action.secondary-hover"),
      },

      ":active": {
        backgroundColor: getPalette("action.secondary-pressed"),
      },

      "&.size-medium": {
        [`& .${accordionSummaryClasses.root}`]: {
          minHeight: "unset",
          paddingInline: "16px",

          ...getTypography("pc.heading.xsmall"),
          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.heading.xsmall"),
          },

          [`& .${accordionSummaryClasses.content}`]: {
            margin: "20px 0",

            [(theme as Theme).breakpoints.down("medium")]: {
              margin: "12px 0",
            },
          },
        },

        [`& .${accordionClasses.region}`]: {
          padding: "0 16px 20px 16px",

          [(theme as Theme).breakpoints.down("medium")]: {
            padding: "0 16px 12px 16px",
          },
        },
      },

      "&.size-large": {
        [`& .${accordionSummaryClasses.root}`]: {
          minHeight: "unset",
          paddingInline: "24px",

          ...getTypography("pc.heading.small"),
          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.heading.small"),
          },

          [`& .${accordionSummaryClasses.content}`]: {
            margin: "24px 0",

            [(theme as Theme).breakpoints.down("medium")]: {
              margin: "16px 0",
            },
          },
        },

        [`& .${accordionClasses.region}`]: {
          padding: "0 24px 24px 24px",

          [(theme as Theme).breakpoints.down("medium")]: {
            padding: "0 16px 16px 16px",
          },
        },
      },
    }),
  },
};

export const MuiAccordionSummary: Components["MuiAccordionSummary"] = {
  defaultProps: {
    expandIcon: <ArrowDown size={24} />,
  },
  styleOverrides: {
    root: {
      color: getPalette("text.basic"),

      [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
        color: getPalette("icon.gray"),
        marginLeft: "16px",
      },
    },
  },
};

export const MuiAccordionDetails: Components["MuiAccordionDetails"] = {
  styleOverrides: {
    root: {
      backgroundColor: getPalette("surface.white"),
      padding: 0,
    },
  },
};
