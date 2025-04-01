"use client";

import type { SyntheticEvent } from "react";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const tabs = [
  {
    title: "Item One",
    content: <Typography>Item One</Typography>,
  },
  {
    title: "Item Two",
    content: <Typography>Item Two</Typography>,
  },
  {
    title: "Item Three",
    content: <Typography>Item Three</Typography>,
  },
];

export default function ClientTabsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Typography variant="heading-large">Client Tabs</Typography>
      <Tabs value={activeTab} onChange={handleTabChange} style="fill">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            label={tab.title}
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <Box
          key={tab.title}
          role="tabpanel"
          hidden={activeTab !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
        >
          {activeTab === index && tab.content}
        </Box>
      ))}
    </Box>
  );
}
