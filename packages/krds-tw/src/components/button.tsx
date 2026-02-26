import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

interface ButtonProps extends ComponentProps<"button"> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"bg-btn-primary-fill text-fg-inverse-static hover:bg-btn-primary-fill-hover active:bg-btn-primary-fill-pressed disabled:bg-btn-disabled-fill disabled:text-fg-disabled-on",
	secondary:
		"bg-btn-secondary-fill text-fg-primary outline outline-1 outline-btn-secondary-border hover:bg-btn-secondary-fill-hover active:bg-btn-secondary-fill-pressed disabled:bg-btn-disabled-fill disabled:text-fg-disabled-on disabled:outline-none",
	tertiary:
		"bg-btn-tertiary-fill text-fg-basic outline outline-1 outline-btn-tertiary-border hover:bg-btn-tertiary-fill-hover active:bg-btn-tertiary-fill-pressed disabled:bg-btn-disabled-fill disabled:text-fg-disabled-on disabled:outline-none",
	text: "bg-transparent text-fg-basic rounded-sm hover:bg-btn-text-fill-hover active:bg-btn-text-fill-pressed disabled:bg-transparent disabled:text-fg-disabled",
};

const sizeStyles: Record<ButtonSize, string> = {
	xsmall: "px-2.5 py-[4.5px] text-label-xs",
	small: "px-3 py-[8.5px] text-label-sm",
	medium: "px-4 py-[11px] text-label-md",
	large: "px-5 py-[13.5px] text-label-lg",
	xlarge: "px-6 py-[17.5px] text-label-lg",
};

const textSizeStyles: Record<ButtonSize, string> = {
	xsmall: "px-0.5 py-0 text-label-xs",
	small: "px-0.5 py-[0.5px] text-label-sm",
	medium: "px-0.5 py-[3px] text-label-md",
	large: "px-0.5 py-[5.5px] text-label-lg",
	xlarge: "px-0.5 py-[5.5px] text-label-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = "primary",
			size = "medium",
			startIcon,
			endIcon,
			children,
			disabled,
			...props
		},
		ref,
	) => {
		const sizes = variant === "text" ? textSizeStyles : sizeStyles;

		return (
			<button
				ref={ref}
				disabled={disabled}
				className={cn(
					"inline-flex items-center justify-center rounded-md-lg font-bold shadow-none transition-colors select-none",
					"disabled:cursor-not-allowed",
					variantStyles[variant],
					sizes[size],
					className,
				)}
				{...props}
			>
				{startIcon && <span className="mr-1">{startIcon}</span>}
				{children}
				{endIcon && <span className="ml-1">{endIcon}</span>}
			</button>
		);
	},
);

Button.displayName = "Button";
export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
