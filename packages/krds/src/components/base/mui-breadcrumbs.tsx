import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import { ArrowRight } from "@gracefullight/krds-icons";
import { getPalette } from "@gracefullight/krds-tokens";
import {
  breadcrumbsClasses,
  buttonBaseClasses,
  linkClasses,
  svgIconClasses,
} from "@mui/material";

declare module "@mui/material/Breadcrumbs" {}

export const MuiBreadcrumbs: Components["MuiBreadcrumbs"] = {
  defaultProps: {
    maxItems: 5,
    separator: <ArrowRight size={16} />,
  },

  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${breadcrumbsClasses.li} svg`]: {
        color: getPalette("icon.gray"),
        height: "16px",
        marginRight: "4px",
        marginTop: "-2px",
        verticalAlign: "middle",
        width: "16px",
      },

      [`& .${linkClasses.root}`]: {
        ...responsiveTypography("label.small")({ theme: theme as Theme }),

        color: getPalette("text.basic"),
        textDecorationColor: getPalette("text.basic"),

        ":hover": {
          color: getPalette("text.basic"),
          textDecorationColor: getPalette("text.basic"),
        },
      },

      [`& .${breadcrumbsClasses.separator}`]: {
        color: getPalette("icon.gray"),
        margin: "3px 4px 0 4px",

        "& svg": {
          height: "16px",
          width: "16px",
        },
      },

      [`& li:not(.${breadcrumbsClasses.li}) .${buttonBaseClasses.root}`]: {
        backgroundColor: getPalette("action.secondary"),
        color: getPalette("icon.gray"),
        margin: "3px 0 0 0",

        [`& .${svgIconClasses.root}`]: {
          height: "16px",
          width: "16px",
        },
      },
    }),
  },
};
