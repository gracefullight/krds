import type { SxProps, Theme } from "@mui/material";

export type CriticalAlertsSeverity = "emergency" | "safe" | "info";

export interface CriticalAlertsProps {
  severity: CriticalAlertsSeverity;
  content: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}
