import type { Components, Theme } from "@mui/material";
import type {
  PickersActionBarProps,
  PickersCalendarHeaderProps,
} from "@mui/x-date-pickers";
import type {} from "@mui/x-date-pickers/themeAugmentation";

import {
  ArrowDropDown,
  ArrowLeft,
  ArrowRight,
  Calendar,
} from "@gracefullight/krds-icons";
import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import {
  Button,
  Typography,
  formHelperTextClasses,
  iconButtonClasses,
  inputAdornmentClasses,
} from "@mui/material";
import {
  dateCalendarClasses,
  dayCalendarClasses,
  monthCalendarClasses,
  pickersDayClasses,
  pickersInputBaseClasses,
  pickersLayoutClasses,
  pickersOutlinedInputClasses,
  pickersSectionListClasses,
  usePickerActionsContext,
  yearCalendarClasses,
} from "@mui/x-date-pickers";
import * as S from "#/components/base/mui-x/date-pickers.styles";

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

function DatePickerHeader(props: PickersCalendarHeaderProps) {
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
    <S.HeaderContainer>
      <S.MonthIconButton aria-label="이전 달" onClick={handlePreviousMonth}>
        <ArrowLeft size={19.2} />
      </S.MonthIconButton>

      <S.HeaderButtonsContainer>
        <S.SelectorButton
          onClick={handleYearClick}
          variant="text"
          endIcon={<ArrowDropDown size={16} />}
        >
          <Typography variant="heading-small">
            {currentMonth.toFormat("yyyy")}년
          </Typography>
        </S.SelectorButton>

        <S.SelectorButton
          onClick={handleMonthClick}
          variant="text"
          endIcon={<ArrowDropDown size={16} />}
        >
          <Typography variant="heading-small">
            {currentMonth.toFormat("MM")}월
          </Typography>
        </S.SelectorButton>
      </S.HeaderButtonsContainer>

      <S.MonthIconButton aria-label="다음 달" onClick={handleNextMonth}>
        <ArrowRight size={19.2} />
      </S.MonthIconButton>
    </S.HeaderContainer>
  );
}

function DatePickerActionBar(props: PickersActionBarProps) {
  const { actions, className } = props;
  const { setValueToToday, acceptValueChanges, cancelValueChanges } =
    usePickerActionsContext();

  if (actions == null || actions.length === 0) {
    return null;
  }

  return (
    <S.ActionBarContainer className={className}>
      <Button
        onClick={() => setValueToToday()}
        variant="text"
        size="small"
        data-testid="today-button"
      >
        오늘
      </Button>

      <S.ActionButtonsContainer>
        {actions?.includes("cancel") && (
          <S.ActionButton
            onClick={() => cancelValueChanges()}
            variant="outlined"
            color="tertiary"
            size="small"
          >
            취소
          </S.ActionButton>
        )}

        {actions?.includes("accept") && (
          <S.ActionButton
            onClick={() => acceptValueChanges()}
            variant="contained"
            size="small"
          >
            선택
          </S.ActionButton>
        )}
      </S.ActionButtonsContainer>
    </S.ActionBarContainer>
  );
}

export const MuiDatePicker: Components["MuiDatePicker"] = {
  defaultProps: {
    format: "yyyy.MM.dd",
    showDaysOutsideCurrentMonth: true,
    slotProps: {
      actionBar: {
        actions: ["today", "cancel", "accept"],
      },
      textField: {
        size: "medium",
      },
    },
    slots: {
      // * https://mui.com/x/react-date-pickers/custom-components/#component
      actionBar: DatePickerActionBar,
      openPickerIcon: () => <Calendar />,
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

        "& svg": {
          width: "16px",
          height: "16px",
          marginRight: "4px",
          marginTop: "-1px",
        },

        [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root}`]: {
          color: getPalette("icon.gray"),
        },
      },

      variants: [
        {
          props: {
            size: "small",
          },
          style: ({ theme }) => ({
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium1"),
              paddingBottom: "8.5px",
              paddingTop: "8.5px",
              ...getTypography("pc.label.small"),

              [(theme as Theme).breakpoints.down("medium")]: {
                ...getTypography("mobile.label.small"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} svg`]:
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
          style: ({ theme }) => ({
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium2"),
              paddingBottom: "11px",
              paddingTop: "11px",
              ...getTypography("pc.label.medium"),

              [(theme as Theme).breakpoints.down("medium")]: {
                ...getTypography("mobile.label.medium"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} svg`]:
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
          style: ({ theme }) => ({
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium3"),
              paddingBottom: "13.5px",
              paddingTop: "13.5px",
              ...getTypography("pc.label.large"),

              [(theme as Theme).breakpoints.down("medium")]: {
                ...getTypography("mobile.label.large"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} svg`]:
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
  defaultProps: {
    showDaysOutsideCurrentMonth: true,
    slots: {
      // * https://mui.com/x/react-date-pickers/custom-components/#calendar-header
      calendarHeader: DatePickerHeader,
    },
  },
  styleOverrides: {
    root: {
      backgroundColor: getPalette("surface.secondary-subtler"),
      borderRadius: getRadius("xlarge2"),
      height: "auto",
      // * 6줄이 보이기 위한 처리
      minHeight: "400px",
      outline: `1px solid ${getPalette("border.secondary-light")}`,
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

export const MuiPickersLayout: Components["MuiPickersLayout"] = {
  styleOverrides: {
    root: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        display: "none",
      },

      [`& .${pickersLayoutClasses.actionBar}`]: {
        backgroundColor: getPalette("surface.white"),
        borderTop: `1px solid ${getPalette("border.gray-light")}`,
        padding: "15px 24px 16px 24px",
      },

      // * 캘린더 단독으로 사용시 borderRadius 중복 제거
      [`& .${pickersLayoutClasses.contentWrapper} .${dateCalendarClasses.root}`]:
        {
          borderRadius: "unset",
          borderTopLeftRadius: getRadius("xlarge2"),
          borderTopRightRadius: getRadius("xlarge2"),
          outline: "none",
        },
    },
  },
};
