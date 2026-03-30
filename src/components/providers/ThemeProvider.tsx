'use client';

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';

/**
 * Thin wrapper around next-themes ThemeProvider.
 * The 'use client' here is required — without it, Next.js App Router cannot
 * properly place the provider in the client bundle when it is used in a
 * Server Component (like the root layout).
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
