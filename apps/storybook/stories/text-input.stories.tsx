import type { OutlinedInputProps } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { Delete, SystemSuccess, Visibility } from "@gracefullight/krds-icons";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";

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

type Story = StoryObj<typeof meta>;

export const ExampleTextField: Story = {
  args: {
    disabled: false,
    error: false,
    placeholder: "내용을 입력하세요",
    size: "medium",
    variant: "outlined",
  },
};

export const ExampleTextFieldWithHelperText: Story = {
  args: {
    disabled: false,
    error: false,
    helperText: (
      <>
        <SystemSuccess size={16} />
        메시지를 입력해주세요
      </>
    ),
    placeholder: "내용을 입력하세요",
    size: "medium",
    variant: "outlined",
  },
};

export const ExampleTextFieldWithIcons: Story = {
  args: {
    disabled: false,
    error: false,
    placeholder: "내용을 입력하세요",
    size: "medium",
    variant: "outlined",
  },
  render: (args: OutlinedInputProps) => {
    return (
      <OutlinedInput
        {...args}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="clear text">
              <Delete />
            </IconButton>
            <IconButton edge="end">
              <Visibility />
            </IconButton>
          </InputAdornment>
        }
      />
    );
  },
};
