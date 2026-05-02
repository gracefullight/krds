import { ArrowLeft, ArrowRight } from "@gracefullight/krds-icons";
import { type ComponentProps, forwardRef, useMemo } from "react";
import { cn } from "#/utils/cn";

interface PaginationProps extends Omit<ComponentProps<"nav">, "onChange"> {
  count: number;
  page: number;
  onChange: (page: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  disabled?: boolean;
}

type PageItem =
  | { type: "page"; value: number }
  | { type: "ellipsis"; key: string }
  | { type: "prev" | "next" | "first" | "last" };

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Pagination range building has many edge cases (boundary, siblings, ellipsis); algorithm is intentionally inline for clarity.
function buildPageItems(
  count: number,
  page: number,
  siblingCount: number,
  boundaryCount: number,
  showFirstButton: boolean,
  showLastButton: boolean,
): PageItem[] {
  const range = (start: number, end: number): number[] =>
    Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i);

  const items: PageItem[] = [];

  if (showFirstButton) items.push({ type: "first" });
  items.push({ type: "prev" });

  // 페이지 수가 적으면 ellipsis 없이 전체 표시
  const ellipsisThreshold = siblingCount * 2 + boundaryCount * 2 + 5;
  if (count <= ellipsisThreshold) {
    for (const p of range(1, count)) {
      items.push({ type: "page", value: p });
    }
  } else {
    // 시작 경계
    for (const p of range(1, boundaryCount)) {
      items.push({ type: "page", value: p });
    }

    const siblingStart = Math.max(boundaryCount + 1, page - siblingCount);
    const siblingEnd = Math.min(count - boundaryCount, page + siblingCount);

    if (siblingStart > boundaryCount + 1) {
      items.push({ type: "ellipsis", key: "ellipsis-start" });
    }

    for (const p of range(siblingStart, siblingEnd)) {
      items.push({ type: "page", value: p });
    }

    if (siblingEnd < count - boundaryCount) {
      items.push({ type: "ellipsis", key: "ellipsis-end" });
    }

    // 끝 경계
    for (const p of range(count - boundaryCount + 1, count)) {
      items.push({ type: "page", value: p });
    }
  }

  items.push({ type: "next" });
  if (showLastButton) items.push({ type: "last" });

  return items;
}

const baseItemStyles =
  "inline-flex items-center justify-center min-w-9 h-9 rounded-md-lg text-label-sm font-bold transition-colors select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary";

const pageItemStyles = cn(
  baseItemStyles,
  "bg-transparent text-fg-basic",
  "hover:bg-btn-tertiary-fill-hover",
  "active:bg-btn-tertiary-fill-pressed",
);

const activePageItemStyles = cn(
  baseItemStyles,
  "bg-btn-primary-fill text-fg-inverse-static",
  "hover:bg-btn-primary-fill-hover",
  "active:bg-btn-primary-fill-pressed",
);

const navItemStyles = cn(
  baseItemStyles,
  "px-2 text-icon-gray-light",
  "hover:bg-btn-tertiary-fill-hover",
  "active:bg-btn-tertiary-fill-pressed",
);

const disabledNavItemStyles = cn(
  baseItemStyles,
  "px-2 text-fg-disabled-on cursor-not-allowed",
);

const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      className,
      count,
      page,
      onChange,
      siblingCount = 1,
      boundaryCount = 1,
      showFirstButton = false,
      showLastButton = false,
      disabled = false,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const items = useMemo(
      () =>
        buildPageItems(
          count,
          page,
          siblingCount,
          boundaryCount,
          showFirstButton,
          showLastButton,
        ),
      [
        count,
        page,
        siblingCount,
        boundaryCount,
        showFirstButton,
        showLastButton,
      ],
    );

    const handleChange = (nextPage: number) => {
      if (!disabled && nextPage >= 1 && nextPage <= count) {
        onChange(nextPage);
      }
    };

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel ?? "페이지네이션"}
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {/* biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Switch over 6 item types (first/prev/page/ellipsis/next/last) is intentionally inline. */}
          {items.map((item) => {
            if (item.type === "first") {
              const isDisabled = disabled || page <= 1;
              return (
                <li key="first">
                  <button
                    type="button"
                    aria-label="첫 페이지로 이동"
                    disabled={isDisabled}
                    onClick={() => handleChange(1)}
                    className={cn(
                      isDisabled ? disabledNavItemStyles : navItemStyles,
                      "disabled:cursor-not-allowed",
                    )}
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    <ArrowLeft size={16} aria-hidden="true" className="-ml-2" />
                  </button>
                </li>
              );
            }

            if (item.type === "last") {
              const isDisabled = disabled || page >= count;
              return (
                <li key="last">
                  <button
                    type="button"
                    aria-label="마지막 페이지로 이동"
                    disabled={isDisabled}
                    onClick={() => handleChange(count)}
                    className={cn(
                      isDisabled ? disabledNavItemStyles : navItemStyles,
                      "disabled:cursor-not-allowed",
                    )}
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="-ml-2"
                    />
                  </button>
                </li>
              );
            }

            if (item.type === "prev") {
              const isDisabled = disabled || page <= 1;
              return (
                <li key="prev">
                  <button
                    type="button"
                    aria-label="이전 페이지로 이동"
                    disabled={isDisabled}
                    onClick={() => handleChange(page - 1)}
                    className={cn(
                      isDisabled ? disabledNavItemStyles : navItemStyles,
                      "disabled:cursor-not-allowed",
                    )}
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                  </button>
                </li>
              );
            }

            if (item.type === "next") {
              const isDisabled = disabled || page >= count;
              return (
                <li key="next">
                  <button
                    type="button"
                    aria-label="다음 페이지로 이동"
                    disabled={isDisabled}
                    onClick={() => handleChange(page + 1)}
                    className={cn(
                      isDisabled ? disabledNavItemStyles : navItemStyles,
                      "disabled:cursor-not-allowed",
                    )}
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </li>
              );
            }

            if (item.type === "ellipsis") {
              return (
                <li key={item.key}>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center min-w-9 h-9 text-label-sm text-fg-subtle select-none"
                  >
                    &hellip;
                  </span>
                </li>
              );
            }

            if (item.type === "page") {
              const isActive = item.value === page;
              return (
                <li key={item.value}>
                  <button
                    type="button"
                    aria-label={`${item.value} 페이지`}
                    aria-current={isActive ? "page" : undefined}
                    disabled={disabled}
                    onClick={() => handleChange(item.value)}
                    className={cn(
                      isActive ? activePageItemStyles : pageItemStyles,
                      disabled && "cursor-not-allowed opacity-50",
                    )}
                  >
                    {item.value}
                  </button>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </nav>
    );
  },
);

Pagination.displayName = "Pagination";
export { Pagination, type PaginationProps };
