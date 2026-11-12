import type { BoxProps } from "@mui/material";
import type { ReactNode } from "react";

export interface CarouselSlide {
  id: string;
  content: ReactNode;
}

export interface CarouselProps extends Omit<BoxProps, "children" | "onChange"> {
  slides: CarouselSlide[];
  /**
   * 자동 회전 사용 여부. 정지 컨트롤을 함께 제공한다.
   * @default false
   */
  autoPlay?: boolean;
  /**
   * 자동 회전 간격(ms)
   * @default 5000
   */
  interval?: number;
  /**
   * 항목 탐색 식별자 유형 (도형/분수)
   * @default "dot"
   */
  indicator?: "dot" | "fraction";
  /**
   * 접근 가능한 캐러셀 이름
   */
  "aria-label"?: string;
  onChange?: (index: number) => void;
}
