"use client";

import { Tooltip } from "@base-ui-components/react/tooltip";
import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type TooltipPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps
  extends Omit<ComponentProps<typeof Tooltip.Root>, "children"> {
  /** Tooltip popup content. */
  content: ReactNode;
  /** Preferred placement of the popup relative to the trigger. Defaults to "top". */
  placement?: TooltipPlacement;
  /** Trigger element — typically a focusable/interactive element. */
  children?: ReactNode;
  /** Extra class names forwarded to the wrapper span. */
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Tooltip — wraps Base UI Tooltip primitives.
 * Positioning, delay, hover/focus, keyboard navigation, and ARIA are handled
 * by Base UI (Floating UI under the hood). The `placement` prop maps directly
 * to the positioner `side` prop.
 *
 * @example
 * <Tooltip content="More details" placement="bottom">
 *   <button type="button">Hover me</button>
 * </Tooltip>
 */
const TooltipComponent = forwardRef<HTMLSpanElement, TooltipProps>(
  ({ className, content, placement = "top", children, ...rootProps }, ref) => (
    <Tooltip.Provider>
      <Tooltip.Root {...rootProps}>
        <Tooltip.Trigger
          ref={ref}
          render={<span className={cn("inline-flex", className)} />}
        >
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side={placement} sideOffset={8}>
            <Tooltip.Popup
              className={cn(
                "pointer-events-none z-50 whitespace-nowrap rounded-md-lg px-3 py-2",
                "bg-surface-inverse text-body-sm text-fg-basic-inverse shadow-2",
                "data-[starting-style]:opacity-0",
                "data-[ending-style]:opacity-0",
                "transition-opacity duration-150 ease-out",
              )}
            >
              {content}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
);

TooltipComponent.displayName = "Tooltip";

// ---------------------------------------------------------------------------
// Exports — preserve existing API surface
// ---------------------------------------------------------------------------

export {
  TooltipComponent as Tooltip,
  type TooltipProps,
  type TooltipPlacement,
};
