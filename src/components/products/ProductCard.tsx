import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
      {/* Image area */}
      <div className="h-44 bg-gradient-to-br from-[#eef4ff] to-[#dbeafe] flex items-center justify-center relative">
        <span className="text-6xl">
          {product.category === "power-wheelchairs" ? "⚡" :
           product.category === "manual-wheelchairs" ? "🦽" :
           product.category === "seating-positioning" ? "🪑" :
           product.category === "power-scooters" ? "🛵" :
           product.category === "walkers-rollators" ? "🚶" : "📦"}
        </span>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badges.slice(0, 2).map((badge) => (
            <span
              key={badge}
              className={cn(
                "text-xs font-semibold px-2.5 py-1 rounded-full",
                badge === "CRT Required"
                  ? "bg-[#0b2d6b] text-white"
                  : badge === "Insurance Eligible"
                  ? "bg-[#d1fae5] text-[#065f46]"
                  : badge === "Ready to Ship"
                  ? "bg-[#fef3c7] text-[#92400e]"
                  : "bg-white text-[#0f172a]"
              )}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider mb-1">
          {product.categoryLabel} · {product.brand}
        </div>
        <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#0b2d6b] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#475569] text-sm leading-relaxed flex-1 mb-4">{product.tagline}</p>

        {/* Good for */}
        {product.goodFor.length > 0 && (
          <div className="mb-4">
            <div className="text-xs font-semibold text-[#10b981] uppercase tracking-wider mb-1.5">
              Good for
            </div>
            <div className="text-sm text-[#475569]">{product.goodFor[0]}</div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-[#0f172a] text-base">{product.priceRange}</div>
          {product.requiresConsultation && (
            <span className="text-xs text-[#475569] bg-[#f1f5f9] px-2 py-1 rounded">
              Consultation required
            </span>
          )}
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#0b2d6b] text-white text-sm font-semibold rounded-lg hover:bg-[#0e3a87] transition-colors"
          >
            View Details <ArrowRight size={15} />
          </Link>
          <Link
            href={`/consultation?product=${product.slug}`}
            className="px-3 py-2.5 border-2 border-[#0b2d6b] text-[#0b2d6b] rounded-lg hover:bg-[#eef4ff] transition-colors"
            title="Request consultation"
          >
            <MessageSquare size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
