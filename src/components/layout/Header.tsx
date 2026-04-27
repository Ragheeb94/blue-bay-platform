"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const productCategories = [
  { label: "Power Wheelchairs", href: "/products?category=power-wheelchairs", badge: "CRT" },
  { label: "Manual Wheelchairs", href: "/products?category=manual-wheelchairs", badge: "CRT" },
  { label: "Seating & Positioning", href: "/products?category=seating-positioning", badge: null },
  { label: "Power Scooters", href: "/products?category=power-scooters", badge: null },
  { label: "Walkers & Rollators", href: "/products?category=walkers-rollators", badge: null },
  { label: "Transfer Aids", href: "/products?category=transfer-aids", badge: null },
  { label: "Accessories", href: "/products?category=accessories", badge: null },
];

const whoWeHelp = [
  { label: "Patients & Users", href: "/who-we-help#patients", desc: "Find your right equipment" },
  { label: "Caregivers & Families", href: "/who-we-help#caregivers", desc: "Support your loved one" },
  { label: "OTs & Clinicians", href: "/who-we-help#clinicians", desc: "Refer & collaborate" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0b2d6b] text-white text-sm py-2 hidden md:block">
        <div className="container flex items-center justify-between">
          <span className="text-[#93c5fd]">
            Certified Complex Rehab Technology Provider — Serving patients across the U.S.
          </span>
          <a
            href="tel:+18889990072"
            className="flex items-center gap-2 hover:text-[#93c5fd] transition-colors font-medium"
          >
            <Phone size={14} />
            1-888-999-0072
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-white border-b border-[#e2e8f0] transition-shadow duration-200",
          scrolled && "shadow-md"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" onClick={closeAll} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#0b2d6b] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg leading-none">BB</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-[#0b2d6b] text-lg leading-tight">Blue Bay</div>
                <div className="text-xs text-[#475569] font-medium leading-tight tracking-wide uppercase">
                  Mobility
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {/* Products dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[#0f172a] font-medium rounded-lg hover:bg-[#eef4ff] hover:text-[#0b2d6b] transition-colors text-base"
                  onMouseEnter={() => setActiveDropdown("products")}
                  onMouseLeave={() => setActiveDropdown(null)}
                  aria-expanded={activeDropdown === "products"}
                  aria-haspopup="true"
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === "products" && "rotate-180"
                    )}
                  />
                </button>

                {activeDropdown === "products" && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-white border border-[#e2e8f0] rounded-xl shadow-xl p-2 z-50"
                    onMouseEnter={() => setActiveDropdown("products")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-3 py-2 mb-1">
                      <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">
                        Product Categories
                      </span>
                    </div>
                    {productCategories.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeAll}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#eef4ff] text-[#0f172a] hover:text-[#0b2d6b] transition-colors text-base"
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="text-xs font-semibold text-[#0b2d6b] bg-[#d9e7ff] px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                    <div className="border-t border-[#e2e8f0] mt-2 pt-2">
                      <Link
                        href="/products"
                        onClick={closeAll}
                        className="flex items-center px-3 py-2.5 rounded-lg hover:bg-[#eef4ff] text-[#0b2d6b] font-semibold transition-colors text-base"
                      >
                        View all products →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Who We Help dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[#0f172a] font-medium rounded-lg hover:bg-[#eef4ff] hover:text-[#0b2d6b] transition-colors text-base"
                  onMouseEnter={() => setActiveDropdown("who")}
                  onMouseLeave={() => setActiveDropdown(null)}
                  aria-expanded={activeDropdown === "who"}
                >
                  Who We Help
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === "who" && "rotate-180"
                    )}
                  />
                </button>

                {activeDropdown === "who" && (
                  <div
                    className="absolute top-full left-0 mt-1 w-68 bg-white border border-[#e2e8f0] rounded-xl shadow-xl p-2 z-50"
                    onMouseEnter={() => setActiveDropdown("who")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {whoWeHelp.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeAll}
                        className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[#eef4ff] transition-colors"
                      >
                        <span className="font-medium text-[#0f172a] text-base">{item.label}</span>
                        <span className="text-sm text-[#475569]">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/how-it-works"
                className="px-4 py-2 text-[#0f172a] font-medium rounded-lg hover:bg-[#eef4ff] hover:text-[#0b2d6b] transition-colors text-base"
              >
                How It Works
              </Link>
              <Link
                href="/tracking"
                className="px-4 py-2 text-[#0f172a] font-medium rounded-lg hover:bg-[#eef4ff] hover:text-[#0b2d6b] transition-colors text-base"
              >
                Track Order
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/quiz"
                className="px-5 py-2.5 text-[#0b2d6b] border-2 border-[#0b2d6b] rounded-lg font-semibold hover:bg-[#eef4ff] transition-colors text-base"
              >
                Find My Equipment
              </Link>
              <Link
                href="/consultation"
                className="px-5 py-2.5 bg-[#0b2d6b] text-white rounded-lg font-semibold hover:bg-[#0e3a87] transition-colors text-base shadow-sm"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#eef4ff] text-[#0f172a]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#e2e8f0] bg-white overflow-y-auto max-h-[80vh]">
            <div className="container py-4 flex flex-col gap-1">
              <div className="pb-3 mb-2 border-b border-[#e2e8f0]">
                <a
                  href="tel:+18889990072"
                  className="flex items-center gap-2 px-3 py-3 text-[#0b2d6b] font-semibold text-lg"
                >
                  <Phone size={18} />
                  1-888-999-0072
                </a>
              </div>

              <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider px-3 pb-1">
                Products
              </div>
              {productCategories.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  className="px-3 py-3 text-[#0f172a] font-medium rounded-lg hover:bg-[#eef4ff] text-lg"
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 text-xs font-semibold text-[#0b2d6b] bg-[#d9e7ff] px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}

              <div className="h-px bg-[#e2e8f0] my-2" />
              <Link href="/how-it-works" onClick={closeAll} className="px-3 py-3 text-[#0f172a] font-medium rounded-lg hover:bg-[#eef4ff] text-lg">
                How It Works
              </Link>
              <Link href="/tracking" onClick={closeAll} className="px-3 py-3 text-[#0f172a] font-medium rounded-lg hover:bg-[#eef4ff] text-lg">
                Track My Order
              </Link>

              <div className="h-px bg-[#e2e8f0] my-2" />
              <Link
                href="/quiz"
                onClick={closeAll}
                className="mx-3 px-6 py-4 text-center bg-[#eef4ff] text-[#0b2d6b] font-semibold rounded-xl text-lg border-2 border-[#0b2d6b]"
              >
                Find My Equipment →
              </Link>
              <Link
                href="/consultation"
                onClick={closeAll}
                className="mx-3 px-6 py-4 text-center bg-[#0b2d6b] text-white font-semibold rounded-xl text-lg"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
