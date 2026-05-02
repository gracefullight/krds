import { SideNavigation } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SideNavigation> = {
  title: "KRDS-TW/SideNavigation",
  component: SideNavigation,
  parameters: { layout: "centered" },
  argTypes: {
    "aria-label": {
      control: { type: "text" },
      description: "nav 요소의 aria-label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    id: "intro",
    label: "소개",
    href: "/intro",
    active: true,
  },
  {
    id: "services",
    label: "서비스",
    children: [
      {
        id: "services-civil",
        label: "민원서비스",
        children: [
          {
            id: "services-civil-apply",
            label: "민원 신청",
            href: "/services/civil/apply",
          },
          {
            id: "services-civil-search",
            label: "민원 조회",
            href: "/services/civil/search",
          },
        ],
      },
      {
        id: "services-welfare",
        label: "복지서비스",
        href: "/services/welfare",
      },
    ],
  },
  {
    id: "policy",
    label: "정책정보",
    children: [
      { id: "policy-main", label: "주요정책", href: "/policy/main" },
      { id: "policy-law", label: "법령정보", href: "/policy/law" },
    ],
  },
  {
    id: "notice",
    label: "공지사항",
    href: "/notice",
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    "aria-label": "사이드 메뉴",
  },
};

export const WithDefaultExpanded: Story = {
  args: {
    items: defaultItems,
    defaultExpandedIds: ["services", "services-civil"],
    "aria-label": "사이드 메뉴",
  },
};

export const Flat: Story = {
  args: {
    items: [
      { id: "home", label: "홈", href: "/", active: true },
      { id: "about", label: "소개", href: "/about" },
      { id: "services", label: "서비스", href: "/services" },
      { id: "contact", label: "문의하기", href: "/contact" },
    ],
    "aria-label": "페이지 메뉴",
  },
};
