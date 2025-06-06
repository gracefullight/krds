import type { IconProps } from "#/types";

export function PanelOpen({
  size = 24,
  color = "currentColor",
  title = "PanelOpen",
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
        d="M17.6648 19.7948C17.9932 20.0904 18.499 20.0638 18.7946 19.7354C19.0902 19.407 19.0636 18.9011 18.7352 18.6056L11.3959 12L18.7352 5.39464C19.0636 5.09908 19.0902 4.59324 18.7946 4.26484C18.4991 3.93643 17.9932 3.9098 17.6648 4.20537L9.66482 11.4054C9.49625 11.5571 9.39999 11.7732 9.39999 12C9.39999 12.2268 9.49624 12.4429 9.66481 12.5946L17.6648 19.7948ZM7.6 4.8C7.6 4.35817 7.24183 4 6.8 4C6.35817 4 6 4.35817 6 4.8V19.2002C6 19.642 6.35817 20.0002 6.8 20.0002C7.24183 20.0002 7.6 19.642 7.6 19.2002V4.8Z"
        fill="#33363D"
      />
    </svg>
  );
}
