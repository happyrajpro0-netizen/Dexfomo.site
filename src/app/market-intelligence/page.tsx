import type { Metadata } from "next";
import MarketPreviewWidget from "@/components/MarketPreviewWidget";
import LiveMetricsBanner from "@/components/LiveMetricsBanner";
import { Activity, BarChart3, TrendingUp, Layers, AlertCircle, Database, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Market Intelligence & DEX Analytics — Dexfomo",
  description:
    "Cross-chain decentralized exchange volume distribution, liquidity concentration, and algorithmic risk telemetry across leading AMMs.",
};

export default function MarketIntelligencePage() {
  const chains = [
    { name: "Ethereum Mainnet", volume24h: "$1.42B", tvl: "$6.10B", pools: "18,400", share: "45.2%" },
    { name: "Solana", volume24h: "$850M", tvl: "$2.10B", pools: "12,200", share: "27.1%" },
    { name: "Arbitrum One", volume24h: "$420M", tvl: "$1.54B", pools: "5,900", share: "13.4%" },
    { name: "Base", volume24h: "$290M", tvl: "$880M", pools: "4,100", share: "9.2%" },
    { name: "Polygon PoS", volume24h: "$160M", tvl: "$640M", pools: "2,210", share: "5.1%" },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Activity className="h-3.5 w-3.5" />
            <span>Macro DEX Telemetry</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Decentralized Market Intelligence
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real-time insight into liquidity movements, automated market maker reserves, and cross-chain volume concentration.
          </p>
        </div>

        {/* Live Metrics Ticker Banner */}
        <LiveMetricsBanner />

        {/* Main Widget */}
        <div className="max-w-5xl mx-auto">
          <MarketPreviewWidget />
        </div>

        {/* Chain Breakdown Table */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="h-4 w-4 text-brand-cyan" />
              <span>Multi-Chain DEX Activity Overview</span>
            </h2>
            <span className="text-[11px] font-mono text-slate-400">
              Ingested across 48 AMM Factories
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-surface-border bg-surface-100/90">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-surface-border bg-surface-200/90 text-slate-400 font-medium">
                <tr>
                  <th className="py-3 px-4">Network</th>
                  <th className="py-3 px-4">24h DEX Volume</th>
                  <th className="py-3 px-4">Total Value Locked</th>
                  <th className="py-3 px-4">Tracked Pools</th>
                  <th className="py-3 px-4">Market Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {chains.map((chain) => (
                  <tr key={chain.name} className="hover:bg-surface-hover/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">{chain.name}</td>
                    <td className="py-3 px-4 font-mono text-brand-accent font-medium">{chain.volume24h}</td>
                    <td className="py-3 px-4 font-mono text-slate-300">{chain.tvl}</td>
                    <td className="py-3 px-4 font-mono text-slate-400">{chain.pools}</td>
                    <td className="py-3 px-4 font-mono text-emerald-400">{chain.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transparent Disclaimer Box */}
        <div className="max-w-5xl mx-auto p-4 rounded-xl bg-surface-200/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <AlertCircle className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
          <p>
            <strong>Sandbox Demonstration Protocol:</strong> The figures above illustrate the cross-chain aggregation schema and liquidity normalization models deployed in the Dexfomo alpha environment. Live mainnet WebSocket streams are calibrated against audited AMM contract events.
          </p>
        </div>
      </div>
    </div>
  );
}
