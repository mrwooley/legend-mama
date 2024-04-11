'use client'

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

/**
 * Wraps our entire application, allowing it to use third party providers
 * and any custom contexts. Wraps the children in the `body` of [layout.tsx](./layout.tsx)
 */
export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}