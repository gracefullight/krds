// ? TS7 네이티브 tsc는 paths 별칭(#/*)을 선언 파일에 그대로 보존한다.
// ? 소비자가 패키지 imports 필드에 의존하지 않도록 emit 후 상대경로로 재작성한다.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const distRoot = process.argv[2];
if (!distRoot) {
  console.error("usage: node rewrite-dts-aliases.mjs <distDir>");
  process.exit(1);
}

function toRelativeSpecifier(fromDir, aliasPath) {
  const target = join(distRoot, aliasPath);
  let rel = relative(fromDir, target).split(sep).join("/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.d\.(m?ts)$/.test(entry)) continue;

    const source = readFileSync(full, "utf8");
    const rewritten = source.replace(
      /(["'])#\/([^"']+)\1/g,
      (_match, quote, aliasPath) =>
        `${quote}${toRelativeSpecifier(dir, aliasPath)}${quote}`,
    );
    if (rewritten !== source) writeFileSync(full, rewritten);
  }
}

walk(distRoot);
