import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

export interface FooterOrganization {
  /** 기관명 */
  name: string;
  /** 주소 */
  address?: string;
  /** 대표 전화 */
  tel?: string;
  /** 팩스 */
  fax?: string;
  /** 운영 시간 */
  hours?: string;
}

export interface FooterLink {
  /** 링크 텍스트 */
  label: string;
  /** 링크 URL */
  href: string;
  /** 새 탭 열기 여부 */
  external?: boolean;
  /** 굵게 표시 여부 (중요 링크) */
  bold?: boolean;
}

export interface FooterSocial {
  /** 소셜 미디어 이름 */
  label: string;
  /** 링크 URL */
  href: string;
  /** 아이콘 노드 */
  icon: ReactNode;
}

export interface FooterSlots {
  /** 로고 슬롯 */
  logo?: ReactNode;
  /** 인증 마크 슬롯 (e.g. WA 인증, 개인정보 인증 등) */
  certifications?: ReactNode;
  /** 푸터 하단 추가 콘텐츠 슬롯 */
  bottom?: ReactNode;
}

export interface FooterProps {
  /** 운영기관 정보 */
  organization: FooterOrganization;
  /** 관련 링크 목록 */
  links?: FooterLink[];
  /** 소셜 미디어 링크 (선택) */
  socials?: FooterSocial[];
  /** 저작권 문구 */
  copyright?: string;
  /** 커스텀 콘텐츠 슬롯 */
  slots?: FooterSlots;
  sx?: SxProps<Theme>;
}
