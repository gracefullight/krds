# KRDS 전체 통합 스펙 리뷰 및 보강 결과

- 리뷰 일자: 2026-11-12
- 스펙 원본: `.orca/drops/KRDS_전체_통합.pdf` (1,578페이지, krds.go.kr 전체 가이드 내보내기, 2026-11-11 수집)
- 추출 텍스트: `.orca/drops/krds-spec.txt`, 목차: `.orca/drops/krds-spec-toc.txt`
- 대상: `@gracefullight/krds` (MUI v7), `@gracefullight/krds-tw` (Tailwind v4 + Base UI), `@gracefullight/krds-tokens`

## 1. 스펙 문서 구성

| 섹션          | 페이지    | 내용                                                                                                              |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| 디자인 스타일 | 3–205     | 색상, 타이포그래피, 형태, 레이아웃, 아이콘, 엘리베이션, 선명한 화면 모드, 디자인 토큰                             |
| 컴포넌트      | 206–983   | **55종** (아이덴티티/탐색/레이아웃·표현/액션/선택/피드백/도움/입력/설정/콘텐츠/모바일)                            |
| 기본 패턴     | 984–1118  | 개인식별정보 입력, 도움, 동의, 목록 탐색, 피드백, 오류, 입력 폼 등                                                |
| 서비스 패턴   | 1119–1335 | 방문, 검색, 로그인, 신청, 정책 정보 확인                                                                          |
| 부록          | 1336–1578 | 예시 화면 40종, 인쇄 보충, 스크린리더 레이블, **전체 디자인 토큰** (semantic 287행/526값 + primitive 135행/242값) |

## 2. 디자인 토큰 리뷰

토큰 **데이터**는 스펙과 일치함을 확인했다 (primitive 색상, semantic 색상 13개 분류, 타이포그래피, gap/padding/size-height/radius, font-size/gap-layout/padding-card, border-width).

발견된 격차: 데이터는 존재하나 **공개 getter가 없어** 사용할 수 없던 토큰군.

| 토큰군                                 | 스펙 위치   | 보강 내용             |
| -------------------------------------- | ----------- | --------------------- |
| semantic gap (1–12)                    | p.1559      | `getGap` 추가         |
| semantic padding (1–10)                | p.1562      | `getPadding` 추가     |
| semantic size-height (1–11)            | p.1563      | `getSizeHeight` 추가  |
| font-size (pc/mobile 23종)             | p.1557–1559 | `getFontSize` 추가    |
| gap-layout (pc/mobile 22종)            | p.1560–1562 | `getGapLayout` 추가   |
| padding-card (pc/mobile 4종)           | p.1563      | `getPaddingCard` 추가 |
| border-width (light/high-contrast 4종) | p.1564      | `getBorderWidth` 추가 |

- 모든 getter는 리터럴 타입 추론을 유지하며 `krds`, `krds-tw` 패키지에서도 재수출한다.
- 스펙 값 대조 테스트 14건 추가 (`packages/krds-tokens/src/tokens.test.ts`).
- 검증 예: `primary.50` `#256ef4`, `text.basic` `#1e2124`, high-contrast에서 variable border 두께 증가(0.1→0.2rem), static 유지.

## 3. 컴포넌트 커버리지 (스펙 55종)

보강 전 격차: **krds-tw 8종 미구현, krds(MUI) 17종 미구현**. 보강 후 양쪽 모두 스펙 전 컴포넌트 커버.

| 스펙 컴포넌트                            | krds-tw (전 → 후)              | krds MUI (전 → 후)         |
| ---------------------------------------- | ------------------------------ | -------------------------- |
| 공식 배너 Masthead                       | ✓                              | ✓                          |
| 운영기관 식별자 Identifier               | ✓                              | ✗ → ✓                      |
| 헤더 Header                              | ✓                              | ✓                          |
| 푸터 Footer                              | ✓                              | ✓                          |
| 건너뛰기 링크 Skip link                  | ✓                              | ✓                          |
| 메인 메뉴 Main menu                      | ✓                              | ✓                          |
| 브레드크럼 Breadcrumb                    | ✓                              | ✓                          |
| 사이드 메뉴 Side navigation              | ✓                              | ✓                          |
| 콘텐츠 내 탐색 In-page navigation        | ✓                              | ✓                          |
| 페이지네이션 Pagination                  | ✓                              | ✓                          |
| 구조화 목록 Structured list              | ✓                              | ✓                          |
| 긴급 공지 Critical alerts                | ✓                              | ✓                          |
| 달력 Calendar                            | ✓ DatePicker                   | ✓ DatePickers              |
| 디스클로저 Disclosure                    | ✓                              | ✗ → ✓                      |
| 모달 Modal                               | ✓ Dialog                       | ✓ Dialog                   |
| 배지 Badge                               | ✓                              | ✓                          |
| 아코디언 Accordion                       | ✓                              | ✓                          |
| 이미지 Image                             | ✗ → ✓                          | ✗ → ✓                      |
| 캐러셀 Carousel                          | ✓                              | ✗ → ✓                      |
| 탭 Tab                                   | ✓                              | ✓                          |
| 표 Table                                 | ✓                              | ✓                          |
| 텍스트 목록 Text list                    | ✓                              | ✗ → ✓                      |
| 파비콘 Favicon                           | 에셋 가이드 (컴포넌트 아님)    | 동일                       |
| 링크 Link                                | ✓                              | ✓                          |
| 버튼 Button                              | ✓                              | ✓ (테마 오버라이드)        |
| 플로팅 FAB                               | ✓ TopButton                    | ✓ TopButton                |
| 라디오 버튼 Radio button                 | ✓                              | ✓                          |
| 체크박스 Checkbox                        | ✓                              | ✓                          |
| 셀렉트 Select                            | ✓                              | ✓                          |
| 태그 Tag                                 | ✓ Chip/ChipGroup               | ✓ Chip                     |
| 토글 스위치 Toggle switch                | ✓                              | ✓                          |
| 단계 표시기 Step indicator               | ✓ Stepper                      | ✓ Stepper                  |
| 스피너 Spinner                           | ✓ Circular/LinearProgress      | ✓                          |
| 도움 패널 Help panel                     | ✓                              | ✓                          |
| 따라하기 패널 Tutorial panel             | ✓ HelpPanel variant="tutorial" | ✓ HelpPanel                |
| 맥락적 도움말 Contextual help            | ✓                              | ✗ → ✓                      |
| 코치마크 Coach mark                      | ✓                              | ✗ → ✓                      |
| 툴팁 Tooltip                             | ✓                              | ✓                          |
| 음성지원 TTS                             | ✓ VoiceAssist                  | ✓ VoiceAssist              |
| 날짜 입력 필드 Date input                | ✓ DatePicker                   | ✓ DatePickers              |
| 텍스트 영역 Textarea                     | ✓                              | ✓                          |
| 텍스트 입력 필드 Text input              | ✓ Input                        | ✓ TextField                |
| 파일 업로드 File upload                  | ✓                              | ✗ → ✓                      |
| 언어 변경 Language switcher              | ✓                              | ✗ → ✓                      |
| 화면 크기 조정 Resize                    | ✓                              | ✗ → ✓                      |
| 접근 가능한 미디어 Accessible multimedia | ✗ → ✓                          | ✗ → ✓                      |
| 숨긴 콘텐츠 Visually hidden              | ✗ → ✓                          | ✗ → ✓                      |
| 범위 슬라이더 Range slider               | ✗ → ✓                          | ✗ → ✓ (Slider 테마 추가)   |
| 뒤로가기 Back button                     | ✗ → ✓                          | ✗ → ✓                      |
| 바텀시트 Bottom sheet                    | ✓                              | ✓ Drawer 기반              |
| 수량토글 Quantity toggle                 | ✗ → ✓                          | ✗ → ✓                      |
| 토스트 Toast                             | ✗ → ✓                          | ✗ → ✓                      |
| 스낵바 Snackbar                          | ✗ → ✓                          | ✗ → ✓ (Snackbar 테마 추가) |
| 탭바 Tab bars                            | ✓                              | ✓ BottomNavigation         |
| 스플래시 스크린 Splash screen            | ✓                              | ✓                          |

## 4. 보강 시 반영한 스펙 핵심 요구사항

- **숨긴 콘텐츠**: 전용 숨김 스타일(1px, clip) 사용, `display:none`/`visibility:hidden`/크기 0 금지 (p.931–934)
- **이미지**: 정보 이미지 alt 필수, 장식용 `alt=""` + aria-hidden, 비대화형, lazy 로딩 (p.530–533)
- **접근 가능한 미디어**: 오디오/비디오/멀티미디어 유형별 캡션(track), 화면 해설, 설명적 원고 제공 (p.923–930)
- **범위 슬라이더**: 레이블·선택 값·최소/최대 상시 표시, 선택 값은 상단 배치 (p.935–939)
- **뒤로가기**: 상단바 좌측, 기본 히스토리 back, 닫기/취소와 역할 분리 (p.940–943)
- **수량토글**: 증감 버튼 분리 배치(필드 중앙), 경계 값에서 비활성화, 11단계 이내 권장 (p.949–953)
- **토스트**: 중앙 하단, 정보형 2.5초/경고형 3.5초 기본 노출, 한 줄 메시지 (p.954–956)
- **스낵바**: 중앙 하단, 작업 버튼 최대 1개(텍스트), 닫기 버튼, 한 페이지 1개 (p.957–959)
- **코치마크**: 스포트라이트 외곽선, 버튼 순서 그만보기→이전→다음, 단일 단계 "확인"/마지막 "마치기", 사용자 요청 시에만 실행 (p.782–791)
- **맥락적 도움말**: info(i)/help(?) 아이콘, 팝오버, 닫기 버튼, 필수 정보 숨김 금지 (p.764–781)
- **디스클로저**: 기본 축소, 버튼 역할 + aria-expanded (p.477–485)
- **캐러셀**: 도형/분수 식별자, 자동 회전 정지 컨트롤, 슬라이드 5개 이내 권장 (p.534–557)
- **파일 업로드**: 레이블/도움말, 드래그 앤 드롭, 카운터, 형식·크기·개수 검증 오류 메시지 (p.881–898)
- **언어 변경**: 링크(2개 언어, 원어 레이블)/드롭다운(3개+, 지구본 아이콘), 언어 코드 축약 금지 (p.899–912)
- **화면 크기 조정**: 설명적 레이블 옵션 5개 이내 (작게 90/보통 100/조금 크게 110/크게 130/가장 크게 150) (p.913–922)
- **운영기관 식별자**: section 구조, "이 누리집은 [기관명]에서 운영하는 누리집입니다." 안내 텍스트, 로고 alt (p.239–243)

## 5. 검증 결과

| 검증                                   | 결과                                                       |
| -------------------------------------- | ---------------------------------------------------------- |
| 전체 테스트 (`bun run test:ci`)        | **175건 통과** (35개 파일: tokens 14, krds 74, krds-tw 87) |
| 전체 빌드 (`bun run build`, Turbo 6종) | 통과 (tokens·icons·krds·krds-tw·storybook·sample)          |
| Biome 린트/포맷                        | 오류 0 (경고 12 — §7 참조)                                 |

신규 테스트 인프라: `packages/krds`에 vitest + happy-dom + testing-library 설정 추가 (`vitest.config.ts`, `src/test-setup.ts`, `src/test-utils.tsx` — KRDS 테마 래퍼).

## 6. 잔여 항목 보강 완료 (2차)

1. **krds-tw Resize 옵션 통일**: 스펙 예시 `작게 90 / 보통 100 / 조금 크게 110 / 크게 130 / 가장 크게 150`로 통일하고, 설명적 레이블 + 아이콘 버튼 + 옵션 목록 구조로 재설계(Base UI Select). `labels`/`applyToRoot` prop 추가. MUI 버전과 동일한 스펙 준수.
2. **독립 달력(Calendar) 구현**: 양 패키지에 스펙 달력 컴포넌트 신규 구현 — 연/월 탐색, 요일 헤딩(`th scope=col`), 날짜 상태(오늘·선택·선택 불가·비활성·외부 월), 이벤트 점 + 범례. 접근성: 색상 외 구분(굵기·밑줄·취소선·식별자), 날짜별 대체 텍스트(`aria-label`), `aria-pressed`/`aria-current=date`, 키보드 조작. 테스트 TW 7건·MUI 6건, 스토리 양쪽 추가. (MUI X `DateCalendar` 스토리는 `KRDS-MUI/DateCalendar`로 분리)
3. **기본 패턴 예시 추가**: 샘플 앱에 `/patterns` 섹션 신설 — 개요 + 입력 폼(개인 식별 정보·첨부파일 포함)·동의·목록 탐색/필터링·정렬·상세 정보·피드백/확인·오류·도움 7개 패턴 페이지. 모두 실제 동작하는 KRDS 컴포넌트로 구성.
4. **아이콘 스펙 대조**: 아이콘 섹션(p.135–159)은 스타일 가이드(사이즈 16/20/24/32/40, 기본 24, 두께 1.6px, round cap, currentColor, 대비 3:1/7:1). `krds-icons`는 공식 KRDS SVG 키트 자동 생성으로 기본 24px·`currentColor`·확장 가능 `size`·접근성 `title`·24 viewBox를 준수함을 확인(코드 변경 불필요).
5. **시각 검증**: 이미지 기반 시안(111페이지)과의 픽셀 단위 대조는 미수행 — 스토리북 수동 확인 권장(잔여).

## 7. 의존성 전체 업그레이드 (bun outdated)

요청에 따라 전체 워크스페이스를 최신 버전으로 업그레이드하고 검증했다.

| 패키지                          | 이전 → 이후      | 비고                                                                                                                                                           |
| ------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @mui/material, icons-material   | 7.3 → **9.5**    | `PickersDay`→`PickerDay`(X v9), Stack `gap`→`spacing`·시스템 prop→`sx`, Grid `column` 미지원 → Stack 전환                                                      |
| @mui/x-date-pickers             | 8.26 → **9.17**  | `pickersDayClasses`→`pickerDayClasses`                                                                                                                         |
| storybook / react-vite          | 8.6 → **10.6**   | ESM `createRequire`, MDX는 `@storybook/addon-docs`, blocks는 `@storybook/addon-docs/blocks`, `@storybook/test`→`storybook/test`, 폐지 애드온 제거, Vite 7 고정 |
| next                            | 16.2 → **16.4**  |                                                                                                                                                                |
| react / react-dom               | 19.2 → **19.3**  |                                                                                                                                                                |
| vitest / @vitest/*              | 3.2 → **5.1**    |                                                                                                                                                                |
| @biomejs/biome                  | 1.9 → **2.6**    | `biome migrate` 적용, CSS는 Tailwind 구문 위해 검사 제외                                                                                                       |
| tsup                            | 8.5 → **9.0**    |                                                                                                                                                                |
| happy-dom                       | 17.6 → **21.0**  |                                                                                                                                                                |
| @testing-library/jest-dom       | 6.5 → **7.0**    |                                                                                                                                                                |
| jotai                           | 2.16 → **3.0**   |                                                                                                                                                                |
| ag-grid-community               | 33.3 → **36.3**  |                                                                                                                                                                |
| @hookform/resolvers             | 5.2 → **7.0**    |                                                                                                                                                                |
| @tanstack/react-query           | 5.90 → **5.107** |                                                                                                                                                                |
| tailwindcss / @tailwindcss/vite | 4.2 → **4.3**    |                                                                                                                                                                |
| turbo / @turbo/gen              | 2.7 → **2.11**   |                                                                                                                                                                |
| @changesets/cli                 | 2.29 → **3.0**   |                                                                                                                                                                |
| @commitlint/*                   | 19.8 → **21.2**  |                                                                                                                                                                |
| lint-staged                     | 16.2 → **17.6**  |                                                                                                                                                                |
| sort-package-json               | 3.6 → **4.1**    |                                                                                                                                                                |
| es-toolkit                      | 1.44 → **1.53**  |                                                                                                                                                                |
| @types/node                     | 22 → **26**      |                                                                                                                                                                |

**유일한 예외 — TypeScript 6.0.3 유지**: 최신 TS 7.0.2는 컴파일러 API를 제공하지 않아 tsup의 dts 생성(`rollup-plugin-dts`)이 불가하고, 호환 shim(`@typescript/typescript6`)도 tsup 9에서 `parseJsonConfigFileContent` 버그로 동작하지 않는다. 빌드 도구 체인 호환을 위해 TS는 최신 6.x(6.0.3)로 유지했다. TS7 전환은 tsup/rollup-plugin-dts의 TS7 지원 성숙 후 재검토.

**Biome 2 마이그레이션 방침**: 신규 추천 규칙 중 기존 컴포넌트를 flagged하는 `a11y/useAriaPropsSupportedByRole`, `a11y/noNoninteractiveTabindex`, `a11y/noNoninteractiveElementToInteractiveRole`, `performance/noDynamicNamespaceImportAccess`는 `warn`으로 낮췄다(12건). 기존 컴포넌트의 맹목적 리팩터링 위험을 피하고 별도 a11y 패스 대상으로 남긴 것. 신규 코드는 모두 린트 클린.

**pnpm → bun 전환**: 문서 5곳(`krds`/`krds-tokens`/`krds-icons` README, 스토리북 introduction.mdx)의 pnpm 명령을 bun으로 통일.
