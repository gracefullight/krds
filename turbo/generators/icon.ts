import type { PlopTypes } from "@turbo/gen";

import { exec } from "node:child_process";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { kebabCase, pascalCase } from "es-toolkit";

const execPromise = promisify(exec);

/**
 * SVG to React component generator
 * Converts SVG files to React components
 */
export default function iconGenerator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("icon", {
    description: "Convert SVG files to React components",
    prompts: [
      {
        type: "input",
        name: "svgPath",
        message: "SVG source directory:",
        default: "packages/krds-icons/src/public",
      },
      {
        type: "input",
        name: "outputPath",
        message: "Output components directory:",
        default: "packages/krds-icons/src/icons",
      },
    ],
    actions: [
      // * Generate React components from SVG files
      async (answers) => {
        const { svgPath, outputPath } = answers as {
          svgPath: string;
          outputPath: string;
        };

        try {
          const baseDir = plop.getDestBasePath();
          const svgAbsolutePath = path.join(baseDir, svgPath);
          const outputAbsolutePath = path.join(baseDir, outputPath);

          // Create output directory if it doesn't exist
          await mkdir(outputAbsolutePath, { recursive: true });

          console.log("🔍 Reading SVG files from:", svgAbsolutePath);
          const svgFiles = await readdir(svgAbsolutePath);
          const svgOnlyFiles = svgFiles.filter((file) => file.endsWith(".svg"));

          console.log(
            `🔄 Converting ${svgOnlyFiles.length} SVG files to React components...`,
          );

          const iconNames: string[] = [];

          // Process each SVG file
          for (const svgFile of svgOnlyFiles) {
            const componentName = pascalCase(svgFile.replace(".svg", ""));
            iconNames.push(componentName);

            const svgContent = await readFile(
              path.join(svgAbsolutePath, svgFile),
              "utf-8",
            );
            const componentContent = createReactComponent(
              componentName,
              svgContent,
            );

            const outputFilePath = path.join(
              outputAbsolutePath,
              `${kebabCase(componentName)}.tsx`,
            );
            await writeFile(outputFilePath, componentContent);

            console.log(`✓ Created: ${outputFilePath}`);
          }

          // Update index.ts with exports
          const indexPath = path.join(
            baseDir,
            "packages/krds-icons/src/index.ts",
          );
          await updateIndexFile(indexPath, iconNames);

          console.log(
            "✅ All SVG files have been converted to React components",
          );
          return "Icon generation completed successfully";
        } catch (error) {
          console.error("❌ Error occurred during icon generation:", error);
          throw error;
        }
      },

      // * Format the generated files with Biome
      async (answers) => {
        const { outputPath } = answers as { outputPath: string };
        const baseDir = plop.getDestBasePath();
        const outputAbsolutePath = path.join(baseDir, outputPath);
        console.log(outputAbsolutePath);
        const indexPath = path.join(
          baseDir,
          "packages/krds-icons/src/index.ts",
        );

        try {
          console.log("🔄 Formatting with Biome...");
          await execPromise(
            `pnpx @biomejs/biome format --write "packages/krds-icons/src/icons" "${indexPath}"`,
          );

          console.log("✅ Biome formatting completed successfully.");
          return "Biome formatting completed successfully";
        } catch (formatError) {
          console.error("⚠️ Failed to format with Biome:", formatError);
          console.log("📝 Icon files were generated but not formatted.");
          return "Failed to format with Biome, but icon generation was successful";
        }
      },
    ],
  });
}

/**
 * Convert SVG content to React component
 */
function createReactComponent(
  componentName: string,
  svgContent: string,
): string {
  // Clean up SVG content
  const cleanedSvg = svgContent
    .replace(/<\?xml.*?\?>/g, "") // Remove XML declaration
    .replace(/<!(DOCTYPE|doctype).*?>/g, "") // Remove DOCTYPE
    .replace(/<!--.*?-->/g, "") // Remove comments
    .replace(/\s+/g, " ") // Normalize whitespace
    .replace(/\n/g, "") // Remove newlines
    .trim();

  // Extract SVG attributes
  const svgTagMatch = cleanedSvg.match(/<svg[^>]*>/);
  if (!svgTagMatch) {
    throw new Error(`Invalid SVG format for ${componentName}`);
  }

  const svgTag = svgTagMatch[0];
  const viewBoxMatch = svgTag.match(/viewBox=["']([^"']*)["']/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24"; // Default viewBox if not found

  // Extract SVG content (everything between opening and closing svg tags)
  const contentMatch = cleanedSvg.match(/<svg[^>]*>(.*)<\/svg>/);
  const svgInnerContent = contentMatch ? contentMatch[1] : "";

  // Create React component
  return `// filepath: ${kebabCase(componentName)}.tsx
import type { IconProps } from "#/types";

export function ${componentName}({ 
  size = 24, 
  color = "currentColor",
  title = "${componentName}",
  ...props 
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      {...props}
    >
      <title>{title}</title>
      ${svgInnerContent.trim()}
    </svg>
  );
};
`;
}

/**
 * Update index.ts file with exports for all icons
 */
async function updateIndexFile(
  indexPath: string,
  iconNames: string[],
): Promise<void> {
  const existingContent = await readFile(indexPath, "utf-8");

  // Extract type exports (keep them)
  const typeExports = existingContent.match(/export type \{[^}]*\};/);

  // Create new file content
  let newContent = typeExports
    ? `${typeExports[0]}\n\n`
    : 'export type { IconProps } from "#/types";\n\n';
  newContent += "// Export all icons\n";

  // Add export for each icon
  for (const name of iconNames) {
    newContent += `export { ${name} } from "#/icons/${kebabCase(name)}";\n`;
  }

  newContent += "\n// This file is auto-generated. Do not edit manually.";

  await writeFile(indexPath, newContent);
  console.log(`✅ Updated index.ts with ${iconNames.length} icon exports`);
}
