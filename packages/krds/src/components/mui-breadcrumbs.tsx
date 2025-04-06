import type { Components, Theme } from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  breadcrumbsClasses,
  buttonBaseClasses,
  linkClasses,
  svgIconClasses,
} from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Breadcrumbs" {}

export const MuiBreadcrumbs: Components["MuiBreadcrumbs"] = {
  defaultProps: {
    maxItems: 5,
    separator: <NavigateNextIcon />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${breadcrumbsClasses.li} .${svgIconClasses.root}`]: {
        color: getPalette("icon.gray"),
        height: "16px",
        marginRight: "4px",
        marginTop: "-2px",
        verticalAlign: "middle",
        width: "16px",
      },

      [`& .${linkClasses.root}`]: {
        ...getTypography("pc.label.small"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.small"),
        },

        color: getPalette("text.basic"),
        textDecorationColor: getPalette("text.basic"),

        ":hover": {
          color: getPalette("text.basic"),
          textDecorationColor: getPalette("text.basic"),
        },
      },

      [`& .${breadcrumbsClasses.separator}`]: {
        marginLeft: "4px",
        marginRight: "4px",

        [`& .${svgIconClasses.root}`]: {
          color: getPalette("icon.gray"),
          height: "16px",
          width: "16px",
        },
      },

      [`& li:not(.${breadcrumbsClasses.li}) .${buttonBaseClasses.root}`]: {
        backgroundColor: getPalette("action.secondary"),
        color: getPalette("icon.gray"),
        margin: 0,

        [`& .${svgIconClasses.root}`]: {
          height: "16px",
          width: "16px",
        },
      },
    }),
  },
};
