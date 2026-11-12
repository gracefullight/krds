import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

export const ImageBase = styled("img")({
  maxWidth: "100%",
  display: "block",
});

export const ImageFigure = styled("figure")({
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const ImageCaption = styled("figcaption")(({ theme }) => ({
  ...getTypography("pc.body.small"),
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));
