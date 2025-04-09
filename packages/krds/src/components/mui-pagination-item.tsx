import type { Components, Theme } from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Typography,
  paginationItemClasses,
  svgIconClasses,
} from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/PaginationItem" {}

function PreviousButton() {
  return (
    <>
      <KeyboardArrowLeftIcon />
      <Typography variant="body-medium">이전</Typography>
    </>
  );
}

function NextButton() {
  return (
    <>
      <Typography variant="body-medium">다음</Typography>
      <KeyboardArrowRightIcon />
    </>
  );
}

export const MuiPaginationItem: Components["MuiPaginationItem"] = {
  defaultProps: {
    slots: {
      previous: PreviousButton,
      next: NextButton,
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ...getTypography("pc.body.medium"),

      borderRadius: getRadius("medium1"),
      color: getPalette("text.subtle"),
      height: "40px",
      padding: "10px",
      minWidth: "40px",

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.body.medium"),
      },

      [`&. ${svgIconClasses.root}`]: {
        color: getPalette("icon.gray"),
      },

      [`&.${paginationItemClasses.selected}`]: {
        ...getTypography("pc.body.medium-bold"),

        color: getPalette("text.inverse-static"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.body.medium-bold"),
        },
      },

      [`&:not(.${paginationItemClasses.selected})`]: {
        ":hover": {
          backgroundColor: getPalette("action.secondary-hover"),
        },

        ":active": {
          backgroundColor: getPalette("action.secondary-pressed"),
        },
      },

      [`&.${paginationItemClasses.disabled}`]: {
        color: getPalette("text.disabled"),

        [`&. ${svgIconClasses.root}`]: {
          color: getPalette("icon.disabled"),
          height: "20px",
          width: "20px",
        },
      },
    }),
  },
};
