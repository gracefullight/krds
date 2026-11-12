import { Carousel } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

const SLIDES = [
  { id: "1", content: "첫 번째 공지 — 새로운 서비스를 소개합니다." },
  { id: "2", content: "두 번째 공지 — 신청 기간을 확인하세요." },
  { id: "3", content: "세 번째 공지 — 자주 묻는 질문이 업데이트되었습니다." },
];

const meta: Meta<typeof Carousel> = {
  title: "KRDS-MUI/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "하나의 컨테이너에서 여러 콘텐츠를 회전시켜 탐색하는 캐러셀입니다. 슬라이드는 5개 이내를 권장하며, 자동 회전 시 정지 컨트롤을 제공합니다. 중요한 정보 전달에는 사용하지 않습니다.",
      },
    },
  },
  argTypes: {
    indicator: {
      control: { type: "radio" },
      options: ["dot", "fraction"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 (도형 식별자)",
  args: {
    slides: SLIDES,
    style: { width: 480 },
  },
};

export const Fraction: Story = {
  name: "분수 식별자",
  args: {
    slides: SLIDES,
    indicator: "fraction",
    style: { width: 480 },
  },
};

export const AutoPlay: Story = {
  name: "자동 회전 (정지 컨트롤)",
  args: {
    slides: SLIDES,
    autoPlay: true,
    interval: 3000,
    style: { width: 480 },
  },
};
