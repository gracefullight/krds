import type { IconProps } from "#/types";

export function KakaoStory({
  size = 24,
  color = "currentColor",
  title = "KakaoStory",
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
      <g clip-path="url(#clip0_2365_45467)">
        {" "}
        <path
          d="M16.5 10.0956V3H7.5V12.7278L11.6642 12.7293C11.2668 15.206 9.89608 17.1126 8.48792 18.1942L11.1048 21C14.358 18.6415 16.5 14.6464 16.5 10.0956Z"
          fill="#33363D"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <clipPath id="clip0_2365_45467">
          {" "}
          <rect width="24" height="24" fill="white" />{" "}
        </clipPath>{" "}
      </defs>
    </svg>
  );
}
