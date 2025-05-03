import type { FabProps } from "@mui/material";

type TopButtonType = "basic" | "label";

export interface FabStyledProps extends FabProps {
  // custom style props
  $buttonType?: TopButtonType;
}

export interface TopButtonProps extends Pick<FabProps, "children" | "onClick"> {
  /**
   * Whether to show label
   * @default "basic"
   */
  type?: TopButtonType;
}
