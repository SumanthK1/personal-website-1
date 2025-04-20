import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the correct path for assets based on whether the app is running locally or on GitHub Pages
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're in development mode
  const isDev = import.meta.env.DEV;
  
  // In development, use root-relative paths. In production, use the base path
  return isDev ? `/${cleanPath}` : `/personal-website-1/${cleanPath}`;
}
