import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "@gracefullight/krds-tokens",
    environment: "node",
    globals: true,
    alias: {
      "#/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
