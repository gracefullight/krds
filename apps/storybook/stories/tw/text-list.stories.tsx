import type { Meta, StoryObj } from "@storybook/react";

import { TextList } from "@gracefullight/krds-tw";

const meta: Meta<typeof TextList> = {
  title: "KRDS-TW/TextList",
  component: TextList,
  parameters: { layout: "padded" },
  argTypes: {
    variant: {
      options: ["unordered", "ordered", "none"],
      control: { type: "radio" },
    },
    marker: {
      options: [
        "disc",
        "circle",
        "square",
        "dash",
        "decimal",
        "decimal-leading-zero",
        "lower-alpha",
        "upper-alpha",
        "lower-roman",
        "upper-roman",
        "none",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TextList
      variant="unordered"
      items={[
        { id: "1", content: "회원가입 후 로그인해 주세요" },
        { id: "2", content: "신청서 양식을 작성합니다" },
        { id: "3", content: "필요 서류를 첨부합니다" },
        { id: "4", content: "제출 후 처리 결과를 확인합니다" },
      ]}
    />
  ),
};

export const Ordered: Story = {
  render: () => (
    <TextList
      variant="ordered"
      items={[
        { id: "1", content: "개인정보 수집 및 이용에 동의합니다" },
        { id: "2", content: "서비스 이용약관에 동의합니다" },
        { id: "3", content: "마케팅 정보 수신에 동의합니다 (선택)" },
        { id: "4", content: "위치정보 이용에 동의합니다 (선택)" },
      ]}
    />
  ),
};

export const DashMarker: Story = {
  render: () => (
    <TextList
      variant="unordered"
      marker="dash"
      items={[
        { id: "1", content: "주민등록증 또는 운전면허증" },
        { id: "2", content: "재직증명서 (최근 3개월 이내)" },
        { id: "3", content: "소득증빙서류 (최근 1년 이내)" },
      ]}
    />
  ),
};
