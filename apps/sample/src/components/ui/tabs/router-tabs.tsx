"use client";

import type React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { noop } from "es-toolkit";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface TabItem {
  title: string;
  href: string;
  segment?: string;
}

interface ServerTabsProps {
  items: TabItem[];
}

export default function RouterTabs({ items }: ServerTabsProps) {
  const selectedSegment = useSelectedLayoutSegment();

  const activeIndex = items.findIndex(
    (tab) => (tab.segment ?? tab.href.split("/").at(-1)) === selectedSegment,
  );

  const currentIndex = activeIndex === -1 ? 0 : activeIndex;

  return (
    <Box>
      <Tabs
        value={currentIndex}
        onChange={noop}
        aria-label="Server Navigation Tabs"
      >
        {items.map((tab) => (
          <Tab
            key={tab.href}
            component={Link}
            href={tab.href}
            label={tab.title}
          />
        ))}
      </Tabs>
    </Box>
  );
}
