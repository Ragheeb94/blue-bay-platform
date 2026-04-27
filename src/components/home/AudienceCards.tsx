"use client";

import Link from "next/link";
import { ArrowRight, User, Heart, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    Icon: User,
    label: "Patients & Users",
    headline: "Find equipment built for your life",
    description:
      "Whether you're newly injured or your needs have changed, we guide you through every option — and make sure your equipment is perfectly configured for your body.",
    cta: "Start my search",
    href: "/quiz",
    color: "#0b2d6b",
    bgColor: "#eef4ff",
    iconBg: "#d9e7ff",
  },
  {
    Icon: Heart,
    label: "Caregivers & Families",
    headline: "Support your loved one with confidence",
    description:
      "Navigating insurance, clinical jargon, and product options is overwhelming. We walk alongside you — in plain language — from evaluation to delivery.",
    cta: "Get guidance",
    href: "/consultation",
    color: "#0ea5e9",
    bgColor: "#f0f9ff",
    iconBg: "#bae6fd",
  },
  {
    Icon: Stethoscope,
    label: "OTs & Clinicians",
    headline: "A CRT partner you can trust",
    description:
      "We collaborate directly with your clinical team. Referrals are streamlined, documentation is handled, and your patients get outcomes-focused equipment.",
    cta: "Refer a patient",
    href: "/consultation?type=referral",
    color: "#10b981",
    bgColor: "#f0fdf4",
    iconBg: "#bbf7d0",
  },
];

export default function AudienceCards() {
  return (
    <section className="section bg-[#f8faff]">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-3">
            Who We Help
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Built for everyone in the journey
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Whether you&apos;re the patient, a caregiver, or a referring clinician — we have a
            clear path forward for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-8 flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: a.iconBg }}
              >
                <a.Icon size={26} style={{ color: a.color }} />
              </div>

              <div
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: a.color }}
              >
                {a.label}
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">{a.headline}</h3>
              <p className="text-[#475569] text-base leading-relaxed flex-1 mb-6">
                {a.description}
              </p>

              <Link
                href={a.href}
                className="inline-flex items-center gap-2 font-semibold text-base group-hover:gap-3 transition-all"
                style={{ color: a.color }}
              >
                {a.cta}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
