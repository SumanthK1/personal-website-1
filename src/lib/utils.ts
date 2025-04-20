import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the correct path for assets based on whether the app is running locally, on GitHub Pages, or on a custom domain
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're in development mode
  const isDev = import.meta.env.DEV;
  
  // Check if we're on a custom domain (not github.io)
  const isCustomDomain = typeof window !== 'undefined' && 
    window.location.hostname !== 'sumanthk1.github.io';
  
  // In development or on custom domain, use root-relative paths.
  // On GitHub Pages (non-custom domain), use the base path.
  return (isDev || isCustomDomain) ? `/${cleanPath}` : `/personal-website-1/${cleanPath}`;
}
