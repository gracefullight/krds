import type {
  CriticalAlertsProps,
  CriticalAlertsSeverity,
} from "#/components/blocks/critical-alerts/critical-alerts.types";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmergencyIcon from "@mui/icons-material/Emergency";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import { Button } from "@mui/material";
import * as S from "#/components/blocks/critical-alerts/critical-alerts.styles";
import { getPalette } from "#/design-tokens/palettes";

export default function CriticalAlerts({
  severity,
  content,
  onClick,
  sx,
}: CriticalAlertsProps) {
  const getAlertProperties = (severity: CriticalAlertsSeverity) => {
    switch (severity) {
      case "emergency":
        return {
          icon: <EmergencyIcon />,
          label: "긴급",
          backgroundColor: getPalette("element.danger"),
        };
      case "safe":
        return {
          icon: <WarningIcon />,
          label: "안전",
          backgroundColor: getPalette("element.success"),
        };
      default:
        return {
          icon: <InfoIcon />,
          label: "안내",
          backgroundColor: getPalette("element.information"),
        };
    }
  };

  const { icon, label, backgroundColor } = getAlertProperties(severity);

  return (
    <S.AlertContainer sx={sx}>
      <S.IconContainer sx={{ backgroundColor }}>
        {icon}
        <S.IconLabel>{label}</S.IconLabel>
      </S.IconContainer>

      <S.ContentContainer>
        <S.AlertTitle variant="heading-small">{content}</S.AlertTitle>

        {onClick && (
          <Button
            onClick={onClick}
            aria-label={`${label} 상세 내용 보기`}
            variant="text"
            endIcon={<ChevronRightIcon sx={{ width: 20, height: 20 }} />}
          >
            <S.ButtonText>자세히보기</S.ButtonText>
          </Button>
        )}
      </S.ContentContainer>
    </S.AlertContainer>
  );
}
