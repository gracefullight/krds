import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

type StepState = "completed" | "active" | "upcoming";

interface StepItem {
  id: string;
  label: string;
  description?: string;
}

interface StepperProps extends Omit<ComponentProps<"ol">, "children"> {
  steps: StepItem[];
  activeStep: number;
  orientation?: "horizontal" | "vertical";
}

function getStepState(index: number, activeStep: number): StepState {
  if (index < activeStep) return "completed";
  if (index === activeStep) return "active";
  return "upcoming";
}

const stepCircleStyles: Record<StepState, string> = {
  completed: "bg-element-primary text-fg-inverse-static border-transparent",
  active:
    "bg-element-primary text-fg-inverse-static border-transparent outline outline-2 outline-stroke-primary outline-offset-1",
  upcoming: "bg-action-white text-fg-basic border-stroke-gray",
};

const stepLabelStyles: Record<StepState, string> = {
  completed: "text-fg-basic",
  active: "text-fg-primary font-bold",
  upcoming: "text-fg-basic",
};

const stepDescriptionStyles: Record<StepState, string> = {
  completed: "text-fg-disabled",
  active: "text-fg-basic",
  upcoming: "text-fg-disabled",
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 6L5 9L10 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── StepperItem 서브컴포넌트 ─────────────────────────────────────────────────

interface StepperItemProps {
  step: StepItem;
  index: number;
  state: StepState;
  isLast: boolean;
  isHorizontal: boolean;
}

function StepperItem({
  step,
  index,
  state,
  isLast,
  isHorizontal,
}: StepperItemProps) {
  const isActive = state === "active";
  const isCompleted = state === "completed";

  return (
    <li
      aria-current={isActive ? "step" : undefined}
      className={cn(
        "flex",
        isHorizontal ? "flex-col items-center" : "flex-row items-start",
        isHorizontal && !isLast && "flex-1",
      )}
    >
      {/* Step indicator row: circle + connector */}
      <div
        className={cn(
          "flex items-center",
          isHorizontal ? "w-full flex-row" : "flex-col",
        )}
      >
        {/* Circle */}
        <div
          className={cn(
            "relative z-10 flex shrink-0 items-center justify-center rounded-full border text-label-xs font-bold transition-colors size-7",
            stepCircleStyles[state],
          )}
        >
          {isCompleted ? <CheckIcon /> : <span>{index + 1}</span>}
        </div>

        {/* Connector line */}
        {!isLast && (
          <div
            aria-hidden="true"
            className={cn(
              "transition-colors",
              isHorizontal ? "h-px flex-1" : "mx-auto w-px my-1 h-8",
              isCompleted ? "bg-element-primary" : "bg-element-disabled-light",
            )}
          />
        )}
      </div>

      {/* Label and description */}
      <div
        className={cn(
          isHorizontal
            ? "mt-2 flex flex-col items-center text-center"
            : "ml-3 flex flex-col pb-6",
          isHorizontal && !isLast && "w-full",
        )}
      >
        <span
          className={cn(
            "text-label-sm transition-colors",
            stepLabelStyles[state],
          )}
        >
          {step.label}
        </span>
        {step.description && (
          <span
            className={cn(
              "mt-0.5 text-label-xs transition-colors",
              stepDescriptionStyles[state],
            )}
          >
            {step.description}
          </span>
        )}
      </div>
    </li>
  );
}

// ─── 공개 컴포넌트 ────────────────────────────────────────────────────────────

const Stepper = forwardRef<HTMLOListElement, StepperProps>(
  (
    {
      className,
      steps,
      activeStep,
      orientation = "horizontal",
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const isHorizontal = orientation === "horizontal";
    const clampedActive = Math.min(Math.max(0, activeStep), steps.length - 1);

    return (
      <ol
        ref={ref}
        aria-label={ariaLabel ?? "단계 표시기"}
        className={cn(
          "flex",
          isHorizontal ? "flex-row items-start" : "flex-col",
          className,
        )}
        {...props}
      >
        {steps.map((step, index) => (
          <StepperItem
            key={step.id}
            step={step}
            index={index}
            state={getStepState(index, clampedActive)}
            isLast={index === steps.length - 1}
            isHorizontal={isHorizontal}
          />
        ))}
      </ol>
    );
  },
);

Stepper.displayName = "Stepper";
export { Stepper, type StepperProps, type StepItem };
