import {
  Close,
  Emergency,
  SystemInfo,
  SystemWarning,
} from "@gracefullight/krds-icons";
import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

type CriticalAlertsSeverity = "info" | "warning" | "danger";

interface CriticalAlertsProps extends Omit<ComponentProps<"aside">, "title"> {
  severity?: CriticalAlertsSeverity;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  actions?: ReactNode;
}

const badgeStyles: Record<CriticalAlertsSeverity, string> = {
  danger: "bg-element-danger",
  warning: "bg-element-warning",
  info: "bg-element-information",
};

const iconMap: Record<CriticalAlertsSeverity, typeof Emergency> = {
  danger: Emergency,
  warning: SystemWarning,
  info: SystemInfo,
};

const labelMap: Record<CriticalAlertsSeverity, string> = {
  danger: "긴급",
  warning: "경고",
  info: "안내",
};

const CriticalAlerts = forwardRef<HTMLElement, CriticalAlertsProps>(
  (
    {
      className,
      severity = "warning",
      title,
      children,
      onClose,
      actions,
      ...props
    },
    ref,
  ) => {
    const Icon = iconMap[severity];
    const label = labelMap[severity];

    return (
      <aside
        ref={ref}
        role="alert"
        aria-live="assertive"
        className={cn(
          "flex w-full items-center gap-4 rounded-xl bg-surface-white-subtler p-4 outline outline-1 outline-stroke-gray-light",
          "md:p-4 p-3",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1 rounded-md px-2.5 py-[11px] text-label-md-bold text-fg-inverse-static",
            "md:py-[11px] py-2 md:text-label-md-bold text-label-sm-bold",
            badgeStyles[severity],
          )}
          aria-hidden="true"
        >
          <Icon size={24} className="md:size-6 size-5" />
          {label}
        </span>

        <div className="flex flex-1 items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            {title && (
              <p className="text-heading-sm text-fg-bolder md:text-heading-sm text-body-md-bold">
                {title}
              </p>
            )}
            <p className="text-body-md text-fg-basic">{children}</p>
          </div>

          {actions && (
            <div className="shrink-0 flex items-center gap-1">{actions}</div>
          )}
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="긴급 공지 닫기"
            className={cn(
              "shrink-0 inline-flex items-center justify-center rounded-md p-1 text-icon-gray transition-colors",
              "hover:bg-surface-gray-subtler",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
            )}
          >
            <Close size={20} />
          </button>
        )}
      </aside>
    );
  },
);

CriticalAlerts.displayName = "CriticalAlerts";

export {
  CriticalAlerts,
  type CriticalAlertsProps,
  type CriticalAlertsSeverity,
};
