"use client";

import { ArrowLeft, ArrowRight } from "@gracefullight/krds-icons";
import {
  type ComponentProps,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface CarouselSlide {
  id: string | number;
  content: ReactNode;
  alt?: string;
}

interface CarouselProps extends Omit<ComponentProps<"section">, "onChange"> {
  slides: CarouselSlide[];
  currentIndex?: number;
  defaultIndex?: number;
  onChange?: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  "aria-label"?: string;
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

interface CarouselArrowButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}

function CarouselArrowButton({
  direction,
  onClick,
  disabled,
}: CarouselArrowButtonProps) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      aria-label={isPrev ? "이전 슬라이드" : "다음 슬라이드"}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-10",
        "inline-flex items-center justify-center size-10 rounded-full",
        "bg-surface-primary/80 text-icon-gray shadow-md",
        "transition-colors duration-150",
        "hover:bg-surface-primary hover:text-fg-basic",
        "active:bg-action-secondary-pressed",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
        "disabled:cursor-not-allowed disabled:opacity-40",
        isPrev ? "left-3" : "right-3",
      )}
    >
      {isPrev ? (
        <ArrowLeft size={20} aria-hidden="true" />
      ) : (
        <ArrowRight size={20} aria-hidden="true" />
      )}
    </button>
  );
}

interface CarouselDotProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
}

function CarouselDot({ index, isActive, onClick }: CarouselDotProps) {
  return (
    <button
      type="button"
      aria-label={`슬라이드 ${index + 1}로 이동`}
      aria-current={isActive ? true : undefined}
      onClick={onClick}
      className={cn(
        "size-2 rounded-full transition-colors duration-150",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
        isActive
          ? "bg-btn-primary-fill"
          : "bg-btn-secondary-fill hover:bg-btn-tertiary-fill-hover",
      )}
    />
  );
}

interface CarouselSlideItemProps {
  slide: CarouselSlide;
  index: number;
  total: number;
  isActive: boolean;
}

function CarouselSlideItem({
  slide,
  index,
  total,
  isActive,
}: CarouselSlideItemProps) {
  return (
    <li
      aria-roledescription="slide"
      aria-label={`${index + 1} / ${total}`}
      aria-hidden={!isActive}
      className={cn(
        "absolute inset-0 w-full h-full list-none transition-opacity duration-300 motion-reduce:transition-none",
        isActive ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      {slide.content}
    </li>
  );
}

interface CarouselDotsProps {
  slides: CarouselSlide[];
  activeIndex: number;
  onDotClick: (index: number) => void;
}

function CarouselDots({ slides, activeIndex, onDotClick }: CarouselDotsProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-3 left-0 right-0 flex justify-center gap-2"
    >
      {slides.map((slide, i) => (
        <CarouselDot
          key={slide.id}
          index={i}
          isActive={i === activeIndex}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Hooks
// ─────────────────────────────────────────────

function useCarouselIndex(
  slideCount: number,
  controlled: number | undefined,
  defaultIndex: number,
  onChange: ((index: number) => void) | undefined,
): [number, (index: number) => void] {
  const [uncontrolled, setUncontrolled] = useState(defaultIndex);
  const activeIndex = controlled !== undefined ? controlled : uncontrolled;

  const setIndex = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(slideCount - 1, next));
      if (controlled === undefined) {
        setUncontrolled(clamped);
      }
      onChange?.(clamped);
    },
    [controlled, slideCount, onChange],
  );

  return [activeIndex, setIndex];
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

// ─────────────────────────────────────────────
// Carousel (Root)
// ─────────────────────────────────────────────

const Carousel = ({
  slides,
  currentIndex: controlledIndex,
  defaultIndex = 0,
  onChange,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  "aria-label": ariaLabel,
  className,
  ...props
}: CarouselProps) => {
  const slideCount = slides.length;
  const [activeIndex, setIndex] = useCarouselIndex(
    slideCount,
    controlledIndex,
    defaultIndex,
    onChange,
  );
  const prefersReducedMotion = usePrefersReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToPrev = useCallback(() => {
    setIndex(activeIndex === 0 ? slideCount - 1 : activeIndex - 1);
  }, [activeIndex, slideCount, setIndex]);

  const goToNext = useCallback(() => {
    setIndex(activeIndex === slideCount - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, slideCount, setIndex]);

  const goToFirst = useCallback(() => setIndex(0), [setIndex]);

  const goToLast = useCallback(
    () => setIndex(slideCount - 1),
    [slideCount, setIndex],
  );

  useEffect(() => {
    if (!autoPlay || prefersReducedMotion || slideCount <= 1) {
      return;
    }

    intervalRef.current = setInterval(goToNext, autoPlayInterval);
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, prefersReducedMotion, slideCount, goToNext]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToFirst();
      } else if (e.key === "End") {
        e.preventDefault();
        goToLast();
      }
    },
    [goToPrev, goToNext, goToFirst, goToLast],
  );

  if (slideCount === 0) {
    return null;
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label={ariaLabel ?? "이미지 슬라이드"}
      onKeyDown={handleKeyDown}
      className={cn("relative w-full overflow-hidden", className)}
      {...props}
    >
      <ul className="relative w-full h-full m-0 p-0">
        {slides.map((slide, i) => (
          <CarouselSlideItem
            key={slide.id}
            slide={slide}
            index={i}
            total={slideCount}
            isActive={i === activeIndex}
          />
        ))}
      </ul>

      {showArrows && slideCount > 1 && (
        <>
          <CarouselArrowButton
            direction="prev"
            onClick={goToPrev}
            disabled={false}
          />
          <CarouselArrowButton
            direction="next"
            onClick={goToNext}
            disabled={false}
          />
        </>
      )}

      {showDots && slideCount > 1 && (
        <CarouselDots
          slides={slides}
          activeIndex={activeIndex}
          onDotClick={setIndex}
        />
      )}
    </section>
  );
};

Carousel.displayName = "Carousel";

export { Carousel, type CarouselProps, type CarouselSlide };
