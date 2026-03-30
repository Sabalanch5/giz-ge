'use client';

import { useLocale } from 'next-intl';
import { useEffect } from 'react';

/**
 * Keeps document.documentElement.lang in sync with the active locale.
 *
 * The root layout sets the initial lang attribute on the server.
 * This component updates the lang attribute after client-side
 * locale navigation.
 */
export function LocaleHtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
