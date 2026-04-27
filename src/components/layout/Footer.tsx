import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const productLinks = [
  { label: "Power Wheelchairs", href: "/products?category=power-wheelchairs" },
  { label: "Manual Wheelchairs", href: "/products?category=manual-wheelchairs" },
  { label: "Seating & Positioning", href: "/products?category=seating-positioning" },
  { label: "Power Scooters", href: "/products?category=power-scooters" },
  { label: "Walkers & Rollators", href: "/products?category=walkers-rollators" },
  { label: "Transfer Aids", href: "/products?category=transfer-aids" },
];

const servicesLinks = [
  { label: "CRT Evaluations", href: "/how-it-works" },
  { label: "Custom Wheelchair & Seating", href: "/products?category=seating-positioning" },
  { label: "Powerchair Setup & Programming", href: "/products?category=power-wheelchairs" },
  { label: "Repairs & Maintenance", href: "/consultation?type=repair" },
  { label: "Insurance Support", href: "/how-it-works#insurance" },
];

const companyLinks = [
  { label: "About Blue Bay", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Track My Order", href: "/tracking" },
  { label: "Book Consultation", href: "/consultation" },
  { label: "Find My Equipment Quiz", href: "/quiz" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1660] text-white">
      {/* CTA strip */}
      <div className="bg-[#0b2d6b] border-b border-white/10">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Not sure where to start?</h2>
            <p className="text-[#93c5fd] mt-1 text-lg">
              Take our 2-minute quiz or speak directly with a specialist.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/quiz"
              className="px-6 py-3 bg-white text-[#0b2d6b] font-semibold rounded-lg hover:bg-[#eef4ff] transition-colors text-center"
            >
              Take the Quiz
            </Link>
            <Link
              href="/consultation"
              className="px-6 py-3 bg-[#0ea5e9] text-white font-semibold rounded-lg hover:bg-[#0284c7] transition-colors text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BB</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">Blue Bay Mobility</div>
                <div className="text-xs text-[#93c5fd] font-medium tracking-wide uppercase">
                  Complex Rehab Technology Provider
                </div>
              </div>
            </div>
            <p className="text-[#93c5fd] text-base leading-relaxed mb-6 max-w-sm">
              Certified CRT provider with 22+ years of experience. We match you to the right
              equipment, collaborate with your clinical team, and handle insurance — so you can focus
              on living.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+18889990072"
                className="flex items-center gap-3 text-[#93c5fd] hover:text-white transition-colors"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>Toll-Free: 1-888-999-0072</span>
              </a>
              <a
                href="mailto:info@bluebaymobility.com"
                className="flex items-center gap-3 text-[#93c5fd] hover:text-white transition-colors"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span>info@bluebaymobility.com</span>
              </a>
              <div className="flex items-start gap-3 text-[#93c5fd]">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>3002 Dow Ave Unit 312, Tustin, CA 92780</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {[
                { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", href: "#", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { label: "LinkedIn", href: "#", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white mb-4 text-base">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#93c5fd] hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-base">Services</h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#93c5fd] hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4 text-base">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#93c5fd] hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#93c5fd]">
          <p>© {new Date().getFullYear()} Blue Bay Mobility Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/returns" className="hover:text-white transition-colors">Return & Refund Policy</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-white/10 px-2 py-1 rounded">Medics Mobility Inc. Family</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
