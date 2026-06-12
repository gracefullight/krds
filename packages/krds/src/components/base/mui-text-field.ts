import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import { getPalette } from "@gracefullight/krds-tokens";
import { formHelperTextClasses } from "@mui/material";

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
        alignItems: "center",
        display: "flex",
        marginLeft: 0,
        marginRight: 0,
        marginTop: "8px",

        ...responsiveTypography("label.xsmall")({ theme: theme as Theme }),

        [`&.${formHelperTextClasses.focused}`]: {
          color: getPalette("text.information"),
        },

        [`&.${formHelperTextClasses.error}`]: {
          color: getPalette("text.danger"),
        },

        "& svg": {
          width: "16px",
          height: "16px",
          marginRight: "4px",
          marginTop: "-1px",
        },
      },
    }),
  },
};
