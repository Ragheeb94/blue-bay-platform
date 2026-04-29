"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
}

const badgeStyle: Record<string, string> = {
  "CRT Required":        "background:#0A2463;color:#fff",
  "Insurance Eligible":  "background:#DCFCE7;color:#15803D",
  "Ready to Ship":       "background:#FEF3C7;color:#B45309",
  "Ultralight":          "background:#F0F9FF;color:#0284C7",
  "Custom Fit":          "background:#F0F9FF;color:#0284C7",
  "Travel-Friendly":     "background:#F0F9FF;color:#0284C7",
  "Lightweight":         "background:#F0F9FF;color:#0284C7",
  "Pressure Relief":     "background:#F5F3FF;color:#7C3AED",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem({
      slug: product.slug,
      name: product.name,
      brand: product.brand,
      price: product.price!,
      priceLabel: product.priceRange,
      image: product.image,
      categoryLabel: product.categoryLabel,
    });
  }

  const canAddToCart = !product.requiresConsultation && !!product.price;

  return (
    <div className="card flex flex-col group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badges.slice(0, 2).map((badge) => (
            <span
              key={badge}
              className="text-xs font-bold px-2.5 py-1 rounded-full shadow-sm"
              style={Object.fromEntries(
                (badgeStyle[badge] ?? "background:#F1F5F9;color:#334155").split(";").map(s => s.split(":"))
              )}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
          {product.categoryLabel} · {product.brand}
        </div>
        <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-[#0A2463] transition-colors leading-tight line-clamp-2" style={{ minHeight: "2.65rem" }}>
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2" style={{ minHeight: "2.75rem" }}>{product.tagline}</p>

        <div className="mb-3" style={{ minHeight: "2.75rem" }}>
          {product.goodFor.length > 0 && (
            <>
              <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Good for</div>
              <div className="text-sm text-slate-600 line-clamp-1">{product.goodFor[0]}</div>
            </>
          )}
        </div>

        <div className="font-bold text-slate-900 text-[15px] mb-4 mt-auto pt-1" style={{ minHeight: "1.5rem" }}>
          {!product.requiresConsultation && product.priceRange}
        </div>

        {/* CTAs — stacked full-width for consistent sizing */}
        <div className="flex flex-col gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-bold text-white rounded-lg transition-colors"
            style={{ background: "#0A2463" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1E3A8A")}
            onMouseLeave={e => (e.currentTarget.style.background = "#0A2463")}
          >
            View Details <ArrowRight size={14} />
          </Link>

          {canAddToCart ? (
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-bold rounded-lg border-2 transition-colors text-[#0A2463] hover:bg-blue-50"
              style={{ borderColor: "#0A2463" }}
            >
              Add to Cart
              <ShoppingCart size={15} />
            </button>
          ) : (
            <Link
              href={`/consultation?product=${product.slug}`}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-bold rounded-lg border-2 transition-colors text-[#0A2463] hover:bg-blue-50"
              style={{ borderColor: "#0A2463" }}
            >
              Contact for Quote
              <MessageSquare size={15} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
