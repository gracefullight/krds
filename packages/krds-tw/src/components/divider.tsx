import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface DividerProps extends ComponentProps<"hr"> {
  orientation?: "horizontal" | "vertical";
  variant?: "light" | "default" | "dark";
}

const colorStyles = {
  light: "border-divider-gray-light",
  default: "border-divider-gray",
  dark: "border-divider-gray-dark",
} as const;

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", variant = "light", ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          colorStyles[variant],
          orientation === "horizontal"
            ? "w-full border-t"
            : "inline-block h-full border-l",
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";
export { Divider, type DividerProps };
