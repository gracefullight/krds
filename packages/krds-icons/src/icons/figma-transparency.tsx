import type { IconProps } from "#/types";

export function FigmaTransparency({
  size = 24,
  color = "currentColor",
  title = "FigmaTransparency",
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
      <path d="M3 4C3 3.44772 3.44772 3 4 3H6.6V6.6H3V4Z" fill="#33363D" />{" "}
      <path d="M3 10.2002H6.6V13.8002H3V10.2002Z" fill="#33363D" />{" "}
      <path
        d="M6.6 17.3999H3V19.9999C3 20.5522 3.44772 20.9999 4 20.9999H6.6V17.3999Z"
        fill="#33363D"
      />{" "}
      <path
        d="M17.3984 10.2002H20.9984V13.8002H17.4008V17.3998H13.8008V13.7998H17.3984V10.2002Z"
        fill="#33363D"
      />{" "}
      <path
        d="M19.9984 3H17.3984V6.6H20.9984V4C20.9984 3.44772 20.5507 3 19.9984 3Z"
        fill="#33363D"
      />{" "}
      <path
        d="M10.1992 10.2002H13.7992V13.8002H10.2016V17.3998H6.60156V13.7998H10.1992V10.2002Z"
        fill="#33363D"
      />{" "}
      <path
        d="M20.9984 17.3999H17.3984V20.9999H19.9984C20.5507 20.9999 20.9984 20.5522 20.9984 19.9999V17.3999Z"
        fill="#33363D"
      />{" "}
      <path d="M10.1992 3H13.7992V6.6H10.1992V3Z" fill="#33363D" />{" "}
      <path
        d="M13.7992 17.3999H10.1992V20.9999H13.7992V17.3999Z"
        fill="#33363D"
      />{" "}
      <path
        d="M6.60156 6.6001H10.2016V10.2001H6.60156V6.6001Z"
        fill="#33363D"
      />{" "}
      <path
        d="M17.4008 6.6001H13.8008V10.2001H17.4008V6.6001Z"
        fill="#33363D"
      />
    </svg>
  );
}
