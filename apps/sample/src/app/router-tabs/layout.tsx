import RouterTabs from "@/components/ui/tabs/router-tabs";
import { Box, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

export default function RouterTabsLayout({ children }: PropsWithChildren) {
  return (
    <Box>
      <Typography variant="heading-large">Router Tabs</Typography>
      <RouterTabs
        items={[
          { title: "Item One", href: "/router-tabs/item-one" },
          { title: "Item Two", href: "/router-tabs/item-two" },
        ]}
      />
      <Box>{children}</Box>
    </Box>
  );
}
