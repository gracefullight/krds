import type { ReactNode } from "react";
import { cn } from "#/utils/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StructuredListItem {
  /** 항목 레이블 (dt) */
  label: string;
  /** 항목 값 (dd) */
  value: ReactNode;
}

export interface StructuredListColumn {
  /** 열 헤더 텍스트 (th[scope="col"]) */
  header: string;
  /** 열 키 (접근자) */
  key: string;
}

export type StructuredListVariant = "default" | "table";

interface StructuredListBaseProps {
  className?: string;
}

interface StructuredListDefaultProps extends StructuredListBaseProps {
  variant?: "default";
  items: StructuredListItem[];
  columns?: never;
  rows?: never;
  caption?: never;
}

interface StructuredListTableProps extends StructuredListBaseProps {
  variant: "table";
  columns: StructuredListColumn[];
  rows: Array<{
    rowLabel?: string;
    cells: Record<string, ReactNode>;
  }>;
  caption: string;
  items?: never;
}

export type StructuredListProps =
  | StructuredListDefaultProps
  | StructuredListTableProps;

// ─── Sub-components ──────────────────────────────────────────────────────────

interface DefaultVariantProps {
  items: StructuredListItem[];
  className?: string;
}

function DefaultVariant({ items, className }: DefaultVariantProps) {
  return (
    <dl
      className={cn("m-0 w-full border-t border-divider-gray p-0", className)}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-row gap-4 border-b border-divider-gray py-4",
            "max-md:flex-col max-md:gap-1 max-md:py-3",
          )}
        >
          <dt
            className={cn(
              "w-40 min-w-40 shrink-0 text-label-md font-bold text-fg-basic",
              "max-md:w-auto max-md:min-w-0 max-md:text-label-sm",
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "m-0 flex-1 break-words text-body-md text-fg-bolder",
              "max-md:text-body-md",
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

interface TableVariantProps {
  columns: StructuredListColumn[];
  rows: Array<{
    rowLabel?: string;
    cells: Record<string, ReactNode>;
  }>;
  caption: string;
  className?: string;
}

function TableVariant({
  columns,
  rows,
  caption,
  className,
}: TableVariantProps) {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <table
        aria-label={caption}
        className="w-full border-collapse border-t border-divider-gray-dark"
        style={{ tableLayout: "fixed" }}
      >
        <caption className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap [clip-path:inset(50%)] [clip:rect(0_0_0_0)]">
          {caption}
        </caption>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  "border-b border-divider-gray border-r border-r-divider-gray-light",
                  "bg-surface-gray-subtler px-4 py-3 text-center align-middle",
                  "whitespace-nowrap text-label-md font-bold text-fg-subtle",
                  "last:border-r-0",
                  "max-md:px-3 max-md:py-2.5 max-md:text-label-sm",
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={row.rowLabel ?? `row-${rowIdx}`}
              className="not-last:border-b not-last:border-divider-gray"
            >
              {columns.map((col, colIdx) =>
                colIdx === 0 ? (
                  <th
                    key={col.key}
                    scope="row"
                    className={cn(
                      "w-40 border-r border-divider-gray-light",
                      "bg-surface-gray-subtler px-4 py-3 text-left align-middle",
                      "whitespace-nowrap text-label-md font-bold text-fg-subtle",
                      "max-md:w-30 max-md:px-3 max-md:py-2.5 max-md:text-label-sm",
                    )}
                  >
                    {row.rowLabel ?? row.cells[col.key]}
                  </th>
                ) : (
                  <td
                    key={col.key}
                    className={cn(
                      "border-r border-divider-gray-light px-4 py-3",
                      "break-words text-left align-middle text-body-md text-fg-bolder",
                      "last:border-r-0",
                      "max-md:px-3 max-md:py-2.5 max-md:text-body-md",
                    )}
                  >
                    {row.cells[col.key]}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function StructuredList(props: StructuredListProps) {
  const { variant = "default", className } = props;

  if (variant === "table") {
    const { columns, rows, caption } = props as StructuredListTableProps;
    return (
      <TableVariant
        columns={columns}
        rows={rows}
        caption={caption}
        className={className}
      />
    );
  }

  const { items } = props as StructuredListDefaultProps;
  return <DefaultVariant items={items} className={className} />;
}
