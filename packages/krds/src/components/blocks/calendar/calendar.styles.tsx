import {
  getColor,
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, IconButton, styled } from "@mui/material";

export const EVENT_COLORS = [
  getColor("point.50"),
  getColor("success.50"),
  getColor("warning.40"),
  getColor("information.50"),
  getColor("secondary.50"),
];

function weekdayColor(tone?: "sun" | "sat"): string {
  if (tone === "sun") return getColor("point.50");
  if (tone === "sat") return getColor("information.50");
  return getPalette("text.subtle");
}

function dayColor(selected: boolean, outside: boolean): string {
  if (selected) return getPalette("text.basic-inverse");
  if (outside) return getPalette("text.disabled");
  return getPalette("text.basic");
}

export const CalendarContainer = styled(Box)({
  display: "inline-flex",
  flexDirection: "column",
  gap: "1.2rem",
  padding: "1.6rem",
  borderRadius: getRadius("large1"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("surface.white"),
});

export const CalendarHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.8rem",
});

export const CalendarSelectGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const CalendarNavButton = styled(IconButton)({
  width: 36,
  height: 36,
  borderRadius: getRadius("max"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("surface.white"),
  color: getPalette("icon.gray"),

  "&:hover": {
    backgroundColor: getPalette("surface.gray-subtler"),
  },
});

export const CalendarSelect = styled("select")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  cursor: "pointer",
  padding: "0.4rem 0.8rem",
  borderRadius: getRadius("medium2"),
  border: `1px solid ${getPalette("input.border")}`,
  backgroundColor: getPalette("input.surface"),
  color: getPalette("text.basic"),

  "&:focus": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: 1,
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));

export const CalendarTable = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
});

export const CalendarWeekday = styled("th", {
  shouldForwardProp: (prop) => prop !== "$tone",
})<{ $tone?: "sun" | "sat" }>(({ theme, $tone }) => ({
  ...getTypography("pc.label.small"),
  fontWeight: 700,
  paddingBottom: "0.8rem",
  textAlign: "center",
  color: weekdayColor($tone),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
  },
}));

export const CalendarDayCell = styled("td")({
  padding: "0.2rem",
  textAlign: "center",
});

export const CalendarDayButton = styled("button", {
  shouldForwardProp: (prop) =>
    prop !== "$selected" && prop !== "$today" && prop !== "$outside",
})<{ $selected: boolean; $today: boolean; $outside: boolean }>(
  ({ theme, $selected, $today, $outside }) => ({
    ...getTypography("pc.body.medium"),
    position: "relative",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    cursor: "pointer",
    borderRadius: getRadius("medium2"),
    border: "none",
    backgroundColor: $selected
      ? getPalette("button.primary-fill")
      : "transparent",
    color: dayColor($selected, $outside),
    fontWeight: $selected || $today ? 700 : 400,
    textDecoration: $today && !$selected ? "underline" : "none",

    "&:hover": {
      backgroundColor: $selected
        ? getPalette("button.primary-fill")
        : getPalette("surface.gray-subtler"),
    },

    "&:focus-visible": {
      outline: `2px solid ${getPalette("border.primary")}`,
      outlineOffset: 2,
    },

    "&:disabled": {
      cursor: "not-allowed",
      color: getPalette("text.disabled"),
      textDecoration: "line-through",
      backgroundColor: "transparent",
    },

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.body.medium"),
    },
  }),
);

export const CalendarEventDots = styled("span")({
  position: "absolute",
  bottom: 4,
  display: "flex",
  gap: 2,
});

export const CalendarEventDot = styled("span", {
  shouldForwardProp: (prop) => prop !== "$color",
})<{ $color: string }>(({ $color }) => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: $color,
}));

export const CalendarLegend = styled("ul")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.2rem",
  margin: 0,
  padding: "1.2rem 0 0",
  listStyle: "none",
  borderTop: `1px solid ${getPalette("border.gray-light")}`,
});

export const CalendarLegendItem = styled("li")(({ theme }) => ({
  ...getTypography("pc.label.small"),
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
  },
}));

export const CalendarLegendDot = styled("span", {
  shouldForwardProp: (prop) => prop !== "$color",
})<{ $color: string }>(({ $color }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: $color,
}));
