import { Globe, OpenNewWindow } from "@gracefullight/krds-icons";
import { MenuItem, Select } from "@mui/material";
import * as S from "#/components/blocks/language-switcher/language-switcher.styles";
import type { LanguageSwitcherProps } from "#/components/blocks/language-switcher/language-switcher.types";

/**
 * LanguageSwitcher — KRDS 언어 변경
 *
 * 2개 언어는 링크 유형(전환되는 언어 이름을 원어로 표시),
 * 3개 이상 언어는 드롭다운 유형(지구본 아이콘 + 언어 이름)을 사용한다.
 * 언어 코드로 축약하지 않으며, 외국어 서비스 이동 시 새 창으로 실행한다.
 */
export default function LanguageSwitcher({
  variant = "dropdown",
  languages,
  value,
  onChange,
  href,
  className,
}: LanguageSwitcherProps) {
  if (variant === "link") {
    const target = languages.find((language) => language.code !== value);
    if (!target) return null;

    return (
      <S.LanguageSwitcherLink
        className={className}
        href={href ?? "#"}
        {...(href && { target: "_blank", rel: "noopener noreferrer" })}
        onClick={(event) => {
          if (!href) {
            event.preventDefault();
            onChange?.(target.code);
          }
        }}
      >
        <Globe size={16} />
        {target.label}
        {href && <OpenNewWindow size={14} />}
      </S.LanguageSwitcherLink>
    );
  }

  const current = languages.find((language) => language.code === value);

  return (
    <S.LanguageSwitcherDropdown className={className}>
      <Globe size={16} />
      <Select
        variant="standard"
        disableUnderline
        value={value}
        inputProps={{ "aria-label": "언어 변경" }}
        onChange={(event) => onChange?.(event.target.value)}
        renderValue={() => current?.label ?? value}
        sx={{
          "& .MuiSelect-select": {
            padding: "0.4rem 2.4rem 0.4rem 0.4rem",
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            {language.label}
          </MenuItem>
        ))}
      </Select>
    </S.LanguageSwitcherDropdown>
  );
}
