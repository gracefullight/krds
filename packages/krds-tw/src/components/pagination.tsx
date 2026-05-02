import { ArrowLeft, ArrowRight } from "@gracefullight/krds-icons";
import {
  type ComponentProps,
  type ReactNode,
  forwardRef,
  useMemo,
} from "react";
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

function range(start: number, end: number): number[] {
  return Array.from(
    { length: Math.max(0, end - start + 1) },
    (_, i) => start + i,
  );
}

function buildInnerPageItems(
  count: number,
  page: number,
  siblingCount: number,
  boundaryCount: number,
): PageItem[] {
  const items: PageItem[] = [];
  const ellipsisThreshold = siblingCount * 2 + boundaryCount * 2 + 5;

  if (count <= ellipsisThreshold) {
    for (const p of range(1, count)) {
      items.push({ type: "page", value: p });
    }
    return items;
  }

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

  return items;
}

function buildPageItems(
  count: number,
  page: number,
  siblingCount: number,
  boundaryCount: number,
  showFirstButton: boolean,
  showLastButton: boolean,
): PageItem[] {
  const items: PageItem[] = [];

  if (showFirstButton) items.push({ type: "first" });
  items.push({ type: "prev" });

  for (const item of buildInnerPageItems(
    count,
    page,
    siblingCount,
    boundaryCount,
  )) {
    items.push(item);
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
  "px-2 text-fg-disabled cursor-not-allowed",
);

function getPageItemKey(item: PageItem): string | number {
  if (item.type === "page") return item.value;
  if (item.type === "ellipsis") return item.key;
  return item.type;
}

// ─── 아이템 렌더러 ────────────────────────────────────────────────────────────

interface NavItemProps {
  ariaLabel: string;
  isDisabled: boolean;
  onClick: () => void;
  children: ReactNode;
}

function PaginationNavItem({
  ariaLabel,
  isDisabled,
  onClick,
  children,
}: NavItemProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        isDisabled ? disabledNavItemStyles : navItemStyles,
        "disabled:cursor-not-allowed",
      )}
    >
      {children}
    </button>
  );
}

interface PageButtonProps {
  value: number;
  isActive: boolean;
  disabled: boolean;
  onClick: () => void;
}

function PaginationPageButton({
  value,
  isActive,
  disabled,
  onClick,
}: PageButtonProps) {
  return (
    <button
      type="button"
      aria-label={`${value} 페이지`}
      aria-current={isActive ? "page" : undefined}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        isActive ? activePageItemStyles : pageItemStyles,
        disabled && "cursor-not-allowed opacity-50",
      )}
    >
      {value}
    </button>
  );
}

interface PageItemRendererProps {
  item: PageItem;
  page: number;
  count: number;
  disabled: boolean;
  onPageChange: (p: number) => void;
}

function PageItemRenderer({
  item,
  page,
  count,
  disabled,
  onPageChange,
}: PageItemRendererProps) {
  if (item.type === "first") {
    return (
      <li>
        <PaginationNavItem
          ariaLabel="첫 페이지로 이동"
          isDisabled={disabled || page <= 1}
          onClick={() => onPageChange(1)}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <ArrowLeft size={16} aria-hidden="true" className="-ml-2" />
        </PaginationNavItem>
      </li>
    );
  }
  if (item.type === "last") {
    return (
      <li>
        <PaginationNavItem
          ariaLabel="마지막 페이지로 이동"
          isDisabled={disabled || page >= count}
          onClick={() => onPageChange(count)}
        >
          <ArrowRight size={16} aria-hidden="true" />
          <ArrowRight size={16} aria-hidden="true" className="-ml-2" />
        </PaginationNavItem>
      </li>
    );
  }
  if (item.type === "prev") {
    return (
      <li>
        <PaginationNavItem
          ariaLabel="이전 페이지로 이동"
          isDisabled={disabled || page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          <ArrowLeft size={16} aria-hidden="true" />
        </PaginationNavItem>
      </li>
    );
  }
  if (item.type === "next") {
    return (
      <li>
        <PaginationNavItem
          ariaLabel="다음 페이지로 이동"
          isDisabled={disabled || page >= count}
          onClick={() => onPageChange(page + 1)}
        >
          <ArrowRight size={16} aria-hidden="true" />
        </PaginationNavItem>
      </li>
    );
  }
  if (item.type === "ellipsis") {
    return (
      <li>
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
    return (
      <li>
        <PaginationPageButton
          value={item.value}
          isActive={item.value === page}
          disabled={disabled}
          onClick={() => onPageChange(item.value)}
        />
      </li>
    );
  }

  return null;
}

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
          {items.map((item) => {
            const key = getPageItemKey(item);
            return (
              <PageItemRenderer
                key={key}
                item={item}
                page={page}
                count={count}
                disabled={disabled}
                onPageChange={handleChange}
              />
            );
          })}
        </ul>
      </nav>
    );
  },
);

Pagination.displayName = "Pagination";
export { Pagination, type PaginationProps };
