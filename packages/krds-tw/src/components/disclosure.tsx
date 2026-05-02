"use client";

import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible";
import { type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface DisclosureProps {
  /** Header content rendered inside the trigger button. */
  summary: ReactNode;
  /** Body content revealed when open. */
  children?: ReactNode;
  /** Initial open state for uncontrolled usage. */
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  /** Called when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Disables interaction. */
  disabled?: boolean;
  /** Additional class names for the root wrapper. */
  className?: string;
}

// ─────────────────────────────────────────────
// Disclosure
// ─────────────────────────────────────────────

const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  (
    {
      summary,
      children,
      defaultOpen = false,
      open,
      onOpenChange,
      disabled = false,
      className,
    },
    ref,
  ) => {
    return (
      <BaseCollapsible.Root
        ref={ref}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        disabled={disabled}
        className={cn(
          "w-full rounded-lg bg-action-secondary",
          "data-[open]:bg-action-secondary-hover",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
          className,
        )}
      >
        {/* Trigger */}
        <BaseCollapsible.Trigger
          className={cn(
            // layout
            "flex w-full items-center justify-between",
            // spacing
            "px-4 py-5",
            // typography
            "text-heading-xs text-fg-basic",
            // interaction
            "cursor-pointer rounded-lg outline-none",
            "hover:bg-action-secondary-hover",
            "active:bg-action-secondary-pressed",
            // focus
            "focus-visible:ring-2 focus-visible:ring-input-border-active",
            // disabled
            "data-[disabled]:pointer-events-none",
          )}
          aria-disabled={disabled || undefined}
        >
          <span>{summary}</span>
          {/* Chevron — CSS rotation only, respects prefers-reduced-motion */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={cn(
              "ml-4 shrink-0 text-icon-gray",
              "transition-transform duration-200",
              "motion-reduce:transition-none",
              // Base UI sets data-open on the trigger when panel is open
              "[[data-open]_&]:rotate-180",
            )}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BaseCollapsible.Trigger>

        {/* Panel */}
        <BaseCollapsible.Panel
          className={cn(
            "overflow-hidden",
            "data-[ending-style]:h-0 data-[starting-style]:h-0",
            "h-[var(--collapsible-panel-height)]",
            "transition-[height] duration-200",
            "motion-reduce:transition-none",
          )}
        >
          <div className="px-4 pb-5 text-body-md text-fg-basic">{children}</div>
        </BaseCollapsible.Panel>
      </BaseCollapsible.Root>
    );
  },
);

Disclosure.displayName = "Disclosure";

// ─────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────

export { Disclosure, type DisclosureProps };
