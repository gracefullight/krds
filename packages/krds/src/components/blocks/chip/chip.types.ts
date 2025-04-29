import type { SxProps, Theme } from "@mui/material";
import type { ReactElement, ReactNode } from "react";

/**
 * Chip size type
 */
export type ChipSize = "small" | "medium" | "large";

/**
 * Chip component properties
 */
export interface ChipProps {
  /**
   * Chip size
   * @default medium
   */
  size?: ChipSize;
  /**
   * Selection state
   * @default false
   */
  selected?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Chip content
   */
  children?: ReactNode;
  /**
   * Whether to apply multiple selection chip style
   * @default false
   */
  multiple?: boolean;
  /**
   * Click event handler
   */
  onClick?: () => void;
  /**
   * Value (used in ChipGroup)
   */
  value?: string;
}

/**
 * Chip style component properties
 */
export interface ChipStyleProps {
  selected?: boolean;
  multiple?: boolean;
  size?: ChipSize;
}

/**
 * Chip group component properties
 */
export interface ChipGroupProps {
  /**
   * Chip components inside the chip group
   * Only Chip components are allowed.
   */
  children: ReactElement<ChipProps> | ReactElement<ChipProps>[];
  /**
   * Selected chip value
   */
  value?: string | string[];
  /**
   * Callback function called when a chip is selected
   */
  onChange?: (value: string | string[]) => void;
  /**
   * Whether to allow multiple selection
   * @default false
   */
  multiple?: boolean;
  /**
   * Additional class name
   */
  className?: string;
  /**
   * Additional style properties
   */
  sx?: SxProps<Theme>;
}
