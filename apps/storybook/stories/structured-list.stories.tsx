import type { StructuredListProps } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

import { StructuredList } from "@gracefullight/krds/components";

const meta: Meta<StructuredListProps> = {
  title: "KRDS-MUI/StructuredList",
  component: StructuredList,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD?node-id=4869:220254",
    },
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "table"],
    },
  },
};

export default meta;

type Story = StoryObj<StructuredListProps>;

// ─── Default variant ─────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    variant: "default",
    items: [
      { label: "이름", value: "홍길동" },
      { label: "생년월일", value: "1990년 1월 1일" },
      { label: "주소", value: "서울특별시 종로구 세종대로 209" },
      { label: "전화번호", value: "010-1234-5678" },
      {
        label: "이메일",
        value: "hong@example.go.kr",
      },
    ],
  } as never,
};

// ─── Table variant ────────────────────────────────────────────────────────────

export const Table: Story = {
  args: {
    variant: "table",
    caption: "행정구역별 인구 현황",
    columns: [
      { key: "region", header: "행정구역" },
      { key: "population", header: "인구 수" },
      { key: "households", header: "세대 수" },
      { key: "area", header: "면적 (km²)" },
    ],
    rows: [
      {
        cells: {
          region: "서울특별시",
          population: "9,428,372",
          households: "4,274,628",
          area: "605.24",
        },
      },
      {
        cells: {
          region: "부산광역시",
          population: "3,349,016",
          households: "1,487,212",
          area: "770.06",
        },
      },
      {
        cells: {
          region: "인천광역시",
          population: "2,948,375",
          households: "1,239,904",
          area: "1,063.34",
        },
      },
      {
        cells: {
          region: "대구광역시",
          population: "2,385,412",
          households: "1,012,548",
          area: "883.54",
        },
      },
      {
        cells: {
          region: "광주광역시",
          population: "1,441,970",
          households: "629,017",
          area: "501.28",
        },
      },
    ],
  } as never,
};

// ─── Table variant with rowLabel ──────────────────────────────────────────────

export const TableWithRowLabel: Story = {
  name: "Table (rowLabel 사용)",
  args: {
    variant: "table",
    caption: "민원 처리 현황",
    columns: [
      { key: "category", header: "구분" },
      { key: "received", header: "접수" },
      { key: "processed", header: "처리" },
      { key: "pending", header: "미처리" },
    ],
    rows: [
      {
        rowLabel: "전체",
        cells: {
          category: "전체",
          received: "12,540",
          processed: "11,830",
          pending: "710",
        },
      },
      {
        rowLabel: "온라인",
        cells: {
          category: "온라인",
          received: "8,210",
          processed: "7,950",
          pending: "260",
        },
      },
      {
        rowLabel: "방문",
        cells: {
          category: "방문",
          received: "3,120",
          processed: "2,980",
          pending: "140",
        },
      },
      {
        rowLabel: "우편·팩스",
        cells: {
          category: "우편·팩스",
          received: "1,210",
          processed: "900",
          pending: "310",
        },
      },
    ],
  } as never,
};
