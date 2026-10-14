"use client";

import React, { useState, useMemo } from "react";
import { SAMPLE_TOKENS } from "@/lib/constants";
import { TokenDiscoveryItem } from "@/lib/types";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { Search, Filter, ShieldCheck, ShieldAlert, ArrowUpDown, Copy, Check, ExternalLink, Info } from "lucide-react";

export default function TokenDiscoveryTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChain, setSelectedChain] = useState<string>("All");
  const [sortBy, setSortBy] = useState<keyof TokenDiscoveryItem>("riskScore");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const chains = ["All", "Ethereum", "Arbitrum", "Solana", "Base", "Polygon"];

  function handleCopy(id: string, address: string) {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  const filteredTokens = useMemo(() => {
    return SAMPLE_TOKENS.filter((token) => {
      const matchesSearch =
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesChain = selectedChain === "All" || token.chain === selectedChain;
      return matchesSearch && matchesChain;
    }).sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];

      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }
      if (typeof valA === "string" && typeof valB === "string") {
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return 0;
    });
  }, [searchTerm, selectedChain, sortBy, sortOrder]);

  function toggleSort(field: keyof TokenDiscoveryItem) {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  }

  return (
    <div className="w-full space-y-4">
      {/* Notice header */}
      <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-100 border border-brand-500/30 text-xs text-slate-300">
        <Info className="h-4 w-4 text-brand-accent shrink-0" />
        <p>
          <strong className="text-white">Architectural Demonstration Data:</strong> Token data and scores below showcase Dexfomo&apos;s real-time risk-scoring and liquidity analytics engine schema.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search token, symbol, or 0x contract..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-100 border border-surface-border text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        {/* Chain Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {chains.map((chain) => (
            <button
              key={chain}
              onClick={() => setSelectedChain(chain)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                selectedChain === chain
                  ? "bg-brand-600 text-white shadow-sm shadow-brand-500/20"
                  : "bg-surface-100 text-slate-400 hover:text-white border border-surface-border"
              }`}
            >
              {chain}
            </button>
          ))}
        </div>
      </div>

      {/* Tokens Table */}
      <div className="overflow-x-auto rounded-xl border border-surface-border bg-surface-100/80 backdrop-blur-sm">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-surface-border bg-surface-200/90 text-slate-400 font-medium">
            <tr>
              <th className="py-3 px-4">Asset</th>
              <th className="py-3 px-4">Chain / DEX</th>
              <th className="py-3 px-4 cursor-pointer hover:text-white" onClick={() => toggleSort("samplePriceUsd")}>
                <div className="flex items-center gap-1">
                  <span>Price (USD)</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="py-3 px-4 cursor-pointer hover:text-white" onClick={() => toggleSort("sample24hChangePct")}>
                <div className="flex items-center gap-1">
                  <span>24h Change</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="py-3 px-4 cursor-pointer hover:text-white" onClick={() => toggleSort("sampleLiquidityUsd")}>
                <div className="flex items-center gap-1">
                  <span>Liquidity</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="py-3 px-4 cursor-pointer hover:text-white" onClick={() => toggleSort("sample24hVolumeUsd")}>
                <div className="flex items-center gap-1">
                  <span>24h Volume</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="py-3 px-4 cursor-pointer hover:text-white" onClick={() => toggleSort("riskScore")}>
                <div className="flex items-center gap-1">
                  <span>Risk Score</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="py-3 px-4">Contract</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border">
            {filteredTokens.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-slate-400">
                  No assets found matching your criteria.
                </td>
              </tr>
            ) : (
              filteredTokens.map((token) => (
                <tr key={token.id} className="hover:bg-surface-hover/50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-200 border border-slate-700 font-bold text-brand-accent">
                        {token.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{token.symbol}</div>
                        <div className="text-[11px] text-slate-400 truncate max-w-[120px]">{token.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="space-y-0.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        {token.chain}
                      </span>
                      <div className="text-[11px] text-slate-400">{token.dex}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono font-medium text-white">
                    {formatCurrency(token.samplePriceUsd)}
                  </td>
                  <td className="py-3 px-4 font-mono font-medium">
                    <span
                      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[11px] ${
                        token.sample24hChangePct >= 0
                          ? "text-emerald-400 bg-emerald-500/10"
                          : "text-rose-400 bg-rose-500/10"
                      }`}
                    >
                      {formatPercentage(token.sample24hChangePct)}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-300">
                    {formatCurrency(token.sampleLiquidityUsd)}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-300">
                    {formatCurrency(token.sample24hVolumeUsd)}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            token.riskScore >= 90
                              ? "bg-emerald-500"
                              : token.riskScore >= 75
                              ? "bg-brand-cyan"
                              : "bg-amber-500"
                          }`}
                          style={{ width: `${token.riskScore}%` }}
                        ></div>
                      </div>
                      <span className="font-mono font-bold text-white">{token.riskScore}</span>
                      <span className="text-[10px] text-slate-400">/100</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[11px] text-slate-400">
                        {token.address.slice(0, 6)}...{token.address.slice(-4)}
                      </span>
                      <button
                        onClick={() => handleCopy(token.id, token.address)}
                        className="p-1 rounded hover:bg-surface-200 text-slate-400 hover:text-white transition-colors"
                        title="Copy contract address"
                        aria-label="Copy address"
                      >
                        {copiedId === token.id ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
