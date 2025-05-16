# @gracefullight/krds-tokens

Design tokens for the KRDS design system.

## Installation

Install the package via pnpm, npm or yarn:

```bash
pnpm add @gracefullight/krds-tokens
# or
npm install @gracefullight/krds-tokens
# or
yarn add @gracefullight/krds-tokens
```

## Usage

Import the helper functions or raw tokens in your TypeScript or JavaScript project.

```typescript
// Import helper functions
import { getTypography, getColor, getPalette, getRadius, getShadow, BREAKPOINTS } from "@gracefullight/krds-tokens";

// Get a typography style by key
const headingStyle = getTypography("pc.heading.large");

// Get a color value
const textBasic = getPalette("text.basic");

// Access raw token object (if needed)
import { TOKENS } from "@gracefullight/krds-tokens";
```

## Scripts

- `pnpm build` - Build the package with tsup
- `pnpm dev` - Run tsup in watch mode

## Contributing

1. Fork the repository
2. Install dependencies: `pnpm install`
3. Run generators or update tokens
4. Build: `pnpm build`
5. Submit a pull request following conventional commits

## License

MIT
