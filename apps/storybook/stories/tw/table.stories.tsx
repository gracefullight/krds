import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@gracefullight/krds-tw";

const meta: Meta<typeof Table> = {
  title: "KRDS-TW/Table",
  component: Table,
  parameters: { layout: "padded" },
  argTypes: {
    density: {
      options: ["default", "compact"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>이름</TableHead>
          <TableHead>부서</TableHead>
          <TableHead>직책</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>홍길동</TableCell>
          <TableCell>운영팀</TableCell>
          <TableCell>팀장</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>김철수</TableCell>
          <TableCell>개발팀</TableCell>
          <TableCell>선임 개발자</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>이영희</TableCell>
          <TableCell>디자인팀</TableCell>
          <TableCell>UX 디자이너</TableCell>
        </TableRow>
      </TableBody>
      <TableCaption>직원 목록</TableCaption>
    </Table>
  ),
};

export const Compact: Story = {
  render: () => (
    <Table density="compact">
      <TableHeader>
        <TableRow>
          <TableHead>번호</TableHead>
          <TableHead>제목</TableHead>
          <TableHead>등록일</TableHead>
          <TableHead>조회수</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>공지사항 제목입니다</TableCell>
          <TableCell>2025-01-15</TableCell>
          <TableCell>1,234</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>두 번째 공지사항</TableCell>
          <TableCell>2025-01-10</TableCell>
          <TableCell>567</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>세 번째 공지사항</TableCell>
          <TableCell>2025-01-05</TableCell>
          <TableCell>890</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>항목</TableHead>
          <TableHead>단가</TableHead>
          <TableHead>수량</TableHead>
          <TableHead>금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>품목 A</TableCell>
          <TableCell>10,000원</TableCell>
          <TableCell>3</TableCell>
          <TableCell>30,000원</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>품목 B</TableCell>
          <TableCell>25,000원</TableCell>
          <TableCell>2</TableCell>
          <TableCell>50,000원</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>합계</TableCell>
          <TableCell>80,000원</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
