"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, MessageSquare } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/data";

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addItem } = useCart();
  const canAddToCart = !product.requiresConsultation && !!product.price;

  const [selections, setSelections] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [added, setAdded] = useState(false);

  const addOnTotal = (product.options ?? []).reduce((sum, opt) => {
    if (opt.type === "checkbox" && checked[opt.id] && opt.priceAdd) {
      return sum + opt.priceAdd;
    }
    if (opt.type === "select") {
      const chosen = opt.choices?.find((c) => c.value === selections[opt.id]);
      if (chosen?.priceAdd) return sum + chosen.priceAdd;
    }
    return sum;
  }, 0);

  const totalPrice = (product.price ?? 0) + addOnTotal;

  // Build a readable list of all selected options for cart display
  function buildAddOns() {
    const list: { label: string; priceAdd: number }[] = [];
    for (const opt of product.options ?? []) {
      if (opt.type === "select" && selections[opt.id]) {
        const choice = opt.choices?.find((c) => c.value === selections[opt.id]);
        if (choice) {
          list.push({ label: `${opt.label}: ${choice.label}`, priceAdd: choice.priceAdd ?? 0 });
        }
      }
      if (opt.type === "checkbox" && checked[opt.id]) {
        list.push({ label: opt.label, priceAdd: opt.priceAdd ?? 0 });
      }
    }
    return list;
  }

  // Unique key: same product with different options = separate cart entries
  const cartKey = `${product.slug}__${Object.entries(selections).sort().map(([k, v]) => `${k}:${v}`).join(",")}__${Object.keys(checked).filter((k) => checked[k]).sort().join(",")}`;

  function handleAddToCart() {
    addItem({
      cartKey,
      slug: product.slug,
      name: product.name,
      brand: product.brand,
      price: totalPrice,
      priceLabel: `$${totalPrice.toLocaleString()}`,
      image: product.image,
      categoryLabel: product.categoryLabel,
      addOns: buildAddOns(),
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-5">
      {/* Price */}
      <div>
        <div className="text-3xl font-bold text-[#0f172a]">
          {canAddToCart
            ? `$${totalPrice.toLocaleString()}`
            : product.priceRange}
        </div>
        {addOnTotal > 0 && (
          <div className="text-sm text-slate-500 mt-0.5">
            Base ${(product.price ?? 0).toLocaleString()} + ${addOnTotal} in add-ons
          </div>
        )}
      </div>

      {/* Options */}
      {(product.options ?? []).length > 0 && (
        <div className="space-y-4 border-t border-slate-100 pt-4">
          {product.options!.map((opt) => (
            <div key={opt.id}>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                {opt.label}
                {opt.required && <span className="text-red-500 ml-0.5">*</span>}
              </label>

              {opt.type === "select" && (
                <select
                  value={selections[opt.id] ?? ""}
                  onChange={(e) =>
                    setSelections((prev) => ({ ...prev, [opt.id]: e.target.value }))
                  }
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2463]/30 focus:border-[#0A2463]"
                >
                  {!opt.required && (
                    <option value="">Select {opt.label.toLowerCase()}</option>
                  )}
                  {opt.choices?.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                      {c.priceAdd ? ` (+$${c.priceAdd})` : ""}
                    </option>
                  ))}
                </select>
              )}

              {opt.type === "checkbox" && (
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={checked[opt.id] ?? false}
                    onChange={(e) =>
                      setChecked((prev) => ({ ...prev, [opt.id]: e.target.checked }))
                    }
                    className="w-4 h-4 rounded border-slate-300 accent-[#0A2463]"
                  />
                  <span className="text-sm text-slate-700">
                    Add {opt.label}
                    {opt.priceAdd ? (
                      <span className="text-slate-500 ml-1">(+${opt.priceAdd})</span>
                    ) : null}
                  </span>
                </label>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CTAs */}
      <div className="space-y-3 pt-1">
        {canAddToCart ? (
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 py-3.5 text-white font-bold rounded-xl transition-all text-[15px]"
            style={{ background: added ? "#16a34a" : "#0A2463" }}
          >
            <ShoppingCart size={19} />
            {added ? "Added to Cart!" : "Add to Cart"}
          </button>
        ) : (
          <Link
            href={`/consultation?product=${product.slug}`}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0A2463] text-white font-bold rounded-xl hover:bg-[#1E3A8A] transition-colors text-[15px]"
          >
            <MessageSquare size={19} />
            Book Consultation
          </Link>
        )}

        <Link
          href={`/consultation?product=${product.slug}`}
          className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-[#0A2463] text-[#0A2463] font-bold rounded-xl hover:bg-blue-50 transition-colors text-[15px]"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
