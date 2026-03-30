import type { ReactNode } from 'react';
import { Noto_Sans_Georgian } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import '@/app/globals.css';

// ─── Font ─────────────────────────────────────────────────────────────────────
const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-georgian',
  display: 'swap',
});

/**
 * Root layout — owns ONLY the html/body shell, font, and ThemeProvider.
 *
 * Intentionally has NO locale logic and NO NextIntlClientProvider.
 * Those live in [locale]/layout.tsx so they re-render on every locale change.
 * If NextIntlClientProvider were here, messages would be frozen at the first
 * locale and never update when the user switches languages.
 *
 * lang="ka" is a safe fallback at the root level.
 * <LocaleHtmlLang> in [locale]/layout.tsx keeps document.documentElement.lang
 * in sync after client-side locale navigation.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ka" suppressHydrationWarning className={notoSansGeorgian.variable}>
      <body className="bg-background text-foreground flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
