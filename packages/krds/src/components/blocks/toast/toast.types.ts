import type { ReactNode } from "react";

export type ToastSeverity = "info" | "warning";

export interface ToastProps {
  open: boolean;
  message: ReactNode;
  /**
   * 정보형(info)은 2.5초, 주의·경고형(warning)은 3.5초 기본 노출
   * @default "info"
   */
  severity?: ToastSeverity;
  /**
   * 노출 시간(ms). 기본값: 정보형 2500, 주의·경고형 3500
   */
  duration?: number;
  onClose: () => void;
  className?: string;
}
