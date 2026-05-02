"use client";

import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";
import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

type TabsVariant = "underline" | "pill";
type TabsSize = "small" | "medium" | "large";

// ---- Root ----------------------------------------------------------------

interface TabsProps extends ComponentProps<typeof BaseTabs.Root> {
  variant?: TabsVariant;
  size?: TabsSize;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, variant = "underline", size = "medium", ...props }, ref) => {
    return (
      <BaseTabs.Root
        ref={ref}
        className={cn("flex flex-col", className)}
        data-variant={variant}
        data-size={size}
        {...props}
      />
    );
  },
);

Tabs.displayName = "Tabs";

// ---- List ----------------------------------------------------------------

interface TabsListProps extends ComponentProps<typeof BaseTabs.List> {
  variant?: TabsVariant;
  size?: TabsSize;
}

const listVariantStyles: Record<TabsVariant, string> = {
  underline: "border-b border-stroke-gray relative flex flex-row",
  pill: "bg-surface-gray-subtler rounded-md-lg flex flex-row gap-1 p-1",
};

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant = "underline", size, ...props }, ref) => {
    return (
      <BaseTabs.List
        ref={ref}
        className={cn(listVariantStyles[variant], className)}
        {...props}
      />
    );
  },
);

TabsList.displayName = "TabsList";

// ---- Trigger (Tab) -------------------------------------------------------

interface TabsTriggerProps extends ComponentProps<typeof BaseTabs.Tab> {
  variant?: TabsVariant;
  size?: TabsSize;
}

const triggerSizeStyles: Record<TabsSize, string> = {
  small: "px-3 py-2 text-label-sm",
  medium: "px-4 py-[11px] text-label-md",
  large: "px-5 py-[13.5px] text-label-lg",
};

const triggerVariantStyles: Record<TabsVariant, string> = {
  underline: [
    "relative z-0 border-b-2 border-transparent -mb-px",
    "text-fg-subtle font-bold",
    "hover:text-fg-basic hover:bg-surface-gray-subtler",
    "data-[selected]:text-fg-primary data-[selected]:border-stroke-primary",
    "disabled:text-fg-disabled disabled:cursor-not-allowed",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
    "transition-colors select-none",
  ].join(" "),
  pill: [
    "rounded-md text-fg-subtle font-bold",
    "hover:text-fg-basic hover:bg-surface-gray-subtle",
    "data-[selected]:bg-surface-white data-[selected]:text-fg-primary data-[selected]:shadow-1",
    "disabled:text-fg-disabled disabled:cursor-not-allowed",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
    "transition-colors select-none",
  ].join(" "),
};

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, variant = "underline", size = "medium", ...props }, ref) => {
    return (
      <BaseTabs.Tab
        ref={ref}
        className={cn(
          triggerVariantStyles[variant],
          triggerSizeStyles[size],
          className,
        )}
        {...props}
      />
    );
  },
);

TabsTrigger.displayName = "TabsTrigger";

// ---- Indicator -----------------------------------------------------------

interface TabsIndicatorProps extends ComponentProps<typeof BaseTabs.Indicator> {
  variant?: TabsVariant;
}

const TabsIndicator = forwardRef<HTMLSpanElement, TabsIndicatorProps>(
  ({ className, variant = "underline", ...props }, ref) => {
    if (variant !== "underline") return null;
    return (
      <BaseTabs.Indicator
        ref={ref}
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-stroke-primary transition-[left,width] duration-200",
          className,
        )}
        {...props}
      />
    );
  },
);

TabsIndicator.displayName = "TabsIndicator";

// ---- Panel ---------------------------------------------------------------

type TabsContentProps = ComponentProps<typeof BaseTabs.Panel>;

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseTabs.Panel
        ref={ref}
        className={cn(
          "mt-4 text-fg-basic",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
          className,
        )}
        {...props}
      />
    );
  },
);

TabsContent.displayName = "TabsContent";

// ---- Exports -------------------------------------------------------------

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsIndicator,
  TabsContent,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsIndicatorProps,
  type TabsContentProps,
  type TabsVariant,
  type TabsSize,
};
