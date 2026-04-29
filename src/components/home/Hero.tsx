import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Clock } from "lucide-react";

const trust = [
  { Icon: ShieldCheck, text: "CRT Certified Provider" },
  { Icon: Award,       text: "22+ Years Experience"   },
  { Icon: Clock,       text: "48hr Quote Turnaround"  },
];

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container py-[72px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.08] mb-6">
              The right mobility equipment,{" "}
              <span className="text-[#0A2463]">matched to you.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              We don&apos;t just sell equipment. We evaluate your needs, collaborate with your
              clinical team, and configure every product to your body and lifestyle — then
              handle insurance so you can focus on living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/products" className="btn btn-primary btn-lg">
                Find My Equipment <ArrowRight size={20} />
              </Link>
              <Link href="/consultation" className="btn btn-outline btn-lg">
                Book Consultation
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {trust.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-600">
                  <Icon size={18} className="text-[#0A2463] shrink-0" />
                  <span className="text-[15px] font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — process card + stats */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Real photo */}
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
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-200 px-6 py-4">
                <div className="text-3xl font-bold text-[#0A2463]">5,000+</div>
                <div className="text-sm font-semibold text-slate-500">Clients served</div>
              </div>

              {/* Stat pill — top right */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-200 px-6 py-4">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm font-semibold text-slate-500">Insurance verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
