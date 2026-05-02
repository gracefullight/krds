import type { Meta } from "@storybook/react";
import type { ReactRenderer } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { StructuredList } from "@gracefullight/krds-tw";

// StructuredList uses a discriminated union for props,
// so we type Meta with an empty args object to avoid "never" inference.
const meta: Meta = {
  title: "KRDS-TW/StructuredList",
  component: StructuredList,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<ReactRenderer>;

export const Default: Story = {
  render: () => (
    <StructuredList
      variant="default"
      items={[
        { label: "이름", value: "홍길동" },
        { label: "생년월일", value: "1990년 1월 1일" },
        { label: "이메일", value: "hong@example.com" },
        { label: "전화번호", value: "010-1234-5678" },
        {
          label: "주소",
          value: "서울특별시 종로구 세종대로 209",
        },
      ]}
    />
  ),
};

export const TableVariant: Story = {
  render: () => (
    <StructuredList
      variant="table"
      caption="분기별 매출 현황"
      columns={[
        { header: "구분", key: "category" },
        { header: "1분기", key: "q1" },
        { header: "2분기", key: "q2" },
        { header: "3분기", key: "q3" },
        { header: "4분기", key: "q4" },
      ]}
      rows={[
        {
          rowLabel: "매출액",
          cells: {
            category: "매출액",
            q1: "1,200만원",
            q2: "1,500만원",
            q3: "1,800만원",
            q4: "2,100만원",
          },
        },
        {
          rowLabel: "비용",
          cells: {
            category: "비용",
            q1: "800만원",
            q2: "900만원",
            q3: "1,100만원",
            q4: "1,300만원",
          },
        },
        {
          rowLabel: "순이익",
          cells: {
            category: "순이익",
            q1: "400만원",
            q2: "600만원",
            q3: "700만원",
            q4: "800만원",
          },
        },
      ]}
    />
  ),
};
