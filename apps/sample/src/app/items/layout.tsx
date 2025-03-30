import { Box, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

export default function ItemsLayout({ children }: PropsWithChildren) {
  return (
    <Box>
      <Typography>Items</Typography>
      <Box>{children}</Box>
    </Box>
  );
}
