import * as S from "#/components/blocks/image/image.styles";
import type { ImageProps } from "#/components/blocks/image/image.types";

const RATIO_MAP: Record<string, string> = {
  "16:9": "16 / 9",
  "4:3": "4 / 3",
  "3:2": "3 / 2",
  "1:1": "1 / 1",
};

/**
 * Image — KRDS 이미지
 *
 * 정보 전달 이미지에는 alt 대체 텍스트를 제공하고, 장식용 이미지는 alt=""로
 * 스크린 리더가 무시하도록 한다. 이미지 자체는 대화형 콘텐츠가 아니므로
 * 키보드 초점과 클릭 동작을 제공하지 않는다.
 */
export default function Image({
  alt,
  caption,
  ratio = "auto",
  fit = "cover",
  loading = "lazy",
  decoding = "async",
  style,
  ...props
}: ImageProps) {
  const decorative = alt === "";

  const img = (
    <S.ImageBase
      alt={alt}
      loading={loading}
      decoding={decoding}
      aria-hidden={decorative || undefined}
      style={{
        ...style,
        ...(ratio !== "auto" && {
          aspectRatio: RATIO_MAP[ratio],
          width: "100%",
          objectFit: fit,
        }),
      }}
      {...props}
    />
  );

  if (caption === undefined) {
    return img;
  }

  return (
    <S.ImageFigure>
      {img}
      <S.ImageCaption>{caption}</S.ImageCaption>
    </S.ImageFigure>
  );
}
