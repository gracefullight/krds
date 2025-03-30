import type { Metadata } from "next";

import { Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Item Two",
};

export default function ItemTwoPage() {
  return <Typography>Item Two</Typography>;
}
