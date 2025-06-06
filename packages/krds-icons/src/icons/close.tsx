import type { IconProps } from "#/types";

export function Close({
  size = 24,
  color = "currentColor",
  title = "Close",
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
        d="M18.6304 4.23482C18.9428 3.92239 19.4493 3.92238 19.7618 4.23479C20.0742 4.5472 20.0742 5.05373 19.7618 5.36616L13.1294 11.999L19.7657 18.6357C20.0781 18.9481 20.0781 19.4546 19.7657 19.767C19.4532 20.0795 18.9467 20.0794 18.6343 19.767L11.998 13.1304L5.3618 19.767C5.04939 20.0794 4.54285 20.0795 4.23042 19.767C3.918 19.4546 3.91798 18.9481 4.23039 18.6357L10.8667 11.999L4.2343 5.36616C3.92189 5.05373 3.9219 4.5472 4.23433 4.23479C4.54676 3.92238 5.05329 3.92239 5.3657 4.23482L11.998 10.8676L18.6304 4.23482Z"
        fill={color}
      />
    </svg>
  );
}
