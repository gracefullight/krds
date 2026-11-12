import { Popover } from "@mui/material";
import { useCallback, useEffect, useId, useState } from "react";
import * as S from "#/components/blocks/coach-mark/coach-mark.styles";
import type { CoachMarkProps } from "#/components/blocks/coach-mark/coach-mark.types";

/**
 * CoachMark — KRDS 코치마크
 *
 * 새로운 기능이나 복잡한 과업을 단계별 고맥락적 도움말로 안내한다.
 * 대상 요소에 스포트라이트 외곽선을 표시하고 팝오버로 지시 사항을 제공한다.
 * 사용자가 요청한 경우에만 실행하며, 한 화면에 하나만 표시한다.
 * 액션 버튼 순서: 그만보기 → 이전 → 다음(마치기/확인).
 */
export default function CoachMark({
  open,
  steps,
  onClose,
  onComplete,
}: CoachMarkProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const titleId = useId();
  const total = steps.length;
  const step = steps[stepIndex];

  useEffect(() => {
    if (!open) {
      setStepIndex(0);
      setAnchorEl(null);
      return;
    }

    const current = steps[stepIndex];
    if (!current) return;

    const target = document.querySelector(current.target);
    if (!target) {
      setAnchorEl(null);
      return;
    }

    const element = target as HTMLElement;
    const previousOutline = element.style.outline;
    const previousOffset = element.style.outlineOffset;

    element.scrollIntoView({ block: "center", behavior: "smooth" });
    element.style.outline = S.SPOTLIGHT_OUTLINE;
    element.style.outlineOffset = "4px";
    setAnchorEl(element);

    return () => {
      element.style.outline = previousOutline;
      element.style.outlineOffset = previousOffset;
    };
  }, [open, stepIndex, steps]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    onClose();
  }, [onClose]);

  const handlePrev = useCallback(() => {
    setStepIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    if (stepIndex >= total - 1) {
      setAnchorEl(null);
      onComplete?.();
      onClose();
      return;
    }
    setStepIndex((prev) => prev + 1);
  }, [stepIndex, total, onComplete, onClose]);

  if (!(open && step)) return null;

  const isSingle = total === 1;
  const isLast = stepIndex === total - 1;

  let nextLabel = "다음";
  if (isSingle) {
    nextLabel = "확인";
  } else if (isLast) {
    nextLabel = "마치기";
  }

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorReference={anchorEl ? "anchorEl" : "anchorPosition"}
      anchorPosition={
        anchorEl
          ? undefined
          : { top: window.innerHeight / 2, left: window.innerWidth / 2 }
      }
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      onClose={handleClose}
      slotProps={{ paper: { sx: { overflow: "visible" } } }}
    >
      <S.CoachMarkContainer role="dialog" aria-labelledby={titleId}>
        <S.CoachMarkTitle id={titleId}>
          {stepIndex + 1}. {step.title}
        </S.CoachMarkTitle>

        <S.CoachMarkDescription>{step.description}</S.CoachMarkDescription>

        <S.CoachMarkFooter>
          <S.CoachMarkFraction aria-live="polite">
            {stepIndex + 1}/{total}
          </S.CoachMarkFraction>

          <S.CoachMarkActions>
            <S.CoachMarkTextButton onClick={handleClose} disableRipple>
              그만보기
            </S.CoachMarkTextButton>

            {!isSingle && stepIndex > 0 && (
              <S.CoachMarkTextButton onClick={handlePrev} disableRipple>
                이전
              </S.CoachMarkTextButton>
            )}

            <S.CoachMarkGhostButton
              variant="outlined"
              onClick={handleNext}
              disableRipple
            >
              {nextLabel}
            </S.CoachMarkGhostButton>
          </S.CoachMarkActions>
        </S.CoachMarkFooter>
      </S.CoachMarkContainer>
    </Popover>
  );
}
