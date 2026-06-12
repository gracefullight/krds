import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import { ArrowDown } from "@gracefullight/krds-icons";
import { getPalette, getRadius } from "@gracefullight/krds-tokens";
import { accordionClasses, accordionSummaryClasses } from "@mui/material";
import { krdsAccordionClasses } from "#/constants/classes";

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

      [`&.${krdsAccordionClasses.sizeMedium}`]: {
        [`& .${accordionSummaryClasses.root}`]: {
          minHeight: "unset",
          paddingInline: "16px",

          ...responsiveTypography("heading.xsmall")({ theme: theme as Theme }),

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

      [`&.${krdsAccordionClasses.sizeLarge}`]: {
        [`& .${accordionSummaryClasses.root}`]: {
          minHeight: "unset",
          paddingInline: "24px",

          ...responsiveTypography("heading.small")({ theme: theme as Theme }),

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
