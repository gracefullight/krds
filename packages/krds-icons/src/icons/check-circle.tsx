import type { IconProps } from "#/types";

export function CheckCircle({
  size = 24,
  color = "currentColor",
  title = "CheckCircle",
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
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
        fill="#256EF4"
      />{" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.7528 8.33951C16.1176 8.58879 16.2113 9.08659 15.962 9.45138L11.862 15.4514C11.7277 15.6479 11.5129 15.7744 11.2759 15.7966C11.0389 15.8187 10.8043 15.7341 10.636 15.5659L8.13439 13.0659C7.82188 12.7536 7.82172 12.247 8.13404 11.9345C8.44636 11.622 8.95289 11.6218 9.26541 11.9342L11.085 13.7526L14.6409 8.54868C14.8902 8.18388 15.388 8.09024 15.7528 8.33951Z"
        fill="white"
      />
    </svg>
  );
}
