import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind class strings intelligently.
 * Uses `clsx` for conditional joining and `twMerge` to deduplicate/conflict‑resolve.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
