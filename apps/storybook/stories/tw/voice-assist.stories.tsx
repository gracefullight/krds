import { VoiceAssist } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VoiceAssist> = {
  title: "KRDS-TW/VoiceAssist",
  component: VoiceAssist,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Web Speech API를 사용하여 페이지 텍스트를 음성으로 읽어줍니다. speechSynthesis를 지원하지 않는 환경에서는 렌더링되지 않습니다.",
      },
    },
  },
  argTypes: {
    text: {
      control: { type: "text" },
      description: "읽어줄 텍스트 (미지정 시 document.body.innerText 사용)",
    },
    defaultSpeed: {
      control: { type: "select" },
      options: [0.5, 0.75, 1, 1.25, 1.5, 2],
      description: "기본 재생 속도",
    },
    initialState: {
      control: { type: "radio" },
      options: ["idle", "playing", "paused"],
      description: "초기 상태",
    },
    position: {
      control: { type: "radio" },
      options: ["bottom-right", "bottom-left"],
      description: "플로팅 버튼 위치",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "안녕하세요. 이 페이지는 한국 정부 디자인 시스템(KRDS) 음성지원 컴포넌트 예시입니다. 음성 버튼을 누르면 텍스트를 읽어드립니다.",
    defaultSpeed: 1,
    initialState: "idle",
    position: "bottom-right",
    "aria-label": "음성지원",
  },
};

export const Playing: Story = {
  args: {
    text: "음성이 재생 중인 상태입니다. 일시정지 버튼을 눌러 멈출 수 있습니다.",
    defaultSpeed: 1,
    initialState: "playing",
    position: "bottom-right",
    "aria-label": "음성지원",
  },
};

export const BottomLeft: Story = {
  name: "왼쪽 하단 위치",
  args: {
    text: "왼쪽 하단에 위치한 음성지원 버튼입니다.",
    defaultSpeed: 1,
    initialState: "idle",
    position: "bottom-left",
    "aria-label": "음성지원",
  },
};
