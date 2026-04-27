"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

    const variants = {
      primary:
        "bg-[#0b2d6b] text-white hover:bg-[#0e3a87] active:bg-[#0a2657] shadow-sm hover:shadow-md",
      secondary:
        "bg-[#0ea5e9] text-white hover:bg-[#0284c7] active:bg-[#0369a1] shadow-sm hover:shadow-[0_4px_24px_-4px_rgba(14,165,233,0.4)]",
      outline:
        "border-2 border-[#0b2d6b] text-[#0b2d6b] bg-transparent hover:bg-[#eef4ff] active:bg-[#d9e7ff]",
      ghost:
        "text-[#0b2d6b] bg-transparent hover:bg-[#eef4ff] active:bg-[#d9e7ff]",
      danger:
        "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
    };

    const sizes = {
      sm: "text-sm px-4 py-2 min-h-[40px]",
      md: "text-base px-6 py-3 min-h-[48px]",
      lg: "text-lg px-8 py-4 min-h-[56px]",
      xl: "text-xl px-10 py-5 min-h-[64px]",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading…</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
