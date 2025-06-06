import type { IconProps } from "#/types";

export function BtnMore({
  size = 24,
  color = "currentColor",
  title = "BtnMore",
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
        d="M12.7992 3.8C12.7992 3.35817 12.441 3 11.9992 3C11.5574 3 11.1992 3.35817 11.1992 3.8V11.2002H3.8C3.35817 11.2002 3 11.5584 3 12.0002C3 12.442 3.35817 12.8002 3.8 12.8002H11.1992V20.2002C11.1992 20.642 11.5574 21.0002 11.9992 21.0002C12.441 21.0002 12.7992 20.642 12.7992 20.2002V12.8002H20.2C20.6418 12.8002 21 12.442 21 12.0002C21 11.5584 20.6418 11.2002 20.2 11.2002H12.7992V3.8Z"
        fill="#33363D"
      />
    </svg>
  );
}
