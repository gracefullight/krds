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
const primaryColor = getColor("mode-light.color.primary.50");

// Access raw token object (if needed)
import TOKENS from "@gracefullight/krds-tokens/dist/tokens";
```

## API

### getTypography(key: string)

Retrieve a typography style object by its path. Returns an object with:
- `fontSize`: string
- `fontWeight`: number
- `lineHeight`: number
- `letterSpacing`: string

```ts
getTypography("mobile.display.small");
```

### getColor(key: string)

Retrieve a color value from the token set.

```ts
getColor("mode-high-contrast.color.text.primary");
```

### getPalette(name: string)

Get a predefined color palette.

### getRadius(key: string)

Get border-radius value.

### getShadow(key: string)

Get box-shadow definition.

### BREAKPOINTS

Exported breakpoint map for responsive design.

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
