import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  User,
  Heart,
  Stethoscope,
  CheckCircle,
  Phone,
  Calendar,
  ClipboardList,
  FileCheck,
  Users,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Who We Help | Blue Bay Mobility",
  description:
    "Blue Bay Mobility serves patients, caregivers, and clinicians with complex rehab technology, custom wheelchairs, and full insurance support.",
};

export default function WhoWeHelpPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A2463] to-[#1E3A8A]">
          <div className="container py-[72px]">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Who We Help</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                We meet you wherever you are in the journey.
              </h1>
              <p className="text-xl text-blue-200 leading-relaxed mb-8">
                Whether you&apos;re the person who needs equipment, the family member supporting
                them, or the clinician coordinating care — we have a clear path forward for you.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#patients"   className="btn btn-outline-white">Patients & Users</a>
                <a href="#caregivers" className="btn btn-outline-white">Caregivers & Families</a>
                <a href="#clinicians" className="btn btn-outline-white">OTs & Clinicians</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── PATIENTS ────────────────────────────────── */}
        <section id="patients" className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <User size={28} className="text-[#0A2463]" />
                </div>
                <p className="section-label mb-3">Patients & Users</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Equipment built for your life, not off a shelf.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  Whether you&apos;re newly injured, your condition has changed, or you&apos;ve
                  been using the wrong equipment for years — we start by understanding you. Not
                  your diagnosis. You.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We conduct a full clinical evaluation, collaborate with your therapy team, handle
                  every insurance form, and configure every component to your exact body and
                  functional goals. You don&apos;t have to navigate the system alone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quiz" className="btn btn-primary btn-lg">
                    Find My Equipment <ArrowRight size={20} />
                  </Link>
                  <Link href="/consultation" className="btn btn-outline btn-lg">
                    Book a Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "We evaluate your real-world needs",
                    body: "In-home or clinic evaluations that look at your environment, daily activities, and posture — not just a checklist.",
                  },
                  {
                    title: "Equipment configured to your body",
                    body: "Every wheelchair, seating system, and control interface is fit and programmed specifically for you — not a standard model.",
                  },
                  {
                    title: "We handle your insurance",
                    body: "Medicare, Medicaid, and private insurance documentation is prepared, submitted, and followed up by our team. You don't touch a form.",
                  },
                  {
                    title: "We stay with you after delivery",
                    body: "In-home delivery, full fitting, training for you and your caregivers, and 30-day follow-up included.",
                  },
                  {
                    title: "Repairs & maintenance ongoing",
                    body: "We service the equipment we provide. You have a direct contact — not a call centre.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50">
                    <CheckCircle size={20} className="text-[#0A2463] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                      <div className="text-slate-600 text-[15px] leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CAREGIVERS ───────────────────────────────── */}
        <section id="caregivers" className="section" style={{ background: "#F0F7FF" }}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <div className="space-y-4 lg:order-2">
                {[
                  {
                    title: "We speak in plain language",
                    body: "No jargon, no confusing insurance codes. We walk you through every step in terms that make sense.",
                  },
                  {
                    title: "We coordinate with the clinical team",
                    body: "You don't need to be the messenger between your loved one's therapist and us. We reach out directly.",
                  },
                  {
                    title: "We keep you informed at every step",
                    body: "You'll always know where the process stands — evaluation, insurance submission, approval, build, and delivery.",
                  },
                  {
                    title: "We help you ask the right questions",
                    body: "Not sure what to look for in a power chair? We guide you through the decision without pressure.",
                  },
                  {
                    title: "We're available after delivery",
                    body: "Questions come up after equipment arrives. Your specialist's direct line doesn't disappear after the sale.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl border border-blue-100 bg-white">
                    <CheckCircle size={20} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                      <div className="text-slate-600 text-[15px] leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:order-1">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mb-6">
                  <Heart size={28} className="text-[#0EA5E9]" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-sky-600 mb-3">Caregivers & Families</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Supporting your loved one is hard enough. We handle the rest.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  Navigating insurance, clinical terminology, and equipment options is
                  overwhelming — especially when you&apos;re also managing everything else.
                  We walk alongside you, in plain language, from your first question through delivery.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We coordinate with your family member&apos;s clinical team directly, keep you
                  updated at every milestone, and make sure you understand every decision
                  before it&apos;s made.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/consultation" className="btn btn-primary btn-lg">
                    Get Guidance <ArrowRight size={20} />
                  </Link>
                  <a href="tel:+18889990072" className="btn btn-outline btn-lg">
                    <Phone size={18} /> Call a Specialist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLINICIANS ───────────────────────────────── */}
        <section id="clinicians" className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                  <Stethoscope size={28} className="text-green-600" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-green-600 mb-3">OTs & Clinicians</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  A CRT partner your patients can count on.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  We collaborate directly with occupational therapists, physical therapists,
                  physicians, and rehab centres. Referrals are streamlined, documentation is handled
                  by our team, and your patients receive outcomes-focused equipment — not whatever
                  has the best margin.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Our ATPs are credentialed, manufacturer-certified, and experienced in
                  coordinating complex cases. We align every recommendation with your clinical goals
                  and the funding requirements so prior authorization moves smoothly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/consultation?type=referral" className="btn btn-primary btn-lg">
                    Refer a Patient <ArrowRight size={20} />
                  </Link>
                  <Link href="/how-it-works" className="btn btn-outline btn-lg">
                    See Our Process
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    Icon: ClipboardList,
                    title: "Streamlined referral pathway",
                    body: "Send us a referral by phone, email, or consultation form. We take it from there and keep you updated throughout.",
                    color: "#0A2463",
                    bg: "#EEF4FF",
                  },
                  {
                    Icon: Users,
                    title: "We coordinate around your schedule",
                    body: "We reach out to your patient directly, loop you in on evaluation findings, and work within your existing care plan.",
                    color: "#0EA5E9",
                    bg: "#F0F9FF",
                  },
                  {
                    Icon: FileCheck,
                    title: "We prepare all documentation",
                    body: "Letter of Medical Necessity support, prior authorization submissions, and appeal documentation if needed. We work with you on the clinical justification.",
                    color: "#10B981",
                    bg: "#F0FDF4",
                  },
                  {
                    Icon: CheckCircle,
                    title: "Aligned with clinical goals",
                    body: "We don't recommend equipment by catalogue. Every configuration is reviewed against the patient's seating, positioning, and functional mobility goals.",
                    color: "#8B5CF6",
                    bg: "#F5F3FF",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                      <item.Icon size={22} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg mb-1">{item.title}</div>
                      <div className="text-slate-600 text-[15px] leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#0A2463] section">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to take the next step?</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-xl mx-auto">
              Start with our 2-minute quiz, book a consultation, or call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz" className="btn btn-lg" style={{ background: "white", color: "#0A2463", borderColor: "white", fontWeight: 700 }}>
                Find My Equipment <ArrowRight size={20} />
              </Link>
              <Link href="/consultation" className="btn btn-outline-white btn-lg">
                Book Consultation
              </Link>
              <a href="tel:+18889990072" className="btn btn-outline-white btn-lg">
                <Phone size={18} /> 1-888-999-0072
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
