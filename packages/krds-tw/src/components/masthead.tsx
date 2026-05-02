import { Flag } from "@gracefullight/krds-icons";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "#/utils/cn";

interface MastheadProps extends ComponentProps<"div"> {
  text?: string;
  icon?: ReactNode;
}

const DEFAULT_TEXT = "이 누리집은 대한민국 공식 전자정부 누리집입니다.";

function Masthead({
  className,
  text = DEFAULT_TEXT,
  icon,
  ...props
}: MastheadProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-start gap-2 bg-surface-secondary-subtler py-[4.5px] px-4 md:px-0",
        className,
      )}
      {...props}
    >
      <span className="shrink-0 [&_svg]:size-6">
        {icon ?? <Flag size={24} />}
      </span>
      <span className="text-body-sm text-fg-basic">{text}</span>
    </div>
  );
}

Masthead.displayName = "Masthead";
export { Masthead, type MastheadProps };
