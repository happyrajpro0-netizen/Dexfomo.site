"use client";

import React, { useState } from "react";
import { PLATFORM_FEATURES } from "@/lib/constants";
import { FeatureDefinition, FeatureStatus } from "@/lib/types";
import { Shield, Sparkles, Database, Code, CheckCircle, Clock, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeatureGrid() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Analytics", "Security", "Intelligence", "API", "Monetization"];

  const filtered = filter === "All"
    ? PLATFORM_FEATURES
    : PLATFORM_FEATURES.filter((f) => f.category === filter);

  function getStatusBadge(status: FeatureStatus) {
    switch (status) {
      case "Implemented":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle className="h-3 w-3" />
            Implemented
          </span>
        );
      case "In Beta":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-accent border border-brand-500/20">
            <Zap className="h-3 w-3" />
            In Beta
          </span>
        );
      case "Planned":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            <Clock className="h-3 w-3" />
            Planned
          </span>
        );
      case "Coming Soon":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Sparkles className="h-3 w-3" />
            Coming Soon
          </span>
        );
    }
  }

  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              filter === cat
                ? "bg-brand-600 text-white font-semibold shadow-sm shadow-brand-500/20"
                : "bg-surface-100 text-slate-400 hover:text-white border border-surface-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col justify-between rounded-xl bg-surface-100/90 border border-surface-border p-6 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/5 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {feature.category}
                </span>
                {getStatusBadge(feature.status)}
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-brand-accent transition-colors">
                {feature.name}
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] text-slate-500">
                {feature.badge || "Feature Specification"}
              </span>
              <Link
                href="/features"
                className="text-brand-cyan hover:text-brand-accent flex items-center gap-1 font-medium group-hover:translate-x-0.5 transition-transform"
              >
                <span>Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
