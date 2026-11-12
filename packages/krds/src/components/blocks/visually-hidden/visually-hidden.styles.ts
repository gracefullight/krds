import { Box, styled } from "@mui/material";
import type { VisuallyHiddenProps } from "#/components/blocks/visually-hidden/visually-hidden.types";

// ? 스펙 전용 숨김 스타일. display:none/visibility:hidden, width:0/height:0/font-size:0 사용 금지
export const VisuallyHiddenBase = styled(Box)<VisuallyHiddenProps>({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
});
