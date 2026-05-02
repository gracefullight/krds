import { GettingStarted } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GettingStarted> = {
  title: "KRDS-TW/GettingStarted",
  component: GettingStarted,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "서비스 시작 전 안내 단계를 순서대로 보여주는 컴포넌트입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  args: {
    title: "서비스 시작하기",
    description: "아래 단계를 순서대로 완료하면 서비스를 이용할 수 있습니다.",
    steps: [
      {
        title: "본인인증",
        description: "공동인증서 또는 간편인증으로 본인을 확인해주세요.",
      },
      {
        title: "정보 입력",
        description: "필요한 정보를 입력해주세요.",
      },
      {
        title: "신청 완료",
        description: "입력한 정보를 확인 후 신청을 완료해주세요.",
      },
    ],
    actionLabel: "시작하기",
    onAction: () => alert("시작하기 클릭"),
  },
};

export const WithoutDescription: Story = {
  name: "설명 없음",
  args: {
    title: "빠른 시작",
    steps: [
      { title: "계정 생성" },
      { title: "프로필 설정" },
      { title: "서비스 이용" },
    ],
    actionLabel: "바로 시작",
    onAction: () => alert("바로 시작 클릭"),
  },
};

export const WithoutAction: Story = {
  name: "액션 버튼 없음",
  args: {
    title: "준비 단계",
    description: "서비스 이용 전 아래 사항을 확인해주세요.",
    steps: [
      { title: "인터넷 브라우저 최신 버전 확인" },
      { title: "공동인증서 또는 간편인증 준비" },
      { title: "개인정보 처리방침 확인" },
    ],
  },
};
