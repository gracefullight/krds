import type { Components, Theme } from "@mui/material";

import { getTypography } from "@gracefullight/krds-tokens";
import { stepLabelClasses } from "@mui/material";

declare module "@mui/material/StepLabel" {}

export const MuiStepLabel: Components["MuiStepLabel"] = {
  defaultProps: {},

  styleOverrides: {
    root: ({ theme }) => ({
      alignItems: "flex-start",

      ...getTypography("pc.body.xsmall"),
      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.body.xsmall"),
      },

      [`& .${stepLabelClasses.label}`]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        [`&.${stepLabelClasses.alternativeLabel}`]: {
          marginTop: 0,
        },
      },

      [`& .${stepLabelClasses.labelContainer}.${stepLabelClasses.alternativeLabel}`]:
        {
          marginTop: "8px",
          textAlign: "left",
        },
    }),
  },
};
