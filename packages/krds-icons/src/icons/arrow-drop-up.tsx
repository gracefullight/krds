import type { IconProps } from "#/types";

export function ArrowDropUp({
  size = 24,
  color = "currentColor",
  title = "ArrowDropUp",
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
        d="M12.3791 6.4407L19.8896 15.1739C20.1684 15.4981 19.9381 15.9999 19.5105 15.9999L4.48803 15.9999C4.06044 15.9999 3.83013 15.498 4.10896 15.1739L11.6209 6.44067C11.8204 6.20873 12.1796 6.20874 12.3791 6.4407Z"
        fill="#33363D"
      />
    </svg>
  );
}
