"use client";

import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ErrorPatternPage() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const emailError =
    touched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? "올바른 이메일 형식으로 입력해 주세요. (예: name@example.com)"
      : "";

  return (
    <Stack sx={{ gap: "32px", maxWidth: 640 }}>
      <Box>
        <Typography variant="heading-large">오류</Typography>
        <Typography variant="body-medium" sx={{ mt: 1, color: "text.subtle" }}>
          오류는 구체적인 원인과 해결 방법을 안내하고, 색상 외
          수단(아이콘·텍스트) 으로도 전달합니다.
        </Typography>
      </Box>

      <Box>
        <Typography variant="heading-small" sx={{ mb: 2 }}>
          입력 오류
        </Typography>
        <TextField
          label="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          error={Boolean(emailError)}
          helperText={emailError || "알림을 받을 이메일 주소"}
          fullWidth
        />
      </Box>

      <Box>
        <Typography variant="heading-small" sx={{ mb: 2 }}>
          페이지 오류
        </Typography>
        <Stack sx={{ gap: 2 }}>
          <Alert severity="danger" variant="outlined">
            요청하신 페이지를 찾을 수 없습니다. 주소가 변경되었거나 삭제되었을
            수 있습니다.
          </Alert>
          <Alert severity="warning" variant="outlined">
            일시적인 오류로 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해
            주세요.
          </Alert>
          <Box>
            <Button variant="outlined" href="/patterns">
              이전 페이지로 돌아가기
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
