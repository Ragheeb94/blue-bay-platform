"use client";

import { motion } from "framer-motion";
import { trustStats } from "@/lib/data";
import { Shield, Users, Clock, CheckCircle } from "lucide-react";

const icons = [Shield, Users, CheckCircle, Clock];

const trustPoints = [
  {
    title: "22+ Years of Clinical Experience",
    description:
      "Built on established Canadian operations (Medics Mobility Inc., Ontario) with proven processes and a deep clinical network.",
  },
  {
    title: "Clinician Collaboration",
    description:
      "We coordinate directly with OTs, PTs, and referral partners to ensure every recommendation is clinically appropriate.",
  },
  {
    title: "Full Insurance Support",
    description:
      "Medicare, Medicaid, and private insurance documentation is handled by our team — you don't need to navigate it alone.",
  },
  {
    title: "Nationwide Service",
    description:
      "We serve clients across the U.S. with in-home evaluations and online ordering — and we're expanding rapidly.",
  },
];

export default function TrustBar() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-5xl font-bold text-[#0b2d6b] mb-2">{stat.value}</div>
              <div className="text-[#475569] font-medium text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Why Blue Bay */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-4">
              Why Blue Bay
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Professional standards you can rely on
            </h2>
            <p className="text-xl text-[#475569] leading-relaxed mb-6">
              We approach every case with the same clinical rigor we bring to complex rehab —
              because we believe everyone deserves equipment that genuinely improves their life.
            </p>
            <div className="bg-[#eef4ff] border border-[#d9e7ff] rounded-xl p-5">
              <div className="text-sm font-semibold text-[#0b2d6b] mb-1">
                CRT Certified Provider
              </div>
              <div className="text-[#475569] text-base">
                Complex Rehab Technology is a specialized field requiring certified professionals.
                Our ATPs are credentialed and regularly trained on the latest equipment.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {trustPoints.map((point, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#eef4ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-[#0b2d6b]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-lg mb-1">{point.title}</h3>
                    <p className="text-[#475569] text-base leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
