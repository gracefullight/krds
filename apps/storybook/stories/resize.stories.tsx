import { Resize } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Resize> = {
  title: "KRDS-MUI/Resize",
  component: Resize,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "텍스트를 포함하여 화면에 표시되는 정보를 확대/축소하는 화면 크기 조정입니다. 옵션은 설명적인 레이블과 함께 5개 이내로 제공합니다 (작게 90% / 보통 100% / 조금 크게 110% / 크게 130% / 가장 크게 150%).",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function ResizeDemo() {
  const [value, setValue] = useState(100);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Resize value={value} onChange={setValue} />
      <p style={{ margin: 0 }}>
        현재 배율: {value}% — 이 텍스트의 크기가 함께 조절됩니다.
      </p>
    </div>
  );
}

export const Default: Story = {
  name: "기본",
  render: () => <ResizeDemo />,
};
