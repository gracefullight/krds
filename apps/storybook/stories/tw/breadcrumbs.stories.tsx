import { Breadcrumbs } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumbs> = {
  title: "KRDS-TW/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "홈", href: "/" },
      { label: "민원 서비스", href: "/civil" },
      { label: "민원 신청" },
    ],
  },
};

export const Deep: Story = {
  args: {
    items: [
      { label: "홈", href: "/" },
      { label: "정보 공개", href: "/info" },
      { label: "행정 정보", href: "/info/admin" },
      { label: "예산 현황", href: "/info/admin/budget" },
      { label: "2024년 예산안" },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: "홈", href: "/" },
      { label: "서비스 안내", href: "/service" },
      { label: "이용 방법" },
    ],
    separator: "/",
  },
};

export const TwoLevels: Story = {
  args: {
    items: [{ label: "홈", href: "/" }, { label: "공지사항" }],
  },
};
