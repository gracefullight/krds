import type { Meta, StoryObj } from "@storybook/react";

import { Close } from "@gracefullight/krds-icons";
import { DialogTitle, IconButton, SwipeableDrawer } from "@mui/material";

const meta: Meta<typeof SwipeableDrawer> = {
  title: "KRDS/BottomSheet",
  component: SwipeableDrawer,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5117-28570&t=uTlRkVSMsJmUNHgs-4",
    },
    layout: "centered",
  },

  argTypes: {
    anchor: {
      options: ["bottom"],
      control: { type: "radio" },
    },
    open: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleBottomSheet: Story = {
  args: {
    open: true,
    anchor: "bottom",
    children: (
      <>
        <DialogTitle>
          타이틀
          <IconButton aria-label="close">
            <Close size={24} />
          </IconButton>
        </DialogTitle>
        내용
      </>
    ),
  },
};
