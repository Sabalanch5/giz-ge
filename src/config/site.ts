/**
 * Site-wide constants.
 * Keep localized strings in messages/*.json — only non-localized values belong here.
 */
export const siteConfig = {
  name: 'GAP',
  title: 'GAP.GE',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gap.ge',
} as const;
