"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Personalized product recommendations",
  "Takes only 2 minutes",
  "No account required",
  "Results in seconds",
];

export default function QuizCTABanner() {
  return (
    <section className="bg-gradient-to-r from-[#0b2d6b] via-[#1a4fa0] to-[#0b2d6b] py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm font-semibold text-[#93c5fd] uppercase tracking-wider mb-4">
              Smart Product Finder
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Not sure what equipment you need?
            </h2>
            <p className="text-xl text-[#93c5fd] leading-relaxed mb-8">
              Answer 4 simple questions about your situation and we&apos;ll recommend the right
              product categories — then connect you with a specialist to confirm the fit.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#10b981] flex-shrink-0" />
                  <span className="text-[#93c5fd] text-base">{b}</span>
                </div>
              ))}
            </div>

            <Link
              href="/quiz"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0b2d6b] font-bold text-lg rounded-xl hover:bg-[#eef4ff] transition-all shadow-lg group"
            >
              Start the Quiz — It&apos;s Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Quiz preview mockup */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="text-sm text-[#93c5fd] mb-3 font-medium">Step 1 of 4</div>
              <div className="h-1.5 bg-white/20 rounded-full mb-6">
                <div className="h-full w-1/4 bg-[#0ea5e9] rounded-full" />
              </div>

              <h3 className="text-white font-bold text-xl mb-5">
                Who are you looking for equipment for?
              </h3>

              {[
                { label: "For myself", desc: "My own mobility needs" },
                { label: "For a family member", desc: "I'm a caregiver" },
                { label: "For my patient", desc: "I'm an OT / PT" },
              ].map((opt, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl mb-3 border cursor-pointer transition-all ${
                    i === 0
                      ? "border-[#0ea5e9] bg-[#0ea5e9]/20"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      i === 0 ? "border-[#0ea5e9]" : "border-white/40"
                    }`}
                  >
                    {i === 0 && <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]" />}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{opt.label}</div>
                    <div className="text-[#93c5fd] text-sm">{opt.desc}</div>
                  </div>
                </div>
              ))}

              <Link
                href="/quiz"
                className="w-full mt-4 py-3 bg-[#0ea5e9] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#0284c7] transition-colors"
              >
                Continue <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
