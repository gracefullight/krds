"use client";

import { Search as SearchIcon } from "@gracefullight/krds-icons";
import {
  type ChangeEvent,
  type ComponentProps,
  type FormEvent,
  useCallback,
  useState,
} from "react";
import { cn } from "#/utils/cn";

type SearchSize = "small" | "medium" | "large";

interface SearchProps
  extends Omit<
    ComponentProps<"input">,
    "size" | "type" | "onChange" | "onSubmit"
  > {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSubmit?: (query: string) => void;
  placeholder?: string;
  size?: SearchSize;
  disabled?: boolean;
  "aria-label"?: string;
}

const sizeStyles: Record<SearchSize, string> = {
  small: "h-8 px-3 text-body-sm",
  medium: "h-10 px-4 text-body-md",
  large: "h-12 px-4 text-body-lg",
};

const buttonSizeStyles: Record<SearchSize, string> = {
  small: "size-8",
  medium: "size-10",
  large: "size-12",
};

const iconSizes: Record<SearchSize, number> = {
  small: 16,
  medium: 20,
  large: 24,
};

function Search({
  className,
  value,
  defaultValue,
  onChange,
  onSubmit,
  placeholder = "검색어를 입력하세요",
  size = "medium",
  disabled = false,
  "aria-label": ariaLabel,
  id,
  ...props
}: SearchProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const currentValue = isControlled ? value : internalValue;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit?.(currentValue ?? "");
    },
    [currentValue, onSubmit],
  );

  return (
    <search>
      <form
        onSubmit={handleSubmit}
        className={cn("flex items-center", className)}
      >
        <input
          {...props}
          id={id}
          type="search"
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel}
          className={cn(
            "w-full rounded-l-md-lg border-y border-l bg-input-surface text-fg-basic transition-colors",
            "placeholder:text-fg-disabled",
            "focus:border-input-border-active focus:outline-none",
            "disabled:cursor-not-allowed disabled:border-input-border-disabled disabled:bg-input-surface-disabled disabled:text-fg-disabled",
            "border-input-border",
            "[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden",
            sizeStyles[size],
          )}
        />
        <button
          type="submit"
          disabled={disabled}
          aria-label="검색"
          className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-r-md-lg",
            "bg-btn-primary-fill text-fg-inverse-static transition-colors",
            "hover:bg-btn-primary-fill-hover active:bg-btn-primary-fill-pressed",
            "disabled:cursor-not-allowed disabled:bg-btn-disabled-fill disabled:text-fg-disabled-on",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
            buttonSizeStyles[size],
          )}
        >
          <SearchIcon size={iconSizes[size]} color="currentColor" title="" />
        </button>
      </form>
    </search>
  );
}

Search.displayName = "Search";
export { Search, type SearchProps, type SearchSize };
