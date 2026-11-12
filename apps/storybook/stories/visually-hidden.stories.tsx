import { VisuallyHidden } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VisuallyHidden> = {
  title: "KRDS-MUI/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "화면에는 보이지 않지만 스크린 리더는 읽을 수 있는 숨긴 콘텐츠입니다. display:none이나 visibility:hidden 대신 전용 숨김 스타일을 사용합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  render: () => (
    <div>
      <button type="button">
        <span aria-hidden="true">🔍</span>
        <VisuallyHidden>검색</VisuallyHidden>
      </button>
      <p style={{ marginTop: 16, fontSize: 14, color: "#464c53" }}>
        버튼의 시각적 레이블은 아이콘뿐이지만, 스크린 리더는 "검색"으로
        읽습니다.
      </p>
    </div>
  ),
};
