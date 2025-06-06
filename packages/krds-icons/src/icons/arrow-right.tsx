import type { IconProps } from "#/types";

export function ArrowRight({
  size = 24,
  color = "currentColor",
  title = "ArrowRight",
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
        d="M8.40531 19.7351C8.70087 20.0635 9.2067 20.0902 9.53512 19.7946L17.5351 12.5949C17.7037 12.4432 17.8 12.2271 17.8 12.0003C17.8 11.7735 17.7037 11.5574 17.5351 11.4056L9.53515 4.20515C9.20675 3.90957 8.70092 3.93617 8.40534 4.26457C8.10976 4.59297 8.13637 5.0988 8.46477 5.39438L15.8041 12.0002L8.4648 18.6053C8.13638 18.9009 8.10975 19.4067 8.40531 19.7351Z"
        fill={color}
      />
    </svg>
  );
}
