"use client";

import { Box, Link, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

const PATTERNS = [
  { href: "/patterns", label: "개요" },
  { href: "/patterns/input-form", label: "입력 폼" },
  { href: "/patterns/consent", label: "동의" },
  { href: "/patterns/list", label: "목록 탐색·필터링" },
  { href: "/patterns/feedback", label: "피드백·확인" },
  { href: "/patterns/error", label: "오류" },
  { href: "/patterns/help", label: "도움" },
];

export default function PatternsLayout({ children }: { children: ReactNode }) {
  return (
    <Stack
      direction={{ xsmall: "column", medium: "row" }}
      sx={{ gap: "32px", padding: "32px 0" }}
    >
      <Box
        component="nav"
        aria-label="기본 패턴"
        sx={{ flexShrink: 0, width: { medium: 200 } }}
      >
        <Typography variant="heading-small" sx={{ mb: 2 }}>
          기본 패턴
        </Typography>
        <Stack component="ul" sx={{ listStyle: "none", m: 0, p: 0, gap: 1 }}>
          {PATTERNS.map((pattern) => (
            <li key={pattern.href}>
              <Link href={pattern.href} type="subtle-none">
                {pattern.label}
              </Link>
            </li>
          ))}
        </Stack>
      </Box>
      <Box component="section" sx={{ flex: 1, minWidth: 0 }}>
        {children}
      </Box>
    </Stack>
  );
}
