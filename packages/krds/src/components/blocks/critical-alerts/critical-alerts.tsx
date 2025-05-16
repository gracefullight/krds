import type {
  CriticalAlertsProps,
  CriticalAlertsSeverity,
} from "#/components/blocks/critical-alerts/critical-alerts.types";

import { ArrowRight, Emergency } from "@gracefullight/krds-icons";
import { getPalette } from "@gracefullight/krds-tokens";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import { Button } from "@mui/material";
import * as S from "#/components/blocks/critical-alerts/critical-alerts.styles";

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
          icon: <Emergency size={24} />,
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
        <S.AlertTitle>{content}</S.AlertTitle>

        {onClick && (
          <Button
            onClick={onClick}
            aria-label={`${label} 상세 내용 보기`}
            variant="text"
            endIcon={<ArrowRight size={20} />}
          >
            <S.ButtonText>자세히보기</S.ButtonText>
          </Button>
        )}
      </S.ContentContainer>
    </S.AlertContainer>
  );
}
