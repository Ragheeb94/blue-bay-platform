"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, ArrowRight, ArrowLeft, Phone, Calendar, Wrench, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type ConsultationType = "evaluation" | "referral" | "quote" | "repair" | "";

interface FormData {
  type: ConsultationType;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zip: string;
  insurance: string;
  aboutYou: string;
  productInterest: string;
  message: string;
  preferredContact: "phone" | "email" | "";
  preferredTime: string;
}

const consultationTypes = [
  {
    id: "evaluation" as ConsultationType,
    Icon: Calendar,
    label: "CRT Evaluation",
    description: "Schedule a clinical evaluation for power wheelchair, custom seating, or complex rehab equipment",
    color: "#0b2d6b",
    bg: "#eef4ff",
  },
  {
    id: "referral" as ConsultationType,
    Icon: FileText,
    label: "Clinician Referral",
    description: "Refer a patient — I'm an OT, PT, physician, or other healthcare professional",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    id: "quote" as ConsultationType,
    Icon: Phone,
    label: "Request a Quote",
    description: "Get pricing information on a specific product or category",
    color: "#0ea5e9",
    bg: "#f0f9ff",
  },
  {
    id: "repair" as ConsultationType,
    Icon: Wrench,
    label: "Repair or Service",
    description: "Schedule a repair or maintenance for existing equipment",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
];

const insuranceOptions = [
  "Medicare", "Medicaid", "Medicare Advantage",
  "Blue Cross Blue Shield", "Aetna", "UnitedHealthcare",
  "Cigna", "Humana", "Other Private Insurance",
  "Self-pay / No insurance", "Not sure",
];

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    type: "",
    firstName: "", lastName: "", phone: "", email: "", zip: "",
    insurance: "", aboutYou: "", productInterest: "", message: "",
    preferredContact: "", preferredTime: "",
  });

  const set = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canProceed1 = form.type !== "";
  const canProceed2 = form.firstName && form.lastName && form.phone && form.email && form.zip;
  const canProceed3 = form.insurance !== "" && form.aboutYou !== "";

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main id="main-content" className="flex-1 bg-[#f8faff]">
          <div className="container py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-[#d1fae5] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-[#10b981]" />
              </div>
              <h1 className="text-4xl font-bold text-[#0f172a] mb-4">
                We&apos;ve received your request
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                A specialist will reach out within{" "}
                <strong>1 business day</strong> to{" "}
                {form.preferredContact === "phone"
                  ? `call you at ${form.phone}`
                  : `email you at ${form.email}`}
                .
              </p>

              <div className="card p-6 text-left mb-8">
                <div className="font-bold text-[#0f172a] text-lg mb-4">What happens next</div>
                {[
                  { step: "1", text: "A certified specialist reviews your request" },
                  { step: "2", text: "We contact you to discuss your needs in detail" },
                  { step: "3", text: "We schedule your evaluation or arrange a quote" },
                  { step: "4", text: "We verify your insurance coverage (at no cost)" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3 mb-3 last:mb-0">
                    <div className="w-7 h-7 rounded-full bg-[#0b2d6b] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </div>
                    <span className="text-[#475569] text-base pt-0.5">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+18889990072"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0b2d6b] text-[#0b2d6b] font-semibold rounded-xl hover:bg-[#eef4ff] transition-colors"
                >
                  <Phone size={18} /> Call us now
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b2d6b] text-white font-semibold rounded-xl hover:bg-[#0e3a87] transition-colors"
                >
                  Return home
                </a>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#f8faff]">
        {/* Header */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="container py-10">
            <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-2">
              Get Started
            </div>
            <h1 className="text-4xl font-bold text-[#0f172a] mb-2">
              Book a consultation
            </h1>
            <p className="text-xl text-[#475569]">
              Tell us about your needs and we&apos;ll connect you with the right specialist — usually
              within 1 business day.
            </p>
          </div>
        </div>

        <div className="container py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                        step > s
                          ? "bg-[#10b981] text-white"
                          : step === s
                          ? "bg-[#0b2d6b] text-white"
                          : "bg-[#e2e8f0] text-[#94a3b8]"
                      )}
                    >
                      {step > s ? <CheckCircle size={18} /> : s}
                    </div>
                    <span
                      className={cn(
                        "text-sm font-medium",
                        step >= s ? "text-[#0f172a]" : "text-[#94a3b8]"
                      )}
                    >
                      {s === 1 ? "Request type" : s === 2 ? "Contact info" : "Details"}
                    </span>
                    {s < 3 && <div className="h-px w-8 bg-[#e2e8f0]" />}
                  </div>
                ))}
              </div>

              <div className="card p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Type */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                        What can we help you with?
                      </h2>
                      <p className="text-[#475569] mb-6">Select the option that best fits your situation.</p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {consultationTypes.map((ct) => (
                          <button
                            key={ct.id}
                            onClick={() => set("type", ct.id)}
                            className={cn(
                              "p-5 rounded-xl border-2 text-left transition-all",
                              form.type === ct.id
                                ? "border-[#0b2d6b] bg-[#eef4ff]"
                                : "border-[#e2e8f0] bg-white hover:border-[#93c5fd]"
                            )}
                          >
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                              style={{ backgroundColor: ct.bg }}
                            >
                              <ct.Icon size={20} style={{ color: ct.color }} />
                            </div>
                            <div className="font-bold text-[#0f172a] text-base mb-1">
                              {ct.label}
                            </div>
                            <div className="text-sm text-[#475569] leading-relaxed">
                              {ct.description}
                            </div>
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setStep(2)}
                        disabled={!canProceed1}
                        className="flex items-center gap-2 px-8 py-3.5 bg-[#0b2d6b] text-white font-semibold rounded-xl disabled:opacity-40 hover:bg-[#0e3a87] transition-colors text-lg"
                      >
                        Continue <ArrowRight size={20} />
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Contact */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                        Your contact information
                      </h2>
                      <p className="text-[#475569] mb-6">
                        How should our specialist reach you?
                      </p>

                      <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        {([["firstName", "First name"], ["lastName", "Last name"]] as const).map(([field, label]) => (
                          <div key={field}>
                            <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                              {label} *
                            </label>
                            <input
                              type="text"
                              value={form[field]}
                              onChange={(e) => set(field, e.target.value)}
                              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0b2d6b] transition-colors text-base"
                              placeholder={label}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                            Phone number *
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0b2d6b] transition-colors text-base"
                            placeholder="(555) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                            Email address *
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0b2d6b] transition-colors text-base"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div className="mb-5">
                        <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                          ZIP code *
                        </label>
                        <input
                          type="text"
                          value={form.zip}
                          onChange={(e) => set("zip", e.target.value)}
                          className="w-full sm:w-40 px-4 py-3 border-2 border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0b2d6b] transition-colors text-base"
                          placeholder="92780"
                        />
                      </div>

                      <div className="mb-8">
                        <label className="block text-sm font-semibold text-[#0f172a] mb-3">
                          Preferred way to be contacted *
                        </label>
                        <div className="flex gap-4">
                          {(["phone", "email"] as const).map((opt) => (
                            <button
                              key={opt}
                              onClick={() => set("preferredContact", opt)}
                              className={cn(
                                "px-5 py-2.5 rounded-xl border-2 font-medium text-base capitalize transition-all",
                                form.preferredContact === opt
                                  ? "border-[#0b2d6b] bg-[#eef4ff] text-[#0b2d6b]"
                                  : "border-[#e2e8f0] text-[#475569] hover:border-[#93c5fd]"
                              )}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => setStep(1)}
                          className="flex items-center gap-2 px-5 py-3.5 text-[#475569] border-2 border-[#e2e8f0] font-semibold rounded-xl hover:bg-[#f8faff] transition-colors text-base"
                        >
                          <ArrowLeft size={18} /> Back
                        </button>
                        <button
                          onClick={() => setStep(3)}
                          disabled={!canProceed2}
                          className="flex items-center gap-2 px-8 py-3.5 bg-[#0b2d6b] text-white font-semibold rounded-xl disabled:opacity-40 hover:bg-[#0e3a87] transition-colors text-lg"
                        >
                          Continue <ArrowRight size={20} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Details */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                        A little more about your situation
                      </h2>
                      <p className="text-[#475569] mb-6">
                        This helps us assign the right specialist and prepare for your call.
                      </p>

                      <div className="mb-5">
                        <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                          Insurance coverage *
                        </label>
                        <select
                          value={form.insurance}
                          onChange={(e) => set("insurance", e.target.value)}
                          className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl text-[#0f172a] focus:outline-none focus:border-[#0b2d6b] transition-colors text-base bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select your insurance…</option>
                          {insuranceOptions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-5">
                        <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                          Tell us about your situation *
                        </label>
                        <textarea
                          rows={4}
                          value={form.aboutYou}
                          onChange={(e) => set("aboutYou", e.target.value)}
                          className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0b2d6b] transition-colors text-base resize-none"
                          placeholder="e.g., I have ALS and currently use a manual wheelchair but need something powered. I live at home with my spouse..."
                        />
                      </div>

                      <div className="mb-8">
                        <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                          Any specific products or questions? (optional)
                        </label>
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0b2d6b] transition-colors text-base resize-none"
                          placeholder="e.g., I was looking at the Permobil M3..."
                        />
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => setStep(2)}
                          className="flex items-center gap-2 px-5 py-3.5 text-[#475569] border-2 border-[#e2e8f0] font-semibold rounded-xl hover:bg-[#f8faff] transition-colors text-base"
                        >
                          <ArrowLeft size={18} /> Back
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!canProceed3 || loading}
                          className="flex items-center gap-2 px-8 py-3.5 bg-[#0b2d6b] text-white font-semibold rounded-xl disabled:opacity-40 hover:bg-[#0e3a87] transition-colors text-lg"
                        >
                          {loading ? (
                            <>
                              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Submitting…
                            </>
                          ) : (
                            <>Submit Request <ArrowRight size={20} /></>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card p-6">
                <div className="font-bold text-[#0f172a] text-lg mb-4">What to expect</div>
                {[
                  "Response within 1 business day",
                  "No obligation or pressure",
                  "We verify your insurance — free",
                  "Clinical evaluation can be in-home",
                  "All documentation handled by us",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 mb-3 last:mb-0">
                    <CheckCircle size={18} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#475569] text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="card p-6">
                <div className="font-bold text-[#0f172a] text-lg mb-3">Prefer to call?</div>
                <a
                  href="tel:+18889990072"
                  className="flex items-center gap-3 text-[#0b2d6b] font-bold text-xl hover:underline"
                >
                  <Phone size={22} />
                  1-888-999-0072
                </a>
                <div className="text-sm text-[#475569] mt-2">
                  Mon – Fri, 9am – 5pm (Pacific)
                </div>
              </div>

              <div className="card p-5 bg-[#f0fdf4] border-[#bbf7d0]">
                <div className="text-sm font-bold text-[#065f46] mb-1">Insurance supported</div>
                <div className="text-sm text-[#047857] leading-relaxed">
                  We work with Medicare, Medicaid, and most major private insurers. We verify your
                  coverage at no cost to you — before any commitment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
