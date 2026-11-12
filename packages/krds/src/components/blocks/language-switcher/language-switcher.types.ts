export interface LanguageOption {
  /**
   * 언어 코드 (예: "ko", "en")
   */
  code: string;
  /**
   * 언어 이름. 원어로 작성한다 (예: "English", "한국어")
   */
  label: string;
}

export interface LanguageSwitcherProps {
  /**
   * 링크(2개 언어 전환) / 드롭다운(3개 이상 언어)
   * @default "dropdown"
   */
  variant?: "link" | "dropdown";
  languages: LanguageOption[];
  /**
   * 현재 표시 언어 코드
   */
  value: string;
  onChange?: (code: string) => void;
  /**
   * 링크 유형에서 별도의 외국어 서비스로 이동하는 URL.
   * 설정 시 새 창으로 실행된다.
   */
  href?: string;
  className?: string;
}
