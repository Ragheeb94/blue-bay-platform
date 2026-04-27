"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const productLinks = [
  { label: "Power Wheelchairs",   href: "/products?category=power-wheelchairs",  badge: "CRT" },
  { label: "Manual Wheelchairs",  href: "/products?category=manual-wheelchairs", badge: "CRT" },
  { label: "Seating & Positioning", href: "/products?category=seating-positioning", badge: null },
  { label: "Power Scooters",      href: "/products?category=power-scooters",     badge: null },
  { label: "Walkers & Rollators", href: "/products?category=walkers-rollators",  badge: null },
  { label: "Transfer Aids",       href: "/products?category=transfer-aids",      badge: null },
];

const whoLinks = [
  { label: "Patients & Users",      desc: "Find your right equipment",    href: "/who-we-help#patients" },
  { label: "Caregivers & Families", desc: "Support your loved one",       href: "/who-we-help#caregivers" },
  { label: "OTs & Clinicians",      desc: "Refer a patient & collaborate", href: "/who-we-help#clinicians" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [dropdown, setDropdown]           = useState<string | null>(null);
  const [scrolled, setScrolled]           = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => { setMobileOpen(false); setDropdown(null); };

  return (
    <>
      {/* Top strip */}
      <div className="bg-[#071A4A] text-white py-2 hidden md:block">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-blue-200">
            Certified Complex Rehab Technology (CRT) Provider — Serving the U.S.
          </p>
          <a href="tel:+18889990072" className="flex items-center gap-1.5 text-sm font-semibold text-blue-100 hover:text-white transition-colors">
            <Phone size={13} />
            1-888-999-0072
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className={cn(
        "sticky top-0 z-50 bg-white border-b border-slate-200 transition-shadow duration-200",
        scrolled && "shadow-md"
      )}>
        <div className="container">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <Link href="/" onClick={close} className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Blue Bay Mobility"
                width={110}
                height={110}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

              {/* Products */}
              <div className="relative"
                onMouseEnter={() => setDropdown("products")}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className={cn(
                  "flex items-center gap-1 px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-colors",
                  dropdown === "products"
                    ? "bg-blue-50 text-[#0A2463]"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}>
                  Products
                  <ChevronDown size={15} className={cn("transition-transform", dropdown === "products" && "rotate-180")} />
                </button>
                {dropdown === "products" && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-2">Categories</p>
                    {productLinks.map(item => (
                      <Link key={item.href} href={item.href} onClick={close}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-blue-50 text-slate-800 hover:text-[#0A2463] transition-colors text-[15px] font-medium">
                        {item.label}
                        {item.badge && (
                          <span className="text-xs font-bold text-[#0A2463] bg-blue-100 px-2 py-0.5 rounded-full">{item.badge}</span>
                        )}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <Link href="/products" onClick={close}
                        className="flex items-center px-3 py-2.5 rounded-lg hover:bg-blue-50 text-[#0A2463] font-bold text-[15px] transition-colors">
                        View all products →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Who We Help */}
              <div className="relative"
                onMouseEnter={() => setDropdown("who")}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className={cn(
                  "flex items-center gap-1 px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-colors",
                  dropdown === "who"
                    ? "bg-blue-50 text-[#0A2463]"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}>
                  Who We Help
                  <ChevronDown size={15} className={cn("transition-transform", dropdown === "who" && "rotate-180")} />
                </button>
                {dropdown === "who" && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50">
                    {whoLinks.map(item => (
                      <Link key={item.href} href={item.href} onClick={close}
                        className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="font-semibold text-slate-800 text-[15px]">{item.label}</span>
                        <span className="text-sm text-slate-500">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/how-it-works"
                className="px-4 py-2.5 rounded-lg text-[15px] font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                How It Works
              </Link>
              <Link href="/tracking"
                className="px-4 py-2.5 rounded-lg text-[15px] font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                Track Order
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/quiz" className="btn btn-outline text-sm px-5 py-2.5" style={{minHeight: "44px", fontSize:"15px"}}>
                Find My Equipment
              </Link>
              <Link href="/consultation" className="btn btn-primary text-sm px-5 py-2.5" style={{minHeight:"44px", fontSize:"15px"}}>
                Book Consultation
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2.5 rounded-lg hover:bg-slate-100 text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white overflow-y-auto max-h-[80vh]">
            <div className="container py-4 flex flex-col gap-1">
              <a href="tel:+18889990072"
                className="flex items-center gap-2 px-3 py-3 text-[#0A2463] font-bold text-lg mb-2 border-b border-slate-100 pb-4">
                <Phone size={18} /> 1-888-999-0072
              </a>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 pb-1">Products</p>
              {productLinks.map(item => (
                <Link key={item.href} href={item.href} onClick={close}
                  className="flex items-center justify-between px-3 py-3 text-slate-800 font-semibold rounded-lg hover:bg-slate-50 text-lg">
                  {item.label}
                  {item.badge && <span className="text-xs font-bold text-[#0A2463] bg-blue-100 px-2 py-0.5 rounded-full">{item.badge}</span>}
                </Link>
              ))}
              <div className="h-px bg-slate-200 my-2" />
              <Link href="/how-it-works" onClick={close} className="px-3 py-3 text-slate-800 font-semibold rounded-lg hover:bg-slate-50 text-lg">How It Works</Link>
              <Link href="/tracking"     onClick={close} className="px-3 py-3 text-slate-800 font-semibold rounded-lg hover:bg-slate-50 text-lg">Track My Order</Link>
              <div className="h-px bg-slate-200 my-2" />
              <Link href="/quiz"         onClick={close} className="btn btn-outline w-full justify-center text-lg py-4">Find My Equipment</Link>
              <Link href="/consultation" onClick={close} className="btn btn-primary w-full justify-center text-lg py-4">Book Consultation</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
