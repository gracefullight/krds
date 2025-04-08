"use client";

import type { SyntheticEvent } from "react";

import { Box, Divider, Stack, Tab, Tabs, Typography } from "@mui/material";
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
  const [secondaryTab, setSecondaryTab] = useState(0);

  const handleTabChange = (_: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Stack gap={2} divider={<Divider />}>
      <Box>
        <Typography variant="heading-large">Client Tabs</Typography>
        <Tabs value={activeTab} onChange={handleTabChange} fill="contained">
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
      <Box>
        <Tabs
          value={secondaryTab}
          onChange={(_, newValue) => setSecondaryTab(newValue)}
          type="secondary"
          fill="contained"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.title}
              label={tab.title}
              id={`tab-${index}`}
              aria-controls={`tabpanel-${index}`}
              sx={{
                padding: "0px",
              }}
            />
          ))}
        </Tabs>
        {tabs.map((tab, index) => (
          <Box
            key={tab.title}
            role="tabpanel"
            hidden={secondaryTab !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            sx={{
              padding: "0px",
            }}
          >
            {secondaryTab === index && tab.content}
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
