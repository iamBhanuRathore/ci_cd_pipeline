import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// comment
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
