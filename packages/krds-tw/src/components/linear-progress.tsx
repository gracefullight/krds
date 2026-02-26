import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface LinearProgressProps extends ComponentProps<"div"> {
  value?: number;
  color?: "primary" | "secondary" | "danger" | "success";
}

const colorStyles = {
  primary: "bg-element-primary",
  secondary: "bg-element-secondary",
  danger: "bg-element-danger",
  success: "bg-element-success",
} as const;

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(
  ({ className, value = 0, color = "primary", ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
      <div
        ref={ref}
        role="progressbar"
        tabIndex={0}
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn("h-1 w-full overflow-hidden rounded-full bg-element-gray-light", className)}
        {...props}
      >
        <div
          className={cn("h-full rounded-full transition-all duration-300", colorStyles[color])}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    );
  },
);

LinearProgress.displayName = "LinearProgress";
export { LinearProgress, type LinearProgressProps };
