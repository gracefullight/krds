import { SkipLink } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SkipLink> = {
  title: "KRDS-TW/SkipLink",
  component: SkipLink,
  parameters: { layout: "fullscreen" },
  argTypes: {
    href: {
      control: { type: "text" },
      description: "본문 앵커 링크",
    },
    children: {
      control: { type: "text" },
      description: "링크 텍스트",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#main",
    children: "본문 바로가기",
  },
};

export const CustomTarget: Story = {
  args: {
    href: "#content",
    children: "콘텐츠 바로가기",
  },
};
