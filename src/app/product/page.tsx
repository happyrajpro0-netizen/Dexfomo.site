import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Database, Cpu, ShieldCheck, Zap, Server, Activity, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Architecture & Mechanics — Dexfomo",
  description:
    "Explore Dexfomo's multi-chain decentralized exchange ingestion architecture, risk scoring algorithms, and data streaming pipeline.",
};

export default function ProductPage() {
  const pipelineSteps = [
    {
      step: "01",
      title: "Decentralized Node Ingestion",
      description:
        "High-throughput WebSocket listeners connected to dedicated validator and full nodes across Ethereum, Arbitrum, Solana, Polygon, and Base. Every block header and pending mempool transaction is ingested instantly.",
      badge: "Real-Time Layer",
    },
    {
      step: "02",
      title: "AMM Factory & Pool Parsing",
      description:
        "Automatic event detection for PairCreated, PoolCreated, and InitialLiquidityAdded across Uniswap v2/v3, Camelot, Raydium, Aerodrome, and QuickSwap smart contracts.",
      badge: "Protocol Normalizer",
    },
    {
      step: "03",
      title: "Algorithmic Risk Scoring (ARS)",
      description:
        "Static and dynamic analysis of token bytecodes: contract ownership renouncement, proxy implementation detection, buy/sell fee limits, and automated liquidity lock verification.",
      badge: "Security Engine",
    },
    {
      step: "04",
      title: "High-Frequency Cache & Client Delivery",
      description:
        "Normalized pool snapshots are cached with edge distribution and broadcast to frontends and programmatic REST / WebSocket subscribers.",
      badge: "Delivery Tier",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Layers className="h-3.5 w-3.5" />
            <span>Platform Deep Dive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dexfomo Product Architecture
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A high-performance crypto market intelligence stack engineered to index, normalize, and score liquidity pools at wire speed.
          </p>
        </div>

        {/* High-Level Architecture Diagram / Flow */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-100 border border-surface-border">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Server className="h-5 w-5 text-brand-cyan" />
            <span>Four-Stage Market Intelligence Pipeline</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pipelineSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-surface-200/90 border border-slate-800 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-extrabold text-brand-cyan">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-500/10 text-brand-accent border border-brand-500/20">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Capabilities Breakdown */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Core Technical Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface-100 border border-surface-border space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Automated Honeypot Detection</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Executes simulated transactions against local fork state to detect excessive tax rates, blacklist functionality, or transfer restrictions before traders commit capital.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-100 border border-surface-border space-y-3">
              <div className="h-10 w-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-accent border border-brand-500/20">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Liquidity Depth & Slippage Models</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Calculates real slippage curves across concentrated liquidity AMMs (Uniswap v3 ticks) to give traders precise execution projections rather than misleading nominal reserves.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-100 border border-surface-border space-y-3">
              <div className="h-10 w-10 rounded-lg bg-brand-violet/10 flex items-center justify-center text-brand-violet border border-brand-violet/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Developer-First Schema</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open REST and WebSocket formats allow quant algorithms, backtesting pipelines, and arbitrage bots to subscribe directly to pool updates.
              </p>
            </div>
          </div>
        </div>

        {/* Honest Implementation Status Notice */}
        <div className="p-6 rounded-xl bg-surface-200 border border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="font-semibold text-slate-200 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Deployment Status & Sandbox Disclaimer</span>
          </div>
          <p>
            Dexfomo is actively progressing from its Alpha architectural preview toward full production node clusters. The public sandbox interfaces utilize testbed datasets strictly for demonstration of the schema and scoring models.
          </p>
        </div>

        {/* Next Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-gradient-to-r from-surface-100 to-surface-50 border border-surface-border">
          <div>
            <h4 className="text-sm font-bold text-white">Ready to test the discovery engine?</h4>
            <p className="text-xs text-slate-400">Inspect sandbox tokens and automated risk heuristics.</p>
          </div>
          <Link
            href="/token-discovery"
            className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors shrink-0"
          >
            Launch Token Discovery
          </Link>
        </div>
      </div>
    </div>
  );
}
