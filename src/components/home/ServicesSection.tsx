"use client";

import Link from "next/link";
import { ArrowRight, Zap, Settings, Wrench, Package } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    Icon: Zap,
    title: "CRT Evaluations",
    description:
      "A certified ATP evaluates your functional needs, seating requirements, and environment. We coordinate directly with your physician and therapist.",
    features: ["In-home or clinic evaluation", "Clinician collaboration", "Documentation support"],
    href: "/how-it-works",
    color: "#0b2d6b",
    bg: "#eef4ff",
  },
  {
    Icon: Settings,
    title: "Custom Wheelchair & Seating",
    description:
      "Every power or manual wheelchair we provide is configured to your exact measurements, functional needs, and long-term goals — not just chosen off a shelf.",
    features: ["Frame geometry matched to you", "Seating system selection", "Trial period available"],
    href: "/products?category=power-wheelchairs",
    color: "#0ea5e9",
    bg: "#f0f9ff",
  },
  {
    Icon: Package,
    title: "Powerchair Setup & Programming",
    description:
      "Drive control programming is as important as the chair itself. We configure sensitivity, speed profiles, and alternative drive methods during in-person setup.",
    features: ["Drive control configuration", "Alternative access setup", "Follow-up adjustments"],
    href: "/products?category=power-wheelchairs",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    Icon: Wrench,
    title: "Repairs & Maintenance",
    description:
      "Keep your equipment performing reliably. We service and repair the equipment we provide, with preventive maintenance schedules and loaner options.",
    features: ["In-home service available", "Manufacturer warranty support", "Preventive maintenance"],
    href: "/consultation?type=repair",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-3">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Clinical services, not just sales
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Every service we offer is designed to ensure the equipment actually works for your
            life — not just on paper.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-8 group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: s.bg }}
                >
                  <s.Icon size={26} style={{ color: s.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">{s.title}</h3>
                  <p className="text-[#475569] text-base leading-relaxed mb-4">{s.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-base">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: s.color }}
                        />
                        <span className="text-[#475569]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 font-semibold text-base group-hover:gap-3 transition-all"
                    style={{ color: s.color }}
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
