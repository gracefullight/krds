import type { Components, Theme } from "@mui/material";
import { stepLabelClasses } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

declare module "@mui/material/StepLabel" {}

export const MuiStepLabel: Components["MuiStepLabel"] = {
  defaultProps: {},

  styleOverrides: {
    root: ({ theme }) => ({
      alignItems: "flex-start",

      ...responsiveTypography("body.xsmall")({ theme: theme as Theme }),

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
