import type { ImgHTMLAttributes, ReactNode } from "react";

export type ImageRatio = "auto" | "16:9" | "4:3" | "3:2" | "1:1";

export interface ImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "alt" | "width" | "height"
  > {
  /**
   * 대체 텍스트. 장식용 이미지는 빈 문자열을 전달한다.
   */
  alt: string;
  /**
   * 이미지 설명 (figcaption)
   */
  caption?: ReactNode;
  /**
   * 가로세로 비율
   * @default "auto"
   */
  ratio?: ImageRatio;
  /**
   * 비율 고정 시 채움 방식
   * @default "cover"
   */
  fit?: "cover" | "contain";
}
