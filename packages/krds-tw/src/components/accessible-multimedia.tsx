import { type ComponentProps, forwardRef, type ReactNode } from "react";
import { cn } from "#/utils/cn";

type MultimediaKind = "audio" | "video" | "multimedia";

interface AccessibleMultimediaProps
  extends Omit<ComponentProps<"video">, "kind" | "src" | "title" | "children"> {
  /** 콘텐츠 유형: 오디오 / 비디오(화면 해설 필요) / 멀티미디어 */
  kind: MultimediaKind;
  /** 미디어 소스 URL */
  src: string;
  /** 미디어 접근 가능한 이름 */
  title: string;
  /** 캡션(VTT) 소스 — 청각 정보의 텍스트 대체 */
  captionsSrc?: string;
  /** 캡션 트랙 레이블 */
  captionsLabel?: string;
  /** 설명적 원고 — 시각·청각 정보를 모두 포함한 텍스트 대체 */
  transcript?: ReactNode;
  /** 설명적 원고 영역 레이블 */
  transcriptLabel?: string;
  /** 화면 해설 — 비디오의 시각 정보에 대한 텍스트 설명 */
  description?: ReactNode;
  /** 미디어를 재생할 수 없을 때 제공할 대체 콘텐츠 */
  children?: ReactNode;
}

/**
 * AccessibleMultimedia — KRDS 접근 가능한 미디어
 *
 * 오디오/비디오/멀티미디어 콘텐츠에 캡션, 화면 해설, 설명적 원고 등
 * 대체 정보를 함께 제공한다. 정지 이미지의 설명은 VisuallyHidden을 사용한다.
 */
const AccessibleMultimedia = forwardRef<
  HTMLVideoElement | HTMLAudioElement,
  AccessibleMultimediaProps
>(
  (
    {
      kind,
      src,
      title,
      captionsSrc,
      captionsLabel = "한국어 캡션",
      transcript,
      transcriptLabel = "설명적 원고",
      description,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const isAudio = kind === "audio";

    const media = isAudio ? (
      <audio
        ref={ref as React.Ref<HTMLAudioElement>}
        src={src}
        title={title}
        controls
        className={cn("w-full", className)}
        {...props}
      >
        {captionsSrc && (
          <track
            kind="captions"
            src={captionsSrc}
            srcLang="ko"
            label={captionsLabel}
          />
        )}
        {children}
      </audio>
    ) : (
      <video
        ref={ref as React.Ref<HTMLVideoElement>}
        src={src}
        title={title}
        controls
        className={cn("w-full rounded-md-lg bg-gray-95", className)}
        {...props}
      >
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
      </video>
    );

    return (
      <div className="flex flex-col gap-3">
        {media}

        {description && (
          <details className="rounded-md-lg border border-stroke-gray-light bg-surface-white">
            <summary className="cursor-pointer px-4 py-3 text-label-md text-fg-basic">
              화면 해설
            </summary>
            <div className="border-t border-stroke-gray-light px-4 py-3 text-body-md text-fg-subtle">
              {description}
            </div>
          </details>
        )}

        {transcript && (
          <details className="rounded-md-lg border border-stroke-gray-light bg-surface-white">
            <summary className="cursor-pointer px-4 py-3 text-label-md text-fg-basic">
              {transcriptLabel}
            </summary>
            <div className="border-t border-stroke-gray-light px-4 py-3 text-body-md text-fg-subtle">
              {transcript}
            </div>
          </details>
        )}
      </div>
    );
  },
);

AccessibleMultimedia.displayName = "AccessibleMultimedia";

export {
  AccessibleMultimedia,
  type AccessibleMultimediaProps,
  type MultimediaKind,
};
