"use client";

import type { KeyboardEvent } from "react";
import type { HelpPanelProps } from "#/components/blocks/help-panel/help-panel.types";

import { ArrowLeft, ArrowRight, PanelClose } from "@gracefullight/krds-icons";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import * as S from "#/components/blocks/help-panel/help-panel.styles";

/**
 * HelpPanel — KRDS 도움 패널 / 따라하기 패널
 *
 * - variant="help": 오른쪽에서 슬라이드인되는 도움말 패널
 * - variant="tutorial": 단계별 따라하기 패널 (Prev/Next/Close, dot indicator)
 * - `<dialog aria-labelledby>` 시맨틱 마크업 — dialog role 내재
 * - Focus trap: 패널 열릴 때 내부로 포커스 이동, ESC로 닫기
 * - WCAG 2.2 AA: focus-visible, keyboard nav
 */
export default function HelpPanel(props: HelpPanelProps) {
  const { variant, open, onClose, title } = props;

  const titleId = useId();
  const panelRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [currentStep, setCurrentStep] = useState(0);

  const steps = variant === "tutorial" ? props.steps : [];
  const totalSteps = steps.length;

  // 패널 열릴 때 첫 단계로 리셋 및 포커스 이동
  useEffect(() => {
    if (open) {
      setCurrentStep(0);
      // 다음 프레임에서 닫기 버튼으로 포커스
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // body 스크롤 잠금
  useEffect(() => {
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [open]);

  /** 포커스 트랩: Tab / Shift+Tab 순환 */
  const handlePanelKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDialogElement>) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.closest("[hidden]"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(totalSteps - 1, prev + 1));
  }, [totalSteps]);

  const step = variant === "tutorial" ? steps[currentStep] : null;

  return (
    <>
      {/* 오버레이 */}
      <S.HelpPanelOverlay $open={open} onClick={onClose} aria-hidden="true" />

      {/* 패널 본체 — <dialog> 자체가 dialog role을 내재함 */}
      <S.HelpPanelRoot
        ref={panelRef}
        $open={open}
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!open}
        onKeyDown={handlePanelKeyDown}
      >
        {/* 헤더 */}
        <S.HelpPanelHeader>
          <S.HelpPanelTitle id={titleId}>{title}</S.HelpPanelTitle>
          <S.HelpPanelCloseButton
            ref={closeButtonRef}
            type="button"
            aria-label="패널 닫기"
            onClick={onClose}
          >
            <PanelClose size={24} />
          </S.HelpPanelCloseButton>
        </S.HelpPanelHeader>

        {/* 본문 */}
        <S.HelpPanelBody>
          {variant === "help" && props.children}

          {variant === "tutorial" && step && (
            <>
              {step.image && (
                <S.TutorialStepImage src={step.image} alt={step.title} />
              )}
              <S.TutorialStepTitle>{step.title}</S.TutorialStepTitle>
              <S.TutorialStepDescription>
                {step.description}
              </S.TutorialStepDescription>
            </>
          )}
        </S.HelpPanelBody>

        {/* 튜토리얼 하단 내비게이션 */}
        {variant === "tutorial" && totalSteps > 0 && (
          <S.TutorialFooter>
            {/* dot indicator */}
            <S.TutorialDots
              aria-label={`${totalSteps}단계 중 ${currentStep + 1}단계`}
            >
              {steps.map((step, index) => (
                <S.TutorialDot
                  key={step.title}
                  $active={index === currentStep}
                  aria-hidden="true"
                />
              ))}
            </S.TutorialDots>

            {/* 단계 카운터 + 버튼 그룹 */}
            <S.TutorialNavButtons>
              <S.TutorialStepCounter aria-live="polite">
                {currentStep + 1} / {totalSteps}
              </S.TutorialStepCounter>

              <S.TutorialNavButton
                type="button"
                $variant="secondary"
                onClick={handlePrev}
                disabled={currentStep === 0}
                aria-label="이전 단계"
              >
                <ArrowLeft size={16} />
                이전
              </S.TutorialNavButton>

              {currentStep < totalSteps - 1 ? (
                <S.TutorialNavButton
                  type="button"
                  $variant="primary"
                  onClick={handleNext}
                  aria-label="다음 단계"
                >
                  다음
                  <ArrowRight size={16} />
                </S.TutorialNavButton>
              ) : (
                <S.TutorialNavButton
                  type="button"
                  $variant="primary"
                  onClick={onClose}
                  aria-label="따라하기 완료"
                >
                  완료
                </S.TutorialNavButton>
              )}
            </S.TutorialNavButtons>
          </S.TutorialFooter>
        )}
      </S.HelpPanelRoot>
    </>
  );
}
