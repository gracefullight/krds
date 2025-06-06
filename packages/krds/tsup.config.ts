import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  entry: ["src/index.ts", "src/components/index.ts"],
  format: ["cjs", "esm"],
  publicDir: "src/public",
});
