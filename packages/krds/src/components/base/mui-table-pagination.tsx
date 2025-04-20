import type { Components } from "@mui/material";
import type { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";
import type { ChangeEvent } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { getPalette } from "#/design-tokens/palettes";

declare module "@mui/material/TablePagination" {}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;
  const totalPages = Math.max(1, Math.ceil(count / rowsPerPage));

  const [pageInput, setPageInput] = useState<string>((page + 1).toString());
  const [isValidPage, setIsValidPage] = useState(true);

  const validatePageInput = (input: string) => {
    const pageNumber = Number.parseInt(input, 10);
    return (
      !Number.isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages
    );
  };

  const handlePageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPageInput(newValue);
    setIsValidPage(validatePageInput(newValue));
  };

  const handleGoToPage = () => {
    const pageNumber = Number.parseInt(pageInput, 10);
    if (validatePageInput(pageInput)) {
      onPageChange(null, pageNumber - 1);
    } else {
      setPageInput((page + 1).toString());
      setIsValidPage(true);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: "16px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          size="small"
          value={pageInput}
          onChange={handlePageInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && isValidPage) {
              handleGoToPage();
            }
          }}
          error={!isValidPage}
        />
        <Typography
          variant="body-small"
          sx={{ marginLeft: "9px", color: getPalette("text.subtle") }}
        >
          /{totalPages}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        onClick={handleGoToPage}
        disabled={!isValidPage}
      >
        이동
      </Button>
    </Box>
  );
}

export const MuiTablePagination: Components["MuiTablePagination"] = {
  defaultProps: {
    slots: {
      displayedRows: () => null,
      selectLabel: () => null,
      select: () => null,
    },
    ActionsComponent: TablePaginationActions,
  },
  styleOverrides: {
    root: {
      borderBottom: "none",
    },
  },
};
