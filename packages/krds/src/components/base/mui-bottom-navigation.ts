import type { Components } from "@mui/material";

import {
  bottomNavigationActionClasses,
  svgIconClasses,
  touchRippleClasses,
} from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/BottomNavigation" {}
declare module "@mui/material/BottomNavigationAction" {}

export const MuiBottomNavigation: Components["MuiBottomNavigation"] = {
  defaultProps: {
    showLabels: true,
  },
  styleOverrides: {
    root: {
      backgroundColor: getPalette("action.secondary"),
      maxHeight: "72px",
      height: "auto",
    },
  },
};

export const MuiBottomNavigationAction: Components["MuiBottomNavigationAction"] =
  {
    styleOverrides: {
      root: {
        position: "relative",
        color: getPalette("text.subtle"),
        // * 모든 상태에서 일관된 패딩 유지
        padding: "12px 0 9px 0",

        // * 의사 요소로 border 효과 구현
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: getPalette("border.secondary-light"),
          // * 항상 표시
          opacity: 1,
        },

        [`& .${svgIconClasses.root}`]: {
          color: getPalette("icon.gray-light"),
          marginBottom: "4px",
          width: "24px",
          height: "24px",
        },

        "&:hover": {
          backgroundColor: getPalette("action.secondary-pressed"),
        },

        [`&.${bottomNavigationActionClasses.selected}`]: {
          backgroundColor: getPalette("action.secondary-selected"),
          color: getPalette("text.secondary"),

          // * 선택시 의사 요소 두께와 색상 변경
          "&::before": {
            height: "3px",
            backgroundColor: getPalette("border.secondary"),
          },

          [`& .${svgIconClasses.root}`]: {
            color: getPalette("icon.secondary"),
          },

          "&:hover": {
            backgroundColor: getPalette("action.secondary-pressed"),
          },
        },

        [`& .${bottomNavigationActionClasses.label}`]: {
          ...getTypography("mobile.body.small-bold"),

          [`&.${bottomNavigationActionClasses.selected}`]: {
            ...getTypography("mobile.body.small-bold"),
          },
        },

        [`& .${touchRippleClasses.root}`]: {
          display: "none",
        },
      },
    },
  };
