import { Play, Stop } from "@gracefullight/krds-icons";
import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "#/components/blocks/voice-assist/voice-assist.styles";
import type {
  VoiceAssistProps,
  VoiceAssistSpeed,
  VoiceAssistState,
} from "#/components/blocks/voice-assist/voice-assist.types";

const SPEED_OPTIONS: VoiceAssistSpeed[] = [0.5, 0.75, 1, 1.25, 1.5, 2];

/**
 * VoiceAssist (음성지원) — KRDS v1.1.0 NEW
 *
 * Web Speech API(speechSynthesis)를 사용하여 페이지 텍스트를 읽어줍니다.
 * 브라우저가 speechSynthesis를 지원하지 않으면 렌더링하지 않습니다.
 */
export default function VoiceAssist({
  text,
  defaultSpeed = 1,
  "aria-label": ariaLabel = "음성지원",
  initialState = "idle",
}: VoiceAssistProps) {
  const [state, setState] = useState<VoiceAssistState>(initialState);
  const [speed, setSpeed] = useState<VoiceAssistSpeed>(defaultSpeed);
  const [announcement, setAnnouncement] = useState("");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isSupported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  // 컴포넌트 언마운트 시 음성 중지
  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  // 재생할 텍스트 결정
  const resolveText = useCallback((): string => {
    if (text) return text;
    if (typeof document !== "undefined") {
      return document.body.innerText ?? "";
    }
    return "";
  }, [text]);

  const handlePlay = useCallback(() => {
    if (!isSupported) return;

    if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
      setAnnouncement("음성 재생을 재개합니다.");
      return;
    }

    // idle 상태에서 새로 시작
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(resolveText());
    utterance.lang = "ko-KR";
    utterance.rate = speed;
    utterance.onend = () => setState("idle");
    utterance.onerror = () => setState("idle");
    utteranceRef.current = utterance;

    window.speechSynthesis.speak(utterance);
    setState("playing");
    setAnnouncement("음성 재생을 시작합니다.");
  }, [isSupported, state, speed, resolveText]);

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

      // 재생 중이면 재시작하여 속도 적용
      if (state === "playing" && isSupported) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(resolveText());
        utterance.lang = "ko-KR";
        utterance.rate = newSpeed;
        utterance.onend = () => setState("idle");
        utterance.onerror = () => setState("idle");
        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    },
    [isSupported, state, resolveText],
  );

  const handleFabClick = useCallback(() => {
    if (state === "playing") {
      handlePause();
    } else {
      handlePlay();
    }
  }, [state, handlePause, handlePlay]);

  // speechSynthesis 미지원 환경에서는 렌더링하지 않음
  if (!isSupported) {
    return null;
  }

  const isPlaying = state === "playing";
  const isActive = state === "playing" || state === "paused";

  return (
    <S.VoiceAssistRoot>
      <S.VoiceAssistLiveRegion aria-live="polite" aria-atomic="true">
        {announcement}
      </S.VoiceAssistLiveRegion>

      {isActive && (
        <S.VoiceAssistPanel role="toolbar" aria-label="음성지원 컨트롤">
          {/* 속도 선택 */}
          <S.VoiceAssistSpeedSelect
            value={speed}
            onChange={handleSpeedChange}
            aria-label="재생 속도"
            title="재생 속도"
          >
            {SPEED_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}x
              </option>
            ))}
          </S.VoiceAssistSpeedSelect>

          {/* 정지 버튼 */}
          <S.VoiceAssistIconButton
            type="button"
            aria-label="정지"
            onClick={handleStop}
            title="정지"
          >
            <Stop size={20} />
          </S.VoiceAssistIconButton>
        </S.VoiceAssistPanel>
      )}

      {/* 메인 FAB — 재생/일시정지 */}
      <S.VoiceAssistFab
        type="button"
        $playing={isPlaying}
        aria-label={isPlaying ? "음성 일시정지" : ariaLabel}
        aria-pressed={isPlaying}
        onClick={handleFabClick}
        title={isPlaying ? "일시정지" : "음성 읽기 시작"}
      >
        <Play size={24} />
        <S.VoiceAssistFabLabel>음성</S.VoiceAssistFabLabel>
      </S.VoiceAssistFab>
    </S.VoiceAssistRoot>
  );
}
