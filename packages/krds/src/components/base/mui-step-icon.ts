import type { Components } from "@mui/material";

import { getPalette, getRadius } from "@gracefullight/krds-tokens";
import { stepIconClasses } from "@mui/material";

declare module "@mui/material/StepIcon" {}

export const MuiStepIcon: Components["MuiStepIcon"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      backgroundColor: getPalette("element.gray-light"),
      borderRadius: getRadius("max"),
      color: getPalette("element.disabled-light"),
      height: "20px",
      width: "20px",
      zIndex: 1,

      [`&.${stepIconClasses.active}`]: {
        backgroundColor: getPalette("element.primary"),
      },

      [`&.${stepIconClasses.completed}`]: {
        backgroundColor: getPalette("element.inverse-static"),
        color: getPalette("element.gray"),
      },

      [`& .${stepIconClasses.text}`]: {
        display: "none",
      },
    },
  },
};
