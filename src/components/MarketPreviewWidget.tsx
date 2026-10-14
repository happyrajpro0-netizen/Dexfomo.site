"use client";

import React, { useState } from "react";
import { BarChart3, TrendingUp, Layers, Activity, ShieldCheck, Zap } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function MarketPreviewWidget() {
  const [activeTab, setActiveTab] = useState<"volume" | "liquidity" | "protocols">("volume");

  const chainsData = [
    { name: "Ethereum", volume: 1420000000, pct: 45, color: "#627EEA" },
    { name: "Solana", volume: 850000000, pct: 27, color: "#14F195" },
    { name: "Arbitrum", volume: 420000000, pct: 14, color: "#28A0F0" },
    { name: "Base", volume: 290000000, pct: 9, color: "#0052FF" },
    { name: "Polygon", volume: 160000000, pct: 5, color: "#8247E5" },
  ];

  const protocolsData = [
    { name: "Uniswap v3", share: "38.4%", tvl: "$4.8B", chains: "ETH, ARB, BASE, POL" },
    { name: "Raydium", share: "22.1%", tvl: "$1.9B", chains: "Solana" },
    { name: "Aerodrome", share: "14.2%", tvl: "$1.2B", chains: "Base" },
    { name: "Camelot", share: "9.8%", tvl: "$640M", chains: "Arbitrum" },
    { name: "Curve Finance", share: "8.5%", tvl: "$1.8B", chains: "Multi-Chain" },
    { name: "Others", share: "7.0%", tvl: "$920M", chains: "Global AMMs" },
  ];

  return (
    <div className="rounded-2xl border border-surface-border bg-surface-100 p-6 sm:p-8 shadow-xl shadow-black/40">
      {/* Header with Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-surface-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan animate-pulse"></span>
            <h3 className="text-base font-bold text-white tracking-tight">
              Decentralized Market Intelligence Engine
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Aggregated liquidity metrics across 48 automated market maker pools
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-200 border border-slate-800">
          <button
            onClick={() => setActiveTab("volume")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeTab === "volume"
                ? "bg-brand-600 text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Volume Share
          </button>
          <button
            onClick={() => setActiveTab("protocols")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeTab === "protocols"
                ? "bg-brand-600 text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            AMM Protocols
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-6">
        {activeTab === "volume" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-surface-200 border border-slate-800">
                <span className="text-[11px] text-slate-400">Total 24h DEX Volume</span>
                <div className="text-lg font-bold text-white font-mono mt-1">$3.14B</div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                  <TrendingUp className="h-3 w-3" />
                  +4.2% (24h change)
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface-200 border border-slate-800">
                <span className="text-[11px] text-slate-400">Aggregated DEX TVL</span>
                <div className="text-lg font-bold text-white font-mono mt-1">$11.26B</div>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Locked across pools</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-200 border border-slate-800">
                <span className="text-[11px] text-slate-400">Tracked Liquidity Pools</span>
                <div className="text-lg font-bold text-white font-mono mt-1">42,810</div>
                <span className="text-[10px] text-brand-cyan mt-0.5 block">6 Chains Indexed</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-200 border border-slate-800">
                <span className="text-[11px] text-slate-400">Contract Safety Heuristics</span>
                <div className="text-lg font-bold text-emerald-400 font-mono mt-1">Active</div>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Automated Audit Rules</span>
              </div>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Network DEX Volume Distribution</span>
                <span className="font-mono text-[11px]">Normalized Sample Metrics</span>
              </div>

              {/* Progress bar stack */}
              <div className="h-3 w-full rounded-full bg-surface-200 overflow-hidden flex">
                {chainsData.map((chain) => (
                  <div
                    key={chain.name}
                    style={{ width: `${chain.pct}%`, backgroundColor: chain.color }}
                    title={`${chain.name}: ${chain.pct}%`}
                    className="h-full transition-all hover:opacity-80"
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                {chainsData.map((chain) => (
                  <div key={chain.name} className="flex items-center gap-2 text-xs">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: chain.color }}></span>
                    <span className="font-medium text-slate-300">{chain.name}</span>
                    <span className="font-mono text-slate-500 text-[11px]">{chain.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "protocols" && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-surface-border text-slate-400">
                <tr>
                  <th className="py-2.5 px-3">Protocol</th>
                  <th className="py-2.5 px-3">DEX Market Share</th>
                  <th className="py-2.5 px-3">Aggregated TVL</th>
                  <th className="py-2.5 px-3">Supported Chains</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {protocolsData.map((proto) => (
                  <tr key={proto.name} className="hover:bg-surface-200/50">
                    <td className="py-3 px-3 font-semibold text-white">{proto.name}</td>
                    <td className="py-3 px-3 font-mono text-brand-cyan">{proto.share}</td>
                    <td className="py-3 px-3 font-mono text-slate-300">{proto.tvl}</td>
                    <td className="py-3 px-3 text-slate-400">{proto.chains}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
