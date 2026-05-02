"use client";

import { Select as BaseSelect } from "@base-ui-components/react/select";
import { ArrowDropDown, RoundCheck } from "@gracefullight/krds-icons";
import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type SelectSize = "small" | "medium" | "large";

// ---------------------------------------------------------------------------
// Composable subcomponents
// ---------------------------------------------------------------------------

/**
 * Root — thin wrapper around Base UI Select.Root.
 * Value is typed as `string` for common single-select usage.
 */
type SelectProps = Omit<
  ComponentProps<typeof BaseSelect.Root>,
  "value" | "defaultValue" | "onValueChange"
> & {
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
};

function Select({ value, defaultValue, onValueChange, ...props }: SelectProps) {
  // Base UI types onValueChange with `unknown` value for generic flexibility.
  // We narrow to `string | null` at the wrapper boundary.
  const handleValueChange = onValueChange as
    | ComponentProps<typeof BaseSelect.Root>["onValueChange"]
    | undefined;

  return (
    <BaseSelect.Root
      value={value}
      defaultValue={defaultValue ?? null}
      onValueChange={handleValueChange}
      {...props}
    />
  );
}
Select.displayName = "Select";

// ---------------------------------------------------------------------------

type SelectTriggerProps = ComponentProps<typeof BaseSelect.Trigger> & {
  size?: SelectSize;
  error?: boolean;
};

const sizeStyles: Record<SelectSize, string> = {
  small: "h-8 px-3 text-label-sm [&_svg]:size-4",
  medium: "h-10 px-4 text-label-md [&_svg]:size-5",
  large: "h-12 px-4 text-label-lg [&_svg]:size-6",
};

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, size = "medium", error = false, children, ...props }, ref) => (
    <BaseSelect.Trigger
      ref={ref}
      className={cn(
        "relative inline-flex w-full items-center justify-between gap-2 rounded-md-lg",
        "border bg-input-surface text-fg-basic transition-colors",
        "focus:border-input-border-active focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0",
        "disabled:cursor-not-allowed disabled:border-input-border-disabled disabled:bg-input-surface-disabled disabled:text-fg-disabled",
        "data-[popup-open]:border-input-border-active",
        error ? "border-input-border-error" : "border-input-border",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </BaseSelect.Trigger>
  ),
);
SelectTrigger.displayName = "SelectTrigger";

// ---------------------------------------------------------------------------

/**
 * Displays the selected value text.
 * `placeholder` is rendered via children when no value is selected.
 */
type SelectValueProps = ComponentProps<typeof BaseSelect.Value> & {
  /** Text shown when no item is selected. */
  placeholder?: string;
};

const SelectValue = forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, placeholder, children, ...props }, ref) => (
    <BaseSelect.Value
      ref={ref}
      className={cn("flex-1 truncate text-left", className)}
      {...props}
    >
      {/* Base UI renders children or falls back to the selected item label */}
      {children ??
        ((value: string | null) =>
          value == null || value === "" ? (
            <span className="text-fg-disabled">{placeholder}</span>
          ) : undefined)}
    </BaseSelect.Value>
  ),
);
SelectValue.displayName = "SelectValue";

// ---------------------------------------------------------------------------

type SelectIconProps = ComponentProps<typeof BaseSelect.Icon>;

const SelectIconTrigger = forwardRef<HTMLSpanElement, SelectIconProps>(
  ({ className, children, ...props }, ref) => (
    <BaseSelect.Icon
      ref={ref}
      className={cn(
        "shrink-0 text-icon-gray-light transition-transform duration-200",
        "data-[popup-open]:rotate-180",
        className,
      )}
      {...props}
    >
      {children ?? <ArrowDropDown />}
    </BaseSelect.Icon>
  ),
);
SelectIconTrigger.displayName = "SelectIconTrigger";

// ---------------------------------------------------------------------------

type SelectContentProps = ComponentProps<typeof BaseSelect.Popup> & {
  positionerProps?: ComponentProps<typeof BaseSelect.Positioner>;
};

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, positionerProps, ...props }, ref) => (
    <BaseSelect.Portal>
      <BaseSelect.Positioner
        sideOffset={4}
        {...positionerProps}
        className={cn("z-50", positionerProps?.className)}
      >
        <BaseSelect.Popup
          ref={ref}
          className={cn(
            "min-w-[var(--anchor-width)] overflow-auto rounded-md-lg",
            "border border-border bg-popover text-popover-foreground shadow-2",
            "outline-none",
            "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
            "transition-[opacity,transform] duration-150 ease-out",
            className,
          )}
          {...props}
        >
          <BaseSelect.List className="p-1">{children}</BaseSelect.List>
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  ),
);
SelectContent.displayName = "SelectContent";

// ---------------------------------------------------------------------------

type SelectItemProps = ComponentProps<typeof BaseSelect.Item> & {
  children?: ReactNode;
};

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <BaseSelect.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-3 py-2",
        "text-body-md text-fg-basic select-none outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[selected]:font-medium",
        "data-[disabled]:pointer-events-none data-[disabled]:text-fg-disabled",
        className,
      )}
      {...props}
    >
      <BaseSelect.ItemIndicator className="shrink-0 text-fg-primary">
        <RoundCheck className="size-4" />
      </BaseSelect.ItemIndicator>
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
    </BaseSelect.Item>
  ),
);
SelectItem.displayName = "SelectItem";

// ---------------------------------------------------------------------------
// SimpleSelect — single-prop convenience wrapper (krds-mui parity)
// ---------------------------------------------------------------------------

interface SimpleSelectItem {
  value: string;
  label: string;
}

interface SimpleSelectProps {
  items: SimpleSelectItem[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  name?: string;
  id?: string;
  "aria-label"?: string;
  size?: SelectSize;
  className?: string;
}

function SimpleSelect({
  items,
  value,
  onChange,
  placeholder = "선택하세요",
  disabled = false,
  error = false,
  name,
  id,
  "aria-label": ariaLabel,
  size = "medium",
  className,
}: SimpleSelectProps) {
  return (
    <Select
      value={value ?? null}
      onValueChange={(v) => {
        if (v != null) onChange?.(v);
      }}
      disabled={disabled}
      name={name}
    >
      <SelectTrigger
        id={id}
        size={size}
        error={error}
        aria-label={ariaLabel}
        className={className}
      >
        <SelectValue placeholder={placeholder} />
        <SelectIconTrigger />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
SimpleSelect.displayName = "SimpleSelect";

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIconTrigger,
  SelectContent,
  SelectItem,
  SimpleSelect,
};

export type {
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectIconProps,
  SelectContentProps,
  SelectItemProps,
  SimpleSelectProps,
  SimpleSelectItem,
  SelectSize,
};
