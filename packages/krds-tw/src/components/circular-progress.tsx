import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

type CircularProgressSize = "small" | "medium" | "large";

interface CircularProgressProps extends Omit<ComponentProps<"svg">, "role"> {
  size?: CircularProgressSize | number;
  value?: number;
  "aria-label"?: string;
}

const SIZES: Record<CircularProgressSize, number> = {
  small: 16,
  medium: 24,
  large: 40,
} as const;

const STROKE_WIDTHS: Record<CircularProgressSize, number> = {
  small: 2,
  medium: 2.5,
  large: 3.5,
} as const;

const DEFAULT_STROKE_WIDTH = 2.5;

function resolveSize(size: CircularProgressSize | number): number {
  if (typeof size === "number") return size;
  return SIZES[size];
}

function resolveStrokeWidth(size: CircularProgressSize | number): number {
  if (typeof size === "number") return DEFAULT_STROKE_WIDTH;
  return STROKE_WIDTHS[size];
}

const CircularProgress = forwardRef<SVGSVGElement, CircularProgressProps>(
  (
    {
      className,
      size = "medium",
      value,
      "aria-label": ariaLabel = "로딩 중",
      ...props
    },
    ref,
  ) => {
    const isDeterminate = value !== undefined;
    const clampedValue = isDeterminate
      ? Math.min(100, Math.max(0, value))
      : undefined;

    const px = resolveSize(size);
    const strokeWidth = resolveStrokeWidth(size);

    // viewBox is fixed at 24×24; radius accounts for stroke width so arc is fully visible
    const viewBoxSize = 24;
    const radius = (viewBoxSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = isDeterminate
      ? circumference * (1 - (clampedValue as number) / 100)
      : circumference * 0.75;

    return (
      // biome-ignore lint/a11y/useFocusableInteractive: progressbar is non-focusable status indicator.
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar role is the standard ARIA role for progress visuals.
      <svg
        ref={ref}
        // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar role is the standard ARIA role for progress visuals.
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        width={px}
        height={px}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
        className={cn(
          "text-element-primary",
          !isDeterminate && [
            "motion-safe:animate-spin",
            "motion-reduce:animate-pulse motion-reduce:[animation-duration:1.5s]",
          ],
          className,
        )}
        {...props}
      >
        <title>{ariaLabel}</title>
        {/* Track circle */}
        <circle
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
        {/* Progress arc */}
        <circle
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`}
          className={cn(
            isDeterminate &&
              "transition-[stroke-dashoffset] duration-300 ease-in-out",
          )}
        />
      </svg>
    );
  },
);

CircularProgress.displayName = "CircularProgress";
export {
  CircularProgress,
  type CircularProgressProps,
  type CircularProgressSize,
};
