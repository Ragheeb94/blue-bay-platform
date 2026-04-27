"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Submit Your Request",
    description:
      "Take our 2-minute quiz or fill out a consultation form. Tell us about your needs, environment, and insurance — we take it from there.",
    action: "Start the quiz",
    href: "/quiz",
  },
  {
    number: "02",
    title: "Talk to a Specialist",
    description:
      "A certified ATP (Assistive Technology Professional) reviews your submission and contacts you to discuss options and schedule an evaluation.",
    action: null,
    href: null,
  },
  {
    number: "03",
    title: "Clinical Evaluation",
    description:
      "We collaborate with your OT, PT, or physician. The evaluation captures seating, positioning, and functional needs — the complete clinical picture.",
    action: null,
    href: null,
  },
  {
    number: "04",
    title: "Insurance & Custom Build",
    description:
      "We submit all documentation to your insurance and manage the approval process. Once approved, equipment is built to your exact specifications.",
    action: null,
    href: null,
  },
  {
    number: "05",
    title: "Delivery & In-Person Fitting",
    description:
      "We deliver to your home or facility, set everything up, and make sure you're comfortable and confident operating your equipment before we leave.",
    action: "See full process",
    href: "/how-it-works",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section bg-[#f8faff]">
      <div className="container">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-3">
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            How it works — start to finish
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            We handle the complexity so you don&apos;t have to. From your first question to
            in-home delivery, every step has a dedicated specialist behind it.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-[#e2e8f0] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex flex-col items-start lg:items-center text-left lg:text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#0b2d6b] flex flex-col items-center justify-center mb-5 shadow-lg flex-shrink-0">
                  <span className="text-xs font-bold text-[#93c5fd] leading-none">Step</span>
                  <span className="text-2xl font-bold text-white leading-none">{step.number}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{step.title}</h3>
                <p className="text-[#475569] text-base leading-relaxed mb-3">
                  {step.description}
                </p>

                {step.action && step.href && (
                  <Link
                    href={step.href}
                    className="inline-flex items-center gap-1.5 text-[#0b2d6b] font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    {step.action} <ArrowRight size={15} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0b2d6b] text-white font-semibold rounded-xl text-lg hover:bg-[#0e3a87] transition-all shadow-md"
          >
            See the full process <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
