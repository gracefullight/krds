// filepath: arrow-drop-down.tsx
import type { IconProps } from "#/types";

export function ArrowDropDown({
  size = 24,
  color = "currentColor",
  title = "ArrowDropDown",
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
        d="M11.621 17.5592L4.1104 8.82602C3.83161 8.50185 4.06193 8 4.48949 8H19.512C19.9396 8 20.1699 8.50189 19.8911 8.82605L12.3791 17.5593C12.1796 17.7912 11.8204 17.7912 11.621 17.5592Z"
        fill="#33363D"
      />
    </svg>
  );
}
