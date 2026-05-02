"use client";

import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion";
import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type AccordionValue = (string | number | null)[];

interface AccordionProps
  extends Omit<ComponentProps<"div">, "value" | "defaultValue"> {
  /** Allow multiple items to be open simultaneously. Maps to `multiple` on Base UI Root. */
  type?: "single" | "multiple";
  /** Controlled open value(s). */
  value?: AccordionValue;
  /** Uncontrolled default open value(s). */
  defaultValue?: AccordionValue;
  /** Called when the open value changes. */
  onValueChange?: (value: AccordionValue) => void;
  /** Disable all items. */
  disabled?: boolean;
}

interface AccordionItemProps extends Omit<ComponentProps<"div">, "value"> {
  /** Unique identifier for this item. */
  value?: string | number;
  /** Disable this specific item. */
  disabled?: boolean;
}

type AccordionTriggerProps = ComponentProps<"button">;

type AccordionContentProps = ComponentProps<"div">;

// ─────────────────────────────────────────────
// Accordion (Root)
// ─────────────────────────────────────────────

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      type = "single",
      value,
      defaultValue,
      onValueChange,
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <BaseAccordion.Root
        ref={ref}
        multiple={type === "multiple"}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        className={cn("w-full", className)}
        {...props}
      >
        {children}
      </BaseAccordion.Root>
    );
  },
);

Accordion.displayName = "Accordion";

// ─────────────────────────────────────────────
// AccordionItem
// ─────────────────────────────────────────────

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, disabled, children, ...props }, ref) => {
    return (
      <BaseAccordion.Item
        ref={ref}
        value={value}
        disabled={disabled}
        className={cn(
          "rounded-lg bg-action-secondary",
          "data-[open]:bg-action-secondary-hover",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
          className,
        )}
        {...props}
      >
        {children}
      </BaseAccordion.Item>
    );
  },
);

AccordionItem.displayName = "AccordionItem";

// ─────────────────────────────────────────────
// AccordionTrigger
// ─────────────────────────────────────────────

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <BaseAccordion.Header>
        <BaseAccordion.Trigger
          ref={ref}
          className={cn(
            // layout
            "flex w-full items-center justify-between",
            // spacing — medium size (matches mui-accordion sizeMedium: px-4 py-5)
            "px-4 py-5",
            // typography
            "text-heading-xs text-fg-basic",
            // hover
            "hover:bg-action-secondary-hover",
            // focus
            "rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-input-border-active",
            // active press state
            "active:bg-action-secondary-pressed",
            // disabled
            "data-[disabled]:pointer-events-none",
            className,
          )}
          {...props}
        >
          {children}
          {/* Chevron icon — pure CSS rotation, respects prefers-reduced-motion */}
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
              "data-[panel-open]:rotate-180",
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
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
    );
  },
);

AccordionTrigger.displayName = "AccordionTrigger";

// ─────────────────────────────────────────────
// AccordionContent (Panel)
// ─────────────────────────────────────────────

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <BaseAccordion.Panel
        ref={ref}
        className={cn(
          // hide when closed — Base UI toggles data-open
          "overflow-hidden",
          // animate open: expand from 0 height
          "transition-[height] duration-200 ease-in-out",
          "motion-reduce:transition-none",
          // height driven by Base UI CSS var --accordion-panel-height
          "[height:0] data-[open]:[height:var(--accordion-panel-height)]",
          className,
        )}
        {...props}
      >
        {/* Inner wrapper preserves padding while height animates */}
        <div className="px-4 pb-5 text-body-md text-fg-basic">{children}</div>
      </BaseAccordion.Panel>
    );
  },
);

AccordionContent.displayName = "AccordionContent";

// ─────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
};
