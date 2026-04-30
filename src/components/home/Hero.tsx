"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

const trust = [
  { Icon: ShieldCheck, text: "CRT Certified Provider" },
  { Icon: Award,       text: "22+ Years Experience"   },
  { Icon: Clock,       text: "48hr Quote Turnaround"  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.23, 1, 0.32, 1] },
});

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container py-[72px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.h1
              {...fadeUp(0)}
              className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.08] mb-6"
            >
              The right mobility equipment,{" "}
              <span className="text-[#0A2463]">matched to you.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.1)} className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              Getting the right equipment takes more than browsing a catalogue. We work
              alongside your clinical team, configure everything around your body and lifestyle,
              and take care of insurance from start to finish.
            </motion.p>

            <motion.div {...fadeUp(0.18)} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/products" className="btn btn-primary btn-lg">
                Find My Equipment <ArrowRight size={20} />
              </Link>
              <Link href="/consultation" className="btn btn-outline btn-lg">
                Book Consultation
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-6">
              {trust.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-600">
                  <Icon size={18} className="text-[#0A2463] shrink-0" />
                  <span className="text-[15px] font-semibold">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image + stat pills */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=85&fit=crop"
                  alt="Healthcare specialist with patient"
                  width={700}
                  height={480}
                  className="w-full object-cover"
                  priority
                />
              </div>

              {/* Stat pill — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-200 px-6 py-4"
              >
                <div className="text-3xl font-bold text-[#0A2463]">5,000+</div>
                <div className="text-sm font-semibold text-slate-500">Clients served</div>
              </motion.div>

              {/* Stat pill — top right */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-200 px-6 py-4"
              >
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm font-semibold text-slate-500">Insurance verified</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
