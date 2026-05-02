export type VoiceAssistSpeed = 0.5 | 0.75 | 1 | 1.25 | 1.5 | 2;

export type VoiceAssistState = "idle" | "playing" | "paused";

export interface VoiceAssistProps {
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
   * 초기 상태 제어 (Storybook/테스트용)
   * @default "idle"
   */
  initialState?: VoiceAssistState;
}
