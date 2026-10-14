"use client";

import React, { useState } from "react";
import { Terminal, Code2, Server, Check, Copy, ArrowRight, Shield, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function DeveloperPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState<"curl" | "js" | "python">("curl");

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const endpoints = [
    {
      method: "GET",
      path: "/api/tokens",
      description: "Search and query indexed DEX liquidity pools and risk scores.",
      params: [
        { name: "chain", type: "string", description: "Filter by blockchain (e.g. Ethereum, Arbitrum, Solana, Base)" },
        { name: "q", type: "string", description: "Search by token symbol, name, or contract address" },
      ],
      sampleResponse: `{
  "tokens": [
    {
      "id": "1",
      "symbol": "FOMO",
      "name": "Dexfomo Protocol Prototype",
      "chain": "Arbitrum",
      "dex": "Camelot",
      "address": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      "samplePriceUsd": 1.48,
      "sample24hChangePct": 14.2,
      "sampleLiquidityUsd": 840000,
      "sample24hVolumeUsd": 412000,
      "riskScore": 92,
      "auditStatus": "Audited"
    }
  ],
  "totalCount": 1,
  "timestamp": "2026-10-14T05:30:00.000Z"
}`,
    },
    {
      method: "GET",
      path: "/api/market-intelligence",
      description: "Retrieve aggregated cross-chain DEX volume and TVL distribution.",
      params: [],
      sampleResponse: `{
  "overview": {
    "totalVolume24hUsd": 3140000000,
    "totalTvlUsd": 11260000000,
    "trackedPoolsCount": 42810,
    "trackedChainsCount": 6
  },
  "chainBreakdown": [
    { "name": "Ethereum", "volume24hUsd": 1420000000, "sharePct": 45.2 },
    { "name": "Solana", "volume24hUsd": 850000000, "sharePct": 27.1 }
  ]
}`,
    },
    {
      method: "GET",
      path: "/api/health",
      description: "System liveness check, uptime in seconds, and service operational status.",
      params: [],
      sampleResponse: `{
  "status": "healthy",
  "service": "dexfomo-market-intelligence",
  "domain": "https://dexfomo.site",
  "timestamp": "2026-10-14T05:30:00.000Z",
  "uptimeSeconds": 1420,
  "version": "1.0.0-alpha"
}`,
    },
    {
      method: "POST",
      path: "/api/waitlist",
      description: "Programmatic submission for developer & institutional waitlist onboarding.",
      params: [
        { name: "email", type: "string (required)", description: "Valid email address" },
        { name: "intendedUse", type: "string", description: "Trader | Developer | Fund / Institution | Token Project" },
      ],
      sampleResponse: `{
  "success": true,
  "message": "Successfully joined the Dexfomo waitlist.",
  "data": { "id": "wl_1728880000_a8f9", "email": "dev@example.com", "intendedUse": "Developer" }
}`,
    },
  ];

  const codeSnippets = {
    curl: `curl -X GET "https://dexfomo.site/api/tokens?chain=Arbitrum&q=FOMO" \\
  -H "Accept: application/json"`,
    js: `// Fetch tokens using modern fetch
const response = await fetch("https://dexfomo.site/api/tokens?chain=Arbitrum", {
  headers: { "Accept": "application/json" }
});
const data = await response.json();
console.log("Tokens found:", data.tokens);`,
    python: `import requests

url = "https://dexfomo.site/api/tokens"
params = {"chain": "Arbitrum", "q": "FOMO"}
headers = {"Accept": "application/json"}

response = requests.get(url, params=params, headers=headers)
print(response.json())`,
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Terminal className="h-3.5 w-3.5" />
            <span>Developer Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dexfomo Developer REST API
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            High-throughput, clean JSON interfaces for algorithmic trading bots, indexing pipelines, and crypto research applications.
          </p>
        </div>

        {/* Quick Start / Code Snippet */}
        <div className="rounded-2xl bg-surface-100 border border-surface-border overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-200/90">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-white">Quick Start Request</span>
            </div>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-100 border border-slate-800">
              {(["curl", "js", "python"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded uppercase transition-colors ${
                    selectedLang === lang
                      ? "bg-brand-600 text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 bg-surface-200/60 relative font-mono text-xs text-slate-300 overflow-x-auto">
            <button
              onClick={() => handleCopy("quickstart", codeSnippets[selectedLang])}
              className="absolute top-4 right-4 p-2 rounded-lg bg-surface-100 border border-slate-700 hover:text-white transition-colors"
              title="Copy snippet"
            >
              {copiedKey === "quickstart" ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-slate-400" />
              )}
            </button>
            <pre>{codeSnippets[selectedLang]}</pre>
          </div>
        </div>

        {/* Endpoint Documentation */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Active API Endpoints</h2>
            <Link
              href="/api/health"
              target="_blank"
              className="text-xs font-mono text-brand-cyan hover:text-brand-accent flex items-center gap-1"
            >
              <span>Test Live /api/health</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-6">
            {endpoints.map((ep) => (
              <div
                key={ep.path}
                className="rounded-xl bg-surface-100 border border-surface-border p-6 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-bold ${
                        ep.method === "GET"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-brand-500/20 text-brand-accent border border-brand-500/30"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="font-bold text-white">{ep.path}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(ep.path, ep.sampleResponse)}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white"
                  >
                    {copiedKey === ep.path ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    <span>Copy JSON Response</span>
                  </button>
                </div>

                <p className="text-xs text-slate-300">{ep.description}</p>

                {ep.params.length > 0 && (
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Query / Body Parameters
                    </span>
                    <div className="space-y-1.5">
                      {ep.params.map((p) => (
                        <div key={p.name} className="flex items-baseline gap-2 text-xs">
                          <code className="text-brand-cyan font-mono">{p.name}</code>
                          <span className="text-[11px] text-slate-500 font-mono">({p.type})</span>
                          <span className="text-slate-400">— {p.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-3 p-3 rounded-lg bg-surface-200 border border-slate-800 font-mono text-[11px] text-slate-400 max-h-48 overflow-y-auto">
                  <pre>{ep.sampleResponse}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Rate Limits Box */}
        <div className="p-6 rounded-xl bg-surface-200 border border-slate-800 space-y-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <Shield className="h-4 w-4 text-brand-cyan" />
            <span>Rate Limiting & Authentication</span>
          </div>
          <p>
            Public endpoints are rate-limited per IP address to ensure fair network utilization (standard limit: 60 requests/minute). High-throughput API keys with custom rate-limit allocations will be granted to approved developers via our Waitlist onboarding cohort.
          </p>
        </div>
      </div>
    </div>
  );
}
