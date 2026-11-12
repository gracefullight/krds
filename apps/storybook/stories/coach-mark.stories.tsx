import { CoachMark } from "@gracefullight/krds/components";
import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof CoachMark> = {
  title: "KRDS-MUI/CoachMark",
  component: CoachMark,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "새로운 기능이나 복잡한 과업을 단계별 고맥락적 도움말로 안내하는 코치마크입니다. 대상 요소에 스포트라이트 외곽선을 표시하며, 사용자가 요청한 경우에만 실행합니다. 액션 버튼 순서: 그만보기 → 이전 → 다음(마치기/확인).",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function CoachMarkDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Button onClick={() => setOpen(true)}>따라하기 시작</Button>
      <div style={{ display: "flex", gap: 16 }}>
        <Button id="coach-apply" variant="outlined">
          신청하기
        </Button>
        <Button id="coach-sign" variant="outlined">
          서명하기
        </Button>
      </div>
      <CoachMark
        open={open}
        onClose={() => setOpen(false)}
        steps={[
          {
            target: "#coach-apply",
            title: "신청 버튼",
            description: "신청 버튼을 눌러 신청서를 작성하세요.",
          },
          {
            target: "#coach-sign",
            title: "서명",
            description: "작성이 끝나면 서명 버튼으로 서명을 진행하세요.",
          },
        ]}
      />
    </div>
  );
}

export const Default: Story = {
  name: "기본 (2단계)",
  render: () => <CoachMarkDemo />,
};
