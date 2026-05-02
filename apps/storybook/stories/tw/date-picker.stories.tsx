import { DatePicker } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "KRDS-TW/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "달력 팝오버로 날짜를 선택하는 컴포넌트입니다. 키보드 내비게이션 및 최소/최대 날짜 제한을 지원합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-64">
        <DatePicker
          label="날짜 선택"
          value={value}
          onChange={setValue}
          placeholder="YYYY-MM-DD"
        />
      </div>
    );
  },
};

export const WithMinMax: Story = {
  name: "날짜 범위 제한",
  render: () => {
    const [value, setValue] = useState("");
    const today = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const fmt = (d: Date) =>
      `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

    const minDate = fmt(today);
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 3);

    return (
      <div className="w-64">
        <DatePicker
          label="예약 날짜"
          helperText="오늘부터 3개월 이내만 선택 가능"
          value={value}
          onChange={setValue}
          min={minDate}
          max={fmt(maxDate)}
        />
      </div>
    );
  },
};

export const WithError: Story = {
  name: "오류 상태",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-64">
        <DatePicker
          label="날짜 선택"
          value={value}
          onChange={setValue}
          error
          helperText="올바른 날짜를 선택해주세요."
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "비활성화",
  args: {
    label: "날짜 선택",
    disabled: true,
    placeholder: "YYYY-MM-DD",
  },
};
