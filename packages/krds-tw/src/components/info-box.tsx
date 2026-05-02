import { SystemInfo } from "@gracefullight/krds-icons";
import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

export type InfoBoxVariant = "primary" | "secondary";
export type InfoBoxSize = "default" | "slim";

export interface InfoBoxItemProps {
  children: ReactNode;
}

export interface InfoBoxProps extends Omit<ComponentProps<"div">, "content"> {
  variant?: InfoBoxVariant;
  size?: InfoBoxSize;
  title?: string;
  content?: ReactNode;
  icon?: ReactNode;
}

const containerStyles: Record<InfoBoxVariant, string> = {
  primary:
    "bg-surface-secondary-subtler outline outline-1 outline-stroke-secondary-light",
  secondary:
    "bg-surface-gray-subtler outline outline-1 outline-stroke-gray-light",
};

const iconColorStyles: Record<InfoBoxVariant, string> = {
  primary: "text-icon-secondary",
  secondary: "text-icon-gray",
};

const titleColorStyles: Record<InfoBoxVariant, string> = {
  primary: "text-fg-secondary",
  secondary: "text-fg-basic",
};

function InfoBoxItem({ children }: InfoBoxItemProps) {
  return (
    <div className="flex items-start gap-1 text-body-sm text-fg-subtle">
      <span aria-hidden="true">-</span>
      <span>{children}</span>
    </div>
  );
}

InfoBoxItem.displayName = "InfoBox.Item";

const InfoBox = forwardRef<HTMLDivElement, InfoBoxProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      title,
      content,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const isSlim = size === "slim";
    const defaultIcon = <SystemInfo size={20} />;
    const resolvedIcon = icon ?? defaultIcon;

    return (
      <div
        ref={ref}
        role="note"
        className={cn(
          "flex flex-col gap-3 rounded-2xl p-4",
          containerStyles[variant],
          className,
        )}
        {...props}
      >
        {isSlim ? (
          <div
            className={cn("flex items-center gap-2", iconColorStyles[variant])}
          >
            <span className="shrink-0">{resolvedIcon}</span>
            {content && (
              <p className="text-body-sm text-fg-subtle">{content}</p>
            )}
          </div>
        ) : (
          <>
            {title && (
              <div
                className={cn(
                  "flex items-center gap-2",
                  iconColorStyles[variant],
                )}
              >
                <span className="shrink-0">{resolvedIcon}</span>
                <span
                  className={cn("text-heading-xs", titleColorStyles[variant])}
                >
                  {title}
                </span>
              </div>
            )}

            {content && (
              <p className={cn("text-body-sm text-fg-subtle", title && "pl-7")}>
                {content}
              </p>
            )}

            {children && (
              <>
                {(title || content) && (
                  <hr className="border-t border-dashed border-stroke-gray-light" />
                )}
                <div
                  className={cn(
                    "flex flex-col gap-2",
                    (title || content) && "pl-7",
                  )}
                >
                  {children}
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  },
);

InfoBox.displayName = "InfoBox";

const InfoBoxWithItem = Object.assign(InfoBox, { Item: InfoBoxItem });

export { InfoBoxWithItem as InfoBox, InfoBoxItem };
