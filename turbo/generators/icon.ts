import type { PlopTypes } from "@turbo/gen";

import { exec } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync } from "node:fs";
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
    actions: (answers) => {
      const { svgPath, outputPath } = answers as {
        svgPath: string;
        outputPath: string;
      };
      const baseDir = plop.getDestBasePath();
      const svgDir = path.join(baseDir, svgPath);
      const outDir = path.join(baseDir, outputPath);

      mkdirSync(outDir, { recursive: true });

      const svgFiles = readdirSync(svgDir).filter((f) => f.endsWith(".svg"));
      const actions: PlopTypes.ActionType[] = [];
      const iconNames: string[] = [];

      for (const fileName of svgFiles) {
        const componentName = pascalCase(fileName.replace(".svg", ""));
        iconNames.push(componentName);
        const rawSvg = readFileSync(path.join(svgDir, fileName), "utf-8");
        const cleaned = cleanSvgContent(rawSvg);
        const viewBox = extractViewBox(cleaned);
        const inner = extractInnerContent(cleaned);

        actions.push({
          type: "add",
          path: path.join(outDir, `${kebabCase(componentName)}.tsx`),
          templateFile: path.resolve(__dirname, "templates/icon-component.hbs"),
          data: { name: componentName, viewBox, svgInnerContent: inner },
          abortOnFail: true,
          force: true,
        });
      }

      // Generate index.ts via template
      actions.push({
        type: "add",
        path: path.join(baseDir, "packages/krds-icons/src/index.ts"),
        templateFile: path.resolve(__dirname, "templates/icon-index.hbs"),
        data: {
          iconData: iconNames.map((name) => ({ name, file: kebabCase(name) })),
        },
        force: true,
      });

      // Format with Biome
      actions.push(async () => {
        const indexPath = path.join(
          baseDir,
          "packages/krds-icons/src/index.ts",
        );
        await execPromise(
          `pnpx @biomejs/biome format --write "${outDir}" "${indexPath}"`,
        );
        return "Formatted icon files";
      });

      return actions;
    },
  });
}

// Helpers: clean, extract, template
function cleanSvgContent(svgContent: string): string {
  return svgContent
    .replace(/<\?xml.*?\?>/g, "")
    .replace(/<!(?:DOCTYPE|doctype).*?>/g, "")
    .replace(/<!--.*?-->/g, "")
    .replace(/\s+/g, " ")
    .replace(/\n/g, "")
    .trim();
}

function extractViewBox(cleanedSvg: string): string {
  const tagMatch = cleanedSvg.match(/<svg[^>]*>/);
  const viewBoxMatch = tagMatch
    ? tagMatch[0].match(/viewBox=["']([^"']*)["']/)
    : null;
  return viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";
}

function extractInnerContent(cleanedSvg: string): string {
  const match = cleanedSvg.match(/<svg[^>]*>(.*)<\/svg>/);
  return match ? match[1].trim() : "";
}
