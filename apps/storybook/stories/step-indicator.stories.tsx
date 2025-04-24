import type { StepperProps } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { Step, StepLabel, Stepper, Typography } from "@mui/material";

const meta: Meta<typeof Stepper> = {
  title: "KRDS/StepIndicator",
  component: Stepper,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4928-98545&t=CEuLlotfB399DLbQ-4",
    },
    layout: "centered",
  },

  argTypes: {
    activeStep: {
      control: { type: "number", min: 0, max: 4 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleStepIndicator: Story = {
  args: {
    activeStep: 1,
    sx: {
      width: "500px",
    },
    children: [
      <Step key="0">
        <StepLabel>
          1단계<Typography variant="body-small-bold">1단계 제목</Typography>
        </StepLabel>
      </Step>,
      <Step key="1">
        <StepLabel>
          2단계<Typography variant="body-small-bold">2단계 제목</Typography>
        </StepLabel>
      </Step>,
      <Step key="2">
        <StepLabel>
          3단계<Typography variant="body-small-bold">3단계 제목</Typography>
        </StepLabel>
      </Step>,
      <Step key="3">
        <StepLabel>
          4단계<Typography variant="body-small-bold">4단계 제목</Typography>
        </StepLabel>
      </Step>,
      <Step key="4">
        <StepLabel>
          5단계<Typography variant="body-small-bold">5단계 제목</Typography>
        </StepLabel>
      </Step>,
    ],
  },
  render: (args: StepperProps) => {
    return <Stepper {...args}>{args.children}</Stepper>;
  },
};
