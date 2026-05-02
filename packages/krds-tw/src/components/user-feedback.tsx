"use client";

import { useId, useState } from "react";
import { Button } from "#/components/button";
import { cn } from "#/utils/cn";

interface FeedbackOption {
  value: string;
  label: string;
}

const DEFAULT_QUESTION = "이 정보가 도움이 되었나요?";

const DEFAULT_OPTIONS: FeedbackOption[] = [
  { value: "satisfied", label: "만족" },
  { value: "neutral", label: "보통" },
  { value: "unsatisfied", label: "불만족" },
];

interface UserFeedbackProps {
  question?: string;
  options?: FeedbackOption[];
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string, comment?: string) => void;
  className?: string;
}

interface FeedbackRadioItemProps {
  id: string;
  name: string;
  option: FeedbackOption;
  checked: boolean;
  onChange: (value: string) => void;
}

function FeedbackRadioItem({
  id,
  name,
  option,
  checked,
  onChange,
}: FeedbackRadioItemProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 rounded-md-lg border px-4 py-2 transition-colors",
        "text-label-md text-fg-basic",
        checked
          ? "border-element-primary bg-element-primary/10 text-fg-primary"
          : "border-stroke-gray-light hover:border-element-primary hover:bg-surface-hover",
      )}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={option.value}
        checked={checked}
        onChange={() => onChange(option.value)}
        className="sr-only"
      />
      {option.label}
    </label>
  );
}

interface FeedbackCommentProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

function FeedbackComment({ id, value, onChange }: FeedbackCommentProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-label-sm text-fg-basic">
        의견을 남겨주세요 (선택)
      </label>
      <textarea
        id={id}
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="자유롭게 의견을 작성해주세요."
        className={cn(
          "w-full resize-y rounded-md-lg border bg-input-surface px-4 py-3 text-body-md text-fg-basic transition-colors",
          "placeholder:text-fg-disabled",
          "border-input-border focus:border-input-border-active focus:outline-none",
        )}
      />
    </div>
  );
}

function UserFeedback({
  question = DEFAULT_QUESTION,
  options = DEFAULT_OPTIONS,
  value,
  onChange,
  onSubmit,
  className,
}: UserFeedbackProps) {
  const groupId = useId();
  const commentId = useId();

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentValue = isControlled ? value : internalValue;

  const handleChange = (next: string) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentValue) return;
    onSubmit?.(currentValue, comment || undefined);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <output
        aria-live="polite"
        className={cn(
          "flex items-center justify-center rounded-xl border border-stroke-gray-light bg-surface-subtle p-6 text-body-md text-fg-subtle",
          className,
        )}
      >
        소중한 의견 감사합니다.
      </output>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-stroke-gray-light bg-surface-subtle p-6",
        className,
      )}
    >
      <fieldset className="flex flex-col gap-3 border-none p-0">
        <legend className="text-heading-xs text-fg-basic">{question}</legend>
        <div
          role="radiogroup"
          aria-label={question}
          className="flex flex-wrap gap-2"
        >
          {options.map((option) => {
            const itemId = `${groupId}-${option.value}`;
            return (
              <FeedbackRadioItem
                key={option.value}
                id={itemId}
                name={groupId}
                option={option}
                checked={currentValue === option.value}
                onChange={handleChange}
              />
            );
          })}
        </div>
      </fieldset>

      {currentValue && (
        <FeedbackComment id={commentId} value={comment} onChange={setComment} />
      )}

      <Button
        type="submit"
        variant="primary"
        size="medium"
        disabled={!currentValue}
        className="self-end"
      >
        제출
      </Button>
    </form>
  );
}

UserFeedback.displayName = "UserFeedback";
export { UserFeedback, type UserFeedbackProps, type FeedbackOption };
