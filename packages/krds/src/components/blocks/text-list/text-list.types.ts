import type { BoxProps } from "@mui/material";
import type { ReactNode } from "react";

export type TextListVariant = "ordered" | "unordered" | "none";

export type TextListMarker =
  | "disc"
  | "circle"
  | "square"
  | "dash"
  | "decimal"
  | "decimal-leading-zero"
  | "lower-alpha"
  | "upper-alpha"
  | "lower-roman"
  | "upper-roman"
  | "none";

export interface TextListItem {
  id: string;
  content: ReactNode;
}

export interface TextListProps extends Omit<BoxProps, "children"> {
  /**
   * @default "unordered"
   */
  variant?: TextListVariant;
  items: TextListItem[];
  marker?: TextListMarker;
}
