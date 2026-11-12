import * as S from "#/components/blocks/accessible-multimedia/accessible-multimedia.styles";
import type { AccessibleMultimediaProps } from "#/components/blocks/accessible-multimedia/accessible-multimedia.types";

/**
 * AccessibleMultimedia — KRDS 접근 가능한 미디어
 *
 * 오디오/비디오/멀티미디어 콘텐츠에 캡션, 화면 해설, 설명적 원고 등
 * 대체 정보를 함께 제공한다. 정지 이미지의 설명은 VisuallyHidden을 사용한다.
 */
export default function AccessibleMultimedia({
  kind,
  src,
  title,
  captionsSrc,
  captionsLabel = "한국어 캡션",
  transcript,
  transcriptLabel = "설명적 원고",
  description,
  children,
  ...props
}: AccessibleMultimediaProps) {
  const isAudio = kind === "audio";

  const media = isAudio ? (
    <S.MultimediaAudio src={src} title={title} controls {...props}>
      {captionsSrc && (
        <track
          kind="captions"
          src={captionsSrc}
          srcLang="ko"
          label={captionsLabel}
        />
      )}
      {children}
    </S.MultimediaAudio>
  ) : (
    <S.MultimediaVideo src={src} title={title} controls {...props}>
      {captionsSrc && (
        <track
          kind="captions"
          src={captionsSrc}
          srcLang="ko"
          label={captionsLabel}
          default
        />
      )}
      {children}
    </S.MultimediaVideo>
  );

  return (
    <S.MultimediaGroup>
      {media}

      {description && (
        <S.MultimediaDisclosure>
          <S.MultimediaSummary>화면 해설</S.MultimediaSummary>
          <S.MultimediaDisclosureBody>{description}</S.MultimediaDisclosureBody>
        </S.MultimediaDisclosure>
      )}

      {transcript && (
        <S.MultimediaDisclosure>
          <S.MultimediaSummary>{transcriptLabel}</S.MultimediaSummary>
          <S.MultimediaDisclosureBody>{transcript}</S.MultimediaDisclosureBody>
        </S.MultimediaDisclosure>
      )}
    </S.MultimediaGroup>
  );
}
