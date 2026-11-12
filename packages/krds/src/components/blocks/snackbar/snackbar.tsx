import { Close } from "@gracefullight/krds-icons";
import { Snackbar as MuiSnackbar } from "@mui/material";
import * as S from "#/components/blocks/snackbar/snackbar.styles";
import type { SnackbarProps } from "#/components/blocks/snackbar/snackbar.types";

/**
 * Snackbar — KRDS 스낵바
 *
 * 사용자 행동에 대한 결과나 중요도 낮은 메시지를 추가 행동(되돌리기, 다시 시도 등)과
 * 함께 화면 중앙 하단에 표시한다. 한 페이지에 하나의 스낵바만 표시하며,
 * 긴급/중요 메시지는 CriticalAlerts 또는 Modal을 사용한다.
 */
export default function Snackbar({
  open,
  onClose,
  title,
  children,
  icon,
  actionLabel,
  onAction,
  autoHideDuration,
  className,
}: SnackbarProps) {
  return (
    <MuiSnackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      className={className}
    >
      <S.SnackbarContainer role="status" aria-live="polite">
        {icon && <S.SnackbarIcon aria-hidden="true">{icon}</S.SnackbarIcon>}

        <S.SnackbarContent>
          {title && <S.SnackbarTitle>{title}</S.SnackbarTitle>}
          {children && (
            <S.SnackbarBody sx={title ? { marginTop: "0.4rem" } : undefined}>
              {children}
            </S.SnackbarBody>
          )}
        </S.SnackbarContent>

        {actionLabel && onAction && (
          <S.SnackbarAction onClick={onAction} disableRipple>
            {actionLabel}
          </S.SnackbarAction>
        )}

        <S.SnackbarClose aria-label="닫기" onClick={onClose} disableRipple>
          <Close size={20} />
        </S.SnackbarClose>
      </S.SnackbarContainer>
    </MuiSnackbar>
  );
}
