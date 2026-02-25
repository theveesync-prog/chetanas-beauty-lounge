"use client";

import { useState, useMemo } from "react";
import { ShoppingBag, X, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { parsePrice } from "@/lib/utils";
import {
  validateDiscountCode,
  calculateDiscount,
} from "@/lib/discount-codes";

export default function CartDrawer() {
  const {
    items,
    removeItem,
    clearCart,
    itemCount,
    notes,
    setNotes,
    discountCode,
    setDiscountCode,
    hydrated,
  } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState("");

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + parsePrice(item.price), 0),
    [items]
  );

  const originalTotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + parsePrice(item.originalPrice ?? item.price),
        0
      ),
    [items]
  );

  const saleSavings = originalTotal - subtotal;

  const validatedDiscount = useMemo(
    () => (discountCode ? validateDiscountCode(discountCode, subtotal) : null),
    [discountCode, subtotal]
  );

  const discountAmount = validatedDiscount
    ? calculateDiscount(validatedDiscount, subtotal)
    : 0;
  const finalTotal = subtotal - discountAmount;

  const applyCode = () => {
    const result = validateDiscountCode(codeInput, subtotal);
    if (result) {
      setDiscountCode(codeInput.toUpperCase());
      setCodeError("");
    } else {
      setCodeError(
        codeInput.trim() ? "Invalid code or minimum not met" : "Enter a code"
      );
    }
  };

  const buildWhatsAppMessage = (): string => {
    const lines = [
      "Hi! I'd like to book the following services at Chetana's Beauty Lounge:",
      "",
      ...items.map(
        (item, i) =>
          `${i + 1}. ${item.name} (${item.categoryLabel}) — ${item.price}`
      ),
      "",
      `Subtotal: ₹${subtotal.toLocaleString("en-IN")}`,
    ];
    if (saleSavings > 0)
      lines.push(
        `Sale Savings: -₹${saleSavings.toLocaleString("en-IN")}`
      );
    if (discountAmount > 0)
      lines.push(
        `Discount (${discountCode}): -₹${discountAmount.toLocaleString("en-IN")}`
      );
    lines.push(
      `Total: ₹${finalTotal.toLocaleString("en-IN")}`
    );
    if (notes.trim()) lines.push("", `Notes: ${notes}`);
    lines.push("", "Looking forward to your confirmation!");
    return lines.join("\n");
  };

  const whatsappUrl = `https://wa.me/919845292411?text=${encodeURIComponent(
    buildWhatsAppMessage()
  )}`;

  if (!hydrated) return null;

  return (
    <>
      {/* Floating Cart Button */}
      {itemCount > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#5f1e42] text-white hover:bg-[#4a1733] transition-colors"
          aria-label={`Open cart (${itemCount} items)`}
        >
          <ShoppingBag size={22} />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#e8b80d] text-[#3a1a00] text-xs font-bold flex items-center justify-center">
            {itemCount}
          </span>
        </button>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#5f1e42]/8">
          <h2 className="font-display text-xl font-semibold text-[#1a0d0d]">
            Your Services ({itemCount})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-[#fdf8f5] rounded-full"
          >
            <X size={20} className="text-[#8c7b72]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {items.length === 0 && (
            <p className="text-center text-sm text-[#8c7b72] py-12">
              No services added yet. Browse our services and tap
              &ldquo;Add to Cart&rdquo;.
            </p>
          )}
          {items.map((item) => (
            <div
              key={item.serviceSlug}
              className="flex items-start justify-between gap-3 p-3 bg-[#fdf8f5] rounded-xl"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#1a0d0d] truncate">
                  {item.name}
                </p>
                <p className="text-xs text-[#8c7b72]">{item.categoryLabel}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-[#5f1e42]">
                    {item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xs text-[#8c7b72] line-through">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => removeItem(item.serviceSlug)}
                className="p-1.5 hover:bg-white rounded-lg flex-shrink-0"
              >
                <Trash2 size={14} className="text-[#8c7b72]" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#5f1e42]/8 px-6 py-4 space-y-4">
            {/* Discount code */}
            <div className="flex gap-2">
              <input
                type="text"
                value={codeInput}
                onChange={(e) => {
                  setCodeInput(e.target.value);
                  setCodeError("");
                }}
                placeholder="Discount code"
                className="flex-1 rounded-lg border border-[#5f1e42]/15 bg-[#fdf8f5] px-3 py-2 text-sm outline-none focus:border-[#5f1e42]/40"
              />
              <button
                onClick={applyCode}
                className="px-4 py-2 bg-[#5f1e42] text-white rounded-lg text-sm font-medium hover:bg-[#4a1733] transition-colors"
              >
                Apply
              </button>
            </div>
            {codeError && (
              <p className="text-xs text-red-500">{codeError}</p>
            )}
            {validatedDiscount && (
              <p className="text-xs text-green-700">
                Code applied: {validatedDiscount.description}
              </p>
            )}

            {/* Notes */}
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="Any allergies, special requests, or doubts..."
              className="w-full rounded-lg border border-[#5f1e42]/15 bg-[#fdf8f5] px-3 py-2 text-sm outline-none focus:border-[#5f1e42]/40 resize-none"
            />

            {/* Totals */}
            <div className="space-y-1 text-sm">
              {saleSavings > 0 && (
                <div className="flex justify-between text-[#8c7b72]">
                  <span>Sale Savings</span>
                  <span className="text-green-700">
                    -₹{saleSavings.toLocaleString("en-IN")}
                  </span>
                </div>
              )}
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#8c7b72]">
                  <span>Discount ({discountCode})</span>
                  <span className="text-green-700">
                    -₹{discountAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-[#1a0d0d] pt-1 border-t border-[#5f1e42]/8">
                <span>Total</span>
                <span className="font-display text-lg text-[#5f1e42]">
                  ₹{finalTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Book via WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-semibold shadow-md"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.199-1.435A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.683.853.879-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
              </svg>
              Book via WhatsApp
            </a>

            <button
              onClick={() => {
                clearCart();
                setCodeInput("");
                setCodeError("");
              }}
              className="w-full text-center text-xs text-[#8c7b72] hover:text-[#5f1e42] transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </>
  );
}
