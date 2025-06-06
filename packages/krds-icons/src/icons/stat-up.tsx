import type { IconProps } from "#/types";

export function StatUp({
  size = 24,
  color = "currentColor",
  title = "StatUp",
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
        d="M12.3803 6.44058L19.8908 15.1738C20.1696 15.498 19.9393 15.9998 19.5117 15.9998L4.48925 15.9998C4.06166 15.9998 3.83135 15.4979 4.11018 15.1738L11.6221 6.44055C11.8216 6.20861 12.1808 6.20862 12.3803 6.44058Z"
        fill="#D63D4A"
      />
    </svg>
  );
}
