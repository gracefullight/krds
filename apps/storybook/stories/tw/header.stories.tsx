import { Header } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Header> = {
  title: "KRDS-TW/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
  argTypes: {
    logoText: {
      control: { type: "text" },
      description: "로고 텍스트",
    },
    showSearch: {
      control: { type: "boolean" },
      description: "검색 버튼 표시 여부",
    },
    showLogin: {
      control: { type: "boolean" },
      description: "로그인 버튼 표시 여부",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultNavItems = [
  { id: "home", label: "홈", href: "/", active: true },
  { id: "services", label: "서비스 안내", href: "/services" },
  { id: "notice", label: "공지사항", href: "/notice" },
  { id: "faq", label: "자주 묻는 질문", href: "/faq" },
];

export const Default: Story = {
  args: {
    logoText: "정부서비스",
    navigationItems: defaultNavItems,
    showSearch: true,
    showLogin: true,
    onSearchClick: fn(),
    onLoginClick: fn(),
  },
};

export const WithContactContent: Story = {
  args: {
    logoText: "민원24",
    navigationItems: defaultNavItems,
    showSearch: true,
    showLogin: true,
    contactContent: "고객센터 1234-5678",
    onSearchClick: fn(),
    onLoginClick: fn(),
  },
};

export const Minimal: Story = {
  args: {
    logoText: "정부24",
    showSearch: false,
    showLogin: false,
  },
};
