import type { Meta, StoryObj } from "@storybook/react";

import { VoiceAssist } from "@gracefullight/krds/components";

const meta: Meta<typeof VoiceAssist> = {
  title: "KRDS/VoiceAssist",
  component: VoiceAssist,
  parameters: {
    design: {
      type: "link",
      url: "https://www.krds.go.kr/html/site/component/component_accessibility.html",
    },
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "KRDS v1.1.0 신규 컴포넌트. Web Speech API(speechSynthesis)를 사용하여 페이지 텍스트를 음성으로 읽어줍니다. 브라우저가 speechSynthesis를 지원하지 않는 환경에서는 렌더링하지 않습니다.",
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
      description: "초기 상태 (Storybook/테스트용)",
    },
    "aria-label": {
      control: { type: "text" },
      description: "음성지원 버튼의 aria-label",
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
    "aria-label": "음성지원",
  },
};

export const Playing: Story = {
  args: {
    text: "음성이 재생 중인 상태입니다. 일시정지 버튼을 눌러 멈출 수 있으며, 정지 버튼을 누르면 처음부터 다시 시작합니다.",
    defaultSpeed: 1,
    initialState: "playing",
    "aria-label": "음성지원",
  },
};

export const Paused: Story = {
  args: {
    text: "음성이 일시정지된 상태입니다. 재생 버튼을 눌러 다시 이어서 들을 수 있습니다.",
    defaultSpeed: 1,
    initialState: "paused",
    "aria-label": "음성지원",
  },
};

export const FastSpeed: Story = {
  args: {
    text: "빠른 속도(2배속)로 재생하는 예시입니다.",
    defaultSpeed: 2,
    initialState: "idle",
    "aria-label": "음성지원",
  },
};
