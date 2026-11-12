import { ContextualHelp } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContextualHelp> = {
  title: "KRDS-MUI/ContextualHelp",
  component: ContextualHelp,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "정보(i)/도움(?) 아이콘 버튼을 통해 사용자가 요청한 경우에만 팝오버로 부가 정보를 제공하는 맥락적 도움말입니다. 필수 정보는 본문에 제공해야 합니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["info", "help"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  name: "정보 제공 (i)",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <span>주민등록번호</span>
      <ContextualHelp variant="info" title="주민등록번호">
        공공 서비스 이용 시 본인 확인을 위해 사용되는 13자리 번호입니다.
      </ContextualHelp>
    </div>
  ),
};

export const Help: Story = {
  name: "도움 제공 (?)",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <span>신청서 작성</span>
      <ContextualHelp variant="help" title="작성 방법">
        신청서의 각 항목을 순서대로 입력하세요. 자세한 안내는 도움 패널에서
        확인할 수 있습니다.
      </ContextualHelp>
    </div>
  ),
};
