"use client";

import { Close } from "@gracefullight/krds-icons";
import { type ReactNode, useEffect } from "react";
import { cn } from "#/utils/cn";

interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  /** 메시지 제목 */
  title?: ReactNode;
  /** 구체적인 설명 텍스트 (한 문장 이내 권장) */
  children?: ReactNode;
  /** 메시지 좌측 아이콘 (필요한 경우에만 사용) */
  icon?: ReactNode;
  /** 작업 버튼 레이블 (최대 1개, 텍스트 버튼) */
  actionLabel?: string;
  onAction?: () => void;
  /** 자동 닫힘 시간(ms). 설정하지 않으면 사용자가 닫을 때까지 유지된다. */
  autoHideDuration?: number;
  className?: string;
}

/**
 * Snackbar — KRDS 스낵바
 *
 * 사용자 행동에 대한 결과나 중요도 낮은 메시지를 추가 행동(되돌리기, 다시 시도 등)과
 * 함께 화면 중앙 하단에 표시한다. 한 페이지에 하나의 스낵바만 표시하며,
 * 긴급/중요 메시지는 CriticalAlerts 또는 Dialog를 사용한다.
 */
function Snackbar({
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
  useEffect(() => {
    if (!open || autoHideDuration === undefined) return;
    const timer = window.setTimeout(onClose, autoHideDuration);
    return () => window.clearTimeout(timer);
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed bottom-20 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2",
        className,
      )}
    >
      <div className="flex items-start gap-3 rounded-xl bg-surface-inverse p-4 text-fg-basic-inverse shadow-3">
        {icon && (
          <span aria-hidden="true" className="mt-0.5 shrink-0">
            {icon}
          </span>
        )}

        <div className="min-w-0 flex-1">
          {title && <div className="text-body-md-bold">{title}</div>}
          {children && (
            <div className={cn("text-body-md", title && "mt-1")}>
              {children}
            </div>
          )}
        </div>

        {actionLabel && onAction && (
          <button
            type="button"
            onClick={onAction}
            className={cn(
              "shrink-0 cursor-pointer rounded border-none bg-transparent px-2 py-1",
              "text-label-md font-bold text-fg-basic-inverse underline underline-offset-2",
              "hover:opacity-80",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
            )}
          >
            {actionLabel}
          </button>
        )}

        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className={cn(
            "inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded",
            "border-none bg-transparent text-fg-basic-inverse transition-colors",
            "hover:opacity-80",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
          )}
        >
          <Close size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

Snackbar.displayName = "Snackbar";

export { Snackbar, type SnackbarProps };
