import type { IconProps } from "#/types";

export function FigmaShadow({
  size = 24,
  color = "currentColor",
  title = "FigmaShadow",
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
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5229 22 12C22 6.47719 17.5228 2 12 2C6.47715 2 2 6.4772 2 12ZM12 20.4C7.36081 20.4 3.6 16.6392 3.6 12C3.6 7.36085 7.36081 3.6 12 3.6C14.6297 3.6 16.9771 4.8084 18.5174 6.70019H12V8.30019H19.5434C19.7625 8.74604 19.9432 9.21414 20.0813 9.70019H12V11.3002H20.3713C20.3903 11.5309 20.4 11.7643 20.4 12C20.4 12.2358 20.3903 12.4693 20.3712 12.7002H12V14.3002H20.0812C19.9431 14.7862 19.7623 15.2544 19.5432 15.7002H12V17.3002H18.5171C16.9768 19.1918 14.6295 20.4 12 20.4Z"
        fill="#33363D"
      />
    </svg>
  );
}
