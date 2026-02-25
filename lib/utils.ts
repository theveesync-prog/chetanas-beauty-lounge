import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Convert a price string like "₹1,200" or "₹50/nail" to a number. */
export function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[₹,]/g, "").replace(/\/.*$/, "").trim();
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}
