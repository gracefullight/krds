import { getPalette, getShadow } from "@gracefullight/krds-tokens";
import type { Components } from "@mui/material";
import { sliderClasses } from "@mui/material";

export const MuiSlider: Components["MuiSlider"] = {
  styleOverrides: {
    root: {
      color: getPalette("element.primary"),
      height: 8,
      padding: "13px 0",

      [`& .${sliderClasses.rail}`]: {
        height: 8,
        borderRadius: 4,
        backgroundColor: getPalette("surface.gray-subtle"),
        opacity: 1,
      },

      [`& .${sliderClasses.track}`]: {
        height: 8,
        borderRadius: 4,
        border: "none",
      },

      [`& .${sliderClasses.thumb}`]: {
        width: 24,
        height: 24,
        backgroundColor: getPalette("action.white"),
        border: `2px solid ${getPalette("element.primary")}`,
        boxShadow: getShadow(1),

        "&:hover, &.Mui-active, &.Mui-focusVisible": {
          boxShadow: getShadow(2),
        },

        "&::before": {
          display: "none",
        },
      },

      "&.Mui-disabled": {
        color: getPalette("element.disabled-dark"),

        [`& .${sliderClasses.thumb}`]: {
          borderColor: getPalette("element.disabled-dark"),
          backgroundColor: getPalette("surface.disabled"),
        },
      },
    },
  },
};
