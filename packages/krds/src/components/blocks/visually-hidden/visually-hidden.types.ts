import type { BoxProps } from "@mui/material";
import type { ElementType } from "react";

export interface VisuallyHiddenProps extends BoxProps {
  /**
   * 렌더링할 HTML 요소
   * @default "span"
   */
  component?: ElementType;
}
