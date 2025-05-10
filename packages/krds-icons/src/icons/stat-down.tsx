// filepath: stat-down.tsx
import type { IconProps } from "#/types";

export function StatDown({
  size = 24,
  color = "currentColor",
  title = "StatDown",
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
        d="M11.6207 17.5592L4.11016 8.82602C3.83137 8.50185 4.06169 8 4.48925 8H19.5117C19.9393 8 20.1696 8.50189 19.8908 8.82605L12.3789 17.5593C12.1794 17.7912 11.8202 17.7912 11.6207 17.5592Z"
        fill="#0B78CB"
      />
    </svg>
  );
}
