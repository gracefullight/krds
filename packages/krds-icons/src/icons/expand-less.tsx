import type { IconProps } from "#/types";

export function ExpandLess({
  size = 24,
  color = "currentColor",
  title = "ExpandLess",
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
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5229 22 12C22 6.47719 17.5228 2 12 2C6.47715 2 2 6.4772 2 12ZM12 20.4C7.36081 20.4 3.6 16.6392 3.6 12C3.6 7.36085 7.36081 3.6 12 3.6C16.6391 3.6 20.4 7.36085 20.4 12C20.4 16.6392 16.6392 20.4 12 20.4ZM14.8342 13.5657C15.1466 13.8781 15.6531 13.8781 15.9656 13.5657C16.278 13.2533 16.278 12.7467 15.9656 12.4343L12.5715 9.0402C12.259 8.72778 11.7525 8.72778 11.4401 9.0402L8.04597 12.4343C7.73355 12.7467 7.73355 13.2533 8.04597 13.5657C8.35839 13.8781 8.86492 13.8781 9.17734 13.5657L12.0058 10.7373L14.8342 13.5657Z"
        fill="#33363D"
      />
    </svg>
  );
}
