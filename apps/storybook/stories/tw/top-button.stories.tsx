import { TopButton } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TopButton> = {
  title: "KRDS-TW/TopButton",
  component: TopButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "스크롤이 일정 거리 이상 내려가면 나타나는 맨 위로 이동 버튼입니다.",
      },
    },
  },
  argTypes: {
    threshold: {
      control: { type: "number" },
      description: "버튼이 나타나는 스크롤 거리 (px)",
    },
    behavior: {
      control: { type: "radio" },
      options: ["smooth", "auto"],
      description: "스크롤 이동 방식",
    },
    defaultFixed: {
      control: { type: "boolean" },
      description: "고정 위치 사용 여부",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 (고정 위치 해제)",
  args: {
    threshold: 0,
    defaultFixed: false,
    "aria-label": "맨 위로 이동",
    behavior: "smooth",
  },
};

export const Fixed: Story = {
  name: "고정 위치",
  args: {
    threshold: 0,
    defaultFixed: true,
    "aria-label": "맨 위로 이동",
    behavior: "smooth",
  },
};
