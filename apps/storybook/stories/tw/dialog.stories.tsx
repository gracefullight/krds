import { Button, Dialog } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
  title: "KRDS-TW/Dialog",
  component: Dialog,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: "다이얼로그 제목",
    children: "다이얼로그 본문 내용이 여기에 표시됩니다.",
  },
};

export const WithoutTitle: Story = {
  args: {
    open: true,
    children: "제목 없이 본문만 있는 다이얼로그입니다.",
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>다이얼로그 열기</Button>
        <Dialog open={open} onClose={() => setOpen(false)} title="확인">
          <p>이 작업을 진행하시겠습니까?</p>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="tertiary" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              확인
            </Button>
          </div>
        </Dialog>
      </div>
    );
  },
};
