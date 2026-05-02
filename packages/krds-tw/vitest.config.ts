import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "@gracefullight/krds-tw",
    environment: "happy-dom",
    setupFiles: ["./src/test-setup.ts"],
    globals: true,
    alias: {
      "#/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
