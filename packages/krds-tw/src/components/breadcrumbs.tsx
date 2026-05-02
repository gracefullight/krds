import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps extends Omit<ComponentProps<"nav">, "aria-label"> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  "aria-label"?: string;
}

const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      className,
      items,
      separator = "›",
      "aria-label": ariaLabel = "현재 위치",
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn("flex", className)}
        {...props}
      >
        <ol className="flex flex-wrap items-center gap-x-1 text-label-sm text-fg-basic">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-x-1">
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-fg-bolder font-medium"
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <a
                      href={item.href}
                      className={cn(
                        "text-fg-basic underline-offset-2 transition-colors",
                        "hover:text-fg-bolder hover:underline",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                      )}
                    >
                      {item.label}
                    </a>
                    <span
                      aria-hidden="true"
                      className="select-none text-icon-gray"
                    >
                      {separator}
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  },
);

Breadcrumbs.displayName = "Breadcrumbs";
export { Breadcrumbs, type BreadcrumbsProps, type BreadcrumbItem };
