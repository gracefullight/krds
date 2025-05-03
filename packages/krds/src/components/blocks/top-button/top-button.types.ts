import type { FabProps } from "@mui/material";

export interface TopButtonStyleProps {
  /**
   * Whether to show label
   * @default false
   */
  showLabel?: boolean;
}

export type TopButtonProps = Pick<FabProps, "children" | "onClick"> &
  TopButtonStyleProps;
