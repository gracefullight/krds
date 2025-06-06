import type { IconProps } from "#/types";

export function ArrowLeft({
  size = 24,
  color = "currentColor",
  title = "ArrowLeft",
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
        d="M15.5947 19.7351C15.2991 20.0635 14.7933 20.0902 14.4649 19.7946L6.46486 12.5944C6.29629 12.4427 6.20004 12.2265 6.20004 11.9998C6.20004 11.773 6.2963 11.5568 6.46487 11.4051L14.4649 4.20513C14.7933 3.90956 15.2991 3.93618 15.5947 4.26459C15.8902 4.593 15.8636 5.09883 15.5352 5.3944L8.19591 11.9998L15.5352 18.6053C15.8636 18.9009 15.8902 19.4067 15.5947 19.7351Z"
        fill={color}
      />
    </svg>
  );
}
