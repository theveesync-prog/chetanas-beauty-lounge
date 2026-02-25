export interface DiscountCode {
  code: string;
  type: "percentage" | "flat";
  value: number;
  minCartTotal?: number;
  description: string;
}

export const discountCodes: DiscountCode[] = [
  {
    code: "WELCOME10",
    type: "percentage",
    value: 10,
    minCartTotal: 500,
    description: "10% off on orders above ₹500",
  },
  {
    code: "BRIDAL500",
    type: "flat",
    value: 500,
    minCartTotal: 5000,
    description: "₹500 off on orders above ₹5,000",
  },
  {
    code: "SKIN200",
    type: "flat",
    value: 200,
    minCartTotal: 1000,
    description: "₹200 off on orders above ₹1,000",
  },
];

export function validateDiscountCode(
  code: string,
  cartTotal: number
): DiscountCode | null {
  const found = discountCodes.find(
    (d) => d.code.toUpperCase() === code.trim().toUpperCase()
  );
  if (!found) return null;
  if (found.minCartTotal && cartTotal < found.minCartTotal) return null;
  return found;
}

export function calculateDiscount(
  discount: DiscountCode,
  cartTotal: number
): number {
  if (discount.type === "percentage") {
    return Math.round(cartTotal * (discount.value / 100));
  }
  return Math.min(discount.value, cartTotal);
}
