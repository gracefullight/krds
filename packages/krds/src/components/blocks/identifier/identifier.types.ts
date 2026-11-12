import type { BoxProps } from "@mui/material";
import type { ReactNode } from "react";

export interface IdentifierLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface IdentifierProps extends Omit<BoxProps, "name"> {
  /**
   * 기관 로고 (img 요소 또는 ReactNode)
   */
  logo?: ReactNode;
  /**
   * 기관 로고 이미지 URL (logo 미제공 시 사용)
   */
  logoSrc?: string;
  /**
   * 기관 로고 대체 텍스트
   */
  logoAlt?: string;
  /**
   * 운영기관명
   */
  name: string;
  /**
   * 기관 주소
   */
  address?: string;
  /**
   * 대표 전화번호
   */
  phone?: string;
  /**
   * 연락처 링크 목록 (개인정보처리방침, 저작권정책 등)
   */
  links?: IdentifierLink[];
}
