import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

type CircularProgressSize = "small" | "medium" | "large";

interface CircularProgressProps extends Omit<ComponentProps<"div">, "role"> {
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

const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
  (
    {
      className,
      size = "medium",
      value,
      "aria-label": ariaLabel = "로딩 중",
      style,
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

    const viewBoxSize = 24;
    const radius = (viewBoxSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = isDeterminate
      ? circumference * (1 - (clampedValue as number) / 100)
      : circumference * 0.75;

    return (
      <div
        ref={ref}
        role="progressbar"
        tabIndex={-1}
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        className={cn(
          "inline-block leading-none text-element-primary",
          className,
        )}
        style={{ width: px, height: px, ...style }}
        {...props}
      >
        <svg
          aria-hidden="true"
          focusable={false}
          width={px}
          height={px}
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          fill="none"
          className={cn(
            !isDeterminate && [
              "motion-safe:animate-spin",
              "motion-reduce:animate-pulse motion-reduce:[animation-duration:1.5s]",
            ],
          )}
        >
          <circle
            cx={viewBoxSize / 2}
            cy={viewBoxSize / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="opacity-20"
          />
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
      </div>
    );
  },
);

CircularProgress.displayName = "CircularProgress";
export {
  CircularProgress,
  type CircularProgressProps,
  type CircularProgressSize,
};
