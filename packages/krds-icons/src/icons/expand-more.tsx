import type { IconProps } from "#/types";

export function ExpandMore({
  size = 24,
  color = "currentColor",
  title = "ExpandMore",
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
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5229 22 12C22 6.47719 17.5228 2 12 2C6.47715 2 2 6.4772 2 12ZM12 20.4C7.36081 20.4 3.6 16.6392 3.6 12C3.6 7.36085 7.36081 3.6 12 3.6C16.6391 3.6 20.4 7.36085 20.4 12C20.4 16.6392 16.6392 20.4 12 20.4ZM10.2351 14.8283C9.92268 15.1408 9.92268 15.6473 10.2351 15.9597C10.5475 16.2721 11.054 16.2721 11.3665 15.9597L14.7606 12.5656C15.073 12.2532 15.073 11.7466 14.7606 11.4342L11.3665 8.04011C11.054 7.72769 10.5475 7.72769 10.2351 8.04011C9.92268 8.35253 9.92268 8.85906 10.2351 9.17148L13.0635 11.9999L10.2351 14.8283Z"
        fill="#33363D"
      />
    </svg>
  );
}
