"use client";

import { Play, Stop } from "@gracefullight/krds-icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "#/utils/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

type VoiceAssistSpeed = 0.5 | 0.75 | 1 | 1.25 | 1.5 | 2;
type VoiceAssistState = "idle" | "playing" | "paused";

interface VoiceAssistProps {
  /**
   * 읽어줄 텍스트. 미지정 시 document.body.innerText 를 사용합니다.
   */
  text?: string;
  /**
   * 기본 재생 속도
   * @default 1
   */
  defaultSpeed?: VoiceAssistSpeed;
  /**
   * 음성지원 버튼의 aria-label
   * @default "음성지원"
   */
  "aria-label"?: string;
  /**
   * 플로팅 버튼 위치
   * @default "bottom-right"
   */
  position?: "bottom-right" | "bottom-left";
  /**
   * 초기 상태 제어 (Storybook/테스트용)
   * @default "idle"
   */
  initialState?: VoiceAssistState;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SPEED_OPTIONS: VoiceAssistSpeed[] = [0.5, 0.75, 1, 1.25, 1.5, 2];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface PauseIconProps {
  size?: number;
}

function PauseIcon({ size = 24 }: PauseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <title>Pause</title>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

interface SpeedSelectProps {
  value: VoiceAssistSpeed;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SpeedSelect({ value, onChange }: SpeedSelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      aria-label="재생 속도"
      title="재생 속도"
      className={cn(
        "h-9 rounded-md border border-stroke-primary bg-surface-primary",
        "px-2 text-label-sm text-fg-basic",
        "cursor-pointer",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
      )}
    >
      {SPEED_OPTIONS.map((s) => (
        <option key={s} value={s}>
          {s}x
        </option>
      ))}
    </select>
  );
}

interface StopButtonProps {
  onClick: () => void;
}

function StopButton({ onClick }: StopButtonProps) {
  return (
    <button
      type="button"
      aria-label="정지"
      title="정지"
      onClick={onClick}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-md",
        "bg-surface-primary text-fg-basic",
        "border border-stroke-primary",
        "transition-colors hover:bg-surface-secondary active:bg-surface-tertiary",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
      )}
    >
      <Stop size={20} />
    </button>
  );
}

interface ControlPanelProps {
  speed: VoiceAssistSpeed;
  onSpeedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onStop: () => void;
}

function ControlPanel({ speed, onSpeedChange, onStop }: ControlPanelProps) {
  return (
    <div
      role="toolbar"
      aria-label="음성지원 컨트롤"
      className={cn(
        "flex items-center gap-2 rounded-xl",
        "bg-surface-primary px-3 py-2",
        "shadow-md",
        "border border-stroke-primary",
      )}
    >
      <SpeedSelect value={speed} onChange={onSpeedChange} />
      <StopButton onClick={onStop} />
    </div>
  );
}

interface FabButtonProps {
  isPlaying: boolean;
  ariaLabel: string;
  onClick: () => void;
}

function FabButton({ isPlaying, ariaLabel, onClick }: FabButtonProps) {
  return (
    <button
      type="button"
      aria-label={isPlaying ? "음성 일시정지" : ariaLabel}
      aria-pressed={isPlaying}
      title={isPlaying ? "일시정지" : "음성 읽기 시작"}
      onClick={onClick}
      className={cn(
        "inline-flex flex-col items-center justify-center gap-0.5",
        "h-16 w-16 rounded-2xl",
        "shadow-lg transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
        isPlaying
          ? "bg-btn-primary-fill text-fg-inverse-static hover:bg-btn-primary-fill-hover active:bg-btn-primary-fill-pressed"
          : "bg-surface-primary text-fg-basic border border-stroke-primary hover:bg-surface-secondary active:bg-surface-tertiary",
      )}
    >
      {isPlaying ? <PauseIcon size={24} /> : <Play size={24} />}
      <span className="text-[10px] font-bold leading-none">음성</span>
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

function VoiceAssist({
  text,
  defaultSpeed = 1,
  "aria-label": ariaLabel = "음성지원",
  position = "bottom-right",
  initialState = "idle",
}: VoiceAssistProps) {
  const [state, setState] = useState<VoiceAssistState>(initialState);
  const [speed, setSpeed] = useState<VoiceAssistSpeed>(defaultSpeed);
  const [announcement, setAnnouncement] = useState("");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const isSupported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  const resolveText = useCallback((): string => {
    if (text) return text;
    if (typeof document !== "undefined") {
      return document.body.innerText ?? "";
    }
    return "";
  }, [text]);

  const startUtterance = useCallback(
    (rate: VoiceAssistSpeed) => {
      if (!isSupported) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(resolveText());
      utterance.lang = "ko-KR";
      utterance.rate = rate;
      utterance.onend = () => setState("idle");
      utterance.onerror = () => setState("idle");
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isSupported, resolveText],
  );

  const handlePlay = useCallback(() => {
    if (!isSupported) return;

    if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
      setAnnouncement("음성 재생을 재개합니다.");
      return;
    }

    startUtterance(speed);
    setState("playing");
    setAnnouncement("음성 재생을 시작합니다.");
  }, [isSupported, state, speed, startUtterance]);

  const handlePause = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setState("paused");
    setAnnouncement("음성 재생을 일시정지합니다.");
  }, [isSupported]);

  const handleStop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setState("idle");
    setAnnouncement("음성 재생을 종료합니다.");
  }, [isSupported]);

  const handleSpeedChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newSpeed = Number(event.target.value) as VoiceAssistSpeed;
      setSpeed(newSpeed);

      if (state === "playing") {
        startUtterance(newSpeed);
      }
    },
    [state, startUtterance],
  );

  const handleFabClick = useCallback(() => {
    if (state === "playing") {
      handlePause();
    } else {
      handlePlay();
    }
  }, [state, handlePause, handlePlay]);

  if (!isSupported) {
    return null;
  }

  const isPlaying = state === "playing";
  const isActive = state === "playing" || state === "paused";

  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "fixed z-50 flex flex-col items-end gap-2",
        position === "bottom-right" ? "right-4 bottom-4" : "left-4 bottom-4",
      )}
    >
      <span aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </span>

      {isActive && (
        <ControlPanel
          speed={speed}
          onSpeedChange={handleSpeedChange}
          onStop={handleStop}
        />
      )}

      <FabButton
        isPlaying={isPlaying}
        ariaLabel={ariaLabel}
        onClick={handleFabClick}
      />
    </div>
  );
}

VoiceAssist.displayName = "VoiceAssist";

export {
  VoiceAssist,
  type VoiceAssistProps,
  type VoiceAssistSpeed,
  type VoiceAssistState,
};
