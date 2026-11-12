import { Toast } from "@gracefullight/krds/components";
import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "KRDS-MUI/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 행동에 대한 결과를 화면 중앙 하단에 일시적으로 표시하는 토스트입니다. 정보형은 2~3초, 주의·경고형은 3~4초 노출을 권장합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<"info" | "warning">("info");

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button
        onClick={() => {
          setSeverity("info");
          setOpen(true);
        }}
      >
        정보형 토스트
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setSeverity("warning");
          setOpen(true);
        }}
      >
        주의·경고형 토스트
      </Button>
      <Toast
        open={open}
        severity={severity}
        message={
          severity === "info" ? "저장되었습니다." : "업로드에 실패했습니다."
        }
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export const Default: Story = {
  name: "기본",
  render: () => <ToastDemo />,
};
