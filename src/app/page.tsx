import { redirect } from 'next/navigation';

/**
 * Root page — immediately redirects to the default locale.
 *
 * The next-intl middleware handles this redirect for most paths, but
 * Next.js can bypass middleware for the root `/` in some edge cases.
 * This page is a reliable fallback that ensures `/` never 404s.
 */
export default function RootPage() {
  redirect('/ka');
}
