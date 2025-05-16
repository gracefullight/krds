import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "KRDS/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/WtWFDtQ92hZo9E9fTPFFqt/KRDS_v1.0.0--Community-?node-id=5153-118258&t=jIZMfv2Dn15nVaSA-4",
    },
  },
  argTypes: {
    className: {
      control: "select",
      options: ["size-medium type-default", "size-large type-default"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleAccordion: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionSummary>아코디언 타이틀 영역</AccordionSummary>
      <AccordionDetails>
        <Typography>This is the content of the example accordion.</Typography>
      </AccordionDetails>
    </Accordion>
  ),
  args: {
    className: "size-medium type-default",
  },
};
