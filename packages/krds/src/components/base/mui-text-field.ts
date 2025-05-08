import type { Components, Theme } from "@mui/material";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { formHelperTextClasses, svgIconClasses } from "@mui/material";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }

  interface TextFieldPropsColorOverrides {
    info: false;
    secondary: false;
    success: false;
    warning: false;
  }
}

export const MuiTextField: Components["MuiTextField"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${formHelperTextClasses.root}`]: {
        ...getTypography("pc.label.xsmall"),

        alignItems: "center",
        display: "flex",
        marginLeft: 0,
        marginRight: 0,
        marginTop: "8px",

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.xsmall"),
        },

        [`&.${formHelperTextClasses.focused}`]: {
          color: getPalette("text.information"),
        },

        [`&.${formHelperTextClasses.error}`]: {
          color: getPalette("text.danger"),
        },

        [`& .${svgIconClasses.root}`]: {
          width: "16px",
          height: "16px",
          marginRight: "4px",
          marginTop: "-1px",
        },
      },
    }),
  },
};
