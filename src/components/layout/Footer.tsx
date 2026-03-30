import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/common/Container';

/**
 * Site-wide footer — async Server Component.
 * Uses getTranslations (async) because this is a Server Component.
 */
export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <footer className="border-border bg-background border-t">
      <Container>
        <div className="flex h-14 items-center justify-center">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} {t('siteName')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
