import type { Components } from "@mui/material";
import type {} from "@mui/x-date-pickers/themeAugmentation";

declare module "@mui/x-date-pickers/DatePicker" {}

export const MuiDatePicker: Components["MuiDatePicker"] = {
  defaultProps: {},
};
