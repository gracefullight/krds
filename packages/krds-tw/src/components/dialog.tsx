"use client";

import {
  type ComponentProps,
  type ReactNode,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { Close } from "@gracefullight/krds-icons";
import { cn } from "#/utils/cn";

interface DialogProps extends Omit<ComponentProps<"dialog">, "title"> {
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ className, open, onClose, title, children, ...props }, ref) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const setRef = (node: HTMLDialogElement | null) => {
      dialogRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (open) {
        if (!dialog.open) dialog.showModal();
      } else {
        dialog.close();
      }
    }, [open]);

    return (
      <dialog
        ref={setRef}
        className={cn(
          "w-full max-w-lg rounded-xl bg-surface-white p-0 shadow-3",
          "backdrop:bg-canvas-dim",
          className,
        )}
        onClose={onClose}
        {...props}
      >
        <div className="flex flex-col">
          {title && (
            <div className="flex items-center justify-between border-b border-divider-gray-light px-6 py-4">
              <h2 className="text-heading-sm text-fg-basic">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-sm p-1 text-icon-gray transition-colors hover:bg-surface-gray-subtler"
              >
                <Close size={24} />
              </button>
            </div>
          )}
          <div className="p-6 text-body-md text-fg-basic">{children}</div>
        </div>
      </dialog>
    );
  },
);

Dialog.displayName = "Dialog";
export { Dialog, type DialogProps };
