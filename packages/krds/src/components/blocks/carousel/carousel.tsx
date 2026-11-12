import { ArrowLeft, ArrowRight, Play, Stop } from "@gracefullight/krds-icons";
import { useCallback, useEffect, useState } from "react";
import * as S from "#/components/blocks/carousel/carousel.styles";
import type { CarouselProps } from "#/components/blocks/carousel/carousel.types";

/**
 * Carousel — KRDS 캐러셀
 *
 * 하나의 컨테이너에서 여러 콘텐츠를 회전시켜 탐색한다. 슬라이드는 5개 이내를
 * 권장하며, 자동 회전 시 정지 컨트롤을 제공한다. 중요한 정보 전달에는
 * 사용하지 않는다.
 */
export default function Carousel({
  slides,
  autoPlay = false,
  interval = 5000,
  indicator = "dot",
  onChange,
  "aria-label": ariaLabel = "콘텐츠 캐러셀",
  ...props
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const total = slides.length;

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + total) % total;
      setIndex(wrapped);
      onChange?.(wrapped);
    },
    [total, onChange],
  );

  useEffect(() => {
    if (!playing || total <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % total;
        onChange?.(next);
        return next;
      });
    }, interval);
    return () => window.clearInterval(timer);
  }, [playing, total, interval, onChange]);

  if (total === 0) return null;

  return (
    <S.CarouselContainer
      component="section"
      aria-roledescription="캐러셀"
      aria-label={ariaLabel}
      {...props}
    >
      <S.CarouselViewport>
        {slides.map((slide, slideIndex) => (
          <S.CarouselSlide
            key={slide.id}
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`${total}개 중 ${slideIndex + 1}번째`}
            hidden={slideIndex !== index}
          >
            {slide.content}
          </S.CarouselSlide>
        ))}
      </S.CarouselViewport>

      <S.CarouselControls>
        <S.CarouselNavButton
          aria-label="이전 슬라이드"
          onClick={() => goTo(index - 1)}
          disabled={total <= 1}
        >
          <ArrowLeft size={20} />
        </S.CarouselNavButton>

        {indicator === "dot" ? (
          <S.CarouselDots>
            {slides.map((slide, slideIndex) => (
              <S.CarouselDot
                key={slide.id}
                type="button"
                $active={slideIndex === index}
                aria-label={`${slideIndex + 1}번째 슬라이드로 이동`}
                aria-current={slideIndex === index || undefined}
                onClick={() => goTo(slideIndex)}
              />
            ))}
          </S.CarouselDots>
        ) : (
          <S.CarouselFraction aria-live="polite">
            {index + 1} / {total}
          </S.CarouselFraction>
        )}

        <S.CarouselNavButton
          aria-label="다음 슬라이드"
          onClick={() => goTo(index + 1)}
          disabled={total <= 1}
        >
          <ArrowRight size={20} />
        </S.CarouselNavButton>

        {autoPlay && (
          <S.CarouselNavButton
            aria-label={playing ? "자동 회전 정지" : "자동 회전 재생"}
            onClick={() => setPlaying((prev) => !prev)}
          >
            {playing ? <Stop size={20} /> : <Play size={20} />}
          </S.CarouselNavButton>
        )}
      </S.CarouselControls>
    </S.CarouselContainer>
  );
}
