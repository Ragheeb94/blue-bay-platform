import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Your Request",
    description: "Browse our products or fill out a consultation form. Tell us about your needs, where you live, and your insurance situation.",
    href: "/products",
    cta: "Browse products",
  },
  {
    number: "02",
    title: "Talk to a Specialist",
    description: "A certified ATP reviews your submission and reaches out within 1 business day for a real conversation about your goals and environment.",
    href: null,
    cta: null,
  },
  {
    number: "03",
    title: "Clinical Evaluation",
    description: "We work alongside your OT, PT, or physician to assess seating, positioning, and functional needs before any equipment is ordered.",
    href: null,
    cta: null,
  },
  {
    number: "04",
    title: "Insurance and Custom Build",
    description: "We submit all documentation to your insurer and manage the approval process. Equipment is then built to your exact specifications.",
    href: null,
    cta: null,
  },
  {
    number: "05",
    title: "Delivery and Fitting",
    description: "We deliver to your home, set everything up, and make sure you are fully comfortable operating your equipment before we leave.",
    href: "/how-it-works",
    cta: "See full process",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="text-center mb-14">
          <p className="section-label mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How it works, from start to finish
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We handle the complexity so you don&apos;t have to. From your first question to
            in-home delivery, every step has a dedicated specialist behind it.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Single continuous connector line — sits at circle center (32px from top) */}
          <div
            className="hidden lg:block absolute h-px bg-slate-300 pointer-events-none"
            style={{ top: "32px", left: "10%", right: "10%" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">

                {/* Circle */}
                <div
                  className="w-16 h-16 rounded-full flex flex-col items-center justify-center shrink-0 relative z-10 mb-6"
                  style={{ background: "linear-gradient(135deg, #0A2463, #1E3A8A)", boxShadow: "0 4px 16px rgba(10,36,99,0.3)" }}
                >
                  <span className="text-[9px] font-bold text-blue-300 uppercase leading-none tracking-wider">Step</span>
                  <span className="text-xl font-bold text-white leading-none">{step.number}</span>
                </div>

                {/* Text */}
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed mb-3">{step.description}</p>
                {step.cta && step.href && (
                  <Link href={step.href} className="inline-flex items-center gap-1 text-[#0A2463] font-bold text-[14px] hover:gap-2 transition-all">
                    {step.cta} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Link href="/how-it-works" className="btn btn-primary btn-lg">
            See the full process <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
