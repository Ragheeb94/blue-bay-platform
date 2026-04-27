import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "#F0F7FF" }}>
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by patients, families, and clinicians
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real feedback from the people we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6 flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-[15px] leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-slate-100 pt-4">
                <div className="font-bold text-slate-900 text-[15px]">{t.author}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Part of the Medics Mobility Inc. family — serving clients since 2002.
        </p>
      </div>
    </section>
  );
}
