import { type ComponentProps, type ReactNode, forwardRef } from "react";
import {
	SystemDanger,
	SystemInfo,
	SystemSuccess,
	SystemWarning,
} from "@gracefullight/krds-icons";
import { cn } from "#/utils/cn";

type AlertSeverity = "danger" | "warning" | "success" | "info";

interface AlertProps extends Omit<ComponentProps<"div">, "title"> {
	severity?: AlertSeverity;
	title?: ReactNode;
}

const severityStyles: Record<AlertSeverity, string> = {
	danger:
		"bg-surface-danger-subtler outline outline-1 outline-stroke-danger-light",
	warning:
		"bg-surface-warning-subtler outline outline-1 outline-stroke-warning-light",
	success:
		"bg-surface-success-subtler outline outline-1 outline-stroke-success-light",
	info: "bg-surface-information-subtler outline outline-1 outline-stroke-information-light",
};

const iconColorStyles: Record<AlertSeverity, string> = {
	danger: "text-icon-danger",
	warning: "text-icon-warning",
	success: "text-icon-success",
	info: "text-icon-information",
};

const titleColorStyles: Record<AlertSeverity, string> = {
	danger: "text-fg-danger",
	warning: "text-fg-warning",
	success: "text-fg-success",
	info: "text-fg-information",
};

const iconMap: Record<AlertSeverity, typeof SystemDanger> = {
	danger: SystemDanger,
	warning: SystemWarning,
	success: SystemSuccess,
	info: SystemInfo,
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
	({ className, severity = "info", title, children, ...props }, ref) => {
		const Icon = iconMap[severity];

		return (
			<div
				ref={ref}
				role="alert"
				className={cn(
					"flex rounded-xl p-4 text-body-md text-fg-basic",
					severityStyles[severity],
					className,
				)}
				{...props}
			>
				<span className={cn("mr-2 shrink-0", iconColorStyles[severity])}>
					<Icon size={24} />
				</span>
				<div className="flex-1">
					{title && (
						<div
							className={cn("text-body-md-bold", titleColorStyles[severity])}
						>
							{title}
						</div>
					)}
					{children && <div className={cn(title && "mt-2")}>{children}</div>}
				</div>
			</div>
		);
	},
);

Alert.displayName = "Alert";
export { Alert, type AlertProps, type AlertSeverity };
