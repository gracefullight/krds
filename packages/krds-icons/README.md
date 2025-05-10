# KRDS Icons

React icon components for the KRDS design system.

## Installation

```bash
pnpm add @gracefullight/krds-icons
```

## Usage

```tsx
import { Time, Calendar } from "@gracefullight/krds-icons";

export function MyComponent() {
  return (
    <div>
      <Time size={24} color="#333" />
      <Calendar size={20} />
    </div>
  );
}
```

## Props

All icon components accept the following props:

| Prop   | Type             | Default        | Description                         |
|--------|------------------|---------------|-------------------------------------|
| size   | number \| string | 24            | Width and height of the icon        |
| color  | string           | currentColor  | Color of the icon                   |
| title  | string           | undefined     | Accessible title for the icon       |

In addition, all SVG attributes can be passed to the icons.
