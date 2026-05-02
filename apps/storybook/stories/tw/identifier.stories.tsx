import { Identifier } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Identifier> = {
  title: "KRDS-TW/Identifier",
  component: Identifier,
  parameters: { layout: "fullscreen" },
  argTypes: {
    name: {
      control: { type: "text" },
      description: "운영기관명",
    },
    address: {
      control: { type: "text" },
      description: "기관 주소",
    },
    phone: {
      control: { type: "text" },
      description: "대표 전화번호",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "행정안전부",
    address: "세종특별자치시 한누리대로 209",
    phone: "1588-2100",
    links: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "저작권정책", href: "/copyright" },
      { label: "접근성정책", href: "/accessibility" },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    name: "과학기술정보통신부",
    logoSrc: "https://placehold.co/120x40?text=LOGO",
    logoAlt: "과학기술정보통신부 로고",
    address: "세종특별자치시 가름로 194",
    phone: "044-202-4672",
    links: [
      { label: "개인정보처리방침", href: "/privacy", bold: true },
      { label: "저작권정책", href: "/copyright" },
    ],
  },
};

export const Minimal: Story = {
  args: {
    name: "보건복지부",
  },
};
