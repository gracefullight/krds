import { Box, Link, Stack, Typography } from "@mui/material";

const PATTERN_CARDS = [
  {
    href: "/patterns/input-form",
    title: "입력 폼",
    desc: "텍스트 입력, 선택, 날짜, 첨부파일 등 입력 폼 구성과 개인 식별 정보 입력 안내",
  },
  {
    href: "/patterns/consent",
    title: "동의",
    desc: "전체 동의와 개별 동의, 약관 확인을 포함한 동의 절차",
  },
  {
    href: "/patterns/list",
    title: "목록 탐색·필터링",
    desc: "구조화 목록, 페이지네이션, 필터링·정렬, 상세 정보 확인",
  },
  {
    href: "/patterns/feedback",
    title: "피드백·확인",
    desc: "토스트, 스낵바, 확인 모달 등 사용자 행동에 대한 결과 안내",
  },
  {
    href: "/patterns/error",
    title: "오류",
    desc: "입력 오류, 페이지 오류 등 오류 상황 안내와 복구",
  },
  {
    href: "/patterns/help",
    title: "도움",
    desc: "도움 패널, 맥락적 도움말, 툴팁 등 부가 정보 제공",
  },
];

export default function PatternsPage() {
  return (
    <Stack sx={{ gap: "24px" }}>
      <Box>
        <Typography variant="heading-large">기본 패턴</Typography>
        <Typography variant="body-medium" sx={{ mt: 1, color: "text.subtle" }}>
          KRDS 컴포넌트를 조합하여 자주 사용하는 사용자 과업을 해결하는 패턴
          예시입니다. 각 패턴은 실제 동작하는 컴포넌트로 구성되어 있습니다.
        </Typography>
      </Box>

      <Stack
        direction={{ xsmall: "column", small: "row" }}
        sx={{ gap: "16px", flexWrap: "wrap" }}
      >
        {PATTERN_CARDS.map((card) => (
          <Box
            key={card.href}
            sx={{
              flex: "1 1 280px",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid",
              borderColor: "border.gray-light",
            }}
          >
            <Typography variant="heading-xsmall">
              <Link href={card.href} type="subtle-none">
                {card.title}
              </Link>
            </Typography>
            <Typography
              variant="body-small"
              sx={{ mt: 1, color: "text.subtle" }}
            >
              {card.desc}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
