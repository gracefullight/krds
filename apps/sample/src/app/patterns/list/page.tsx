"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

interface Notice {
  id: number;
  title: string;
  category: string;
  date: string;
  views: number;
}

const DATA: Notice[] = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  title: `공지사항 제목 ${i + 1}`,
  category: ["일반", "정책", "이벤트"][i % 3],
  date: `2026-11-${String((i % 28) + 1).padStart(2, "0")}`,
  views: 100 + i * 7,
}));

const PAGE_SIZE = 5;

function compareRows(a: Notice, b: Notice, sort: string): number {
  if (sort === "latest") return b.date.localeCompare(a.date);
  if (sort === "views") return b.views - a.views;
  return a.title.localeCompare(b.title);
}

export default function ListPatternPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Notice | null>(null);

  const filtered = useMemo(() => {
    let rows = DATA.filter(
      (row) =>
        row.title.includes(query) &&
        (category === "all" || row.category === category),
    );
    rows = [...rows].sort((a, b) => compareRows(a, b, sort));
    return rows;
  }, [query, category, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageRows = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <Stack sx={{ gap: "24px" }}>
      <Box>
        <Typography variant="heading-large">목록 탐색·필터링</Typography>
        <Typography variant="body-medium" sx={{ mt: 1, color: "text.subtle" }}>
          검색·필터·정렬로 목록을 탐색하고, 행을 선택해 상세 정보를 확인합니다.
        </Typography>
      </Box>

      <Stack
        direction={{ xsmall: "column", small: "row" }}
        sx={{ gap: "12px" }}
      >
        <TextField
          label="검색"
          size="small"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          sx={{ flex: 1 }}
        />
        <Select
          size="small"
          value={category}
          aria-label="분류 필터"
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          <MenuItem value="all">전체 분류</MenuItem>
          <MenuItem value="일반">일반</MenuItem>
          <MenuItem value="정책">정책</MenuItem>
          <MenuItem value="이벤트">이벤트</MenuItem>
        </Select>
        <Select
          size="small"
          value={sort}
          aria-label="정렬"
          onChange={(e) => setSort(e.target.value)}
        >
          <MenuItem value="latest">최신순</MenuItem>
          <MenuItem value="views">조회순</MenuItem>
          <MenuItem value="title">제목순</MenuItem>
        </Select>
      </Stack>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>분류</TableCell>
            <TableCell>등록일</TableCell>
            <TableCell>조회수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pageRows.map((row) => (
            <TableRow
              key={row.id}
              hover
              onClick={() => setSelected(row)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.views}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={(_, value) => setPage(value)}
        />
      </Stack>

      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        maxWidth="small"
        fullWidth
      >
        {selected && (
          <>
            <DialogTitle>{selected.title}</DialogTitle>
            <DialogContent>
              <Stack sx={{ gap: 1 }}>
                <Typography variant="body-medium">
                  분류: {selected.category}
                </Typography>
                <Typography variant="body-medium">
                  등록일: {selected.date}
                </Typography>
                <Typography variant="body-medium">
                  조회수: {selected.views}
                </Typography>
                <Typography variant="body-medium" sx={{ mt: 1 }}>
                  공지사항 상세 내용입니다. 실제 서비스에서는 본문 전체를
                  제공합니다.
                </Typography>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelected(null)}>닫기</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Stack>
  );
}
