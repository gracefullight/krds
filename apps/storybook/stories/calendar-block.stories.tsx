import { Calendar } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "KRDS-MUI/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "날짜와 관련된 정보/기능을 제공하는 KRDS 달력입니다. 연/월 탐색, 요일 헤딩, 날짜 상태(오늘/선택/선택 불가/비활성), 이벤트 범례를 포함하며, 날짜 상태는 색상 외 수단(굵기·밑줄·식별자·대체 텍스트)으로도 구분합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  args: {
    defaultValue: "2026-11-12",
  },
};

function ControlledDemo() {
  const [value, setValue] = useState("2026-11-12");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Calendar value={value} onChange={setValue} />
      <p style={{ margin: 0, fontSize: 14, color: "#464c53" }}>
        선택한 날짜: {value}
      </p>
    </div>
  );
}

export const Controlled: Story = {
  name: "제어 모드",
  render: () => <ControlledDemo />,
};

export const WithEvents: Story = {
  name: "이벤트 + 범례",
  args: {
    defaultValue: "2026-11-12",
    events: [
      { date: "2026-11-03", label: "개천절", type: "공휴일" },
      { date: "2026-11-09", label: "한글날", type: "공휴일" },
      { date: "2026-11-15", label: "정기 휴관", type: "휴관일" },
      { date: "2026-11-20", label: "신청 마감", type: "일정" },
    ],
  },
};

export const WithRange: Story = {
  name: "선택 가능 범위",
  args: {
    defaultValue: "2026-11-12",
    minDate: "2026-11-10",
    maxDate: "2026-11-20",
  },
};
