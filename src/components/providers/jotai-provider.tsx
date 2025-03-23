"use client";

import type { PropsWithChildren } from "react";

import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";

import "jotai-devtools/styles.css";

export default function JotaiProvider({ children }: PropsWithChildren) {
  return (
    <Provider>
      {children}
      <DevTools />
    </Provider>
  );
}
