import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Phone,
  Stethoscope,
  FileCheck,
  Wrench,
  Truck,
  CheckCircle,
  Shield,
  HelpCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn about our end-to-end complex rehab process — from your first contact through clinical evaluation, insurance approval, and in-home delivery.",
};

const steps = [
  {
    Icon: ClipboardList,
    number: "01",
    title: "Submit your request",
    duration: "5 minutes",
    description:
      "Browse our product catalogue or fill out a consultation form. Tell us who you are, what you need, and your insurance information. The more you share, the faster we can prepare.",
    details: [
      "Browse products by category for quick recommendations",
      "Detailed consultation form for complex situations",
      "Clinician referral pathway for OTs and PTs",
      "Direct phone line if you prefer to call",
    ],
    color: "#0b2d6b",
    bg: "#eef4ff",
  },
  {
    Icon: Phone,
    number: "02",
    title: "Talk to your specialist",
    duration: "Within 1 business day",
    description:
      "A certified ATP (Assistive Technology Professional) reviews your submission and contacts you. This isn't a sales call — it's a clinical conversation about your real situation, goals, and environment.",
    details: [
      "ATP credentialed and manufacturer-certified",
      "Discusses your goals and daily environment",
      "Answers all questions about options",
      "Explains the insurance verification process",
    ],
    color: "#0ea5e9",
    bg: "#f0f9ff",
  },
  {
    Icon: Stethoscope,
    number: "03",
    title: "Clinical evaluation",
    duration: "1–2 hours",
    description:
      "For Complex Rehab Technology, a certified evaluation is required — and it's the most important step. We collaborate with your OT, PT, or physician to assess your complete clinical picture: seating, positioning, transfers, environment, and functional goals.",
    details: [
      "In-home or clinic evaluation available",
      "Collaboration with your existing therapy team",
      "Physician's Letter of Medical Necessity prepared",
      "Trial of equipment options where possible",
    ],
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    Icon: FileCheck,
    number: "04",
    title: "Insurance verification & approval",
    duration: "2–6 weeks (varies by insurer)",
    description:
      "We handle all insurance documentation — no forms for you to chase. We submit the Letter of Medical Necessity, clinical evaluation, and product justification directly to your insurer. We follow up and communicate every update.",
    details: [
      "Medicare, Medicaid, and private insurance",
      "We manage prior authorization requests",
      "You're informed at every milestone",
      "Denial appeals supported if needed",
    ],
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    Icon: Wrench,
    number: "05",
    title: "Custom build & quality check",
    duration: "2–4 weeks after approval",
    description:
      "Once approved, your equipment is ordered and configured to your exact clinical specifications. For power wheelchairs, this includes drive control programming. We inspect everything before it reaches you.",
    details: [
      "Manufacturer builds to your exact measurements",
      "Drive control and seating pre-configured",
      "Full quality inspection before delivery",
      "Accessories and mounts installed",
    ],
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    Icon: Truck,
    number: "06",
    title: "Delivery, fitting & training",
    duration: "In-home appointment",
    description:
      "We deliver to your home or care facility and stay until everything is perfect. This includes fine-tuning the seating position, confirming safe operation, and making sure you and your caregivers are fully trained.",
    details: [
      "In-home or facility delivery",
      "On-site adjustment and fine-tuning",
      "Full training for user and caregivers",
      "30-day follow-up included",
    ],
    color: "#0b2d6b",
    bg: "#eef4ff",
  },
];

const faqs = [
  {
    q: "How long does the whole process take?",
    a: "The timeline varies by insurance and equipment complexity. A typical CRT case takes 8–12 weeks from evaluation to delivery. Non-CRT products like rollators or travel scooters can often ship within a few days.",
  },
  {
    q: "Is the clinical evaluation free?",
    a: "The evaluation cost is typically covered by insurance as part of the overall equipment authorization. We confirm this upfront — you won't have surprise charges.",
  },
  {
    q: "What if my insurance denies the claim?",
    a: "We have experience supporting insurance appeals with additional clinical documentation. We'll let you know your options and handle the process on your behalf.",
  },
  {
    q: "Do I need a prescription or referral before contacting you?",
    a: "No. You can contact us directly. We'll help you understand what documentation your physician will need to provide as part of the evaluation process.",
  },
  {
    q: "Can you work with my existing OT or PT?",
    a: "Absolutely — and we prefer it. Collaboration with your existing therapy team leads to better outcomes. We reach out to your therapist to coordinate the evaluation.",
  },
  {
    q: "What if I need repairs after delivery?",
    a: "We provide ongoing repair and maintenance services for all equipment we provide. Your specialist can be reached directly for service scheduling.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0b2d6b] to-[#1a4fa0] text-white">
          <div className="container py-[72px]">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-[#93c5fd] uppercase tracking-wider mb-4">
                The Process
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                How it works — every step explained
              </h1>
              <p className="text-2xl text-[#93c5fd] leading-relaxed mb-8">
                Complex rehab equipment is not a simple purchase. It&apos;s a clinical process —
                and we guide you through every step, handle insurance, and stay with you through
                delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0b2d6b] font-bold text-lg rounded-xl hover:bg-[#eef4ff] transition-colors"
                >
                  Start My Consultation <ArrowRight size={20} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[#f8faff] section">
          <div className="container">
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.number} className="card p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Step header */}
                    <div className="md:col-span-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: step.bg }}
                        >
                          <step.Icon size={26} style={{ color: step.color }} />
                        </div>
                        <div>
                          <div
                            className="text-xs font-bold uppercase tracking-wider mb-0.5"
                            style={{ color: step.color }}
                          >
                            Step {step.number}
                          </div>
                          <div className="text-sm text-[#94a3b8] font-medium">{step.duration}</div>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-[#0f172a]">{step.title}</h2>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-1">
                      <p className="text-[#475569] text-lg leading-relaxed">{step.description}</p>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-1">
                      <ul className="space-y-2.5">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2.5">
                            <CheckCircle
                              size={18}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: step.color }}
                            />
                            <span className="text-[#475569] text-base">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insurance section */}
        <div className="section bg-white" id="insurance">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-4">
                  Insurance
                </div>
                <h2 className="text-4xl font-bold text-[#0f172a] mb-5">
                  We handle the insurance so you don&apos;t have to
                </h2>
                <p className="text-xl text-[#475569] leading-relaxed mb-6">
                  Insurance for complex rehab equipment is complex — and that&apos;s our job to
                  navigate, not yours. We verify your benefits, prepare all documentation, submit
                  claims, and follow up on your behalf.
                </p>
                <div className="space-y-3">
                  {[
                    "Medicare Part B — most CRT equipment is covered",
                    "Medicaid — varies by state, we verify upfront",
                    "Private insurance — we contact your plan directly",
                    "Appeals supported if a claim is initially denied",
                    "Out-of-pocket estimates provided before any commitment",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Shield size={18} className="text-[#10b981] flex-shrink-0" />
                      <span className="text-[#475569] text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-8">
                <h3 className="font-bold text-[#0f172a] text-xl mb-6">
                  Insurance we work with
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Medicare Part B",
                    "Medicaid",
                    "Medicare Advantage",
                    "Blue Cross Blue Shield",
                    "Aetna",
                    "UnitedHealthcare",
                    "Cigna",
                    "Humana",
                  ].map((ins) => (
                    <div
                      key={ins}
                      className="flex items-center gap-2 bg-[#f8faff] px-3 py-2.5 rounded-lg"
                    >
                      <CheckCircle size={16} className="text-[#10b981]" />
                      <span className="text-[#0f172a] text-sm font-medium">{ins}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-sm text-[#475569]">
                  Don&apos;t see yours? We work with most major insurers.{" "}
                  <Link href="/consultation" className="text-[#0b2d6b] font-semibold hover:underline">
                    Contact us
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="section bg-[#f8faff]">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-3">
                FAQ
              </div>
              <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Common questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card p-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle size={22} className="text-[#0b2d6b] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#0f172a] text-lg mb-2">{faq.q}</h3>
                      <p className="text-[#475569] text-base leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0b2d6b] section">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-xl text-[#93c5fd] mb-8 max-w-xl mx-auto">
              Browse our products or book a consultation directly with one of our
              certified specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0b2d6b] font-bold text-lg rounded-xl hover:bg-[#eef4ff] transition-colors"
              >
                Find My Equipment <ArrowRight size={20} />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
