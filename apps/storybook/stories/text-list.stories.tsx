import { TextList } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextList> = {
  title: "KRDS-MUI/TextList",
  component: TextList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "계층 구조가 있는 텍스트 블록을 읽기 쉽게 구성하는 텍스트 목록입니다. 목록은 3수준 이내로 구성하며, 순서가 중요하지 않으면 순서 없는 목록을 사용합니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["unordered", "ordered", "none"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Unordered: Story = {
  name: "순서 없는 목록",
  args: {
    variant: "unordered",
    items: [
      { id: "1", content: "신분증 또는 주민등록증" },
      { id: "2", content: "전입신고서" },
      { id: "3", content: "임대차계약서 사본" },
    ],
    style: { width: 480 },
  },
};

export const Ordered: Story = {
  name: "순서 있는 목록",
  args: {
    variant: "ordered",
    items: [
      { id: "1", content: "신청 버튼을 선택합니다." },
      { id: "2", content: "신청서를 작성합니다." },
      { id: "3", content: "제출 후 결과를 확인합니다." },
    ],
    style: { width: 480 },
  },
};
