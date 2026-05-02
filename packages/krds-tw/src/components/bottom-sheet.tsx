"use client";

import { Dialog } from "@base-ui-components/react/dialog";
import { type ComponentProps, forwardRef } from "react";
import type React from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface BottomSheetProps {
  /** Controlled open state. */
  open?: boolean;
  /** Uncontrolled default open state. */
  defaultOpen?: boolean;
  /** Called when open state changes. */
  onOpenChange?: (
    open: boolean,
    eventDetails: Dialog.Root.ChangeEventDetails,
  ) => void;
  /**
   * Whether the sheet can be dismissed by clicking the backdrop or pressing Escape.
   * @default true
   */
  dismissible?: boolean;
  children?: React.ReactNode;
}

type BottomSheetTriggerProps = ComponentProps<typeof Dialog.Trigger>;
type BottomSheetContentProps = ComponentProps<"div">;
type BottomSheetHeaderProps = ComponentProps<"div">;
type BottomSheetTitleProps = ComponentProps<typeof Dialog.Title>;
type BottomSheetCloseProps = ComponentProps<typeof Dialog.Close>;

// ─────────────────────────────────────────────
// BottomSheet (Root)
// ─────────────────────────────────────────────

function BottomSheet({
  open,
  defaultOpen,
  onOpenChange,
  dismissible = true,
  children,
}: BottomSheetProps) {
  return (
    <Dialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      disablePointerDismissal={!dismissible}
    >
      {children}
    </Dialog.Root>
  );
}

// ─────────────────────────────────────────────
// BottomSheetTrigger
// ─────────────────────────────────────────────

const BottomSheetTrigger = forwardRef<
  HTMLButtonElement,
  BottomSheetTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <Dialog.Trigger ref={ref} className={cn(className)} {...props}>
      {children}
    </Dialog.Trigger>
  );
});

BottomSheetTrigger.displayName = "BottomSheetTrigger";

// ─────────────────────────────────────────────
// BottomSheetContent
// ─────────────────────────────────────────────

const BottomSheetContent = forwardRef<HTMLDivElement, BottomSheetContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 bg-canvas-dim",
            // animate opacity in/out
            "transition-opacity duration-300",
            "motion-reduce:transition-none",
            "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
          )}
        />
        {/* Sheet panel */}
        <Dialog.Popup
          className={cn(
            // positioning: fixed to bottom, full width on mobile
            "fixed bottom-0 left-0 right-0 z-50",
            // mobile: full width; tablet+: max-width 600px centered
            "md:left-1/2 md:right-auto md:w-full md:max-w-[600px] md:-translate-x-1/2",
            // shape
            "rounded-t-2xl bg-surface-white",
            // spacing (matches MuiDrawer: px-4 pt-6 pb-10)
            "px-4 pt-6 pb-10",
            // shadow
            "shadow-3",
            // slide-up animation
            "translate-y-0",
            "transition-transform duration-300 ease-out",
            "motion-reduce:transition-none",
            "data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    );
  },
);

BottomSheetContent.displayName = "BottomSheetContent";

// ─────────────────────────────────────────────
// BottomSheetHeader
// ─────────────────────────────────────────────

const BottomSheetHeader = forwardRef<HTMLDivElement, BottomSheetHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mb-4 flex items-center justify-between", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

BottomSheetHeader.displayName = "BottomSheetHeader";

// ─────────────────────────────────────────────
// BottomSheetTitle
// ─────────────────────────────────────────────

const BottomSheetTitle = forwardRef<HTMLHeadingElement, BottomSheetTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Dialog.Title
        ref={ref}
        className={cn("text-heading-sm text-fg-basic", className)}
        {...props}
      >
        {children}
      </Dialog.Title>
    );
  },
);

BottomSheetTitle.displayName = "BottomSheetTitle";

// ─────────────────────────────────────────────
// BottomSheetClose
// ─────────────────────────────────────────────

const BottomSheetClose = forwardRef<HTMLButtonElement, BottomSheetCloseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Dialog.Close
        ref={ref}
        className={cn(
          "rounded-sm p-1 text-icon-gray",
          "transition-colors hover:bg-surface-gray-subtler",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-border-active",
          className,
        )}
        {...props}
      >
        {children}
      </Dialog.Close>
    );
  },
);

BottomSheetClose.displayName = "BottomSheetClose";

// ─────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────

export {
  BottomSheet,
  BottomSheetTrigger,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetClose,
  type BottomSheetProps,
  type BottomSheetTriggerProps,
  type BottomSheetContentProps,
  type BottomSheetHeaderProps,
  type BottomSheetTitleProps,
  type BottomSheetCloseProps,
};
