import { Close } from "@gracefullight/krds-icons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  title: "KRDS/Modal",
  component: Dialog,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5137-103084&t=Bfgm03l1Z3SwSxNc-4",
    },
    layout: "centered",
  },

  argTypes: {
    maxWidth: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    open: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleModal: Story = {
  args: {
    maxWidth: "medium",
    open: true,
    children: (
      <>
        <DialogTitle>
          타이틀
          <IconButton aria-label="close">
            <Close size={24} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나
            결정이 필요하거나 여러 작업을 포함할 수 있습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="tertiary">
            닫기
          </Button>
          <Button autoFocus>저장</Button>
        </DialogActions>
      </>
    ),
  },
};
