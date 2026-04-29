"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Circle, Clock, Package, Truck, FileCheck, ClipboardList, Phone, Search } from "lucide-react";
import { motion } from "framer-motion";
import { trackingSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

const stepIcons = [Search, FileCheck, ClipboardList, Package, Clock, Truck];

const mockOrder = {
  id: "BBM-2024-00847",
  client: "Sample Order",
  product: "Permobil M3 Corpus — Custom Power Wheelchair",
  specialist: "Jordan M., ATP",
  phone: "1-888-999-0072",
  currentStep: 3,
  estimatedDelivery: "Estimated 3–4 weeks",
  updates: [
    {
      date: "Apr 24, 2026",
      time: "2:15 PM",
      message: "Clinical documentation received from your OT. Equipment has been ordered from Permobil.",
      step: "order",
    },
    {
      date: "Apr 18, 2026",
      time: "10:30 AM",
      message: "Insurance pre-authorization approved by Medicare. Ready to order.",
      step: "insurance",
    },
    {
      date: "Apr 12, 2026",
      time: "9:00 AM",
      message: "Clinical evaluation completed. Seating system and drive configuration confirmed.",
      step: "evaluation",
    },
    {
      date: "Apr 8, 2026",
      time: "3:45 PM",
      message: "Referral received and assigned to your specialist, Jordan M.",
      step: "referral",
    },
  ],
};

export default function TrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);
  const [found, setFound] = useState(false);

  const handleSearch = () => {
    setSearched(true);
    setFound(orderId.toLowerCase() === mockOrder.id.toLowerCase() || orderId === "demo");
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#f8faff]">
        {/* Header */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="container py-10">
            <div className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider mb-2">
              Order Status
            </div>
            <h1 className="text-4xl font-bold text-[#0f172a] mb-2">Track your order</h1>
            <p className="text-xl text-[#475569]">
              See exactly where your equipment is in the process — from insurance approval to
              delivery.
            </p>
          </div>
        </div>

        <div className="container py-10">
          <div className="max-w-3xl mx-auto">
            {/* Search */}
            <div className="card p-6 mb-8">
              <h2 className="font-bold text-[#0f172a] text-lg mb-3">Enter your order number</h2>
              <p className="text-[#475569] text-base mb-4">
                Your order number was provided in your confirmation email. Format: BBM-YYYY-XXXXX.
                Try <strong>BBM-2024-00847</strong> or <strong>demo</strong> to see an example.
              </p>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. BBM-2024-00847"
                  className="flex-1 px-4 py-3 border-2 border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0b2d6b] transition-colors text-base"
                />
                <button
                  onClick={handleSearch}
                  className="px-6 py-3 bg-[#0b2d6b] text-white font-semibold rounded-xl hover:bg-[#0e3a87] transition-colors text-base flex items-center gap-2"
                >
                  <Search size={18} /> Track
                </button>
              </div>
              {searched && !found && (
                <div className="mt-3 text-[#ef4444] text-sm font-medium">
                  Order not found. Please check your number or{" "}
                  <a href="tel:+18889990072" className="underline">call us</a> for help.
                </div>
              )}
            </div>

            {/* Results */}
            {found && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Order summary */}
                <div className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-[#94a3b8] mb-1">Order</div>
                      <div className="font-bold text-[#0f172a] text-xl">{mockOrder.id}</div>
                      <div className="text-[#475569] text-base mt-0.5">{mockOrder.product}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#475569]">Your specialist</div>
                      <div className="font-semibold text-[#0f172a]">{mockOrder.specialist}</div>
                      <a
                        href="tel:+18889990072"
                        className="text-sm text-[#0b2d6b] font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        <Phone size={13} /> {mockOrder.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-5 p-3 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl inline-flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-[#065f46] font-semibold text-sm">
                      {trackingSteps[mockOrder.currentStep]?.label} — In Progress
                    </span>
                    <span className="text-[#047857] text-sm ml-1">· {mockOrder.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Progress tracker */}
                <div className="card p-6">
                  <h2 className="font-bold text-[#0f172a] text-xl mb-6">Progress</h2>
                  <div className="relative">
                    {trackingSteps.map((step, i) => {
                      const Icon = stepIcons[i];
                      const isDone = i < mockOrder.currentStep;
                      const isCurrent = i === mockOrder.currentStep;

                      return (
                        <div key={step.id} className="flex gap-5 mb-0">
                          {/* Timeline */}
                          <div className="flex flex-col items-center">
                            <div
                              className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all z-10",
                                isDone
                                  ? "bg-[#10b981] border-[#10b981]"
                                  : isCurrent
                                  ? "bg-[#0b2d6b] border-[#0b2d6b]"
                                  : "bg-white border-[#e2e8f0]"
                              )}
                            >
                              {isDone ? (
                                <CheckCircle size={20} className="text-white" />
                              ) : isCurrent ? (
                                <Icon size={18} className="text-white" />
                              ) : (
                                <Circle size={18} className="text-[#cbd5e1]" />
                              )}
                            </div>
                            {i < trackingSteps.length - 1 && (
                              <div
                                className={cn(
                                  "w-0.5 flex-1 my-1 min-h-[32px]",
                                  isDone ? "bg-[#10b981]" : "bg-[#e2e8f0]"
                                )}
                              />
                            )}
                          </div>

                          {/* Content */}
                          <div className={cn("flex-1 pb-6", i === trackingSteps.length - 1 && "pb-0")}>
                            <div
                              className={cn(
                                "font-bold text-lg",
                                isDone
                                  ? "text-[#10b981]"
                                  : isCurrent
                                  ? "text-[#0b2d6b]"
                                  : "text-[#94a3b8]"
                              )}
                            >
                              {step.label}
                              {isCurrent && (
                                <span className="ml-2 text-xs font-semibold bg-[#eef4ff] text-[#0b2d6b] px-2 py-0.5 rounded-full align-middle">
                                  Current
                                </span>
                              )}
                            </div>
                            <div
                              className={cn(
                                "text-base mt-0.5",
                                isCurrent || isDone ? "text-[#475569]" : "text-[#94a3b8]"
                              )}
                            >
                              {step.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Activity log */}
                <div className="card p-6">
                  <h2 className="font-bold text-[#0f172a] text-xl mb-5">Updates</h2>
                  <div className="space-y-5">
                    {mockOrder.updates.map((update, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-9 h-9 rounded-full bg-[#eef4ff] flex items-center justify-center flex-shrink-0 text-lg">
                          ✓
                        </div>
                        <div>
                          <div className="text-sm text-[#94a3b8] font-medium">
                            {update.date} · {update.time}
                          </div>
                          <div className="text-[#0f172a] text-base mt-0.5">{update.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Help CTA */}
                <div className="card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-[#0f172a] text-lg">Questions about your order?</div>
                    <div className="text-[#475569] text-base">
                      Your specialist {mockOrder.specialist} is available Mon–Fri 9am–5pm.
                    </div>
                  </div>
                  <a
                    href="tel:+18889990072"
                    className="flex items-center gap-2 px-6 py-3 bg-[#0b2d6b] text-white font-semibold rounded-xl hover:bg-[#0e3a87] transition-colors flex-shrink-0"
                  >
                    <Phone size={18} /> Call Now
                  </a>
                </div>
              </motion.div>
            )}

            {/* No order yet CTA */}
            {!found && (
              <div className="card p-8 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  Haven&apos;t started the process yet?
                </h3>
                <p className="text-[#475569] text-lg mb-6">
                  Book a consultation and we&apos;ll walk you through every step — from evaluation
                  to delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/consultation"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0b2d6b] text-white font-semibold rounded-xl hover:bg-[#0e3a87] transition-colors"
                  >
                    Book Consultation
                  </a>
                  <a
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#0b2d6b] text-[#0b2d6b] font-semibold rounded-xl hover:bg-[#eef4ff] transition-colors"
                  >
                    Browse Products
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
