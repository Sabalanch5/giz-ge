import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { LocaleHtmlLang } from '@/components/providers/LocaleHtmlLang';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

// ─── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: {
      default: t('defaultTitle'),
      template: `%s | ${t('defaultTitle')}`,
    },
    description: t('defaultDescription'),
    metadataBase: new URL(siteConfig.url),
  };
}

// ─── Layout ───────────────────────────────────────────────────────────────────
/**
 * Locale layout — owns NextIntlClientProvider and page chrome.
 *
 * This layout re-renders on every locale segment change (/ka ↔ /en), so
 * getMessages() always loads the correct locale's translations. This is the
 * only place NextIntlClientProvider should live — putting it in the root layout
 * would cache the first locale's messages for the entire session.
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* Keeps <html lang> correct after client-side locale navigation */}
      <LocaleHtmlLang />
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
