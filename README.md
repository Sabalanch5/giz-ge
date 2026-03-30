# GIZ.GE Website

Bilingual Georgian and English website for GIZ, built with Next.js App Router.

## Stack

- Next.js 15
- React 19
- TypeScript in strict mode
- Tailwind CSS v4
- next-intl for locale-prefixed routing
- next-themes for light and dark mode

## Getting Started

```bash
npm install
npm run dev
```

Optional local environment setup:

```bash
copy .env.example .env.local
```

Open `http://localhost:3000`. The app redirects to `/ka`.

## Structure

```text
messages/
  ka.json
  en.json
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    [locale]/
      layout.tsx
      page.tsx
  components/
  config/
  features/
  i18n/
  lib/
scripts/
  check-i18n-consistency.mjs
.github/workflows/
  ci.yml
middleware.ts
next.config.ts
```

## Localization

- Default locale: `ka`
- Secondary locale: `en`
- Root `/` redirects to `/ka`
- Add new translation keys to both message files at the same time

Server component example:

```tsx
import { getTranslations } from 'next-intl/server';

const t = await getTranslations({ locale, namespace: 'common' });
return <h1>{t('siteTitle')}</h1>;
```

Client component example:

```tsx
import { useTranslations } from 'next-intl';

const t = useTranslations('common');
return <button>{t('language')}</button>;
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run type-check
npm test
npm run format
```

CI runs `type-check`, `lint`, `test`, and `build` on pushes to `main` and on pull requests.

## Deployment

Deploy on Vercel or any Next.js-compatible platform.

Required environment variable:

- `NEXT_PUBLIC_SITE_URL` - production site URL, for example `https://giz.ge`
