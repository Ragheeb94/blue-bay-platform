import Image from "next/image";
import { Shield, Users, CheckCircle, Clock } from "lucide-react";
import { trustStats } from "@/lib/data";

const icons = [Shield, Users, CheckCircle, Clock];

const trustPoints = [
  {
    title: "22+ Years of Clinical Experience",
    description: "Built on established Canadian operations (Medics Mobility Inc., Ontario) with proven processes and a deep clinical network.",
  },
  {
    title: "Clinician Collaboration",
    description: "We coordinate directly with OTs, PTs, and referral partners to ensure every recommendation is clinically appropriate.",
  },
  {
    title: "Full Insurance Support",
    description: "Medicare, Medicaid, and private insurance documentation is handled by our team. You will never need to navigate it alone.",
  },
  {
    title: "Nationwide Service",
    description: "We serve clients across the U.S. with in-home evaluations and online ordering, and we're expanding rapidly.",
  },
];

export default function TrustBar() {
  return (
    <section className="section" style={{ background: "#F0F7FF" }}>
      <div className="container">

        {/* Section intro */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Track Record</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Results that speak for themselves
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Two decades of clinical expertise, thousands of lives improved.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {trustStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={stat.label} className="card p-7 text-center">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#0A2463]" />
                </div>
                <div className="text-4xl font-bold text-[#0A2463] mb-1">{stat.value}</div>
                <div className="text-slate-500 font-semibold text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Why Blue Bay */}
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
          <div>
            <p className="section-label mb-4">Why Blue Bay</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Professional standards you can rely on
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              We approach every case with the same clinical rigor we bring to complex rehab,
              because everyone deserves equipment that genuinely improves their life.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <div className="text-sm font-bold text-[#0A2463] mb-1">CRT Certified Provider</div>
              <div className="text-slate-600 text-[15px] leading-relaxed">
                Complex Rehab Technology requires certified professionals. Our ATPs are
                credentialed and regularly trained on the latest equipment and clinical protocols.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80&fit=crop"
                alt="Clinical specialist working with patient"
                width={700}
                height={380}
                className="w-full object-cover"
              />
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((point, i) => {
                const Icon = icons[i];
                return (
                  <div key={point.title} className="card p-5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-[#0A2463]" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-[15px] mb-1">{point.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
