"use client";

import { Select as BaseSelect } from "@base-ui-components/react/select";
import { ArrowDropDown, Globe } from "@gracefullight/krds-icons";
import { cn } from "#/utils/cn";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Language {
  code: string;
  label: string;
}

interface LanguageSwitcherProps {
  languages: Language[];
  value: string;
  onChange: (code: string) => void;
  "aria-label"?: string;
  className?: string;
}

// ---------------------------------------------------------------------------
// LanguageSwitcher
// ---------------------------------------------------------------------------

function LanguageSwitcher({
  languages,
  value,
  onChange,
  "aria-label": ariaLabel = "언어 선택",
  className,
}: LanguageSwitcherProps) {
  const currentLabel =
    languages.find((lang) => lang.code === value)?.label ?? value;

  return (
    <BaseSelect.Root
      value={value}
      onValueChange={(v) => {
        if (v != null) onChange(v as string);
      }}
    >
      <BaseSelect.Trigger
        aria-label={ariaLabel}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-md px-3",
          "border border-input-border bg-input-surface text-label-sm text-fg-basic",
          "transition-colors",
          "focus:border-input-border-active focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0",
          "data-[popup-open]:border-input-border-active",
          "disabled:cursor-not-allowed disabled:border-input-border-disabled disabled:bg-input-surface-disabled disabled:text-fg-disabled",
          "[&_svg]:size-[1.125rem] [&_svg]:shrink-0",
          className,
        )}
      >
        <Globe className="text-icon-gray" title="언어" />
        <span className="flex-1 truncate">{currentLabel}</span>
        <BaseSelect.Icon
          className={cn(
            "text-icon-gray-light transition-transform duration-200",
            "data-[popup-open]:rotate-180",
          )}
        >
          <ArrowDropDown />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>

      <BaseSelect.Portal>
        <BaseSelect.Positioner sideOffset={4} className="z-50">
          <BaseSelect.Popup
            className={cn(
              "min-w-[var(--anchor-width)] overflow-auto rounded-md-lg",
              "border border-border bg-popover text-popover-foreground shadow-2",
              "outline-none",
              "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
              "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
              "transition-[opacity,transform] duration-150 ease-out",
            )}
          >
            <BaseSelect.List className="p-1">
              {languages.map((lang) => (
                <BaseSelect.Item
                  key={lang.code}
                  value={lang.code}
                  className={cn(
                    "relative flex cursor-default items-center gap-2 rounded-sm px-3 py-2",
                    "text-body-md text-fg-basic select-none outline-none",
                    "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
                    "data-[selected]:font-medium",
                    "data-[disabled]:pointer-events-none data-[disabled]:text-fg-disabled",
                  )}
                >
                  <BaseSelect.ItemText>{lang.label}</BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

LanguageSwitcher.displayName = "LanguageSwitcher";

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { LanguageSwitcher };
export type { Language, LanguageSwitcherProps };
