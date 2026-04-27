"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section bg-[#f8faff]">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-3">
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Trusted by patients, families, and clinicians
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Real feedback from the people we serve — patients, caregivers, and referring
            therapists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
                ))}
              </div>

              <blockquote className="text-[#0f172a] text-base leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t border-[#e2e8f0] pt-4">
                <div className="font-semibold text-[#0f172a] text-base">{t.author}</div>
                <div className="text-sm text-[#475569]">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TrustPilot / Google note */}
        <div className="text-center mt-8">
          <p className="text-[#94a3b8] text-sm">
            Part of the Medics Mobility Inc. family — serving clients since 2002.
          </p>
        </div>
      </div>
    </section>
  );
}
