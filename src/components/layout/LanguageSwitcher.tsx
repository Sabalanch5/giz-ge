'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

/**
 * Locale switcher — preserves the current path when switching languages.
 * Must be a Client Component because it uses routing hooks.
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');

  const handleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav aria-label={t('language')} className="flex items-center gap-0.5">
      {routing.locales.map((loc) => {
        const isActive = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => handleSwitch(loc)}
            disabled={isActive}
            aria-label={t(loc === 'ka' ? 'georgian' : 'english')}
            aria-current={isActive ? 'true' : undefined}
            className={[
              'cursor-pointer rounded px-2 py-1 text-sm font-medium transition-colors',
              isActive
                ? 'text-primary cursor-default'
                : 'text-foreground-muted hover:text-foreground',
            ].join(' ')}
          >
            {loc === 'ka' ? 'ქარ' : 'ENG'}
          </button>
        );
      })}
    </nav>
  );
}
