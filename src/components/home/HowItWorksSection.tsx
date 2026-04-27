import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Your Request",
    description: "Take our 2-minute quiz or fill out a consultation form. Tell us about your needs, environment, and insurance.",
    href: "/quiz",
    cta: "Start the quiz",
  },
  {
    number: "02",
    title: "Talk to a Specialist",
    description: "A certified ATP reviews your submission and contacts you within 1 business day for a clinical conversation.",
    href: null,
    cta: null,
  },
  {
    number: "03",
    title: "Clinical Evaluation",
    description: "We collaborate with your OT, PT, or physician to assess seating, positioning, and functional goals.",
    href: null,
    cta: null,
  },
  {
    number: "04",
    title: "Insurance & Custom Build",
    description: "We submit all documentation to your insurer and manage the approval process. Equipment is then built to spec.",
    href: null,
    cta: null,
  },
  {
    number: "05",
    title: "Delivery & Fitting",
    description: "We deliver in-home, set up everything, and ensure you're confident operating your equipment before we leave.",
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
            How it works — start to finish
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We handle the complexity so you don&apos;t have to. From your first question to
            in-home delivery, every step has a dedicated specialist behind it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Step circle */}
              <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 shrink-0"
                style={{ background: "linear-gradient(135deg, #0A2463, #1E3A8A)", boxShadow: "0 4px 16px rgba(10,36,99,0.3)" }}>
                <span className="text-[10px] font-bold text-blue-300 uppercase leading-none">Step</span>
                <span className="text-xl font-bold text-white leading-none">{step.number}</span>
              </div>

              {/* Connector (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block w-full h-px bg-slate-300 mt-8 mb-4 relative" style={{marginTop:"-40px", marginBottom:"40px", marginLeft:"32px"}} />
              )}

              <h3 className="text-[17px] font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">{step.description}</p>
              {step.cta && step.href && (
                <Link href={step.href} className="inline-flex items-center gap-1 text-[#0A2463] font-bold text-[14px] hover:gap-2 transition-all">
                  {step.cta} <ArrowRight size={14} />
                </Link>
              )}
            </div>
          ))}
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
