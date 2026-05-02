import { MainMenu } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainMenu> = {
  title: "KRDS-TW/MainMenu",
  component: MainMenu,
  parameters: { layout: "fullscreen" },
  argTypes: {
    headerOffset: {
      control: { type: "number" },
      description: "헤더 높이 오프셋 (px)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    label: "정부서비스",
    href: "/services",
    children: [
      {
        label: "민원서비스",
        children: [
          { label: "민원 신청", href: "/services/civil/apply" },
          { label: "민원 조회", href: "/services/civil/search" },
          { label: "민원 처리현황", href: "/services/civil/status" },
        ],
      },
      {
        label: "생활정보",
        children: [
          { label: "복지서비스", href: "/services/welfare" },
          { label: "교육정보", href: "/services/education" },
        ],
      },
    ],
  },
  {
    label: "정책정보",
    href: "/policy",
    children: [
      { label: "주요정책", href: "/policy/main" },
      { label: "법령정보", href: "/policy/law" },
      { label: "규제정보", href: "/policy/regulation" },
    ],
  },
  {
    label: "공지사항",
    href: "/notice",
  },
  {
    label: "자주 묻는 질문",
    href: "/faq",
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    headerOffset: 64,
  },
};

export const SimpleMenu: Story = {
  args: {
    items: [
      { label: "홈", href: "/" },
      { label: "서비스 안내", href: "/services" },
      { label: "공지사항", href: "/notice" },
      { label: "문의하기", href: "/contact" },
    ],
    headerOffset: 64,
  },
};
