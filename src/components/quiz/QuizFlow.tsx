"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, CheckCircle, User, Heart, Stethoscope, Phone, Calendar } from "lucide-react";
import { quizSteps, products } from "@/lib/data";
import { cn } from "@/lib/utils";

type Answers = Record<string, string>;

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  user: User,
  heart: Heart,
  stethoscope: Stethoscope,
};

function getRecommendedProducts(answers: Answers) {
  const need = answers["need"] ?? "";
  const categoryMap: Record<string, string[]> = {
    "indoor-mobility":   ["power-wheelchairs", "manual-wheelchairs", "walkers-rollators"],
    "community-mobility":["power-wheelchairs", "power-scooters", "manual-wheelchairs"],
    "seating-comfort":   ["seating-positioning", "power-wheelchairs"],
    "transfers":         ["transfer-aids"],
    "multiple":          ["power-wheelchairs", "seating-positioning", "manual-wheelchairs"],
  };
  const categories = categoryMap[need] ?? ["power-wheelchairs", "manual-wheelchairs", "seating-positioning"];
  return products.filter((p) => categories.includes(p.category)).slice(0, 3);
}

export default function QuizFlow() {
  const [currentStep, setCurrentStep]   = useState(0);
  const [answers, setAnswers]           = useState<Answers>({});
  const [completed, setCompleted]       = useState(false);
  const [direction, setDirection]       = useState(1);

  const step           = quizSteps[currentStep];
  const progress       = (currentStep / quizSteps.length) * 100;
  const selectedOption = answers[step?.id ?? ""];
  const recommended    = getRecommendedProducts(answers);

  const handleSelect = (optionId: string) => setAnswers(prev => ({ ...prev, [step.id]: optionId }));

  const handleNext = () => {
    if (!selectedOption) return;
    if (currentStep < quizSteps.length - 1) {
      setDirection(1);
      setCurrentStep(s => s + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(s => s - 1);
    }
  };

  if (completed) {
    return (
      <div className="max-w-3xl mx-auto">
        {/* Success */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#DCFCE7" }}>
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Your personalized results</h1>
          <p className="text-xl text-slate-600">
            Based on your answers, here are the product categories and next steps we recommend.
          </p>
        </div>

        {/* Answer summary */}
        <div className="card p-6 mb-8">
          <h2 className="font-bold text-slate-900 text-lg mb-4">Your answers at a glance</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {quizSteps.map((s) => {
              const ans = answers[s.id];
              const opt = s.options.find((o) => o.id === ans);
              return (
                <div key={s.id} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-400 font-medium">{s.question.split("?")[0]}</div>
                    <div className="font-semibold text-slate-900">{opt?.label ?? "—"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommended products */}
        {recommended.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-slate-900 text-xl mb-5">Recommended for you</h2>
            <div className="grid gap-4">
              {recommended.map((product) => (
                <div key={product.slug} className="card overflow-hidden flex items-stretch hover:shadow-md transition-shadow">
                  <div className="relative w-28 shrink-0">
                    <Image src={product.image} alt={product.name} fill className="object-cover" sizes="112px" />
                  </div>
                  <div className="flex-1 p-5 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-bold text-slate-900 text-lg leading-tight">{product.name}</div>
                        <div className="text-sm text-slate-500">{product.categoryLabel} · {product.brand}</div>
                      </div>
                      {product.crtRequired && (
                        <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full shrink-0" style={{ background: "#0A2463" }}>
                          CRT Required
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm mt-1 mb-3 flex-1">{product.tagline}</p>
                    <Link href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1 font-bold text-sm text-[#0A2463] hover:underline">
                      View details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CRT warning */}
        {answers["need"] && ["indoor-mobility","community-mobility","seating-comfort","multiple"].includes(answers["need"]) && (
          <div className="rounded-2xl p-5 mb-8 border" style={{ background: "#FFFBEB", borderColor: "#FDE68A" }}>
            <div className="font-bold mb-1" style={{ color: "#92400E" }}>Complex rehab equipment requires a clinical evaluation</div>
            <div className="text-sm leading-relaxed" style={{ color: "#78350F" }}>
              The equipment above is highly customized and requires a certified evaluation before ordering.
              This is required for insurance coverage. Our specialists will guide you through it.
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/consultation"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl text-white text-center transition-all hover:opacity-90"
            style={{ background: "#0A2463" }}>
            <Calendar size={28} />
            <div className="font-bold text-xl">Book a Consultation</div>
            <div className="text-blue-200 text-[15px]">Schedule your free evaluation with a certified ATP</div>
          </Link>
          <a href="tel:+18889990072"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl text-center card hover:shadow-lg transition-all"
            style={{ borderWidth: "2px", borderColor: "#0A2463", color: "#0A2463" }}>
            <Phone size={28} />
            <div className="font-bold text-xl">Call a Specialist</div>
            <div className="text-slate-500 text-[15px]">1-888-999-0072 · Mon–Fri 9am–5pm</div>
          </a>
        </div>

        <div className="text-center mt-6">
          <button onClick={() => { setCompleted(false); setCurrentStep(0); setAnswers({}); }}
            className="text-slate-500 hover:text-slate-800 text-[15px] underline">
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-slate-500">Step {currentStep + 1} of {quizSteps.length}</span>
          <span className="text-sm font-bold text-[#0A2463]">{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: "#0A2463" }}
          />
        </div>
      </div>

      {/* Question */}
      <div key={step.id}>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{step.question}</h1>
        {step.subtitle && <p className="text-xl text-slate-500 mb-8">{step.subtitle}</p>}
        {!step.subtitle && <div className="mb-8" />}

        <div className="space-y-3">
          {step.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const Icon = option.icon ? iconMap[option.icon] : null;

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={cn(
                  "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4",
                  isSelected
                    ? "bg-blue-50"
                    : "bg-white hover:bg-slate-50"
                )}
                style={{
                  borderColor: isSelected ? "#0A2463" : "#E2E8F0",
                  boxShadow: isSelected ? "0 0 0 1px #0A2463" : undefined,
                }}
              >
                {/* Radio */}
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                  isSelected ? "border-[#0A2463]" : "border-slate-300"
                )}>
                  {isSelected && <div className="w-3 h-3 rounded-full bg-[#0A2463]" />}
                </div>

                {/* Icon */}
                {Icon && (
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                    isSelected ? "bg-blue-100" : "bg-slate-100")}>
                    <Icon size={20} className={isSelected ? "text-[#0A2463]" : "text-slate-500"} />
                  </div>
                )}

                {/* Text */}
                <div className="flex-1">
                  <div className={cn("font-bold text-lg", isSelected ? "text-[#0A2463]" : "text-slate-900")}>
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="text-slate-500 text-[15px] mt-0.5">{option.description}</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between mt-10">
        <button onClick={handleBack} disabled={currentStep === 0}
          className="flex items-center gap-2 px-5 py-3 text-slate-600 font-semibold rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors text-[15px]">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="flex flex-col items-end gap-2">
          {!selectedOption && (
            <p className="text-sm text-slate-400">Select an option above to continue</p>
          )}
          <button onClick={handleNext} disabled={!selectedOption}
            className="btn btn-primary btn-lg"
            style={{ opacity: selectedOption ? 1 : 0.35, pointerEvents: selectedOption ? "auto" : "none" }}>
            {currentStep === quizSteps.length - 1 ? "See my results" : "Next"}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
