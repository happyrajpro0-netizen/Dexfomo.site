import type { Metadata } from "next";
import { CheckCircle2, Clock, Sparkles, Zap, Flag, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform Roadmap & Milestones — Dexfomo",
  description:
    "Follow Dexfomo's development journey from multi-chain sandbox indexing to real-time AMM websocket telemetry and algorithmic risk auditing.",
};

export default function RoadmapPage() {
  const milestones = [
    {
      quarter: "Q3 2026",
      phase: "Phase 1: Foundation & Sandbox Prototype",
      status: "Completed",
      badge: "Completed",
      items: [
        "Architectural specification for multi-chain AMM indexing (EVM & Solana).",
        "Algorithmic Risk Scoring (ARS) heuristic formulas (0–100 scale).",
        "Dark fintech UI system design & interactive sandbox explorer.",
        "Developer REST API schema definition with OpenAPI 3.0 specification.",
        "Rate-limited lead capture and administrative authentication backend.",
      ],
    },
    {
      quarter: "Q4 2026",
      phase: "Phase 2: Live Node Ingestion & Beta Engine",
      status: "In Progress",
      badge: "Active Sprint",
      items: [
        "Dedicated validator RPC node cluster deployment for Ethereum and Arbitrum.",
        "Real-time pair creation listeners for Uniswap v3 and Camelot DEXes.",
        "Private beta cohort onboarding for quant traders and liquidity providers.",
        "Interactive candlestick charting integration with sub-second candle generation.",
        "Honeypot dynamic simulation sandbox for newly minted ERC-20 tokens.",
      ],
    },
    {
      quarter: "Q1 2027",
      phase: "Phase 3: Machine Learning & Anomaly Detection",
      status: "Planned",
      badge: "Scheduled",
      items: [
        "Smart-money wallet clustering and DEX liquidity shift pattern recognition.",
        "Automated Telegram and Discord alert bots for sudden liquidity removals.",
        "Expanded non-EVM protocol support (Raydium, Meteora on Solana).",
        "Community reporting protocol with automated bounty verification.",
      ],
    },
    {
      quarter: "Q2 2027",
      phase: "Phase 4: Developer APIs & Institutional Feeds",
      status: "Planned",
      badge: "Scheduled",
      items: [
        "Commercial API tier rollout with dedicated high-throughput API keys.",
        "Sub-10ms raw mempool WebSocket data streams for institutional quants.",
        "Historical pool liquidity depth snapshots for quantitative backtesting.",
        "Audited sponsored token listings directory with strict KYC requirements.",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Flag className="h-3.5 w-3.5" />
            <span>Development Trajectory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dexfomo Engineering Roadmap
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our strategic milestones are updated continuously based on testing velocity and mainnet node performance.
          </p>
        </div>

        {/* Timeline list */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:h-full before:w-0.5 before:bg-surface-border">
          {milestones.map((m, idx) => (
            <div key={m.quarter} className="relative flex items-start gap-6 sm:gap-8 group">
              {/* Timeline marker */}
              <div
                className={`relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border transition-all ${
                  m.status === "Completed"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : m.status === "In Progress"
                    ? "bg-brand-600/20 border-brand-500 text-brand-accent shadow-lg shadow-brand-500/20"
                    : "bg-surface-100 border-slate-800 text-slate-400"
                }`}
              >
                {m.status === "Completed" ? (
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : m.status === "In Progress" ? (
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </div>

              {/* Card content */}
              <div className="flex-1 rounded-2xl bg-surface-100 border border-surface-border p-6 sm:p-8 space-y-4 group-hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-bold text-brand-cyan tracking-wider">
                      {m.quarter}
                    </span>
                    <h3 className="text-lg font-bold text-white">{m.phase}</h3>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      m.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : m.status === "In Progress"
                        ? "bg-brand-500/10 text-brand-accent border-brand-500/20"
                        : "bg-slate-800 text-slate-400 border-slate-700"
                    }`}
                  >
                    {m.badge}
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  {m.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Disclaimer */}
        <div className="p-6 rounded-xl bg-surface-200 border border-slate-800 text-xs text-slate-400 space-y-2">
          <h4 className="font-semibold text-slate-200">Forward-Looking Statement</h4>
          <p>
            Timelines and milestones are architectural targets and may adjust as smart contract standards evolve or infrastructure requirements shift. Features are released only after strict security review and regression testing.
          </p>
        </div>
      </div>
    </div>
  );
}
