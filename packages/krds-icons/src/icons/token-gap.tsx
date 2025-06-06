import type { IconProps } from "#/types";

export function TokenGap({
  size = 24,
  color = "currentColor",
  title = "TokenGap",
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
        d="M20.2 3.00098C20.6418 3.00098 21 3.35915 21 3.80098V11.801C21 12.2428 20.6418 12.601 20.2 12.601C19.7582 12.601 19.4 12.2428 19.4 11.801V5.71571L5.54775 19.399H11.8C12.2418 19.399 12.6 19.7572 12.6 20.199C12.6 20.6409 12.2418 20.999 11.8 20.999H3.8C3.35817 20.999 3 20.6409 3 20.199V12.199C3 11.7572 3.35817 11.399 3.8 11.399C4.24183 11.399 4.6 11.7572 4.6 12.199V18.0862L18.2517 4.60098H12.2C11.7582 4.60098 11.4 4.2428 11.4 3.80098C11.4 3.35915 11.7582 3.00098 12.2 3.00098H20.2Z"
        fill="#33363D"
      />
    </svg>
  );
}
