import { HelpPanel } from "@gracefullight/krds-tw";
import type { HelpPanelTutorialStep } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "KRDS-TW/HelpPanel",
  component: HelpPanel,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "오른쪽에서 슬라이드인되는 도움말 패널과 단계별 따라하기 패널입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Help: Story = {
  name: "도움말 패널",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          도움말 열기
        </button>
        <HelpPanel
          variant="help"
          open={open}
          onClose={() => setOpen(false)}
          title="도움말"
        >
          <div className="flex flex-col gap-4">
            <p className="text-body-md text-fg-basic">
              이 기능에 대한 도움말 내용입니다. 원하는 작업을 선택하면 관련
              안내를 확인할 수 있습니다.
            </p>
            <ul className="list-disc pl-5 text-body-sm text-fg-subtle">
              <li>첫 번째 도움말 항목</li>
              <li>두 번째 도움말 항목</li>
              <li>세 번째 도움말 항목</li>
            </ul>
          </div>
        </HelpPanel>
      </div>
    );
  },
};

export const Tutorial: Story = {
  name: "따라하기 패널",
  render: () => {
    const [open, setOpen] = useState(false);
    const steps: HelpPanelTutorialStep[] = [
      {
        title: "1단계: 회원가입",
        description: "우측 상단의 회원가입 버튼을 클릭하여 계정을 생성하세요.",
      },
      {
        title: "2단계: 로그인",
        description: "가입한 아이디와 비밀번호로 로그인하세요.",
      },
      {
        title: "3단계: 서비스 이용",
        description: "로그인 후 원하는 서비스를 자유롭게 이용하실 수 있습니다.",
      },
    ];
    return (
      <div className="p-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          따라하기 시작
        </button>
        <HelpPanel
          variant="tutorial"
          open={open}
          onClose={() => setOpen(false)}
          title="서비스 따라하기"
          steps={steps}
        />
      </div>
    );
  },
};
