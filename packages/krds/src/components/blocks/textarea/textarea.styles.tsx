import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

import type { TextareaStyleProps } from "#/components/blocks/textarea/textarea.types";

const getHelperColor = (disabled?: boolean, error?: boolean) => {
  if (disabled) return getPalette("text.disabled-on");
  if (error) return getPalette("text.danger");
  return getPalette("text.subtle");
};

export const TextareaWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
});

export const TextareaLabel = styled("label")<TextareaStyleProps>(
  ({ disabled }) => ({
    ...getTypography("pc.label.medium"),
    color: disabled
      ? getPalette("text.disabled-on")
      : getPalette("text.bolder"),
    display: "block",
  }),
);

export const TextareaRequiredMark = styled("span")({
  color: getPalette("text.danger"),
  marginLeft: "2px",
});

export const TextareaField = styled("textarea")<TextareaStyleProps>(
  ({ error, disabled, theme }) => ({
    ...getTypography("pc.label.medium"),
    backgroundColor: disabled
      ? getPalette("input.surface-disabled")
      : getPalette("input.surface"),
    border: "none",
    borderRadius: getRadius("medium2"),
    boxSizing: "border-box",
    color: disabled ? getPalette("text.disabled-on") : getPalette("text.basic"),
    cursor: disabled ? "not-allowed" : "auto",
    fontFamily: "inherit",
    outline: `1px solid ${
      error ? getPalette("input.border-error") : getPalette("input.border")
    }`,
    outlineWidth: error ? "2px" : "1px",
    padding: "11px 16px",
    resize: "vertical",
    width: "100%",

    "::placeholder": {
      color: getPalette("text.disabled"),
      opacity: 1,
    },

    ":focus": {
      outlineColor: error
        ? getPalette("input.border-error")
        : getPalette("input.border-active"),
      outlineWidth: "2px",
    },

    ":focus-visible": {
      outlineColor: error
        ? getPalette("input.border-error")
        : getPalette("input.border-active"),
      outlineWidth: "2px",
    },

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.label.medium"),
    },
  }),
);

export const TextareaFooter = styled("div")({
  alignItems: "flex-start",
  display: "flex",
  justifyContent: "space-between",
  gap: "8px",
});

export const TextareaHelperText = styled("span")<TextareaStyleProps>(
  ({ error, disabled, theme }) => ({
    ...getTypography("pc.label.xsmall"),
    color: getHelperColor(disabled, error),
    flex: 1,

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.label.xsmall"),
    },
  }),
);

export const TextareaCounter = styled("span")<TextareaStyleProps>(
  ({ error, theme }) => ({
    ...getTypography("pc.label.xsmall"),
    color: error ? getPalette("text.danger") : getPalette("text.subtle"),
    flexShrink: 0,
    whiteSpace: "nowrap",

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.label.xsmall"),
    },
  }),
);
