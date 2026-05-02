import { UserFeedback } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof UserFeedback> = {
  title: "KRDS-TW/UserFeedback",
  component: UserFeedback,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 만족도 피드백을 수집하는 컴포넌트입니다. 라디오 버튼으로 선택 후 자유 의견을 입력할 수 있습니다.",
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
      <div className="w-96">
        <UserFeedback
          value={value}
          onChange={setValue}
          onSubmit={(v, comment) =>
            alert(`피드백: ${v}${comment ? `, 의견: ${comment}` : ""}`)
          }
        />
      </div>
    );
  },
};

export const CustomQuestion: Story = {
  name: "사용자 정의 질문",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-96">
        <UserFeedback
          question="이 페이지가 목적에 맞게 구성되어 있나요?"
          options={[
            { value: "yes", label: "예" },
            { value: "no", label: "아니요" },
            { value: "partial", label: "부분적으로" },
          ]}
          value={value}
          onChange={setValue}
          onSubmit={(v) => alert(`응답: ${v}`)}
        />
      </div>
    );
  },
};
