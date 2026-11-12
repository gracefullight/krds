import { Disclosure } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Disclosure> = {
  title: "KRDS-MUI/Disclosure",
  component: Disclosure,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "부가 정보를 기본 축소 상태로 제공했다가 사용자 요청 시 확장하는 디스클로저입니다. 아코디언/탭보다 눈에 덜 띄어야 하며, 오류 메시지나 중요 정보 전달에는 사용하지 않습니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  args: {
    summary: "자세히 보기",
    children:
      "디스클로저는 사용자의 인지적 부담을 줄이기 위해 부가 정보를 숨겨두었다가 요청 시 표시합니다.",
    style: { width: 480 },
  },
};
