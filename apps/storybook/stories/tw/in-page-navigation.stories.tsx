import { InPageNavigation } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InPageNavigation> = {
  title: "KRDS-TW/InPageNavigation",
  component: InPageNavigation,
  parameters: { layout: "centered" },
  argTypes: {
    activeId: {
      control: { type: "text" },
      description: "현재 활성 섹션 id (controlled)",
    },
    sticky: {
      control: { type: "boolean" },
      description: "sticky 포지셔닝 활성화 여부",
    },
    stickyTop: {
      control: { type: "number" },
      description: "sticky 시 상단 오프셋(px)",
    },
    "aria-label": {
      control: { type: "text" },
      description: "nav 요소의 aria-label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { id: "section-overview", label: "개요", href: "#section-overview" },
  {
    id: "section-eligibility",
    label: "신청 자격",
    href: "#section-eligibility",
  },
  { id: "section-documents", label: "제출 서류", href: "#section-documents" },
  { id: "section-process", label: "처리 절차", href: "#section-process" },
  { id: "section-faq", label: "자주 묻는 질문", href: "#section-faq" },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    activeId: "section-overview",
    "aria-label": "콘텐츠 내 탐색",
  },
};

export const ActiveMiddleSection: Story = {
  args: {
    items: defaultItems,
    activeId: "section-documents",
    "aria-label": "콘텐츠 내 탐색",
  },
};

export const Sticky: Story = {
  args: {
    items: defaultItems,
    activeId: "section-eligibility",
    sticky: true,
    stickyTop: 64,
    "aria-label": "콘텐츠 내 탐색",
  },
};
