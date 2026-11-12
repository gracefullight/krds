import type { ReactNode, VideoHTMLAttributes } from "react";

export type MultimediaKind = "audio" | "video" | "multimedia";

export interface AccessibleMultimediaProps
  extends Omit<
    VideoHTMLAttributes<HTMLVideoElement>,
    "kind" | "src" | "title" | "children"
  > {
  /**
   * 콘텐츠 유형: 오디오 / 비디오(화면 해설 필요) / 멀티미디어
   */
  kind: MultimediaKind;
  /**
   * 미디어 소스 URL
   */
  src: string;
  /**
   * 미디어 접근 가능한 이름
   */
  title: string;
  /**
   * 캡션(VTT) 소스 — 청각 정보의 텍스트 대체
   */
  captionsSrc?: string;
  /**
   * 캡션 트랙 레이블
   * @default "한국어 캡션"
   */
  captionsLabel?: string;
  /**
   * 설명적 원고 — 시각·청각 정보를 모두 포함한 텍스트 대체
   */
  transcript?: ReactNode;
  /**
   * 설명적 원고 영역 레이블
   * @default "설명적 원고"
   */
  transcriptLabel?: string;
  /**
   * 화면 해설 — 비디오의 시각 정보에 대한 텍스트 설명
   */
  description?: ReactNode;
  /**
   * 미디어를 재생할 수 없을 때 제공할 대체 콘텐츠
   */
  children?: ReactNode;
}
