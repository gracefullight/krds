import { Close } from "@gracefullight/krds-icons";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "KRDS/Tooltip",
  component: Tooltip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5151-5711&t=So0c6gcp9D4yY4IV-4",
    },
    layout: "centered",
  },

  argTypes: {
    arrow: {
      control: {
        type: "boolean",
      },
    },
    open: {
      control: {
        type: "boolean",
      },
    },
    placement: {
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "auto",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
        "auto-start",
        "auto-end",
      ],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["default", "rich"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleTooltip: Story = {
  args: {
    arrow: true,
    open: true,
    placement: "bottom",
    variant: "default",
    title: (
      <>
        <Typography variant="body-small">
          아이콘 버튼에 제공되는 툴팁아이콘
        </Typography>
        <IconButton>
          <Close />
        </IconButton>
      </>
    ),
    children: (
      <IconButton>
        <DeleteIcon />
      </IconButton>
    ),
  },
};

export const ExampleRichTooltip = {
  args: {
    open: true,
    placement: "bottom",
    variant: "rich",
    title: (
      <>
        <Typography variant="body-small">
          툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을
          포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록
          주의합니다.
        </Typography>
        <IconButton>
          <Close />
        </IconButton>
      </>
    ),
    children: (
      <IconButton>
        <DeleteIcon />
      </IconButton>
    ),
  },
};
