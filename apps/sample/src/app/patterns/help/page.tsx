"use client";

import { ContextualHelp, HelpPanel } from "@gracefullight/krds/components";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

export default function HelpPatternPage() {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <Stack sx={{ gap: "32px", maxWidth: 640 }}>
      <Box>
        <Typography variant="heading-large">도움</Typography>
        <Typography variant="body-medium" sx={{ mt: 1, color: "text.subtle" }}>
          도움 패널, 맥락적 도움말, 툴팁으로 필요한 시점에 부가 정보를
          제공합니다. 필수 정보는 본문에 제공하고 도움말에 숨기지 않습니다.
        </Typography>
      </Box>

      <Box>
        <Typography variant="heading-small" sx={{ mb: 2 }}>
          맥락적 도움말
        </Typography>
        <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
          <Typography variant="body-medium">주민등록번호</Typography>
          <ContextualHelp variant="info" title="주민등록번호">
            공공 서비스 이용 시 본인 확인을 위해 사용되는 13자리 번호입니다.
          </ContextualHelp>
        </Stack>
      </Box>

      <Box>
        <Typography variant="heading-small" sx={{ mb: 2 }}>
          툴팁
        </Typography>
        <Tooltip title="신청서를 임시 저장합니다" arrow>
          <Button variant="outlined">임시저장</Button>
        </Tooltip>
      </Box>

      <Box>
        <Typography variant="heading-small" sx={{ mb: 2 }}>
          도움 패널
        </Typography>
        <Button variant="contained" onClick={() => setPanelOpen(true)}>
          도움 패널 열기
        </Button>
        <HelpPanel
          open={panelOpen}
          onClose={() => setPanelOpen(false)}
          title="신청 방법 안내"
          variant="help"
        >
          <Typography variant="body-medium">
            신청은 신청서 작성 → 서류 첨부 → 제출 순서로 진행됩니다. 작성 중
            임시저장을 하면 나중에 이어서 작성할 수 있습니다.
          </Typography>
        </HelpPanel>
      </Box>
    </Stack>
  );
}
