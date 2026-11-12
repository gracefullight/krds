"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "#/utils/cn";

type ToastSeverity = "info" | "warning";

interface ToastProps {
  open: boolean;
  message: ReactNode;
  severity?: ToastSeverity;
  /** 노출 시간(ms). 기본값: 정보형 2500, 주의·경고형 3500 */
  duration?: number;
  onClose: () => void;
  className?: string;
}

interface ToastOptions {
  severity?: ToastSeverity;
  duration?: number;
}

interface ToastEntry {
  id: number;
  message: ReactNode;
  severity: ToastSeverity;
  duration?: number;
}

interface ToastContextValue {
  toast: (message: ReactNode, options?: ToastOptions) => void;
}

const DEFAULT_DURATION: Record<ToastSeverity, number> = {
  info: 2500,
  warning: 3500,
};

const ToastContext = createContext<ToastContextValue | null>(null);

/**
 * Toast — KRDS 토스트
 *
 * 사용자 행동에 대한 결과를 화면 중앙 하단에 일시적으로 표시한다.
 * 한 줄 이내의 짧은 메시지에 적합하며, 추가 행동이 필요하면 Snackbar를 사용한다.
 * 정보형 메시지는 2~3초, 주의·경고형 메시지는 3~4초 노출을 권장한다.
 */
function Toast({
  open,
  message,
  severity = "info",
  duration,
  onClose,
  className,
}: ToastProps) {
  const ms = duration ?? DEFAULT_DURATION[severity];

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, ms);
    return () => window.clearTimeout(timer);
  }, [open, ms, onClose]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-20 left-1/2 z-50 -translate-x-1/2",
        className,
      )}
    >
      <output
        className={cn(
          "block max-w-[calc(100vw-2rem)] rounded-full bg-surface-inverse px-6 py-3 text-center text-body-md text-fg-basic-inverse shadow-2",
        )}
      >
        {message}
      </output>
    </div>
  );
}

/**
 * ToastProvider — 토스트 큐를 관리한다. 한 번에 하나의 토스트만 표시한다.
 */
function ToastProvider({ children }: { children: ReactNode }) {
  const [queue, setQueue] = useState<ToastEntry[]>([]);
  const nextId = useRef(0);

  const toast = useCallback((message: ReactNode, options?: ToastOptions) => {
    nextId.current += 1;
    setQueue((prev) => [
      ...prev,
      {
        id: nextId.current,
        message,
        severity: options?.severity ?? "info",
        duration: options?.duration,
      },
    ]);
  }, []);

  const handleClose = useCallback(() => {
    setQueue((prev) => prev.slice(1));
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);
  const current = queue[0];

  return (
    <ToastContext.Provider value={value}>
      {children}
      {current && (
        <Toast
          key={current.id}
          open
          message={current.message}
          severity={current.severity}
          duration={current.duration}
          onClose={handleClose}
        />
      )}
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast는 ToastProvider 내부에서 사용해야 합니다.");
  }
  return context;
}

Toast.displayName = "Toast";
ToastProvider.displayName = "ToastProvider";

export {
  Toast,
  type ToastOptions,
  type ToastProps,
  ToastProvider,
  type ToastSeverity,
  useToast,
};
