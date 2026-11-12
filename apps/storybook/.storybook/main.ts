import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import { mergeConfig } from "vite";

const html = String.raw;
const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("@chromatic-com/storybook"),
  ],

  core: {
    disableTelemetry: true,
  },

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [tailwindcss()],
    }),

  managerHead: (head) => html`
    ${head}
    <link rel="shortcut icon" href="./16.png" />
    <link rel="icon" type="image/png" href="./192.png" sizes="192x192" />
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "dce5a0118b9e45d2b719a6096b4e3743"}'></script>
  `,

  typescript: {
    // ? TS7은 컴파일러 API를 제공하지 않으므로 babel 기반 react-docgen 사용
    reactDocgen: "react-docgen",
  },
};
export default config;
