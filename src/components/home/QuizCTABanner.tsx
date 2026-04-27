import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Personalized recommendations",
  "Takes 2 minutes",
  "No account required",
  "Instant results",
];

export default function QuizCTABanner() {
  return (
    <section style={{ background: "linear-gradient(135deg, #0A2463 0%, #1E3A8A 50%, #0A2463 100%)" }} className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Smart Equipment Finder</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Not sure what equipment you need?
            </h2>
            <p className="text-xl text-blue-200 leading-relaxed mb-8">
              Answer 4 simple questions about your situation and we&apos;ll recommend the right
              product categories — then connect you with a specialist to confirm.
            </p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400 shrink-0" />
                  <span className="text-blue-100 text-[15px] font-medium">{b}</span>
                </div>
              ))}
            </div>
            <Link href="/quiz" className="btn btn-lg" style={{
              background: "white",
              color: "#0A2463",
              borderColor: "white",
              fontWeight: 700,
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
            }}>
              Start the Free Quiz <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right — mockup */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-200 text-sm font-semibold">Step 1 of 4</span>
                <span className="text-blue-300 text-sm">25% complete</span>
              </div>
              <div className="h-1.5 bg-white/20 rounded-full mb-7">
                <div className="h-full w-1/4 bg-[#38BDF8] rounded-full" />
              </div>
              <h3 className="text-white font-bold text-xl mb-5">Who are you looking for equipment for?</h3>
              {[
                { label: "For myself",            desc: "My own mobility needs", active: true },
                { label: "For a family member",   desc: "I'm a caregiver",       active: false },
                { label: "For my patient",         desc: "I'm an OT / PT",        active: false },
              ].map((opt) => (
                <div key={opt.label} className={`flex items-center gap-4 p-4 rounded-xl mb-3 border cursor-pointer transition-all ${
                  opt.active
                    ? "border-[#38BDF8] bg-[#38BDF8]/20"
                    : "border-white/20 bg-white/5 hover:bg-white/10"
                }`}>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    opt.active ? "border-[#38BDF8]" : "border-white/40"
                  }`}>
                    {opt.active && <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-[15px]">{opt.label}</div>
                    <div className="text-blue-300 text-sm">{opt.desc}</div>
                  </div>
                </div>
              ))}
              <Link href="/quiz" className="btn btn-sky w-full justify-center mt-4 text-base">
                Continue <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
