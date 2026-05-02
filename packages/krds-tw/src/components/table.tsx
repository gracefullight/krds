import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

type TableDensity = "default" | "compact";

interface TableProps extends ComponentProps<"table"> {
  density?: TableDensity;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, density = "default", ...props }, ref) => {
    return (
      <div className="w-full overflow-x-auto">
        <table
          ref={ref}
          data-density={density}
          className={cn("w-full border-collapse text-left", className)}
          {...props}
        />
      </div>
    );
  },
);
Table.displayName = "Table";

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"thead">
>(({ className, ...props }, ref) => {
  return (
    <thead
      ref={ref}
      className={cn("bg-surface-secondary-subtler", className)}
      {...props}
    />
  );
});
TableHeader.displayName = "TableHeader";

const TableBody = forwardRef<HTMLTableSectionElement, ComponentProps<"tbody">>(
  ({ className, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={cn("bg-surface-white", className)}
        {...props}
      />
    );
  },
);
TableBody.displayName = "TableBody";

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"tfoot">
>(({ className, ...props }, ref) => {
  return (
    <tfoot
      ref={ref}
      className={cn("bg-surface-secondary-subtler", className)}
      {...props}
    />
  );
});
TableFooter.displayName = "TableFooter";

const TableRow = forwardRef<HTMLTableRowElement, ComponentProps<"tr">>(
  ({ className, ...props }, ref) => {
    return <tr ref={ref} className={cn("border-b", className)} {...props} />;
  },
);
TableRow.displayName = "TableRow";

const TableHead = forwardRef<HTMLTableCellElement, ComponentProps<"th">>(
  ({ className, ...props }, ref) => {
    return (
      <th
        ref={ref}
        scope="col"
        className={cn(
          "border-b border-divider-gray px-4 text-text-bolder",
          "text-label-sm font-bold",
          "py-2",
          "[table[data-density=compact]_&]:py-1",
          className,
        )}
        {...props}
      />
    );
  },
);
TableHead.displayName = "TableHead";

const TableCell = forwardRef<HTMLTableCellElement, ComponentProps<"td">>(
  ({ className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn(
          "border-b border-divider-gray-light px-4 text-text-subtle",
          "text-label-md",
          "py-3",
          "[table[data-density=compact]_&]:py-1.5",
          className,
        )}
        {...props}
      />
    );
  },
);
TableCell.displayName = "TableCell";

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  ComponentProps<"caption">
>(({ className, ...props }, ref) => {
  return (
    <caption
      ref={ref}
      className={cn("mt-2 text-label-sm text-text-subtle", className)}
      {...props}
    />
  );
});
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  type TableProps,
  type TableDensity,
};
