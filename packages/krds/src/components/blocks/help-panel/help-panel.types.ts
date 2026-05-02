import type { ReactNode } from "react";

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
