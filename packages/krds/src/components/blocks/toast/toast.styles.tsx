import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

export const ToastContainer = styled("output")(({ theme }) => ({
  ...getTypography("pc.body.medium"),
  display: "block",
  padding: "1.2rem 2.4rem",
  borderRadius: getRadius("max"),
  backgroundColor: getPalette("background.inverse"),
  color: getPalette("text.basic-inverse"),
  textAlign: "center",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  maxWidth: "calc(100vw - 3.2rem)",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));
