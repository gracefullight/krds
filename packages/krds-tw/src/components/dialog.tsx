"use client";

import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import { Close } from "@gracefullight/krds-icons";
import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface DialogProps
  extends Omit<ComponentProps<typeof BaseDialog.Popup>, "title"> {
  /** Controlled open state. */
  open?: boolean;
  /** Called when the dialog requests to close. */
  onClose?: () => void;
  /** Dialog header title content. */
  title?: ReactNode;
}

// ─────────────────────────────────────────────
// DialogCloseButton (internal sub-component)
// ─────────────────────────────────────────────

function DialogCloseButton() {
  return (
    <BaseDialog.Close
      className={cn(
        "rounded-sm p-1 text-icon-gray",
        "transition-colors hover:bg-surface-gray-subtler",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-border-active",
      )}
    >
      <Close size={24} />
    </BaseDialog.Close>
  );
}

// ─────────────────────────────────────────────
// DialogHeader (internal sub-component)
// ─────────────────────────────────────────────

interface DialogHeaderProps {
  title: ReactNode;
}

function DialogHeader({ title }: DialogHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-divider-gray-light px-6 py-4">
      <BaseDialog.Title className="text-heading-sm text-fg-basic">
        {title}
      </BaseDialog.Title>
      <DialogCloseButton />
    </div>
  );
}

// ─────────────────────────────────────────────
// Dialog
// ─────────────────────────────────────────────

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ className, open, onClose, title, children, ...props }, ref) => {
    const handleOpenChange = (isOpen: boolean) => {
      if (!isOpen && onClose) {
        onClose();
      }
    };

    return (
      <BaseDialog.Root open={open} onOpenChange={handleOpenChange}>
        <BaseDialog.Portal>
          <BaseDialog.Backdrop className={cn("fixed inset-0 bg-canvas-dim")} />
          <BaseDialog.Popup
            ref={ref}
            className={cn(
              "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
              "w-full max-w-lg rounded-xl bg-surface-white p-0 shadow-3",
              className,
            )}
            {...props}
          >
            <div className="flex flex-col">
              {title && <DialogHeader title={title} />}
              <div className="p-6 text-body-md text-fg-basic">{children}</div>
            </div>
          </BaseDialog.Popup>
        </BaseDialog.Portal>
      </BaseDialog.Root>
    );
  },
);

Dialog.displayName = "Dialog";

// ─────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────

export { Dialog, type DialogProps };
