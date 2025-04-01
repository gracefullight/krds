import type { Metadata } from "next";

import { Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Item One",
};

export default function ItemOnePage() {
  return <Typography>Item One</Typography>;
}
