import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "Find My Equipment Quiz",
  description:
    "Answer 4 questions and get personalized mobility equipment recommendations from our certified specialists.",
};

export default function QuizPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#f8faff]">
        {/* Quiz header */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="container py-10">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-2">
                Smart Equipment Finder
              </div>
              <h1 className="text-4xl font-bold text-[#0f172a] mb-3">
                Find the right equipment for your needs
              </h1>
              <p className="text-xl text-[#475569]">
                Answer 4 quick questions. We&apos;ll recommend the right product categories and
                connect you with a specialist to confirm the fit.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <QuizFlow />
        </div>
      </main>
      <Footer />
    </>
  );
}
