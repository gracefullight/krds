import type { Components } from "@mui/material";

import { formControlLabelClasses, radioGroupClasses } from "@mui/material";

declare module "@mui/material/FormGroup" {}

export const MuiFormGroup: Components["MuiFormGroup"] = {
  defaultProps: {},

  styleOverrides: {
    root: {
      // * radio group에서 설정 불가
      [`&.${radioGroupClasses.row} .${formControlLabelClasses.root}`]: {
        marginRight: "24px",
      },
    },
  },
};
