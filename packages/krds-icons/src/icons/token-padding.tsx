import type { IconProps } from "#/types";

export function TokenPadding({
  size = 24,
  color = "currentColor",
  title = "TokenPadding",
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
        d="M3.00073 3.80079C3.00073 3.35897 3.3589 3.00079 3.80073 3.00079H19.2C20.1941 3.00079 21 3.80668 21 4.80079V8.00001C21 8.99412 20.1941 9.80001 19.2 9.80001H9.79995V19.2C9.79995 20.1941 8.99406 21 7.99995 21H4.80073C3.80662 21 3.00073 20.1941 3.00073 19.2V3.80079ZM9.33132 8.20001H19.2C19.3104 8.20001 19.4 8.11047 19.4 8.00001V4.80079C19.4 4.69034 19.3104 4.60079 19.2 4.60079H5.7321L9.33132 8.20001ZM4.60073 5.73216V19.2C4.60073 19.3105 4.69028 19.4 4.80073 19.4H7.99995C8.11041 19.4 8.19995 19.3105 8.19995 19.2V9.33138L4.60073 5.73216Z"
        fill="#33363D"
      />
    </svg>
  );
}
