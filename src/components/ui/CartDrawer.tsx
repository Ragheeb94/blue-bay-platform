"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, itemCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShoppingCart size={20} className="text-[#0A2463]" />
                <span className="font-bold text-slate-900 text-lg">
                  Cart {itemCount > 0 && <span className="text-[#0A2463]">({itemCount})</span>}
                </span>
              </div>
              <button onClick={closeCart} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <X size={20} className="text-slate-600" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingCart size={48} className="text-slate-300" />
                  <div>
                    <p className="font-semibold text-slate-600 text-lg">Your cart is empty</p>
                    <p className="text-slate-400 text-sm mt-1">Browse our products to get started</p>
                  </div>
                  <button onClick={closeCart} className="btn btn-primary">
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.cartKey}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-900 text-sm leading-tight">{item.name}</div>
                        <div className="text-xs text-slate-500 mb-1">{item.brand} · {item.categoryLabel}</div>

                        {/* Add-ons */}
                        {item.addOns && item.addOns.length > 0 && (
                          <div className="mb-1.5 space-y-0.5">
                            {item.addOns.map((ao) => (
                              <div key={ao.label} className="text-xs text-slate-400 flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                                {ao.label}
                                {ao.priceAdd > 0 && (
                                  <span className="text-slate-400">(+${ao.priceAdd})</span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="font-bold text-[#0A2463] text-sm mb-3">{item.priceLabel}</div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQty(item.cartKey, item.quantity - 1)}
                              className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-200 active:scale-95 transition-[background,transform] duration-150"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQty(item.cartKey, item.quantity + 1)}
                              className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-200 active:scale-95 transition-[background,transform] duration-150"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.cartKey)}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 active:scale-90 transition-[background,color,transform] duration-150"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-slate-200 px-6 py-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Subtotal</span>
                  <span className="font-bold text-slate-900 text-lg">
                    ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <p className="text-xs text-slate-400">Shipping and taxes calculated at checkout</p>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="btn btn-primary w-full justify-center text-base"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={closeCart}
                  className="btn btn-outline w-full justify-center text-base"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
