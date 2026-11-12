import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";

export const DisclosureBase = styled(Accordion)({
  boxShadow: "none",
  backgroundColor: "transparent",
  margin: 0,

  "&::before": {
    display: "none",
  },

  "&.Mui-expanded": {
    margin: 0,
  },
});

export const DisclosureSummary = styled(AccordionSummary)(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  padding: 0,
  minHeight: 0,
  color: getPalette("text.primary"),
  gap: "0.4rem",

  "& .MuiAccordionSummary-content": {
    margin: 0,
    flexGrow: 0,
  },

  "& .MuiAccordionSummary-expandIconWrapper": {
    color: getPalette("icon.gray"),
    transform: "rotate(0deg)",

    "&.Mui-expanded": {
      transform: "rotate(180deg)",
    },
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));

export const DisclosureDetails = styled(AccordionDetails)(({ theme }) => ({
  ...getTypography("pc.body.medium"),
  padding: "0.8rem 0 0",
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));
