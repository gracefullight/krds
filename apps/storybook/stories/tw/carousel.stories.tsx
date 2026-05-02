import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "@gracefullight/krds-tw";

const meta: Meta<typeof Carousel> = {
  title: "KRDS-TW/Carousel",
  component: Carousel,
  parameters: { layout: "padded" },
  argTypes: {
    showArrows: {
      control: { type: "boolean" },
    },
    showDots: {
      control: { type: "boolean" },
    },
    autoPlay: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSlides = [
  {
    id: 1,
    content: (
      <div className="flex h-48 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
        <div className="text-center">
          <p className="text-xl font-bold">첫 번째 슬라이드</p>
          <p className="mt-1 text-sm">신규 서비스 출시 안내</p>
        </div>
      </div>
    ),
    alt: "신규 서비스 출시 안내",
  },
  {
    id: 2,
    content: (
      <div className="flex h-48 items-center justify-center rounded-xl bg-green-100 text-green-800">
        <div className="text-center">
          <p className="text-xl font-bold">두 번째 슬라이드</p>
          <p className="mt-1 text-sm">이벤트 및 혜택 안내</p>
        </div>
      </div>
    ),
    alt: "이벤트 및 혜택 안내",
  },
  {
    id: 3,
    content: (
      <div className="flex h-48 items-center justify-center rounded-xl bg-yellow-100 text-yellow-800">
        <div className="text-center">
          <p className="text-xl font-bold">세 번째 슬라이드</p>
          <p className="mt-1 text-sm">공지사항 확인하기</p>
        </div>
      </div>
    ),
    alt: "공지사항 확인하기",
  },
  {
    id: 4,
    content: (
      <div className="flex h-48 items-center justify-center rounded-xl bg-purple-100 text-purple-800">
        <div className="text-center">
          <p className="text-xl font-bold">네 번째 슬라이드</p>
          <p className="mt-1 text-sm">자주 묻는 질문</p>
        </div>
      </div>
    ),
    alt: "자주 묻는 질문",
  },
  {
    id: 5,
    content: (
      <div className="flex h-48 items-center justify-center rounded-xl bg-red-100 text-red-800">
        <div className="text-center">
          <p className="text-xl font-bold">다섯 번째 슬라이드</p>
          <p className="mt-1 text-sm">고객센터 연락처</p>
        </div>
      </div>
    ),
    alt: "고객센터 연락처",
  },
];

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <Carousel slides={sampleSlides} aria-label="주요 공지사항" />
    </div>
  ),
};

export const AutoPlay: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <Carousel
        slides={sampleSlides}
        autoPlay
        autoPlayInterval={2000}
        aria-label="자동 슬라이드"
      />
    </div>
  ),
};

export const DotsOnly: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <Carousel
        slides={sampleSlides.slice(0, 3)}
        showArrows={false}
        showDots
        aria-label="점 내비게이션 슬라이드"
      />
    </div>
  ),
};
