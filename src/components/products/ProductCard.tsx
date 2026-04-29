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

  return (
    <div className="card flex flex-col group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
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
            <span key={badge} className="text-xs font-bold px-2.5 py-1 rounded-full" style={Object.fromEntries(
              (badgeStyle[badge] ?? "background:#F1F5F9;color:#334155").split(";").map(s => s.split(":"))
            )}>
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
        <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-[#0A2463] transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{product.tagline}</p>

        {product.goodFor.length > 0 && (
          <div className="mb-4">
            <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Good for</div>
            <div className="text-sm text-slate-600">{product.goodFor[0]}</div>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-slate-900 text-[15px]">{product.priceRange}</div>
          {product.requiresConsultation && (
            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-lg font-medium">
              Consult required
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <Link href={`/products/${product.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm font-bold text-white rounded-lg transition-colors"
            style={{ background: "#0A2463" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1E3A8A")}
            onMouseLeave={e => (e.currentTarget.style.background = "#0A2463")}
          >
            View Details <ArrowRight size={14} />
          </Link>
          {!product.requiresConsultation && product.price ? (
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center px-3 py-2.5 border-2 rounded-lg transition-colors text-[#0A2463] hover:bg-blue-50"
              style={{ borderColor: "#0A2463" }}
              title="Add to cart"
            >
              <ShoppingCart size={16} />
            </button>
          ) : (
            <Link href={`/consultation?product=${product.slug}`}
              className="flex items-center justify-center px-3 py-2.5 border-2 rounded-lg transition-colors text-[#0A2463] hover:bg-blue-50"
              style={{ borderColor: "#0A2463" }}
              title="Request consultation"
            >
              <MessageSquare size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
