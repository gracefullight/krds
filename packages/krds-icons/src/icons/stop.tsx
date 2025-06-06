import type { IconProps } from "#/types";

export function Stop({
  size = 24,
  color = "currentColor",
  title = "Stop",
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
        d="M7.79922 4.8C7.79922 4.35817 7.44105 4 6.99922 4C6.55739 4 6.19922 4.35817 6.19922 4.8V19.2002C6.19922 19.642 6.55739 20.0002 6.99922 20.0002C7.44105 20.0002 7.79922 19.642 7.79922 19.2002V4.8ZM17.7992 4.8C17.7992 4.35817 17.441 4 16.9992 4C16.5574 4 16.1992 4.35817 16.1992 4.8V19.2002C16.1992 19.642 16.5574 20.0002 16.9992 20.0002C17.441 20.0002 17.7992 19.642 17.7992 19.2002V4.8Z"
        fill="#33363D"
      />
    </svg>
  );
}
