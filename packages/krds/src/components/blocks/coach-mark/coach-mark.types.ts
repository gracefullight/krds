import type { ReactNode } from "react";

export interface CoachMarkStep {
  /**
   * 스포트라이트로 강조할 대상 요소의 CSS 선택자
   */
  target: string;
  /**
   * 과업 명칭 (제목은 1줄 권장)
   */
  title: string;
  /**
   * 과업 수행 지시 사항 (3줄 이내 권장)
   */
  description: ReactNode;
}

export interface CoachMarkProps {
  /**
   * 사용자가 요청한 경우에만 실행한다. 자동 실행 금지.
   */
  open: boolean;
  /**
   * 단계 목록 (최대 15단계 권장)
   */
  steps: CoachMarkStep[];
  /**
   * 그만보기
   */
  onClose: () => void;
  /**
   * 마치기/확인 (마지막 단계 완료)
   */
  onComplete?: () => void;
}
