import { Snackbar } from "@gracefullight/krds/components";

import { SystemSuccess } from "@gracefullight/krds-icons";
import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "storybook/test";

const meta: Meta<typeof Snackbar> = {
  title: "KRDS-MUI/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 행동에 대한 결과나 중요도 낮은 메시지를 추가 행동(되돌리기, 다시 시도 등)과 함께 화면 중앙 하단에 표시합니다. 한 페이지에 하나만 표시하세요.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function SnackbarDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>스낵바 열기</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        title="삭제되었습니다"
        actionLabel="되돌리기"
        onAction={fn()}
      >
        휴지통에서 30일간 보관됩니다.
      </Snackbar>
    </>
  );
}

export const Default: Story = {
  name: "기본 (작업 버튼)",
  render: () => <SnackbarDemo />,
};

function IconDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>스낵바 열기</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        icon={<SystemSuccess size={20} />}
        autoHideDuration={5000}
      >
        신청이 완료되었습니다.
      </Snackbar>
    </>
  );
}

export const WithIcon: Story = {
  name: "아이콘 + 자동 닫힘",
  render: () => <IconDemo />,
};
