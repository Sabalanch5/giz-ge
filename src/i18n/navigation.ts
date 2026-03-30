import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Locale-aware navigation helpers — use these instead of next/navigation.
 *
 * Import in:
 *   - Server Components: Link, redirect, getPathname
 *   - Client Components: Link, useRouter, usePathname
 *
 * Never import from 'next/navigation' directly — those lack locale awareness.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
