import type { Meta } from "@storybook/react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TextField } from "@mui/material";

const meta: Meta<typeof TextField> = {
  title: "KRDS/TextInput",
  component: TextField,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5178-11862&t=CEuLlotfB399DLbQ-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    variant: {
      options: ["outlined"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

export const ExampleTextField = {
  args: {
    disabled: false,
    error: false,
    placeholder: "내용을 입력하세요",
    size: "medium",
    variant: "outlined",
  },
};

export const ExampleTextFieldWithHelperText = {
  args: {
    disabled: false,
    error: false,
    helperText: (
      <>
        <CheckCircleIcon />
        메시지를 입력해주세요
      </>
    ),
    placeholder: "내용을 입력하세요",
    size: "medium",
    variant: "outlined",
  },
};
