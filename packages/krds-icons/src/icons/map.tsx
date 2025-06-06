import type { IconProps } from "#/types";

// biome-ignore lint/suspicious/noShadowRestrictedNames: icon
export function Map({
  size = 24,
  color = "currentColor",
  title = "Map",
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
        d="M8.68982 3.06323C8.87663 2.98419 9.08649 2.97907 9.27693 3.0489L14.9806 5.14025L19.8915 3.06338C20.1385 2.9589 20.4215 2.98518 20.6451 3.13338C20.8687 3.28158 21.0031 3.53196 21.0031 3.8002V17.8002C21.0031 18.1123 20.8216 18.3959 20.5383 18.5266L15.3367 20.9266C15.1371 21.0187 14.9085 21.0246 14.7044 20.943L9.02406 18.6708L4.41893 20.7955C3.75628 21.1012 2.99992 20.6171 3 19.8873L3.00153 5.99991C3.00156 5.67857 3.19387 5.38843 3.48982 5.26323L8.68982 3.06323ZM4.60147 6.53022L8.19922 5.00809V17.2893L4.6001 18.9498L4.60147 6.53022ZM14.1992 19.0176L9.79922 17.2576V4.94457L14.1992 6.5579V19.0176ZM15.7992 18.9511L19.4031 17.2883V5.00713L15.7992 6.53125V18.9511Z"
        fill="#33363D"
      />
    </svg>
  );
}
