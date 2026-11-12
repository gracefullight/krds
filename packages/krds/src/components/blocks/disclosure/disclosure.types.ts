import type { AccordionProps } from "@mui/material";
import type { ReactNode } from "react";

export interface DisclosureProps
  extends Omit<AccordionProps, "children" | "defaultExpanded"> {
  /**
   * 확장할 콘텐츠 섹션의 내용을 유추할 수 있는 제목 텍스트
   */
  summary: ReactNode;
  /**
   * 부가 정보 콘텐츠
   */
  children?: ReactNode;
}
