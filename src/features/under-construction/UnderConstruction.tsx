import { getTranslations } from 'next-intl/server';

/**
 * Under-construction landing page content.
 * Server Component — no client state needed here.
 */
export async function UnderConstruction({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'underConstruction' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-20">
      <div className="max-w-md space-y-8 text-center">
        {/* Wordmark label */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {tc('siteName')}
        </p>

        {/* Main heading */}
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          {t('heading')}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3" aria-hidden="true">
          <div className="h-px w-10 bg-primary opacity-40" />
          <div className="size-1.5 rounded-full bg-primary" />
          <div className="h-px w-10 bg-primary opacity-40" />
        </div>

        {/* Supporting text */}
        <div className="space-y-2">
          <p className="text-base text-foreground-muted">{t('subheading')}</p>
          <p className="text-sm text-foreground-muted opacity-70">{t('description')}</p>
        </div>
      </div>
    </main>
  );
}
