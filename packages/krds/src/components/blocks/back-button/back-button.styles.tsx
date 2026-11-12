import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, IconButton, styled } from "@mui/material";

export const BackButtonBase = styled(IconButton)({
  width: 44,
  height: 44,
  borderRadius: getRadius("medium2"),
  color: getPalette("icon.gray"),

  "&:hover": {
    backgroundColor: getPalette("surface.gray-subtler"),
  },
});

export const BackButtonRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const BackButtonTitle = styled("span")(({ theme }) => ({
  ...getTypography("pc.heading.small"),
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.heading.small"),
  },
}));
