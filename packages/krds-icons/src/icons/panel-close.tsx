import type { IconProps } from "#/types";

export function PanelClose({
  size = 24,
  color = "currentColor",
  title = "PanelClose",
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <title>{title}</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.33519 19.7948C6.00678 20.0904 5.50095 20.0638 5.20538 19.7354C4.90981 19.407 4.93642 18.9011 5.26483 18.6056L12.6041 12L5.26484 5.39464C4.93643 5.09908 4.9098 4.59324 5.20537 4.26484C5.50094 3.93643 6.00677 3.9098 6.33518 4.20537L14.3352 11.4054C14.5037 11.5571 14.6 11.7732 14.6 12C14.6 12.2268 14.5038 12.4429 14.3352 12.5946L6.33519 19.7948ZM16.4 4.8C16.4 4.35817 16.7582 4 17.2 4C17.6418 4 18 4.35817 18 4.8V19.2002C18 19.642 17.6418 20.0002 17.2 20.0002C16.7582 20.0002 16.4 19.642 16.4 19.2002V4.8Z"
        fill="#33363D"
      />
    </svg>
  );
}
