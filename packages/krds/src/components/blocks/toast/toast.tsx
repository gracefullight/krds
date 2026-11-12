import { Snackbar } from "@mui/material";
import * as S from "#/components/blocks/toast/toast.styles";
import type {
  ToastProps,
  ToastSeverity,
} from "#/components/blocks/toast/toast.types";

const DEFAULT_DURATION: Record<ToastSeverity, number> = {
  info: 2500,
  warning: 3500,
};

/**
 * Toast — KRDS 토스트
 *
 * 사용자 행동에 대한 결과를 화면 중앙 하단에 일시적으로 표시한다.
 * 한 줄 이내의 짧은 메시지에 적합하며, 추가 행동이 필요하면 Snackbar를 사용한다.
 */
export default function Toast({
  open,
  message,
  severity = "info",
  duration,
  onClose,
  className,
}: ToastProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration ?? DEFAULT_DURATION[severity]}
      onClose={onClose}
      className={className}
    >
      <S.ToastContainer>{message}</S.ToastContainer>
    </Snackbar>
  );
}
