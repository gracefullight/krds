import type { Components, Theme } from "@mui/material";
import type { PickersCalendarHeaderProps } from "@mui/x-date-pickers/PickersCalendarHeader";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type { VariantStyleProps } from "#/components/component.types";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  IconButton,
  Typography,
  buttonClasses,
  formHelperTextClasses,
  iconButtonClasses,
  inputAdornmentClasses,
  styled,
  svgIconClasses,
} from "@mui/material";
import {
  dayCalendarClasses,
  monthCalendarClasses,
  pickersDayClasses,
  pickersInputBaseClasses,
  pickersLayoutClasses,
  pickersOutlinedInputClasses,
  pickersSectionListClasses,
  yearCalendarClasses,
} from "@mui/x-date-pickers";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/x-date-pickers/DatePicker" {
  interface FormControlPropsSizeOverrides {
    large: true;
  }
}
declare module "@mui/x-date-pickers/PickersTextField" {
  interface FormControlPropsSizeOverrides {
    large: true;
  }
}

export const MuiLocalizationProvider: Components["MuiLocalizationProvider"] = {
  defaultProps: {
    adapterLocale: "ko",
  },
};

const HeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 24px",
  width: "100%",
});

const ButtonsContainer = styled(Box)({
  display: "flex",
  gap: "8px",
});

const MonthIconButton = styled(IconButton)({
  border: `0.8px solid ${getPalette("border.gray-light")}`,
  borderRadius: getRadius("max"),

  [`& .${svgIconClasses.root}`]: {
    color: getPalette("icon.gray"),
    width: "19.2px",
    height: "19.2px",
  },
});

const SelectorButton = styled(Button)(({ theme }) => ({
  ...getTypography("pc.heading.small"),
  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.heading.small"),
  },

  color: getPalette("text.basic"),
  minWidth: "auto",
  textTransform: "none",

  [`& .${buttonClasses.endIcon} .${svgIconClasses.root}`]: {
    color: getPalette("icon.gray"),
    width: "16px",
    height: "16px",
  },
}));

export function DatePickerHeader(props: PickersCalendarHeaderProps) {
  const { currentMonth, onMonthChange, onViewChange } = props;

  const handleNextMonth = () =>
    onMonthChange(
      currentMonth.plus({
        months: 1,
      }),
    );
  const handlePreviousMonth = () =>
    onMonthChange(
      currentMonth.minus({
        months: 1,
      }),
    );

  const handleYearClick = () => {
    onViewChange?.("year");
  };

  const handleMonthClick = () => {
    onViewChange?.("month");
  };

  return (
    <HeaderContainer>
      <MonthIconButton aria-label="이전 달" onClick={handlePreviousMonth}>
        <ChevronLeftIcon />
      </MonthIconButton>

      <ButtonsContainer>
        <SelectorButton
          onClick={handleYearClick}
          variant="text"
          endIcon={<ArrowDropDownIcon />}
        >
          <Typography variant="heading-small">
            {currentMonth.toFormat("yyyy")}년
          </Typography>
        </SelectorButton>

        <SelectorButton
          onClick={handleMonthClick}
          variant="text"
          endIcon={<ArrowDropDownIcon />}
        >
          <Typography variant="heading-small">
            {currentMonth.toFormat("MM")}월
          </Typography>
        </SelectorButton>
      </ButtonsContainer>

      <MonthIconButton aria-label="다음 달" onClick={handleNextMonth}>
        <ChevronRightIcon />
      </MonthIconButton>
    </HeaderContainer>
  );
}

export const MuiDatePicker: Components["MuiDatePicker"] = {
  defaultProps: {
    format: "yyyy.MM.dd",
    showDaysOutsideCurrentMonth: true,
    slotProps: {
      actionBar: {
        actions: ["cancel", "accept"],
      },
      textField: {
        size: "medium",
      },
    },
    slots: {
      // * https://mui.com/x/react-date-pickers/custom-components/#calendar-header
      calendarHeader: DatePickerHeader,
    },
    views: ["year", "month", "day"],
  },
};

export const MuiPickersTextField: Components["MuiPickersTextField"] = {
  defaultProps: {
    // * 사이즈 프로퍼티는 PickersTextField만 존재
    size: "medium",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${formHelperTextClasses.root}`]: {
        ...getTypography("pc.label.xsmall"),

        alignItems: "center",
        display: "flex",
        marginLeft: 0,
        marginRight: 0,
        marginTop: "8px",

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.xsmall"),
        },

        [`&.${formHelperTextClasses.focused}`]: {
          color: getPalette("text.information"),
        },

        [`&.${formHelperTextClasses.error}`]: {
          color: getPalette("text.danger"),
        },

        [`& .${svgIconClasses.root}`]: {
          width: "16px",
          height: "16px",
          marginRight: "4px",
          marginTop: "-1px",
        },
      },

      variants: [
        {
          props: {
            size: "small",
          },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium1"),
              paddingBottom: "8.5px",
              paddingTop: "8.5px",
              ...getTypography("pc.label.small"),

              [theme.breakpoints.down("medium")]: {
                ...getTypography("mobile.label.small"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} .${svgIconClasses.root}`]:
                {
                  width: "16px",
                  height: "16px",
                },
            },
          }),
        },
        {
          props: {
            size: "medium",
          },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium2"),
              paddingBottom: "11px",
              paddingTop: "11px",
              ...getTypography("pc.label.medium"),

              [theme.breakpoints.down("medium")]: {
                ...getTypography("mobile.label.medium"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} .${svgIconClasses.root}`]:
                {
                  width: "20px",
                  height: "20px",
                },
            },
          }),
        },
        {
          props: {
            size: "large",
          },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium3"),
              paddingBottom: "13.5px",
              paddingTop: "13.5px",
              ...getTypography("pc.label.large"),

              [theme.breakpoints.down("medium")]: {
                ...getTypography("mobile.label.large"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} .${svgIconClasses.root}`]:
                {
                  width: "24px",
                  height: "24px",
                },
            },
          }),
        },
      ],
    }),
  },
};

export const MuiPickersOutlinedInput: Components["MuiPickersOutlinedInput"] = {
  styleOverrides: {
    root: {
      color: getPalette("text.basic"),
      outline: `1px solid ${getPalette("input.border")}`,
      paddingLeft: "16px",
      paddingRight: "16px",

      "&::placeholder": {
        color: getPalette("text.disabled"),
      },

      [`&.${pickersInputBaseClasses.focused}`]: {
        outlineColor: getPalette("input.border-active"),
        outlineWidth: "2px",
      },

      [`&.${pickersInputBaseClasses.error}`]: {
        outlineColor: getPalette("input.border-error"),
        outlineWidth: "2px",
      },

      [`&.${pickersInputBaseClasses.disabled}`]: {
        backgroundColor: getPalette("input.surface-disabled"),
        outlineColor: getPalette("input.border-disabled"),
        outlineWidth: "1px",

        color: getPalette("text.disabled-on"),

        [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root}`]: {
          color: getPalette("icon.disabled-on"),
        },
      },

      [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root}`]: {
        color: getPalette("icon.gray"),
      },

      [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
        border: "none !important",
      },

      [`& .${pickersSectionListClasses.root}`]: {
        // * PickersTextField 사이즈로 제어
        padding: 0,
        opacity: 1,
      },
    },
  },
};

// * calendar
export const MuiPickerPopper: Components["MuiPickerPopper"] = {
  styleOverrides: {
    paper: {
      backgroundColor: getPalette("surface.secondary-subtler"),
      borderRadius: getRadius("xlarge2"),
      boxShadow: "none",
      outline: `1px solid ${getPalette("border.secondary-light")}`,
    },
  },
};

export const MuiPickersDay: Components["MuiPickersDay"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...getTypography("pc.label.medium"),
      color: getPalette("text.basic"),
      height: "44px",
      width: "44px",
      position: "relative",

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.label.medium"),
      },

      [`&.${pickersDayClasses.selected}`]: {
        backgroundColor: `${getPalette("action.secondary-active")} !important`,
        color: getPalette("text.inverse-static"),
      },

      [`&.${pickersDayClasses.today}`]: {
        [`&:not(.${pickersDayClasses.selected})`]: {
          backgroundColor: getPalette("element.inverse"),
          border: "none",
        },

        "&::after": {
          borderRadius: "50%",
          backgroundColor: getPalette("element.point"),
          content: '""',
          display: "block",
          position: "absolute",
          bottom: "6px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "4px",
          height: "4px",
        },
      },

      [`&.${pickersDayClasses.dayOutsideMonth}`]: {
        color: getPalette("text.disabled"),
      },
    }),
  },
};

export const MuiDayCalendar: Components["MuiDayCalendar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: "0 16px",

      [`& .${dayCalendarClasses.header}`]: {
        justifyContent: "space-between",

        [`& .${dayCalendarClasses.weekDayLabel}`]: {
          ...getTypography("pc.label.small"),
          color: getPalette("text.basic"),
          width: "44px",

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.small"),
          },
        },
      },

      [`& .${dayCalendarClasses.slideTransition}`]: {
        // * 6줄이 보이기 위한 처리
        minHeight: "280px",

        [`& .${dayCalendarClasses.weekContainer}`]: {
          justifyContent: "space-between",
        },
      },
    }),
  },
};

export const MuiDateCalendar: Components["MuiDateCalendar"] = {
  styleOverrides: {
    root: {
      height: "auto",
      // * 6줄이 보이기 위한 처리
      minHeight: "400px",
      paddingTop: "16px",
      width: "384px",
    },
  },
};

export const MuiMonthCalendar: Components["MuiMonthCalendar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: "auto",
      padding: "0 16px",

      [`& .${monthCalendarClasses.button}`]: {
        ...getTypography("pc.label.medium"),
        color: getPalette("text.basic"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.medium"),
        },

        [`&.${monthCalendarClasses.selected}`]: {
          backgroundColor: `${getPalette("action.secondary-active")} !important`,
          color: getPalette("text.inverse-static"),
        },

        [`&.${monthCalendarClasses.disabled}`]: {
          color: getPalette("text.disabled"),
        },
      },
    }),
  },
};

export const MuiYearCalendar: Components["MuiYearCalendar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: "auto",
      padding: "0 16px",

      [`& .${yearCalendarClasses.button}`]: {
        ...getTypography("pc.label.medium"),
        color: getPalette("text.basic"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.medium"),
        },

        [`&.${yearCalendarClasses.selected}`]: {
          backgroundColor: `${getPalette("action.secondary-active")} !important`,
          color: getPalette("text.inverse-static"),
        },

        [`&.${yearCalendarClasses.disabled}`]: {
          color: getPalette("text.disabled"),
        },
      },
    }),
  },
};

// * action bar
export const MuiPickersLayout: Components["MuiPickersLayout"] = {
  styleOverrides: {
    root: {
      [`& .${pickersLayoutClasses.actionBar}`]: {
        backgroundColor: getPalette("surface.white"),
        borderTop: `1px solid ${getPalette("border.gray-light")}`,
        padding: "15px 24px 16px 24px",
      },
    },
  },
};
