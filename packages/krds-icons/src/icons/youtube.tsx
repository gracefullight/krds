import type { IconProps } from "#/types";

export function Youtube({
  size = 24,
  color = "currentColor",
  title = "Youtube",
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
      <g clip-path="url(#clip0_2365_45206)">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.8136 4.94758C20.6739 5.19436 21.3523 5.92016 21.5818 6.84194C22 8.51371 22 12 22 12C22 12 22 15.4875 21.5818 17.1581C21.3523 18.0798 20.6739 18.8056 19.8136 19.0524C18.2545 19.5 12 19.5 12 19.5C12 19.5 5.74659 19.5 4.18636 19.0524C3.32614 18.8056 2.64773 18.0798 2.41818 17.1581C2 15.4863 2 12 2 12C2 12 2 8.51371 2.41818 6.84194C2.64773 5.92016 3.32614 5.19436 4.18636 4.94758C5.74545 4.5 12 4.5 12 4.5C12 4.5 18.2545 4.5 19.8136 4.94758ZM15 12L10 14.5V9.5L15 12Z"
          fill="#33363D"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <clipPath id="clip0_2365_45206">
          {" "}
          <rect width="24" height="24" fill="white" />{" "}
        </clipPath>{" "}
      </defs>
    </svg>
  );
}
