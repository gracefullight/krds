const OMA_VENDOR_DIRS = [
  "/.agents/",
  "/.claude/",
  "/.codex/",
  "/.cursor/",
  "/.gemini/",
  "/.qwen/",
  "/.serena/",
  "/.github/skills/",
];

const isOmaVendorFile = (f) => OMA_VENDOR_DIRS.some((d) => f.includes(d));

export default {
  "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": (files) => {
    const filtered = files.filter((f) => !isOmaVendorFile(f));
    if (filtered.length === 0) return [];
    return [
      `biome check --fix --unsafe --no-errors-on-unmatched ${filtered.join(" ")}`,
    ];
  },
  "*": (files) => {
    const filtered = files.filter((f) => !isOmaVendorFile(f));
    if (filtered.length === 0) return [];
    return [
      `biome check --fix --no-errors-on-unmatched --files-ignore-unknown=true ${filtered.join(" ")}`,
    ];
  },
  "package.json": "sort-package-json",
};
