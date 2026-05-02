import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface SkipLinkProps extends ComponentProps<"a"> {
  href?: string;
}

const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  (
    { href = "#main", className, children = "본문 바로가기", ...props },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "sr-only focus:not-sr-only",
          "focus:fixed focus:top-0 focus:left-0 focus:z-[9999]",
          "flex w-full items-center justify-center",
          "bg-surface-inverse text-fg-inverse-static",
          "text-body-sm py-[4.5px]",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

SkipLink.displayName = "SkipLink";
export { SkipLink, type SkipLinkProps };
