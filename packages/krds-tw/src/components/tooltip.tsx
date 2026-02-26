"use client";

import {
  type ComponentProps,
  type ReactNode,
  forwardRef,
  useCallback,
  useState,
} from "react";
import { cn } from "#/utils/cn";

type TooltipPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps extends Omit<ComponentProps<"div">, "content"> {
  content: ReactNode;
  placement?: TooltipPlacement;
}

const placementStyles: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, placement = "top", children, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    const show = useCallback(() => setVisible(true), []);
    const hide = useCallback(() => setVisible(false), []);

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex", className)}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        {...props}
      >
        {children}
        {visible && (
          <div
            role="tooltip"
            className={cn(
              "pointer-events-none absolute z-50 whitespace-nowrap rounded-md-lg px-3 py-2",
              "bg-surface-inverse text-body-sm text-fg-basic-inverse shadow-2",
              placementStyles[placement],
            )}
          >
            {content}
          </div>
        )}
      </div>
    );
  },
);

Tooltip.displayName = "Tooltip";
export { Tooltip, type TooltipProps, type TooltipPlacement };
