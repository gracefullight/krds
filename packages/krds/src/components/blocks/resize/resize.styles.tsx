import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Button, styled } from "@mui/material";

export const ResizeTrigger = styled(Button)(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  color: getPalette("text.basic"),
  padding: "0.4rem 0.8rem",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));
