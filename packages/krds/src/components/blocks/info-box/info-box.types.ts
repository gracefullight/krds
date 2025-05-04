import type { ReactNode } from "react";

export type InfoBoxType = "primary" | "secondary";
export type InfoBoxSize = "default" | "slim";

export interface InfoBoxProps {
  /**
   * Title of the info box
   */
  title?: string;
  /**
   * Content text of the info box
   */
  content?: string;
  /**
   * Children of the info box - InfoBox.Item components when size is default
   */
  children?: ReactNode;
  /**
   * Type of the info box (affects colors)
   * @default "primary"
   */
  type?: InfoBoxType;
  /**
   * Size of the info box
   * @default "default"
   */
  size?: InfoBoxSize;
}

export interface InfoBoxItemProps {
  /**
   * Content of the info box item
   */
  children: ReactNode;
}
