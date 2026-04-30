"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

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

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -6 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] } },
  exit:    { opacity: 0, scale: 0.95, y: -6, transition: { duration: 0.1, ease: "easeIn" } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" } },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown]     = useState<string | null>(null);
  const [scrolled, setScrolled]     = useState(false);
  const { itemCount, openCart } = useCart();

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
            Certified Complex Rehab Technology (CRT) Provider &middot; Serving the U.S.
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
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" onClick={close} className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo.png"
                alt="Blue Bay Mobility"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
              <div className="hidden sm:block leading-tight">
                <span className="block text-lg font-bold text-[#0A2463] tracking-tight">Blue Bay</span>
                <span className="block text-sm font-semibold text-slate-500 tracking-wide">Mobility</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

              {/* Products */}
              <div className="relative"
                onMouseEnter={() => setDropdown("products")}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link href="/products" onClick={close} className={cn(
                  "flex items-center gap-1 px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-colors",
                  dropdown === "products"
                    ? "bg-blue-50 text-[#0A2463]"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}>
                  Products
                  <motion.span
                    animate={{ rotate: dropdown === "products" ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="inline-flex"
                  >
                    <ChevronDown size={15} />
                  </motion.span>
                </Link>
                <AnimatePresence>
                  {dropdown === "products" && (
                    <motion.div
                      key="products-menu"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ transformOrigin: "top left" }}
                      className="absolute top-full left-0 w-72 pt-1 z-50"
                    >
                      <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-2">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Who We Help */}
              <div className="relative"
                onMouseEnter={() => setDropdown("who")}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link href="/who-we-help" onClick={close} className={cn(
                  "flex items-center gap-1 px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-colors",
                  dropdown === "who"
                    ? "bg-blue-50 text-[#0A2463]"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}>
                  Who We Help
                  <motion.span
                    animate={{ rotate: dropdown === "who" ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="inline-flex"
                  >
                    <ChevronDown size={15} />
                  </motion.span>
                </Link>
                <AnimatePresence>
                  {dropdown === "who" && (
                    <motion.div
                      key="who-menu"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ transformOrigin: "top left" }}
                      className="absolute top-full left-0 w-64 pt-1 z-50"
                    >
                      <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-2">
                        {whoLinks.map(item => (
                          <Link key={item.href} href={item.href} onClick={close}
                            className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
                            <span className="font-semibold text-slate-800 text-[15px]">{item.label}</span>
                            <span className="text-sm text-slate-500">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              <Link href="/products" className="btn btn-primary text-sm px-5 py-2.5" style={{minHeight:"44px", fontSize:"15px"}}>
                Find My Equipment
              </Link>
              <Link href="/consultation" className="btn btn-outline text-sm px-5 py-2.5" style={{minHeight: "44px", fontSize:"15px"}}>
                Book Consultation
              </Link>
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-lg hover:bg-slate-100 text-slate-700 transition-[background] duration-150 active:scale-95"
                aria-label={`Cart${itemCount > 0 ? ` (${itemCount} items)` : ""}`}
              >
                <ShoppingCart size={22} />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      key="badge"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", duration: 0.3, bounce: 0.4 }}
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0A2463] text-white text-[10px] font-bold flex items-center justify-center"
                    >
                      {itemCount > 9 ? "9+" : itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Mobile cart + toggle */}
            <div className="lg:hidden flex items-center gap-1">
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-lg hover:bg-slate-100 text-slate-700 transition-[background] duration-150 active:scale-95"
                aria-label="Open cart"
              >
                <ShoppingCart size={22} />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      key="badge-mobile"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", duration: 0.3, bounce: 0.4 }}
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0A2463] text-white text-[10px] font-bold flex items-center justify-center"
                    >
                      {itemCount > 9 ? "9+" : itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <button
                className="p-2.5 rounded-lg hover:bg-slate-100 text-slate-700 active:scale-95 transition-[background,transform] duration-150"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen
                    ? <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="inline-flex"><X size={22} /></motion.span>
                    : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} className="inline-flex"><Menu size={22} /></motion.span>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden border-t border-slate-200 bg-white overflow-y-auto max-h-[80vh]"
            >
              <div className="container py-4 flex flex-col gap-1">
                <a href="tel:+18889990072"
                  className="flex items-center gap-2 px-3 py-3 text-[#0A2463] font-bold text-lg mb-2 border-b border-slate-100 pb-4">
                  <Phone size={18} /> 1-888-999-0072
                </a>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 pb-1">Products</p>
                {productLinks.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link href={item.href} onClick={close}
                      className="flex items-center justify-between px-3 py-3 text-slate-800 font-semibold rounded-lg hover:bg-slate-50 text-lg">
                      {item.label}
                      {item.badge && <span className="text-xs font-bold text-[#0A2463] bg-blue-100 px-2 py-0.5 rounded-full">{item.badge}</span>}
                    </Link>
                  </motion.div>
                ))}
                <div className="h-px bg-slate-200 my-2" />
                <Link href="/how-it-works" onClick={close} className="px-3 py-3 text-slate-800 font-semibold rounded-lg hover:bg-slate-50 text-lg">How It Works</Link>
                <Link href="/tracking"     onClick={close} className="px-3 py-3 text-slate-800 font-semibold rounded-lg hover:bg-slate-50 text-lg">Track My Order</Link>
                <div className="h-px bg-slate-200 my-2" />
                <Link href="/products"    onClick={close} className="btn btn-outline w-full justify-center text-lg py-4">Find My Equipment</Link>
                <Link href="/consultation" onClick={close} className="btn btn-primary w-full justify-center text-lg py-4">Book Consultation</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
