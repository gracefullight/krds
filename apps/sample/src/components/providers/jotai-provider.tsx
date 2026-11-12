"use client";

import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import type { PropsWithChildren } from "react";

import "jotai-devtools/styles.css";

export default function JotaiProvider({ children }: PropsWithChildren) {
  return (
    <Provider>
      {children}
      <DevTools />
    </Provider>
  );
}
