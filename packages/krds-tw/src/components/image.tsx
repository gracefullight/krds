import { type ComponentProps, forwardRef, type ReactNode } from "react";
import { cn } from "#/utils/cn";

type ImageRatio = "auto" | "16:9" | "4:3" | "3:2" | "1:1";

interface ImageProps
  extends Omit<ComponentProps<"img">, "alt" | "width" | "height"> {
  /** 대체 텍스트. 장식용 이미지는 빈 문자열을 전달한다. */
  alt: string;
  /** 이미지 설명 (figcaption) */
  caption?: ReactNode;
  /** 가로세로 비율 */
  ratio?: ImageRatio;
  /** 비율 고정 시 채움 방식 */
  fit?: "cover" | "contain";
}

const ratioStyles: Record<ImageRatio, string> = {
  auto: "",
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "3:2": "aspect-[3/2]",
  "1:1": "aspect-square",
};

/**
 * Image — KRDS 이미지
 *
 * 정보를 전달하는 이미지에는 alt로 대체 텍스트를 제공하고,
 * 장식용 이미지는 alt=""로 스크린 리더가 무시하도록 한다.
 * 이미지 자체는 대화형 콘텐츠가 아니므로 키보드 초점과 클릭 동작을 제공하지 않는다.
 */
const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      alt,
      caption,
      ratio = "auto",
      fit = "cover",
      className,
      loading = "lazy",
      decoding = "async",
      ...props
    },
    ref,
  ) => {
    const decorative = alt === "";

    const img = (
      <img
        ref={ref}
        alt={alt}
        loading={loading}
        decoding={decoding}
        aria-hidden={decorative || undefined}
        className={cn(
          "max-w-full",
          ratioStyles[ratio],
          ratio !== "auto" &&
            (fit === "cover" ? "object-cover" : "object-contain"),
          ratio !== "auto" && "w-full",
          className,
        )}
        {...props}
      />
    );

    if (caption === undefined) {
      return img;
    }

    return (
      <figure className="m-0 flex flex-col gap-2">
        {img}
        <figcaption className="text-body-sm text-fg-subtle">
          {caption}
        </figcaption>
      </figure>
    );
  },
);

Image.displayName = "Image";

export { Image, type ImageProps, type ImageRatio };
