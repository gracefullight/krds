import type { DatePickerProps } from "@mui/x-date-pickers";
import type { Meta, StoryObj } from "@storybook/react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { expect, userEvent, within } from "@storybook/test";
import { DateTime } from "luxon";

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

  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    showDaysOutsideCurrentMonth: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleDateInput: Story = {
  args: {
    disabled: false,
    showDaysOutsideCurrentMonth: true,
    slotProps: {
      textField: {
        size: "medium",
        error: false,
      },
    },
  },
  render: (args: DatePickerProps) => {
    return (
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="ko">
        <DatePicker {...args} />
      </LocalizationProvider>
    );
  },
};

export const ExampleDateInputWithHelperText: Story = {
  args: {
    disabled: false,
    slotProps: {
      textField: {
        size: "medium",
        error: false,
        helperText: (
          <>
            <CheckCircleIcon />
            메시지를 입력해주세요
          </>
        ),
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

export const TestDateInputToday: Story = {
  render: (args: DatePickerProps) => {
    return (
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DatePicker {...args} />
      </LocalizationProvider>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const today = DateTime.now();

    await step("Open calendar", async () => {
      const calendarButton = canvas.getByTestId("CalendarIcon");
      await userEvent.click(calendarButton);
    });

    await step("Select today", async () => {
      const body = within(document.body);

      const todayButton = body.getByTestId("today-button");
      await userEvent.click(todayButton);
    });

    await step("Check date input", async () => {
      const sectionContents = canvas.getAllByRole("spinbutton");
      const yearSection = sectionContents[0];
      const monthSection = sectionContents[1];
      const daySection = sectionContents[2];

      await expect(yearSection).toHaveTextContent(today.toFormat("yyyy"));
      await expect(monthSection).toHaveTextContent(today.toFormat("MM"));
      await expect(daySection).toHaveTextContent(today.toFormat("dd"));
    });
  },
};
