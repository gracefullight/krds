import type { IconProps } from "#/types";

export function Delete({
  size = 24,
  color = "currentColor",
  title = "Delete",
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
      <rect
        x="22"
        y="2"
        width="20"
        height="20"
        rx="10"
        transform="rotate(90 22 2)"
        fill="#CDD1D5"
      />{" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.0649 6.93451C7.75248 6.62209 7.24595 6.62209 6.93353 6.93451C6.62111 7.24693 6.62111 7.75346 6.93353 8.06588L10.8686 12.001L6.9351 15.9345C6.62268 16.2469 6.62268 16.7535 6.9351 17.0659C7.24751 17.3783 7.75405 17.3783 8.06647 17.0659L12 13.1323L15.9335 17.0659C16.246 17.3783 16.7525 17.3783 17.0649 17.0659C17.3773 16.7535 17.3773 16.2469 17.0649 15.9345L13.1314 12.001L17.0665 8.06588C17.3789 7.75346 17.3789 7.24693 17.0665 6.93451C16.754 6.62209 16.2475 6.62209 15.9351 6.93451L12 10.8696L8.0649 6.93451Z"
        fill="#33363D"
      />
    </svg>
  );
}
