import type { Meta } from "@storybook/react";

import CloseIcon from "@mui/icons-material/Close";
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
  tags: ["autodocs"],
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

export const ExampleBottomSheet = {
  args: {
    open: true,
    anchor: "bottom",
    children: (
      <>
        <DialogTitle>
          타이틀
          <IconButton aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        내용
      </>
    ),
  },
};
