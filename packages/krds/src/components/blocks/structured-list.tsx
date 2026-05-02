import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

import * as S from "#/components/blocks/structured-list.styles";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StructuredListItem {
  /** 항목 레이블 (dt 또는 th[scope="row"]) */
  label: string;
  /** 항목 값 (dd 또는 td) */
  value: ReactNode;
}

export interface StructuredListColumn {
  /** 열 헤더 텍스트 (th[scope="col"]) */
  header: string;
  /** 열 키 (접근자) */
  key: string;
}

export type StructuredListVariant = "default" | "table";

interface StructuredListBaseProps {
  /** 렌더링 변형: "default" (dl/dt/dd) | "table" (표형) */
  variant?: StructuredListVariant;
  sx?: SxProps<Theme>;
}

/** default variant — 단일 레이블+값 목록 */
interface StructuredListDefaultProps extends StructuredListBaseProps {
  variant?: "default";
  /** dl/dt/dd 목록 항목 */
  items: StructuredListItem[];
  /** 테이블 전용 props — 사용 불가 */
  columns?: never;
  rows?: never;
  caption?: never;
}

/** table variant — 열 헤더가 있는 표형 목록 */
interface StructuredListTableProps extends StructuredListBaseProps {
  variant: "table";
  /** 열 정의 (th[scope="col"]) */
  columns: StructuredListColumn[];
  /** 행 데이터: 각 행은 column.key → 셀 값 맵 + 선택적 rowLabel */
  rows: Array<{
    /** 행 헤더 레이블 (th[scope="row"]). 미제공 시 첫 번째 열 값으로 대체 */
    rowLabel?: string;
    /** 열 키 → 셀 값 */
    cells: Record<string, ReactNode>;
  }>;
  /** 접근성을 위한 표 캡션 (시각적으로는 숨김 처리) */
  caption: string;
  /** default variant 전용 props — 사용 불가 */
  items?: never;
}

export type StructuredListProps =
  | StructuredListDefaultProps
  | StructuredListTableProps;

// ─── Component ───────────────────────────────────────────────────────────────

export default function StructuredList(props: StructuredListProps) {
  const { variant = "default", sx } = props;

  if (variant === "table") {
    const { columns, rows, caption } = props as StructuredListTableProps;

    return (
      <S.TableWrapper sx={sx}>
        <S.TableRoot aria-label={caption}>
          <S.TableCaption>{caption}</S.TableCaption>
          <S.TableHead>
            <S.TableHeadRow>
              {columns.map((col) => (
                <S.TableHeaderCell key={col.key} scope="col">
                  {col.header}
                </S.TableHeaderCell>
              ))}
            </S.TableHeadRow>
          </S.TableHead>
          <S.TableBody>
            {rows.map((row, rowIdx) => (
              <S.TableRow key={row.rowLabel ?? `row-${rowIdx}`}>
                {columns.map((col, colIdx) =>
                  colIdx === 0 ? (
                    <S.TableRowHeader key={col.key} scope="row">
                      {row.rowLabel ?? row.cells[col.key]}
                    </S.TableRowHeader>
                  ) : (
                    <S.TableDataCell key={col.key}>
                      {row.cells[col.key]}
                    </S.TableDataCell>
                  ),
                )}
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.TableRoot>
      </S.TableWrapper>
    );
  }

  // default variant
  const { items } = props as StructuredListDefaultProps;

  return (
    <S.DefaultRoot component="dl" sx={sx}>
      {items.map((item) => (
        <S.DefaultRow key={item.label}>
          <S.DefaultTerm>{item.label}</S.DefaultTerm>
          <S.DefaultDetail>{item.value}</S.DefaultDetail>
        </S.DefaultRow>
      ))}
    </S.DefaultRoot>
  );
}
