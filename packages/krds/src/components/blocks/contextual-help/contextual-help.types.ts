import type { PopoverProps } from "@mui/material";
import type { ReactNode } from "react";

export type ContextualHelpVariant = "info" | "help";

export interface ContextualHelpProps
  extends Omit<
    PopoverProps,
    "children" | "title" | "open" | "anchorEl" | "onClose"
  > {
  /**
   * 정보 제공(info, i 아이콘) / 도움 제공(help, ? 아이콘)
   * @default "info"
   */
  variant?: ContextualHelpVariant;
  /**
   * 도움말 제목
   */
  title?: ReactNode;
  /**
   * 구체적인 설명 텍스트 (링크 포함 가능, 링크는 새 창으로 실행)
   */
  children?: ReactNode;
  /**
   * 아이콘 버튼 접근 가능한 이름
   * @default "도움말"
   */
  triggerLabel?: string;
}
