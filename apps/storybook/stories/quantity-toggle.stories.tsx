import { QuantityToggle } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof QuantityToggle> = {
  title: "KRDS-MUI/QuantityToggle",
  component: QuantityToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "한정된 범위 내에서 수량을 증감하는 수량토글입니다. 증감 버튼은 수량 필드를 가운데 두고 분리 배치하며, 최소/최대 값에 도달하면 해당 버튼을 비활성화합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 (발급 부수)",
  args: {
    label: "발급 부수",
    min: 1,
    max: 10,
    defaultValue: 1,
  },
};

export const Visitors: Story = {
  name: "관람 인원",
  args: {
    label: "관람 인원",
    min: 0,
    max: 5,
    defaultValue: 2,
  },
};
