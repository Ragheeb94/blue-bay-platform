"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, User, Heart, Stethoscope, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const env = answers["environment"] ?? "";

  const categoryMap: Record<string, string[]> = {
    "indoor-mobility": ["power-wheelchairs", "manual-wheelchairs", "walkers-rollators"],
    "community-mobility": ["power-wheelchairs", "power-scooters", "manual-wheelchairs"],
    "seating-comfort": ["seating-positioning", "power-wheelchairs"],
    "transfers": ["transfer-aids"],
    "multiple": ["power-wheelchairs", "seating-positioning", "manual-wheelchairs"],
  };

  const categories = categoryMap[need] ?? ["power-wheelchairs", "manual-wheelchairs", "seating-positioning"];
  return products.filter((p) => categories.includes(p.category)).slice(0, 3);
}

export default function QuizFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [completed, setCompleted] = useState(false);
  const [direction, setDirection] = useState(1);

  const step = quizSteps[currentStep];
  const progress = ((currentStep) / quizSteps.length) * 100;
  const selectedOption = answers[step?.id ?? ""];

  const handleSelect = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [step.id]: optionId }));
  };

  const handleNext = () => {
    if (!selectedOption) return;
    if (currentStep < quizSteps.length - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const recommended = getRecommendedProducts(answers);

  const insuranceLabel: Record<string, string> = {
    medicare: "Medicare / Medicaid",
    private: "Private insurance",
    "self-pay": "Self-pay",
    unsure: "Not sure",
  };

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        {/* Success header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#d1fae5] rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-[#10b981]" />
          </div>
          <h1 className="text-4xl font-bold text-[#0f172a] mb-3">Your personalized results</h1>
          <p className="text-xl text-[#475569]">
            Based on your answers, here are the product categories and next steps we recommend.
          </p>
        </div>

        {/* Answer summary */}
        <div className="card p-6 mb-8">
          <h2 className="font-bold text-[#0f172a] text-lg mb-4">Your answers at a glance</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {quizSteps.map((s) => {
              const ans = answers[s.id];
              const opt = s.options.find((o) => o.id === ans);
              return (
                <div key={s.id} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-[#94a3b8] font-medium">{s.question.split("?")[0]}</div>
                    <div className="font-semibold text-[#0f172a]">{opt?.label ?? "—"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommended products */}
        {recommended.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-[#0f172a] text-xl mb-5">Recommended for you</h2>
            <div className="grid gap-4">
              {recommended.map((product) => (
                <div
                  key={product.slug}
                  className="card p-5 flex items-start gap-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#eef4ff] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🦽</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-bold text-[#0f172a] text-lg">{product.name}</div>
                        <div className="text-sm text-[#475569]">{product.categoryLabel} · {product.brand}</div>
                      </div>
                      {product.crtRequired && (
                        <span className="text-xs font-semibold text-[#0b2d6b] bg-[#eef4ff] border border-[#d9e7ff] px-2 py-1 rounded-full flex-shrink-0">
                          CRT Required
                        </span>
                      )}
                    </div>
                    <p className="text-[#475569] text-base mt-1 mb-3">{product.tagline}</p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-[#0b2d6b] font-semibold text-base hover:underline inline-flex items-center gap-1"
                    >
                      View details <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Important CRT note */}
        {answers["need"] && ["indoor-mobility", "community-mobility", "seating-comfort", "multiple"].includes(answers["need"]) && (
          <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-5 mb-8">
            <div className="font-bold text-[#92400e] mb-1">
              Complex rehab equipment requires a clinical evaluation
            </div>
            <div className="text-[#78350f] text-base">
              The equipment above is highly customized and requires a certified evaluation before
              ordering. This protects your health — and is required for insurance coverage. Our
              specialists will guide you through it.
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/consultation"
            className="flex flex-col items-center gap-2 p-6 bg-[#0b2d6b] text-white rounded-xl hover:bg-[#0e3a87] transition-colors text-center"
          >
            <Calendar size={28} />
            <div className="font-bold text-xl">Book a Consultation</div>
            <div className="text-[#93c5fd] text-base">Schedule your free evaluation with a certified ATP</div>
          </Link>
          <a
            href="tel:+18889990072"
            className="flex flex-col items-center gap-2 p-6 bg-white border-2 border-[#0b2d6b] text-[#0b2d6b] rounded-xl hover:bg-[#eef4ff] transition-colors text-center"
          >
            <Phone size={28} />
            <div className="font-bold text-xl">Call a Specialist</div>
            <div className="text-[#475569] text-base">1-888-999-0072 · Mon–Fri 9am–5pm</div>
          </a>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => { setCompleted(false); setCurrentStep(0); setAnswers({}); }}
            className="text-[#475569] hover:text-[#0b2d6b] text-base underline"
          >
            Start over
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-[#475569]">
            Step {currentStep + 1} of {quizSteps.length}
          </span>
          <span className="text-sm font-semibold text-[#0b2d6b]">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#0b2d6b] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-3">
            {step.question}
          </h1>
          {step.subtitle && (
            <p className="text-xl text-[#475569] mb-8">{step.subtitle}</p>
          )}
          {!step.subtitle && <div className="mb-8" />}

          {/* Options */}
          <div className="space-y-3">
            {step.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const Icon = option.icon ? iconMap[option.icon] : null;

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className={cn(
                    "w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group",
                    isSelected
                      ? "border-[#0b2d6b] bg-[#eef4ff] shadow-sm"
                      : "border-[#e2e8f0] bg-white hover:border-[#93c5fd] hover:bg-[#f8faff]"
                  )}
                >
                  {/* Radio indicator */}
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors",
                      isSelected ? "border-[#0b2d6b]" : "border-[#cbd5e1]"
                    )}
                  >
                    {isSelected && (
                      <div className="w-3 h-3 rounded-full bg-[#0b2d6b]" />
                    )}
                  </div>

                  {/* Icon */}
                  {Icon && (
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                        isSelected ? "bg-[#d9e7ff]" : "bg-[#f1f5f9]"
                      )}
                    >
                      <Icon
                        size={20}
                        className={isSelected ? "text-[#0b2d6b]" : "text-[#64748b]"}
                      />
                    </div>
                  )}

                  {/* Text */}
                  <div className="flex-1">
                    <div
                      className={cn(
                        "font-semibold text-lg transition-colors",
                        isSelected ? "text-[#0b2d6b]" : "text-[#0f172a]"
                      )}
                    >
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-[#475569] text-base mt-0.5">{option.description}</div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-5 py-3 text-[#475569] font-medium rounded-lg hover:bg-[#f1f5f9] disabled:opacity-30 disabled:pointer-events-none transition-colors text-base"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="flex items-center gap-2 px-8 py-3 bg-[#0b2d6b] text-white font-semibold rounded-xl disabled:opacity-40 disabled:pointer-events-none hover:bg-[#0e3a87] transition-colors text-lg group"
        >
          {currentStep === quizSteps.length - 1 ? "See my results" : "Next"}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
