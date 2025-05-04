import type { ReactElement } from "react";
import type {
  InfoBoxItemProps,
  InfoBoxProps,
} from "#/components/blocks/info-box/info-box.types";

import { Info as InfoIcon } from "@mui/icons-material";
import { Children, cloneElement, isValidElement } from "react";

import { Divider } from "@mui/material";
import * as S from "#/components/blocks/info-box/info-box.styles";

/**
 * InfoBox component for displaying information with different visual styles
 */
export default function InfoBox({
  title,
  content,
  children,
  type = "primary",
  size = "default",
}: InfoBoxProps) {
  // Extract InfoBox.Item children when size is default
  const isDefault = size === "default";
  const infoBoxItems: ReactElement[] = [];

  if (isDefault && children) {
    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === InfoBoxItem) {
        infoBoxItems.push(child);
      }
    });
  }

  // In slim mode, we don't support title or InfoBox.Item children
  if (size === "slim" && (title || infoBoxItems.length > 0)) {
    console.warn(
      "InfoBox with slim size should not have title or InfoBox.Item children",
    );
  }

  return (
    <S.InfoBoxContainer type={type}>
      {isDefault && title ? (
        <S.InfoBoxHeader type={type}>
          <InfoIcon sx={{ width: 20, height: 20 }} />
          <S.InfoBoxTitleTypography type={type}>
            {title}
          </S.InfoBoxTitleTypography>
        </S.InfoBoxHeader>
      ) : (
        // For slim mode, show icon with content but no title
        <S.InfoBoxHeader type={type}>
          <InfoIcon sx={{ width: 20, height: 20 }} />
          <S.InfoBoxContentTypography size={size}>
            {content}
          </S.InfoBoxContentTypography>
        </S.InfoBoxHeader>
      )}

      {/* Show content below title only in default mode */}
      {isDefault && content && (
        <S.InfoBoxContentTypography size={size}>
          {content}
        </S.InfoBoxContentTypography>
      )}

      {isDefault && infoBoxItems.length > 0 && (
        <>
          <S.InfoBoxDividerContainer>
            <Divider sx={{ borderStyle: "dotted" }} />
          </S.InfoBoxDividerContainer>
          <S.InfoBoxItemsContainer>
            {infoBoxItems.map((item, index) =>
              // biome-ignore lint/suspicious/noArrayIndexKey: component-level keys are acceptable
              cloneElement(item, { key: index }),
            )}
          </S.InfoBoxItemsContainer>
        </>
      )}
    </S.InfoBoxContainer>
  );
}

/**
 * InfoBox.Item component for list items inside an InfoBox
 */
function InfoBoxItem({ children }: InfoBoxItemProps) {
  return (
    <S.InfoBoxItemContainer>
      <S.InfoBoxItemBullet>-</S.InfoBoxItemBullet>
      <S.InfoBoxItemTypography>{children}</S.InfoBoxItemTypography>
    </S.InfoBoxItemContainer>
  );
}

InfoBox.Item = InfoBoxItem;
