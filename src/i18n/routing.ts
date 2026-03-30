import { defineRouting } from 'next-intl/routing';

/**
 * Locale routing configuration — the single source of truth for locale setup.
 *
 * Import this file in:
 *   - middleware.ts (Edge Runtime)
 *   - src/i18n/request.ts (Server)
 *   - src/app/[locale]/layout.tsx (Server)
 *
 * For locale-aware Link, useRouter, usePathname → import from @/i18n/navigation
 */
export const routing = defineRouting({
  locales: ['ka', 'en'],
  defaultLocale: 'ka',
  localePrefix: 'always',
});
