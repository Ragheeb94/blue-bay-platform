import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | Blue Bay Mobility",
  description:
    "22+ years of complex rehab technology experience. Blue Bay Mobility expanded from established Canadian operations to serve clients across the U.S. in 2024.",
};

const timeline = [
  { year: "2003", label: "Canadian operations established", body: "Medics Mobility Inc. launched in Ontario, Canada, building deep expertise in complex rehab technology and custom seating." },
  { year: "2010", label: "Complex rehab capabilities expanded", body: "Team grew with certified ATPs and expanded clinical partnerships with OT/PT practices and rehab centres across Ontario." },
  { year: "2016", label: "Workflows standardized", body: "Developed consistent intake, evaluation, and documentation processes — now the backbone of how every U.S. case is handled." },
  { year: "2024", label: "U.S. operations launched", body: "Blue Bay Mobility Inc. opened in Tustin, California, bringing 22 years of Canadian expertise to clients across the United States." },
  { year: "Today", label: "Local service + national reach", body: "In-home evaluations in Southern California and nationwide online equipment shipping, with more regions coming soon." },
];

const competencies = [
  { title: "Clinician Collaboration", body: "We work directly with your OT, PT, or physician — not around them. Every evaluation is coordinated with your existing therapy team." },
  { title: "Seating & Positioning", body: "Deep expertise in pressure management, posture support, and long-term positioning outcomes for complex rehab clients." },
  { title: "Power Mobility Setup", body: "Drive control programming, seating function configuration, and alternative access setup handled by manufacturer-certified specialists." },
  { title: "Insurance Navigation", body: "Medicare, Medicaid, and private insurance documentation prepared, submitted, and followed up by our team. No paperwork for you to chase." },
  { title: "Care Coordination", body: "We communicate across the full care team — client, caregiver, therapist, physician — so nothing falls through the cracks." },
  { title: "Service & Maintenance", body: "We stand behind the equipment we provide with ongoing repairs, troubleshooting, and preventive maintenance scheduling." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A2463] to-[#1E3A8A]">
          <div className="container py-[72px]">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">About Blue Bay</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                22+ years of experience. Built in Canada. Serving the U.S.
              </h1>
              <p className="text-xl text-blue-200 leading-relaxed">
                Blue Bay Mobility is the U.S. extension of Medics Mobility Inc., an Ontario-based
                complex rehab provider established in 2003. We bring two decades of clinical
                process, certified expertise, and outcomes-focused practice to clients across
                the United States.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-3">Our Approach</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  We don&apos;t sell equipment. We solve mobility problems.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  Complex rehab technology is not a product category — it&apos;s a clinical
                  process. Every case starts with understanding the person: their body, their
                  environment, their goals, and their care team. Equipment comes after.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We believe everyone deserves equipment that genuinely improves their life —
                  not whatever fits the insurance approval. That belief is built into every
                  evaluation, every configuration, and every follow-up we do.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <div className="font-bold text-[#0A2463] text-lg mb-2">Part of the Medics Mobility Family</div>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    Blue Bay Mobility Inc. operates under the same clinical standards and
                    workflows as Medics Mobility Inc. (Ontario, Canada) — a provider with over
                    two decades of complex rehab experience and thousands of clients served.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80&fit=crop"
                  alt="Clinical specialist working with patient on mobility equipment"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section" style={{ background: "#F0F7FF" }}>
          <div className="container">
            <div className="text-center mb-14">
              <p className="section-label mb-3">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Two decades in the making
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                What started in Ontario in 2003 is now serving clients across the United States.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-8">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-sm"
                      style={{ background: "linear-gradient(135deg, #0A2463, #1E3A8A)" }}>
                      {item.year === "Today" ? "Now" : item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-blue-200 my-1" style={{ minHeight: "40px" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-10">
                    <div className="font-bold text-[#0A2463] text-lg mb-1 mt-3">{item.label}</div>
                    <p className="text-slate-600 text-[15px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-14">
              <p className="section-label mb-3">What We Do Best</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Core competencies
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Built over 22 years and applied to every case we take on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competencies.map((c) => (
                <div key={c.title} className="card p-7 hover:shadow-md transition-shadow">
                  <CheckCircle size={22} className="text-[#0A2463] mb-4" />
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{c.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="section" style={{ background: "#F0F7FF" }}>
          <div className="container">
            <div className="text-center mb-14">
              <p className="section-label mb-3">Who We Serve</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Everyone in the care journey
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Patients & Users", body: "Individuals who need complex rehab or custom mobility equipment — new diagnosis, changing condition, or equipment upgrade.", href: "/who-we-help#patients", cta: "Learn more" },
                { label: "Caregivers & Families", body: "Family members and caregivers helping a loved one navigate equipment options, insurance, and clinical processes.", href: "/who-we-help#caregivers", cta: "Learn more" },
                { label: "OTs & Clinicians", body: "Occupational therapists, physical therapists, physicians, and rehab centres looking for a trusted CRT referral partner.", href: "/who-we-help#clinicians", cta: "Refer a patient" },
              ].map((item) => (
                <div key={item.label} className="card p-8 flex flex-col">
                  <h3 className="font-bold text-[#0A2463] text-xl mb-3">{item.label}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed flex-1 mb-5">{item.body}</p>
                  <Link href={item.href} className="inline-flex items-center gap-2 font-bold text-[#0A2463] text-[15px] hover:gap-3 transition-all">
                    {item.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-3">Find Us</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Based in Tustin, CA — serving the nation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Our team is based in Orange County, California. We conduct in-home evaluations
                  throughout Southern California and ship mobility equipment nationwide.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-[#0A2463]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-0.5">Address</div>
                      <div className="text-slate-600 text-[15px]">3002 Dow Ave Unit 312, Tustin, CA 92780</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[#0A2463]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-0.5">Phone</div>
                      <a href="tel:+18889990072" className="text-[#0A2463] font-semibold text-[15px] hover:underline">1-888-999-0072</a>
                      <div className="text-slate-500 text-sm">Mon–Fri, 9am–5pm Pacific</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#0A2463]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-0.5">Email</div>
                      <a href="mailto:info@bluebaymobility.com" className="text-[#0A2463] font-semibold text-[15px] hover:underline">info@bluebaymobility.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h3 className="font-bold text-slate-900 text-xl mb-2">Ready to get started?</h3>
                <p className="text-slate-600 mb-6">Browse our products or book a consultation with a certified specialist.</p>
                <div className="space-y-3">
                  <Link href="/products" className="btn btn-primary w-full justify-center">
                    Browse Products <ArrowRight size={18} />
                  </Link>
                  <Link href="/consultation" className="btn btn-outline w-full justify-center">
                    Book a Consultation
                  </Link>
                  <a href="tel:+18889990072" className="btn btn-outline w-full justify-center">
                    <Phone size={16} /> Call 1-888-999-0072
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
