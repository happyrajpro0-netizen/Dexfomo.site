import type { Metadata } from "next";
import FeatureGrid from "@/components/FeatureGrid";
import { Sparkles, ShieldCheck, Zap, Database, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform Features Matrix — Dexfomo",
  description:
    "Comprehensive matrix of implemented, beta, and upcoming features across DEX token discovery, algorithmic risk scoring, and developer APIs.",
};

export default function FeaturesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Product Matrix</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dexfomo Features & Capabilities
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every feature is honestly labeled by development status. We do not misrepresent unreleased prototypes as live features.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-3 px-6 rounded-xl bg-surface-100 border border-surface-border text-xs">
          <span className="text-slate-400 font-semibold">Status Legend:</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Implemented (Tested & Active)
          </span>
          <span className="inline-flex items-center gap-1.5 text-brand-accent font-medium">
            <span className="h-2 w-2 rounded-full bg-brand-accent" />
            In Beta (Testing Phase)
          </span>
          <span className="inline-flex items-center gap-1.5 text-slate-300 font-medium">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            Planned (On Roadmap)
          </span>
          <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Coming Soon (Active Pipeline)
          </span>
        </div>

        {/* Interactive Grid */}
        <FeatureGrid />

        {/* Honest Disclosure Note */}
        <div className="p-6 rounded-xl bg-surface-200/80 border border-slate-800 text-xs text-slate-400 space-y-2">
          <h4 className="font-semibold text-slate-200">Engineering Transparency Commitment</h4>
          <p>
            Unlike speculative tracking tools that present mock metrics or unverified volume badges, Dexfomo marks all features accurately. Features marked as Planned or Coming Soon are under active architectural development and will be released sequentially according to our published roadmap.
          </p>
        </div>
      </div>
    </div>
  );
}
