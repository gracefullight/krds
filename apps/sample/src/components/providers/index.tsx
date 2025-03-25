import type { PropsWithChildren, ReactElement, ReactNode } from "react";

import QueryProvider from "@/components/providers//query-provider";
import JotaiProvider from "@/components/providers/jotai-provider";
import MuiProvider from "@/components/providers/mui-provider";
import { createElement } from "react";

export interface MultiProviderProps {
  providers: ReactElement<Record<string, unknown>>[];
  children: ReactNode;
}

// ? https://github.com/vepr-ua/react-multi-provider
function MultiProvider(props: MultiProviderProps) {
  if (!props.providers) {
    throw new Error("MultiProvider: Missing providers prop");
  }

  if (!props.children) {
    throw new Error("MultiProvider: Missing children");
  }

  const content = props.children;

  // Turn object into an array
  const numberOfProviders = props.providers.length;

  if (!numberOfProviders) {
    // Providers prop is empty, return the content that was meant to be rendered
    return content;
  }

  return props.providers.reduceRight(
    (acc, provider) => createElement(provider.type, provider.props, acc),
    props.children,
  );
}

export default function Providers({ children }: PropsWithChildren) {
  return (
    <MultiProvider
      providers={[
        <QueryProvider key="query" />,
        <MuiProvider key="mui" />,
        <JotaiProvider key="jotai" />,
      ]}
    >
      {children}
    </MultiProvider>
  );
}
