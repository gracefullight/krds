import type { IconProps } from "#/types";

export function SystemWarning({
  size = 24,
  color = "currentColor",
  title = "SystemWarning",
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
        d="M11.1704 2.49351C11.5391 1.8355 12.4609 1.8355 12.8296 2.49351L22.3702 19.5195C22.7389 20.1775 22.278 21 21.5406 21H2.45939C1.72195 21 1.26105 20.1775 1.62977 19.5195L11.1704 2.49351Z"
        fill={color}
      />{" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5 8C11.2239 8 11 8.22386 11 8.5V14.5C11 14.7761 11.2239 15 11.5 15H12.5C12.7761 15 13 14.7761 13 14.5V8.5C13 8.22386 12.7761 8 12.5 8H11.5ZM11.5 16C11.2239 16 11 16.2239 11 16.5V17.5C11 17.7761 11.2239 18 11.5 18H12.5C12.7761 18 13 17.7761 13 17.5V16.5C13 16.2239 12.7761 16 12.5 16H11.5Z"
        fill="white"
      />
    </svg>
  );
}
