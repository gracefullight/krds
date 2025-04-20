import type { Components } from "@mui/material";

import { stepIconClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";

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
