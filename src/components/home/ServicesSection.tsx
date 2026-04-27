import Link from "next/link";
import { ArrowRight, Zap, Settings, Package, Wrench } from "lucide-react";

const services = [
  {
    Icon: Zap,
    title: "CRT Evaluations",
    description:
      "A certified ATP evaluates your functional needs, seating requirements, and environment. We coordinate directly with your physician and therapist.",
    features: ["In-home or clinic evaluation", "Clinician collaboration", "Documentation support"],
    href: "/how-it-works",
    iconBg: "#DBEAFE",
    iconColor: "#0A2463",
    accentColor: "#0A2463",
  },
  {
    Icon: Settings,
    title: "Custom Wheelchair & Seating",
    description:
      "Every power or manual wheelchair we provide is configured to your exact measurements, functional needs, and long-term goals — not chosen off a shelf.",
    features: ["Frame geometry matched to you", "Seating system selection", "Trial period available"],
    href: "/products?category=power-wheelchairs",
    iconBg: "#E0F2FE",
    iconColor: "#0284C7",
    accentColor: "#0284C7",
  },
  {
    Icon: Package,
    title: "Powerchair Setup & Programming",
    description:
      "Drive control programming is as important as the chair itself. We configure sensitivity, speed profiles, and alternative drive methods during in-person setup.",
    features: ["Drive control configuration", "Alternative access setup", "Follow-up adjustments"],
    href: "/products?category=power-wheelchairs",
    iconBg: "#DCFCE7",
    iconColor: "#16A34A",
    accentColor: "#16A34A",
  },
  {
    Icon: Wrench,
    title: "Repairs & Maintenance",
    description:
      "Keep your equipment performing reliably. We service and repair the equipment we provide, with preventive maintenance schedules and loaner options.",
    features: ["In-home service available", "Manufacturer warranty support", "Preventive maintenance"],
    href: "/consultation?type=repair",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    accentColor: "#D97706",
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Clinical services, not just sales
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every service we offer is designed to ensure the equipment actually works for your
            life — not just on paper.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: s.iconBg }}>
                  <s.Icon size={26} style={{ color: s.iconColor }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[15px]">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.accentColor }} />
                        <span className="text-slate-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="inline-flex items-center gap-1.5 font-bold text-[15px]" style={{ color: s.accentColor }}>
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
