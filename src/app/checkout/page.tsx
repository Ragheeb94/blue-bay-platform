"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Lock, Trash2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/lib/cart-context";

type Step = "cart" | "info" | "confirm";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  notes: string;
}

const emptyForm: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  address: "", city: "", state: "", zip: "", notes: "",
};

export default function CheckoutPage() {
  const { items, subtotal, removeItem, updateQty, clear } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const shipping = subtotal > 500 ? 0 : 49.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  function handleField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleInfoSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("confirm");
  }

  function handlePlaceOrder() {
    clear();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center py-16">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-slate-900 mb-3">Order Received!</h1>
            <p className="text-slate-500 mb-2">
              Thank you, <strong>{form.firstName}</strong>. We&apos;ve received your order and will contact you at{" "}
              <strong>{form.email}</strong> to confirm details and arrange delivery.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Our team typically reaches out within 1 business day.
            </p>
            <Link href="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <Link href="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-10">
            {(["cart", "info", "confirm"] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                {i > 0 && <div className="w-12 h-px bg-slate-200" />}
                <div className={`flex items-center gap-2 text-sm font-semibold ${step === s ? "text-[#0A2463]" : "text-slate-400"}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === s ? "bg-[#0A2463] text-white" : "bg-slate-100 text-slate-400"}`}>
                    {i + 1}
                  </span>
                  <span className="hidden sm:inline capitalize">{s === "cart" ? "Review Cart" : s === "info" ? "Your Info" : "Confirm"}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left panel */}
            <div className="lg:col-span-3">

              {/* ── Step 1: Cart ── */}
              {step === "cart" && (
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-6">Review Your Cart</h1>

                  {items.length === 0 ? (
                    <div className="text-center py-16">
                      <p className="text-slate-500 mb-4">Your cart is empty.</p>
                      <Link href="/products" className="btn btn-primary">Browse Products</Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map(item => (
                        <div key={item.slug} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-white">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-slate-50 shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-900 text-sm leading-tight">{item.name}</div>
                            <div className="text-xs text-slate-400 mb-2">{item.brand} · {item.categoryLabel}</div>
                            <div className="font-bold text-[#0A2463] text-sm">
                              ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2 shrink-0">
                            <button onClick={() => removeItem(item.slug)} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-300 hover:text-red-400 transition-colors">
                              <Trash2 size={14} />
                            </button>
                            <div className="flex items-center gap-2">
                              <button onClick={() => updateQty(item.slug, item.quantity - 1)} className="w-6 h-6 rounded border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-100 transition-colors font-bold">−</button>
                              <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                              <button onClick={() => updateQty(item.slug, item.quantity + 1)} className="w-6 h-6 rounded border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-100 transition-colors font-bold">+</button>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4">
                        <button
                          onClick={() => setStep("info")}
                          className="btn btn-primary w-full justify-center text-base"
                        >
                          Continue to Your Info →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── Step 2: Info ── */}
              {step === "info" && (
                <form onSubmit={handleInfoSubmit}>
                  <h1 className="text-2xl font-bold text-slate-900 mb-6">Your Information</h1>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">First Name *</label>
                        <input required name="firstName" value={form.firstName} onChange={handleField}
                          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name *</label>
                        <input required name="lastName" value={form.lastName} onChange={handleField}
                          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
                        <input required type="email" name="email" value={form.email} onChange={handleField}
                          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Phone *</label>
                        <input required type="tel" name="phone" value={form.phone} onChange={handleField}
                          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Street Address *</label>
                      <input required name="address" value={form.address} onChange={handleField}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors" />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">City *</label>
                        <input required name="city" value={form.city} onChange={handleField}
                          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">State *</label>
                        <input required name="state" value={form.state} onChange={handleField} placeholder="e.g. CA"
                          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">ZIP Code *</label>
                        <input required name="zip" value={form.zip} onChange={handleField}
                          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Special Instructions or Notes</label>
                      <textarea name="notes" value={form.notes} onChange={handleField} rows={3}
                        placeholder="Delivery instructions, accessibility needs, insurance info..."
                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0A2463] transition-colors resize-none" />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button type="button" onClick={() => setStep("cart")} className="btn btn-outline px-6">← Back</button>
                    <button type="submit" className="btn btn-primary flex-1 justify-center text-base">Review Order →</button>
                  </div>
                </form>
              )}

              {/* ── Step 3: Confirm ── */}
              {step === "confirm" && (
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-6">Confirm Your Order</h1>

                  <div className="bg-slate-50 rounded-xl p-5 mb-6 space-y-2">
                    <div className="font-semibold text-slate-800 mb-3">Shipping To</div>
                    <div className="text-sm text-slate-600">{form.firstName} {form.lastName}</div>
                    <div className="text-sm text-slate-600">{form.address}, {form.city}, {form.state} {form.zip}</div>
                    <div className="text-sm text-slate-600">{form.email} · {form.phone}</div>
                    {form.notes && <div className="text-sm text-slate-500 italic mt-1">"{form.notes}"</div>}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                    <strong>What happens next?</strong> Our team will review your order and contact you within 1 business day to confirm availability, arrange delivery, and discuss any insurance or financing options.
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep("info")} className="btn btn-outline px-6">← Edit Info</button>
                    <button onClick={handlePlaceOrder} className="btn btn-primary flex-1 justify-center text-base">
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right panel — Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sticky top-24">
                <h2 className="font-bold text-slate-900 text-lg mb-5">Order Summary</h2>
                <div className="space-y-3 mb-5">
                  {items.map(item => (
                    <div key={item.slug} className="flex justify-between items-start gap-2 text-sm">
                      <span className="text-slate-600 flex-1 leading-tight">{item.name} <span className="text-slate-400">×{item.quantity}</span></span>
                      <span className="font-semibold text-slate-900 shrink-0">
                        ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-100 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span className="text-green-600 font-semibold">Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Est. Tax (8%)</span>
                    <span>${tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
                <div className="border-t border-slate-200 mt-3 pt-3 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="font-bold text-[#0A2463] text-xl">
                    ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600 font-medium mt-2">Free shipping on orders over $500</p>
                )}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                  <Lock size={12} />
                  <span>Your information is secure and never shared.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
