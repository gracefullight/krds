import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, styled } from "@mui/material";

export const MultimediaGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const MultimediaVideo = styled("video")({
  width: "100%",
  borderRadius: getRadius("medium3"),
  backgroundColor: getPalette("background.inverse"),
});

export const MultimediaAudio = styled("audio")({
  width: "100%",
});

export const MultimediaDisclosure = styled("details")({
  borderRadius: getRadius("medium3"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("surface.white"),
});

export const MultimediaSummary = styled("summary")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  cursor: "pointer",
  padding: "1.2rem 1.6rem",
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));

export const MultimediaDisclosureBody = styled(Box)(({ theme }) => ({
  ...getTypography("pc.body.medium"),
  padding: "1.2rem 1.6rem",
  borderTop: `1px solid ${getPalette("border.gray-light")}`,
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));
