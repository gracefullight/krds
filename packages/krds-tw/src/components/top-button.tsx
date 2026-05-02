"use client";

import { ArrowTop } from "@gracefullight/krds-icons";
import { useEffect, useState } from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface TopButtonProps {
  /**
   * Scroll distance from top (px) at which the button appears.
   * @default 200
   */
  threshold?: number;
  /**
   * Accessible label for the button.
   * @default "맨 위로 이동"
   */
  "aria-label"?: string;
  /**
   * Scroll behavior when the button is clicked.
   * Defaults to "smooth", but falls back to "auto" when
   * the user has opted in to reduced motion.
   * @default "smooth"
   */
  behavior?: "smooth" | "auto";
  /**
   * When false, the component renders without built-in fixed positioning
   * so the consumer can control placement.
   * @default true
   */
  defaultFixed?: boolean;
  /** Additional CSS classes. */
  className?: string;
}

// ─────────────────────────────────────────────
// TopButton
// ─────────────────────────────────────────────

function TopButton({
  threshold = 200,
  "aria-label": ariaLabel = "맨 위로 이동",
  behavior = "smooth",
  defaultFixed = true,
  className,
}: TopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : behavior,
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={handleClick}
      className={cn(
        // layout
        "inline-flex items-center justify-center",
        // size
        "size-14",
        // shape
        "rounded-md-lg",
        // colors
        "bg-surface-white text-icon-gray",
        // border
        "outline outline-1 outline-border-gray-light",
        // shadow
        "shadow-2",
        // interaction
        "cursor-pointer transition-colors",
        "hover:bg-btn-secondary-fill-hover",
        "active:bg-btn-secondary-fill-pressed",
        // focus
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
        // fixed positioning (default)
        defaultFixed && "fixed bottom-6 right-6 z-50",
        className,
      )}
    >
      <ArrowTop size={24} aria-hidden="true" />
    </button>
  );
}

TopButton.displayName = "TopButton";
export { TopButton, type TopButtonProps };
