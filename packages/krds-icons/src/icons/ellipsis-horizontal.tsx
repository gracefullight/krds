import type { IconProps } from "#/types";

export function EllipsisHorizontal({
  size = 24,
  color = "currentColor",
  title = "EllipsisHorizontal",
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
        d="M4 12.0001C4 11.2269 4.6268 10.6001 5.4 10.6001C6.1732 10.6001 6.8 11.2269 6.8 12.0001C6.8 12.7733 6.1732 13.4001 5.4 13.4001C4.6268 13.4001 4 12.7733 4 12.0001ZM10.6016 12.0001C10.6016 11.2269 11.2284 10.6001 12.0016 10.6001C12.7748 10.6001 13.4016 11.2269 13.4016 12.0001C13.4016 12.7733 12.7748 13.4001 12.0016 13.4001C11.2284 13.4001 10.6016 12.7733 10.6016 12.0001ZM18.5992 10.6001C17.826 10.6001 17.1992 11.2269 17.1992 12.0001C17.1992 12.7733 17.826 13.4001 18.5992 13.4001C19.3724 13.4001 19.9992 12.7733 19.9992 12.0001C19.9992 11.2269 19.3724 10.6001 18.5992 10.6001Z"
        fill="#33363D"
      />
    </svg>
  );
}
