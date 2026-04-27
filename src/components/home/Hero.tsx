"use client";

import Link from "next/link";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  { Icon: Shield, text: "CRT Certified Provider" },
  { Icon: Award, text: "22+ Years Experience" },
  { Icon: Clock, text: "48hr Quote Turnaround" },
];

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0b2d6b 1px, transparent 1px), linear-gradient(90deg, #0b2d6b 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#eef4ff] via-[#dbeafe] to-transparent rounded-full opacity-60 translate-x-1/3 -translate-y-1/4" />

      <div className="container relative py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#eef4ff] border border-[#d9e7ff] text-[#0b2d6b] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse" />
              Complex Rehab Technology Provider
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] leading-[1.1] mb-6">
              The right mobility
              <br />
              equipment,{" "}
              <span className="bg-gradient-to-r from-[#0b2d6b] to-[#0ea5e9] bg-clip-text text-transparent">
                matched to you.
              </span>
            </h1>

            <p className="text-xl text-[#475569] leading-relaxed mb-8 max-w-lg">
              We don&apos;t just sell equipment. We evaluate your needs, collaborate with your
              clinical team, and configure every product to your body and lifestyle — then handle
              insurance so you can focus on living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0b2d6b] text-white font-semibold rounded-xl text-lg hover:bg-[#0e3a87] transition-all shadow-lg hover:shadow-xl group"
              >
                Find My Equipment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0b2d6b] text-[#0b2d6b] font-semibold rounded-xl text-lg hover:bg-[#eef4ff] transition-all"
              >
                Talk to a Specialist
              </Link>
            </div>

            {/* Trust micro-badges */}
            <div className="flex flex-wrap items-center gap-5">
              {trustItems.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[#475569]">
                  <Icon size={18} className="text-[#0b2d6b]" />
                  <span className="text-base font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual card stack */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-[#0b2d6b] to-[#1a4fa0] rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-sm font-semibold text-[#93c5fd] uppercase tracking-wider mb-4">
                How We Work
              </div>
              {[
                { step: "01", title: "Tell us your needs", sub: "2-min quiz or call us" },
                { step: "02", title: "Expert evaluation", sub: "Clinical collaboration" },
                { step: "03", title: "Custom configuration", sub: "Built to your specs" },
                { step: "04", title: "Insurance handled", sub: "We manage the paperwork" },
                { step: "05", title: "Delivered & fitted", sub: "In-person setup" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 mb-5 last:mb-0">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-[#93c5fd]">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating stat cards */}
            <motion.div
              className="absolute -left-12 top-8 bg-white rounded-xl shadow-xl p-4 border border-[#e2e8f0]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-2xl font-bold text-[#0b2d6b]">5,000+</div>
              <div className="text-sm text-[#475569]">Clients served</div>
            </motion.div>

            <motion.div
              className="absolute -right-8 bottom-16 bg-white rounded-xl shadow-xl p-4 border border-[#e2e8f0]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-2xl font-bold text-[#10b981]">98%</div>
              <div className="text-sm text-[#475569]">Insurance verified</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
