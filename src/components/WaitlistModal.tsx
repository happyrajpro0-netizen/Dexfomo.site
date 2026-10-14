"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [intendedUse, setIntendedUse] = useState<"Trader" | "Developer" | "Fund / Institution" | "Token Project">("Trader");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, intendedUse }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to join waitlist. Please try again.");
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        router.push("/thank-you");
      }, 1200);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-surface-100 border border-surface-border p-6 sm:p-8 shadow-2xl shadow-brand-500/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-50 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-accent text-xs font-medium border border-brand-500/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Priority Platform Access</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Join the Dexfomo Waitlist
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Gain early access to our institutional-grade DEX market intelligence and algorithmic risk-scoring engine.
          </p>
        </div>

        {/* Content / Form */}
        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="text-base font-semibold text-white">You&apos;re on the list!</h4>
            <p className="text-xs text-slate-400">
              Redirecting you to the confirmation page...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                Work or Personal Email <span className="text-brand-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="analyst@domain.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-surface-200 border border-slate-700 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-white text-xs placeholder:text-slate-500 transition-colors outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Primary Area of Focus
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(["Trader", "Developer", "Fund / Institution", "Token Project"] as const).map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setIntendedUse(role)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-all ${
                      intendedUse === role
                        ? "bg-brand-500/20 border-brand-500 text-brand-accent font-semibold"
                        : "bg-surface-200 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-accent text-white text-xs font-semibold shadow-lg shadow-brand-500/20 disabled:opacity-50 transition-all cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Reserving Access...</span>
                  </>
                ) : (
                  <span>Request Early Access</span>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2">
              <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
              <span>No spam. Strict privacy policy. Unsubscribe anytime.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
