import type { Components } from "@mui/material";

import { stepConnectorClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";

declare module "@mui/material/StepConnector" {}

export const MuiStepConnector: Components["MuiStepConnector"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      left: "calc(-100% + 10px)",
      right: "calc(100% - 10px)",
      top: "10px",

      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          backgroundColor: getPalette("element.gray"),
        },
      },

      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          backgroundColor: getPalette("element.gray"),
        },
      },

      [`& .${stepConnectorClasses.line}`]: {
        height: "1.6px",
        border: 0,
        backgroundColor: getPalette("element.disabled-light"),
      },
    },
  },
};
