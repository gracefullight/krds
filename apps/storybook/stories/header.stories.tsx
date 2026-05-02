import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "@gracefullight/krds/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof Header> = {
  title: "KRDS/Header",
  component: Header,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD/KRDS-v1.1.0?node-id=0-1",
    },
    layout: "fullscreen",
  },

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
    onSearchClick: { action: "search clicked" },
    onLoginClick: { action: "login clicked" },
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

export const WithContactArea: Story = {
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

export const MinimalHeader: Story = {
  args: {
    logoText: "정부24",
    showSearch: false,
    showLogin: false,
  },
};

export const SearchAndLoginOnly: Story = {
  args: {
    logoText: "정부포털",
    showSearch: true,
    showLogin: true,
    onSearchClick: fn(),
    onLoginClick: fn(),
  },
};
