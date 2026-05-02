import type { Meta, StoryObj } from "@storybook/react";

import { InfoBox, InfoBoxItem } from "@gracefullight/krds-tw";

const meta: Meta<typeof InfoBox> = {
  title: "KRDS-TW/InfoBox",
  component: InfoBox,
  parameters: { layout: "padded" },
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "slim"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InfoBox
      type="primary"
      title="개인정보 처리 안내"
      content="수집된 개인정보는 서비스 제공 목적으로만 사용됩니다."
    >
      <InfoBoxItem>수집 항목: 이름, 이메일, 전화번호</InfoBoxItem>
      <InfoBoxItem>보유 기간: 회원 탈퇴 후 30일까지</InfoBoxItem>
      <InfoBoxItem>제3자 제공: 법령에 따른 경우 외 미제공</InfoBoxItem>
    </InfoBox>
  ),
};

export const Secondary: Story = {
  render: () => (
    <InfoBox
      type="secondary"
      title="유의사항"
      content="아래 사항을 반드시 확인해 주세요."
    >
      <InfoBoxItem>신청 마감일은 매월 말일입니다</InfoBoxItem>
      <InfoBoxItem>서류 미비 시 처리가 지연될 수 있습니다</InfoBoxItem>
      <InfoBoxItem>문의사항은 고객센터로 연락주세요</InfoBoxItem>
    </InfoBox>
  ),
};

export const Slim: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InfoBox
        type="primary"
        size="slim"
        content="로그인 후 모든 서비스를 이용하실 수 있습니다."
      />
      <InfoBox
        type="secondary"
        size="slim"
        content="입력하신 정보는 암호화되어 안전하게 처리됩니다."
      />
    </div>
  ),
};
