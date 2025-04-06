import type { Meta } from "@storybook/react";

import { Alert, AlertTitle } from "@mui/material";
import { fn } from "@storybook/test";

const meta: Meta<typeof Alert> = {
  title: "KRDS/Alert",
  component: Alert,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5120-23639&t=5iLlxTAzJnfFkDu5-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    severity: {
      options: ["danger", "warning", "success", "information"],
      control: { type: "select" },
    },
  },
};

export default meta;

export const ExampleAlert = {
  args: {
    children: "메세지 내용 최대 1줄",
    severity: "success",
  },
};

export const ExampleAlertWithTitle = {
  args: {
    children: (
      <>
        <AlertTitle>메세지 타이틀</AlertTitle>
        콘텐츠 내 알럿은 최대 2줄 이내로 작성합니다.
      </>
    ),
    severity: "success",
  },
};
