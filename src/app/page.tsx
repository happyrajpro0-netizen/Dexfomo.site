"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { useWaitlist } from "@/context/WaitlistContext";
import LiveMetricsBanner from "@/components/LiveMetricsBanner";
import MarketPreviewWidget from "@/components/MarketPreviewWidget";
import TokenDiscoveryTable from "@/components/TokenDiscoveryTable";
import FeatureGrid from "@/components/FeatureGrid";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Search,
  Code2,
  Terminal,
  LineChart,
  Lock,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  BarChart4,
  Cpu,
} from "lucide-react";

export default function HomePage() {
  const { openWaitlist } = useWaitlist();
  const [inlineEmail, setInlineEmail] = useState("");
  const [inlineStatus, setInlineStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [inlineMsg, setInlineMsg] = useState("");

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineEmail) return;
    setInlineStatus("loading");
    setInlineMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inlineEmail, intendedUse: "Trader" }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to reserve spot");
      }
      setInlineStatus("success");
      setInlineMsg("Spot reserved! Welcome to Dexfomo early access.");
      setInlineEmail("");
    } catch (err: unknown) {
      setInlineStatus("error");
      setInlineMsg(err instanceof Error ? err.message : "Error joining waitlist");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[300px] bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-100 border border-brand-500/30 text-xs text-slate-300 shadow-sm shadow-brand-500/10">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="font-medium text-white">Dexfomo Alpha Platform</span>
              <span className="text-slate-500">•</span>
              <span className="text-brand-accent font-mono text-[11px]">Real-Time Liquidity Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {SITE_CONFIG.headline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {SITE_CONFIG.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href="/token-discovery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-brand-accent text-white font-semibold text-sm shadow-lg shadow-brand-600/30 hover:shadow-brand-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{SITE_CONFIG.primaryCTA}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={openWaitlist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-surface-100 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <span>{SITE_CONFIG.secondaryCTA}</span>
                <ChevronRight className="h-4 w-4 text-brand-cyan" />
              </button>
            </div>

            {/* Transparency Note */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Audited Smart Contract Risk Scoring</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-brand-cyan" />
                <span>Multi-Chain DEX Aggregation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 className="h-4 w-4 text-brand-400" />
                <span>Developer REST & WebSocket API</span>
              </div>
            </div>
          </div>

          {/* Interactive Market Intelligence Widget Preview */}
          <div className="mt-14 max-w-5xl mx-auto">
            <MarketPreviewWidget />
          </div>
        </div>
      </section>

      {/* Network Metrics Ticker */}
      <LiveMetricsBanner />

      {/* Interactive Token Discovery Engine Section */}
      <section className="py-16 sm:py-24 border-b border-surface-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-2">
                <Search className="h-3.5 w-3.5" />
                <span>Token Discovery & Analysis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Live Multi-Chain Pair Explorer
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
                Inspect decentralized automated market makers across Ethereum, Arbitrum, Solana, Polygon, and Base with automated risk scoring and liquidity verification.
              </p>
            </div>
            <Link
              href="/token-discovery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-white transition-colors"
            >
              <span>Open Full Explorer</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <TokenDiscoveryTable />
        </div>
      </section>

      {/* Core Platform Capabilities */}
      <section className="py-16 sm:py-24 bg-surface-200/50 border-b border-surface-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
              Platform Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
              Engineered for Precision and Clarity
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Dexfomo combines mempool indexing, decentralized pool reserves monitoring, and algorithmic safety heuristics into a unified interface.
            </p>
          </div>

          <FeatureGrid />
        </div>
      </section>

      {/* Architecture Highlights: 3 Pillars */}
      <section className="py-16 sm:py-24 border-b border-surface-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-surface-100 border border-surface-border space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-accent border border-brand-500/20">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Sub-Second AMM Indexing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct RPC node listeners capture swap events, mints, and burns from Uniswap v3, Camelot, Aerodrome, and Raydium pools in real time.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                WebSocket & RPC Telemetry
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-100 border border-surface-border space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Algorithmic Risk Scoring</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated heuristics evaluate liquidity lock contracts, honeypot trade simulation, minting privileges, and contract ownership status.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Static & Dynamic Bytecode Analysis
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-100 border border-surface-border space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet border border-brand-violet/20">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Institutional Developer API</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                REST and streaming endpoints with OpenAPI 3.0 documentation designed for quant traders, arbitrageurs, and fintech builders.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                High-Concurrency Schema
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Call To Action Section */}
      <section id="waitlist" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-surface-100 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Join Early Adopter Cohort</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Be the First to Access Dexfomo
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
            Reserve your access tier for real-time DEX alerts, deep liquidity charts, and high-frequency market intelligence feeds.
          </p>

          <form onSubmit={handleInlineSubmit} className="mt-8 max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={inlineEmail}
                onChange={(e) => setInlineEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-surface-200 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
              />
              <button
                type="submit"
                disabled={inlineStatus === "loading"}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-accent text-white text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
              >
                {inlineStatus === "loading" ? "Submitting..." : "Get Priority Access"}
              </button>
            </div>

            {inlineStatus === "success" && (
              <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 pt-1">
                <CheckCircle2 className="h-4 w-4" />
                <span>{inlineMsg}</span>
              </div>
            )}

            {inlineStatus === "error" && (
              <p className="text-xs text-rose-400 pt-1">{inlineMsg}</p>
            )}

            <p className="text-[11px] text-slate-500 pt-1">
              Zero spam. Verified cryptographic privacy. Cancel reservation anytime.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
