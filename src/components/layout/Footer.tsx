import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const productLinks = [
  { label: "Power Wheelchairs",    href: "/products?category=power-wheelchairs" },
  { label: "Manual Wheelchairs",   href: "/products?category=manual-wheelchairs" },
  { label: "Seating & Positioning",href: "/products?category=seating-positioning" },
  { label: "Power Scooters",       href: "/products?category=power-scooters" },
  { label: "Walkers & Rollators",  href: "/products?category=walkers-rollators" },
  { label: "Transfer Aids",        href: "/products?category=transfer-aids" },
];

const serviceLinks = [
  { label: "CRT Evaluations",              href: "/how-it-works" },
  { label: "Custom Wheelchair & Seating",  href: "/products?category=seating-positioning" },
  { label: "Powerchair Setup",             href: "/products?category=power-wheelchairs" },
  { label: "Repairs & Maintenance",        href: "/consultation?type=repair" },
  { label: "Insurance Support",            href: "/how-it-works#insurance" },
];

const companyLinks = [
  { label: "About Blue Bay",          href: "/about" },
  { label: "How It Works",            href: "/how-it-works" },
  { label: "Who We Help",             href: "/who-we-help" },
  { label: "Track My Order",          href: "/tracking" },
  { label: "Book Consultation",       href: "/consultation" },
  { label: "Find My Equipment Quiz",  href: "/quiz" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#071A4A" }} className="text-white">

      {/* CTA strip */}
      <div style={{ background: "#0A2463", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Not sure where to start?</h2>
            <p className="text-blue-300 mt-1 text-lg">Take our 2-minute quiz or speak directly with a specialist.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/quiz"
              className="btn"
              style={{ background: "white", color: "#0A2463", borderColor: "white", padding: "12px 24px", fontWeight: 700, fontSize: "15px" }}>
              Take the Quiz
            </Link>
            <Link href="/consultation" className="btn btn-sky" style={{ padding: "12px 24px", fontSize: "15px" }}>
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Blue Bay Mobility" width={48} height={48} className="object-contain" />
              <div>
                <div className="font-bold text-white text-lg leading-tight">Blue Bay Mobility</div>
                <div className="text-xs text-blue-300 font-semibold tracking-widest uppercase">CRT Provider</div>
              </div>
            </div>
            <p className="text-blue-200 text-[15px] leading-relaxed mb-6 max-w-sm">
              Certified CRT provider with 22+ years of experience. We match you to the right
              equipment, collaborate with your clinical team, and handle insurance — so you can
              focus on living.
            </p>
            <div className="space-y-3">
              <a href="tel:+18889990072" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-[15px]">
                <Phone size={15} className="shrink-0" /> Toll-Free: 1-888-999-0072
              </a>
              <a href="mailto:info@bluebaymobility.com" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-[15px]">
                <Mail size={15} className="shrink-0" /> info@bluebaymobility.com
              </a>
              <div className="flex items-start gap-3 text-blue-200 text-[15px]">
                <MapPin size={15} className="shrink-0 mt-1" /> 3002 Dow Ave Unit 312, Tustin, CA 92780
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-300 hover:text-white transition-colors text-[15px]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-300 hover:text-white transition-colors text-[15px]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-300 hover:text-white transition-colors text-[15px]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-400">
          <p>© {new Date().getFullYear()} Blue Bay Mobility Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy"  className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms"    className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/returns"  className="hover:text-white transition-colors">Return Policy</Link>
          </div>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Medics Mobility Inc. Family</span>
        </div>
      </div>
    </footer>
  );
}
