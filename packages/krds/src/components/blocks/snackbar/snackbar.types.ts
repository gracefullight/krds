import type { ReactNode } from "react";

export interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  /**
   * 메시지 제목
   */
  title?: ReactNode;
  /**
   * 구체적인 설명 텍스트 (한 문장 이내 권장)
   */
  children?: ReactNode;
  /**
   * 메시지 좌측 아이콘 (필요한 경우에만 사용)
   */
  icon?: ReactNode;
  /**
   * 작업 버튼 레이블 (최대 1개, 텍스트 버튼)
   */
  actionLabel?: string;
  onAction?: () => void;
  /**
   * 자동 닫힘 시간(ms). 설정하지 않으면 사용자가 닫을 때까지 유지된다.
   */
  autoHideDuration?: number;
  className?: string;
}
