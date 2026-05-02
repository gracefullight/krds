import { SplashScreen } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SplashScreen> = {
  title: "KRDS-TW/SplashScreen",
  component: SplashScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "애플리케이션 로딩 시 표시되는 스플래시 화면입니다. 로고, 제목, 설명 및 로딩 인디케이터를 지원합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 (로고만)",
  args: {},
};

export const WithTitle: Story = {
  name: "제목 포함",
  args: {
    title: "정부24",
    description: "국민과 함께하는 정부 서비스",
  },
};

export const Loading: Story = {
  name: "로딩 중",
  args: {
    title: "서비스 준비 중",
    description: "잠시만 기다려 주세요.",
    loading: true,
  },
};
