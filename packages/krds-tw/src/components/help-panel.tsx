"use client";

import { Dialog } from "@base-ui-components/react/dialog";
import { ArrowLeft, ArrowRight, PanelClose } from "@gracefullight/krds-icons";
import { useCallback, useId, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface HelpPanelTutorialStep {
  /** 단계 제목 */
  title: string;
  /** 단계 설명 */
  description: string;
  /** 단계 이미지 URL (선택) */
  image?: string;
}

interface HelpPanelBaseProps {
  /** 패널 열림 여부 */
  open: boolean;
  /** 패널 닫기 핸들러 */
  onClose: () => void;
  /** 패널 제목 */
  title: string;
}

export interface HelpPanelHelpProps extends HelpPanelBaseProps {
  /** 도움 패널 */
  variant: "help";
  /** 도움 패널 본문 콘텐츠 */
  children: ReactNode;
  steps?: never;
}

export interface HelpPanelTutorialProps extends HelpPanelBaseProps {
  /** 따라하기 패널 */
  variant: "tutorial";
  /** 튜토리얼 단계 목록 */
  steps: HelpPanelTutorialStep[];
  children?: never;
}

export type HelpPanelProps = HelpPanelHelpProps | HelpPanelTutorialProps;

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

interface HelpPanelHeaderProps {
  titleId: string;
  title: string;
}

function HelpPanelHeader({ titleId, title }: HelpPanelHeaderProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-stroke-gray-light">
      <Dialog.Title
        id={titleId}
        className="text-heading-sm text-fg-basic font-bold"
      >
        {title}
      </Dialog.Title>
      <Dialog.Close
        className={cn(
          "inline-flex items-center justify-center rounded p-1.5 text-icon-gray",
          "bg-transparent border-none cursor-pointer transition-colors",
          "hover:bg-surface-gray-subtler",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
        )}
        aria-label="패널 닫기"
      >
        <PanelClose size={24} aria-hidden="true" />
      </Dialog.Close>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tutorial sub-components
// ─────────────────────────────────────────────

interface TutorialStepContentProps {
  step: HelpPanelTutorialStep;
}

function TutorialStepContent({ step }: TutorialStepContentProps) {
  return (
    <>
      {step.image && (
        <img
          src={step.image}
          alt={step.title}
          className="w-full rounded-lg object-cover mb-4"
        />
      )}
      <p className="text-label-lg font-bold text-fg-basic mb-2">{step.title}</p>
      <p className="text-body-md text-fg-subtle">{step.description}</p>
    </>
  );
}

interface TutorialFooterProps {
  currentStep: number;
  totalSteps: number;
  steps: HelpPanelTutorialStep[];
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

function TutorialFooter({
  currentStep,
  totalSteps,
  steps,
  onPrev,
  onNext,
  onClose,
}: TutorialFooterProps) {
  return (
    <div className="px-6 py-4 border-t border-stroke-gray-light">
      {/* dot indicator */}
      <div
        aria-label={`${totalSteps}단계 중 ${currentStep + 1}단계`}
        className="flex items-center justify-center gap-1.5 mb-4"
      >
        {steps.map((step, index) => (
          <span
            key={step.title}
            aria-hidden="true"
            className={cn(
              "inline-block rounded-full transition-all duration-200",
              index === currentStep
                ? "w-4 h-2 bg-btn-primary-fill"
                : "w-2 h-2 bg-surface-gray",
            )}
          />
        ))}
      </div>

      {/* 단계 카운터 + 버튼 그룹 */}
      <div className="flex items-center justify-between gap-2">
        <span
          aria-live="polite"
          className="text-label-sm text-fg-subtle shrink-0"
        >
          {currentStep + 1} / {totalSteps}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentStep === 0}
            aria-label="이전 단계"
            className={cn(
              "inline-flex items-center gap-1 px-4 py-2 rounded",
              "text-label-md text-fg-basic bg-surface-white",
              "border border-stroke-gray-light cursor-pointer transition-colors",
              "hover:bg-surface-gray-subtler",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-surface-white",
            )}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            이전
          </button>

          {currentStep < totalSteps - 1 ? (
            <button
              type="button"
              onClick={onNext}
              aria-label="다음 단계"
              className={cn(
                "inline-flex items-center gap-1 px-4 py-2 rounded",
                "text-label-md text-surface-white bg-btn-primary-fill cursor-pointer",
                "border border-transparent transition-colors",
                "hover:bg-btn-primary-fill-hover",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
              )}
            >
              다음
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              aria-label="따라하기 완료"
              className={cn(
                "inline-flex items-center gap-1 px-4 py-2 rounded",
                "text-label-md text-surface-white bg-btn-primary-fill cursor-pointer",
                "border border-transparent transition-colors",
                "hover:bg-btn-primary-fill-hover",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
              )}
            >
              완료
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HelpPanel (Root)
// ─────────────────────────────────────────────

/**
 * HelpPanel — KRDS 도움 패널 / 따라하기 패널
 *
 * - variant="help": 오른쪽에서 슬라이드인되는 도움말 패널
 * - variant="tutorial": 단계별 따라하기 패널 (Prev/Next/Close, dot indicator)
 * - Base UI Dialog: focus trap, ESC 닫기, aria-modal
 * - WCAG 2.2 AA: focus-visible, keyboard nav
 */
export function HelpPanel(props: HelpPanelProps) {
  const { variant, open, onClose, title } = props;
  const titleId = useId();

  const [currentStep, setCurrentStep] = useState(0);

  const steps = variant === "tutorial" ? props.steps : [];
  const totalSteps = steps.length;

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (!nextOpen) {
        onClose();
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

  const step =
    variant === "tutorial" && steps.length > 0 ? steps[currentStep] : null;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={handleOpenChange}
      onOpenChangeComplete={(nextOpen) => {
        if (nextOpen) {
          setCurrentStep(0);
        }
      }}
    >
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-40 bg-canvas-dim",
            "transition-opacity duration-300",
            "motion-reduce:transition-none",
            "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
          )}
        />

        {/* Side panel */}
        <Dialog.Popup
          aria-labelledby={titleId}
          className={cn(
            // position: fixed to right edge, full height
            "fixed right-0 top-0 bottom-0 z-50",
            // width
            "w-full max-w-sm sm:max-w-md",
            // shape and surface
            "bg-surface-white shadow-3",
            // layout
            "flex flex-col",
            // slide-in from right
            "translate-x-0",
            "transition-transform duration-300 ease-out",
            "motion-reduce:transition-none",
            "data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full",
          )}
        >
          {/* Header */}
          <HelpPanelHeader titleId={titleId} title={title} />

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {variant === "help" && props.children}

            {variant === "tutorial" && step && (
              <TutorialStepContent step={step} />
            )}
          </div>

          {/* Tutorial footer */}
          {variant === "tutorial" && totalSteps > 0 && (
            <TutorialFooter
              currentStep={currentStep}
              totalSteps={totalSteps}
              steps={steps}
              onPrev={handlePrev}
              onNext={handleNext}
              onClose={onClose}
            />
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default HelpPanel;
