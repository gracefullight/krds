import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "node:path";

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
    getAbsolutePath("@storybook/addon-onboarding"),
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
