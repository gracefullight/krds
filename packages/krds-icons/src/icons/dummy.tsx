import type { IconProps } from "#/types";

export function Dummy({
  size = 24,
  color = "currentColor",
  title = "Dummy",
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
      <g clip-path="url(#clip0_1446_129192)">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.8 3C3.80589 3 3 3.80589 3 4.8V19.2C3 20.1941 3.80589 21 4.8 21H19.2C20.1941 21 21 20.1941 21 19.2V4.8C21 3.80589 20.1941 3 19.2 3H4.8ZM4.6 4.8C4.6 4.68954 4.68954 4.6 4.8 4.6H18.268L4.6 18.268V4.8ZM5.73078 19.4H19.2C19.3105 19.4 19.4 19.3105 19.4 19.2V5.73078L5.73078 19.4Z"
          fill="#33363D"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <clipPath id="clip0_1446_129192">
          {" "}
          <rect width="24" height="24" fill="white" />{" "}
        </clipPath>{" "}
      </defs>
    </svg>
  );
}
