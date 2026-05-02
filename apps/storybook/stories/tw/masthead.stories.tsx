import { Masthead } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Masthead> = {
  title: "KRDS-TW/Masthead",
  component: Masthead,
  parameters: { layout: "fullscreen" },
  argTypes: {
    text: {
      control: { type: "text" },
      description: "공식 누리집 안내 문구",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "이 누리집은 대한민국 공식 전자정부 누리집입니다.",
  },
};

export const CustomText: Story = {
  args: {
    text: "이 사이트는 대한민국 정부 공식 사이트입니다.",
  },
};
