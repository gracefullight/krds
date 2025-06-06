import type { IconProps } from "#/types";

export function Exclamation({
  size = 24,
  color = "currentColor",
  title = "Exclamation",
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
        d="M12 3.6C7.36081 3.6 3.6 7.36081 3.6 12C3.6 16.6392 7.36081 20.4 12 20.4C16.6392 20.4 20.4 16.6392 20.4 12C20.4 7.36081 16.6392 3.6 12 3.6ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 7.5C11 7.22386 11.2239 7 11.5 7H12.5C12.7761 7 13 7.22386 13 7.5V13.5C13 13.7761 12.7761 14 12.5 14H11.5C11.2239 14 11 13.7761 11 13.5V7.5ZM11.5 15C11.2239 15 11 15.2239 11 15.5V16.5C11 16.7761 11.2239 17 11.5 17H12.5C12.7761 17 13 16.7761 13 16.5V15.5C13 15.2239 12.7761 15 12.5 15H11.5Z"
        fill="#33363D"
      />
    </svg>
  );
}
