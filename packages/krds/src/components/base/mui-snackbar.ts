import type { Components } from "@mui/material";

export const MuiSnackbar: Components["MuiSnackbar"] = {
  defaultProps: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
  },
  styleOverrides: {
    // ? 하단 탭 바/플로팅 버튼 등 주요 탐색 요소와 겹치지 않도록 띄움
    root: {
      bottom: 80,
    },
  },
};
