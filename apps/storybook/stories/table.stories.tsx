import type { TableProps } from "@mui/material/Table";
import type { Meta } from "@storybook/react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const meta: Meta<typeof Table> = {
  title: "KRDS/Table",
  component: Table,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5163-24323&t=CEuLlotfB399DLbQ-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const ExampleTable = {
  args: {
    sx: {
      minWidth: "500px",
    },
  },
  render: (args: TableProps) => {
    return (
      <TableContainer>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableCell>제목</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>제목</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>내용</TableCell>
              <TableCell>내용</TableCell>
              <TableCell>
                표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로
                사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록
                도와준다.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>내용</TableCell>
              <TableCell>내용</TableCell>
              <TableCell>
                열의 최소 너비는 콘텐츠의 길이를 고려하여 설정한다.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};
