import type { Metadata } from "next";
import { Check, ShieldCheck, DollarSign, Layers, Terminal, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Model & Monetization Architecture — Dexfomo",
  description:
    "Explore Dexfomo's transparent future monetization framework, including subscription tiers, developer API access, audited sponsored listings, and enterprise data feeds.",
};

export default function BusinessModelPage() {
  const tiers = [
    {
      name: "Community Explorer",
      price: "Free",
      period: "forever",
      description: "Essential DEX analytics and public pair discovery for casual traders.",
      status: "Active Alpha",
      features: [
        "Public DEX pair discovery table",
        "Standard multi-chain AMM filters",
        "Basic contract risk scores (0-100)",
        "Standard delayed token updates (30s)",
        "Community Discord support",
      ],
      cta: "Explore Now",
      ctaHref: "/token-discovery",
      popular: false,
    },
    {
      name: "Pro Analyst",
      price: "$49",
      period: "per month (Projected)",
      description: "Sub-second streaming candlestick feeds, custom Telegram alerts, and deep liquidity depth.",
      status: "Projected Tier",
      features: [
        "Sub-second WebSocket live candles",
        "Unlimited custom Telegram & Discord alerts",
        "Full contract decompilation & bytecode audit notes",
        "Whale transaction tracking & mempool alerts",
        "Priority alpha feature testing access",
      ],
      cta: "Join Waitlist",
      ctaHref: "/#waitlist",
      popular: true,
    },
    {
      name: "Developer / Quant",
      price: "$199",
      period: "per month (Projected)",
      description: "Programmatic REST API keys, high rate-limits, and historical liquidity snapshots.",
      status: "Projected Tier",
      features: [
        "Dedicated API key (500 req/sec burst)",
        "OpenAPI 3.0 endpoints for all indexed chains",
        "Historical pool liquidity depth exports",
        "Webhooks for PairCreated & InitialLiquidity",
        "Developer Discord channel with core engineers",
      ],
      cta: "View API Specs",
      ctaHref: "/developer",
      popular: false,
    },
  ];

  const additionalRevenueStreams = [
    {
      title: "Audited Sponsored Listings",
      description:
        "Verified token projects can apply for clearly marked spotlight placements. To maintain user safety, sponsored projects must submit proof of KYC or third-party smart contract audit reports.",
      badge: "Projected / Q2 2027",
    },
    {
      title: "Enterprise Custom Nodes & Archives",
      description:
        "Dedicated high-throughput RPC node clusters, dedicated WebSocket connections, and custom historical transaction indexing for quantitative crypto hedge funds and research institutions.",
      badge: "Projected / Q3 2027",
    },
    {
      title: "Token Promotion & Launch Verification",
      description:
        "Standardized verification badges for legitimate token launchpads and DAOs that pass automated bytecode heuristics and liquidity lock requirements.",
      badge: "Projected / Q3 2027",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <DollarSign className="h-3.5 w-3.5" />
            <span>Economic Structure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dexfomo Business Model & Projections
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our future revenue model is designed around sustainable software utility: premium analytical capabilities, developer API throughput, and enterprise node access.
          </p>
        </div>

        {/* Financial Transparency Alert Box */}
        <div className="p-6 rounded-2xl bg-surface-100 border border-brand-500/30 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <ShieldCheck className="h-4 w-4 text-brand-accent" />
            <span>Financial Integrity & Projections Statement</span>
          </div>
          <p>
            Dexfomo is an early-stage startup platform currently in active alpha testing. All pricing tiers, subscription fees, and commercial monetization structures detailed on this page represent planned commercial projections, not currently recognized recurring revenue. Dexfomo does not make unsubstantiated revenue claims.
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl bg-surface-100 border p-8 flex flex-col justify-between relative transition-all ${
                tier.popular
                  ? "border-brand-500/60 shadow-xl shadow-brand-500/10 ring-1 ring-brand-500/40"
                  : "border-surface-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Most Anticipated
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-surface-200 text-slate-400 border border-slate-700">
                    {tier.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 min-h-[36px]">{tier.description}</p>

                <div className="mt-6 mb-6">
                  <span className="text-3xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-xs text-slate-400 ml-1.5">{tier.period}</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <span className="font-semibold text-slate-300 block">Includes:</span>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-300">
                      <Check className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800/80">
                <Link
                  href={tier.ctaHref}
                  className={`w-full flex items-center justify-center py-2.5 rounded-xl font-semibold text-xs transition-colors ${
                    tier.popular
                      ? "bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-500/20"
                      : "bg-surface-200 hover:bg-surface-50 text-slate-200 border border-slate-700"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Monetization Streams */}
        <div className="space-y-6 pt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Secondary Projected Revenue Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalRevenueStreams.map((stream) => (
              <div key={stream.title} className="p-6 rounded-xl bg-surface-100 border border-surface-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-brand-cyan uppercase tracking-wider px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20">
                    {stream.badge}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">{stream.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stream.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
