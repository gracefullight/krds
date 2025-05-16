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
        const inner = extractInnerContent(cleaned, componentName);

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

function extractInnerContent(cleanedSvg: string, iconName?: string): string {
  const match = cleanedSvg.match(/<svg[^>]*>(.*)<\/svg>/);
  if (!match) return "";

  // Get the inner content
  let innerContent = match[1].trim();

  // Icons that should use dynamic color instead of hardcoded fill
  const iconsToUseDynamicFill = [
    "arrow-down",
    "arrow-drop-down",
    "arrow-drop-up",
    "arrow-left",
    "arrow-right",
    "arrow-top",
    "calendar",
    "close",
    "emergency",
    "home",
    "top",
    "visibility",
  ];
  // System icons with different patterns
  const systemIcons = {
    "system-info": "rect", // system-info uses rect for background
    "system-warning": "path-first", // system-warning uses first path for background
  };

  // Replace hardcoded fill colors with the color parameter for specific icons
  if (iconName) {
    const iconNameLower = kebabCase(iconName).toLowerCase();

    if (iconsToUseDynamicFill.includes(iconNameLower)) {
      // For regular icons, replace path fill values
      innerContent = innerContent.replace(
        /fill="(#[0-9A-Fa-f]{3,8})"/g,
        "fill={color}",
      );
    } else if (Object.keys(systemIcons).includes(iconNameLower)) {
      // Handle system icons based on their specific pattern
      const iconType = systemIcons[iconNameLower as keyof typeof systemIcons];

      if (iconType === "rect") {
        // For system icons with rect background, replace the rect fill
        innerContent = innerContent.replace(
          /(<rect[^>]*fill=)"([^"]+)"/g,
          "$1{color}",
        );
      } else if (iconType === "path-first") {
        // For system icons that use the first path as background
        // Find the first path and replace its fill
        innerContent = innerContent.replace(
          /(<path[^>]*?fill=)"([^"]+)"/,
          "$1{color}",
        );
      }
    }
  }

  return innerContent;
}
