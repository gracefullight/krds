import { Stepper, type StepperProps } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Stepper> = {
  title: "KRDS-TW/Stepper",
  component: Stepper,
  parameters: { layout: "padded" },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    activeStep: { control: { type: "number", min: 0 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const 신청절차 = [
  { id: "step1", label: "약관 동의" },
  { id: "step2", label: "본인 인증" },
  { id: "step3", label: "정보 입력" },
  { id: "step4", label: "신청 완료" },
];

export const Default: Story = {
  args: {
    steps: 신청절차,
    activeStep: 1,
    orientation: "horizontal",
  },
};

export const WithDescriptions: Story = {
  args: {
    steps: [
      {
        id: "step1",
        label: "약관 동의",
        description: "이용약관 및 개인정보 처리방침",
      },
      {
        id: "step2",
        label: "본인 인증",
        description: "휴대폰 또는 공동인증서",
      },
      { id: "step3", label: "정보 입력", description: "신청인 기본 정보 입력" },
      { id: "step4", label: "신청 완료", description: "접수번호 발급" },
    ],
    activeStep: 2,
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div className="w-64">
      <Stepper {...(args as StepperProps)} />
    </div>
  ),
  args: {
    steps: [
      { id: "step1", label: "접수", description: "서류 제출 완료" },
      { id: "step2", label: "검토", description: "담당자 검토 중" },
      { id: "step3", label: "승인", description: "최종 승인 대기" },
      { id: "step4", label: "완료", description: "처리 완료" },
    ],
    activeStep: 1,
    orientation: "vertical",
  },
};

export const Completed: Story = {
  args: {
    steps: 신청절차,
    activeStep: 3,
    orientation: "horizontal",
  },
};
