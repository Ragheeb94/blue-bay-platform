import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products, type ProductCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our full range of complex rehab technology, power wheelchairs, manual wheelchairs, seating systems, and mobility aids.",
};

const categories: { id: ProductCategory | "all"; label: string; description: string }[] = [
  { id: "all", label: "All Products", description: "View all categories" },
  { id: "power-wheelchairs", label: "Power Wheelchairs", description: "Complex rehab & power mobility" },
  { id: "manual-wheelchairs", label: "Manual Wheelchairs", description: "Ultralight & custom frames" },
  { id: "seating-positioning", label: "Seating & Positioning", description: "Pressure relief & support" },
  { id: "power-scooters", label: "Power Scooters", description: "Community & travel scooters" },
  { id: "walkers-rollators", label: "Walkers & Rollators", description: "Walking aids & rollators" },
  { id: "transfer-aids", label: "Transfer Aids", description: "Safe transfer equipment" },
  { id: "accessories", label: "Accessories", description: "Cushions, bags, and more" },
];

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const activeCategory = params.category ?? "all";

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Page header */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="container py-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-2">
                  Product Catalog
                </div>
                <h1 className="text-4xl font-bold text-[#0f172a] mb-2">
                  {activeCategoryData?.label ?? "All Products"}
                </h1>
                <p className="text-xl text-[#475569]">
                  {activeCategory === "all"
                    ? "Browse our complete range of mobility and rehab equipment."
                    : activeCategoryData?.description}
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#eef4ff] text-[#0b2d6b] font-semibold rounded-xl text-base border-2 border-[#0b2d6b] hover:bg-[#d9e7ff] transition-colors"
                >
                  <SlidersHorizontal size={18} />
                  Not sure? Talk to a Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar — category filters */}
            <aside className="lg:w-60 flex-shrink-0">
              <div className="card p-4">
                <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-3 px-2">
                  Categories
                </div>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.id === "all" ? "/products" : `/products?category=${cat.id}`}
                      className={`flex flex-col px-3 py-2.5 rounded-lg transition-colors text-left ${
                        activeCategory === cat.id
                          ? "bg-[#eef4ff] text-[#0b2d6b]"
                          : "text-[#475569] hover:bg-[#f8faff] hover:text-[#0f172a]"
                      }`}
                    >
                      <span className="font-semibold text-base">{cat.label}</span>
                      {activeCategory === cat.id && cat.id !== "all" && (
                        <span className="text-xs text-[#0ea5e9] mt-0.5">{cat.description}</span>
                      )}
                    </Link>
                  ))}
                </nav>

                {/* CRT notice */}
                <div className="mt-5 p-4 bg-[#fffbeb] border border-[#fde68a] rounded-xl">
                  <div className="text-sm font-bold text-[#92400e] mb-1">CRT Equipment</div>
                  <div className="text-xs text-[#78350f] leading-relaxed">
                    Items marked "CRT Required" need a clinical evaluation before ordering.{" "}
                    <Link href="/how-it-works" className="underline">
                      Learn why
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {/* Results count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-[#475569] text-base">
                  <span className="font-semibold text-[#0f172a]">{filtered.length}</span> products
                  {activeCategory !== "all" && ` in ${activeCategoryData?.label}`}
                </p>
              </div>

              {filtered.length === 0 ? (
                <div className="card p-12 text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">No products yet</h3>
                  <p className="text-[#475569] mb-6">
                    We&apos;re adding products to this category. In the meantime, our specialists
                    can help you find what you need.
                  </p>
                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b2d6b] text-white font-semibold rounded-xl hover:bg-[#0e3a87] transition-colors"
                  >
                    Talk to a Specialist <ArrowRight size={18} />
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              )}

              {/* Bottom CTA */}
              <div className="mt-12 card p-8 text-center">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                  Don&apos;t see what you&apos;re looking for?
                </h3>
                <p className="text-[#475569] text-lg mb-6">
                  We work with all major manufacturers and can source nearly any mobility or rehab
                  product. Talk to a specialist.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0b2d6b] text-white font-semibold rounded-xl hover:bg-[#0e3a87] transition-colors"
                  >
                    Book Consultation <ArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:+18889990072"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#0b2d6b] text-[#0b2d6b] font-semibold rounded-xl hover:bg-[#eef4ff] transition-colors"
                  >
                    Call 1-888-999-0072
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
