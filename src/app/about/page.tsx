import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Target, Compass, Eye, Cpu, Database, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dexfomo — Mission, Vision & Engineering Principles",
  description:
    "Dexfomo is building a crypto market-intelligence platform designed to help users explore decentralized markets, analyze tokens, and understand market activity with complete data integrity.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Compass className="h-3.5 w-3.5" />
            <span>Company & Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Dexfomo
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Building transparent, real-time decentralized exchange analytics to replace speculative noise with verifiable on-chain intelligence.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="p-8 sm:p-10 rounded-2xl bg-surface-100 border border-surface-border relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Our Mission: Discover the DEX Market with Greater Clarity
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
            The decentralized exchange ecosystem has exploded across dozens of layer-1 and layer-2 blockchains. However, fragmented liquidity, misleading vanity metrics, and wash trading make it difficult for traders, funds, and developers to determine actual market conditions.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Dexfomo was founded to engineer an honest, institutional-grade analytics suite. We provide direct mempool ingestion, automated smart-contract risk scoring, and verified pool reserves across major AMMs without advertising bias or manufactured trading volumes.
          </p>
        </div>

        {/* Core Principles */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
            Our Guiding Engineering Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface-100 border border-surface-border space-y-3">
              <div className="h-10 w-10 rounded-lg bg-brand-600/10 flex items-center justify-center text-brand-accent border border-brand-500/20">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Radical Transparency</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We clearly separate active production features from beta prototypes, and simulated sandbox testbeds from live mainnet node feeds. No fake statistics, ever.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-100 border border-surface-border space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Algorithmic Risk Verification</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tokens are not merely listed based on fee payments. Every pool undergoes automated bytecode analysis, ownership checking, and liquidity lock verification.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-100 border border-surface-border space-y-3">
              <div className="h-10 w-10 rounded-lg bg-brand-violet/10 flex items-center justify-center text-brand-violet border border-brand-violet/20">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">High-Throughput Architecture</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designed from day one for developers, algorithmic traders, and research institutions requiring predictable REST and WebSocket streaming interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="p-8 rounded-2xl bg-surface-200/60 border border-slate-800 space-y-6">
          <h3 className="text-lg font-bold text-white">Why Dexfomo Stands Apart</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block mb-0.5">Original Brand & Codebase</strong>
                <span className="text-slate-400">Custom dark fintech UI built from the ground up without cloning competitor assets.</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block mb-0.5">Multi-Chain Native</strong>
                <span className="text-slate-400">Covers EVM (Ethereum, Arbitrum, Base, Polygon) and non-EVM ecosystems like Solana.</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block mb-0.5">Objective Risk Scoring</strong>
                <span className="text-slate-400">Algorithmic scoring models ranging 0–100 evaluating pool health and contract flags.</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block mb-0.5">Strict Security Standards</strong>
                <span className="text-slate-400">Zero client-side secrets, rate-limited endpoints, and robust CSP headers.</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center pt-4">
          <Link
            href="/token-discovery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-lg shadow-brand-500/20 transition-all cursor-pointer"
          >
            <span>Explore Token Discovery Sandbox</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
