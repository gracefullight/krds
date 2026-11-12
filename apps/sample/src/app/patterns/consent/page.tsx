"use client";

import { Disclosure } from "@gracefullight/krds/components";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const TERMS = [
  { id: "service", label: "서비스 이용약관 동의", required: true },
  { id: "privacy", label: "개인정보 수집·이용 동의", required: true },
  { id: "marketing", label: "마케팅 정보 수신 동의", required: false },
];

export default function ConsentPatternPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const allChecked = TERMS.every((term) => checked[term.id]);
  const requiredChecked = TERMS.filter((t) => t.required).every(
    (t) => checked[t.id],
  );

  const toggleAll = (value: boolean) => {
    setChecked(Object.fromEntries(TERMS.map((t) => [t.id, value])));
  };

  return (
    <Stack sx={{ gap: "24px", maxWidth: 640 }}>
      <Box>
        <Typography variant="heading-large">동의</Typography>
        <Typography variant="body-medium" sx={{ mt: 1, color: "text.subtle" }}>
          전체 동의와 개별 동의를 제공하고, 필수·선택 항목을 구분합니다. 약관은
          디스클로저로 확인합니다.
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "border.gray-light",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={allChecked}
              indeterminate={!allChecked && TERMS.some((t) => checked[t.id])}
              onChange={(e) => toggleAll(e.target.checked)}
            />
          }
          label={<Typography variant="body-large-bold">전체 동의</Typography>}
        />
        <Typography variant="body-small" sx={{ color: "text.subtle" }}>
          선택 항목에 대한 동의를 포함하여 전체 동의합니다.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack sx={{ gap: 2 }}>
          {TERMS.map((term) => (
            <Box key={term.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(checked[term.id])}
                    onChange={(e) =>
                      setChecked((prev) => ({
                        ...prev,
                        [term.id]: e.target.checked,
                      }))
                    }
                  />
                }
                label={`${term.label} (${term.required ? "필수" : "선택"})`}
              />
              <Disclosure summary="약관 내용 보기">
                {term.label}에 대한 상세 약관 내용입니다. 실제 서비스에서는 관련
                법령과 정책에 따른 약관 전문을 제공합니다.
              </Disclosure>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Button variant="contained" color="primary" disabled={!requiredChecked}>
          동의하고 계속하기
        </Button>
      </Box>
    </Stack>
  );
}
