import type { DatePickerProps } from "@mui/x-date-pickers";
import type { Meta } from "@storybook/react";

import { DatePicker } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const meta: Meta<typeof DatePicker> = {
  title: "KRDS/DateInput",
  component: DatePicker,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5135-13342&t=So0c6gcp9D4yY4IV-4",
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
  },
};

export default meta;

export const ExampleDateInput = {
  args: {
    disabled: false,
    slotProps: {
      textField: {
        size: "medium",
        error: false,
      },
    },
  },
  render: (args: DatePickerProps) => {
    return (
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DatePicker {...args} />
      </LocalizationProvider>
    );
  },
};
