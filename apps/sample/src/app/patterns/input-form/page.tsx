"use client";

import { Calendar, FileUpload, Toast } from "@gracefullight/krds/components";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function InputFormPatternPage() {
  const [name, setName] = useState("");
  const [residentNumber, setResidentNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("new");
  const [agree, setAgree] = useState(false);
  const [visitDate, setVisitDate] = useState<string>();
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "이름을 입력해 주세요.";
    if (!/^\d{6}-?\d{7}$/.test(residentNumber))
      next.residentNumber = "주민등록번호 13자리를 올바르게 입력해 주세요.";
    if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(phone))
      next.phone = "연락처를 올바르게 입력해 주세요.";
    if (!agree) next.agree = "개인정보 수집·이용에 동의해 주세요.";
    if (!visitDate) next.visitDate = "방문 날짜를 선택해 주세요.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  return (
    <Stack sx={{ gap: "24px", maxWidth: 640 }}>
      <Box>
        <Typography variant="heading-large">입력 폼</Typography>
        <Typography variant="body-medium" sx={{ mt: 1, color: "text.subtle" }}>
          레이블, 도움말, 오류 메시지를 갖춘 입력 폼 구성 예시입니다. 개인 식별
          정보는 최소한으로 수집하고 마스킹하여 표시합니다.
        </Typography>
      </Box>

      <TextField
        label="이름"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={Boolean(errors.name)}
        helperText={errors.name ?? "실명을 입력해 주세요."}
      />

      <TextField
        label="주민등록번호"
        required
        value={residentNumber}
        onChange={(e) => setResidentNumber(e.target.value)}
        error={Boolean(errors.residentNumber)}
        helperText={
          errors.residentNumber ??
          "본인 확인을 위해서만 사용하며, 저장 시 마스킹됩니다. (예: 900101-1******)"
        }
        slotProps={{ htmlInput: { maxLength: 14, inputMode: "numeric" } }}
      />

      <TextField
        label="연락처"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={Boolean(errors.phone)}
        helperText={errors.phone ?? "숫자만 입력해도 됩니다. (예: 01012345678)"}
        slotProps={{ htmlInput: { inputMode: "tel" } }}
      />

      <FormControl>
        <FormLabel>신청 유형</FormLabel>
        <RadioGroup row value={type} onChange={(e) => setType(e.target.value)}>
          <FormControlLabel value="new" control={<Radio />} label="신규" />
          <FormControlLabel value="renew" control={<Radio />} label="갱신" />
          <FormControlLabel value="change" control={<Radio />} label="변경" />
        </RadioGroup>
      </FormControl>

      <Box>
        <FormLabel sx={{ display: "block", mb: 1 }}>방문 날짜</FormLabel>
        <Calendar value={visitDate} onChange={setVisitDate} />
        {errors.visitDate && (
          <FormHelperText error>{errors.visitDate}</FormHelperText>
        )}
      </Box>

      <FileUpload
        label="첨부파일"
        helperText="PDF, JPG 형식, 파일당 최대 10MB, 최대 3개"
        accept=".pdf,.jpg,.jpeg"
        maxSize={10 * 1024 * 1024}
        multiple
        maxFiles={3}
        files={files}
        onChange={setFiles}
      />

      <FormControl error={Boolean(errors.agree)}>
        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
          }
          label="개인정보 수집·이용에 동의합니다."
        />
        {errors.agree && <FormHelperText>{errors.agree}</FormHelperText>}
      </FormControl>

      <Box>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          신청하기
        </Button>
      </Box>

      <Toast
        open={submitted}
        message="신청이 완료되었습니다."
        onClose={() => setSubmitted(false)}
      />
    </Stack>
  );
}
