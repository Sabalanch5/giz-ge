import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes safely.
 * Resolves conflicts (e.g. px-2 + px-4 → px-4) and conditionally applies classes.
 *
 * Usage:
 *   cn('base-class', isActive && 'active-class', className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
