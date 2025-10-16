import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// clsx is a small library that helps you conditionally join class names together.
// twMerge helps you resolve Tailwind CSS class conflicts automatically.