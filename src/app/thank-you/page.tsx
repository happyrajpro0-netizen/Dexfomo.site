import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Activity, Terminal, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — Priority Access Confirmed | Dexfomo",
  description: "Thank you for joining the Dexfomo waitlist. Your access reservation is confirmed.",
};

export default function ThankYouPage() {
  return (
    <div className="py-16 sm:py-24 flex items-center justify-center">
      <div className="mx-auto max-w-xl px-4 sm:px-6 text-center space-y-8">
        {/* Animated Check Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-xl shadow-emerald-500/10">
          <CheckCircle2 className="h-10 w-10 animate-bounce" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-accent">
            Cohort Spot Reserved
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Thank You for Joining Dexfomo
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            Your registration has been securely logged in our system. You are scheduled for priority access to our multi-chain market intelligence suite and real-time streaming APIs.
          </p>
        </div>

        {/* Next Steps Box */}
        <div className="p-6 rounded-2xl bg-surface-100 border border-surface-border text-left space-y-4">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">What happens next?</h3>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface-200 text-brand-cyan text-[10px] font-mono shrink-0">1</span>
              <span>Our team reviews registrations to allocate developer API quotas and private test slots.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface-200 text-brand-cyan text-[10px] font-mono shrink-0">2</span>
              <span>You will receive an onboarding email containing beta access instructions and documentation.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface-200 text-brand-cyan text-[10px] font-mono shrink-0">3</span>
              <span>You can start exploring our sandbox data explorer right now below.</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/token-discovery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors"
          >
            <Activity className="h-4 w-4" />
            <span>Launch Token Discovery</span>
          </Link>
          <Link
            href="/roadmap"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-100 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-xs transition-colors"
          >
            <span>View Roadmap</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
