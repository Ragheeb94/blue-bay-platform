"use client";

import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";

export interface CartAddOn {
  label: string;
  priceAdd: number;
}

export interface CartItem {
  cartKey: string;       // slug + serialised options — unique per configuration
  slug: string;
  name: string;
  brand: string;
  price: number;
  priceLabel: string;
  image: string;
  quantity: number;
  categoryLabel: string;
  addOns?: CartAddOn[];  // selected accessories / options for display
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; item: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; cartKey: string }
  | { type: "UPDATE_QTY"; cartKey: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "HYDRATE"; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.items };
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.cartKey === action.item.cartKey);
      const items = existing
        ? state.items.map((i) =>
            i.cartKey === action.item.cartKey ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { ...action.item, quantity: 1 }];
      return { ...state, items, isOpen: true };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.cartKey !== action.cartKey) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: action.quantity <= 0
          ? state.items.filter((i) => i.cartKey !== action.cartKey)
          : state.items.map((i) => i.cartKey === action.cartKey ? { ...i, quantity: action.quantity } : i),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (cartKey: string) => void;
  updateQty: (cartKey: string, quantity: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("bb-cart");
      if (saved) dispatch({ type: "HYDRATE", items: JSON.parse(saved) });
    } catch {}
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("bb-cart", JSON.stringify(state.items));
  }, [state.items]);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items: state.items,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      addItem: (item) => dispatch({ type: "ADD_ITEM", item }),
      removeItem: (cartKey) => dispatch({ type: "REMOVE_ITEM", cartKey }),
      updateQty: (cartKey, quantity) => dispatch({ type: "UPDATE_QTY", cartKey, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
      openCart: () => dispatch({ type: "OPEN" }),
      closeCart: () => dispatch({ type: "CLOSE" }),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
