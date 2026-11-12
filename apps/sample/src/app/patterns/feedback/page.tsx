"use client";

import { Snackbar, Toast } from "@gracefullight/krds/components";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function FeedbackPatternPage() {
  const [toastOpen, setToastOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [result, setResult] = useState("");

  return (
    <Stack sx={{ gap: "24px", maxWidth: 640 }}>
      <Box>
        <Typography variant="heading-large">피드백·확인</Typography>
        <Typography variant="body-medium" sx={{ mt: 1, color: "text.subtle" }}>
          토스트(일시적 결과), 스낵바(추가 행동), 확인 모달(되돌릴 수 없는
          작업)로 사용자 행동에 대한 결과를 안내합니다.
        </Typography>
      </Box>

      <Stack direction="row" sx={{ gap: "12px", flexWrap: "wrap" }}>
        <Button variant="contained" onClick={() => setToastOpen(true)}>
          토스트 표시
        </Button>
        <Button variant="outlined" onClick={() => setSnackbarOpen(true)}>
          스낵바 표시
        </Button>
        <Button variant="outlined" onClick={() => setConfirmOpen(true)}>
          삭제(확인 모달)
        </Button>
      </Stack>

      {result && (
        <Typography variant="body-medium" sx={{ color: "text.subtle" }}>
          {result}
        </Typography>
      )}

      <Toast
        open={toastOpen}
        message="저장되었습니다."
        onClose={() => setToastOpen(false)}
      />

      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        title="삭제되었습니다"
        actionLabel="되돌리기"
        onAction={() => {
          setSnackbarOpen(false);
          setResult("삭제를 되돌렸습니다.");
        }}
      >
        휴지통에서 30일간 보관됩니다.
      </Snackbar>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>항목을 삭제할까요?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            삭제한 항목은 휴지통에서 30일간 보관 후 영구 삭제됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>취소</Button>
          <Button
            variant="contained"
            onClick={() => {
              setConfirmOpen(false);
              setResult("항목을 삭제했습니다.");
            }}
          >
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
