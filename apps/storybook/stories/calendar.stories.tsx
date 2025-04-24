import type { Meta, StoryObj } from "@storybook/react";
import type { DateCalendarProps } from "node_modules/@mui/x-date-pickers";

import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

const meta: Meta<typeof DateCalendar> = {
  title: "KRDS/Calendar",
  component: DateCalendar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5131-24401&t=Aqswq9fC3JfS3oxl-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showDaysOutsideCurrentMonth: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleCalendar: Story = {
  args: {
    showDaysOutsideCurrentMonth: true,
  },
  render: (args: DateCalendarProps) => (
    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="ko">
      <DateCalendar {...args} />
    </LocalizationProvider>
  ),
};
