import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/common/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

/**
 * Site-wide header — async Server Component.
 * Uses getTranslations (async) because this is a Server Component.
 * useTranslations is for Client Components only.
 */
export async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-foreground hover:text-primary text-lg font-bold tracking-widest transition-colors"
          >
            {t('siteTitle')}
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <div className="bg-border h-4 w-px" aria-hidden="true" />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
