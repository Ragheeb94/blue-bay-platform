import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, X, Phone, Calendar, AlertTriangle, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/lib/data";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const emoji =
    product.category === "power-wheelchairs" ? "⚡" :
    product.category === "manual-wheelchairs" ? "🦽" :
    product.category === "seating-positioning" ? "🪑" :
    product.category === "power-scooters" ? "🛵" :
    product.category === "walkers-rollators" ? "🚶" : "📦";

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#f8faff]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-[#475569]">
              <Link href="/products" className="flex items-center gap-1 hover:text-[#0b2d6b] transition-colors">
                <ArrowLeft size={16} /> Products
              </Link>
              <span>/</span>
              <Link
                href={`/products?category=${product.category}`}
                className="hover:text-[#0b2d6b] transition-colors"
              >
                {product.categoryLabel}
              </Link>
              <span>/</span>
              <span className="text-[#0f172a] font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Product hero */}
              <div className="card p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Image */}
                  <div className="h-64 bg-gradient-to-br from-[#eef4ff] to-[#dbeafe] rounded-xl flex items-center justify-center">
                    <span className="text-8xl">{emoji}</span>
                  </div>

                  {/* Basic info */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.badges.map((badge) => (
                        <span
                          key={badge}
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            badge === "CRT Required"
                              ? "bg-[#0b2d6b] text-white"
                              : badge === "Insurance Eligible"
                              ? "bg-[#d1fae5] text-[#065f46]"
                              : badge === "Ready to Ship"
                              ? "bg-[#fef3c7] text-[#92400e]"
                              : "bg-[#f1f5f9] text-[#0f172a]"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm font-semibold text-[#0ea5e9] mb-1">
                      {product.brand} · {product.categoryLabel}
                    </div>
                    <h1 className="text-3xl font-bold text-[#0f172a] mb-3">{product.name}</h1>
                    <p className="text-[#475569] text-lg leading-relaxed mb-5">{product.tagline}</p>

                    <div className="text-2xl font-bold text-[#0f172a] mb-5">
                      {product.priceRange}
                    </div>

                    <div className="space-y-3">
                      <Link
                        href={`/consultation?product=${product.slug}`}
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0b2d6b] text-white font-semibold rounded-xl hover:bg-[#0e3a87] transition-colors text-lg"
                      >
                        <Calendar size={20} /> Request a Quote
                      </Link>
                      <a
                        href="tel:+18889990072"
                        className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-[#0b2d6b] text-[#0b2d6b] font-semibold rounded-xl hover:bg-[#eef4ff] transition-colors text-lg"
                      >
                        <Phone size={20} /> Talk to a Specialist
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="card p-7">
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">About this product</h2>
                <p className="text-[#475569] text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Good for / Not ideal */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#d1fae5] flex items-center justify-center">
                      <Check size={18} className="text-[#10b981]" />
                    </div>
                    <h3 className="font-bold text-[#0f172a] text-lg">Good for you if…</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {product.goodFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={17} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                        <span className="text-[#475569] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#fee2e2] flex items-center justify-center">
                      <X size={18} className="text-[#ef4444]" />
                    </div>
                    <h3 className="font-bold text-[#0f172a] text-lg">May not be ideal if…</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {product.notIdealFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <X size={17} className="text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span className="text-[#475569] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specs table */}
              <div className="card p-7">
                <h2 className="text-2xl font-bold text-[#0f172a] mb-5">Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {product.specs.map((spec, i) => (
                        <tr
                          key={spec.label}
                          className={i % 2 === 0 ? "bg-[#f8faff]" : "bg-white"}
                        >
                          <td className="py-3.5 px-4 font-semibold text-[#0f172a] text-base w-44 rounded-l-lg">
                            {spec.label}
                          </td>
                          <td className="py-3.5 px-4 text-[#475569] text-base rounded-r-lg">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

              {/* CRT note */}
              {product.crtRequired && (
                <div className="card p-7 border-[#0b2d6b] border-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#eef4ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Info size={22} className="text-[#0b2d6b]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0b2d6b] text-lg mb-2">
                        This product requires a clinical evaluation
                      </h3>
                      <p className="text-[#475569] text-base leading-relaxed mb-4">
                        Complex Rehab Technology (CRT) equipment like this must be evaluated and
                        prescribed by a certified ATP in collaboration with your physician or
                        therapist. This isn&apos;t a hurdle — it&apos;s what ensures the equipment
                        is safe, properly configured, and covered by insurance.
                      </p>
                      <Link
                        href="/how-it-works"
                        className="text-[#0b2d6b] font-semibold hover:underline"
                      >
                        Learn about the evaluation process →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky sidebar */}
            <div className="space-y-5">
              {/* Quick quote CTA */}
              <div className="card p-6 sticky top-24">
                <h3 className="font-bold text-[#0f172a] text-xl mb-2">
                  Interested in the {product.name}?
                </h3>
                <p className="text-[#475569] text-base mb-5">
                  {product.requiresConsultation
                    ? "This product requires a clinical evaluation. Our certified ATP will guide you through the process."
                    : "Get a personalized quote or speak with a specialist to confirm this is right for you."}
                </p>

                <div className="space-y-3 mb-5">
                  <Link
                    href={`/consultation?product=${product.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0b2d6b] text-white font-semibold rounded-xl hover:bg-[#0e3a87] transition-colors"
                  >
                    <Calendar size={18} /> Request Quote / Evaluation
                  </Link>
                  <a
                    href="tel:+18889990072"
                    className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-[#0b2d6b] text-[#0b2d6b] font-semibold rounded-xl hover:bg-[#eef4ff] transition-colors"
                  >
                    <Phone size={18} /> 1-888-999-0072
                  </a>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#475569]">
                  <Check size={16} className="text-[#10b981]" />
                  <span>We handle insurance paperwork</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#475569] mt-2">
                  <Check size={16} className="text-[#10b981]" />
                  <span>48hr quote turnaround</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#475569] mt-2">
                  <Check size={16} className="text-[#10b981]" />
                  <span>No obligation</span>
                </div>
              </div>

              {/* Insurance coverage */}
              {product.badges.includes("Insurance Eligible") && (
                <div className="card p-5">
                  <div className="text-sm font-bold text-[#10b981] mb-2">
                    Insurance Coverage
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    This product may be covered by Medicare, Medicaid, or private insurance with
                    appropriate clinical documentation. We verify your coverage as part of the
                    evaluation process — at no cost to you.
                  </p>
                  <Link
                    href="/how-it-works#insurance"
                    className="text-[#0b2d6b] text-sm font-semibold mt-3 block hover:underline"
                  >
                    How insurance works →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                Also in {product.categoryLabel}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/products/${rp.slug}`}
                    className="card p-5 flex items-start gap-4 hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 bg-[#eef4ff] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                      {emoji}
                    </div>
                    <div>
                      <div className="font-bold text-[#0f172a] text-base">{rp.name}</div>
                      <div className="text-sm text-[#475569]">{rp.tagline}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
