"use client";

import { type ComponentProps, type ReactNode, forwardRef, useId } from "react";
import { cn } from "#/utils/cn";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface GettingStartedStep {
  title: string;
  description?: string;
  icon?: ReactNode;
}

interface GettingStartedProps extends Omit<ComponentProps<"section">, "title"> {
  title: string;
  description?: string;
  steps: GettingStartedStep[];
  actionLabel?: string;
  onAction?: () => void;
}

// ---------------------------------------------------------------------------
// GettingStarted
// ---------------------------------------------------------------------------

const GettingStarted = forwardRef<HTMLElement, GettingStartedProps>(
  (
    { className, title, description, steps, actionLabel, onAction, ...props },
    ref,
  ) => {
    const titleId = useId();
    return (
      <section
        ref={ref}
        aria-labelledby={titleId}
        className={cn(
          "flex flex-col gap-6 rounded-2xl bg-surface-white p-6",
          "outline outline-1 outline-stroke-gray-light",
          className,
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 id={titleId} className="text-heading-md text-fg-basic">
            {title}
          </h2>
          {description && (
            <p className="text-body-md text-fg-subtle">{description}</p>
          )}
        </div>

        {/* Steps */}
        {steps.length > 0 && (
          <ol aria-label="시작 전 단계" className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                {/* Step badge or custom icon */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full",
                    step.icon
                      ? "text-icon-secondary"
                      : "bg-element-primary text-fg-inverse-static text-label-sm font-bold",
                  )}
                >
                  {step.icon ?? <span>{index + 1}</span>}
                </div>

                {/* Step content */}
                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-body-md-bold text-fg-basic">
                    {step.title}
                  </span>
                  {step.description && (
                    <span className="text-body-sm text-fg-subtle">
                      {step.description}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}

        {/* CTA */}
        {actionLabel && (
          <div>
            <button
              type="button"
              onClick={onAction}
              className={cn(
                "inline-flex items-center justify-center rounded-md-lg font-bold shadow-none transition-colors select-none",
                "px-4 py-[11px] text-label-md",
                "bg-btn-primary-fill text-fg-inverse-static",
                "hover:bg-btn-primary-fill-hover",
                "active:bg-btn-primary-fill-pressed",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
                "disabled:cursor-not-allowed disabled:bg-btn-disabled-fill disabled:text-fg-disabled-on",
              )}
            >
              {actionLabel}
            </button>
          </div>
        )}
      </section>
    );
  },
);

GettingStarted.displayName = "GettingStarted";

export { GettingStarted, type GettingStartedProps, type GettingStartedStep };
