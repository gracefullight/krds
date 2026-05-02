import { CoachMark } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof CoachMark> = {
  title: "KRDS-TW/CoachMark",
  component: CoachMark,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "순서대로 진행되는 온보딩 힌트 팝오버입니다. 각 단계에서 대상 요소에 앵커링됩니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const DEMO_STEPS = [
  {
    id: 1,
    title: "검색 기능",
    description: "상단 검색창에서 원하는 정보를 빠르게 찾을 수 있습니다.",
  },
  {
    id: 2,
    title: "메뉴 탐색",
    description: "좌측 메뉴를 통해 다양한 서비스 카테고리를 탐색하세요.",
  },
  {
    id: 3,
    title: "즐겨찾기 등록",
    description: "자주 사용하는 서비스를 즐겨찾기로 등록해 빠르게 접근하세요.",
  },
];

export const Default: Story = {
  name: "기본 온보딩",
  render: () => {
    const [step, setStep] = useState(0);
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <div className="flex h-64 items-center justify-center">
          <button
            type="button"
            onClick={() => {
              setStep(0);
              setVisible(true);
            }}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            온보딩 다시 시작
          </button>
        </div>
      );
    }

    return (
      <div className="relative flex h-64 items-center justify-center">
        <p className="text-body-md text-fg-subtle">
          페이지 콘텐츠 영역 (코치마크 팝오버가 표시됩니다)
        </p>
        <CoachMark
          steps={DEMO_STEPS}
          currentStep={step}
          onStepChange={setStep}
          onComplete={() => setVisible(false)}
          onSkip={() => setVisible(false)}
        />
      </div>
    );
  },
};

export const SingleStep: Story = {
  name: "단일 단계",
  render: () => {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <div className="flex h-64 items-center justify-center">
          <button
            type="button"
            onClick={() => setVisible(true)}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            코치마크 다시 보기
          </button>
        </div>
      );
    }

    return (
      <div className="relative flex h-64 items-center justify-center">
        <CoachMark
          steps={[
            {
              id: 1,
              title: "새 기능 안내",
              description: "새로운 기능이 추가되었습니다. 확인해 보세요!",
            },
          ]}
          currentStep={0}
          onStepChange={() => {
            // controlled in real usage
          }}
          onComplete={() => setVisible(false)}
          onSkip={() => setVisible(false)}
        />
      </div>
    );
  },
};
