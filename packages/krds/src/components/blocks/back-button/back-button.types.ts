import type { IconButtonProps } from "@mui/material";
import type { ReactNode } from "react";

export interface BackButtonProps
  extends Omit<IconButtonProps, "title" | "onClick"> {
  /**
   * 뒤로가기 동작. 기본값은 브라우저 히스토리 back
   */
  onBack?: () => void;
  /**
   * 현재 화면 제목. 제공하면 버튼 옆에 함께 표시한다.
   */
  title?: ReactNode;
}
