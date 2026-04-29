import Link from "next/link";
import { ArrowRight, User, Heart, Stethoscope } from "lucide-react";

const audiences = [
  {
    Icon: User,
    label: "Patients & Users",
    headline: "Find equipment built for your life",
    description:
      "Whether your needs are new or changing, we walk through every option with you and make sure your equipment is built around your body.",
    cta: "Start my search",
    href: "/products",
    iconBg: "#DBEAFE",
    iconColor: "#0A2463",
    ctaColor: "#0A2463",
  },
  {
    Icon: Heart,
    label: "Caregivers & Families",
    headline: "Support your loved one with confidence",
    description:
      "Insurance, clinical jargon, and product options can all be overwhelming. We guide you through it in plain language, from the first call to delivery.",
    cta: "Get guidance",
    href: "/consultation",
    iconBg: "#E0F2FE",
    iconColor: "#0284C7",
    ctaColor: "#0284C7",
  },
  {
    Icon: Stethoscope,
    label: "OTs & Clinicians",
    headline: "A CRT partner you can trust",
    description:
      "We collaborate directly with your clinical team. Referrals are streamlined, documentation is handled, and your patients get outcomes-focused equipment.",
    cta: "Refer a patient",
    href: "/consultation?type=referral",
    iconBg: "#DCFCE7",
    iconColor: "#16A34A",
    ctaColor: "#16A34A",
  },
];

export default function AudienceCards() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Who We Help</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Built for everyone in the journey
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re the patient, a caregiver, or a referring clinician, we have a
            clear path forward for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.label} className="card p-8 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: a.iconBg }}>
                <a.Icon size={26} style={{ color: a.iconColor }} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: a.ctaColor }}>
                {a.label}
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{a.headline}</h3>
              <p className="text-slate-600 text-[16px] leading-relaxed flex-1 mb-6">{a.description}</p>
              <Link href={a.href} className="inline-flex items-center gap-2 font-bold text-[15px]" style={{ color: a.ctaColor }}>
                {a.cta} <ArrowRight size={17} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
