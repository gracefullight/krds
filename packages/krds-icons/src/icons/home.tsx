import type { IconProps } from "#/types";

export function Home({
  size = 24,
  color = "currentColor",
  title = "Home",
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
        d="M3.3499 10.4006L11.3499 3.55619C11.7242 3.23599 12.2758 3.23599 12.6501 3.55619L20.6501 10.4006C20.8722 10.5906 21 10.8682 21 11.1605V20.2C21 20.7523 20.5523 21.2 20 21.2H15.25C14.6977 21.2 14.25 20.7523 14.25 20.2V15.7002C14.25 15.424 14.0261 15.2002 13.75 15.2002H10.25C9.97386 15.2002 9.75 15.424 9.75 15.7002V20.2C9.75 20.7523 9.30228 21.2 8.75 21.2H4C3.44772 21.2 3 20.7523 3 20.2V11.1605C3 10.8682 3.12784 10.5906 3.3499 10.4006Z"
        fill={color}
      />
    </svg>
  );
}
