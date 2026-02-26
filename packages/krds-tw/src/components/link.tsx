import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface LinkProps extends ComponentProps<"a"> {
  external?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, external, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "text-link-default underline transition-colors",
          "hover:text-link-hover",
          "active:text-link-pressed",
          "visited:text-link-visited",
          className,
        )}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";
export { Link, type LinkProps };
