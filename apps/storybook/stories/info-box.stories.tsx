import type { Meta, StoryObj } from "@storybook/react";

import { InfoBox, type InfoBoxProps } from "@gracefullight/krds/components";

const meta: Meta<typeof InfoBox> = {
  title: "Components/InfoBox",
  component: InfoBox,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/WtWFDtQ92hZo9E9fTPFFqt/KRDS_v1.0.0--Community-?node-id=5115-27448&t=sEGrXQaCkuomtOh3-4",
    },
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "radio" },
      options: ["default", "slim"],
    },
    content: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleInfoBox: Story = {
  args: {
    type: "primary",
    title: "콘텐츠 타이틀",
    content:
      "콘텐츠 중간에 사용자의 이해를 돕기 위해 안내 내용을 제공할 때 활용합니다.",
    size: "default",
  },
};

export const ExampleInfoBoxWithItems: Story = {
  args: {
    type: "primary",
    title: "콘텐츠 타이틀",
    content:
      "콘텐츠 중간에 사용자의 이해를 돕기 위해 안내 내용을 제공할 때 활용합니다.",
    size: "default",
  },
  render: (args: InfoBoxProps) => (
    <InfoBox {...args}>
      <InfoBox.Item>텍스트 목록 레이블1</InfoBox.Item>
      <InfoBox.Item>텍스트 목록 레이블2</InfoBox.Item>
      <InfoBox.Item>텍스트 목록 레이블3</InfoBox.Item>
    </InfoBox>
  ),
};
