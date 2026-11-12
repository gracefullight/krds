import { Button, ToastProvider, useToast } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "KRDS-TW/Toast",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 행동에 대한 결과를 화면 중앙 하단에 일시적으로 표시하는 토스트입니다. 정보형은 2~3초, 주의·경고형은 3~4초 노출을 권장하며, 추가 행동이 필요하면 Snackbar를 사용하세요.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button onClick={() => toast("저장되었습니다.")}>정보형 토스트</Button>
      <Button
        variant="secondary"
        onClick={() => toast("업로드에 실패했습니다.", { severity: "warning" })}
      >
        주의·경고형 토스트
      </Button>
    </div>
  );
}

export const Default: Story = {
  name: "기본",
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};

function QueueDemo() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => {
        toast("첫 번째 메시지");
        toast("두 번째 메시지");
        toast("세 번째 메시지");
      }}
    >
      토스트 3개 연속 실행
    </Button>
  );
}

export const Queue: Story = {
  name: "큐 (하나씩 표시)",
  render: () => (
    <ToastProvider>
      <QueueDemo />
    </ToastProvider>
  ),
};
