import { BackButton } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";

const meta: Meta<typeof BackButton> = {
  title: "KRDS-TW/BackButton",
  component: BackButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "상단바 좌측에 배치하는 뒤로가기 버튼입니다. 직전 화면(또는 상위 단계)으로 이동하며, 닫기/취소 버튼과 역할을 혼용하지 않습니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  args: {
    onBack: fn(),
  },
};

export const WithTitle: Story = {
  name: "화면 제목 포함",
  args: {
    title: "신청서 작성",
    onBack: fn(),
  },
};
