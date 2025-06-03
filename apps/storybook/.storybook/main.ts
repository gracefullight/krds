import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "node:path";

const html = String.raw;

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
    {
      name: getAbsolutePath("@storybook/addon-essentials"),
      options: {
        docs: true,
      },
    },
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("@storybook/addon-storysource"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/experimental-addon-test"),
  ],

  core: {
    disableTelemetry: true,
  },

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  managerHead: (head) => html`
    ${head}
    <link rel="shortcut icon" href="./16.png" />
    <link rel="icon" type="image/png" href="./192.png" sizes="192x192" />
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "dce5a0118b9e45d2b719a6096b4e3743"}'></script>
  `,

  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui and krds packages
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui|@gracefullight\/krds)/.test(
              prop.parent.fileName,
            )
          : true,
    },
  },
};
export default config;
