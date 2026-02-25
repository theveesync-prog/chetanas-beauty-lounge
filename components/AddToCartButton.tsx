"use client";

import { ShoppingBag, Check } from "lucide-react";
import { useCart, type CartItem } from "@/lib/cart-context";

interface Props {
  item: CartItem;
  variant?: "primary" | "outline";
  className?: string;
}

export default function AddToCartButton({
  item,
  variant = "primary",
  className = "",
}: Props) {
  const { addItem, removeItem, isInCart } = useCart();
  const inCart = isInCart(item.serviceSlug);

  const handleClick = () => {
    if (inCart) removeItem(item.serviceSlug);
    else addItem(item);
  };

  if (variant === "outline") {
    return (
      <button
        onClick={handleClick}
        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors ${
          inCart
            ? "border-[#e8b80d]/30 bg-[#e8b80d]/10 text-[#8a6c00]"
            : "border-[#5f1e42]/25 text-[#5f1e42] hover:bg-[#5f1e42]/5"
        } ${className}`}
      >
        {inCart ? <Check size={16} /> : <ShoppingBag size={16} />}
        {inCart ? "In Cart" : "Add to Cart"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
        inCart
          ? "bg-[#e8b80d]/15 text-[#8a6c00] border border-[#e8b80d]/30"
          : "text-white bg-[#5f1e42] hover:bg-[#4a1733]"
      } ${className}`}
    >
      {inCart ? <Check size={16} /> : <ShoppingBag size={16} />}
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
}
