import RouterTabs from "@/components/ui/tabs/router-tabs";
import { Box, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

export default function ItemsLayout({ children }: PropsWithChildren) {
  return (
    <Box>
      <Typography variant="heading-large">Items</Typography>
      <RouterTabs
        items={[
          { title: "Item One", href: "/items/item-one" },
          { title: "Item Two", href: "/items/item-two" },
        ]}
      />
      <Box>{children}</Box>
    </Box>
  );
}
