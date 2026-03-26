export default {
  "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": (files) => {
    const filtered = files.filter(
      (f) => !(f.includes("/.agents/") || f.includes("/.claude/")),
    );
    if (filtered.length === 0) return [];
    return [
      `biome check --fix --unsafe --no-errors-on-unmatched ${filtered.join(" ")}`,
    ];
  },
  "*": (files) => {
    const filtered = files.filter(
      (f) => !(f.includes("/.agents/") || f.includes("/.claude/")),
    );
    if (filtered.length === 0) return [];
    return [
      `biome check --fix --no-errors-on-unmatched --files-ignore-unknown=true ${filtered.join(" ")}`,
    ];
  },
  "package.json": "sort-package-json",
};
