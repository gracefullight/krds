import type { Options } from "tsup";

export const tsup: Options = {
  dts: false,
  format: ["esm", "cjs"],
  entry: ["src/index.ts"],
  external: ["react", "react-dom"],
  sourcemap: true,
  clean: true,
  treeshake: true,
};
