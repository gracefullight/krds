import {
  getPalette,
  getRadius,
  getShadow,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, Button, IconButton, styled } from "@mui/material";

export const SnackbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "1.2rem",
  padding: "1.6rem",
  borderRadius: getRadius("large1"),
  backgroundColor: getPalette("background.inverse"),
  color: getPalette("text.basic-inverse"),
  boxShadow: getShadow(3),
  width: "min(44rem, calc(100vw - 3.2rem))",

  [theme.breakpoints.down("medium")]: {
    width: "calc(100vw - 3.2rem)",
  },
}));

export const SnackbarIcon = styled("span")({
  flexShrink: 0,
  marginTop: 2,
  display: "inline-flex",
});

export const SnackbarContent = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const SnackbarTitle = styled("div")(({ theme }) => ({
  ...getTypography("pc.body.medium"),
  fontWeight: 700,

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));

export const SnackbarBody = styled("div")(({ theme }) => ({
  ...getTypography("pc.body.medium"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));

export const SnackbarAction = styled(Button)({
  flexShrink: 0,
  color: getPalette("text.basic-inverse"),
  textDecoration: "underline",
  textUnderlineOffset: 2,
  fontWeight: 700,
  minWidth: 0,
  padding: "0.4rem 0.8rem",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

export const SnackbarClose = styled(IconButton)({
  flexShrink: 0,
  width: 32,
  height: 32,
  color: getPalette("text.basic-inverse"),

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
