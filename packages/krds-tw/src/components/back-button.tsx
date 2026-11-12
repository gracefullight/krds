"use client";

import { ArrowLeft } from "@gracefullight/krds-icons";
import { type ComponentProps, forwardRef, type ReactNode } from "react";
import { cn } from "#/utils/cn";

interface BackButtonProps extends Omit<ComponentProps<"button">, "title"> {
  /** 뒤로가기 동작. 기본값은 브라우저 히스토리 back */
  onBack?: () => void;
  /** 현재 화면 제목. 제공하면 버튼 옆에 함께 표시한다. */
  title?: ReactNode;
}

/**
 * BackButton — KRDS 뒤로가기
 *
 * 상단바 좌측에 배치하여 직전 화면(또는 상위 단계)으로 이동한다.
 * 닫기/취소 버튼과 역할을 혼용하지 않으며, 작성 중인 내용이 유실될 수 있는
 * 화면에서는 onBack에서 사전 경고를 제공해야 한다.
 */
const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ onBack, title, className, children, ...props }, ref) => {
    const handleBack = () => {
      if (onBack) {
        onBack();
      } else {
        window.history.back();
      }
    };

    const button = (
      <button
        ref={ref}
        type="button"
        aria-label="뒤로가기"
        onClick={handleBack}
        className={cn(
          "inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-md-lg",
          "border-none bg-transparent text-icon-gray transition-colors",
          "hover:bg-surface-gray-subtler",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
          className,
        )}
        {...props}
      >
        <ArrowLeft size={24} aria-hidden="true" />
        {children}
      </button>
    );

    if (title === undefined) {
      return button;
    }

    return (
      <div className="flex items-center gap-1">
        {button}
        <span className="text-heading-sm text-fg-basic">{title}</span>
      </div>
    );
  },
);

BackButton.displayName = "BackButton";

export { BackButton, type BackButtonProps };
