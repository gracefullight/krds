import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, Button, IconButton, styled } from "@mui/material";

export const FileUploadGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const FileUploadLabel = styled("span")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  fontWeight: 700,
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));

export const FileUploadDescription = styled("p")(({ theme }) => ({
  ...getTypography("pc.body.small"),
  margin: 0,
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));

export const FileUploadHelper = styled("p")(({ theme }) => ({
  ...getTypography("pc.body.xsmall"),
  margin: 0,
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.xsmall"),
  },
}));

export const FileUploadDropZone = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$dragOver",
})<{ $dragOver: boolean }>(({ $dragOver }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.2rem",
  padding: "2.4rem",
  borderRadius: getRadius("medium3"),
  border: `1px dashed ${
    $dragOver ? getPalette("border.primary") : getPalette("border.gray")
  }`,
  backgroundColor: $dragOver
    ? getPalette("surface.primary-subtler")
    : getPalette("surface.gray-subtler"),
  transition: "border-color 0.2s, background-color 0.2s",
}));

export const FileUploadButton = styled(Button)({
  borderColor: getPalette("button.tertiary-border"),
  color: getPalette("text.basic"),
});

export const FileUploadCounter = styled("span")(({ theme }) => ({
  ...getTypography("pc.label.small"),
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
  },
}));

export const FileUploadList = styled("ul")({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const FileUploadItem = styled("li")(({ theme }) => ({
  ...getTypography("pc.body.small"),
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  padding: "0.8rem 1.2rem",
  borderRadius: getRadius("medium2"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("surface.white"),
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));

export const FileUploadItemName = styled("span")({
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const FileUploadItemSize = styled("span")(({ theme }) => ({
  ...getTypography("pc.label.small"),
  flexShrink: 0,
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
  },
}));

export const FileUploadRemove = styled(IconButton)({
  width: 28,
  height: 28,
  flexShrink: 0,
  color: getPalette("icon.gray"),
});

export const FileUploadError = styled("p")(({ theme }) => ({
  ...getTypography("pc.body.small"),
  margin: 0,
  color: getPalette("text.danger"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));
