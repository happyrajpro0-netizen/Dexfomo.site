"use client";

import React from "react";
import { Activity, ShieldCheck, Zap, Database, Server } from "lucide-react";

export default function LiveMetricsBanner() {
  const chains = [
    { name: "Ethereum", status: "Active", latency: "14ms", amms: "Uniswap v2/v3, Curve, Balancer" },
    { name: "Arbitrum", status: "Active", latency: "9ms", amms: "Camelot, Uniswap, Trader Joe" },
    { name: "Solana", status: "Active", latency: "18ms", amms: "Raydium, Orca, Meteora" },
    { name: "Base", status: "Active", latency: "11ms", amms: "Aerodrome, Uniswap, Baseswap" },
    { name: "Polygon", status: "Active", latency: "16ms", amms: "QuickSwap, Uniswap" },
    { name: "Optimism", status: "Active", latency: "12ms", amms: "Velodrome, Uniswap" },
  ];

  return (
    <div className="w-full border-y border-surface-border bg-surface-200/90 py-3 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* System Health Overview */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-emerald-400">INGESTION ENGINE: READY</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Multi-Chain WebSocket Architecture
          </span>
        </div>

        {/* Chain status tickers */}
        <div className="flex items-center gap-3 overflow-x-auto max-w-full pb-1 md:pb-0 text-xs text-slate-400">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-100 border border-slate-800 shrink-0"
              title={`${chain.name}: ${chain.amms} (${chain.latency})`}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-brand-cyan"></div>
              <span className="font-medium text-slate-300">{chain.name}</span>
              <span className="font-mono text-[10px] text-slate-500">{chain.latency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
