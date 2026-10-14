import type { Metadata } from "next";
import TokenDiscoveryTable from "@/components/TokenDiscoveryTable";
import { Search, ShieldAlert, Zap, Filter, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Multi-Chain Token Discovery Engine — Dexfomo",
  description:
    "Explore newly deployed liquidity pools across Uniswap, Camelot, Raydium, and Aerodrome with real-time risk scores and pool analytics.",
};

export default function TokenDiscoveryPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Search className="h-3.5 w-3.5" />
            <span>Sandbox Pair Explorer</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Multi-Chain Token & Pair Discovery
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Search, sort, and inspect liquidity pools across Ethereum, Arbitrum, Solana, Polygon, and Base. Every asset includes automated smart-contract risk scores and liquidity lock verification indicators.
          </p>
        </div>

        {/* Discovery Table */}
        <TokenDiscoveryTable />

        {/* Scoring Methodology Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-5 rounded-xl bg-surface-100 border border-surface-border space-y-2">
            <div className="text-xs font-bold text-emerald-400 font-mono">SCORE: 85 - 100 (LOW RISK)</div>
            <h4 className="text-sm font-semibold text-white">Verified & Audited Pools</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Liquidity is locked in an audited vault (e.g. Unicrypt, Team Finance), ownership is renounced or held in a verifiable multisig, and trading tax rates are zero or strictly bounded.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-surface-100 border border-surface-border space-y-2">
            <div className="text-xs font-bold text-brand-cyan font-mono">SCORE: 65 - 84 (MODERATE)</div>
            <h4 className="text-sm font-semibold text-white">Standard Verified Source</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Contract source code is verified on Etherscan or Arbiscan with standard ERC-20 / SPL interfaces, but ownership permissions (minting or fee modification) remain active.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-surface-100 border border-surface-border space-y-2">
            <div className="text-xs font-bold text-amber-400 font-mono">SCORE: 0 - 64 (ELEVATED CAUTION)</div>
            <h4 className="text-sm font-semibold text-white">Unverified / High Risk</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unverified bytecode, abnormal transfer hooks, or unlocked creator liquidity. Traders are advised to exercise maximum scrutiny.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
