import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface BadgeProps extends ComponentProps<"span"> {
	count?: number;
	maxCount?: number;
	dot?: boolean;
	color?: "primary" | "danger" | "warning" | "success";
	children?: ReactNode;
}

const colorStyles = {
	primary: "bg-element-primary text-fg-inverse-static",
	danger: "bg-element-danger text-fg-inverse-static",
	warning: "bg-element-warning text-fg-basic",
	success: "bg-element-success text-fg-inverse-static",
} as const;

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	(
		{
			className,
			count,
			maxCount = 99,
			dot = false,
			color = "danger",
			children,
			...props
		},
		ref,
	) => {
		const showBadge = dot || (count !== undefined && count > 0);
		const displayCount =
			count !== undefined && count > maxCount ? `${maxCount}+` : count;

		if (!children) {
			return (
				<span
					ref={ref}
					className={cn(
						dot
							? "inline-block size-2 rounded-full"
							: "inline-flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-label-xs font-bold",
						colorStyles[color],
						className,
					)}
					{...props}
				>
					{!dot && displayCount}
				</span>
			);
		}

		return (
			<span
				ref={ref}
				className={cn("relative inline-flex", className)}
				{...props}
			>
				{children}
				{showBadge && (
					<span
						className={cn(
							"absolute -top-1 -right-1",
							dot
								? "size-2 rounded-full"
								: "inline-flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-label-xs font-bold",
							colorStyles[color],
						)}
					>
						{!dot && displayCount}
					</span>
				)}
			</span>
		);
	},
);

Badge.displayName = "Badge";
export { Badge, type BadgeProps };
