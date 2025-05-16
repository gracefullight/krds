import type { Components, Theme } from "@mui/material";

import { ArrowLeft, ArrowRight } from "@gracefullight/krds-icons";
import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Typography, paginationItemClasses } from "@mui/material";

declare module "@mui/material/PaginationItem" {}

function PreviousButton() {
  return (
    <>
      <ArrowLeft size={20} />
      <Typography variant="body-medium">이전</Typography>
    </>
  );
}

function NextButton() {
  return (
    <>
      <Typography variant="body-medium">다음</Typography>
      <ArrowRight size={20} />
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

      "& svg": {
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

        "& svg": {
          color: getPalette("icon.disabled"),
          height: "20px",
          width: "20px",
        },
      },

      [`&.${paginationItemClasses.ellipsis}`]: {
        userSelect: "none",
      },
    }),
  },
};
