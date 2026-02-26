import { resolve } from "node:path";
import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  entry: ["src/index.ts", "src/components/index.ts"],
  format: ["cjs", "esm"],
  publicDir: "src/public",
  esbuildOptions(options) {
    options.alias = {
      "#": resolve(__dirname, "src"),
    };
  },
});
